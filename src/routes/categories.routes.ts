import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const categoryAlredyExists = categoryRepository.findByName(name);

    if(categoryAlredyExists) {
        return response.status(400).json({error: "Category Alredy Exists"});
    }

    categoryRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
    return response.json(categoryRepository.list())
})

export { categoriesRoutes };
