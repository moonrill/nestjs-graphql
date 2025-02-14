export default () => ({
  app: {
    env: process.env.APP_ENV || 'development',
    host: process.env.APP_HOST || '0.0.0.0',
    port: parseInt(process.env.APP_PORT, 10) || 3222,
  },
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
});
