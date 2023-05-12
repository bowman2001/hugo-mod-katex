---
title: hugo-mod-katex – a Hugo module for typesetting LaTeX
---

LaTeX is the most popular typesetting system for the natural sciences. Its math syntax has been established as a quasi-standard for complex mathematical formulas.

## Syntax

LaTeX can be included either **inline** or as a separate **block**. The rendering library [KaTeX][katex] gets included on demand.

### Inline

Inline LaTeX needs to be surrounded by single dollars like `$E = mc^2$` or doubly escaped parens like `\\(\frac{1}{5}\\)`. Because this LaTeX is processed by Hugo’s Markdown renderer before the KateX scripts are applied by browsers, there are two caveats:

- The rendering may falsely interpret some LaTeX markup as Markdown markup. This can distort the equations and we would need to escape every Markdown markup character to prevent this.

- Single dollars are now markup for KateX and this is not always wanted.

Therefore, we can shield inline LaTeX from Markdown rendering with the `{{</* katex */>}}` shortcode like this:

```md
{{</* katex */>}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{</* /katex */>}}
```

### Block

LaTeX formulas need to be surrounded by doubly escaped square brackets `\\[` and `\\]` or two dollar signs `$$`. The problem with the markup distortion may occur here, too. And we have the additional problem, that we can’t use new lines inside a formula. The solution is to enclose stand-alone formulas by a special code block with the identifier `katex`. 

The following three formulas represent the discrete Binomial distribution, the reverse Fourier transformation and an equation with infinite nested fractions, which I can’t comprehend.


```latex
‍```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

```latex
‍```katex
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
‍```
```

```latex {.semi-large}
‍```katex
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} \\
{1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
‍```
```

## Layout

### Inline

Short expressions like \\(\frac{1}{5}\\) or formulas like $E = mc^2$ can be embedded in the text. To get rid of eventual markup distortions we use the `katex` shortcode:
{{< katex >}}X_n + Y_n = Z_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /katex >}}.

### Block
All examples are looking good, whether we can grasp their meaning or not:

```katex
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
```

```katex
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
```

```katex
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
```

[katex]: https://katex.org