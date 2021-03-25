import React, { useEffect, useState } from 'react';
import { useStore } from '../../app/stores/store';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { Batch } from '../../app/models/batch';
import { observer } from 'mobx-react-lite';
import { history } from '../..';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

export default observer(function BatchTable() {
    const { batchStore, modalStore } = useStore();
    const { batches,
        batchRegistry,
        batchStatusRegistry,
        loadBatches,
        deleteBatch,
        loadBatch,
        loadBatchStatuses
    } = batchStore;

    const { openModal, closeModal } = modalStore;

    const [batchId, setDeleteBatchId] = useState(0);

    useEffect(() => {
        if (batchStatusRegistry.size <= 0) {
            loadBatchStatuses();
        }
        if (batchRegistry.size <= 0) {
            loadBatches();
        }
    }, [batchRegistry.size, loadBatches, batchStatusRegistry.size, loadBatchStatuses]);

    const EditCommandCell = (props: any) => {
        return (
            <td >
                <Button
                    onClick={() => handleEdit(props.dataItem)}
                    style={{ color: '#5a9669', background: '#e4f5e8', width: '60px' }}
                >
                    Edit
            </Button>
            </td>
        );
    };

    const DeleteCommandCell = (props: any) => {
        return (
            <td >
                <Button
                    onClick={() => handleDelete(props.dataItem)}
                    style={{ background: '#fadee1', color: '#807374', width: '60px' }}
                >
                    Delete
                </Button>
            </td>
        );
    };

    function handleEdit(batch: Batch) {
        loadBatch(batch.id!);
        history.push('/batch');
    }
    function handleAdd() {
        batchStore.createNewBatchModel();
        history.push('/batch');
    }

    function handleDelete(batch: Batch) {
        openModal({ title: '', body: null });
        setDeleteBatchId(batch.id!)        
    }

    function calculateWidth(percent: number) {
        return Math.round(((window.innerWidth * .60) / 100) * percent);
    }

    return (
        <>
            <Grid
                style={{ width: 'fit-content' }}
                data={[...batches]}
            >
                <GridToolbar>
                    <Button
                        onClick={handleAdd}
                        style={{ background: '#cbe0f7', color: '#6a798a', width: '60px' }}
                    >
                        Add
                </Button>

                </GridToolbar>
                <GridColumn field="name" title="Batch Name" width={calculateWidth(25)} />
                <GridColumn field="batchClass.name" title="Batch Class" width={calculateWidth(20)} />
                <GridColumn field="batchGroup.name" title="Batch Group" width={calculateWidth(20)} />
                <GridColumn cell={EditCommandCell} width={calculateWidth(12.5)} />
                <GridColumn cell={DeleteCommandCell} width={calculateWidth(12.5)} />
            </Grid>
            <div>
                {modalStore.open && <Dialog closeIcon={false} title={'Confirm Delete'} >
                    <p style={{ margin: "25px", textAlign: "center" }}>Are you sure you want to continue?</p>
                    <DialogActionsBar>
                        <Button onClick={closeModal} > Cancel </Button>
                        <Button onClick={() => deleteBatch(batchId)} style={{ background: '#a3c7f0', color: '#6a798a' }}> Confirm </Button>
                    </DialogActionsBar>
                </Dialog>}
            </div>
        </>
    );
})