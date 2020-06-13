// const got = require('got')
module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
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
