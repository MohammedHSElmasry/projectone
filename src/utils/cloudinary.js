import { v2 as cloudinary } from "cloudinary";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// تهيئة Cloudinary
cloudinary.config({
  cloud_name: 'dl3fchoxe',
  api_key: '642148465832481',
  api_secret: 'VW0ofLQmAxyIe_CzTsOMgwNcYMY',
  secure: true
});

export default cloudinary;

