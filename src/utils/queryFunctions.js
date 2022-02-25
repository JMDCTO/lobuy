import { pool } from '../models/pool';
import {
  insertUser,
  dropUserTable,
  createUserTable,
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropUserTable ]);
export const createTables = () => executeQueryArray([ createUserTable ]);
export const insertIntoTables = () => executeQueryArray([ insertUser ]);
//export const getFromTable = () => executeQueryArray([ getMessages ]);
