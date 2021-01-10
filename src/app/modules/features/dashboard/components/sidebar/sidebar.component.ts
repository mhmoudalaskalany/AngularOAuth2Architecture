import { Component, OnInit } from '@angular/core';
import { Shell } from 'base/components/shell';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  get Localize(): TranslationService { return Shell.Injector.get(TranslationService); }
  constructor() { }

  ngOnInit() {
  }

}
