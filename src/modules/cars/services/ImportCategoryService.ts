import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryService {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) {}

    private loadFile(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = parse({
                delimiter: ',',
            });

            stream.pipe(parseFile);

            parseFile
                .on('data', async (line) => {
                    const [name, description] = line;

                    categories.push({ name, description });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                });
        });
    }

    async execute(file: Express.Multer.File) {
        const categories = await this.loadFile(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const categoryAlredyExists =
                await this.categoryRepository.findByName(name);

            if (categoryAlredyExists) {
                throw new Error('Category Alredy Exists!');
            }

            this.categoryRepository.create({ name, description });
        });
    }
}

export { ImportCategoryService };
