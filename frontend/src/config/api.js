// API Configuration
const BASE_API_URL = 'http://127.0.0.1:8000/';

const API_ENDPOINTS = {
  LOGIN: `${BASE_API_URL}auth/login`,
  LOGOUT: `${BASE_API_URL}auth/logout`,
  // Dashboard metrics endpoint for chart data
  MENU_DASHBOARD: `${BASE_API_URL}menu/menu_dashboard`,
  // Legacy endpoint (keeping for backward compatibility)
  METRICS: `${BASE_API_URL}menu/dashboard`,
};

export default API_ENDPOINTS;