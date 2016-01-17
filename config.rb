###
# Page options, layouts, aliases and proxies
###
require 'slim'
# Set slim-lang output style
Slim::Engine.set_default_options :pretty => true

# # Set template languages
set :slim, :layout_engine => :slim

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
#set :site_url, ""
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
# Global site settings (not shown here)
# ...

  # Relative assets needed to deploy to Github Pages
  activate :relative_assets
  #set :site_url, "/repo-name"
end
