const { download, runShell } = require("@vercel/build-utils");
const path = require("path");

module.exports = async ({ workPath }) => {
  console.log("Installing Sharp for Vercel...");

  // Ensure `sharp` is available
  await runShell("npm install sharp");

  // Return build result
  return {
    output: path.join(workPath, "dist"),
  };
};
