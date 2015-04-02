# md-kumihan

## Description

## Usage

```
./node_modules/gulp/bin/gulp.js
```

After running this command, `src/test.md` is converted to `pdf/test.pdf`.

## Install

Git clone and install nodejs and it's modules.

```
sudo yum install git
sudo yum install nodejs npm --enablerepo=epel
git clone https://github.com/kongou-ae/md-kumihan.git
cd md-kumihan/
npm install gulp markdown-pdf
npm install gulp-markdown  gulp-markdown-pdf gulp-clean rimraf remarkable-classy
sudo npm install -g doctoc
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
