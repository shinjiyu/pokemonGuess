const { exec } = require("child_process");
const path = require("path");

const executeCommand = (command, description) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`${description} error: ${error}`);
      return;
    }
    console.log(`${description} stdout: ${stdout}`);
    if (stderr) {
      console.error(`${description} stderr: ${stderr}`);
    }
  });
};

const fs = require("fs");

const protoDir = __dirname;
const outputDir = path.join(__dirname, "../svr/src/proto");
const clientOutputDir = path.join(__dirname, "../client/src/proto");

fs.readdir(protoDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  const protoFiles = files
    .filter((file) => path.extname(file) === ".proto")
    .map((file) => path.join(protoDir, file));
  const allProtosPath = protoFiles.join(" ");
  const jsOutputPath = path.join(outputDir, "combined.js");
  const tsOutputPath = path.join(outputDir, "combined.d.ts");
  const clientJsOutputPath = path.join(clientOutputDir, "combined.js");
  const clientTsOutputPath = path.join(clientOutputDir, "combined.d.ts");

  console.log(
    `Generating combined JavaScript and TypeScript definitions for all .proto files`
  );

  executeCommand(
    `npx pbjs -t static-module -w commonjs -o ${jsOutputPath} ${allProtosPath}`,
    "pbjs"
  );
  executeCommand(`npx pbts -o ${tsOutputPath} ${jsOutputPath}`, "pbts");

  // Generate files for client directory
  executeCommand(
    `npx pbjs -t static-module -w commonjs -o ${clientJsOutputPath} ${allProtosPath}`,
    "pbjs for client"
  );
  executeCommand(
    `npx pbts -o ${clientTsOutputPath} ${clientJsOutputPath}`,
    "pbts for client"
  );
});
