/*
  Warnings:

  - You are about to drop the column `table` on the `orders` table. All the data in the column will be lost.
  - Added the required column `num_table` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "table",
ADD COLUMN     "delivery" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "num_table" INTEGER NOT NULL;
