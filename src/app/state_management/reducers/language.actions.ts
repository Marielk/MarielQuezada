import { Action } from '@ngrx/store';

export const CHOOSE = '[Language] Changelanguage';

export class Changelanguage implements Action {
  readonly type = CHOOSE;
  constructor(public payload: string) {}
}

export type actions = Changelanguage;
