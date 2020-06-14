const got = require('got')
const URL = 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=31729_1440_31325_21083_31660_32045_31781_31715_30824_31848&hisdata=%5B%7B%22time%22%3A1580907708%2C%22kw%22%3A%22idea%22%7D%2C%7B%22time%22%3A1580908763%2C%22kw%22%3A%22idea%20copy%20value%20convert%20to%20json%22%7D%2C%7B%22time%22%3A1580908774%2C%22kw%22%3A%22idea%20copy%20value%20json%22%7D%2C%7B%22time%22%3A1581042102%2C%22kw%22%3A%22java%20dump%22%2C%22fq%22%3A2%7D%2C%7B%22time%22%3A1581045827%2C%22kw%22%3A%22java%20hat%22%7D%2C%7B%22time%22%3A1581045836%2C%22kw%22%3A%22java%20jhat%22%7D%2C%7B%22time%22%3A1581046441%2C%22kw%22%3A%22zprofiler%22%7D%2C%7B%22time%22%3A1581135371%2C%22kw%22%3A%22golang%22%7D%2C%7B%22time%22%3A1581135402%2C%22kw%22%3A%22goland%22%7D%2C%7B%22time%22%3A1581137273%2C%22kw%22%3A%22%E9%BB%91%E8%8B%B9%E6%9E%9C%22%7D%5D&req=2&bs=moderate&csor=0'

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

