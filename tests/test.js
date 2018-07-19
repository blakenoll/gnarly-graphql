const shell = require("shelljs")

if (shell.exec(`new-gql-server __tester`)) {
  return shell.exec('rm -r __tester && echo "Success" && exit 0')
}

return shell.exec('echo "Failed" && exit 1')