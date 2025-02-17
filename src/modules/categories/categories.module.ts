import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';
import { Categories } from './entities/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  providers: [CategoriesService, CategoriesResolver],
})
export class CategoriesModule {}
