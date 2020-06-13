const got = require('got')
const URL = 'https://api.github.com/search/repositories'
module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', '#$%^&*(****((((()))))))))))'+ URL)
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
            pluginContext.console.log('verbose', '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
            got(URL, options).then((response) => {
                        const data = response.body.items.map((repository) => ({
          id: repository.full_name,
          title: repository.full_name,
          value: repository.html_url,
          subtitle: emoji.emojify(repository.description)
        }))
                pluginContext.console.log('info', '&&&&&&&&&&&&&&&', data)
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
