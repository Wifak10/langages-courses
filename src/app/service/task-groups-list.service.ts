import { Injectable } from '@angular/core';
import { taskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {

  private taskGroupList:taskGroups[] = TASKGROUPSLIST

getTaskGroupList(): taskGroups[]{
  return this.taskGroupList
}


// constructor() { }
}
