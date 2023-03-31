import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesNewComponent } from './messages-new/messages-new.component';

const routes: Routes = [
  {
    path:'',
    component: MessagesListComponent
  },
  {
    path:'new',
    component: MessagesNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
