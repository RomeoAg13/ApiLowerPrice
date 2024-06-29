/**
 * 2024
 * STERAH
 */

function logDebug (page, message) {
  console.log('\x1b[35m%s\x1b[0m', `Debug 🔍: ${message}`);
}

function logServer (page, message) {
  console.log('\x1b[34m', `Server 🌐: ${message}`);
}

function logStatus (page, message) {
  console.log('\x1b[32m', `Status ✅: ${message}`);
}

function logWarning (page, message, options = {}) {
  console.warn('\x1b[33m', `Warning ⚠️: ${message}`, options);
}

function logError (page, message, options = {}) {
  console.warn('\x1b[31m', `Error 🔴: ${message}`, options);
}

module.exports = {
  logDebug,
  logStatus,
  logServer,
  logWarning,
  logError
};
