import { MigrationInterface, QueryRunner } from 'typeorm';

export class userAddDefaltValueInColunmIsAdmin1665965931364
    implements MigrationInterface
{
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE ONLY users ALTER COLUMN "isAdmin" SET DEFAULT false`
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
      
    }
}
