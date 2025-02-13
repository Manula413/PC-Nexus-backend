// src/products/products.service.ts
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
  async getProducts(page: number = 1, limit: number = 10) {
    return this.prisma.product.findMany({
      skip: (page - 1) * limit, // Skip products based on the page
      take: limit, // Limit the number of products
    });
  }
}
