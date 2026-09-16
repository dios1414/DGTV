export async function onRequest() {
  const M3U_URL = "/playlist";;

  try {
    const respuesta = await fetch(M3U_URL);

    if (!respuesta.ok) {
      return new Response("No se pudo obtener la M3U", {
        status: 502
      });
    }

    const contenido = await respuesta.text();

    return new Response(contenido, {
      headers: {
        "Content-Type": "application/x-mpegURL",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (error) {
    return new Response("Error al obtener la M3U", {
      status: 500
    });
  }
}
