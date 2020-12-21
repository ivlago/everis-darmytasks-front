import { Status } from './status.model';

export interface TaskModel {
    id?: number;
    title: string;
    status: Status;
    description: string;
}
