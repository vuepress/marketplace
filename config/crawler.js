/**
 * Crawler config
 *
 * You should edit the following config if you want to use docsearch as crawler while you apply vuejs.press subdomain.
 *
 * @property {boolean|string} sitemap [false] Whether the plugin has sitemap or it's sitemap location
 *  default location is '/sitemap.xml'
 * @property {Function|'vuepress/default'|'hope'} recordExtractor ['vuepress/default'] Record extractor function
 * @property {Object} initialIndexSettings initialIndexSettings
 */

const crawlerConfig = {
  plugin: {
    "auto-catalog": {
      sitemap: true,
      recordExtractor: "hope",
    },
    blog2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    comment2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    components: {
      sitemap: true,
      recordExtractor: "hope",
    },
    "copy-code2": {
      sitemap: true,
      recordExtractor: "hope",
    },
    copyright2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    feed2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    lightgallery: {
      sitemap: true,
      recordExtractor: "hope",
    },
    "md-enhance": {
      sitemap: true,
      recordExtractor: "hope",
    },
    "photo-swipe": {
      sitemap: true,
      recordExtractor: "hope",
    },
    pwa2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    "reading-time2": {
      sitemap: true,
      recordExtractor: "hope",
    },
    redirect: {
      sitemap: true,
      recordExtractor: "hope",
    },
    "remove-pwa": {
      sitemap: true,
      recordExtractor: "hope",
    },
    "sass-palette": {
      sitemap: true,
      recordExtractor: "hope",
    },
    seo2: {
      sitemap: true,
      recordExtractor: "hope",
    },
    sitemap2: {
      sitemap: true,
      recordExtractor: "hope",
    },
  },
  theme: {
    hope: {
      sitemap: true,
      recordExtractor: "hope",
    },
  },
};

/*
 * ====================================================
 * Below are scripts which generate the correct crawler
 * Normally you should NOT edit them in PR
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

const recordExtractorMap = {
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

const getSubdomain = (name, type) => {
  if (name.includes("/")) {
    const [org, pkg] = name.split("/");

    return `${org}-${type}-${pkg}`;
  }

  return `${type}-${name}`;
};

const getUrl = (name, type) =>
  `https://${getSubdomain(name, type)}.vuejs.press`;

new Crawler({
  rateLimit: 25,
  startUrls: [
    "https://vuejs.press",
    ...Object.entries(crawlerConfig)
      .map(([type, config]) =>
        Object.keys(config).map((name) => getUrl(name, type))
      )
      .flat(),
  ],
  sitemaps: [
    "https://vuejs.press/sitemap.xml",
    ...Object.entries(crawlerConfig)
      .map(([type, config]) =>
        Object.entries(config)
          .filter(([, { sitemap }]) => Boolean(sitemap))
          .map(
            ([name, { sitemap }]) =>
              `${getUrl(name, type)}/${
                typeof sitemap === "string" ? sitemap : "sitemap.xml"
              }}`
          )
      )
      .flat(),
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [],
  discoveryPatterns: [
    "https://vuejs.press/**",
    ...Object.entries(crawlerConfig)
      .map(([type, config]) =>
        Object.keys(config).map((name) => `${getUrl(name, type)}/**`)
      )
      .flat(),
  ],
  schedule: "at 20:00 every 1 day",
  actions: [
    {
      indexName: "vuejs-press",
      pathsToMatch: "https://vuejs.press/**",
      recordExtractor: ({ helpers }) =>
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
    },
    ...Object.entries(crawlerConfig)
      .map(([type, config]) =>
        Object.entries(config).map(
          ([name, { recordExtractor = "vuepress/default" }]) => {
            return {
              indexName: getSubdomain(name, type),
              pathsToMatch: `${getUrl(name, type)}/**`,
              recordExtractor:
                typeof recordExtractor === "function"
                  ? recordExtractor
                  : recordExtractorMap[recordExtractor] ||
                    recordExtractorMap["vuepress/default"],
            };
          }
        )
      )
      .flat(),
  ],
  initialIndexSettings: {
    "vuejs-press": commonInitialIndexSettings,
    ...Object.fromEntries(
      Object.entries(crawlerConfig)
        .map(([type, config]) =>
          Object.entries(config).map(
            ([name, { initialIndexSettings = {} }]) => [
              getSubdomain(name, type),
              { ...commonInitialIndexSettings, ...initialIndexSettings },
            ]
          )
        )
        .flat(1)
    ),
  },
});
