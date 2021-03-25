import { makeAutoObservable } from "mobx";

export default class CommonStore {
   menuDisabled: boolean = false;

    constructor() {
        makeAutoObservable(this);       
    }   
    //mocks goiong to api and retrieving batches
    
    setMenuDisabled = () => {
        this.menuDisabled = true;
    }
    setMenuEnabled = () => {
        this.menuDisabled = false;
    }
    
}