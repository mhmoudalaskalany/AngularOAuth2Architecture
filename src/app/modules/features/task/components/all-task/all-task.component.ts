import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'base/components/base-list-component';
import { Shell } from 'base/components/shell';
import { SessionManager } from 'core/services/guards/session-manager';
import { TaskService } from 'features/task/services/task.service';
import { TableOptions } from 'shared-components/data-table/models/tableOptions';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.scss']
})
export class AllTaskComponent extends BaseListComponent implements OnInit {

  // private fields
  permissions: string[];
  tableOptions: TableOptions = {
    inputUrl: {
      getAll: 'GET-TASK',
      delete: 'DELETE-TASK',
    },
  };
  manager: SessionManager = SessionManager.Current();
  // Services
  get Service(): TaskService { return Shell.Injector.get(TaskService); }
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
        field: 'title',
        header: 'Title',
        sort: true,
        sortName: 'title',
        filterMode: 'text',
      },
      {
        field: 'description',
        header: 'Description',
        sort: true,
        sortName: 'description',
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
    this.tableOptions.inputName = 'SERVICES-TASKS';
  }

  getPermission(): void {
    const permission = this.manager.GetPagePermission('SERVICES-TASKS');
    this.permissions = permission;
  }

}
