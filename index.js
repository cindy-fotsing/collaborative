const env = process.env.NODE_ENV || "staging";

const environments = {
    staging: require("./config/dev"),
    preprod: require("./config/pre"),
    production: require("./config/prod")
};

const config = environments[env];

if (!config) {
    console.log("Unknown environment:", env);
    process.exit(1);
}

console.log("-------------------------");
console.log("Application started");
console.log("Environment:", config.environment);
console.log("Database:", config.database);
console.log("-------------------------");

const User = require("./models/user");

const user1 = new User(1, "Cindy", "cindy@example.com");

console.log(user1);