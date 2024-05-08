const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}
		// If not an HTML output, return content as-is
		return content;
	});
	
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
	
	eleventyConfig.addPassthroughCopy('./src/images/');
	eleventyConfig.addPassthroughCopy({ './src/favicons': '/' });
	eleventyConfig.addPassthroughCopy("./src/styles/default.css");

	return {
		dir: {
			input: 'src',
			data: "_data",
			includes: '_includes',
		},
	};
};
