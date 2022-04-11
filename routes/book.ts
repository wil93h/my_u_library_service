import { Router } from "express";
import { getBook, getBooks, postBook } from "../controller/books";


const router = Router();

router.get("/"      ,getBooks);
router.get("/:id"   ,getBook);
router.post("/"     ,postBook);
export default router