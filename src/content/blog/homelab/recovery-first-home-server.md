+++
title = 'Designing a Server for Recovery, Not Preservation'
date = '2026-03-17'
description = 'Why I treat the operating system as disposable and focus on recovering services instead of preserving a disk.'
tags = ['homelab', 'raspberry-pi', 'backups', 'debian', 'self-hosting', 'automation']
+++

One of the design goals for my home server is that I should never care about the operating system disk.

If the SSD dies tomorrow, I don't want my recovery plan to be hoping the drive still boots or searching for an old disk image. I want to install Debian, restore my data, and get my services back online.

That means I treat the operating system as disposable.

<!--more-->

The recovery process is intentionally simple.

```text
Fresh Debian install
        ↓
Clone my repository
        ↓
Bootstrap the system
        ↓
Restore backups
        ↓
Verify services
```

Everything important lives outside the operating system itself.

The repository contains the service definitions, deployment scripts, and automation needed to rebuild the server. Runtime configuration, secrets, and application data are stored separately, and regular backups protect the parts that actually matter.

For me, disaster recovery isn't about cloning an entire drive.

A cloned disk is useful if you're replacing hardware, but it doesn't prove you understand how your system works. If rebuilding a server requires guessing which files were manually edited six months ago, then the documentation and automation aren't good enough yet.

This approach has changed how I build every service I add.

- Infrastructure and service definitions live in Git.
- Secrets stay outside the repository.
- Backups protect application data, databases, and recovery material—not the operating system.
- Scripts support dry runs whenever possible before making destructive changes.
- Documentation is part of the project, not something I write after it's finished.

I was reminded why this matters when one of my Raspberry Pi SSDs failed. Instead of trying to rescue the operating system, I installed Debian on a new NVMe drive, restored my backups, and brought the services back online. The hardware changed, but the recovery process stayed exactly the same.

That experience reinforced something I already believed.

A backup that has never been restored is just a theory.

I'd rather spend twenty minutes testing a restore than discover during a real failure that my backups are incomplete or my documentation is missing a critical step.

Recovery isn't something you add at the end of a project. It becomes part of the design from the very beginning.

— Franco