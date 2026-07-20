+++
title = 'How I Think About Container Updates on Stateful Services'
date = '2026-06-16'
description = 'A practical update policy for a home server: fresh where safe, supervised where state and migrations are involved.'
tags = ['homelab', 'containers', 'backups', 'home-assistant', 'automation', 'self-hosting']
+++

I do not want a home server that never updates, but I also do not want every container to update itself at 3 a.m. The useful middle ground is to separate low-risk services from services that can change data, schemas, or device behavior.

<!--more-->

My update process starts by checking image digests without pulling anything. When a new image appears, it has to remain stable for a delay window before it becomes a candidate. A newer digest resets that timer instead of letting an unstable tag move through immediately.

## The update groups I use

- Infrastructure services such as Traefik and AdGuard can update after a short delay.
- Normal applications can update after a backup check and delay.
- MariaDB, Home Assistant, Zigbee2MQTT, and Z-Wave JS UI stay manual. Those services can involve migrations, radio networks, or behavior changes that deserve supervision.

Before an update applies, the services with important state need a fresh backup. That includes Home Assistant, MariaDB, Vaultwarden, Obsidian sync, MQTT, and the radio services. If the backup is too old, the update should stop instead of making a risky change more convenient.

```bash
sudo domum-core updates check
sudo domum-core updates status
sudo domum-core updates apply homeassistant --dry-run
```

I also keep an eye on image age. Manual does not mean forgotten. If an image has been sitting too long, that is a reminder to review it, read the release notes, and plan the maintenance window.

The goal is not full automation. The goal is avoiding both extremes: reckless updates and an unmaintained server that slowly becomes harder to recover.

— Franco
