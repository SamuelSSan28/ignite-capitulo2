import { Car } from '../../entities/Car';
import { ICarRepository, ICreateCarDTO } from '../ICarRepository';

class CarsRepositoryInMemory implements ICarRepository {
    private cars: Car[];

    constructor() {
        this.cars = [];
    }

    async create({
        name,
        description,
        daily_rate,
        category_id,
        licence_plate,
        fine_amount,
        brand,
    }: ICreateCarDTO) {
        const car = new Car();

        Object.assign(car, {
            name,
            description,
            created_at: new Date(),
            daily_rate,
            category_id,
            licence_plate,
            fine_amount,
            brand,
        });

        this.cars.push(car);

        return car;
    }

    async list() {
        return this.cars;
    }

    async findAvailable(brand?: string, category_id?: string, name?: string) {
        return this.cars.filter((car) => {
            if (
                car.available &&
                ((brand && car.brand == brand) ||
                    (category_id && car.category_id == category_id) ||
                    (name && car.name == name))
            ) {
                return car;
            }

            return null;
        });
    }

    async findByLicencePlate(licence_plate: string) {
        const car = this.cars.find(
            (car) => car.licence_plate === licence_plate
        );

        return car;
    }
}

export { CarsRepositoryInMemory };
