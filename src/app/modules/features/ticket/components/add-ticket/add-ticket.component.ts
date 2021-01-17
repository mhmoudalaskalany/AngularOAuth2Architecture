import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'base/components/base-edit-component';
import { Shell } from 'base/components/shell';
import { TicketService } from 'features/ticket/services/ticket.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { LoadOptions } from 'shared-components/data-table/models/LoadOpts';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent extends BaseEditComponent implements OnInit {
  employeeInputSearch$ = new Subject();
  clients: any[];
  ticketStatuses: any[];

  employeeId: any;
  employeeNameAr: any;
  unitName: any;
  position: any;
  EmpNumber: any;
  message = 'No Data';
  assets: any;
  scrollSize = 10;
  scrollPageNumber = 1;
  getPaginationOptions: LoadOptions = {
    pageSize: this.scrollSize,
    pageNumber: this.scrollPageNumber,
    searchCriteria: '',
    filter: {
      searchCriteria: '',
    },
  };

  get Service(): TicketService { return Shell.Injector.get(TicketService); }
  constructor(public route: ActivatedRoute) {
    super(route);
  }

  ngOnInit(): void {
    this.searchEmployeesOnType();

  }



  setEmployee(employee): void {
    this.employeeNameAr = '';
    this.position = '';
    this.unitName = '';

    if (employee != null) {
      this.employeeId = employee.id;
      this.employeeNameAr = employee.fullNameAr;
      this.position = employee.position;
      this.unitName = employee.unit?.nameAr;

      this.initializeEmpAssets(employee.id);
      console.log(employee);
    }
  }

  initializeEmpAssets(empNumber): void {
    this.Service.getEmpAssets(empNumber).subscribe((res: any) => {
      this.assets = res.data;
      console.log(this.assets);
      if (this.assets === null) {
        this.message = 'لا توجد بيانات للعرض';
      }
    });
  }

  searchEmployeesOnType(): void {
    this.employeeInputSearch$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchValue: any) => {
        if (searchValue) {
          this.scrollPageNumber = 1;
          this.getPaginationOptions.pageNumber = this.scrollPageNumber;
          this.getPaginationOptions.filter.searchCriteria = searchValue;
          this.clients = [];
          this.getPagedEmployees();
        }
      });
  }
  getPagedEmployees(): void {
    this.Service.getPagedEmployees(this.getPaginationOptions)
      .pipe(take(1))
      .subscribe((resp: any) => {
        this.scrollPageNumber += 1;
        this.getPaginationOptions.pageNumber = this.scrollPageNumber;
        this.clients = this.clients.concat(resp.result.data);

      });
  }
  Submit(): void {

    this.model.ticketStatusId = 2;
    console.log(this.model);
    super.Submit();
  }

}
