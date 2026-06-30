# Islamic Utilities Architecture

Sidqly's Islamic Utilities are designed to support operational planning for Islamic charities, mosques, and Zakat teams. They are not intended to replace formal Shariah boards or official local moon sightings.

## Key Principles
1. **Privacy-First:** Geolocation is only requested after an explicit user click.
2. **Local Processing:** Coordinates are never transmitted to Sidqly servers for storage.
3. **Disclaimers:** Every utility displays a clear disclaimer about accuracy, calculation methods, and local authority dependence.
4. **Planning Focus:** Utilities are positioned to help with logistics (e.g., Qibla for site planning, Calendar for campaign timing), not as absolute religious rulings.

## Components
- `NamazTimingWidget`: Calculates prayer times using the AlAdhan API. Supports multiple calculation methods and caches safe preferences locally.
- `IslamicCalendarPanel`: Displays an interactive Gregorian-Hijri calendar to assist with campaign timing (Ramadan, Qurbani).
- `QiblaDirectionTool`: Calculates Qibla bearing. Requires user permission for geolocation and compass data.
- `ZakatCalculator`: A comprehensive tool for estimating Zakatable assets across multiple categories.
