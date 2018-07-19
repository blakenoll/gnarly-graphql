const shell = require(shell)

if (shell.exec(`git clone https://github.com/blakenoll/gql-starter.git`)) {
  return shell.exec('echo "Success" && exit 0')
}

return shell.exec('echo "Failed" && exit 1')