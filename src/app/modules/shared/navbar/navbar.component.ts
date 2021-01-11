import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Shell } from 'base/components/shell';
import { AuthService } from 'core/services/auth/auth.service';
import { TranslationService } from 'core/services/localization/translation.service';
import { StorageService } from 'core/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  lang;
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  get Localize(): TranslationService { return Shell.Injector.get(TranslationService); }
  get Storage(): StorageService { return Shell.Injector.get(StorageService); }
  get AuthService(): AuthService { return Shell.Injector.get(AuthService); }
  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    this.Localize.currentLanguage.subscribe(lang => this.lang = lang);
  }

  ngOnInit(): void {
  }

  // toggle sidebar in small devices
  toggleOffCanvas(): void {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar(): void {
    const body = document.querySelector('body');
    if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  toggleRightSidebar(): void {
    document.querySelector('#right-sidebar').classList.toggle('open');
  }

  setLanguage(lang: string): void {
    this.lang = lang;
    this.Localize.setLanguage(lang);
    this.Storage.setItem('language', lang);
  }

  async logout() {
    await this.AuthService.signout();
  }

}
