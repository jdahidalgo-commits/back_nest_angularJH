import { ConfigService } from '../config/config.service.js';
import { DataSource } from 'typeorm';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
      });

      return dataSource.initialize();
    },
  },
];