module.exports = function (eleventyConfig) {
	
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
