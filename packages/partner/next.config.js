/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@thanks/shared"]);

module.exports = withTM({
  reactStrictMode: true,
})
