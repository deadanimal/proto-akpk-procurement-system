export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const STAFFROUTES: RouteInfo[] = [
  {
    path: "/staff/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },
  {
    path: "/staff/sst",
    title: "Sale and Service Tax (SST)",
    type: "link",
    icontype: "fas fa-percentage text-default",
  },
  {
    path: "/staff/lejar-am",
    title: "Lejar Am",
    type: "link",
    icontype: "fas fa-calculator text-default",
  },
  // {
  //   path: "/staff/buku-tunai",
  //   title: "Buku Tunai",
  //   type: "link",
  //   icontype: "fas fa-book text-default",
  // },
  {
    path: "/staff/akaun-belum-bayar",
    title: "Akaun Belum Bayar",
    type: "link",
    icontype: "fas fa-coins text-default",
  },
  {
    path: "/staff/akaun-belum-terima",
    title: "Akaun Belum Terima",
    type: "link",
    icontype: "fas fa-coins text-default",
  },
  {
    path: "/staff/kawalan-bajet",
    title: "Kawalan Bajet",
    type: "link",
    icontype: "fas fa-coins text-default",
  },
  {
    path: "/staff/perolehan",
    title: "Perolehan",
    type: "link",
    icontype: "fas fa-file-invoice-dollar text-default",
  },
  {
    path: "/staff/pengurusan-aset-inventori",
    title: "Pengurusan Aset & Inventori",
    type: "sub",
    icontype: "fas fa-boxes text-default",
    collapse: "pai",
    isCollapsed: true,
    children: [
      // { path: "pentadbir-sistem", title: "Pentadbir Sistem", type: "link" },
      // { path: "pendaftaran", title: "Pendaftaran", type: "link" },
      { path: "carian", title: "Carian", type: "link" },
      { path: "penempatan", title: "Penempatan", type: "link" },
      { path: "pergerakan", title: "Pergerakan", type: "link" },
      // { path: "penyelenggaraan", title: "Penyelenggaraan", type: "link" },
      { path: "pemeriksaan", title: "Pemeriksaan", type: "link" },
      { path: "pelupusan", title: "Pelupusan", type: "link" },
      {
        path: "kehilangan-hapuskira",
        title: "Kehilangan & Hapuskira",
        type: "link",
      },
      // { path: "susut-nilai", title: "Susut Nilai", type: "link" },
      // { path: "laporan", title: "Laporan", type: "link" },
    ],
  },
  // {
  //   path: "/staff/pelaburan",
  //   title: "Pelaburan",
  //   type: "link",
  //   icontype: "fas fa-hand-holding-usd text-default",
  // },
  {
    path: "/staff/pengkosan-projek",
    title: "Pengkosan Projek",
    type: "link",
    icontype: "fas fa-tasks text-default",
  },
  // {
  //   path: "/staff/sistem-maklumat-pengurusan",
  //   title: "Sistem Maklumat Pengurusan",
  //   type: "link",
  //   icontype: "fas fa-tasks text-default",
  // },
  {
    path: "/staff/paparan-kewangan",
    title: "Paparan Kewangan",
    type: "link",
    icontype: "fas fa-coins text-default",
  },
  // {
  //   path: "/staff/setup",
  //   title: "Setup",
  //   type: "sub",
  //   icontype: "fas fa-cogs text-default",
  //   collapse: "pentadbiran",
  //   isCollapsed: true,
  //   children: [
  //     // { path: "pentadbiran-sistem", title: "Pentadbiran Sistem", type: "link" },
  //     { path: "profil-admin", title: "Profil Admin", type: "link" },
  //     // { path: "audit-transaksi", title: "Audit Transaksi", type: "link" },
  //     // { path: "kill-session", title: "Kill Session", type: "link" },
  //   ],
  // },
  {
    path: "/staff/helpdesk",
    title: "Helpdesk",
    type: "link",
    icontype: "fas fa-question text-default",
  },
];
