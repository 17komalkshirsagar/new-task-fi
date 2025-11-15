import { IAdminProtected } from "../utils/protected";
declare global {
  namespace Express {
    interface Request {
      admin?: IAdminProtected;
    }
  }
}
export {};