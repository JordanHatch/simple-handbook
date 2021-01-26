---
title: Deploy with GitHub Pages
---

Deploying with GitHub Pages is the quickest and easiest way to get started with Simple Handbook.

[[toc]]

# Step 1: Set up a new GitHub repository

To get started, [create a copy of this GitHub repository](https://github.com/JordanHatch/simple-handbook/generate) into your own account or organisation. 

This will be used as the starting point for your content.

Leave the option to _Include all branches_ unchecked.

::: warning
If you're on the free GitHub plan, only public repositories can be used with GitHub Pages. If your repository is private, you'll need to deploy your site somewhere else. 

[More details in the GitHub documentation &rarr;](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)
:::

# Step 2: Confirm your site builds successfully

Simple Handbook uses GitHub Actions to build and deploy your site. You should check that this project works before going any further.

In your new repository, open the _**Actions**_ tab. You should see a workflow listed under _**Build and Deploy**_.

It may take a few minutes for your site to build for the first time. If you see a green tick, you're good to go.

# Step 3: Turn on GitHub Pages

GitHub Pages hosts the built version of your site. 

Every time your site changes, GitHub Actions builds a new version of your site and saves a copy of it to the _**gh-pages**_ branch of your repository.

::: warning
Don't make manual changes to the files in the _**gh-pages**_ branch. They'll be overwritten the next time your site is built.
:::

You'll most likely have to turn GitHub Pages on for your repository. Open the _**Settings**_ tab. The settings for GitHub Pages are near the bottom of the page.

Under _**Source**_, select _**gh-pages**_, and press _**Save**_. 

Within a few minutes, your site will be available to view. The website address of your GitHub Pages site will appear above these settings.

# Step 4: Clearing out the default content

By default, your new handbook will contain a copy of this documentation. 

::: info
If you're new to Markdown, it may be useful to edit existing pages first to experiment with how it works.
:::

When you're ready to start afresh, you can delete almost all the files in the repository.

Be sure not to delete the following three files and directories:

* The `_site/` directory - this contains the code for your site
* The `.github/` directory - this tells GitHub how to build and deploy your site
* The `.eleventyignore` file - this is used in the build process to make sure only your content gets included



