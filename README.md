# Project structure demo · by type

The same webshop as on `main`, in the **small-project layout**: no `features/`, the files grouped
by what they are. Same code, same screens; only the paths differ. Compare them:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github/kdg-ti/react-project-structure-demo/tree/by-type)

No install needed. The other layout: [`main` in StackBlitz](https://stackblitz.com/~/github/kdg-ti/react-project-structure-demo/tree/main).

```bash
git diff --stat main by-type
```

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
├── App.tsx                   axios base URL, QueryClient, routes
├── api/                      products.ts: every call to the backend
├── components/
│   ├── ui/                   Button, Spinner
│   ├── layout/               Header
│   ├── Cart/                 Cart and its sub-components, AddToCartButton, CartBadge
│   ├── ProductList/          ProductList and ProductCard
│   └── ProductDetail.tsx     no sub-components: one file
├── hooks/                    useProducts, useProduct: TanStack Query
├── pages/                    HomePage, ProductPage, CheckoutPage
├── store/                    cartStore: Zustand
├── types/                    Product, CartLine
└── utils/                    formatPrice
```

The import rule is simpler here: everything may import everything, except that **only `App.tsx`
imports a page**. `.oxlintrc.json` enforces that one line.

## When to switch to `main`

Changing the cart now touches `components/Cart/`, `store/`, `types/` and `pages/`: four folders.
That is the moment the course page says to group by feature. Check out `main` and look at
`src/features/cart/`: the same files, next to each other.
