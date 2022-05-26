const Sentry = require("@sentry/node");
const SentryTracing = require("@sentry/tracing");
const sentryDSN = process.env.SENTRY_DSN || "";
Sentry.init({ dsn: sentryDSN, tracesSampleRate: 1.0 });



module.exports = function ({ex, op, name}) {
        const transaction = Sentry.startTransaction({
            op,
            name,
          });
          Sentry.captureException(ex);
          transaction.finish();

        
}

