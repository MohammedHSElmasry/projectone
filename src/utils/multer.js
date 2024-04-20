import multer from "multer";

export const fileValidation = {
    image: ["image/jpeg", "image/png", "image/jfif"],
    file: ["application/pdf"]
};

export function fileUpload(customValidation = [],) {
    const storage = multer.diskStorage({});

    function fileFilter(req, file, cb) {
        if (customValidation.length > 0 && !customValidation.includes(file.mimetype)) {
            return cb(new Error("invalid format", { cause: 400 }), false);
        }
        cb(null, true);
    }

    const upload = multer({
        fileFilter,
        storage,
    });

    return upload;
}
