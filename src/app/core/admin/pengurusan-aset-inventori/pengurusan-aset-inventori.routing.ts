import { Routes } from '@angular/router';
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

export const PengurusanAsetInventoriRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'pentadbir-sistem',
                component: PentadbirSistemComponent
            },
            {
                path: 'pendaftaran',
                component: PendaftaranComponent
            },
            {
                path: 'carian',
                component: CarianComponent
            },
            {
                path: 'penempatan',
                component: PenempatanComponent
            },
            {
                path: 'pergerakan',
                component: PergerakanComponent
            },
            {
                path: 'penyelenggaraan',
                component: PenyelenggaraanComponent
            },
            {
                path: 'pemeriksaan',
                component: PemeriksaanComponent
            },
            {
                path: 'pelupusan',
                component: PelupusanComponent
            },
            {
                path: 'kehilangan-hapuskira',
                component: KehilanganHapuskiraComponent
            },
            {
                path: 'susut-nilai',
                component: SusutNilaiComponent
            },
            {
                path: 'laporan',
                component: LaporanComponent
            }
        ]
    }
]
