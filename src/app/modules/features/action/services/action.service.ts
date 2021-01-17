import { Injectable } from '@angular/core';
import { HttpService } from 'core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService extends HttpService {
  get baseUrl(): string {
    return 'Actions/';
  }
}
