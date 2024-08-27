
import { MiddlewareFn } from 'type-graphql';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

export interface MyContext {
  req: Request,
  res: Response
}
// export const AuthMiddleware: MiddlewareFn<MyContext> = async ({ context }, next) => {
//   // const sessionToken = context.req.cookies["auth-token"]
//   //
//   // if (!sessionToken) {
//   //   context.res.status(403)
//   //   throw new Error('Not authenticated');
//   // }
//   return next();
// };

export const AuthMiddleware: MiddlewareFn = async ({ }, next) => {
  console.log("middleware working")
  return next();
};



const prisma = new PrismaClient();

// Define the middleware
prisma.$use(async (params, next) => {
  // Check if the model is 'User' and the action is 'create' or 'update'
  if (params.model === 'User') {
    if (params.action === 'create' || params.action === 'update') {
      const user = params.args.data;

      // Check if the password is being updated or created
      if (user.password) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      }
    }
  }

  // Continue with the query execution
  return next(params);
});
