import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'base/components/base-list-component';
import { Shell } from 'base/components/shell';
import { SessionManager } from 'core/services/guards/session-manager';
import { ActionService } from 'features/action/services/action.service';
import { TableOptions } from 'shared-components/data-table/models/tableOptions';

@Component({
  selector: 'app-all-action',
  templateUrl: './all-action.component.html',
  styleUrls: ['./all-action.component.scss']
})
export class AllActionComponent extends BaseListComponent implements OnInit {
  // private fields
  permissions: string[];
  tableOptions: TableOptions = {
    inputUrl: {
      getAll: 'GET-ACTION',
      delete: 'DELETE-ACTION',
    },
  };
  manager: SessionManager = SessionManager.Current();
  // Services
  get Service(): ActionService { return Shell.Injector.get(ActionService); }
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getPermission();
    this.initializeTableColumns();
    this.initializeTableActions();
    this.initializeTablePermissions();
  }

  initializeTableColumns(): void {
    this.tableOptions.inputCols = [
      {
        field: 'nameEn',
        header: 'EnglishName',
        sort: true,
        sortName: 'nameEn',
        filterMode: 'text',
      },
      {
        field: 'nameAr',
        header: 'ArabicName',
        sort: true,
        sortName: 'nameAr',
        filterMode: 'text',
      },
    ];
  }
  initializeTableActions(): void {
    this.tableOptions.inputActions = [
      {
        isEdit: true,
        name: 'Edit',
        icon: 'fas fa-edit',
      },
      {
        isDelete: true,
        name: 'Delete',
        icon: 'fas fa-trash-alt',
        color: '#d63031'
      },
    ];
  }
  initializeTablePermissions(): void {
    this.tableOptions.inputPermissions = this.permissions;
    this.tableOptions.inputName = 'SERVICES-ACTIONS';
  }

  getPermission(): void {
    const permission = this.manager.GetPagePermission('SERVICES-ACTIONS');
    this.permissions = permission;
  }

}
