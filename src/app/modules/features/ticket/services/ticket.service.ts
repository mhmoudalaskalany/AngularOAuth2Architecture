import { Injectable } from '@angular/core';
import { Shell } from 'base/components/shell';
import { ConfigService } from 'core/services/config/config.service';
import { HttpService } from 'core/services/http/http.service';
import { Observable } from 'rxjs';
import { LoadOptions } from 'shared-components/data-table/models/LoadOpts';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends HttpService {
  get baseUrl(): string {
    return 'Tickets/';
  }
  get Config(): ConfigService { return Shell.Injector.get(ConfigService); }

  getPagedEmployees(opts: LoadOptions) {
    const url = this.Config.getAppUrl('UserManagementApi');
    return this.http.post(url + 'Employees/GetDropDown', opts);
  
  }
  getEmpAssets(empNumber): Observable<any> {
    //StockManagementApi
    const url = this.Config.getAppUrl('StockManagementApi');
    return this.http.get(url + 'Reports/GetCurrentEmployeeAssetForTicket/' + empNumber);
  }
}