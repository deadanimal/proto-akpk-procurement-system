import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";

import * as L from "leaflet";
import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  today = new Date();
  todaydate: string;

  momentdate;

  // leaflet
  leafletOptions = {
    layers: [
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"]
      })
    ],
    zoom: 9,
    center: L.latLng(3.0738, 101.5183)
  };
  public markers = [];

  constructor(public zone: NgZone) {}

  ngOnInit() {
    this.todaydate = this.yearMonthDate();

    this.addMarker();

    setInterval(() => {
      this.momentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  }

  yearMonthDate() {
    let year = this.today.getFullYear();

    let month = this.today.getMonth();
    let monthstring = month < 10 ? "0" + month : month.toString();

    let date = this.today.getDate();
    let datestring = date < 10 ? "0" + date : date.toString();

    return (
      this.day[this.today.getDay()] +
      " " +
      year +
      "-" +
      monthstring +
      "-" +
      datestring
    );
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart);

    let data = [];

    chart.data = [
      {
        year: "2014",
        income: 23.5,
        expenses: 21.1,
        lineColor: chart.colors.next()
      },
      {
        year: "2015",
        income: 26.2,
        expenses: 30.5
      },
      {
        year: "2016",
        income: 30.1,
        expenses: 34.9
      },
      {
        year: "2017",
        income: 20.5,
        expenses: 23.1
      },
      {
        year: "2018",
        income: 30.6,
        expenses: 28.2,
        lineColor: chart.colors.next()
      },
      {
        year: "2019",
        income: 34.1,
        expenses: 31.9
      },
      {
        year: "2020",
        income: 34.1,
        expenses: 31.9
      },
      {
        year: "2021",
        income: 34.1,
        expenses: 31.9,
        lineColor: chart.colors.next()
      },
      {
        year: "2022",
        income: 34.1,
        expenses: 31.9
      },
      {
        year: "2023",
        income: 34.1,
        expenses: 31.9
      },
      {
        year: "2024",
        income: 34.1,
        expenses: 31.9
      }
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "year";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "income";
    lineSeries.tooltipText = "income: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "lineColor";
    lineSeries.propertyFields.fill = "lineColor";

    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initChartOne();
    });
  }

  addMarker() {
    let marker1 = L.marker([2.940298, 101.47522], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-green.svg"
      })
    });
    this.markers.push(marker1);
    let marker2 = L.marker([3.196735, 101.431274], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-red.svg"
      })
    });
    this.markers.push(marker2);
    let marker3 = L.marker([3.126804, 101.862488], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/img/marker/marker-yellow.svg"
      })
    });
    this.markers.push(marker3);
  }
}
