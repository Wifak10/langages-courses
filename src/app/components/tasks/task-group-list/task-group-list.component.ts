import { Component, OnInit } from '@angular/core';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';
import { taskGroups } from '../../../models/task-groups';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-task-group-list',
  standalone: false,
  
  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent implements OnInit {
  taskGroupList:taskGroups[] = [];

  constructor(private taskGroupsListService: TaskGroupsListService){}

  ngOnInit(): void {
    this.taskGroupList = this.taskGroupsListService.getTaskGroupList();
  }

}
