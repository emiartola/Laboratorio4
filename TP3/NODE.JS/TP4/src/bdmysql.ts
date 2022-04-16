import {createPool} from 'mysql'

export const bd = createPool({
    host: 'localhost',
    user: 'root',
    password: 'sasa',
    database: 'tp4',
    connectionLimit: 10
  });
  