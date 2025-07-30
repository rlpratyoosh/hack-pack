/*
  Warnings:

  - You are about to drop the column `firstname` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "firstname",
ADD COLUMN     "fullname" TEXT;
