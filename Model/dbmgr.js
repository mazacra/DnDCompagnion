const sqlite = require('better-sqlite3-with-prebuilds');
const db = new sqlite("./Data.db");
exports.db = db;