import { Injectable } from '@angular/core';
import { Shell } from 'base/components/shell';
import { ConfigService } from 'core/services/config/config.service';
import { HttpService } from 'core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService extends HttpService {
  get baseUrl(): string {
    return 'TaskTypes/';
  }

  
}