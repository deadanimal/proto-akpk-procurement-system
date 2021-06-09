import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { RouterModule } from '@angular/router';

import { PengurusanAsetInventoriRoutes } from './pengurusan-aset-inventori.routing';
import { LaporanComponent } from './laporan/laporan.component';
import { SusutNilaiComponent } from './susut-nilai/susut-nilai.component';
import { KehilanganHapuskiraComponent } from './kehilangan-hapuskira/kehilangan-hapuskira.component';
import { PemeriksaanComponent } from './pemeriksaan/pemeriksaan.component';
import { PenyelenggaraanComponent } from './penyelenggaraan/penyelenggaraan.component';
import { PergerakanComponent } from './pergerakan/pergerakan.component';
import { PelupusanComponent } from './pelupusan/pelupusan.component';
import { PentadbirSistemComponent } from './pentadbir-sistem/pentadbir-sistem.component';
import { PendaftaranComponent } from './pendaftaran/pendaftaran.component';
import { CarianComponent } from './carian/carian.component';
import { PenempatanComponent } from './penempatan/penempatan.component';

@NgModule({
  declarations: [LaporanComponent, SusutNilaiComponent, KehilanganHapuskiraComponent, PemeriksaanComponent, PenyelenggaraanComponent, PergerakanComponent, PelupusanComponent, PentadbirSistemComponent, PendaftaranComponent, CarianComponent, PenempatanComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgxPrintModule,
    PaginationModule.forRoot(),
    NgbModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    LeafletModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(PengurusanAsetInventoriRoutes)
  ]
})
export class PengurusanAsetInventoriModule { }
