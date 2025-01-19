import { Request, Response, NextFunction } from "express";
import {
  createSnippet,
  findSnippetInDB,
} from "../../services/snippet/snippetService.js";
import mongoose from "mongoose";

export const getSnippetById = async (req: Request, res: Response) => {
  const snippetId = req.params.id;
  const author = req.body.userId;
  try {
    if (snippetId !== undefined) {
      const foundSnippet = await findSnippetInDB(snippetId, author);
      if (foundSnippet !== null) {
        res.send(foundSnippet);
      } else {
        res.status(400).send("No Snippet Found!");
      }
    }
  } catch (error) {
    res.status(501).send("Internal Server Error!");
  }
};

export const addSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, tag, category, code, description, language, userId } =
    req.body;
  console.log(userId);
  try {
    const savedSnippetID = await createSnippet(userId, {
      title,
      tag,
      category,
      code,
      description,
      language,
    });
    res.status(201).send("snippet ID: " + " " + savedSnippetID);
    return;
  } catch (error) {}
  res.send("welcome from snippet");
};

export const updateSnippetById = () => {};
