import { Component, Input } from '@angular/core';
import { taskGroups } from '../../../models/task-groups';

@Component({
  selector: 'app-task-group',
  standalone: false,
  
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.css'
})
export class TaskGroupComponent {
@Input () taskgroup!:taskGroups
}
