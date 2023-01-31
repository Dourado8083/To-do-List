import { Component } from '@angular/core';
//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
/*     {
      task: 'Minha Nova Task',
      checked: true,
    },
    {
      task: 'Minha Nova Task 2',
      checked: false,
    }, */
  ];
  
 public setEmitTaskList(event: string){
 this.taskList.push({task: event, checked:false});
 }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja deletar tudo??');
    if (confirm) {
      this.taskList = [];
    }
  }
}
