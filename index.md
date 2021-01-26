---
title: Home
---

**simple-handbook** is a ready-made static site to convert Markdown files into online documentation. 

It is built with the static-site generator [Eleventy](https://11ty.dev/) and is preconfigured to automatically deploy to [GitHub Pages](https://pages.github.com/).

# Features

* Automatic navigation and breadcrumbs based on file / folder structure
* Automatic table of contents by adding the `[[toc]]` tag to a page
* Custom callout boxes for information, warnings and alerts
* Emoji support with shortcuts like `:100:` :100:

# Getting started

:::warning
Almost all the code to build the handbook lives in the `_site` directory, away from your content.

To run or build the directory on your machine, you'll need to `cd` into this directory first.
:::

To install dependencies:

```
cd _site && npm install
```

To run the current site in development:

```
cd _site && npm run start
```

To build the site locally:

```
cd _site && npm run build
```
