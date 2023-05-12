# hugo-mod-katex

Render LaTeX in Markdown content without a hassle. This module implements some good practices for the marvelous LaTeX renderer [KaTeX](https://katex.org) which have been around for a while in the Hugo community. 

KaTeX is a Javascript library that is self-served and loaded on demand by the templates of this module.

## Inline LaTeX

LaTeX notation surrounded by the dollar sign `$` or parens with two preceding backlashes (`\\(` and `\\)`) get rendered in line with the surrounding text. But there is one caveat: Before KaTeX’s Javascript has access to the page, the content is processed by Hugo’s Markdown renderer. Because there is some overlap between LaTeX and Markdown markup, the LaTeX may get distorted.

The module provides the shortcode `katex` to prevent this. Instead of using dollar signs use `{{< katex >}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /katex >}}` and you can be sure that the underlines `_` are not rendered into bogus emphasis for example.

## LaTeX blocks

LaTeX notation surrounded by two dollar signs `$$` or squared brackets with two preceding backlashes (`\\[` and `\\]`) are rendered into blocks (display mode). But there a two caveats, now: The markup overlap and the need to write every formula into one line. 

To solve this problem the module provides the `render-codeblock-katex` hook which adds the new code block identifier `katex` (not to be confused with `latex` which only prettifies your LaTeX code). 

Now you can type something like 

```latex
‍```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```
