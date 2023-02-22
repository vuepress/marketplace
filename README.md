# [VuePress2 Marketplace](https://marketplace.vuejs.press)

## Introduction

The repo holds the source code for the VuePress2 Marketplace website.

## Adding your plugins and themes

You are free to add your plugins and themes to the site, just open a new PR.

- To add a plugin, you should edit `config/plugins/<category>.json` and add your plugin to **the end of** proper list.
- To add a theme, you should edit `config/themes/<category>.json` and add your plugin to **the end of** proper list.

If you believe you are building a powerful theme or plugin that can be list in multiple categories, you can add theme in multiple places.

<details>
<summary>These contents should be included in your PR body</summary>

- [x] My work is open source and licensed under MIT or Apache-2.0.
- [x] My work is a plugin or theme for VuePress 2, or tools related with VuePress 2.
- [x] My work is workable with latest VuePress 2 version now, and I will keep supporting later VuePress 2 versions. I promise if I abandon my project, I will open another PR to remove it.

</details>

For more details, see [Contributing Guide](https://marketplace.vuejs.press/reference/contributing.html)

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

If you need algolia docsearch, you should modify `config/crawler.config` to add your plugin of theme.

For details, see [Contributing Guide](https://marketplace.vuejs.press/reference/contributing.html)

## License

<!-- markdownlint-disable MD033 -->

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="https://licensebuttons.net/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://github.com/Mister-Hope">
    <span property="dct:title">Mister-Hope</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">VuePress MarketPlace</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="CN" about="https://marketplace.vuejs.press">
  China Mainland</span>.
</p>
