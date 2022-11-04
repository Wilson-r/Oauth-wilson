export interface IToken {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}

export class Token implements IToken {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
