import { Task } from "./task";

export interface taskGroups {
    id:              string;
    titreGroupTasks: string;
    task:            Task[];
    statut:          boolean;
}
