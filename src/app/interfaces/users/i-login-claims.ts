export interface ILoginClaims {
  accessToken?: string;
  userData: IClaims;
}

export interface IClaims {
  sub: string;
  email: string;
  username: string;
  roles: string[];
}
