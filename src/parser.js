import markdown from 'markdown-it'
import mdHljsPlugin from 'markdown-it-highlightjs'
import emoji from 'markdown-it-emoji'
import math from 'markdown-it-math'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import footnote from 'markdown-it-footnote'
import arrows from 'markdown-it-smartarrows'
import Katex from 'katex'


const parser = markdown({
  html: true,
  typography: true,
  linkify: true
})
  .use(emoji)
  .use(mdHljsPlugin)
  .use(sup)
  .use(sub)
  .use(footnote)
  .use(arrows)
  .use(math, {
    inlineRenderer: (str) => Katex.renderToString(str),
    blockRenderer:  (str) => '<div class="math-block">' + Katex.renderToString(str, {displayMode: true}) + '</div>',
    inlineOpen: '$',
    inlineClose: '$',
    blockOpen: '$$',
    blockClose: '$$'
  });

export default parser
