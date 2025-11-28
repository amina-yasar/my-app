import express from "express";
import { getChildren, addChild, deleteChild, updateChild } from "../controllers/childrenController.js";

const router = express.Router();

router.get("/", getChildren);
router.post("/", addChild);
router.delete("/:id", deleteChild);
router.put("/:id", updateChild);

export default router;
