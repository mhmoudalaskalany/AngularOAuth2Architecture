import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'core/services/localization/translation.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  lang;
  constructor(private translation: TranslationService) { }

  ngOnInit() {
    this.translation.currentLanguage.subscribe(lang => this.lang = lang);
  }

}
