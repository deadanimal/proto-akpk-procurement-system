import { Routes } from '@angular/router';
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

export const AdministrationRoutes: Routes = [
    {
        path: '',
        children: [
            // {
            //     path: 'kandungan-portal',
            //     component: KandunganPortalComponent
            // },
            // {
            //     path: 'akses-pengguna',
            //     component: AksesPenggunaComponent
            // },
            // {
            //     path: 'kata-laluan-pengguna',
            //     component: KataLaluanPenggunaComponent
            // },
            // {
            //     path: 'tanda-tangan',
            //     component: TandaTanganComponent
            // },
            // {
            //     path: 'pengumuman',
            //     component: PengumumanComponent
            // },
            // {
            //     path: 'pengguna',
            //     component: UserComponent
            // },
            {
                path: 'pentadbiran-sistem',
                component: PentadbirSistemComponent
            },
            {
                path: 'profil-admin',
                component: ProfilAdminComponent
            },
            {
                path: 'audit-transaksi',
                component: AuditTrailComponent
            },
            {
                path: 'kill-session',
                component: KillSessionComponent
            }
        ]
    }
]
