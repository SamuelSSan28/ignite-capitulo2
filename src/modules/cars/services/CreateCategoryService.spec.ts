import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { CategoriesRepositoryInMemory } from '../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryService } from './CreateCategoryService';

describe('Create Category', () => {
    let createCategoryService: CreateCategoryService;
    let categoriesRepositoryInMemory: ICategoryRepository;

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryService = new CreateCategoryService(
            categoriesRepositoryInMemory
        );
    });

    const categoryExample1 = { name: 'Sedan', description: 'É um sedan' };
    const categoryExample2 = { name: '4x4', description: 'É um 4x4' };
    const categoryExample3 = { name: 'Flex', description: 'É um Flexd' };

    it('should be able to create a category', async () => {
        await createCategoryService.execute(categoryExample1);

        const category = await categoriesRepositoryInMemory.findByName(
            categoryExample1.name
        );

        expect(category).toHaveProperty('id');

        expect(category.description).toBe(categoryExample1.description);
    });

    it('should not be able to create a category whith name exists', async () => {
        await createCategoryService.execute(categoryExample1);

        await categoriesRepositoryInMemory.findByName(categoryExample1.name);

        expect(
            await categoriesRepositoryInMemory.findByName(categoryExample1.name)
        ).toThrow;
    });
});
