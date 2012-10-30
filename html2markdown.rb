require 'reverse_markdown'

Dir.glob('source/_posts/*.html') do |filename|
  File.open(filename, 'r') do |file|
    File.open(file.path.gsub(/\.html/, '.markdown'), 'w') do |m|
      m.print ReverseMarkdown.parse(file.read)
    end
  end
end
