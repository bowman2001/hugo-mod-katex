# hugo-mod-katex

Render LaTeX in Markdown content without too much of a hassle.

KaTeX is a Javascript library by [Emily Eisenberg](https://github.com/xymostech) and [Sophie Alpert](https://sophiebits.com/) that is loaded on demand.

The module includes the necessary Javascript and font files for self-hosting.

## Syntax

### Inline LaTeX

LaTeX notation surrounded by the dollar sign `$` or parenthesis with two preceding backslashes (`\\(` and `\\)`) gets rendered in line with the surrounding text. But there are two caveats:

- Before KaTeX’s Javascript has access to the page, the content is processed by Hugo’s Markdown renderer, of course. Because there is some overlap between LaTeX and Markdown markup, the LaTeX may get distorted.

- A literal dollar sign may be interpreted by KaTeX as a delimiter for inline LaTeX.

The module provides the shortcodes `math` and `chem` to prevent this. Instead of using dollars we use `{{< math >}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /math >}}` or `{{< chem >}}\ce{H_{2}O(l)}{{< /chem >}}` and can be sure that the underlines `_` are not rendered into bogus emphasis by Hugo.

### LaTeX blocks

LaTeX notation surrounded by two dollar signs `$$` or squared brackets with two preceding backlashes (`\\[` and `\\]`) are rendered into blocks (display mode). But there are also two caveats: The mentioned markup overlap and the need to write every formula into one line.

The module provides the `render-codeblock-math` and the `render-codeblock-chem` hooks which add the new code block identifiers `math` and `chem`. Inside these code blocks we can type normal LaTeX without constraints:

```latex
‍```math
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

## Styling

The latex expressions get wrapped into HTML tags so we can style them according to our layout:

- The shortcodes add a `span`-tag with the class `math-inline` or `chem-inline`.

- The render-hooks add a `div`-tag with the class `math-block` or `chem-block`.

## Include the LaTeX renderer

To include KaTeX into your pages you need to add the partial `katex/tags.html` at the end of your HTML body. The KaTeX library files are added to a page if the shortcode or the render hook is called once, or if the parameters `math: true` or `chem: true` are present in the front-matter.
