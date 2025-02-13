import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query('page') page: string = '1', // Default to page 1 if no query param is provided
    @Query('limit') limit: string = '10', // Default to 10 products per page
  ) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    return this.productsService.getProducts( );
  }
}
