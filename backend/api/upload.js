import express from "express";
import multer from "multer";
import serverless from "serverless-http";
import path from "path";

const app = express();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) return cb(null, true);
    cb(new Error("Only images are allowed"));
  }
});

// Single file upload
app.post("/upload", upload.single("myFile"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");
  res.json({ message: "File uploaded successfully", file: req.file });
});

// Multiple files upload
app.post("/uploads", upload.array("myFiles", 5), (req, res) => {
  if (!req.files) return res.status(400).send("No files uploaded");
  res.json({ message: "Files uploaded successfully", files: req.files });
});

export default serverless(app);
