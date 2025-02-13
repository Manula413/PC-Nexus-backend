import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma.service'; 
import { ProductsController } from './products.controller'; 

@Module({
  imports: [ProductsModule],
  providers: [ProductsService, PrismaService], 
  controllers: [ProductsController], 
})
export class ProductsModule {}
