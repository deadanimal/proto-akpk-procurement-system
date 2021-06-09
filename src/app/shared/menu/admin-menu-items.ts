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
export const ADMINROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-chart-bar text-default",
  },
  {
    path: "/admin/setup",
    title: "Setup",
    type: "sub",
    icontype: "fas fa-cogs text-default",
    collapse: "pentadbiran",
    isCollapsed: true,
    children: [
      { path: "pentadbiran-sistem", title: "Pentadbiran Sistem", type: "link" },
      { path: "profil-admin", title: "Profil Admin", type: "link" },
      { path: "audit-transaksi", title: "Audit Transaksi", type: "link" },
      { path: "kill-session", title: "Kill Session", type: "link" },
    ],
  },
  {
    path: "/admin/helpdesk",
    title: "Helpdesk",
    type: "link",
    icontype: "fas fa-question text-default",
  },
];
