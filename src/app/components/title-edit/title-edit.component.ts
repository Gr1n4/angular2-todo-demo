import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/observable/fromEvent';
import 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'app-title-edit',
  template: require('pug-loader!./title-edit.component.pug')(),
  styleUrls: ['./title-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleEditComponent implements OnInit, OnDestroy {
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  @ViewChild('title') inputTitle;
  view: {
    mode: boolean
  };
  onBodyClick;
  onBodyClickSub: Subscription;
  formCreateList: FormGroup;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
    this.view = {
      mode: false
    };
    this.formCreateList = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.onBodyClick = Observable.fromEvent(document.body, 'click');
  }

  ngOnDestroy() {
    this.viewMode();
  }

  toggleMode() {
    if (this.view.mode === true) {
      this.viewMode();
    } else {
      this.editMode();
    }
  }

  editMode() {
    this.view.mode = true;
    setTimeout(() => { // TODO: Need understand how to remove timeout.
      this.inputTitle.nativeElement.focus();
    });
    this.onBodyClickSub = this.onBodyClick
      .subscribe(e => {
        if (this.checkPathViewMode(e.path)) {
          return e;
        }
        this.view.mode = false;
        if (this.onBodyClickSub) {
          this.onBodyClickSub.unsubscribe();
        }
        this._cdRef.detectChanges();
        return e;
      });
  }

  viewMode() {
    this.view.mode = false;
    if (this.onBodyClickSub) {
      this.onBodyClickSub.unsubscribe();
    }
  }

  submitForm(event) {
    if (this.formCreateList.status === 'INVALID') {
      return;
    }
    event.preventDefault();
    this.viewMode();
    this.onSubmit.emit(this.formCreateList.value.title);
    this.formCreateList.setValue({title: ''});
  }

  private checkPathViewMode(path) {
    let predicat = false;
    _.each(path, item => {
      if (item.tagName === 'APP-TITLE-EDIT') {
        predicat = true;
      }
    });
    return predicat;
  }

}
