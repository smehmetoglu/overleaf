import {
  CustomSubscription,
  GroupSubscription,
  PaidSubscription,
} from '../../../../../types/subscription/dashboard/subscription'
import dateformat from 'dateformat'

const today = new Date()
const oneYearFromToday = new Date().setFullYear(today.getFullYear() + 1)
const nextPaymentDueAt = dateformat(oneYearFromToday, 'dS mmmm yyyy')
const nextPaymentDueDate = dateformat(oneYearFromToday, 'dS mmmm yyyy')
const sevenDaysFromToday = new Date().setDate(today.getDate() + 7)
const sevenDaysFromTodayFormatted = dateformat(
  sevenDaysFromToday,
  'dS mmmm yyyy'
)

export const annualActiveSubscription: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$199.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const annualActiveSubscriptionEuro: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  payment: {
    taxRate: 0.24,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'EUR',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '€221.96',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const annualActiveSubscriptionPro: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'professional',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'professional',
    name: 'Professional',
    price_in_cents: 4500,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$42.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const pastDueExpiredSubscription: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'expired',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: true,
    displayPrice: '$199.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const canceledSubscription: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'canceled',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$199.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const pendingSubscriptionChange: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$199.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
  pendingPlan: {
    planCode: 'professional-annual',
    name: 'Professional Annual',
    price_in_cents: 42900,
    annual: true,
    featureDescription: [],
  },
}

export const groupActiveSubscription: GroupSubscription = {
  manager_ids: ['abc123'],
  member_ids: ['abc123'],
  invited_emails: [],
  groupPlan: true,
  teamName: 'GAS',
  membersLimit: 10,
  _id: 'bcd567',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'group_collaborator_10_enterprise',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'group_collaborator_10_enterprise',
    name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
    hideFromUsers: true,
    price_in_cents: 129000,
    annual: true,
    groupPlan: true,
    membersLimit: 10,
    membersLimitAddOn: 'additional-license',
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 10,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$1290.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const groupActiveSubscriptionWithPendingLicenseChange: GroupSubscription =
  {
    manager_ids: ['abc123'],
    member_ids: ['abc123'],
    invited_emails: [],
    groupPlan: true,
    teamName: 'GASWPLC',
    membersLimit: 10,
    _id: 'def456',
    admin_id: 'abc123',
    teamInvites: [],
    planCode: 'group_collaborator_10_enterprise',
    recurlySubscription_id: 'ghi789',
    plan: {
      planCode: 'group_collaborator_10_enterprise',
      name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
      hideFromUsers: true,
      price_in_cents: 129000,
      annual: true,
      groupPlan: true,
      membersLimit: 10,
      membersLimitAddOn: 'additional-license',
    },
    payment: {
      taxRate: 0,
      billingDetailsLink: '/user/subscription/recurly/billing-details',
      accountManagementLink: '/user/subscription/recurly/account-management',
      additionalLicenses: 11,
      totalLicenses: 21,
      nextPaymentDueAt,
      nextPaymentDueDate,
      currency: 'USD',
      state: 'active',
      trialEndsAtFormatted: null,
      trialEndsAt: null,
      activeCoupons: [],
      accountEmail: 'fake@example.com',
      hasPastDueInvoice: false,
      displayPrice: '$2967.00',
      pendingAdditionalLicenses: 13,
      pendingTotalLicenses: 23,
      planOnlyDisplayPrice: '',
      addOns: [],
      addOnDisplayPricesWithoutAdditionalLicense: {},
    },
    pendingPlan: {
      planCode: 'group_collaborator_10_enterprise',
      name: 'Overleaf Standard (Collaborator) - Group Account (10 licenses) - Enterprise',
      hideFromUsers: true,
      price_in_cents: 129000,
      annual: true,
      groupPlan: true,
      membersLimit: 10,
      membersLimitAddOn: 'additional-license',
    },
  }

export const trialSubscription: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'paid-personal_free_trial_7_days',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'paid-personal_free_trial_7_days',
    name: 'Personal',
    price_in_cents: 1500,
    featureDescription: [],
    hideFromUsers: true,
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt: sevenDaysFromTodayFormatted,
    nextPaymentDueDate: sevenDaysFromTodayFormatted,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: sevenDaysFromTodayFormatted,
    trialEndsAt: new Date(sevenDaysFromToday).toString(),
    activeCoupons: [],
    accountEmail: 'fake@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$14.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const customSubscription: CustomSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator-annual',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator-annual',
    name: 'Standard (Collaborator) Annual',
    price_in_cents: 21900,
    annual: true,
    featureDescription: [],
  },
  customAccount: true,
}

export const trialCollaboratorSubscription: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator_free_trial_7_days',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator_free_trial_7_days',
    name: 'Standard (Collaborator)',
    price_in_cents: 2300,
    featureDescription: [],
    hideFromUsers: true,
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt: sevenDaysFromTodayFormatted,
    nextPaymentDueDate: sevenDaysFromTodayFormatted,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: sevenDaysFromTodayFormatted,
    trialEndsAt: new Date(sevenDaysFromToday).toString(),
    activeCoupons: [],
    accountEmail: 'foo@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$21.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}

export const monthlyActiveCollaborator: PaidSubscription = {
  manager_ids: ['abc123'],
  member_ids: [],
  invited_emails: [],
  groupPlan: false,
  membersLimit: 0,
  _id: 'def456',
  admin_id: 'abc123',
  teamInvites: [],
  planCode: 'collaborator',
  recurlySubscription_id: 'ghi789',
  plan: {
    planCode: 'collaborator',
    name: 'Standard (Collaborator)',
    price_in_cents: 212300900,
    featureDescription: [],
  },
  payment: {
    taxRate: 0,
    billingDetailsLink: '/user/subscription/recurly/billing-details',
    accountManagementLink: '/user/subscription/recurly/account-management',
    additionalLicenses: 0,
    totalLicenses: 0,
    nextPaymentDueAt,
    nextPaymentDueDate,
    currency: 'USD',
    state: 'active',
    trialEndsAtFormatted: null,
    trialEndsAt: null,
    activeCoupons: [],
    accountEmail: 'foo@example.com',
    hasPastDueInvoice: false,
    displayPrice: '$21.00',
    planOnlyDisplayPrice: '',
    addOns: [],
    addOnDisplayPricesWithoutAdditionalLicense: {},
  },
}
