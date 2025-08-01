import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_PROJECT_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databasesId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    inventoryCollectionId: import.meta.env
        .VITE_APPWRITE_INVENTORY_COLLECTION_ID,
    likesCollectionId: import.meta.env.VITE_APPWRITE_LIKES_COLLECTION_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    categoriesCollectionId: import.meta.env
        .VITE_APPWRITE_CATEGORIES_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
