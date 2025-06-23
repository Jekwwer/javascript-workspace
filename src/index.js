// src/index.js: Example entry point.
const { greet } = require('./utils');

/**
 * Entry point: reads optional CLI argument and prints a greeting.
 *
 * @returns {void}
 * @throws {Error} If an unexpected error occurs
 */
function main() {
  const name = process.argv[2] || 'World';
  console.log(greet(name));
}

try {
  main();
} catch (err) {
  console.error('Unexpected error:', err);
  process.exit(1);
}
