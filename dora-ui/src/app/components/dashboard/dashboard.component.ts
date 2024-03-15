import { Component } from '@angular/core';
import { ChartType, Chart,ChartData,ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { Inject,Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser,CommonModule, DOCUMENT } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import { BarInterface } from './data.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule,CommonModule,MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


  isBrowser: boolean;
  data: any;
  chart: any;
  dataArray: BarInterface[] = [];
  //public barChartType: ChartType = 'bar'
  options:any;

  pieChartValue: number[] = []
   

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //this.getPieChartData()
  this.isBrowser = isPlatformBrowser(this.platformId);
}

  getPieChartData(): number[]{
    return this.pieChartValue = [5, 3, 1]
  }

  // pie chart
    public pieChartType: ChartType = 'pie'
    public pieChartLabels: string[] = ['Not Implemented', 'Implemented', 'Partially Implemented'];
    public pieChartData: ChartData<'pie'> = {
      labels: this.pieChartLabels,
      datasets: [
        {
          label: "%",
          data: this.getPieChartData(),
          backgroundColor: ["#FF474C", "#90EE90", "#FFD580"],
          hoverBackgroundColor: ["darkred", "darkgreen", "darkorange"],
        }
      ]
    };
   

  //bar chart
  public barChartType: ChartType = 'bar'
  public barChartLabels: string[] = ['Identity', 'Protect and Prevent', 'Detect',
  'Respose and Recover','Lear and Evolve','Communicate'];
  public barChartOptions: ChartOptions = {
    scales: {
      y: {
          min: 0,
          max: 100
      }
    }
  };
  public barChartData: ChartData<'bar'> = {
    labels: ['Identity', 'Protect and Prevent', 'Detect',
    'Respose and Recover','Learn and Evolve','Communicate'],
    datasets: [
      {
        label: 'Completed',
        data: [70, 75, 78, 67, 89, 56],
        backgroundColor: '#90EE90',
      },
      {
        label: 'Not Completed',
        data: [10, 67, 17, 57, 89, 90],
        backgroundColor: '#FF474C',
      },
      {
        label: 'Partially Completed',
        data: [60, 60, 80, 78, 90, 43],
        backgroundColor: '#FFD580',
      }
    ],

  }
    
  
  };




