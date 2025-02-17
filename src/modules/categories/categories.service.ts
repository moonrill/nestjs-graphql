import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async findAll() {
    return this.categoriesRepository.find();
  }

  async findOneByName(name: string) {
    return this.categoriesRepository.findOne({ where: { name } });
  }

  async create(createCategoryInput: CreateCategoryInput) {
    return this.categoriesRepository.save(createCategoryInput);
  }

  async update(id: string, updateCategoryInput: CreateCategoryInput) {
    await this.categoriesRepository.update(id, updateCategoryInput);

    return this.categoriesRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const category = await this.categoriesRepository.findOne({ where: { id } });
    await this.categoriesRepository.delete(id);

    return category;
  }
}
