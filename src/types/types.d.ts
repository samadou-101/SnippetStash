declare namespace NodeJS {
  export interface ProcessEnv {
    SECRET_TOKEN_KEY: string;
    DB_URI: string;
    DEV_PORT: number;
  }
}
