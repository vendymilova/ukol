module.exports = function(eleventyConfig) {

    // Zkopírovat `images/` do `_site/images`
    eleventyConfig.addPassthroughCopy("images");
  
    eleventyConfig.addPassthroughCopy({ "scss/**.css": "css" })
  
    return {
      templateFormats: ["njk", "html", "liquid", "md"],

      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };
  
  };
