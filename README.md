# Amberside Energy Dashboard

![alt text](./src/../static/ael-logo.png)


This is the dashboard design for Amberside Energy's app dashboard.

# Instruction

FIRST!!! create ```./src/config.ts```, or uncomment ```./src/config__templates.ts``` and populate the menus. The list is what gets displayed in the dashboard.

build statically to ```index.html``` using ```npm run build```. ONLY serve with a webserver such as apache httpd or nginx.


---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
