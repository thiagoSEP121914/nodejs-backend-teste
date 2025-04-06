import express, { Router } from 'express';
import controller from '../controllers/controller.js';

const router = Router();
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
export default router;