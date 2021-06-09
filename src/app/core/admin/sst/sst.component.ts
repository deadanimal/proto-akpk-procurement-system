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
  selector: "app-sst",
  templateUrl: "./sst.component.html",
  styleUrls: ["./sst.component.scss"]
})
export class SstComponent implements OnInit {
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
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Dec 2019",
        donecollect: 40,
        notdonecollect: 55
      },
      {
        category: "Jan 2020",
        donecollect: 30,
        notdonecollect: 78
      },
      {
        category: "Feb 2020",
        donecollect: 27,
        notdonecollect: 40
      },
      {
        category: "Mac 2020",
        donecollect: 50,
        notdonecollect: 33
      }
    ];

    createSeries("donecollect", "Sudah Dikutip");
    createSeries("notdonecollect", "Belum Dikutip");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function(series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function(series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
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
