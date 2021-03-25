import { BatchImage } from "../models/batchImage";
import { ImageFile } from "../models/imageFile";

const ImageService = {
    getBatchImages: (batchId:number):BatchImage[] => buildBatchImages(batchId),
    getImageFiles: (batchId:number): ImageFile[] => buildImageFiles(batchId)
};

function buildBatchImages (batchId: number):BatchImage[] {
    if(batchId === 1)
    return [
        {id: 1, name: 'file1.pdf', batchId: 1, imageDataId: 1 },
        {id: 2, name: 'file2.pdf', batchId: 1, imageDataId: 2},
        {id: 3, name: 'file3.pdf', batchId: 1, imageDataId: 3},
        {id: 4, name: 'file4.pdf', batchId: 1, imageDataId: 4}
    ]
    if(batchId === 2)
    return [
        {id: 5, name: 'file1.pdf', batchId: 1, imageDataId: 5 },
        {id: 6, name: 'file2.pdf', batchId: 1, imageDataId: 6},
        {id: 7, name: 'file3.pdf', batchId: 1, imageDataId: 7},
        {id: 8, name: 'file4.pdf', batchId: 1, imageDataId: 8}
    ]
    if(batchId === 3)
    return [
        {id: 9, name: 'file1.pdf', batchId: 3, imageDataId: 9 },
        {id: 10, name: 'file2.pdf', batchId: 3, imageDataId: 10},
        {id: 11, name: 'file3.pdf', batchId: 3, imageDataId: 11},
        {id: 12, name: 'file4.pdf', batchId: 3, imageDataId: 12},
        {id: 13, name: 'file5.pdf', batchId: 3, imageDataId: 13}
    ]
    return [];
}

function buildImageFiles (batchId: number):ImageFile[] {
    if(batchId === 1)
    return [        
        {id: 1, name: 'file1.pdf', preview:'somestring', uid:'1', extension: '.pdf', status: 2, progress:0, size:10000 },
        {id: 2, name: 'file2.pdf',  preview:'somestring', uid:'2', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 3, name: 'file3.pdf',  preview:'somestring', uid:'3', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 4, name: 'file4.pdf',  preview:'somestring', uid:'4', extension: '.pdf', status: 2, progress:0, size:10000}
    ]
    if(batchId === 2)
    return [
        {id: 5, name: 'file1.pdf',  preview:'somestring', uid:'5', extension: '.pdf', status: 2, progress:0, size:10000 },
        {id: 6, name: 'file2.pdf',  preview:'somestring', uid:'6', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 7, name: 'file3.pdf',  preview:'somestring', uid:'7', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 8, name: 'file4.pdf',  preview:'somestring', uid:'8', extension: '.pdf', status: 2, progress:0, size:10000}
    ]
    if(batchId === 3)
    return [
        {id: 9, name: 'file1.pdf',  preview:'somestring', uid:'9', extension: '.pdf', status: 2, progress:0, size:10000 },
        {id: 10, name: 'file2.pdf', preview:'somestring', uid:'10', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 11, name: 'file3.pdf', preview:'somestring', uid:'11', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 12, name: 'file4.pdf', preview:'somestring', uid:'12', extension: '.pdf', status: 2, progress:0, size:10000},
        {id: 13, name: 'file5.pdf', preview:'somestring', uid:'13', extension: '.pdf', status: 2, progress:0, size:10000}
    ]
    return [];
}

export default ImageService;