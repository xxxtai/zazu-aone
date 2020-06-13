const got = require('got')
const URL = 'https://api.github.com/search/repositories'
module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', URL)
    return (name, env = {}) => {
        return new Promise((resolve, reject) => {
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
