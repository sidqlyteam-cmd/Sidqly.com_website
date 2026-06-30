for file in public/*.md; do
  sed -i 's|/use-cases.md|https://sidqly.com/use-cases|g' "$file" 2>/dev/null
  sed -i 's|/newsroom.md|https://sidqly.com/newsroom|g' "$file" 2>/dev/null
  sed -i 's|/media-kit.md|https://sidqly.com/media-kit|g' "$file" 2>/dev/null
  sed -i 's|/press-releases.md|https://sidqly.com/press-releases|g' "$file" 2>/dev/null
  sed -i 's|/islamic-utilities.md|https://sidqly.com/islamic-utilities|g' "$file" 2>/dev/null
done
