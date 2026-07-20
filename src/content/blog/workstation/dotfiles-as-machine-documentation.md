+++
title = 'Keeping My macOS and Omarchy Setup in Git'
date = '2026-01-16'
description = 'Why I stopped rebuilding computers from memory and started treating my workstation setup like any other project.'
tags = ['dotfiles', 'macos', 'omarchy', 'linux', 'stow', 'automation']
+++

For years, setting up a new computer meant opening old notes, digging through shell history, remembering which packages I liked, and inevitably forgetting something until weeks later.

It wasn't difficult—it was just inconsistent.

Eventually I realized I wasn't trying to back up a computer. I was trying to preserve my workflow.

<!--more-->

My dotfiles repository has become the source of truth for that workflow. I'm not trying to automate every corner of macOS or Linux, and I'm definitely not trying to recreate an enterprise configuration management system for a handful of personal machines.

The goal is much simpler: if I buy a new Mac, reinstall Omarchy, or provision another Linux machine, I should end up with an environment that feels familiar within a few minutes instead of spending days tweaking things until they "feel right" again.

That includes things like:

- shell configuration and aliases
- Git and SSH defaults
- Ghostty
- tmux
- Neovim
- common CLI tools
- package lists
- a handful of desktop preferences

If something doesn't make rebuilding easier or keeping machines consistent, it probably doesn't belong in the repository.

## The structure that finally made sense

After trying a few different layouts, I settled on three simple layers:

```text
global → operating system → machine profile
```

The global layer contains everything I expect on every machine: shell configuration, Git, SSH, tmux, Ghostty, and the little quality-of-life tweaks I use every day.

The operating system layer captures the differences between macOS and Omarchy without duplicating everything.

The machine profile is intentionally small. That's where hardware-specific settings live, like monitor layouts, startup behavior, or packages that only make sense on one computer.

Most of the time, adding a new machine means creating a small profile while everything else comes from the shared layers.

That separation has kept the repository surprisingly manageable. Instead of collecting exceptions over time, each layer has a clear responsibility.

## A few rules I try to follow

Over time I've settled on a handful of rules that keep the repository useful without making it overly complicated.

- Git stores configuration, not secrets.
- A machine should be rebuildable without copying its old drive.
- Simple shell scripts are usually easier to maintain than a large automation framework.
- Local changes should never disappear without warning.
- If a setting only exists because of one weird machine, it belongs in that machine's profile.

None of these are strict rules. They're just reminders to avoid solving problems I don't actually have.

## Still a work in progress

One thing I've learned is that dotfiles are never really finished.

Every new computer exposes something that should be shared, cleaned up, or removed entirely. Lately that has meant making macOS, Omarchy, and even my headless Debian servers feel as similar as possible. The less I have to remember which machine I'm sitting in front of, the more I can focus on the work instead of the environment.

The repository isn't about building the perfect workstation.

It's about making the workstation disappear.