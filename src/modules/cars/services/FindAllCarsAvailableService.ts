import { inject, injectable } from 'tsyringe';
import { ICarRepository } from '../repositories/ICarRepository';

@injectable()
class FindAllCategoriesService {
    constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository
    ) {}

    async execute() {
        const allCategoriess = await this.carRepository.findAvailable();

        return allCategoriess;
    }
}

export { FindAllCategoriesService };
