import { User, Prisma } from "@prisma/client"

export interface IuserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  find(): Promise<User[]>
  delete(id: string): Promise<User>
}
