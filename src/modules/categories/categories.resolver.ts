import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Categories } from './entities/categories.entity';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Categories])
  async categories() {
    return this.categoriesService.findAll();
  }

  @Query(() => Categories, { nullable: true })
  async category(@Args('name') name: string) {
    return this.categoriesService.findOneByName(name);
  }

  @Mutation(() => Categories)
  async createCategory(@Args('name') name: string) {
    return this.categoriesService.create({ name });
  }

  @Mutation(() => Categories, { nullable: true })
  async updateCategory(@Args('id') id: string, @Args('name') name: string) {
    return this.categoriesService.update(id, { name });
  }

  @Mutation(() => Categories, { nullable: true })
  async removeCategory(@Args('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
