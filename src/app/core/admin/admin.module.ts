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

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { SstComponent } from './sst/sst.component';
import { LejarAmComponent } from './lejar-am/lejar-am.component';
import { BukuTunaiComponent } from './buku-tunai/buku-tunai.component';
import { AkaunBelumBayarComponent } from './akaun-belum-bayar/akaun-belum-bayar.component';
import { AkaunBelumTerimaComponent } from './akaun-belum-terima/akaun-belum-terima.component';
import { KawalanBajetComponent } from './kawalan-bajet/kawalan-bajet.component';
import { PerolehanComponent } from './perolehan/perolehan.component';
import { PelaburanComponent } from './pelaburan/pelaburan.component';
import { PengkosanProjekComponent } from './pengkosan-projek/pengkosan-projek.component';
import { SistemMaklumatPengurusanComponent } from './sistem-maklumat-pengurusan/sistem-maklumat-pengurusan.component';
import { PaparanKewanganComponent } from './paparan-kewangan/paparan-kewangan.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HelpdeskComponent,
    SstComponent,
    LejarAmComponent,
    BukuTunaiComponent,
    AkaunBelumBayarComponent,
    AkaunBelumTerimaComponent,
    KawalanBajetComponent,
    PerolehanComponent,
    PelaburanComponent,
    PengkosanProjekComponent,
    SistemMaklumatPengurusanComponent,
    PaparanKewanganComponent,
  ],
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
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
