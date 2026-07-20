+++
title = 'Why I Keep a Terminal Cheatsheet'
date = '2026-02-13'
description = 'A small reference that keeps me from searching my own shell history every time I forget an alias or shortcut.'
tags = ['terminal', 'macos', 'omarchy', 'tmux', 'neovim', 'dotfiles']
+++

I spend a lot of time in the terminal, but that doesn't mean I remember every command I've created.

The opposite, actually.

Over time I've accumulated aliases, helper scripts, tmux shortcuts, Neovim keybindings, shell functions, and small utilities that make everyday work faster. The problem wasn't creating them—it was remembering they existed.

<!--more-->

Every few weeks I'd catch myself thinking:

> "I know I made an alias for this..."

Then I'd search shell history, grep through my dotfiles, or open random configuration files trying to remember what I'd called it.

That was the point where I realized my dotfiles needed documentation just as much as configuration.

## Not another Linux cheatsheet

There are already thousands of Linux command references.

That's not what this is.

My cheatsheet only documents the environment I've built for myself. Instead of trying to explain every Git command or every tmux feature, it focuses on the things that are different from a stock installation.

For example:

- custom aliases
- tmux workflow
- Neovim shortcuts I actually use
- Ghostty behavior
- zoxide navigation
- fzf shortcuts
- helper commands from my dotfiles

Those are the things I'm most likely to forget six months from now.

## It evolves with the dotfiles

The cheatsheet lives alongside my dotfiles, so whenever I add a new shortcut or helper command, I update the documentation at the same time.

That has an unexpected benefit.

Writing down a command forces me to ask whether it's actually worth keeping. If I can't explain what it does in one sentence, it's probably too clever.

The result is a terminal environment that's easier to learn, easier to maintain, and surprisingly easier to simplify.

## The real goal

The cheatsheet isn't there because the commands are complicated.

It's there because my future self has a terrible memory.

Instead of searching shell history or reading configuration files, I can open one document and immediately remember how I intended my terminal to work.

---

You can find the complete reference here:

- **[Terminal Cheatsheet](https://github.com/jfrancolopez/dotfiles/blob/main/docs/terminal-cheatsheet.md)**

It includes every alias, tmux shortcut, Neovim keybinding, helper script, and workflow that's part of my daily setup.