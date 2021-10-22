# `bunnyghp`

`bunnylol`, but in JS, configurable, and deployed to Github Pages.

> see: [bunny1](http://www.bunny1.org/)

## What is this?

I was on a plane with an hour to kill, and decided [to snack](https://leebyron.com/snack-driven-development/) on a tool from my days at Facebook.

I miss `bunnylol`.  It's a fast and easy way to find things in Chrome without having to type for a (hopefully correct) auto-complete, or to use bookmarks.

So this is a "simple impl" of `bunny1` using `create-react-app` that can be deployed to Github Pages and used in Google Chrome.  It uses [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) to convert command templates to parameters for eventual URLs.

## How do I use it?

You can use my deployment:

1. Open Chrome.
2. Go to [search engines](chrome://settings/searchEngines).
3. Add `bunnyghp` to the list:
   1. Search Engine: `bunnyghp` (or other)
   2. Keyword: `b` (or your preference)
   3. URL: `https://clintandrewhall.github.io/bunnyghp/?q=%s`
4. Open Chrome, click the nav bar, type `b` and:
   1. your command, or
   2. `h`, `help`, or `home` for a list of commands.

...or you can fork and edit `config.ts` and deploy yourself.