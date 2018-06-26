const menus = {
  main: `
    new-gql-server <serverName> || [commands]

    To create a new GraphQL server simply run new-gql-server <serverName>

    Commands:

    -v, -version ............ show package version
    -h, -help ............... show help menu for a command`
}

module.exports = (args) => {
  console.log(menus.main)
}