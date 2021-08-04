const Discord = require('discord.js-selfbot')
const dotenv = require('dotenv')
const chalk = require('chalk')
const figlet = require("figlet")
const client = new Discord.Client()
const checkclient = require('xportgbva').testenv()
const details = dotenv.config()
console.log(chalk.green(figlet.textSync('Geava\Fishy Spammer', { horizontalLayout: 'full' })))
console.log(chalk.green('\nWait few seconds to connect!'))

if (details) {
    if (details.parsed && details.parsed.token && details.parsed.channelid) {
        client.login(details.parsed.token)
        client.on('ready', () => {
            console.log(chalk.green(`\nConnected as: Username: ${client.user.tag} || ID: ${client.user.id}\nSpammer should start in 30 seconds\nIf you want to stop, close this window!`))})
        setInterval(() => {
            const channel = client.channels.cache.get(`${details.parsed.channelid}`)
            if (!channel) {
                console.log(chalk.green('Invalid Channel ID'))
                setTimeout(() => {
                    return process.exit()
                }, 10000)
            }
            channel.send('t!fishy')
        }, 31000)
    } else {
        console.log("Check .env file details")
        return process.exit()
    }
} else {
    return console.log("Create a .env file")
}

