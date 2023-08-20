-- CreateEnum
CREATE TYPE "enum_users_status" AS ENUM ('pending', 'active', 'inactive');

-- CreateTable
CREATE TABLE "fd_activities" (
    "id" VARCHAR(255) NOT NULL,
    "status" INTEGER,
    "priority" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),
    "freshdesk_id" VARCHAR(255),

    CONSTRAINT "fd_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_agents" (
    "id" VARCHAR(255) NOT NULL,
    "available" VARCHAR(255),
    "ticket_scope" INTEGER,
    "type" VARCHAR(255),
    "active" VARCHAR(255),
    "email" VARCHAR(255),
    "name" VARCHAR(255),
    "phone" VARCHAR(255),
    "last_active_at" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "fd_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_escalations" (
    "id" VARCHAR(255) NOT NULL,
    "escalation_type" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),
    "freshdesk_id" VARCHAR(255),

    CONSTRAINT "fd_escalations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_group" (
    "id" VARCHAR(255) NOT NULL,
    "group_id" VARCHAR(255),
    "group_name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "fd_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_priority" (
    "id" VARCHAR(255) NOT NULL,
    "priority_id" VARCHAR(255),
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "fd_priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_status" (
    "id" VARCHAR(255) NOT NULL,
    "status_id" VARCHAR(255),
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "fd_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fd_tickets" (
    "id" VARCHAR(255) NOT NULL,
    "json" JSONB,
    "ticket_id" BIGINT,
    "cc_emails" JSONB,
    "fwd_emails" JSONB,
    "reply_cc_emails" JSONB,
    "ticket_cc_emails" JSONB,
    "tags" JSONB,
    "email_config_id" BIGINT,
    "group_id" BIGINT,
    "priority" INTEGER,
    "requester_id" BIGINT,
    "requester_name" TEXT,
    "requester_email" TEXT,
    "responder_id" BIGINT,
    "source" INTEGER,
    "status" INTEGER,
    "subject" TEXT,
    "company_id" BIGINT,
    "type" VARCHAR(255),
    "to_emails" TEXT,
    "product_id" BIGINT,
    "fr_escalated" BOOLEAN,
    "spam" BOOLEAN,
    "urgent" BOOLEAN,
    "is_escalated" BOOLEAN,
    "fd_created_at" TIMESTAMPTZ(6),
    "fd_updated_at" TIMESTAMPTZ(6),
    "due_by" TIMESTAMPTZ(6),
    "fr_due_by" TIMESTAMPTZ(6),
    "nr_due_by" TIMESTAMPTZ(6),
    "nr_escalated" BOOLEAN,
    "json_custom_field" JSONB,
    "cf_best_number_to_reach" VARCHAR(255),
    "cf_best_number_note" VARCHAR(255),
    "cf_quotewekrs" VARCHAR(255),
    "cf_qbsalesorder" VARCHAR(255),
    "cf_qbinv" VARCHAR(255),
    "cf_totalhours" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "fd_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_pool" (
    "id" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deletedAt" TIMESTAMPTZ(6),
    "userId" VARCHAR(255),
    "roleId" VARCHAR(255),

    CONSTRAINT "role_pool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" VARCHAR(255) NOT NULL,
    "role_name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "confirmation_code" VARCHAR(255),
    "status" "enum_users_status" DEFAULT 'pending',
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "deleted" TIMESTAMPTZ(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fd_tickets_ticket_id_key" ON "fd_tickets"("ticket_id");

-- AddForeignKey
ALTER TABLE "fd_activities" ADD CONSTRAINT "fd_activities_freshdesk_id_fkey" FOREIGN KEY ("freshdesk_id") REFERENCES "fd_tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fd_escalations" ADD CONSTRAINT "fd_escalations_freshdesk_id_fkey" FOREIGN KEY ("freshdesk_id") REFERENCES "fd_tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_pool" ADD CONSTRAINT "role_pool_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_pool" ADD CONSTRAINT "role_pool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

