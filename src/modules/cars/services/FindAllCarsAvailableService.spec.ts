import { ICarRepository } from '../repositories/ICarRepository';
import { CarsRepositoryInMemory } from '../repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarService } from './CreateCarService';

describe('Create Car', () => {
    let createCarService: CreateCarService;
    let carsRepositoryInMemory: ICarRepository;

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });

    const carExample1 = {
        name: 'Sedan',
        description: 'É um sedan',
        daily_rate: 100,
        licence_plate: 'teste',
        fine_amount: 1666,
        brand: 'teste',
        category_id: 'aaaaaa',
    };

    it('should be able to create a car', async () => {
        const car = await createCarService.execute(carExample1);

        expect(car).toHaveProperty('id');

        expect(car.description).toBe(carExample1.description);
    });

    it('should not be able to create a car whith exists licence plate', async () => {
        await createCarService.execute(carExample1);

        expect(await createCarService.execute(carExample1)).toThrowError();
    });

    it('should be able to create a car with available tru by default', async () => {
        const car = await createCarService.execute(carExample1);

        expect(car.available).toBe(true);
    });
});
