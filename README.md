# Project structure demo

The course page [Structuring a React project](https://kdg-ti.gitlab.io/user-interfaces-3/cursus/slides-md/08-project-structure/)
as a small webshop: two features, three pages, and the import rule enforced by the linter. Every
file fits on one screen. Read the folders first, then the files, in the order below.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github/kdg-ti/react-project-structure-demo/tree/main)

No install needed. The other layout: [`by-type` in StackBlitz](https://stackblitz.com/~/github/kdg-ti/react-project-structure-demo/tree/by-type).

## Two layouts, one app

This branch (`main`) groups by **feature**. The branch [`by-type`](../../tree/by-type) is the same
app in the small-project layout, without `features/`. `git diff --stat main by-type` shows that only
the paths differ.

## Run it

```bash
pnpm install
pnpm dev            # http://localhost:5173
```

The mock backend is json-server, as in Piggybank, but it runs inside the Vite dev server and
answers under `/api` (`vite.config.ts`). One command, one port. The data is `backend-mock/data.json`.

## The tour

```text
src/
├── main.tsx                  mounts <App />
├── App.tsx                   providers and routes: the app layer
├── components/               SHARED / GLOBAL: knows nothing about products or carts
│   ├── ui/                   Button, Spinner
│   └── layout/               Header
├── lib/                      axios and TanStack Query, configured once
├── utils/                    formatPrice: a pure function
├── features/
│   ├── products/
│   │   ├── api/              the calls to the backend
│   │   ├── hooks/            useProducts, useProduct: TanStack Query
│   │   ├── components/       ProductList, ProductCard, ProductDetail
│   │   └── types/            Product
│   └── cart/
│       ├── store/            a Zustand store, only the cart needs it
│       ├── components/       Cart, CartItem, CartBadge, AddToCartButton
│       └── types/            CartLine
└── pages/                    HomePage, ProductPage, CheckoutPage: thin screens
```

Things to notice, one per place:

1. **`pages/HomePage.tsx`** is three lines. `ProductList` fetches its own data; the page only puts it
   on the screen.
2. **`pages/ProductPage.tsx`** shows two features on one screen. The products feature may not import
   the cart feature, so the page puts the "Add to cart" button under `ProductDetail` itself.
3. **`App.tsx`** puts the `CartBadge` inside `Header`, as its children. The header is shared, so it
   cannot import the cart itself.
4. **`features/cart/types/cartLine.ts`** remembers a product's name and price itself, so the cart
   never imports `Product` from the products feature.
5. **`features/cart/components/CartBadge.tsx`** reads the store with a selector: it re-renders only
   when the count changes.

## Break it

The rule is enforced by `.oxlintrc.json`. Try it:

1. In `src/components/ui/Button.tsx`, add `import { useCartStore } from '@/features/cart/store/cartStore'`.
2. Run `pnpm lint`. Read the message: *Shared/global code imports no features or pages.*
3. Now let `features/cart/components/Cart.tsx` import something from `@/features/products/…`.
4. `pnpm lint` again: *A feature imports only shared/global code.*

Inside a feature, import its own files with a relative path (`../store/cartStore`): the `@/features/…`
form is what the rule blocks.

## What is not here

No `features/<name>/index.ts` barrel files: every import names the file it needs. No global
`store/` or `hooks/`: the cart's store lives in the cart. No `config/`, `providers/` or `routes/`
folders: at this size `App.tsx` holds the providers and the routes, and the page says when to add them.

Refresh the browser and the cart is empty: client state lives in memory. Keeping it would be
Zustand's `persist` middleware, which is a later lesson.
