import mongoose from "mongoose";

const BillingCycleSchema = new mongoose.Schema({
  frequency: {
    interval_unit: { type: String, required: true },
    interval_count: { type: Number, required: true },
  },
  tenure_type: { type: String, required: true },
  sequence: { type: Number, required: true },
  total_cycles: { type: Number, required: true },
  pricing_scheme: {
    fixed_price: {
      value: { type: String, required: true },
      currency_code: { type: String, required: true },
    },
    version: { type: Number, required: true },
    create_time: { type: Date, required: true },
    update_time: { type: Date, required: true },
  },
});

const PaymentPreferencesSchema = new mongoose.Schema({
  auto_bill_outstanding: { type: Boolean, required: true },
  setup_fee: {
    value: { type: String, required: true },
    currency_code: { type: String, required: true },
  },
  setup_fee_failure_action: { type: String, required: true },
  payment_failure_threshold: { type: Number, required: true },
});

const TaxesSchema = new mongoose.Schema({
  percentage: { type: String, required: true },
  inclusive: { type: Boolean, required: true },
});

const LinkSchema = new mongoose.Schema({
  href: { type: String, required: true },
  rel: { type: String, required: true },
  method: { type: String, required: true },
});

const SubscriptionPlanSchema = new mongoose.Schema({
  planId: { type: String, required: true },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  billing_cycles: [BillingCycleSchema],
  payment_preferences: PaymentPreferencesSchema,
  taxes: TaxesSchema,
  create_time: { type: Date, required: true },
  update_time: { type: Date, required: true },
  links: [LinkSchema],
});

const SubscriptionPlan = mongoose.model(
  "SubscriptionPlan",
  SubscriptionPlanSchema
);

export default SubscriptionPlan;
