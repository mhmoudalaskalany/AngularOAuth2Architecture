import { OnInit, Directive } from '@angular/core';
import { HttpService } from 'core/services/http/http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'core/services/alert/alert.service';
import { Shell } from './shell';
import { RoleData } from 'core/services/guards/models';
import { SessionManager } from 'core/services/guards/session-manager';
import { TranslationService } from 'core/services/localization/translation.service';

@Directive()
export abstract class BaseEditComponent implements OnInit {
  constructor(protected route: ActivatedRoute) {}
  model: any = {};
  isNew = true;
  id: string;
  role: RoleData = {};
  manager: SessionManager = SessionManager.Current();
  abstract get Service(): HttpService;
  get Alert(): AlertService {
    return Shell.Injector.get(AlertService);
  }
  get Translate(): TranslationService {
    return Shell.Injector.get(TranslationService);
  }
  get Route(): Router {
    return Shell.Injector.get(Router);
  }

  protected SubmitNew(): Observable<any> {
    return this.Service.postReq('Add', this.model);
  }
  protected SubmitUpdate(): Observable<any> {
    return this.Service.putReq('Update', this.model);
  }
  protected GetModelFromServer(id: any): Observable<any> {
    return this.Service.getHeaderReq('Get', id);
  }
  protected getUserRole(): void {
    this.role = this.manager.GetRole();
  }

  Submit(): void {
    if (this.isNew) {
      this.SubmitNew().subscribe(
        (data: any) => {
          if (data.status !== 201) {
            this.Alert.showError(data.message);
            return false;
          }
          this.Alert.showSuccess(
            this.Translate.translate.instant('Data.AddSuccess')
          );
          this.Redirect();
        },
        (error) => {
          this.Alert.showError(
            this.Translate.translate.instant('Data.AddError')
          );
        }
      );
    } else {
      this.SubmitUpdate().subscribe(
        (data: any) => {
          if (data.status !== 202) {
            this.Alert.showError(data.message);
            return false;
          }
          this.Alert.showSuccess(
            this.Translate.translate.instant('Data.UpdateSuccess')
          );
          this.Redirect();
        },
        (error) => {
          this.Alert.showError(
            this.Translate.translate.instant('Data.UpdateError')
          );
          console.log('error at submitting', error);
        }
      );
    }
  }

  getRouteParams() {
    this.route.params.subscribe((p: any) => {
      if (p.id != null && p.id !== undefined) {
        this.isNew = false;
        this.id = p.id;
        this.Get(this.id);
      }
    });
  }

  Redirect() {
    const currentRoute = this.Route.url;
    const index = currentRoute.lastIndexOf('/');
    const str = currentRoute.substring(0, index);
    this.Route.navigate([str]);
  }
  Get(id: any): void {
    this.GetModelFromServer(id).subscribe(
      (data: any) => {
        this.model = data.data;
      },
      (error) => {
        this.Alert.showError(this.Translate.translate.instant('Data.GetError'));
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getRouteParams();
  }
}
