"use strict";

import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

const _filename = fileURLToPath(import.meta.url);

const _dirname = path.dirname(_filename);

const envFilePath = path.resolve(_dirname, ".env");

dotenv.config({ path: envFilePath });

export const keyID = process.env.clientID;
export const keySecret = process.env.clientSecret;
export const cookieKey = process.env.cookieKey;
export const DB_URL = process.env.DB_URL;
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;