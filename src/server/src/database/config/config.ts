import { Options } from 'sequelize';

const config: Options = {
    username: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'my_password',
    database: process.env.PGDATABASE || 'LinkedIt',
    host: process.env.PGHOST || 'db',
    port: Number(process.env.PGPORT) || 5432,
    dialect: 'postgres',
}

export = config;