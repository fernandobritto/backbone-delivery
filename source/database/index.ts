import knex from 'knex'
import knexFile from '../../knexfile'

const dbMain = knex(knexFile.development)

export default dbMain
