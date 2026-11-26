import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreoTableUser1795661791238 implements MigrationInterface {
    name = 'EliminandoCorreoTableUser1795661791238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
