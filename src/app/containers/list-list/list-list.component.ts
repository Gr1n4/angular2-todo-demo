import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {IList, List} from '../../models/list';

import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-list-list',
  template: require('pug-loader!./list-list.component.pug')(),
  styleUrls: ['./list-list.component.sass']
})
export class ListListComponent implements OnInit {
  lists$: Observable<IList[]>;
  lists: IList[];

  constructor(
    private _route: ActivatedRoute,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    this._route.params
      .subscribe(params => this.initListByBoardId(params.id));
  }

  private initListByBoardId(id: string) {
    this.lists$ = this.listService.getListsByBoard(Number(id));
    this.lists$
      .subscribe((lists: IList[]) => {
        this.lists = lists;
      });
  }
}
