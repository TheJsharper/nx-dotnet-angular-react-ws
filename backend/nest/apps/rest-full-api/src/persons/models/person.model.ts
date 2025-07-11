export interface Person {
    id: string;
    fistName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;   
    state: string;
    zip: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;  
    isDeleted: boolean;
    deletedAt?: Date;
    createdBy?: string;
    updatedBy?: string; 
    version?: number;
    tenantId?: string;  
    customFields?: Record<string, any>; // For additional custom fields
    tags?: string[]; // For tagging purposes    
    notes?: string[]; // For storing additional notes
    profilePictureUrl?: string; // URL to the person's profile picture  
    socialMediaLinks?: Record<string, string>; // Links to social media profiles
    lastLogin?: Date; // Timestamp of the last login
    loginCount?: number; // Number of times the user has logged in
    twoFactorEnabled?: boolean; // Whether two-factor authentication is enabled
    lastPasswordChange?: Date; // Timestamp of the last password change
    securityQuestions?: Record<string, string>; // Security questions and answers
    referralSource?: string; // Source of referral for the person   
    subscriptionStatus?: string; // Subscription status (e.g., active, inactive, pending)
    subscriptionPlan?: string; // Subscription plan (e.g., free, premium, enterprise)
    subscriptionStartDate?: Date; // Start date of the subscription
    subscriptionEndDate?: Date; // End date of the subscription     
    billingInfo?: {
        cardNumber: string; // Masked card number
        cardType: string; // Type of card (e.g., Visa, MasterCard)
        expirationDate: Date; // Expiration date of the card
        billingAddress: string; // Billing address associated with the card
    }; // Billing information for the person
    emergencyContact?: {
        name: string; // Name of the emergency contact
        relationship: string; // Relationship to the person
        phone: string; // Phone number of the emergency contact
        email?: string; // Email address of the emergency contact
    }; // Emergency contact details
    preferences?: {
        notifications?: boolean; // Whether the person wants to receive notifications
        theme?: string; // Preferred theme (e.g., light, dark)
        language?: string; // Preferred language
        timezone?: string; // Timezone of the person
    }; // User preferences for notifications, themes, etc.
    activityLog?: {
        timestamp: Date; // Timestamp of the activity
        action: string; // Description of the action taken
        details?: string; // Additional details about the action
    }[]; // Log of activities performed by the person
    lastActivity?: Date; // Timestamp of the last activity
    accountStatus?: string; // Status of the account (e.g., active, suspended, closed)
    accountType?: string; // Type of account (e.g., standard, admin, guest)
    referralCode?: string; // Referral code associated with the person
    referralCount?: number; // Number of referrals made by the person
    loyaltyPoints?: number; // Loyalty points accumulated by the person
    loyaltyTier?: string; // Loyalty tier of the person (e.g., bronze, silver, gold)
    feedback?: {    
        rating: number; // Rating given by the person
        comments?: string; // Comments or feedback provided by the person
        date: Date; // Date when the feedback was given
    }[]; // Feedback provided by the person
}