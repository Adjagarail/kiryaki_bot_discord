const { prefix } = require('./config.json')

//['ping', 'test']

//'ping'->['ping]

module.exports = (client , aliases, callback) => {
    if(typeof aliases === 'string'){
        aliases = [aliases]
    }
    client.on('message', message =>{
        const { content } = message;
        aliases.forEach(alias => {
            const command = `${prefix}${alias}`

            //ping
            //test
            //testing
            if(content.startsWith(`${command}`) || content === command){
                console.log(`Watcher a vous une commande ${command}`)
                callback(message)
            } 
        })
    })
}