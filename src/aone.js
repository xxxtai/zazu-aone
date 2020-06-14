const got = require('got')
const URL = 'https://martin.alibaba-inc.com/pinleicoupon/campaign/getIndustries'

module.exports.search = (pluginContext, query) => {
    if (pluginContext) {
        pluginContext.console.log('verbose', '((((((((((((((((((())))))))))))))))))))' + query)
    }
    console.log("%%%%%%%query:" + query)
    return new Promise((resolve, reject) => {
        got(URL).then((response) => {
            if (pluginContext) {
                pluginContext.console.log('verbose', "moda:------------" + JSON.stringify(response.body))
            }
            console.log("moda:------------" + JSON.stringify(response.body))
            const data = [{
                id: "test",
                title: "test title",
                subtitle: JSON.stringify(response.body)
            }]
            resolve(data)
        }).catch((err) => {
            if (cachedResponse) {
                resolve(cachedResponse)
            }
            reject(err)
        })
    })
}