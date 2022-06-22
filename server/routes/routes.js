import express from "express";

import { getUser,register } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUser)

export default router;