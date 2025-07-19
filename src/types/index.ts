import type { Models } from "appwrite";
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

export type TNewUser = {
    email: string;
    password: string;
    name: string;
};

export type TUserDocument = {
    account_id: string;
    email: string;
    name: string;
    username: string;
};

export type TLinkPage = {
    id: string;
    icon: ReactElement;
    label: string;
    path: string;
};

export type TAuthContext = {
    user: TUserDocument;
    setUser: Dispatch<SetStateAction<TUserDocument>>;
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};

export interface ICategories extends Models.Document {
    slug: string;
    name: string;
    imageSrc: URL;
}

export type TFilterList = {
    id: string;
    label: string;
};

export type TInventory = {
    id: number;
    name: string;
    quantity: number;
    category: string;
    imageSrc: string;
    expireDate: string;
};

export type TInventoryItem = {
    inventoryId: string;
    name: string;
    quantity: number;
    expireDate: string;
    categoryId: string;
    userId: string;
};

export type TLikedRecipe = {
    recipe_id: number;
    title: string;
    imageSrc: URL;
};

export type TRecipe = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients: TSedIngredient[];
    usedIngredients: TSedIngredient[];
    unusedIngredients: TSedIngredient[];
    likes: number;
};

export type TSedIngredient = {
    id: number;
    amount: number;
    unit: string;
    unitLong: string;
    unitShort: string;
    aisle: string;
    name: string;
    original: string;
    originalName: string;
    meta: string[];
    image: string;
    extendedName?: string;
};

export type TRecipeDetails = {
    id: number;
    image: string;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: null;
    cookingMinutes: null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: null;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: TExtendedIngredient[];
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    spoonacularScore: number;
    spoonacularSourceUrl: string;
};

export type AnalyzedInstruction = {
    name: string;
    steps: TStep[];
};

export type TStep = {
    number: number;
    step: string;
    ingredients: TEnt[];
    equipment: TEnt[];
    length?: TLength;
};

export type TEnt = {
    id: number;
    name: string;
    localizedName: string;
    image: string;
};

export type TLength = {
    number: number;
    unit: string;
};

export type TExtendedIngredient = {
    id: number;
    aisle: string;
    image: string;
    consistency: Consistency;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: Measures;
};

export enum Consistency {
    Liquid = "LIQUID",
    Solid = "SOLID",
}

export type Measures = {
    us: TMetric;
    metric: TMetric;
};

export type TMetric = {
    amount: number;
    unitShort: string;
    unitLong: string;
};

export type TSettings = {
    icon: ReactNode;
    label: string;
};

export type TBenefit = {
    icon: ReactNode;
    title: string;
    description: string;
};

export type TUseStep = {
    color: string;
    title: string;
    description: string;
};

export type Timpacts = {
    impact: string;
    impactNumber: string;
};

export type inventoryItemsConditions = "fresh" | "expireSoon" | "expired";

export type TNotificationContext = {
    isLoadingUser: boolean;
    expireSoonInventory: Models.DocumentList<Models.Document> | undefined;
    isLoadingExpireSoonInventory: boolean;
    expiredInventory: Models.DocumentList<Models.Document> | undefined;
    isLoadingExpiredInventory: boolean;
};
