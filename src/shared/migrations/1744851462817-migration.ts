import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1744851462817 implements MigrationInterface {
  name = 'Migration1744851462817';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "preco" integer NOT NULL, "quantidade" integer NOT NULL, "data_atualizacao" TIMESTAMP NOT NULL, "imagem" character varying NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "produtos"`);
  }
}
