import { makeAutoObservable } from "mobx";
import BatchService from "../api/batchService";
import { Batch } from "../models/batch";
import { BatchClass } from "../models/batchClass";
import { BatchGroup } from "../models/batchGroup";
import { BatchStatus } from "../models/batchStatus";
import { Box } from "../models/box";
import { store } from "./store";

export default class BatchStore {
    selectedBatch: Batch | undefined; 
    batchRegistry = new Map<number, Batch>();
    batchClassRegistry = new Map<number, BatchClass>();
    batchGroupRegistry = new Map<number, BatchGroup>();
    batchStatusRegistry = new Map<string, BatchStatus>();
    boxRegistry = new Map<number, Box>();
    batchStatus: BatchStatus|undefined

    
    constructor() {
        makeAutoObservable(this);       
    } 
    
    get batches ()  {
        let list = Array.from(this.batchRegistry.values());
        console.log(list);
        return list;
    }
    get batchClasses () {
        return Array.from(this.batchClassRegistry.values());
    }

    get batchStatuses () {
        return Array.from(this.batchStatusRegistry.values());
    }

    get batchGroups () {
        return Array.from(this.batchGroupRegistry.values());
    }

    get boxes () {
        return Array.from(this.boxRegistry.values());
    }
    //mocks goiong to api and retrieving batches
    
    loadBatches = () => {
        let batches = BatchService.getBatches();
        console.log(batches);
        batches.forEach(batch => this.batchRegistry.set(batch.id!, batch));
    }
    clearBatchRegistry = () => {
        this.batchRegistry = new Map<number, Batch>();
    }

    createNewBatchModel = () => {
        let batch : Batch = { name: BatchService.getBatchName()};
        store.imageStore.clearImageRegistries();
        this.selectedBatch = batch;
    }

    loadBatch = (id: number) => {
        let batch = this.batchRegistry.get(id);
        this.selectedBatch = batch;
        store.imageStore.clearImageRegistries();
        store.imageStore.loadBatchImages(id);
    }   
    
    setUpdateBatchStatus = (status: string) => {
        let batchStatus = this.batchStatusRegistry.get(status.toLowerCase());
        this.batchStatus = batchStatus;
    }

    loadBatchClasses = () => {
        let batchClasses = BatchService.getBatchClasses();
        batchClasses.forEach(batchClass => this.batchClassRegistry.set(batchClass.id!, batchClass));
    }

    loadBatchGroups = () => {
        let batchGroups = BatchService.getBatchGroups();
        batchGroups.forEach(batchGroup => this.batchGroupRegistry.set(batchGroup.id!, batchGroup));
    }

    loadBatchStatuses = () => {
        let batchStatuses = BatchService.getBatchStatuses();
        batchStatuses.forEach(batchStatus => this.batchStatusRegistry.set(batchStatus.status.toLowerCase(), batchStatus));
    }
    loadBoxes = () => {
        let boxes = BatchService.getBoxes();
        boxes.forEach(box => this.boxRegistry.set(box.id!, box));
    }

    createBatch = (batch:Batch) => {
        batch.batchClassId = batch.batchClass?.id;
        batch.batchGroupId = batch.batchGroup?.id;
        batch.batchStatus = this.batchStatus;
        batch.batchStatusId = this.batchStatus?.id;
        if(batch.box?.id === undefined) 
        batch.box = this.createBox(batch.box?.name!);
        batch.boxId = batch.box?.id;

        batch.id = 10;

        if(this.batchStatus?.status.toLowerCase() === 'capture')
        {
            this.batchRegistry.set(batch.id!, batch);
        }
    }

    editBatch = (batch:Batch) => {
        //because of the way Kendo updates the model you have to 
        //Reset the rootID field values from the companion objects 
        //(ie.  batchCLassId with BatchClass)
        //the rootId fields will have the ORIGINAL value (batchClassId)
        //the updated value is in the companion object (batchClass.id)      

        batch.batchClassId = batch.batchClass?.id;
        batch.batchGroupId = batch.batchGroup?.id;
        batch.batchStatus = this.batchStatus;
        batch.batchStatusId = this.batchStatus?.id;
        if(batch.box?.id === undefined) 
        batch.box = this.createBox(batch.box?.name!);
        batch.boxId = batch.box?.id;

        if(this.batchStatus?.status.toLowerCase() === 'capture')
        {
            this.batchRegistry.set(batch.id!, batch);
        }
        else
        {
            this.batchRegistry.delete(batch.id!);
        }
    }

    deleteBatch =(id: number) => {
        this.batchRegistry.delete(id);
        store.modalStore.closeModal();
    }

    createBox = (boxName: string) => {
        let box: Box = {id: 10, name: boxName};
        this.boxRegistry.set(10, box);
        return box;
    }

    clearSelectedBatch = () => {
        this.selectedBatch = undefined;
    }
}