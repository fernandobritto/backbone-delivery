const logger = require('pino')({
    prettyPrint: {
        levelFirst: true,
        colorize: true
    }
})
module.exports = logger
