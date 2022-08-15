export interface ISession {
  refreshToken: string;
  expiresAt: Date;
  applicationType: string;
  uniqueId: string;
}
