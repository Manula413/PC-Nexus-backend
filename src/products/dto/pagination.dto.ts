// src/products/dto/pagination.dto.ts
import { IsInt, IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value && value >= 1 ? value : 1)) // Default to 1 if invalid
  page?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value && value >= 1 ? value : 10)) // Default to 10 if invalid
  limit?: number;
}
