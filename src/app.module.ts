import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ReportsModule } from './reports/reports.module';
import { BackupModule } from './backup/backup.module';

@Module({
  imports: [ProductsModule, ReportsModule, BackupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
