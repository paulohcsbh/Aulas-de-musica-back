/*
  Warnings:

  - Made the column `text` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "text" SET NOT NULL;
