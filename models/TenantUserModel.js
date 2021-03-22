import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TenantSchema = new Schema(
  {
    tenantsName: { type: String },
    tenantsEmail: { type: String },
    tenantsPhone: { type: String },
    tenantsCostumerId: { type: String },
    isAccepted: { type: Boolean, default: false },
    isRimboAccepted: { type: Boolean, default: false },
    isPMAccepted: { type: Boolean, default: false },
    isCardAccepted: { type: Boolean, default: false },
    randomID: { type: String },
    monthlyNetIncome: { type: Number },
    jobType: { type: String },
    documentType: { type: String },
    documentNumber: { type: String },
    tenantsAddress: { type: String },
    tenantsZipCode: { type: Number },
    documentImageFront: { type: String },
    documentImageBack: { type: String },
    lastPayslip: { type: String },
    previousPayslip: { type: String },
    isAcceptedGC: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Tenant = mongoose.model("Tenant", TenantSchema);
export default Tenant;
