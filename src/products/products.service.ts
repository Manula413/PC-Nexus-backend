import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retrieves a list of products from the database, supporting pagination.
   * @param page The page number (starting from 1).
   * @param limit The number of products per page.
   * @returns A promise that resolves to an array of products.
   */
  async getProducts(page?: number, limit?: number): Promise<ReturnType<PrismaService['product']['findMany']>> {
    return this.prisma.product.findMany({
      ...(page && limit ? { skip: (page - 1) * limit, take: limit } : {}),
    });
  }
}
