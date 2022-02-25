import { Pool } from 'pg';

import dotenv from 'dotenv';

import { connectionString } from '../settings';

class Pooling {

  constructor() {
    dotenv.config();
    this.pool = new Pool({ connectionString });
  }

  getPool() {
    return this.pool;
  }

  closePool() {

    if(this.tag == 'accountpool') {
      this.pool = null;
      return "Killed " + this.tag + " for " + this.origin;
    }

    if(this.tag == 'businesspool') {
      this.pool = null;
      return "Killed " + this.tag + " for " + this.origin;

    }

  }

}
export const pool = new Pooling();
