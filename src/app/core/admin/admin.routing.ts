import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'sst',
                component: SstComponent
            },
            {
                path: 'lejar-am',
                component: LejarAmComponent
            },
            {
                path: 'buku-tunai',
                component: BukuTunaiComponent
            },
            {
                path: 'akaun-belum-bayar',
                component: AkaunBelumBayarComponent
            },
            {
                path: 'akaun-belum-terima',
                component: AkaunBelumTerimaComponent
            },
            {
                path: 'kawalan-bajet',
                component: KawalanBajetComponent
            },
            {
                path: 'perolehan',
                component: PerolehanComponent
            },
            {
                path: 'pengurusan-aset-inventori',
                loadChildren: './pengurusan-aset-inventori/pengurusan-aset-inventori.module#PengurusanAsetInventoriModule'
            },
            {
                path: 'pelaburan',
                component: PelaburanComponent
            },
            {
                path: 'pengkosan-projek',
                component: PengkosanProjekComponent
            },
            {
                path: 'sistem-maklumat-pengurusan',
                component: SistemMaklumatPengurusanComponent
            },
            {
                path: 'paparan-kewangan',
                component: PaparanKewanganComponent
            },
            {
                path: 'setup',
                loadChildren: './administration/administration.module#AdministrationModule'
            },
            {
                path: 'helpdesk',
                component: HelpdeskComponent
            }
        ]
    }
]
