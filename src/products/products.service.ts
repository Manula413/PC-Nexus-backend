import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retrieves a list of products from the database, supporting pagination.
   */
  async getProducts(page?: number, limit?: number): Promise<Product[]> {
    return this.prisma.product.findMany({
      ...(page && limit ? { skip: (page - 1) * limit, take: limit } : {}),
    });
  }
  

  /**
   * Retrieves a product by its ID.
   */
  async getProductById(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
    return product;
  }

  /**
   * Creates a new product.
   */
  async createProduct(data: Omit<Product, 'id'>): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  /**
   * Updates an existing product by ID.
   */
  async updateProduct(id: number, data: Partial<Product>): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException(`Product with ID ${id} not found`);
    return this.prisma.product.update({ where: { id }, data });
  }


  /**
   * Deletes a product by ID.
   */
  async deleteProduct(id: number): Promise<Product> {
    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Failed to delete product with ID ${id}`);
    }
  }
}
