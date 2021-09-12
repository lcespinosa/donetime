import { ROUTES } from "helpers";
const { BACK_OFFICE } = ROUTES;

import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  ClockIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

export const getNavigationMenu = (t, currentRoute) => {
  return [
    {
      name: t("Home"),
      href: BACK_OFFICE.DASHBOARD,
      icon: HomeIcon,
      current: currentRoute.includes(BACK_OFFICE.DASHBOARD),
    },
    {
      name: t("Projects"),
      href: BACK_OFFICE.PROJECTS,
      icon: ViewGridIcon,
      current: currentRoute.includes(BACK_OFFICE.PROJECTS),
    },
    { 
      name: t("Teams"), 
      href: BACK_OFFICE.TEAMS, 
      icon: UserGroupIcon, 
      current: currentRoute.includes(BACK_OFFICE.TEAMS) 
    },
    { 
      name: t("Time Tracking"), 
      href: BACK_OFFICE.TRACKING, 
      icon: ClockIcon, 
      current: currentRoute.includes(BACK_OFFICE.TRACKING) 
    },
    { 
      name: t("Reports"), 
      href: BACK_OFFICE.REPORTS, 
      icon: CollectionIcon, 
      current: currentRoute.includes(BACK_OFFICE.REPORTS) 
    },
    { 
      name: t("Settings"), 
      href: BACK_OFFICE.SETTINGS, 
      icon: CogIcon, 
      current: currentRoute.includes(BACK_OFFICE.SETTINGS) 
    },
  ];
}