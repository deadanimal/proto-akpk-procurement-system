import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import swal from "sweetalert2";

import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-lejar-am",
  templateUrl: "./lejar-am.component.html",
  styleUrls: ["./lejar-am.component.scss"]
})
export class LejarAmComponent implements OnInit {
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
  closeResult: string;

  matawangs = [
    "Malaysia (RM)",
    "Indonesia (Rupiah)",
    "Singapura (SGD)",
    "Brunei (BND)"
  ];

  constructor(public zone: NgZone, private modalService: NgbModal) {}

  ngOnInit() {
    this.todaydate = this.yearMonthDate();

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

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    for (var i = 0; i < 10; i++) {
      createSeries("value" + i, "Series #" + i);
    }

    // Create series
    function createSeries(s, name) {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value" + s;
      series.dataFields.dateX = "date";
      series.name = name;

      let segment = series.segments.template;
      segment.interactionsEnabled = true;

      let hoverState = segment.states.create("hover");
      hoverState.properties.strokeWidth = 3;

      let dimmed = segment.states.create("dimmed");
      dimmed.properties.stroke = am4core.color("#dadada");

      segment.events.on("over", function(event) {
        processOver(event.target.parent.parent.parent);
      });

      segment.events.on("out", function(event) {
        processOut(event.target.parent.parent.parent);
      });

      let data = [];
      let value = Math.round(Math.random() * 100) + 100;
      for (var i = 1; i < 100; i++) {
        value += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5
        );
        let dataItem = { date: new Date(2018, 0, i) };
        dataItem["value" + s] = value;
        data.push(dataItem);
      }

      series.data = data;
      return series;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scrollable = true;
    chart.legend.itemContainers.template.events.on("over", function(event) {
      processOver(event.target.dataItem.dataContext);
    });

    chart.legend.itemContainers.template.events.on("out", function(event) {
      processOut(event.target.dataItem.dataContext);
    });

    function processOver(hoveredSeries) {
      hoveredSeries.toFront();

      hoveredSeries.segments.each(function(segment) {
        segment.setState("hover");
      });

      chart.series.each(function(series) {
        // if (series != hoveredSeries) {
        //   series.segments.each(function(segment) {
        //     segment.setState("dimmed");
        //   });
        //   series.bulletsContainer.setState("dimmed");
        // }
      });
    }

    function processOut(hoveredSeries) {
      // chart.series.each(function(series) {
      //   series.segments.each(function(segment) {
      //     segment.setState("default");
      //   });
      //   series.bulletsContainer.setState("default");
      // });
    }
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initChartOne();
    });
  }

  openModal(content) {
    this.modalService
      .open(content, {
        centered: true,
        size: "lg"
      })
      .result.then(
        result => {
          this.closeResult = "Closed with: $result";
        },
        reason => {
          this.closeResult = "Dismissed $this.getDismissReason(reason)";
        }
      );
  }

  archive() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Yes, archive it!",
        cancelButtonClass: "btn btn-secondary"
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Archived!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary"
          });
        }
      });
  }

  reject() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, reject it!",
        cancelButtonClass: "btn btn-secondary"
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Rejected!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary"
          });
        }
      });
  }
}
