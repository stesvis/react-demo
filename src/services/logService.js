import * as Sentry from "@sentry/react";

import { Integrations } from "@sentry/tracing";

//------------------------------------------------
const logService = {
  init,
  log,
  extractErrorMessage,
};

export default logService;
//------------------------------------------------

function init() {
  // https://sentry.io/organizations/north-star-systems/projects/project-chess/?project=6363945
  Sentry.init({
    dsn: "https://51fa7389e08440fcb4858b03927df159@o1052727.ingest.sentry.io/6363945",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

function extractErrorMessage(error) {
  if (typeof error === "string") {
    return error;
  }

  if (error?.message) {
    return error.message;
  }

  if (error?.data?.message) {
    return error.data.message;
  }

  const response = error?.response;
  if (response?.data) {
    return response.data?.data?.message ?? response.data.message;
  }

  return response?.statusText;
}
