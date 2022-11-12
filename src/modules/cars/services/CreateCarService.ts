import { ICarRepository } from '../repositories/ICarRepository';
import { inject, injectable } from 'tsyringe';
import AppError from '../../../errors/AppError';
import { Car } from '../entities/Car';

interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    licence_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}

@injectable()
class CreateCarService {
    constructor(
        @inject('CarRepository')
        private carRepository: ICarRepository
    ) {}

    async execute({
        name,
        description,
        daily_rate,
        licence_plate,
        fine_amount,
        brand,
        category_id,
    }: IRequest) {
        const car = new Car();

        Object.assign(car, {
            name,
            description,
            daily_rate,
            licence_plate,
            fine_amount,
            brand,
            category_id,
        });

        const carAlredyExists = await this.carRepository.findByLicencePlate(
            licence_plate
        );

        if (carAlredyExists) {
            throw new AppError(
                `Car with this licence plate (${licence_plate}) alredy exists!`
            );
        }

        await this.carRepository.create(car);

        return car;
    }
}

export { CreateCarService };
