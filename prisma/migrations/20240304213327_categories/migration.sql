/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `principalCategory` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `principalCategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "gender" AS ENUM ('men', 'women', 'unisex');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropIndex
DROP INDEX "Product_principalCategory_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
DROP COLUMN "principalCategory",
ADD COLUMN     "gender" TEXT DEFAULT 'unisex',
ADD COLUMN     "principalCategoryId" TEXT NOT NULL,
ADD COLUMN     "secondCategoryId" TEXT;

-- DropTable
DROP TABLE "Category";

-- DropEnum
DROP TYPE "PrincipalCategory";

-- CreateTable
CREATE TABLE "PrincipalCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PrincipalCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SecondCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Product_principalCategoryId_idx" ON "Product"("principalCategoryId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_principalCategoryId_fkey" FOREIGN KEY ("principalCategoryId") REFERENCES "PrincipalCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_secondCategoryId_fkey" FOREIGN KEY ("secondCategoryId") REFERENCES "SecondCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
