const env = process.env.NODE_ENV || "staging";

let config;

if (env === "staging") {
    config = require("./config/dev");
} else if (env === "preprod") {
    config = require("./config/pre");
} else if (env === "production") {
    config = require("./config/prod");
} else {
    console.log("Unknown environment");
    process.exit(1);
}

console.log("Current environment:", config.environment);
console.log("Database:", config.database);