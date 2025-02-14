import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ReportsService {

  
  @Cron(CronExpression.EVERY_MINUTE)
  handleEverySecondCron() {
    console.log('Running cron job every minute');
  }

  
  @Cron('0 0 0 * * *')  
  handleMidnightCron() {
    console.log('Running daily cron job at midnight');
  }
}
