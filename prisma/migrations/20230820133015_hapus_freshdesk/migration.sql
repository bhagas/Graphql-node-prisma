/*
  Warnings:

  - You are about to drop the `fd_activities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_agents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_escalations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_priority` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fd_tickets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fd_activities" DROP CONSTRAINT "fd_activities_freshdesk_id_fkey";

-- DropForeignKey
ALTER TABLE "fd_escalations" DROP CONSTRAINT "fd_escalations_freshdesk_id_fkey";

-- DropTable
DROP TABLE "fd_activities";

-- DropTable
DROP TABLE "fd_agents";

-- DropTable
DROP TABLE "fd_escalations";

-- DropTable
DROP TABLE "fd_group";

-- DropTable
DROP TABLE "fd_priority";

-- DropTable
DROP TABLE "fd_status";

-- DropTable
DROP TABLE "fd_tickets";
