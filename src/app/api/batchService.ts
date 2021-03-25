import { Batch } from "../models/batch";
import { format} from 'date-fns';
import { BatchClass } from "../models/batchClass";
import { BatchGroup } from "../models/batchGroup";
import { Box } from "../models/box";
import { BatchStatus } from "../models/batchStatus";


const BatchService = {
    getBatches: ():Batch[] => buildBatches(),
    getBatchName: ():string => getBatchName() ,
    getBatchClasses: ():BatchClass[] => buildBatchClasses(),
    getBoxes: ():Box[] => buildBoxes(),
    getBatchStatuses: ():BatchStatus[] => buildBatchStatuses(),
    getBatchGroups: (): BatchGroup[] => buildBatchGroups()  
};


function buildBatches () {
    let batches: Batch[] = [
        { id: 1, 
            name: '20210201000001', 
            batchStatus: { id: 1, status: 'capture'}, 
            batchStatusId: 1, 
            batchClass: {id: 1, name: 'Class A'}, 
            batchClassId: 1, 
            batchGroupId: 3, 
            batchGroup: { id: 3, name: 'Group 3'},
            boxId: 1,
            box: {id: 1, name: '1234'}
        },
        { id: 2, 
            name: '20210201000001', 
            batchStatus: { id: 1, status: 'capture'}, 
            batchStatusId: 1, 
            batchClass: {id: 2, name: 'Class B'}, 
            batchClassId: 2 ,
            batchGroupId: 1, 
            batchGroup: { id: 1, name: 'Group 1'},
            boxId: 1,
            box: {id: 1, name: '1234'}
        },
        { id: 3, 
            name: '20210201000001', 
            batchStatus: { id: 1, status: 'capture'}, 
            batchStatusId: 1, 
            batchClass: {id: 3, name: 'Class C'}, 
            batchClassId: 3 ,
            batchGroupId: 2, 
            batchGroup: { id: 2, name: 'Group 2'},
            boxId: 2,
            box: {id: 2, name: '12345'}
        }
    ];

    return batches
}

function getBatchName () {
    let value = format(Date.now(), 'yyyyMMdd');
    return value + Math.floor(100000 + Math.random() * 900000).toString();
}

function buildBatchClasses ():BatchClass[] {
    return [
        {id: 1, name: 'Class A'},
        {id: 2, name: 'Class B'},
        {id: 3, name: 'Class C'}
    ]
}

function buildBatchStatuses ():BatchStatus[] {
    return [
        {id: 1, status: 'capture'},
        {id: 2, status: 'indexing'},
        {id: 3, status: 'commit'},
        {id: 4, status: 'complete'}
    ]
}

function buildBatchGroups ():BatchGroup[] {
    return [
        {id: 1, name: 'Group 1'},
        {id: 2, name: 'Group 2'},
        {id: 3, name: 'Group 3'}
    ]
}

function buildBoxes ():Box[] {
    return [
        {id: 1, name: '1234'},
        {id: 2, name: '12345'}
    ]
}

export default BatchService;