# hugo-mod-katex

Render LaTeX in Markdown content without too much of a hassle. This module implements some good practices for the LaTeX renderer [KaTeX](https://katex.org). They have been around for a while in the Hugo community.

KaTeX is a Javascript library by [Emily Eisenberg](https://github.com/xymostech) and [Sophie Alpert](https://sophiebits.com/) that is loaded on demand with the templates of this module.

There are two strategies to include the library: fetch it from the **public CDN** or **self-served**.

At the moment the module is using the official CDN <https://jsdelivr.com>. All the necessary scripts are available to serve everything from your site, but the size is considerable because KaTeX ships with around 30MB of LaTeX fonts.

## Inline LaTeX

LaTeX notation surrounded by the dollar sign `$` or parens with two preceding backslashes (`\\(` and `\\)`) get rendered in line with the surrounding text. But there are two caveats: 

- Before KaTeX’s Javascript has access to the page, the content is processed by Hugo’s Markdown renderer, of course. Because there is some overlap between LaTeX and Markdown markup, the LaTeX may get distorted.

- The dollar sign may be interpreted by KaTeX as a delimiter for inline LaTeX.

The module provides the shortcode `katex` to prevent this. Instead of using dollars we use `{{< katex >}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /katex >}}` for example and can be sure that the underlines `_` are not rendered into bogus emphasis by Hugo.

## LaTeX blocks

LaTeX notation surrounded by two dollar signs `$$` or squared brackets with two preceding backlashes (`\\[` and `\\]`) are rendered into blocks (display mode). But there are also two caveats: The mentioned markup overlap and the need to write every formula into one line.

To solve this problem the module provides the `render-codeblock-katex` hook which adds the new code block identifier `katex` (not to be confused with `latex` which prettifies your LaTeX code). Inside this code block we can type normal LaTeX without additional constraints:

```latex
‍```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

## Styling

The latex expressions get wrapped into HTML tags so we can style them according to our layout:

- The shortcode adds a `span`-tag with the class `.katex-inline`.

- The render-hook adds a `div`-tag with the class `.katex-block`.

## Include the LaTeX renderer

To include KaTeX into your pages you need to add the partial `katex/tags.html` at the end of your HTML body (probably in `layouts/_default/baseof.html`). The KaTeX library files are added to a page if the shortcode or the render hook is called once, or if the parameter `katex: true` (YAML) is present in the front-matter.
