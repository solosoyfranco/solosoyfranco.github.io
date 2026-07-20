+++
title = 'Sharing Keyboard, Mouse, Clipboard, and Files Between macOS and Omarchy'
date = '2026-04-14'
description = 'After trying several KVM-style tools, I ended up splitting the job between Lan Mouse and KDE Connect.'
tags = ['lan-mouse', 'macos', 'omarchy', 'hyprland', 'kde-connect', 'dotfiles']
+++

One thing I missed after moving to Omarchy was being able to move seamlessly between my Mac and Linux workstation. I wanted the experience to feel like using two monitors connected to the same computer: move the mouse to the edge of one screen, keep typing, copy something on one machine, and paste it on the other.

Like most people, I started by looking for a single application that did everything.

<!--more-->

For a while I used Synergy on macOS with Waynergy on Linux. It mostly worked, but every update seemed to introduce another small annoyance. Keyboard mappings occasionally broke, the Wayland side required extra pieces, and debugging the whole stack became more work than it was worth.

Eventually I stopped looking for one perfect tool.

Instead, I split the problem into two parts.

## Lan Mouse handles input

Lan Mouse is responsible for exactly one thing: sharing the keyboard and mouse.

That sounds obvious, but it turned out to be the biggest improvement. It works well with Hyprland, doesn't depend on the InputCapture portal, and once both machines trust each other, moving across displays feels natural.

My setup treats both computers as peers. Either machine can hand control to the other simply by moving the cursor past the configured screen edge.

## KDE Connect does everything else

Clipboard synchronization and file sharing are separate problems.

Instead of trying to force Lan Mouse to do more than it was designed for, I let KDE Connect handle those tasks. Clipboard sync is reliable, dragging files around is easy, and each application can focus on what it does best.

The combination has been much more dependable than any all-in-one solution I tried.

## Keeping it reproducible

The configuration lives in my dotfiles repository, but only the parts that actually belong there.

- each machine has a small configuration describing its peers
- Omarchy runs Lan Mouse as a user service
- macOS starts it with a LaunchAgent
- every machine uses the same Lan Mouse version to avoid protocol mismatches
- TLS certificates are generated locally and never committed to Git

One thing that caught me by surprise was networking.

I originally expected hostnames to "just work," but Lan Mouse doesn't perform peer discovery the way I assumed. Explicit IP addresses made the setup much more reliable, and over time I'll probably move everything to Tailscale so the configuration stays the same regardless of which network I'm on.

## One lesson worth remembering

The biggest lesson wasn't about Lan Mouse.

It was that not every workflow needs one application.

Lan Mouse is responsible for input.

KDE Connect is responsible for clipboard and file sharing.

Each tool does one job well, and together they've been far more reliable than every all-in-one solution I tried.

-Franco