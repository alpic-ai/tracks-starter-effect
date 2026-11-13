# Effect starter

A minimal HTTP server in TypeScript with Effect 4, run by Node.js without a build step, no database.

- `src/main.ts`: the server, with its `GET /` route
- `tsconfig.json`: the TypeScript configuration, type-checked with `npm run typecheck`

## Run

```sh
npm install
npm run dev
```

Then open http://localhost:3000.
