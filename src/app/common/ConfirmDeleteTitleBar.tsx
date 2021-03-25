import React from 'react'
import { DialogActionsBar } from "@progress/kendo-react-dialogs";
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { Button } from '@progress/kendo-react-buttons';

export default observer(function DialogContainer() {
    const { modalStore } = useStore();
    return (

        <div className="kendo-dialog-titlebar" style={{ fontSize: '18px', lineHeight: '1.3em', backgroundColor:'#fadee1', color: '#6a798a' }}>
            Confirm Delete
        </div>
    )
})