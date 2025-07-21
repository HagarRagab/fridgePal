# 🧊 FridgePal – Smart Grocery Tracker

FridgePal is a modern and responsive **Smart Grocery Tracker** built with **React + TypeScript**. It helps users manage their fridge inventory, avoid food waste, and discover recipe ideas based on what's available. Designed to be both user-friendly and powerful, FridgePal is a project that demonstrates advanced frontend development skills, real-world APIs integration, and state management.

---

🔗 [Live Demo](https://fridge-pal-eight.vercel.app/)

![fridgepal overview](/public/fridgepal-overview.jpg)

## 🚀 Features

### 🧾 Inventory Management

-   Add, edit, and delete food items.
-   Track expiration dates with visual alerts.
-   Filter items by category (e.g., dairy, vegetables, frozen, etc).

### 🛎️ Expiration Notifications

-   In-app alerts for expired and soon-to-expire items.

### 🧠 Smart Recipe Suggestions

-   Get recipe recommendations based on available ingredients.
-   List existing ingredients and needed ingredients.
-   View recipeInfo, ingredients, and preparation steps.
-   Like recipes for quick access later.

### 💻 Auth & Account Management

-   Sign up/log in with secure authentication.
-   Account settings and saved preferences.

### 🎨 Clean UI/UX

-   Responsive, modern interface with reusable components.
-   Theme support and contextual design patterns.

---

## 🛠️ Built With

-   **React** + **TypeScript**
-   **Vite** (for blazing-fast dev server)
-   **Appwrite** (Authentication, Database, Storage)
-   **Spoonacular API** (for recipes)
-   **MUI + Styled-Components** (UI components and styling)
-   **React Tanstack Query** (data fetching & caching)
-   **React Context API** (global state)
-   **React form** (validation)

---

## 📂 Project Structure

-   .env.local
-   .gitignore
-   eslint.config.js
-   index.html
-   package-lock.json
-   package.json
-   public
-   README.md
-   src
    -   App.tsx
    -   components
        -   dashboard
            -   AlertDialog.tsx
            -   CardContainer.tsx
            -   CardContentHeading.tsx
            -   CardsGroup.tsx
            -   FilterMenu.tsx
            -   FormDialog.tsx
            -   ingredientsList.tsx
            -   InventoryCard.tsx
            -   InventoryForm.tsx
            -   LikedRecipeCard.tsx
            -   NavTabs.tsx
            -   PageContainer.tsx
            -   PageHeading.tsx
            -   PageTitle.tsx
            -   RecipeCard.tsx
            -   RecipeInfo.tsx
            -   RecipeInfoChip.tsx
            -   RecipeIngredientsTable.tsx
        -   home
            -   BenefitCard.tsx
            -   BenefitsSection.tsx
            -   Footer.tsx
            -   HeroSection.tsx
            -   HowItWorks.tsx
            -   ImpactCard.tsx
            -   JoinUsSection.tsx
            -   SectionContainer.tsx
            -   SectionTitle.tsx
            -   SocialMediaLink.tsx
            -   UseStep.tsx
        -   shared
            -   AccountTooltip.tsx
            -   BackButton.tsx
            -   ContainedActionButton.tsx
            -   Notifications.tsx
            -   GlassPaper.tsx
            -   Header.tsx
            -   LinkText.tsx
            -   Logo.tsx
            -   LogoIcon.tsx
            -   NoResult.tsx
            -   NotificationTooltip.tsx
            -   PaginationItems.tsx
            -   PasswordInput.tsx
            -   Settings.tsx
            -   Spinner.tsx
            -   TextInput.tsx
            -   TooltipContainer.tsx
    -   context
        -   AuthContext.tsx
        -   NotificationContext.tsx
        -   ThemeContext.tsx
    -   hooks
        -   useCategories.ts
        -   useCreateAccount.ts
        -   useDeleteInventoryItem.ts
        -   useGetCurrentUser.ts
        -   useGetInventory.ts
        -   useInventoryItem.ts
        -   useLikeRecipe.ts
        -   useLoginUser.ts
        -   useLogout.ts
        -   usePagination.ts
        -   useRecipe.ts
        -   useRecipes.ts
        -   useToggleLikeRecipe.ts
        -   useUnlikeRecipe.ts
    -   index.css
    -   lib
        -   appwrite
            -   api.ts
            -   config.ts
        -   spoonacular
            -   api.ts
    -   main.tsx
    -   private
        -   pages
            -   AddItem.tsx
            -   AuthCallback.tsx
            -   Inventory.tsx
            -   Likes.tsx
            -   NotificationsExpired.tsx
            -   NotificationsExpireSoon.tsx
            -   RecipeDetails.tsx
            -   WhatToCook.tsx
        -   RootLayout.tsx
    -   ProtectedRoute.tsx
    -   public
        -   AuthLayout.tsx
        -   pages
            -   Home.tsx
            -   LogIn.tsx
            -   PageNotFound.tsx
            -   SignUp.tsx
    -   theme.d.ts
    -   types
        -   index.ts
    -   utils
        -   constants.ts
        -   helpers.ts
        -   queryKeys.ts
        -   theme.ts
        -   utils.tsx
    -   vite-env.d.ts
-   tsconfig.app.json
-   tsconfig.json
-   tsconfig.node.json
-   vite.config.ts

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/fridgepal.git
cd fridgepal
```

### 2. Install dependencies

npm install

### 3. Set up Google auth provider

[Google console cloud](https://console.cloud.google.com/)

### 4. Set up environment variables

Create a .env.local file and include:

    VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
    VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
    VITE_APPWRITE_DATABASE_ID=your_db_id
    VITE_APPWRITE_COLLECTION_ID=your_collection_id
    VITE_SPOONACULAR_API_KEY=your_spoonacular_key
    AUTH_GOOGLE_ID=your_auth_google_id
    AUTH_GOOGLE_SECRET=your_auth_google_secret

### 5. Run the app locally

npm run dev

## 🙋‍♀️ About the Developer

Hagar Ragab Saad
Front-End Developer with a passion for solving real problems with great UI and code.
📫 [LinkedIn](https://www.linkedin.com/in/hagar-ragab-12ab8b256/) • [Portfolio](https://hagar-ragab.netlify.app/)
