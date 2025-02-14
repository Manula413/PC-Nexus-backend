import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [ProductsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
