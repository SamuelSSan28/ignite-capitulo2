import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Promise<any>;
    list(): Promise<Specification[]>;
    create(data: ICreateSpecificationDTO): Promise<any>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
