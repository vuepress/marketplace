import{_ as t,o as s,c as i,h as a}from"./app-B7ZrVead.js";const o={};function l(n,e){return s(),i("div",null,e[0]||(e[0]=[a('<h2 id="adding-your-plugins-and-themes" tabindex="-1"><a class="header-anchor" href="#adding-your-plugins-and-themes"><span>Adding your plugins and themes</span></a></h2><p>You are free to add your plugins and themes to the site, just open a new PR.</p><ul><li>To add a plugin, you should edit <code>config/plugins/&lt;category&gt;.json</code> and add your plugin to <strong>the end of</strong> proper list.</li><li>To add a theme, you should edit <code>config/themes/&lt;category&gt;.json</code> and add your plugin to <strong>the end of</strong> proper list.</li></ul><p>If you believe you are building a powerful theme or plugin that is fittable with multiple categories, you can add it in multiple places.</p><details class="hint-container details"><summary>These contents should be included in your PR body</summary><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> My work is a plugin or theme for VuePress 2, or tools related with VuePress 2.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> My work is open source and licensed under MIT or Apache-2.0.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> I already built detailed docs about my work, so others can understand how to use it.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> My work is workable with latest VuePress 2 version now, and I will keep supporting later VuePress 2 versions.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> I promise if I abandon my project, I will open another PR to remove it.</label></li></ul></details><div class="hint-container warning"><p class="hint-container-title">Removal</p><p>You should ensure your plugins compatible with latest VuePress version.</p><p>Any plugins which is not working with latest major version or with broken docs will be removed from list after 30 days.</p></div><h2 id="requesting-vuejs-press-domain" tabindex="-1"><a class="header-anchor" href="#requesting-vuejs-press-domain"><span>Requesting vuejs.press domain</span></a></h2><p>You are free to request a <code>vuejs.press</code> subdomain for your plugin or theme.</p><p>You can apply a <code>vuejs.press</code> subdomain as long as you agree with the following rules:</p><ol><li>Your work should be <strong>open source</strong> and licensed under MIT or Apache-2.0.</li><li>Your work should be plugin or theme for VuePress 2, or tools related with VuePress 2.</li><li>Your work should be workable with <strong>latest VuePress 2 version</strong> unless the latest VuePress 2 version <strong>was released less than 30 days ago</strong>.</li><li>Only documentation content is allowed at your subdomain. <strong>No other content</strong> is allowed, including any <strong>political, religious, or other controversial content</strong>.</li></ol><p>You should add a new line in <code>config/vuejs.press.zone</code>, and we will sync that file with DNS provider manually.</p><details class="hint-container details"><summary>These contents should be included in your PR body</summary><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> My work is a plugin or theme for VuePress 2, or tools related with VuePress 2.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> My work is open source and licensed under MIT or Apache-2.0.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> I promise only documentation content is served at subdomain I apply to.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> My work is workable with latest VuePress 2 version now, and I will keep supporting later VuePress 2 versions.</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> I promise if I abandon my project, I will open another PR to remove it.</label></li></ul></details><div class="hint-container info"><p class="hint-container-title">Subdomain name</p><p>Subdomain is not customizable, it should based on the name of your plugin/theme, generated by removing <code>@</code> <code>vuepress-</code> and replacing <code>/</code> with <code>-</code>, e.g.:</p><ul><li><code>@org/vuepress-plugin-abc</code> will be <code>org-plugin-abc</code></li><li><code>vuepress-theme-abc</code> will be <code>theme-abc</code></li></ul></div><div class="hint-container tip"><p class="hint-container-title">Docsearch</p><p>If you need Algolia Docsearch, you should modify <code>config/crawler.config</code> to add your plugin of theme.</p><p>Your index name will be the subdomain you apply.</p></div>',14)]))}const d=t(o,[["render",l],["__file","contributing.html.vue"]]),c=JSON.parse('{"path":"/reference/contributing.html","title":"Contributing Guide","lang":"en-US","frontmatter":{"title":"Contributing Guide","icon":"signs-post","description":"Adding your plugins and themes You are free to add your plugins and themes to the site, just open a new PR. To add a plugin, you should edit config/plugins/<category>.json and a...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://marketplacae.vuejs.press/zh/reference/contributing.html"}],["meta",{"property":"og:url","content":"https://marketplacae.vuejs.press/reference/contributing.html"}],["meta",{"property":"og:site_name","content":"VuePress Marketplace"}],["meta",{"property":"og:title","content":"Contributing Guide"}],["meta",{"property":"og:description","content":"Adding your plugins and themes You are free to add your plugins and themes to the site, just open a new PR. To add a plugin, you should edit config/plugins/<category>.json and a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-05T04:48:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-05T04:48:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Contributing Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-05T04:48:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Adding your plugins and themes","slug":"adding-your-plugins-and-themes","link":"#adding-your-plugins-and-themes","children":[]},{"level":2,"title":"Requesting vuejs.press domain","slug":"requesting-vuejs-press-domain","link":"#requesting-vuejs-press-domain","children":[]}],"git":{"createdTime":1672913840000,"updatedTime":1675572481000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"reference/contributing.md","localizedDate":"January 5, 2023","autoDesc":true}');export{d as comp,c as data};
