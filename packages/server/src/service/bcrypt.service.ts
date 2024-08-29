import bcrypt from "bcryptjs"


export const hashPassword = (value: any) => {
  const hashedPassword = bcrypt.hashSync(value, 10);
  return hashedPassword
}

export const compareBcryptpassword = async (newPassword: string, oldPassword: string) => {
  const comparePassword = await bcrypt.compare(newPassword, oldPassword)

  return comparePassword
}
