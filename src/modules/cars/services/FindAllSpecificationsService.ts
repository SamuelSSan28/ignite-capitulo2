import { ISpecificationRepository } from '../repositories/ISpecificationRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindAllSpecificationsService {
    constructor(
        @inject('SpecificationRepository')
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute() {
        const allSpecifications = await this.specificationRepository.list();

        console.log('!dsdsd - ', allSpecifications);

        return allSpecifications;
    }
}

export { FindAllSpecificationsService };
