/*
  Warnings:

  - Added the required column `password` to the `deliverymans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliverymans" ADD COLUMN     "password" TEXT NOT NULL;
