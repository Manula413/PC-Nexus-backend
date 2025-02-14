import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReportsService {

    constructor(private readonly prisma: PrismaService) {}

  
  @Cron(CronExpression.EVERY_MINUTE)
  handleEverySecondCron() {
    console.log('Running cron job every minute');
  }

  
  @Cron(CronExpression.EVERY_MINUTE) // Every 5 minutes
async fetchAndLogProductData() {
  console.log('Fetching product data...');

  // Fetch product data (e.g., all products or a subset like top 5 most expensive products)
  const products = await this.prisma.product.findMany({
    take: 5, // Limit to the first 5 products for simplicity
    select: {
      id: true,
      name: true,
      price: true,
      category: true,
    },
  });

  // Log the fetched product data
  console.log('Fetched Products:', products);
}

}
