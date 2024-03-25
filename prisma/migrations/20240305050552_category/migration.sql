/*
  Warnings:

  - Added the required column `label` to the `PrincipalCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `SecondCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PrincipalCategory" ADD COLUMN     "label" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "gender" DROP DEFAULT;

-- AlterTable
ALTER TABLE "SecondCategory" ADD COLUMN     "label" TEXT NOT NULL;
