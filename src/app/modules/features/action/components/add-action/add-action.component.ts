import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'base/components/base-edit-component';
import { Shell } from 'base/components/shell';
import { ActionService } from 'features/action/services/action.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.scss']
})
export class AddActionComponent extends BaseEditComponent implements OnInit {

  get Service(): ActionService { return Shell.Injector.get(ActionService); }
  constructor(public route: ActivatedRoute) {
    super(route);
  }

  ngOnInit(): void {
  }

}
