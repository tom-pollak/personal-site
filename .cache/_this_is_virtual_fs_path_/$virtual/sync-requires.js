
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/Users/tom/Desktop/projects/tom-pollak.github.io/src/pages/404.jsx")),
  "component---src-pages-blog-jsx": preferDefault(require("/Users/tom/Desktop/projects/tom-pollak.github.io/src/pages/blog.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/tom/Desktop/projects/tom-pollak.github.io/src/pages/index.jsx")),
  "component---src-templates-blog-post-jsx": preferDefault(require("/Users/tom/Desktop/projects/tom-pollak.github.io/src/templates/blog-post.jsx"))
}

