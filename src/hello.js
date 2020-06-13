module.exports = (pluginContext) => {
    pluginContext.console.log('verbose', 'hello world', {
        ping: 'pong',
    })
    return (name, env = {}) => {
        return new Promise((resolve, reject) => {
            pluginContext.console.log('info', 'test moda', {
                ping: 'pong',
            })
            resolve([
                {
                    icon: 'fa-hand-spock-o',
                    title: `Hello, ${name}!`,
                    subtitle: 'Please type your name!',
                },
            ])
        })
    }
}
