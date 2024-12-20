import { Router } from "express";
import {
  createPoem,
  deletePoem,
  getAllPoems,
  getPoemStats,
  getRandomPoem,
  getSinglePoem,
  updatePoem,
} from "../controllers/poemController";
const router = Router();

router
  .post("/", createPoem)
  .get("/", getRandomPoem)
  .get("/stats", getPoemStats)
  .get("/:id", getSinglePoem)
  .patch("/:id", updatePoem)
  .delete("/:id", deletePoem);

export default router;
