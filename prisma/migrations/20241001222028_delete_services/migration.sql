/*
  Warnings:

  - You are about to drop the column `serviceId` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "credentials" DROP CONSTRAINT "credentials_serviceId_fkey";

-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "serviceId";

-- DropTable
DROP TABLE "services";
