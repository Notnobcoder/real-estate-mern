import bcrypt from "bcryptjs"


export const hashPassword = async (value: any) => {
  const hashedPassword = await bcrypt.hashSync(value, 10);
  return hashedPassword
}
