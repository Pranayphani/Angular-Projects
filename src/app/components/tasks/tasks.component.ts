// import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-tasks',
//   imports: [CommonModule],
//   templateUrl: './tasks.component.html',
//   styleUrl: './tasks.component.css'
// })
// export class TasksComponent {
//   tasks=[
//     { id: 1, name: 'Task 1', isHighLighted: false  },
//     { id: 2, name: 'Task 2', isHighLighted: false  },
//     { id: 3, name: 'Task 3' ,isHighLighted: false }
//   ];

//   isHighLighted: boolean=false;

//   @ViewChildren('taskElement', { read: ElementRef }) taskElements!: QueryList<ElementRef>;

//   //--------------using normal data binding------------
//   // markTask(id: number) {
//   //   this.tasks.forEach((task)=>{
//   //     if(task.id==id){
//   //       task.isHighLighted=!(task.isHighLighted);
//   //     }
//   //   })
//   // }
   

//   markTask(id: number){
//     this.taskElements.forEach((taskElement, index) => {
//       const task = this.tasks[index];
//       if (task.id === id) {
//         task.isHighLighted = !task.isHighLighted;
//         taskElement.nativeElement.style.color = task.isHighLighted ? 'lightblue' : 'black';
//       }
//     });
//   }

// }
