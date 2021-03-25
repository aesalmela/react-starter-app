import { UploadFileStatus } from "@progress/kendo-react-upload";

export interface ImageFile {
    id: number;
    name: string;
    preview: string;
    uid: string;
    extension: string; 
    status: UploadFileStatus;
    progress: number;
    size: number;
}