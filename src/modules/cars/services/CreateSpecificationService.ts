import { SpecificationRepository } from '../repositories/SpecificationRepository';
import { ISpecificationRepository } from '../repositories/ISpecificationRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest) {
        const specificationAlredyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new Error('Specification Alredy Exists!');
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
