import express from "express";
import {
  addSnippet,
  getSnippetById,
  updateSnippetById,
} from "../../controllers/snippets/snippets.controllers.js";
import { validateSnippet } from "../../middleware/validateSnippet.js";
import { validateSnippetID } from "../../middleware/validateParams.js";
import { checkAuth } from "../../middleware/auth/checkAuth.js";
const snippetRouter = express.Router();

snippetRouter.get("/:id", checkAuth, validateSnippetID, getSnippetById);
snippetRouter.post("/", checkAuth, validateSnippet, addSnippet);
snippetRouter.put("/", updateSnippetById);

export default snippetRouter;
