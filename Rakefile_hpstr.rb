require "rubygems"
require "bundler/setup"
require "stringex"
require 'date'
require 'yaml'

## -- Config -- ##

SOURCE = "."
CONFIG = {
  'version' => "0.1.0",
  'themes' => File.join(SOURCE, "_includes", "themes"),
  'layouts' => File.join(SOURCE, "_layouts"),
  'posts' => File.join(SOURCE, "_posts"),
  'post_ext' => "md",
  'theme_package_version' => "0.1.0"
}

# public_dir      = "public"    # compiled site directory
# posts_dir       = "_posts"    # directory for blog files
new_post_ext    = "txt"  # default new post file extension when using the new_post task
new_page_ext    = "txt"  # default new page file extension when using the new_page task


#############################
# Create a new Post or Page #
#############################

# usage rake new_post
desc "Begin a new post in #{CONFIG['posts']}"
task :post, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Der Titel fuer den neuen Beitrag: ")
  end
  filename = "#{posts}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  tags = get_stdin("Einige Tags fuer den Beitrag (comma separated): ")
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "header: """
    post.puts "description: """
    post.puts "category: """
    post.puts "group: """
    post.puts "navigation: """
    post.puts "  order: """
    post.puts "  parent: "/""
    post.puts "image:"
    post.puts "  feature: x.jpg"
    post.puts "  credit: Harald Haesler"
    post.puts "  creditlink: http://www."
    post.puts "comments: true"
    post.puts "share: true"
    post.puts "tags: [#{tags}]"
    post.puts "modified: #{Time.now.strftime('%Y-%m-%d %H:%M:%S %z')}"
    post.puts "---"
  end
end

# usage rake new_page
desc "Create a new page"
task :page, :title do |t, args|
  if args.title
    title = args.title
  else
    title = get_stdin("Enter a title for your page: ")
  end
  filename = "#{title.to_url}.#{new_page_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  tags = get_stdin("Enter tags to classify your page (comma separated): ")
  puts "Creating new page: #{filename}"
  open(filename, 'w') do |page|
    page.puts "---"
    page.puts "layout: page"
    page.puts "permalink: /#{title.to_url}/"
    page.puts "title: \"#{title}\""
    page.puts "description: """
    page.puts "modified: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    page.puts "tags: [#{tags}]"
    page.puts "image:"
    page.puts "  feature: "
    page.puts "  credit: "
    page.puts "  creditlink: "
    page.puts "share: "
    page.puts "---"
  end
end

def get_stdin(message)
  print message
  STDIN.gets.chomp
end

def ask(message, valid_options)
  if valid_options
    answer = get_stdin("#{message} #{valid_options.to_s.gsub(/"/, '').gsub(/, /,'/')} ") while !valid_options.include?(answer)
  else
    answer = get_stdin(message)
  end
  answer
end