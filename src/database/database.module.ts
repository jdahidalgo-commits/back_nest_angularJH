import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service.js';
import { ConfigModule } from '../config/config.module.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
        synchronize: false,
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}