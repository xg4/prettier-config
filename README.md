# @xg4/prettier-config

> My personal [Prettier](https://prettier.io/) config.

## Install

> Install the package using `pnpm` (or `yarn`, `npm`)

```sh
# pnpm
pnpm i -D @xg4/prettier-config
# yarn
yarn add -D @xg4/prettier-config
```

## Usage

Add the `prettier` key to your `package.json`

```diff
diff --git a/package.json b/package.json
index ae72749..224be39 100644
--- a/package.json
+++ b/package.json
@@ -19,6 +19,7 @@
   "files": [
     "index.json"
   ],
+  "prettier": "@xg4/prettier-config",
   "publishConfig": {
     "access": "public"
   }
```

## License

MIT
