import { Router } from "express";
import { getUser, getUsers, postUser } from "../controller/users";

const router = Router();

router.get("/"      ,getUsers);
router.get("/:id"   ,getUser);
router.post("/"     ,postUser);
export default router