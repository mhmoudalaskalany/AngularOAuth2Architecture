import { Component, OnInit } from '@angular/core';
import { Shell } from 'base/components/shell';
import { TranslationService } from 'core/services/localization/translation.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// tslint:disable-next-line: component-class-suffix
export class HomeComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Paypal', 'Stripe', 'Cash'];
  public doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  public doughnutChartColors: Colors[] = [
    {
      backgroundColor: [
        '#111111',
        '#00d25b',
        '#ffab00'
      ]
    }
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartChartPlugins = {
    beforeDraw: function (chart) {
      var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

      ctx.restore();
      var fontSize = 1;
      ctx.font = fontSize + 'rem sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';

      const text = '$1200';
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2.4;

      ctx.fillText(text, textX, textY);

      ctx.restore();
      var fontSize = 0.75;
      ctx.font = fontSize + 'rem sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#6c7293';

      const texts = 'Total';
      const textsX = Math.round((width - ctx.measureText(text).width) / 1.93);
      const textsY = height / 1.7;

      ctx.fillText(texts, textsX, textsY);
      ctx.save();
    }
  }
  public doughnutChartOptions: any = {
    responsive: true,
    cutoutPercentage: 70,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: false,
    }
  };

  portfolioCarousel = {
    loop: true,
    dots: false,
    margin: 10,
    items: 1,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5500,
    navText: ['<i class=\'mdi mdi-chevron-left\'></i>', '<i class=\'mdi mdi-chevron-right\'></i>']
  };
  // Services
  get Localize(): TranslationService { return Shell.Injector.get(TranslationService); }
  constructor(private translateService: TranslationService) {
  }

  toggleProBanner(event): void {
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  ngOnInit(): void {
  }


}
