import { Action } from '@ngrx/store';

export const CHOOSE = '[Mode] ChangeMode';

export class ChangeMode implements Action {
  readonly type = CHOOSE;
  constructor(public payload: string) {}
}

export type actions = ChangeMode;