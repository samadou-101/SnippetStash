import Snippet from "../../models/snippets/snippet.js";
import mongoose from "mongoose";

export const createSnippet = async (
  userId: string,
  snippet: {
    title: string;
    tag?: string;
    category?: string;
    code: string;
    description?: string;
    language?: string;
  }
): Promise<string> => {
  const author = new mongoose.Types.ObjectId(userId);
  const newSnippet = new Snippet({ ...snippet, author });
  try {
    await newSnippet.save();
    console.log("Snippet saved successfully!");
    return newSnippet._id.toString();
  } catch (error: unknown) {
    throw new Error("Snippet creation failed");
  }
};

// Find a Snippet by ID
export const findSnippetInDB = async (
  snippetId: string,
  author: string
): Promise<mongoose.Document | undefined | null> => {
  const authorId = new mongoose.Types.ObjectId(author);
  const snipId = new mongoose.Types.ObjectId(snippetId);
  try {
    const snippet = await Snippet.findOne({ author: authorId, _id: snipId });
    return snippet;
  } catch (error) {
    console.log("error finding the snippet");
  }
};

// Delete a Snippet by ID

export const deleteSnippet = async (
  snippetId: string,
  author: string
): Promise<void> => {
  const authorId = new mongoose.Types.ObjectId(author);
  const snipId = new mongoose.Types.ObjectId(snippetId);
  try {
    const result = await Snippet.deleteOne({ author: authorId, _id: snipId });
    if (result.deletedCount > 0) {
      console.log("snippet deleted successfully!");
    } else {
      throw new Error("Snippet not found or already exists!");
    }
  } catch (error) {
    console.log("error deleting the snippet");
    throw error;
  }
};
