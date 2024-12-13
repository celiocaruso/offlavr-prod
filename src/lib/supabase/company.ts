import { supabase } from '../supabase';
import type { Company } from './types';

export async function createCompany(companyName: string, creatorId: string): Promise<Company> {
  const { data, error } = await supabase
    .from('COMPANY')
    .insert([
      {
        company_name: companyName,
        company_creator: creatorId,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}