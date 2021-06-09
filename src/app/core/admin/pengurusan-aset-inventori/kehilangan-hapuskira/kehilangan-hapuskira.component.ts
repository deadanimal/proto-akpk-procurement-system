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
  selector: "app-kehilangan-hapuskira",
  templateUrl: "./kehilangan-hapuskira.component.html",
  styleUrls: ["./kehilangan-hapuskira.component.scss"]
})
export class KehilanganHapuskiraComponent implements OnInit {
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
    let chart = am4core.create("chartdivone", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "jumlah";
    pieSeries.dataFields.category = "laporan";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer"
      }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = false;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        laporan: "Laporan Awal Kehilangan",
        jumlah: 101
      },
      {
        laporan: "Surat Perlantikan Pegawai Penyiasat",
        jumlah: 97
      },
      {
        laporan: "Laporan Akhir Kehilangan",
        jumlah: 85
      },
      {
        laporan: "Laporan Hapuskira",
        jumlah: 77
      }
    ];
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
