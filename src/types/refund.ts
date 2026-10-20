export type RefundStatus = 
  | 'PENDING'
  | 'PROCESSING'
  | 'SUCCEEDED'
  | 'FAILED'
  | 'REVERSED'
  | 'DISPUTED';

export type RefundType = 
  | 'FULL'
  | 'PARTIAL';

export interface RefundInstruction {
  id: string;
  refundId: string;
  originalTransactionId: string;
  ledgerId: string;
  amount: number; // Stored in minor units (cents) to avoid floating-point errors
  currency: string; // ISO 4217 currency code (e.g., USD, EUR, VND)
  status: RefundStatus;
  type: RefundType;
  reason: string;
  idempotencyKey: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateRefundInput {
  originalTransactionId: string;
  ledgerId: string;
  amount: number;
  currency: string;
  type: RefundType;
  reason: string;
  idempotencyKey: string;
  metadata?: Record<string, unknown>;
}

export interface RefundResult {
  success: boolean;
  refundId?: string;
  status: RefundStatus;
  amount: number;
  currency: string;
  error?: {
    code: string;
    message: string;
  };
}
