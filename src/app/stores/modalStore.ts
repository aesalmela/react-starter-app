import { makeAutoObservable} from "mobx";

interface Modal {
    title: string,
    initialHeight?: number | undefined,
    body: JSX.Element | null;
}

export default class ModalStore {
    open = false;
    constructor() {
        makeAutoObservable(this);
      }

    modal: Modal = {
        title: '',
        initialHeight: undefined,
        body: null
    }

      openModal = (modal:Modal) => {
          this.open = true;
          this.modal = modal;
      }

      closeModal = () => {
        this.open = false;
        this.modal = {
            title: '',
            initialHeight: undefined,
            body: null
        }
    }
}