import { Pool } from 'pg';
import dotenv from 'dotenv';
import { connectionStringBusiness } from '../settings';
dotenv.config();
export const businessPool = new Pool({
  connectionStringBusiness
});