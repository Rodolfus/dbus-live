# Mapa de autobuses de Donostia (Dbus)

- `index.html`: la página del mapa (líneas, paradas y autobuses en directo).
- `banos.html`: mapa de los baños públicos de Donostia (datos del Ayuntamiento, CC BY-SA; no necesita servidor).
- `netlify/functions/dbus.mjs`: función que pide los autobuses a Open Data Euskadi.
- `netlify.toml`: configuración de Netlify.

Datos: Dbus / Open Data Euskadi. Líneas y paradas del GTFS de Dbus (vigente hasta el 16/01/2027;
hay que actualizarlo cuando caduque).
