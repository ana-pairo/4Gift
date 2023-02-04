import { Prisma } from "@prisma/client";


export type UpdateUserParams = {
    newUserData: UsersParams; userId: number;
}

export type UsersParams = Omit<Prisma.UsersCreateManyInput, "id" | "accessToken" | "createdAt" | "updatedAt">
