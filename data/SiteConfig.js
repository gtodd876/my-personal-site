module.exports = {
  blogPostDir: "md-posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your authors.
  blogAuthorId: "todd", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Todd Matthews", // Site title.
  siteTitleAlt: "Personal music and web development site of Todd Matthews", // Alternative site title for SEO.
  siteUrl: "https://localhost:8000", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "One lifelong music and web development journey.", // Website description used for RSS feeds/meta description tag.
  siteCover: "images/iceland-dark.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Todd Matthews", // The author name used in the RSS file
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  siteSocialUrls: [
    "https://github.com/gtodd876",
    "https://twitter.com/gtodd876",
    "mailto:gtmatthews@gmail.com",
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/gtodd876",
      iconClassName: "fa fa-github", // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/gatsbyjs",
      iconClassName: "fa fa-twitter", // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:gatsbyjs@example.com",
      iconClassName: "fa fa-envelope", // Disabled, see Navigation.jsx
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Todd Matthews", // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false, // Enables the GatsbyJS promotion information in footer.
};
