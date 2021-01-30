---
title: Set the title for a page
order: 2
---

You should set a title for every page. The value of the `title` setting is displayed on the page itself, in the navigation bar and breadcrumbs, and in the `<title>` tag of the page that appears in your web browser.

To set the title, you need to add _front matter_ at the top of your Markdown file. Front matter always starts and ends with three dashes (`---`).

After the front matter, you can write your content as normal.

Here's an example:

```
---
title: Introduction
---

The content of your page goes here.
```

# Writing in YAML

Everything within the `---` is considered [YAML markup language](https://yaml.org/).

You generally don't need to worry about this, but there's one gotcha: if your page title contains a colon (`:`), you'll need to wrap the whole title in quotes.

For example:

```
# This will cause an error
---
title: Star Wars: The Force Awakens
---

# This will work correctly
---
title: "Star Wars: The Force Awakens"
---
```
