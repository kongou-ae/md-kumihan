# md-kumihan

## Description

## Usage

```
node build.js
```

After running this command, `src/test.md` is converted to `pdf/test.pdf`.

### css/pdf.css

the stylesheet which is used to decorate the body of document.

### render-pdf.js

the script which is used to render a pdf. Contents and decoration of the header and footer is included in this script.

## Install

```
sudo yum install git rubygems nodejs
sudo gem install bundler
bundle install --path vendor/bundle
git clone https://github.com/kongou-ae/md-kumihan.git
cd md-kumihan/
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-linux-x86_64.tar.bz2
tar jxfv phantomjs-1.9.8-linux-x86_64.tar.bz2
mv phantomjs-1.9.8-linux-x86_64 phantomjs
node build.js
```

default `pdf.css` is used `IPAexGothic`. Installation of `IPAexGothic` is as below.

```
cd /tmp/
wget http://ossipedia.ipa.go.jp/ipafont/ipaexfont/IPAexfont00201.php 
unzip IPAexfont00201.php
sudo mv IPAexfont00201 /usr/share/fonts/
fc-cache -fv
```

## Contribution

1. Fork ([https://github.com/kongou-ae/md-kumihan/fork](https://github.com/kongou-ae/md-kumihan/fork))
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Create new Pull Request

## Author

[kongou-ae](https://github.com/kongou-ae)
