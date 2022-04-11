import { Router } from "express";
import { getAdministrator, getAdministrators, postAdministrator } from "../controller/administrators";


const router = Router();

router.get("/"      ,getAdministrators);
router.get("/:id"   ,getAdministrator);
router.post("/"     ,postAdministrator);
export default router