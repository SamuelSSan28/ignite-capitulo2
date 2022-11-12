import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';
import { ICarRepository, ICreateCarDTO } from './ICarRepository';

class CarRepository implements ICarRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        name,
        description,
        daily_rate,
        licence_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO) {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            licence_plate,
            fine_amount,
            brand,
            category_id,
        });

        await this.repository.save(car);

        return car;
    }

    async list() {
        const cars = await this.repository.find();

        return cars;
    }

    async findByLicencePlate(licence_plate: string) {
        const car = await this.repository.findOne({ licence_plate });

        return car;
    }

    async findAvailable(
        brand?: string | undefined,
        category_id?: string | undefined,
        name?: string | undefined
    ): Promise<Car[]> {
        const cars = await this.repository.find({ brand, category_id, name });

        return cars;
    }
}

export { CarRepository };
