import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { FormComboBox, FormInput, FormUpload } from '../../app/common/FormComponents';
import { Batch } from '../../app/models/batch';
import { history } from '../..';

export default observer(function BatchForm() {

    const { batchStore, imageStore } = useStore();
    const { selectedBatch,
        batchClassRegistry,
        loadBatchClasses,
        batchClasses,
        batchGroups,
        batchGroupRegistry,
        loadBatchGroups,
        boxes,
        loadBoxes,
        clearBatchRegistry,
        createBatch,
        editBatch
    } = batchStore;
    const {imageFiles} = imageStore;

    useEffect(() => {
        if (batchClassRegistry.size <= 0) {
            loadBatchClasses();
        }
        if (batchGroupRegistry.size <= 0) {
            loadBatchGroups();
        }
        loadBoxes();

    }, [batchClassRegistry.size, loadBatchClasses, batchGroupRegistry.size, loadBatchGroups, loadBoxes]);
    
    function handleCancelClick() {
        clearBatchRegistry();
        history.push('/capture');
    }

    function setSubmitType(isSave: boolean) {
        if (isSave) {
            batchStore.setUpdateBatchStatus('capture');
        } else {
            batchStore.setUpdateBatchStatus('indexing');
        }
    }
    // function handleFormSubmit(batch: Batch) {
    //     if(!batch.id) {
    //         createBatch(batch);
    //     } else {
    //         editBatch(batch);
    //     } 
    //     history.push('/capture');      
    // }

    function testhandle(e: any) {
        console.log(e);
        let batch: Batch = e.values;
        if(!batch.id) {
            createBatch(batch);
        } else {
            editBatch(batch);
        } 
        history.push('/capture'); 
    }
    return (
        <Form   
            onSubmitClick={testhandle}  
            initialValues={selectedBatch}
            render={(formRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'name'}
                        name={'name'}
                        label={'Batch Name'}
                        //hint={'Hint: Disabled field'}
                        disabled={true}
                        component={FormInput}
                        touched={true}
                    />
                    <Field
                        id={'batchClass'}
                        name={'batchClass'}
                        label={'Batch Class'}
                        component={FormComboBox}
                        textField={'name'}
                        valueField={'id'}
                        data={batchClasses}
                        touched={true}
                    />
                    <Field
                        id={'batchGroup'}
                        name={'batchGroup'}
                        label={'Batch Group'}
                        component={FormComboBox}
                        textField={'name'}
                        valueField={'id'}
                        data={batchGroups}
                        touched={true}
                    />
                    <Field
                        id={'box'}
                        name={'box'}
                        label={'Box'}
                        component={FormComboBox}
                        textField={'name'}
                        valueField={'id'}
                        data={boxes}
                        allowCustom={true}
                        touched={true}
                    />
                    <Field
                        key={'id'}
                        id={'id'}
                        name={'images'}
                        label={'Images'}
                        optional={false}
                        multiple={true}
                        hint={'Hint: Upload your images'}
                        component={FormUpload}
                        defaultFiles={imageFiles}
                        touched={true}
                    />
                    <div className="k-form-buttons k-buttons-end">
                        <Button
                            onClick={() => {
                                handleCancelClick()
                            }}
                            style={{ width: '60px' }}
                        >
                            Cancel
                    </Button>
                        <Button
                            type={'submit'}
                            //disabled={!formRenderProps.allowSubmit}
                            onClick={() => {
                                console.log(formRenderProps);
                                setSubmitType(true)
                            }}
                            style={{ color: '#5a9669', background: '#addeb9', width: '60px' }}
                        >
                            Save
                    </Button>
                        <Button
                            type={'submit'}
                            //disabled={!formRenderProps.allowSubmit}
                            onClick={() => {
                                //formRenderProps.allowSubmit = true;
                                setSubmitType(false)
                            }}
                            style={{ background: '#a3c7f0', color: '#6a798a', width: '60px' }}
                        >
                            Submit
                    </Button>
                    </div>
                </FormElement>
            )}
        />
    );
})