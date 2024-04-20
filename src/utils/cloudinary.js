import { v2 as cloudinary } from "cloudinary";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// تهيئة Cloudinary
cloudinary.config({
  cloud_name: 'dl3fchoxe',
  api_key: '832631762689321',
  api_secret: 'NZh_mNzoXsG3ArCZkHxULkni89E',
  secure: true
});

export default cloudinary;

