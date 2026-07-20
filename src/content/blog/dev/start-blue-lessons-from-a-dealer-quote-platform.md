+++
title = 'What Start Blue Taught Me About Building a Dealer Quote Platform'
date = '2025-12-12'
description = 'Looking back at building and running a Kubernetes-hosted quote platform used by more than 350 dealers across North America.'
tags = ['django', 'react', 'postgresql', 'kubernetes', 'platform-engineering']
+++

When I started Start Blue, the goal wasn't to build another web application. The problem was much simpler: our dealers needed a better way to create quotes.

The old process depended on spreadsheets, PDFs, and a lot of manual work. It worked, but it wasn't consistent, and keeping pricing up to date across hundreds of dealers quickly became difficult.

So I started building a platform around that problem.

<!--more-->

Today StartBlue runs on a small Kubernetes cluster and is used by more than 350 dealers across the United States and Canada. The stack itself isn't unusual—React, Django, PostgreSQL, object storage, and Kubernetes—but building and operating the entire platform taught me a lot beyond writing application code.

One thing I learned early is that business logic is usually the hardest part of the project.

The application isn't just selecting a tractor and printing a PDF. A quote has to combine equipment, attachments, dealer pricing, promotions, financing, taxes, delivery charges, setup fees, and customer information. Those rules change constantly, so the data model had to be flexible enough to evolve without turning into something nobody wanted to maintain.

I also learned that building the application is only part of the job.

I was responsible for everything around it as well: container images, deployments, backups, Kubernetes, PostgreSQL, monitoring, DNS, TLS, and keeping the platform available when people needed it. Once software is in production, deployment becomes just as important as development.

Running PostgreSQL inside Kubernetes changed the way I think about stateful workloads too. Restarting an application container is easy. Managing persistent data, backups, and schema changes requires a very different mindset.

Probably the biggest lesson, though, was realizing that internal applications deserve the same engineering discipline as customer-facing products.

When hundreds of people depend on a system every day, reliability matters. Documentation matters. Backups matter. Small deployment decisions matter. Even keeping notes about previous incidents ends up saving time months later.

Looking back, Start Blue became much more than a quote application. It became the project where software engineering, platform engineering, and operations all came together, and it's still the project that has shaped how I approach building production systems today.

One thing I never expected was where the project would lead. I had the opportunity to present Start Blue in person at LS Mtron's headquarters in South Korea, including a presentation to our Global CEO, Mr. Shin. The project was later recognized with the company's 2025 CEO Award, something I'm incredibly proud of—not because of the award itself, but because it showed what a small team with the right approach could accomplish.

Today, Start Blue is becoming more than a North American platform. Working alongside engineering teams at headquarters in South Korea, we're adapting it for multiple languages and preparing it for deployment across other global markets. Seeing something that started as a solution for our dealers grow into a platform with global potential has easily been one of the most rewarding parts of my career.

— Franco