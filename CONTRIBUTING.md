# Contributing Guide

## Rules

1. Make sure you put things in the right category!
2. Always add your items to the end of a list. To be fair, the order is first-come-first-serve.
3. If you think something belongs in the wrong category, or think there needs to be a new category, feel free to edit things too.
4. Provide a detailed docs with themes and plugins about how to use them.
5. Themes and plugins should be open source projects and the package should have a valid repo.

## Warning

You should ensure your plugins compatable with latest VuePress version fitting major.

Any plugins which is not working with latest major version or with broken docs will be removed from list after 30 days.

## Adding your plugins and themes

You are free to add your plugins and themes to the site, just open a new PR.

- To add a plugin, you should edit `config/plugins.json` and add your plugin to the end of proper list.
- To add a theme, you should edit `config/themes.json` and add your plugin to the end of proper list.

<details>
<summary>These contents should be included in your PR body</summary>

- [x] My work is open source and licensed under MIT or Apache-2.0.
- [x] My work is a plugin or theme for VuePress 2, or tools related with VuePress 2.
- [x] My work is workable with latest VuePress 2 version now, and I will keep supporting later VuePress 2 versions. I promise if I abandon my project, I will open another PR to remove it.
</details>

## Requesting vuejs.press domain

You are free to request a `vuejs.press` subdomain for your plugin or theme.

You can apply a `vuejs.press` subdomain as long as you agree with the following rules:

1. Your work should be **open source** and licensed under MIT or Apache-2.0.
1. Your work should be plugin or theme for VuePress 2, or tools related with VuePress 2.
1. Your work should be workable with **latest VuePress 2 version** unless the latest VuePress 2 version **was released less than 30 days ago**.
1. Only documentation content is allowed at your subdomain. **No other content** is allowed, including any **political, religious, or other controversial content**.

You should add a new line in `config/vuejs.press.zone`, and we will sync that file with DNS provider manually.

<details>
<summary>These contents should be included in your PR body</summary>

- [x] My work is open source and licensed under MIT or Apache-2.0.
- [x] My work is a plugin or theme for VuePress 2, or tools related with VuePress 2.
- [x] My work is workable with latest VuePress 2 version now, and I will keep supporting later VuePress 2 versions. I promise if I abandon my project, I will open another PR to remove it.
- [x] I promise only documentation content is served at subdomain I apply to.
</details>
