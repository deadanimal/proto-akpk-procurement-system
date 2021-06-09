import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import swal from "sweetalert2";
import Dropzone from "dropzone";
Dropzone.autoDiscover = false;

import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-paparan-kewangan",
  templateUrl: "./paparan-kewangan.component.html",
  styleUrls: ["./paparan-kewangan.component.scss"]
})
export class PaparanKewanganComponent implements OnInit {
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

  filetypes = ["pdf", "xlsx", "docx", "csv"];

  constructor(public zone: NgZone, private modalService: NgbModal) {}

  ngOnInit() {
    this.todaydate = this.yearMonthDate();

    setInterval(() => {
      this.momentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);

    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementsByClassName("dropzone-single")[0], {
      url: "/",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-single"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
        .innerHTML,
      maxFiles: 1,
      acceptedFiles: "image/*",
      init: function() {
        this.on("addedfile", function(file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      }
    });
    document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
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

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initChartOne();
    });
  }

  initChartOne() {
    let chart = am4core.create("chartdivone", am4charts.XYChart);

    // Add data
    chart.data = generateChartData();

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.fillOpacity = 0.5;
    series.tooltip.label.padding(12, 12, 12, 12);

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 1000);
      let visits = 1200;
      for (var i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );

        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }
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

  approve() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Yes, approve it!",
        cancelButtonClass: "btn btn-secondary"
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Approved!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary"
          });
        }
      });
  }

  payment() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Yes, pay it!",
        cancelButtonClass: "btn btn-secondary"
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Payment accepted!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary"
          });
        }
      });
  }
}
