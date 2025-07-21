import { ID, OAuthProvider, Query } from "appwrite";
import {
    type inventoryItemsConditions,
    type TInventoryItem,
    type TLikedRecipe,
    type TNewUser,
    type TUserDocument,
} from "../../types";
import { MAX_ITEMS } from "../../utils/constants";
import { generateUsername } from "../../utils/helpers";
import { account, appwriteConfig, databases } from "./config";
import { addDays } from "date-fns";

// CREATE new user
export async function createUserAccount(user: TNewUser) {
    try {
        // Create new account
        const newAccount = await account.create(
            ID.unique(), // userId
            user.email, // email (optional)
            user.password, // password (optional)
            user.name // name (optional)
        );
        if (!newAccount) throw Error;

        // Store user data in database
        const userDocument = await createUserDocument({
            account_id: newAccount.$id,
            email: user.email,
            name: user.name,
            username: generateUsername(user.name),
        });
        if (!userDocument) throw Error;

        // Log in user
        const session = await loginUser({
            email: user.email,
            password: user.password,
        });
        if (!session) throw Error;

        return session;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function createUserDocument(user: TUserDocument) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databasesId, // databaseId
            appwriteConfig.usersCollectionId, // collectionId
            ID.unique(), // documentId
            user // data
        );

        return newUser;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function loginUser(user: { email: string; password: string }) {
    try {
        const session = await account.createEmailPasswordSession(
            user.email,
            user.password
        );

        return session;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function loginByGoogle() {
    try {
        account.createOAuth2Session(
            OAuthProvider.Google, // provider
            `${import.meta.env.VITE_URL}/auth/callback`, // redirect on success
            `${import.meta.env.VITE_URL}/log-in` // redirect on failure
        );
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function logoutUser() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function getCurrentUser() {
    try {
        const user = await account.get();
        if (!user) throw Error;

        const currentUser = await getUserDocument(user.$id);

        return currentUser;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

export async function getUserDocument(userId: string) {
    try {
        const currentUser = await databases.listDocuments(
            appwriteConfig.databasesId,
            appwriteConfig.usersCollectionId,
            [Query.equal("account_id", userId)]
        );

        return currentUser?.documents[0];
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// CREATE inventory item
export async function createInventoryItem(inventoryItem: TInventoryItem) {
    try {
        const response = await databases.createDocument(
            appwriteConfig.databasesId,
            appwriteConfig.inventoryCollectionId,
            inventoryItem.inventoryId,
            {
                creator: inventoryItem.userId,
                name: inventoryItem.name,
                quantity: Number(inventoryItem.quantity),
                expire_date: inventoryItem.expireDate,
                category: inventoryItem.categoryId,
            }
        );
        return response;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// Update inventory item
export async function updateInventoryItem(inventoryItem: TInventoryItem) {
    console.log(inventoryItem);
    try {
        const result = await databases.updateDocument(
            appwriteConfig.databasesId,
            appwriteConfig.inventoryCollectionId,
            inventoryItem.inventoryId,
            {
                name: inventoryItem.name,
                quantity: Number(inventoryItem.quantity),
                expire_date: inventoryItem.expireDate,
                category: inventoryItem.categoryId,
            }
        );

        return result;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// Delete inventory item
export async function deleteInventoryItem(inventoryItemId: string) {
    try {
        const result = await databases.deleteDocument(
            appwriteConfig.databasesId,
            appwriteConfig.inventoryCollectionId,
            inventoryItemId
        );

        return result;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// Get inventory
export async function getInventoryItems({
    userId,
    from,
    categoryId,
    condition,
}: {
    userId: string;
    from?: number;
    categoryId?: string;
    condition?: inventoryItemsConditions;
}) {
    const now = new Date().toISOString();
    const nextWeek = addDays(new Date(), 7).toISOString();

    const query = [Query.equal("creator", userId)];

    if (from !== undefined) {
        query.push(Query.offset(from), Query.limit(MAX_ITEMS));
    }
    if (categoryId) query.push(Query.equal("category", categoryId));
    if (condition === "expireSoon") {
        query.push(
            Query.greaterThan("expire_date", now),
            Query.lessThan("expire_date", nextWeek)
        );
    } else if (condition === "expired") {
        query.push(Query.lessThan("expire_date", now));
    }

    try {
        const response = await databases.listDocuments(
            appwriteConfig.databasesId,
            appwriteConfig.inventoryCollectionId,
            query
        );

        return response;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// Get categories
export async function getCategories() {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.databasesId,
            appwriteConfig.categoriesCollectionId
        );

        return response;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// PUT liked recipe
export async function likeRecipe(likedRecipe: TLikedRecipe, userId: string) {
    try {
        const response = await databases.createDocument(
            appwriteConfig.databasesId,
            appwriteConfig.likesCollectionId,
            ID.unique(),
            { ...likedRecipe, users: [userId] }
        );
        return response;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}

// DELETE liked recipe
export async function unLikeRecipe(likedRecipeId: string) {
    try {
        const response = await databases.deleteDocument(
            appwriteConfig.databasesId,
            appwriteConfig.likesCollectionId,
            likedRecipeId
        );
        return response;
    } catch (error) {
        console.error(error);
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error(String(error));
    }
}
