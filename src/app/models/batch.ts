import { BatchClass } from "./batchClass";
import { BatchGroup } from "./batchGroup";
import { BatchImage } from "./batchImage";
import { BatchStatus } from "./batchStatus";
import { Box } from "./box";

export interface Batch {  
    id?: number;
    name?: string;
    batchClassId?: number;
    batchClass?: BatchClass;
    batchGroupId?: number;
    batchGroup?: BatchGroup;
    batchStatusId?: number;
    batchStatus?: BatchStatus;
    boxId?: number;
    box?: Box;
  }