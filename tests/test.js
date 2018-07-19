const shell = require("shelljs")

if (shell.exec(`node bin/new.js __tester`)) {
  return shell.exec('rm -r __tester && echo "Success" && exit 0')
}

return shell.exec('echo "Failed" && exit 1')