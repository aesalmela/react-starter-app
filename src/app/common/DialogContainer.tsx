import { observer } from 'mobx-react-lite';
import React from 'react'
import { Dialog } from '@progress/kendo-react-dialogs';
import { useStore } from '../stores/store';

export default observer (function DialogContainer() {
    const {modalStore} = useStore();

    return (
        <div>
        {modalStore.open && <Dialog title={modalStore.modal.title} onClose={modalStore.closeModal}>
            {modalStore.modal.body}
        </Dialog> }
        </div>
    )
})