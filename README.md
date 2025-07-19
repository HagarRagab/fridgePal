# 🧊 FridgePal – Smart Grocery Tracker

FridgePal is a modern and responsive **Smart Grocery Tracker** built with **React + TypeScript**. It helps users manage their fridge inventory, avoid food waste, and discover recipe ideas based on what's available. Designed to be both user-friendly and powerful, FridgePal is a project that demonstrates advanced frontend development skills, real-world APIs integration, and state management.

---

🔗 [Live Demo](https://fridgepal.com)

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

FridgePal/
├── public/ # Static assets
├── src/
│ ├── components/ # Shared, Home, and Dashboard UI components
│ ├── context/ # Theme, Auth, Notification contexts
│ ├── hooks/ # Custom React hooks for API and logic
│ ├── lib/ # API configuration for Appwrite & Spoonacular
│ ├── private/ # Authenticated routes/pages
│ ├── public/ # Publicly accessible pages (Home, Auth)
│ ├── types/ # Global TypeScript types
│ ├── utils/ # Helpers, constants, theme utils
│ ├── App.tsx # Root component
│ ├── main.tsx # ReactDOM entry point
│ └── index.css # Global styles
├── .env.local # API keys and config (excluded from Git)
├── vite.config.ts # Vite configuration
├── package.json
├── tsconfig.json
└── README.md

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
