import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): any;
    list(): Specification[];
    create(data:ICreateSpecificationDTO): void;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
