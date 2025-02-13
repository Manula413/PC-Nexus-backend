import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // PrismaClient import is enough

@Injectable()
export class PrismaService extends PrismaClient {}

