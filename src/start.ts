import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

/**
 * De formulieren draaien op server functions, en dat zijn gewone same-origin
 * RPC-endpoints. Zonder deze middleware kan een willekeurige andere site ze
 * namens een bezoeker aanroepen en zo mail via ons Resend-account versturen.
 */
const csrfMiddleware = createMiddleware().server(async ({ request, serverFnMeta, next }) => {
  if (!serverFnMeta || !["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
    return next();
  }

  const url = new URL(request.url);
  const origin = request.headers.get("origin");
  const secFetchSite = request.headers.get("sec-fetch-site");

  if (secFetchSite === "cross-site" || (origin && origin !== url.origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  return next();
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware, errorMiddleware],
}));
