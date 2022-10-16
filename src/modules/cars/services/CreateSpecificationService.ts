import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationService {
    constructor(
        @inject('SpecificationRepository')
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest) {
        const specificationAlredyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new Error('Specification Alredy Exists!');
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
