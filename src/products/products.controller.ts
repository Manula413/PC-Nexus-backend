import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { IsInt, Min, IsOptional, IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10) || 1)
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10) || 10)
  limit?: number;
}

class CreateProductDto {
  @IsString() name: string;
  @IsString() price: string;
  @IsString() description: string;
  @IsString() image: string;
  @IsNumber() rating: number;
  @IsInt() reviews: number;
  @IsString() category: string;
  @IsString() brand: string;
}

class UpdateProductDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() price?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() image?: string;
  @IsOptional() @IsNumber() rating?: number;
  @IsOptional() @IsInt() reviews?: number;
  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsString() brand?: string;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async getProducts(@Query() pagination: PaginationDto) {
    return this.productsService.getProducts(pagination.page, pagination.limit);
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    return this.productsService.createProduct(data);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }
}
