import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PrismaService } from '../prisma.service'; // Prisma service import
import { ProductsController } from './products.controller'; // Products controller import

@Module({
  imports: [ProductsModule],
  providers: [ProductsService, PrismaService], // Ensure PrismaService is listed here
  controllers: [ProductsController], // Ensure ProductsController is listed here
})
export class ProductsModule {}
