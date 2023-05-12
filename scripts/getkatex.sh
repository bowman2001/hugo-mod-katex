#!/usr/bin/env bash
ROOT=~/www/hugo-mod-katex

KATEXDIR=node_modules/katex/dist
ASSETDIR=assets/katex
STATICDIR=static/katex

cd ${ROOT} || exit
echo "copy KaTeX fonts from $KATEXDIR to $STATICDIR"
cp -r ${KATEXDIR}/fonts ${STATICDIR}

echo "copy CSS and JS files from $KATEXDIR to $ASSETDIR"
cp -r ${KATEXDIR}/contrib ${KATEXDIR}/katex.* ${ASSETDIR}
