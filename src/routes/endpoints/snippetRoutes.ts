import express from "express";
import {
  addSnippet,
  deleteSnippetById,
  getSnippetById,
  updateSnippetById,
} from "../../controllers/snippets/snippets.controllers.js";
import { validateSnippet } from "../../middleware/validation/validateSnippet.js";
import { validateSnippetID } from "../../middleware/validation/validateParams.js";
import { checkAuth } from "../../middleware/auth/checkAuth.js";
const snippetRouter = express.Router();

/**
 * @swagger
 * /snippets/{id}:
 *   get:
 *     summary: Get a snippet by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the snippet to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Snippet retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 title:
 *                   type: string
 *                   example: "Sample Snippet"
 *                 content:
 *                   type: string
 *                   example: "This is the snippet content"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Snippet not found
 */

snippetRouter.get("/:id", checkAuth, validateSnippetID, getSnippetById);
snippetRouter.post("/", checkAuth, validateSnippet, addSnippet);
snippetRouter.put("/", updateSnippetById);
snippetRouter.delete("/:id", checkAuth, deleteSnippetById);

export default snippetRouter;
