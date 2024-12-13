import sql from 'better-sqlite3';
import { EntityId } from './interfaces';

export const db = sql('data.db');

export const getEntityIdByName = (tableName: string, columnName: string, name: string): EntityId => {
  return db.prepare(`SELECT id FROM ${tableName} WHERE ${columnName} = ?`).get(name) as EntityId;
};
