import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requireAuth = (req, res, nnext) => {
    console.log('Authentication');
}