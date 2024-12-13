export interface UserProfile {
  id: string;
  uid: string;
  company_id: string;
  user_name: string;
  user_email: string;
  created_at: string;
  updated_at: string;
}

export interface Company {
  id: string;
  company_name: string;
  company_creator: string;
  created_at: string;
  updated_at: string;
}