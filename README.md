# Bulletin Monitor frontend

Már többször felmerült, hogy fejlesszünk egy eszközt, ami rendszeresen, vagy legalább minden reggel automatikusan átfutja a közlönyt és kulcsszavak, törvények
száma alapján küld egy üzenetet, ha van benne releváns tartalom. Ez sokat segít civil szervezeteknek abban, hogy időben tudjanak reagálni frissen megjelent,
sokszor még nem hatályos jogszabályokra.

Ez a repo a K-Monitor Bulletin Monitor (BM) projektjéhez fejlesztett frontendet tartalmazza. Felületet nyújt a feliratkozáshoz és a feliratkozás
megerősítéséhez.

## Resources

Monitor backend (PHP): https://github.com/Code-for-Hungary/bmm-backend

Scraper prototype (PHP): https://github.com/Code-for-Hungary/bmm-protoscraper

Magyar Közlöny scraper (Python): https://github.com/Code-for-Hungary/bmm-kozlonyscraper

MNV szerződés scraper (Python): https://github.com/Code-for-Hungary/bmm-mnvcontractscraper

## Konfigurálás

Másold config.sample.js-t config.js néven.

**API_URL** - az adott BM backend URL-je
