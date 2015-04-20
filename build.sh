#!/bin/sh

FILE="test.md"

cat src/${FILE} | kramdown --toc-levels 2..3 > html/${FILE}.tmp.html
cat html/head.html html/${FILE}.tmp.html > html/${FILE}.html
phantomjs/bin/phantomjs render-pdf.js
