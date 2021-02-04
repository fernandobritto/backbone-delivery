import * as Knex from 'knex'
import knexFile from '../../knexfile'

const knex = Knex(knexFile.development)

export default knex
