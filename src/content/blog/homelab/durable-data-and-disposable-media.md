+++
title = 'Two Disks, Durable Data and Disposable Media'
date = '2026-05-12'
description = 'How I separate important application data from media and caches that can be recreated.'
tags = ['homelab', 'storage', 'btrfs', 'restic', 'immich', 'self-hosting']
+++

When I started running more services at home, I treated most storage the same. If an application needed space, I gave it a folder and moved on.

That worked until photos, databases, application settings, media libraries, and temporary files all started growing together. At that point, I had to make a more important decision: what data would be difficult or impossible to replace, and what could be downloaded or generated again?

<!--more-->

My media server now separates those two types of data across different filesystems.

```text
/srv/data   -> photos, databases, application configuration, and recovery data
/srv/media  -> movies, shows, music, books, transcodes, and caches
```

The `/srv/data` side is the one I treat as important.

It contains Immich uploads, PostgreSQL data, application configuration, and the files I would need to recover the services after a failure. That filesystem uses Btrfs snapshots and Restic backups because losing it would mean losing more than just time.

The `/srv/media` side has a different purpose.

Movies, TV shows, music, books, transcodes, and temporary caches live there because most of that content can be downloaded, copied, or rebuilt again. Losing it would still be inconvenient, but it would not be the same type of incident as losing family photos or a database.

Keeping those two roles separate also prevents a growing media library from consuming the space reserved for application data and backups.

## How I use the two disks

Plex and Jellyfin keep their application configuration on the protected disk, while transcodes and disposable caches use the media disk.

Immich is handled differently. The uploaded photos, database, and configuration all stay on the protected filesystem because that data is not something I want to recreate.

I also use read-only mounts when a service only needs access to scan or play a media library. There is no reason to give an application write access when it does not need it.

Finally, I added health checks to make sure the two paths are mounted correctly. Without that check, a missing disk could cause both directories to silently write to the operating system disk, which would defeat the entire design.

The biggest lesson for me was that a backup strategy does not need to treat every file equally.

Trying to protect everything forever gets expensive, takes more time, and usually leads to backups being delayed or ignored. Separating the data by how difficult it would be to replace gives the system a much clearer priority.

Protect the family photos, databases, configuration, and recovery information first. Everything else can be handled based on cost, time, and how much inconvenience you are willing to accept.

— Franco