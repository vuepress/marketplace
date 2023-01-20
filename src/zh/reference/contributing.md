---
title: 贡献指南
icon: signs-post
---

## 添加你的插件和主题

你可以自由地将你的插件和主题添加到站点，只需提交一个新的 PR。

- 要添加插件，你应该编辑 `config/plugins/<catagory>.json` 并将你的插件添加到**正确列表的末尾**。
- 要添加主题，你应该编辑 `config/themes/<catagory>.json` 并将你的插件添加到**正确列表的末尾**。

如果你认为你正在构建一个强大的主题或插件，适用于在多个类别，你可以在多个地方添加它。

::: details 这些内容应包含在你的 PR 正文中

- [x] 我的作品是 VuePress 2 的插件或主题，或与 VuePress 2 相关的工具。
- [x] 我的作品是开源的，并处于 MIT 或 Apache-2.0 协议下。
- [x] 我已经建立了关于我的工作的详细文档，因此其他人可以了解如何使用它。
- [x] 我的工作现在可以配合最新的 VuePress 2 版本，我将继续支持以后的 VuePress 2 版本。
- [x] 我保证如果我放弃我的项目，我会打开另一个 PR 来删除它。

::::

::: warning 删除

你应该确保你的插件与最新的 VuePress 版本兼容。

30 天后，任何不适用于最新主要版本或文档失效的插件将从列表中删除。

::::

## 请求 vuejs.press 网址

你可以自由地为你的插件或主题请求一个 `vuejs.press` 子域。

只要你同意以下规则，你就可以申请 `vuejs.press` 子域：

1. 你的作品应该是 VuePress 2 的插件或主题，或者与 VuePress 2 相关的工具。
1. 你的作品应该是**开源的**并使用 MIT 或 Apache-2.0 许可成。
1. 你的工作应该可以在**最新的 VuePress 2 版本**上工作，除非最新的 VuePress 2 版本**发布时间不超过 30 天**。
1. 你的子域只允许包含文档内容。 **不允许有其他内容**，包括任何**政治、宗教或其他有争议的内容**。

你应该在 `config/vuejs.press.zone` 中添加一个新行，我们将手动将该文件与 DNS 提供商同步。

::: details 这些内容应包含在你的 PR 正文中

- [x] 我的作品是 VuePress 2 的插件或主题，或与 VuePress 2 相关的工具。
- [x] 我的作品是开源的，并处于 MIT 或 Apache-2.0 协议下。
- [x] 我保证在我申请的子域中只提供文档内容。
- [x] 我的工作现在可以使用最新的 VuePress 2 版本，我将继续支持以后的 VuePress 2 版本。
- [x] 我保证如果我放弃我的项目，我会打开另一个 PR 来删除它。

::::

::: info 子域名

子域不可自定义，它应该基于你的插件/主题的名称，通过删除` @``vuepress- `并将`/`替换为`-`来生成，例如：

- `@org/vuepress-plugin-abc` 将是 `org-plugin-abc`
- `vuepress-theme-abc` 将是 `theme-abc`

::::

::: 提示文档搜索

如果你需要 Algolia Docsearch，你应该修改`config/crawler.config`来添加你的主题插件。

你的索引名称将是你申请的子域名。

::::