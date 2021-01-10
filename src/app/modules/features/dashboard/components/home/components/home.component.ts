import { Component, OnInit } from '@angular/core';
import { Shell } from 'base/components/shell';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class HomeComponent implements OnInit {
  // Services
  get Localize(): TranslationService { return Shell.Injector.get(TranslationService); }
  constructor(private translateService: TranslationService) {
  }

  ngOnInit(): void {

  }
}
