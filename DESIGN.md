---
name: Ricardo Franco Delgado — Portfolio
description: Portfólio fullstack em modo escuro com destaque em gradiente âmbar/laranja e acabamento tipo terminal.
colors:
  zinc-900: "#18181b"
  zinc-800: "#27272a"
  zinc-700: "#3f3f46"
  amber-400: "#fbbf24"
  orange-500: "#f97316"
  white: "#ffffff"
  green-400: "#4ade80"
  blue-500: "#3b82f6"
  blue-700: "#1d4ed8"
  zinc-400: "#a1a1aa"
  zinc-600: "#52525b"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.amber-400}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.zinc-800}"
  button-ghost:
    backgroundColor: "{colors.zinc-800}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 32px"
  card-surface:
    backgroundColor: "{colors.zinc-800}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: Ricardo Franco Delgado — Portfolio

## Overview

**Creative North Star: "The Terminal Glow"**

O portfólio se apresenta como um terminal de desenvolvedor apagando as luzes: fundo escuro uniforme (zinc-900) do topo ao fim da página, sem seções alternando de tom, e um único sinal quente — o gradiente âmbar → laranja — que acende sobre títulos, bordas e botões como um prompt ativo no escuro. O logo em colchetes de código (`<ricardo/>`) no cabeçalho declara o registro logo de cara: isto é a página de um desenvolvedor, não uma agência de design.

A superfície é deliberadamente plana em repouso — cards, botões e chips não têm sombra ambiente — e ganha profundidade apenas como resposta a interação: hover eleva com glow colorido, escala sutil e sublinhados que se estendem. Motion (Framer Motion) entra sempre da mesma forma discreta: fade + leve deslocamento vertical ao entrar na viewport, sem exageros coreográficos.

O escopo visual é propositalmente contido: uma paleta neutra (zinc) mais um único acento quente, tipografia padrão do sistema sem fontes customizadas, e um vocabulário de forma repetido (`rounded-lg`/`rounded-xl`, bordas laranja translúcidas em baixa opacidade). Nada compete com o acento âmbar pela atenção.

**Key Characteristics:**
- Fundo escuro único (zinc-900) em todas as seções, sem alternância de tom
- Um único acento de cor (gradiente âmbar → laranja), usado com moderação
- Superfícies planas em repouso; profundidade só aparece no hover
- Tipografia do sistema (sem web fonts customizadas), pesos extra-bold em títulos
- Motion consistente e discreto: fade + slide-up ao entrar na tela

## Colors

Paleta neutra escura (zinc) com um único acento quente que carrega toda a identidade da marca; cores secundárias existem apenas como identidade de marca de terceiros (LinkedIn, GitHub) dentro dos cartões de contato.

### Primary
- **Amber Signal** (gradiente `#fbbf24` → `#f97316`, `bg-gradient-to-r from-yellow-400 to-orange-500`): o único acento da marca. Usado em títulos de seção, no nome "Ricardo" no hero, no CTA principal, no sublinhado ativo da navegação e na linha decorativa dos cards de contato. Nunca aparece como cor sólida — sempre como gradiente diagonal/horizontal.

### Neutral
- **Deep Zinc** (`#18181b`, `zinc-900`): fundo de página e de todas as seções (`<body>` e cada `<section>`).
- **Panel Zinc** (`#27272a` a ~60–95% de opacidade, `zinc-800/60`–`/95`): superfície de cards, chips de tecnologia e menu mobile — sempre translúcida sobre o fundo zinc-900.
- **Line Zinc** (`#3f3f46`, `zinc-700`): placeholder de fundo das miniaturas de projeto antes da imagem carregar.
- **White** (`#ffffff` em opacidades de 30% a 100%): toda a hierarquia de texto é resolvida por opacidade sobre branco (não por tons de cinza distintos) — 90–100% para texto primário, 60–70% para secundário, 30–50% para terciário/ícones inativos.

### Named Rules
**The One Signal Rule.** O gradiente âmbar/laranja é o único acento de marca na página. Cores extras (azul do LinkedIn, verde do "copiado", cinza do GitHub) só aparecem dentro de contextos de identidade de terceiros ou feedback pontual — nunca competem com o acento principal em títulos ou CTAs.

**The Opacity-Not-Palette Rule.** A hierarquia de texto e superfície é construída variando a opacidade do branco/zinc sobre o fundo escuro, não introduzindo novos tons de cinza. Isso mantém a paleta pequena e consistente.

## Typography

**Display/Body Font:** pilha padrão do sistema (`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`) — nenhuma web font customizada é carregada.

**Character:** peso extra-bold (800) para todo título de seção, contrastando com corpo de texto em peso normal e alta opacidade reduzida (`text-white/70`); a voz tipográfica é direta e técnica, sem itálicos ou serifas.

### Hierarchy
- **Display** (extrabold/800, `text-5xl sm:text-6xl`, leading tight): o `h1` do hero ("Olá, eu sou Ricardo") — único uso desse tamanho na página.
- **Headline** (extrabold/800, `text-4xl sm:text-5xl`): título de cada seção ("Sobre", "Projetos", "Contato"), sempre com o gradiente âmbar aplicado ao texto via `bg-clip-text`.
- **Title** (bold/700, `text-xl sm:text-2xl`): título de cada card de projeto.
- **Body** (normal/400–medium/500, `text-base`–`text-xl`, `text-white/70`–`/85`): parágrafos de bio, descrições de projeto e subtítulos.
- **Label** (medium/500–semibold/600, `text-xs sm:text-sm`): rótulos de navegação, badges de tecnologia e texto de botão.

**Monospace funcional:** a pilha monoespaçada padrão do sistema (`font-mono`) é usada em dois lugares, sempre como sinalização funcional, nunca decorativa — (1) as linhas de prompt `$ comando` (`PromptLine.jsx`) que estruturam a página como uma sessão de terminal, e (2) o índice `[01]`–`[06]` no canto de cada card de projeto, reforçando a leitura de "linha de log" (`Projetos.jsx`). Não é uma segunda voz tipográfica livre — fica restrita a esses dois papéis de rótulo/registro.

### Named Rules
**The Gradient-Text Headline Rule.** Todo `h2` de seção usa o mesmo tratamento: texto transparente com `bg-clip-text` sobre o gradiente âmbar → laranja. Nunca um título de seção em cor sólida.

## Layout

Página de rolagem única (single-page scroll) com âncoras (`#inicio`, `#sobre`, `#projetos`, `#contato`); não há roteamento entre páginas. Cada seção principal ocupa a viewport inteira em repouso (`min-h-screen`, `flex items-center justify-center`) e centraliza seu conteúdo verticalmente, criando um ritmo de "uma tela = uma seção" ao rolar.

O cabeçalho é fixo (`fixed top-0`) com fundo semitransparente e desfoque (`bg-zinc-900/80 backdrop-blur-md`), sempre visível sobre o conteúdo; `scroll-padding-top: 80px` compensa a altura do header nos saltos por âncora.

Larguras de contêiner variam por seção conforme a densidade de conteúdo: `max-w-4xl` no hero (texto centralizado), `max-w-6xl` no header e em "Sobre" (duas colunas), `max-w-7xl` em "Projetos" (grade de cards) e `max-w-lg` em "Contato" (lista vertical estreita, formato linktree). Padding horizontal consistente (`px-4`) e vertical generoso por seção (`py-20`).

Grades usadas: `grid-cols-1 md:grid-cols-2` para o layout de duas colunas de "Sobre" e para os cards de projeto; `grid-cols-2 sm:grid-cols-3` para os chips de tecnologia. Espaçamento entre itens tipicamente `gap-4` a `gap-8`.

Responsivo: menu de navegação colapsa para um botão hambúrguer com dropdown abaixo do breakpoint `md`; tamanhos de título e grid recuam para uma coluna em telas pequenas.

## Elevation & Depth

O sistema é flat em repouso — nenhum card, botão ou seção tem sombra visível parado. Profundidade aparece exclusivamente como resposta a interação: hover adiciona `shadow-lg` tingida com a cor do elemento (laranja no CTA principal e nos project cards, azul/zinc nos cartões de identidade de terceiros em Contato) e um leve glow desfocado atrás dos ícones. O header e os cartões usam `backdrop-blur` para se destacarem do fundo sem recorrer a sombra.

### Shadow Vocabulary
- **Ambient CTA glow** (`hover:shadow-lg hover:shadow-orange-500/50`): botão de CTA principal ("Ver Site") ao passar o mouse.
- **Card hover glow** (`hover:shadow-lg hover:shadow-orange-500/20`): cards de projeto ao passar o mouse.
- **Identity hover glow** (`hover:shadow-blue-500/20` / `hover:shadow-zinc-500/20` / `hover:shadow-orange-500/20`): cartões de contato (LinkedIn / GitHub / Email), cada um tingido com a cor da respectiva marca.
- **Icon halo** (`blur-md opacity-0 group-hover:opacity-40`): brilho desfocado atrás do ícone dos cartões de contato, revelado no hover do grupo.

### Named Rules
**The Hover-Earned Depth Rule.** Nenhuma sombra aparece em repouso. Elevação e glow são sempre uma resposta a hover/foco, nunca um estado padrão — reforça a sensação de superfície plana e "acesa" apenas quando tocada.

## Shapes

Cantos consistentemente arredondados e suaves em toda a interface — nenhum elemento usa cantos retos ou clipping angular. `rounded-lg` (8px) é o padrão para botões, cards de projeto e chips de tecnologia em grade; `rounded-xl` (12px) aparece nos elementos com mais destaque visual (cartões de contato e o quadrado de ícone dentro deles); `rounded-full` é reservado para os badges/pills de tecnologia dentro dos cards de projeto e para os ícones circulares.

Bordas são finas (1px) e sempre na família laranja em baixa opacidade (`border-orange-500/15` a `/50`), nunca em cinza puro — a borda em si já carrega o acento da marca, mesmo em elementos neutros.

## Components

### Buttons
- **Shape:** `rounded-lg` (8px), padding `px-8 py-3` (CTAs do hero) ou `px-4 py-2` (CTAs de card de projeto).
- **Primary:** preenchimento em gradiente âmbar → laranja, texto branco, peso semibold; usado para a ação de maior prioridade em cada contexto (LinkedIn/GitHub no hero, "Ver Site" em cada projeto).
- **Ghost/Secondary:** fundo `bg-white/10` ou transparente com borda `border-white/30` ou `border-orange-500/50` e texto claro; usado para a ação secundária ao lado de um botão primário ("GitHub" ao lado de "Ver Site").
- **Hover / Focus:** no hero, os dois CTAs (LinkedIn/GitHub) trocam de estilo entre si no hover — o botão sob o mouse assume o preenchimento em gradiente enquanto o outro vira contorno, reforçando qual ação está ativa. Em outros contextos, hover apenas adiciona `shadow-lg` tingido e leve escala (`whileHover scale 1.05`).

### Chips
- **Tech pill (Projetos):** `rounded-full`, fundo em gradiente âmbar/laranja a 20% de opacidade, borda laranja a 40%, texto laranja claro; borda intensifica no hover.
- **Tech tile (Sobre):** `rounded-lg`, fundo `zinc-800/60`, borda laranja a 20%, texto branco centralizado; escala levemente no hover (`hover:scale-105`).

### Cards / Containers
- **Corner Style:** `rounded-lg` (project cards) ou `rounded-xl` (contact link cards).
- **Background:** `bg-zinc-800` translúcido (60–80% de opacidade) sobre o fundo zinc-900.
- **Shadow Strategy:** ver Elevation & Depth — plano em repouso, glow tingido no hover.
- **Border:** 1px, laranja translúcido, intensifica no hover (`/20` → `/50`).
- **Internal Padding:** `p-6` (project cards), `p-4 sm:p-5` (contact link cards).

### Navigation
- **Style:** header fixo com fundo `zinc-900/80` desfocado (`backdrop-blur-md`) e borda inferior laranja translúcida.
- **Typography:** links em `text-sm font-medium`, cor `white/90`.
- **Default/Hover/Active:** hover muda a cor do texto para laranja e revela um sublinhado em gradiente âmbar que se expande de 0 a 100% da largura (`group-hover:w-full`).
- **Mobile treatment:** hambúrguer abre um dropdown com fundo `zinc-800/95` desfocado, mesma paleta de hover dos links desktop, fecha ao clicar fora ou em um link.

### Linktree Cards (Contato) — componente de assinatura
Cartão horizontal com ícone quadrado em gradiente à esquerda (cor de marca — azul para LinkedIn, cinza para GitHub, âmbar/laranja para Email), título e descrição ao centro, e um ícone de link externo à direita que se desloca sutilmente no hover. O card de email expõe um botão extra de copiar (ícone `Copy` → `Check` com toast de confirmação verde por 2s). Uma linha inferior em gradiente se expande de 0 a 80% da largura no hover, ecoando o sublinhado de navegação.

## Do's and Don'ts

### Do:
- **Do** use o gradiente âmbar → laranja (`from-yellow-400 to-orange-500`) como o único acento de marca em títulos, CTAs primários e elementos de destaque.
- **Do** mantenha `zinc-900` como fundo único de todas as seções — não alterne tons de fundo entre seções.
- **Do** construa hierarquia de texto variando a opacidade do branco (`white/50` a `white/100`) em vez de introduzir novos tons de cinza.
- **Do** mantenha superfícies planas em repouso; introduza sombra/glow apenas como resposta a hover ou foco.
- **Do** use bordas finas em laranja translúcido (`border-orange-500/15`–`/50`) em vez de cinza puro, mesmo em elementos neutros.
- **Do** anime a entrada de cada seção com fade + leve deslocamento vertical (`opacity 0→1`, `y 18→0`, ~0.7s ease-out) ao entrar na viewport.

### Don't:
- **Don't** introduza uma segunda cor de acento de marca — cores como azul (LinkedIn) ou verde (feedback de "copiado") ficam restritas ao seu contexto pontual, nunca em título ou CTA.
- **Don't** adicione sombra ambiente em repouso a cards, botões ou seções — quebra a regra de "profundidade conquistada pelo hover".
- **Don't** introduza fontes customizadas ou serifadas — a pilha do sistema é a voz tipográfica confirmada do projeto.
- **Don't** use cantos retos/angulares — todo elemento de UI usa `rounded-lg` ou mais arredondado.
