import { Car } from '../entities/Car';

interface ICreateCarDTO {
    name: string;
    description: string;
    daily_rate: number;
    category_id: string;
    licence_plate: string;
    fine_amount: number;
    brand: string;
}

interface ICarRepository {
    findByLicencePlate(name: string): Promise<any>;
    list(): Promise<Car[]>;
    findAvailable(
        brand?: string,
        category_id?: string,
        name?: string
    ): Promise<Car[]>;
    create(data: ICreateCarDTO): Promise<Car>;
}

export { ICarRepository, ICreateCarDTO };
