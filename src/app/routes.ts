import {Routes} from '@angular/router';

import {BoardListComponent} from './containers/board-list/board-list.component';
import {BoardComponent} from './containers/board/board.component';
import {TaskComponent} from './containers/task/task.component';

export const routes: Routes = [
  {
    path: '',
    component: BoardListComponent
  },
  {
    path: 'board/:id',
    component: BoardComponent
  },
  {
    path: 'task/:id',
    component: TaskComponent
  }
];
