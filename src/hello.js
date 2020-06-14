const got = require('got')
const URL = 'https://www.baidu.com/sugrec?prod=pc_his&from=pc_web&json=1&sid=31729_1440_31325_21083_31660_32045_31781_31715_30824_31848&hisdata=%5B%7B%22time%22%3A1580907708%2C%22kw%22%3A%22idea%22%7D%2C%7B%22time%22%3A1580908763%2C%22kw%22%3A%22idea%20copy%20value%20convert%20to%20json%22%7D%2C%7B%22time%22%3A1580908774%2C%22kw%22%3A%22idea%20copy%20value%20json%22%7D%2C%7B%22time%22%3A1581042102%2C%22kw%22%3A%22java%20dump%22%2C%22fq%22%3A2%7D%2C%7B%22time%22%3A1581045827%2C%22kw%22%3A%22java%20hat%22%7D%2C%7B%22time%22%3A1581045836%2C%22kw%22%3A%22java%20jhat%22%7D%2C%7B%22time%22%3A1581046441%2C%22kw%22%3A%22zprofiler%22%7D%2C%7B%22time%22%3A1581135371%2C%22kw%22%3A%22golang%22%7D%2C%7B%22time%22%3A1581135402%2C%22kw%22%3A%22goland%22%7D%2C%7B%22time%22%3A1581137273%2C%22kw%22%3A%22%E9%BB%91%E8%8B%B9%E6%9E%9C%22%7D%5D&req=2&bs=moderate&csor=0'
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
                pluginContext.console.log('info', '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%startffff4444%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', response.body)
                const data = [{
                    id : "test",
                    title: "test title",
                    subtitle: "subtitle"
                }]
                // response.body.items.map((repository) => ({
                //     id: repository.full_name,
                //     title: repository.full_name,
                //     value: repository.html_url,
                //     subtitle: "moda do it"
                // }))
                pluginContext.console.log('info', '&&&&&&&&&&&&&&&', {
                    data: data
                })
                resolve(data)
            }).catch((err) => {
                if (cachedResponse) {
                    resolve(cachedResponse)
                }
                reject(err)
            })
            pluginContext.console.log('info', '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%endend%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        })
    }
}
