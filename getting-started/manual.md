---
title: Build and run the site manually
---

Build and run the site manually on your own computer if you want to make changes to the template or settings.

[[toc]]

# Dependencies

You'll need to install [NodeJS](https://nodejs.org/en/) before you start.

If you're running on a Mac, you'll likely need to install the Xcode Developer Tools. Run `xcode-select --install` before you begin.

# Quick start

```
# Clone the repository
git clone https://github.com/<your username>/<your repository>.git

cd _site/

# Install dependencies
npm install

# Build the site once
npm run build

# Run the development server
npm run start
```

:::warning
Almost all the code to build the handbook lives in the `_site` directory, deliberately away from your content.

You'll need to be in this directory to run `npm` commands.
:::

The development server runs on <http://localhost:3000/> and uses BrowserSync to automatically reload the site when you make a change.
