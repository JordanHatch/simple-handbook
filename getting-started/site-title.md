---
title: Set the title of your handbook
---

Your handbook's title appears in the header of the page, and in the `<title>` tag that displays in your browser's window or tab.

By default, it's _**Simple Handbook**_ but you can change this by editing the `_site/data/siteTitle.js` file.

The file looks like this:

```
module.exports = "Simple Handbook"
```

Remove `Simple Handbook` and add your title, being careful not to change the `"` at either side.

If you're using GitHub Pages, saving the file will automatically re-build your site with the updated title.
