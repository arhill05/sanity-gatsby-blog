export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60afcfca18986f0c6687d3ad",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xou6r3ti",
                  apiId: "3c1d8d75-fc96-42fa-ab11-7f270bfca349",
                },
                {
                  buildHookId: "60afcfcac5084a0ce28ce0f6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1eckxdth",
                  apiId: "385c2801-6635-4276-a790-ab84fdf267c9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arhill05/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1eckxdth.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
