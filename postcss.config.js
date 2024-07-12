const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const postcssSorting = require("postcss-sorting");

module.exports = {
  plugins: [
    postcssImport({}),
    autoprefixer({}),
    postcssSorting({
      order: [
        "custom-properties",
				"dollar-variables",
				"declarations",
				"at-rules",
				"rules",
      ],
			"properties-order": "alphabetical",
			"unspecified-properties-position": "bottom",
    }),
    cssnano({})
  ]
}