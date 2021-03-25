import { BatchImageData } from "./batchImageData";

export interface BatchImage  {
   
    id?: number;
    batchId?: number; 
    name: string; 
    imageDataId?: number;
    imageData?: BatchImageData;   
  }