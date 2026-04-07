/* ═══════════════════════════════════════════════════════════════════
   Mussel Rock Dashboard — your personal config
   Edit this file once. It is loaded separately from index.html so
   updates to index.html never overwrite your settings.
   ═══════════════════════════════════════════════════════════════════ */
const CONFIG = {
  // Paste your Apps Script web app deployment URL here
  GAS_URL:    'https://script.google.com/macros/s/AKfycbyP9LGo09VkMgmdH5S6A8OyE3QQDcAvpq4HBATZ6ucPWdl_FJ00VuGj55CYe8OZsxTIAQ/exec',

  // Free NIWA tides API key — register at https://developer.niwa.co.nz
  NIWA_KEY:   'vCGlyB8VgvPfxiWIyRPCXnQxuWEcielw',

  // Station coordinates
  LAT:        -36.773157,
  LNG:        175.027363,

  // Wind unit: set to match what your station transmits
  // 'kts' = knots (no conversion), 'ms' = m/s, 'kmh' = km/h
  WIND_UNIT:  'kts',

  // How many hours of wind history to fetch (max 168)
  // Set to 48 so the 48h range button has data to show.
  WIND_HOURS: 48,

  // Auto-refresh interval in minutes (0 = disabled)
  REFRESH_MIN: 5,

  SITE_NAME:  'Mussel Rock',
  TIMEZONE:   'Pacific/Auckland',
};
