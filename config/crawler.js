/**
 * Crawler config
 *
 * You should edit the following config if you want to use docsearch as crawler while you apply vuejs.press subdomain.
 *
 * @property {boolean|string} sitemap [false]
 * Whether the plugin has sitemap or it's sitemap location. Default location is '/sitemap.xml'
 *
 * @property {'vuepress/default'|'hope'|Function} recordExtractor ['vuepress/default']
 * Record extractor function, built-in support added for `@vuepress/theme-default` and `vuepress-theme-hope` so you can use `vuepress/default` and `hope` keywords.
 *
 * @property {Object} initialIndexSettings Additional initialIndexSettings you want
 */
const crawlerConfig = {
  "plugin-auto-catalog": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-blog2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-comment2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-components": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-copy-code2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-copyright2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-feed2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-lightgallery": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-md-enhance": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-photo-swipe": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-pwa2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-reading-time2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-redirect": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-remove-pwa": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-sass-palette": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-seo2": {
    sitemap: true,
    recordExtractor: "hope",
  },
  "plugin-sitemap2": {
    sitemap: true,
    recordExtractor: "hope",
  },

  "theme-hope": {
    sitemap: true,
    recordExtractor: "hope",
  },
};

/*
 * ====================================================
 *
 * Below are scripts which generate the correct crawler
 * Normally you should NOT edit them in PR
 *
 * ====================================================
 */

const commonInitialIndexSettings = {
  attributesForFaceting: ["type", "lang"],
  attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
  attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
  attributesToSnippet: ["content:10"],
  camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
  searchableAttributes: [
    "unordered(hierarchy_radio_camel.lvl0)",
    "unordered(hierarchy_radio.lvl0)",
    "unordered(hierarchy_radio_camel.lvl1)",
    "unordered(hierarchy_radio.lvl1)",
    "unordered(hierarchy_radio_camel.lvl2)",
    "unordered(hierarchy_radio.lvl2)",
    "unordered(hierarchy_radio_camel.lvl3)",
    "unordered(hierarchy_radio.lvl3)",
    "unordered(hierarchy_radio_camel.lvl4)",
    "unordered(hierarchy_radio.lvl4)",
    "unordered(hierarchy_radio_camel.lvl5)",
    "unordered(hierarchy_radio.lvl5)",
    "unordered(hierarchy_radio_camel.lvl6)",
    "unordered(hierarchy_radio.lvl6)",
    "unordered(hierarchy_camel.lvl0)",
    "unordered(hierarchy.lvl0)",
    "unordered(hierarchy_camel.lvl1)",
    "unordered(hierarchy.lvl1)",
    "unordered(hierarchy_camel.lvl2)",
    "unordered(hierarchy.lvl2)",
    "unordered(hierarchy_camel.lvl3)",
    "unordered(hierarchy.lvl3)",
    "unordered(hierarchy_camel.lvl4)",
    "unordered(hierarchy.lvl4)",
    "unordered(hierarchy_camel.lvl5)",
    "unordered(hierarchy.lvl5)",
    "unordered(hierarchy_camel.lvl6)",
    "unordered(hierarchy.lvl6)",
    "content",
  ],
  distinct: true,
  attributeForDistinct: "url",
  customRanking: [
    "desc(weight.pageRank)",
    "desc(weight.level)",
    "asc(weight.position)",
  ],
  ranking: [
    "words",
    "filters",
    "typo",
    "attribute",
    "proximity",
    "exact",
    "custom",
  ],
  highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
  highlightPostTag: "</span>",
  minWordSizefor1Typo: 3,
  minWordSizefor2Typos: 7,
  allowTyposOnNumericTokens: false,
  minProximity: 1,
  ignorePlurals: true,
  advancedSyntax: true,
  attributeCriteriaComputedByMinProximity: true,
  removeWordsIfNoResults: "allOptional",
};

export const recordExtractorMap = {
  "vuepress/default": ({ helpers }) =>
    helpers.docsearch({
      recordProps: {
        lvl0: {
          selectors: ".sidebar-heading.active",
          defaultValue: "Documentation",
        },
        lvl1: ".theme-default-content h1",
        lvl2: ".theme-default-content h2",
        lvl3: ".theme-default-content h3",
        lvl4: ".theme-default-content h4",
        lvl5: ".theme-default-content h5",
        lvl6: ".theme-default-content h6",
        content: ".theme-default-content p, .theme-default-content li",
      },
      indexHeadings: true,
    }),
  hope: ({ helpers }) =>
    helpers.docsearch({
      recordProps: {
        lvl0: {
          selectors: ".sidebar-heading.active",
          defaultValue: "Documentation",
        },
        lvl1: ".theme-hope-content h1",
        lvl2: ".theme-hope-content h2",
        lvl3: ".theme-hope-content h3",
        lvl4: ".theme-hope-content h4",
        lvl5: ".theme-hope-content h5",
        lvl6: ".theme-hope-content h6",
        content: ".theme-hope-content p, .theme-hope-content li",
      },
      indexHeadings: true,
    }),
};

const getUrl = (name) => `https://${name}.vuejs.press`;

export default {
  appId: "4H91G9D3GD",
  apiKey: "34532f86a6941fc826504e55118c1844",
  rateLimit: 25,
  maxDepth: 10,
  startUrls: [
    "https://vuejs.press",
    ...Object.entries(crawlerConfig).map(([name]) => getUrl(name)),
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://vuejs.press/sitemap.xml",
    ...Object.entries(crawlerConfig)
      .filter(([, { sitemap }]) => Boolean(sitemap))
      .map(
        ([name, { sitemap }]) =>
          `${getUrl(name)}/${
            typeof sitemap === "string" ? sitemap : "sitemap.xml"
          }}`
      ),
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://vuejs.press/**",
    ...Object.keys(crawlerConfig).map((name) => `${getUrl(name)}/**`),
  ],
  schedule: "at 20:00 every 1 day",
  actions: [
    {
      indexName: "vuejs-press",
      pathsToMatch: ["https://vuejs.press/**"],
      recordExtractor: recordExtractorMap.hope,
    },
    ...Object.entries(crawlerConfig).map(
      ([name, { recordExtractor = "vuepress/default" }]) => {
        return {
          indexName: name,
          pathsToMatch: [`${getUrl(name)}/**`],
          recordExtractor:
            typeof recordExtractor === "function"
              ? recordExtractor
              : recordExtractorMap[recordExtractor] ||
                recordExtractorMap["vuepress/default"],
        };
      }
    ),
  ],
  initialIndexSettings: {
    "vuejs-press": commonInitialIndexSettings,
    ...Object.fromEntries(
      Object.entries(crawlerConfig).map(
        ([name, { initialIndexSettings = {} }]) => [
          name,
          { ...commonInitialIndexSettings, ...initialIndexSettings },
        ]
      )
    ),
  },
};
