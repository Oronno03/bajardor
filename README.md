# 🛒 বাজার দর (BazarDor)

**BazarDor** is a responsive web application that helps users explore daily prices of essential products in Bangladesh. It provides an easy way to compare prices, track price changes, browse products by category, and view market-wise price information.

🔗 **Live Demo:** https://bajarerdor.vercel.app
---

## ✨ Features

- 📊 **Daily Price Overview** — Browse essential product prices with clear price and unit information.
- 📈 **Price Change Tracking** — Explore products with rising and falling prices, including percentage changes.
- 🛍️ **Product Catalog** — View all available products in a responsive card-based layout.
- 🔎 **Product Details** — Explore minimum, maximum, and average prices alongside market-wise price information.
- 🗂️ **Category Browsing** — Browse products by category and sort them by price in ascending or descending order.
- 🔐 **Authentication** — Sign up and sign in using Better Auth, with email/password and social login options.
- 👤 **Profile Management** — View your profile and update your personal information.
- 🔔 **Toast Notifications** — Receive feedback for authentication actions, validation errors, and other interactions.
- ⏳ **Loading Skeletons** — Enjoy loading placeholders while product data is being fetched.
- 📱 **Fully Responsive Design** — Optimized for mobile phones, tablets, and desktop screens.
- 🚫 **Custom 404 Pages** — Helpful error pages for invalid routes and unavailable products or categories.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Application framework and routing |
| React | User interface development |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and UI design |
| Better Auth | Authentication and user management |
| React Toastify | Toast notifications |
| BazarDor API | Product, category, and market-price data |
| ShadcnUI | Dropdown for the profile menu |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment and hosting |

---

## 🚀 Getting Started

Follow these steps to run BazarDor locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — a version compatible with your Next.js project
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Oronno03/bajardor
cd bazardor
```


### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your application.

For example:

```env
MONGODB_URL
BETTER_AUTH_SECRET=secret
BETTER_AUTH_URL=http://localhost:3000 # Your base url
GOOGLE_CLIENT_SECRET=secret
GOOGLE_CLIENT_ID=id
GITHUB_CLIENT_SECRET=secret
GITHUB_CLIENT_ID=id
```

Add any other variables required by your project's Better Auth configuration or social login providers, such as Google and GitHub OAuth credentials.


**Important:** Use the exact environment variable names expected by your code. Never commit real secrets, API credentials, or OAuth client secrets to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---


## 📂 Core Application Routes

| Route | Description |
|---|---|
| `/` | Home page with price highlights and all products |
| `/product/[productId]` | Product details and market-wise price information |
| `/category/[categoryId]` | Category-specific product listing |
| `/sign-in` | User sign-in |
| `/sign-up` | User registration |
| `/profile` | User profile |

*Routes may differ slightly depending on the final application structure.*

---

## 📱 Responsive Design

BazarDor is designed to provide a consistent experience across different screen sizes.

- **Mobile:** Compact navigation, stacked hero section, and a single-column or multi-column product grid depending on screen width.
- **Tablet:** Adaptable navigation and product cards arranged in a comfortable grid.
- **Desktop:** Expanded layouts, multi-column product grids, and optimized spacing.

---

## 🔒 Authentication

Authentication is implemented using Better Auth.

Supported functionality includes:

- Email and password registration
- Email and password sign-in
- Google and GitHub social authentication, when configured
- Sign-out
- Protected product-detail pages
- Profile information updates
- Authentication feedback through toast notifications

Social authentication requires the appropriate provider credentials and callback configuration.

---

## 🚀 Deployment

BazarDor can be deployed on platforms such as [Vercel](https://vercel.com/).

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure all required environment variables.
4. Set up the production URL and OAuth callback URLs.
5. Deploy the application.
6. Test authentication, product pages, category pages, and direct URL refreshes after deployment.

---

## 📌 Disclaimer

The displayed prices are indicative and may vary depending on market conditions, location, availability, and other factors. Users should verify actual prices with their local markets.

---

## 👨‍💻 Author

**Intiser Zaman (Oronno)**

- GitHub: [@Oronno03](https://github.com/Oronno03)

---


