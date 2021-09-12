const ROUTES = {
  BACK_OFFICE: {
    LOGIN: "/back_office/login",
    DASHBOARD: "/back_office/dashboard",
    PROJECTS: "/back_office/projects",
    TEAMS: "/back_office/teams",
    REPORTS: "/back_office/reports",
    TRACKING: "/back_office/tracking",
    SETTINGS: "/back_office/settings",
  },
  USER: {
    PROFILE: "/user/profile",
    LOGOUT: "/user/logout",
  }
}

Object.freeze(ROUTES);

export default ROUTES;