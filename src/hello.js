const got = require('got')
const URL = 'https://api.github.com/search/repositories'
module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', URL)
    return (name, env = {}) => {
          const options = {
    json: true,
    query: {
      q: query,
      per_page: RESULT_ITEMS
    },
    headers: {
      accept: 'application/vnd.github.v3+json'
    },
    useElectronNet: false
  }
        return new Promise((resolve, reject) => {
            got(URL, options).then((response) => {
                pluginContext.console.log('info', '&&&&&&&&&&&&&&&', response)
            }))
            pluginContext.console.log('info', '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
            resolve([
                {
                    icon: 'fa-hand-spock-o',
                    title: `Hello, ${name}!`,
                    subtitle: 'Please type your name!',
                    value:'88980908******'
                },
            ])
        })
    }
}
