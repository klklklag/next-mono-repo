/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["shared"]);

module.exports = withTM({
  reactStrictMode: true,
})
