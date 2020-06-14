const got = require('got')
const URL = 'https://aone.alibaba-inc.com/appcenter/ajax/queryAppList?pageStart=0&pageSize=10&pageSort=GMT_MODIFIED&pageOrder=DESC&currentUser=140033&collect=N&queryType=simple&buildSysInfo=true&appResInfo=true&name=martin&excludeAppType=functionApp'

module.exports.search = (pluginContext, query) => {
    if (pluginContext) {
        pluginContext.console.log('verbose', '((((((((((((((((((())))))))))))))))))))' + query + URL)
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