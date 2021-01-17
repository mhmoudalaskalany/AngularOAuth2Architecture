import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'base/components/base-edit-component';
import { Shell } from 'base/components/shell';
import { TaskService } from 'features/task/services/task.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { LoadOptions } from 'shared-components/data-table/models/LoadOpts';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent extends BaseEditComponent implements OnInit {
  employeeInputSearch$ = new Subject();
  employees : any[];
  tickets : any[];
  
  ticketStatuses : any[];

  

  employeeId: any;
  employeeNameAr: any;
  unitName: any;
  position: any;
  EmpNumber: any;
  message = 'No Data';
  assets: any;
  //employees: any[] = [];
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
  
  get Service(): TaskService { return Shell.Injector.get(TaskService); }
  constructor(public route: ActivatedRoute) {
    super(route);
  }

  ngOnInit(): void {
    this.searchEmployeesOnType();
    this.loadLookup();
  }
  
  loadLookup()
  {
    this.getTickets();
    
  }
  
  getTickets(){
    this.Service.getTickets().subscribe((res:any)=>{
      
      if(res != null)
      {
        this.tickets = res.data;
      }
    });
  }
  setEmployee(employee) {
    this.employeeNameAr = '';
    this.position = '';
    this.unitName = '';

    if (employee != null) {
      this.employeeId = employee.id;
      this.employeeNameAr = employee.fullNameAr;
      this.position = employee.position;
      this.unitName = employee.unit?.nameAr;
      
     
      
    }
  }

  

  searchEmployeesOnType() {
    this.employeeInputSearch$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchValue: any) => {
        if (searchValue) {
          this.scrollPageNumber = 1;
          this.getPaginationOptions.pageNumber = this.scrollPageNumber;
          this.getPaginationOptions.filter.searchCriteria = searchValue;
          this.employees = [];
          this.getPagedEmployees();
        }
      });
  }
  getPagedEmployees() {
    this.Service.getPagedEmployees(this.getPaginationOptions)
      .pipe(take(1))
      .subscribe((resp: any) => {
        this.scrollPageNumber += 1;
        this.getPaginationOptions.pageNumber = this.scrollPageNumber;
        this.employees = this.employees.concat(resp.result.data);
    
      });
  }
  Submit(): void {
    
    this.model.ticketStatusId = 2;
    console.log(this.model);
    super.Submit();
  }

}