import { Action } from '@ngrx/store';

export enum JedisActionTypes {
  LoadJedis = '[Jedis] Load Jedis'
}

export class LoadJedis implements Action {
  readonly type = JedisActionTypes.LoadJedis;
}

export type JedisActions = LoadJedis;
