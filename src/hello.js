const got = require('got')
const URL = 'https://api.github.com/search/repositories'
const RESULT_ITEMS = 10

module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', '#$%^&*(****((((()))))))))))' + URL)
    return (name, env = {}) => {
        const options = {
            json: true,
            query: {
                q: name,
                per_page: RESULT_ITEMS
            },
            headers: {
                accept: 'application/vnd.github.v3+json'
            },
            useElectronNet: false
        }
        return new Promise((resolve, reject) => {
            pluginContext.console.log('verbose', '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', {
                ping: '0099877))))))'
            })
            got(URL, options).then((response) => {
                pluginContext.console.log('info', '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%startffff4444%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

                const data = response.body.items.map((repository) => ({
                    id: repository.full_name,
                    title: repository.full_name,
                    value: repository.html_url,
                    subtitle: "moda do it"
                }))
                pluginContext.console.log('info', '&&&&&&&&&&&&&&&', {
                    data: data
                })

                resolve([
                    {
                        icon: 'fa-hand-spock-o',
                        title: `Hello, ${name}!`,
                        subtitle: 'Please type your name!',
                        value: '88980908******'
                    },
                ])
            }).catch((err) => {
                if (cachedResponse) {
                    resolve(cachedResponse)
                }
                reject(err)
            })
            pluginContext.console.log('info', '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%endend%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        })
    }
}
