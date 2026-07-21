import { createJournal, deleteJournal, getJournal, updateJournal } from "../controllers/journalController.js";
import authMiddleware from "../middleware/auth.middleware.js";
import express from "express"

const journalRouter = express.Router();
journalRouter.post('/',authMiddleware,createJournal)
journalRouter.get('/',authMiddleware,getJournal)
journalRouter.put('/:id',authMiddleware,updateJournal)
journalRouter.delete('/:id',authMiddleware,deleteJournal)

export default journalRouter