import { Component } from '@angular/core';
import { taskGroups } from '../../../models/task-groups';  // Vérifiez le chemin du fichier
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';  // Vérifiez le chemin du fichier

@Component({
  selector: 'app-task-group-list',
  standalone: false,
  templateUrl: './task-group-list.component.html',
  styleUrls: ['./task-group-list.component.css']  // Le "s" a été ajouté à styleUrls
})
export class TaskGroupListComponent {
  taskGroupList: taskGroups[] = TASKGROUPSLIST;  // Assignation correcte de la constante TASKGROUPSLIST
}
