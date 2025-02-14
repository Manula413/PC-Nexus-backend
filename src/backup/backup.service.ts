import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { exec } from 'child_process';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';  // For checking and creating the backup directory

@Injectable()
export class BackupService {

    constructor() { }

    @Cron(CronExpression.EVERY_MINUTE)
    handleCron() {
        console.log('Starting SQLite database backup...');
        this.backupDatabase();
    }

    backupDatabase() {
        const dbPath = join(__dirname, '../../prisma', 'shop.db');
        
        // Ensure the backup directory exists
        const backupDir = join(__dirname, '../../backup');
        if (!existsSync(backupDir)) {
            mkdirSync(backupDir, { recursive: true });  // Create the backup folder if it doesn't exist
        }

        const backupPath = join(
            backupDir,
            `shop_backup_${new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-')}.sql`
        );

        const command = `sqlite3 ${dbPath} .dump > ${backupPath}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error during backup: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`Database backup completed! Backup saved at ${backupPath}`);
        });
    }
}
