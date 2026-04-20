export default {
	tags: ["posts"],
	layout: "layouts/post.njk",
	eleventyComputed: {
		permalink: (data) => `/thoughts/${data.page.fileSlug}/`,
	},
};
