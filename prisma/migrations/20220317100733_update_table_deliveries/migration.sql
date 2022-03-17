-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_deliverymanId_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "deliverymanId" DROP NOT NULL,
ALTER COLUMN "endAt" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliverymans"("id") ON DELETE SET NULL ON UPDATE CASCADE;
