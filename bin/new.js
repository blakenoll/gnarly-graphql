#! /usr/bin/env node
const shell = require("shelljs")

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

const appName = process.argv[2]

shell.echo(`Creating new GraphQL server in /${appName}`)

// clone boilerplate code from github
shell.exec(`git clone https://github.com/blakenoll/gql-starter.git ${appName}`)

shell.echo('Installing dependencies')
if (shell.which('yarn')) {
  shell.exec(`cd ${appName} && yarn install`)
} else {
  shell.exec(`cd ${appName} && npm install`)
}

shell.echo('Cleaning up...')
shell.exec(`cd ${appName} && git remote remove origin`)

shell.echo('Finished 👍')

shell.echo(`
  To start up dev server run: \n
  1. cd ${appName}
  
  2. yarn dev
  
  or if using npm:
  
  npm run dev

`)







