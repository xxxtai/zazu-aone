const aone = require('./aone')

aone.search().then(response => {
    console.log("response********:" + JSON.stringify(response))
})

module.exports = (pluginContext) => query => aone.search(pluginContext, query)
