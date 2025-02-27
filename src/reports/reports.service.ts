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

  
  @Cron('*/5 * * * *') 
async fetchAndLogProductData() {
  console.log('Fetching product data...');

  
  const products = await this.prisma.product.findMany({
    take: 1, 
    select: {
      id: true,
      name: true,
    },
  });

  console.log('Fetched Products:', products);
}

}
