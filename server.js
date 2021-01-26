import app from './source/app'
import logger from './source/logs'

app.listen(process.env.APP_PORT, () => {logger.info('Server OK - 200')})
