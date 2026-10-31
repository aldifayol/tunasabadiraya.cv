export type ServiceCategorySlug =
  | "custom_web_erp"
  | "mobile_app"
  | "payment_api"
  | "cloud_devops"
  | "enterprise_squad";

export type ProjectBudgetTier =
  | "tier_starter"
  | "tier_growth"
  | "tier_enterprise";

export interface LeadSubmissionPayload {
  name: string;
  companyName: string;
  email: string;
  whatsapp: string;
  category: ServiceCategorySlug;
  budgetTier: ProjectBudgetTier;
  message: string;
  websiteHoneypot?: string;
}

export type LegalTabId = "tos" | "refund" | "privacy" | "sla";

export interface CompanyAddress {
  street: string;
  city: string;
  province: string;
  country: string;
  full: string;
}

export interface CompanyProfile {
  brandName: string;
  shortName: string;
  domain: string;
  primaryDomain: string;
  email: string;
  whatsappDisplay: string;
  whatsappE164: string;
  whatsappUrl: string;
  address: CompanyAddress;
  operatingHours: string;
  badge: string;
  tagline: string;
  description: string;
}

export interface ClientPartner {
  name: string;
  logo: string;
}

export interface ServiceItem {
  id: string;
  indexLabel: string;
  badge: string;
  title: string;
  persona: string;
  description: string;
  tags: string[];
  categoryValue: ServiceCategorySlug;
}

export interface ChallengeMatrixItem {
  id: string;
  challenge: string;
  solution: string;
}

export interface SprintStepItem {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverableLabel: string;
  deliverableValue: string;
}

export interface PortfolioCaseItem {
  category: string;
  projectCode: string;
  impactLabel: string;
  impactMetric: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
}

export interface ProjectTierItem {
  tierCode: string;
  badge: string;
  recommended: boolean;
  recommendedBadge?: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  priceValue: string;
  timeline: string;
  features: string[];
  ctaText: string;
  budgetValue: ProjectBudgetTier;
}

export interface GovernanceCardTermin {
  label: string;
  percentage: string;
  description: string;
}

export interface GovernanceCardItem {
  id: string;
  codeBadge: string;
  iconName: string;
  title: string;
  description: string;
  points?: string[];
  termins?: GovernanceCardTermin[];
  footerNoteLabel: string;
  footerNoteValue: string;
  complianceNote?: {
    title: string;
    description: string;
  };
}

export interface LegalTabMetaItem {
  id: LegalTabId;
  label: string;
  docRef: string;
  revision: string;
  badge: string;
  iconName: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  details?: unknown;
}
