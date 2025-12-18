const path = require("path");

console.log("Directory Name: ", path.dirname(__filename));
console.log("File Name: ", path.basename(__filename));
console.log("Extension type: ", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined Path: ", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("Resolved Path: ", resolvePath);

const normalizePath = path.normalize("/user/ .documents/..node/projects");
console.log("Normalized Path:", normalizePath);