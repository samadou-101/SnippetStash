import bcrypt from "bcrypt";

export const encryptPassword = async (passowrd: string): Promise<string> => {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(passowrd, saltRounds);
    return hashedPassword;
  } catch (e) {
    throw new Error("Password hashing failed");
  }
};
