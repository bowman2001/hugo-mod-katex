---
title: hugo-mod-katex — a Hugo module for typesetting LaTeX
---

LaTeX is the most popular typesetting system for the natural sciences. Its math syntax has been established as a quasi-standard for complex mathematical formulas.

## Layout

LaTeX can be included either **inline** or as a separate **block**. The marvelous rendering library [KaTeX][katex] gets included on demand or with the parameter `math: true` in the front-matter.

### Math

#### Inline

Short expressions like \\(\frac{1}{5}\\) or formulas like $E = mc^2$ can be embedded in the text. To get rid of eventual markup distortions we use the `math` shortcode:
{{< math >}}X_n + Y_n = Z_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{< /math >}}.

#### Block
All examples are looking good, whether we can grasp their meaning or not. The layout of the last one which I don’t understand is most impressive:

```math
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
```

```math
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
```

```math
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
```

### Chemistry

We can write simple formulas **inline** like {{< chem >}}\ce{H_{2}0(l)}{{< /chem >}} or generate **blocks** for complex reactions:

```math
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
```

[katex]: https://katex.org

## Syntax

### Inline

Inline LaTeX needs to be surrounded by single dollars like `$E = mc^2$` (or doubly escaped parenthesis like `\\(\frac{1}{5}\\)`). Because the content is processed by Hugo’s Markdown renderer before the KateX scripts are applied by browsers, there are two caveats:

- The rendering may falsely interpret some LaTeX markup as Markdown markup because there is some syntax overlap. This can distort the equations and we would need to escape every Markdown markup character to prevent this.

- Single dollars are now markup for KateX and this is not always wanted. But to use the dollar as a currency like `100$` &rarr; 100$ is always fine, because KaTeX expects a whitespace in front of it as a delimiter.

Therefore, we can shield inline LaTeX from Markdown rendering with the `{{</* math */>}}` shortcode like this:

```md
{{</* math */>}}Z_n = X_n + Y_n\quad X_n,Y_n,Z_n\in\mathbf{R}{{</* /math */>}}
```

### Block

LaTeX formulas need to be surrounded by two dollar signs `$$` (or doubly escaped square brackets `\\[` and `\\]`). The problem with the markup distortion may occur here, too. And we have the additional problem, that we can’t use new lines inside a formula. The solution is to enclose stand-alone formulas by a special code block with the identifier `math`. 

The following three formulas are shown above and represent the discrete Binomial distribution, the reverse Fourier transformation, and an equation for infinite nested fractions, which I can’t comprehend (I’m a physicist and can only suspect a Mathematician has proven this. ;-)).


```latex
‍```math
\begin{equation}
B_{n,p}(k) = {n \choose k} p^k (1-p)^{n-k}
\end{equation}
‍```
```

```latex
‍```math
\begin{equation}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\, e^{2 \pi i \xi x}\,d\xi
\end{equation}
‍```
```

```latex {.semi-large}
‍```math
\begin{equation}
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = \\
1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} \\
{1+\frac{e^{-8\pi}} {1+\cdots}}}}
\end{equation}
‍```
```
