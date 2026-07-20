+++
title = 'What I Want From a Weekly Server Health Report'
date = '2026-07-20'
description = 'The weekly email I built to remind me about the things I actually need to take care of on my server.'
tags = ['homelab', 'monitoring', 'backups', 'raspberry-pi', 'automation', 'self-hosting']
+++

I realized something about my server a while ago.

I had plenty of dashboards. Grafana, logs, metrics, container status... I could spend half an hour looking at graphs and still not know if there was anything I actually needed to do.

What I really wanted was something much simpler.

Once a week, just send me an email and answer a few questions.

- Are my backups still running?
- Have I tested restoring them recently?
- Is any disk getting close to full?
- Are there container updates waiting?
- Is anything starting to look different from the last few weeks?

That's it.

<!--more-->

The report isn't trying to replace monitoring or alerting. If a service goes down, I don't want to wait until Sunday to find out.

This is more like walking through the server room once a week.

The email summarizes the things I usually end up checking anyway: backup status, restore tests, disk usage, memory usage, temperatures, journal errors, running services, and pending container updates. Instead of opening five different dashboards, I get a quick overview that tells me whether I can forget about the server for another week or whether I should spend a few minutes fixing something.

One feature I wanted from the beginning was history.

A CPU temperature of 60°C doesn't tell me much by itself, but seeing that it has slowly climbed over the last two months might. The same goes for disk usage, memory consumption, journal errors, or even the number of running services.

If there isn't enough data yet, the report simply says so. I'd rather see "still collecting data" than pretend there's a meaningful trend after two weeks.

I also wanted the report to stay simple.

It's mostly plain text because I still read a lot of email from my phone or a terminal. There's a lightweight HTML version for readability, but the goal isn't to build another dashboard. I already have dashboards.

The goal is to give myself one email every week that answers a simple question:

**Does my server need my attention, or can I go enjoy the weekend?**

— Franco