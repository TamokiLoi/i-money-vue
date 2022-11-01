import { ROUTE_NAME } from "@/consts/route.const";

export const ICON_NAME = {
  WALLET: "t2ico-wallet",
  TICKET_STAR: "t2ico-ticket-star",
  LOCK: "t2ico-lock",
  INFO_SQUARE: "t2ico-info-square",
  LOGOUT: "t2ico-logout",
  CATEGORY: "t2ico-category",
  CHART: "t2ico-chart",
  PLUS: "t2ico-plus",
  PRESENTATION: "t2ico-presentation",
  PROFILE: "t2ico-profile",
  FILTER: "t2ico-filter",
  USERS: "t2ico-users",
  NOTIFICATION: "t2ico-notification",
  SETTING: "t2ico-setting",
};

export const PROFILE_OPTION_ITEMS = [
  {
    name: "My wallet",
    icon: ICON_NAME.WALLET,
    route: {
      name: ROUTE_NAME.HOME,
      params: {},
    },
  },
  {
    name: "Tools",
    icon: ICON_NAME.TICKET_STAR,
    route: {
      name: ROUTE_NAME.HOME,
      params: {},
    },
  },
  {
    name: "Privacy",
    icon: ICON_NAME.LOCK,
    route: {
      name: ROUTE_NAME.HOME,
      params: {},
    },
  },
  {
    name: "About",
    icon: ICON_NAME.INFO_SQUARE,
    route: {
      name: ROUTE_NAME.HOME,
      params: {},
    },
  },
  {
    name: "Logout",
    icon: ICON_NAME.LOGOUT,
    route: {
      name: ROUTE_NAME.LOGOUT,
      params: {},
    },
  },
];

export const NAV_BOTTOM_ITEMS = [
  {
    name: "Home",
    icon: ICON_NAME.CATEGORY,
    route: {
      name: ROUTE_NAME.HOME,
      params: {},
    },
  },
  {
    name: "Report",
    icon: ICON_NAME.CHART,
    route: {
      name: ROUTE_NAME.REPORT,
      params: {},
    },
  },
  {
    name: "Bugdet",
    icon: ICON_NAME.PRESENTATION,
    route: {
      name: ROUTE_NAME.BUDGET,
      params: {},
    },
  },
  {
    name: "Profile",
    icon: ICON_NAME.PROFILE,
    route: {
      name: ROUTE_NAME.PROFILE,
      params: {},
    },
  },
];
