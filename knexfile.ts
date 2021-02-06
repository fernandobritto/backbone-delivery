import { resolve } from 'path'

const knexFile = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT || '3306',
      database: process.env.DATABASE || 'alpha_tower',
      user: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || '1q2w3e4r'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, 'source', 'database', 'migrations')
    },
    seeds: {
      directory: resolve(__dirname, 'source', 'database', 'seeds')
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: process.env.DB_PROD || 'alpha_tower',
      user: process.env.DB_PROD_USERNAME || 'username',
      password: process.env.DB_PROD_PASSWORD || 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: resolve(__dirname, 'source', 'database', 'seeds')
    }
  }

}

export default knexFile
