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
import { QuillModule } from 'ngx-quill'

import { RouterModule } from '@angular/router';

import { AdministrationRoutes } from './administration.routing';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { UserComponent } from './user/user.component';
import { KandunganPortalComponent } from './kandungan-portal/kandungan-portal.component';
import { AksesPenggunaComponent } from './akses-pengguna/akses-pengguna.component';
import { KataLaluanPenggunaComponent } from './kata-laluan-pengguna/kata-laluan-pengguna.component';
import { TandaTanganComponent } from './tanda-tangan/tanda-tangan.component';
import { PengumumanComponent } from './pengumuman/pengumuman.component';
import { KillSessionComponent } from './kill-session/kill-session.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { PentadbirSistemComponent } from './pentadbir-sistem/pentadbir-sistem.component';

@NgModule({
  declarations: [
    AuditTrailComponent,
    UserComponent,
    KandunganPortalComponent,
    AksesPenggunaComponent,
    KataLaluanPenggunaComponent,
    TandaTanganComponent,
    PengumumanComponent,
    KillSessionComponent,
    ProfilAdminComponent,
    PentadbirSistemComponent
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
    QuillModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(AdministrationRoutes)
  ]
})
export class AdministrationModule { }
