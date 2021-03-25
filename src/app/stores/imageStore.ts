import { makeAutoObservable } from "mobx";
import { BatchImage } from "../models/batchImage";
import { ImageFile } from "../models/imageFile";
import ImageService from "../api/imageService";

export default class BatchStore {
    batchImageRegistry = new Map<number, BatchImage>();
    imageFileRegistry = new Map<number, ImageFile>();

    constructor() {
        makeAutoObservable(this);       
    } 

    get batchImages ()  {
        let list = Array.from(this.batchImageRegistry.values());
        console.log(list);
        return list;
    }
    get imageFiles () {
        return Array.from(this.imageFileRegistry.values());
    }

    loadBatchImages = (batchId: number) =>{
        let batchImages = ImageService.getBatchImages(batchId);
        batchImages.forEach(image => this.batchImageRegistry.set(image.id!, image));
        let images = ImageService.getImageFiles(batchId);
        images.forEach(image => this.imageFileRegistry.set(image.id!, image));
    }

    clearBatchImageRegistry = () => {
        this.batchImageRegistry = new Map<number, BatchImage>();
    }
    clearImageFileRegistry = () => {
        this.imageFileRegistry = new Map<number, ImageFile>();
    }
    clearImageRegistries =() => {
        this.clearBatchImageRegistry();
        this.clearImageFileRegistry();
    }

}