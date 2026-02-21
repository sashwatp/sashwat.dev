---
title: Why I Switched to Neovim
date: 2025-03-15
description: After years on VS Code, I switched to Neovim. Here's what actually made the difference.
tags: [tooling, neovim, editors]
draft: false
---

I used VS Code for five years. It's a genuinely great editor. Then I switched to Neovim and I don't think I'm going back.

This post isn't a Neovim evangelism piece. It's about the specific things that pushed me over the edge.

## the actual reason: modal editing

Every time someone talks about Neovim, they mention the plugin ecosystem, the Lua config, the performance. Rarely do they lead with the obvious one: modal editing is just better for editing text.

After the initial two-week adjustment period — which is real and painful — I found I was moving through code faster. Not because of any plugin. Because `ci"` (change inside quotes) and `dap` (delete a paragraph) and `<C-o>` (jump back) were in my muscle memory.

VS Code has Vim mode via extensions. I tried it. It's good, but it doesn't feel like Neovim feels.

## the config problem (and why it's actually fine)

People warn you about the config. They're not wrong. Setting up LSP, treesitter, and fuzzy finding from scratch is a weekend project.

But here's the thing: you only do it once. And afterwards you understand exactly what every part of your editor does and why. That knowledge compounds.

If you don't want to invest the time, use [LazyVim](https://www.lazyvim.org/) or [AstroNvim](https://astronvim.com/). They're excellent batteries-included setups.

## what I actually use

```lua
-- lazy.nvim plugin list (simplified)
{
  "nvim-telescope/telescope.nvim",   -- fuzzy finder
  "nvim-treesitter/nvim-treesitter", -- syntax
  "neovim/nvim-lspconfig",           -- LSP
  "stevearc/conform.nvim",           -- formatting
  "echasnovski/mini.nvim",           -- misc utilities
}
```

That's roughly it. I don't have 40 plugins. The editor is fast because of it.

## the things I miss from VS Code

- The integrated Git UI (GitLens especially)
- The extension marketplace for obscure language support
- How easy it is to onboard a new team member to the same setup

For team work I still sometimes drop back into VS Code. That's fine. Tools are tools.

## should you switch

Probably not immediately. It takes real time to get productive. But if you're already comfortable with the command line, write code most of your day, and you're the kind of person who likes to understand their tools — it's worth the investment.

Start with `vimtutor`. Spend 30 minutes with it. That's the best first step.
