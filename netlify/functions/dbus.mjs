// Intermediario: pide a Open Data Euskadi las posiciones de los autobuses de Dbus
// y se las entrega a la página. Guarda la respuesta unos segundos para que muchas
// visitas compartan una sola petición (así se gastan menos ejecuciones del plan gratuito).

const FEED = "https://opendata.euskadi.eus/transport/moveuskadi/dbus/gtfsrt_dbus_vehicle_positions.pb";
const SEGUNDOS_EN_CACHE = 30;

export default async () => {
  let r;
  try {
    r = await fetch(FEED);
  } catch (e) {
    return new Response("No se pudo contactar con Open Data Euskadi", { status: 502 });
  }
  if (!r.ok) {
    return new Response("Open Data Euskadi respondió " + r.status, { status: 502 });
  }
  return new Response(await r.arrayBuffer(), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Cache-Control": "public, max-age=0, must-revalidate",               // el navegador siempre pregunta
      "Netlify-CDN-Cache-Control": `public, max-age=${SEGUNDOS_EN_CACHE}`, // Netlify reutiliza la respuesta
    },
  });
};
