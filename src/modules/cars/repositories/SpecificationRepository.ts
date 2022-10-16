import { Specification } from '../entities/Specification';
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private constructor() {
        this.specifications = [];
    }

    private static INSTANCE: SpecificationRepository;

    public static getInstance() {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationRepository();
        }

        return this.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    list() {
        return this.specifications;
    }

    findByName(name: string): any {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}

export { SpecificationRepository };
