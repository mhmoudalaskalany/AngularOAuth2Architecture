import { Component, OnInit } from '@angular/core';
import { Shell } from 'base/components/shell';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang;
  get Localize(): TranslationService { return Shell.Injector.get(TranslationService); }
  ngOnInit() {
    this.Localize.currentLanguage.subscribe(lang => this.lang = lang);
  }



}
