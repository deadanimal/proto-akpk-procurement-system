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
  selector: "app-perolehan",
  templateUrl: "./perolehan.component.html",
  styleUrls: ["./perolehan.component.scss"]
})
export class PerolehanComponent implements OnInit {
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
    this.zone.runOutsideAngular(() => {});
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

  validation() {
    swal
      .fire({
        title: "Luluskan permohonan perolehan ini?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Lulus",
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Gagal"
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Lulus!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });
        } else {
          // Show confirmation
          swal.fire({
            title: "Gagal!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-danger"
          });
        }
      });
  }

  email() {
    swal
      .fire({
        title: "Hantar emel pemberitahuan ini?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Ya",
        cancelButtonClass: "btn btn-secondary",
        cancelButtonText: "Tidak",
      })
      .then(result => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Emel pemberitahuan sudah dihantar!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success"
          });
        }
      });
  }
}
