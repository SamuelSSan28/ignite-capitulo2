import { MigrationInterface, QueryRunner } from 'typeorm';

export class userRenameColumnDriverLicence1665965572535
    implements MigrationInterface
{
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" RENAME COLUMN "driver_licence" TO "driver_license"`
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "post" RENAME COLUMN "driver_license" TO "driver_licence"`
        ); // reverts things made in "up" method
    }
}
