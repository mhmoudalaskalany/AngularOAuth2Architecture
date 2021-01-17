import { Injectable } from '@angular/core';
import { Shell } from 'base/components/shell';
import { ConfigService } from 'core/services/config/config.service';
import { HttpService } from 'core/services/http/http.service';
import { LoadOptions } from 'shared-components/data-table/models/LoadOpts';

@Injectable({
  providedIn: 'root'
})
export class InternalTaskService extends HttpService {
  get baseUrl(): string {
    return 'InternalTasks/';
  }
  get Config(): ConfigService { return Shell.Injector.get(ConfigService); }

  getPagedEmployees(opts: LoadOptions) {
    const url = this.Config.getAppUrl('UserManagementApi');
    return this.http.post(url + 'Employees/GetDropDown', opts);
  
  }
}