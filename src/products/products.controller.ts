import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IsInt, Min,IsOptional  } from 'class-validator';
import { Transform } from 'class-transformer';

class PaginationDto {
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => {
    const parsedValue = parseInt(value, 10);
    return parsedValue > 0 ? parsedValue : 1; // Default to 1 if invalid
  })
  page?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => {
    const parsedValue = parseInt(value, 10);
    return parsedValue > 0 ? parsedValue : 10; // Default to 10 if invalid
  })
  limit?: number;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query() pagination: PaginationDto, // Automatically validated and transformed
  ) {
    return this.productsService.getProducts(pagination.page, pagination.limit);
  }
}