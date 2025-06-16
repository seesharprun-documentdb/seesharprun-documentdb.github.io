---
title: Quickstart - Run Using Docker Locally
description: Discover how to run DocumentDB locally using Docker. Follow step-by-step instructions to deploy, build, and test DocumentDB on your own machine.
---

# Quickstart: Run DocumentDB using Docker locally

TODO

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/)

## Pull container image

TODO

```bash
docker pull ghcr.io/microsoft/documentdb/documentdb-local:latest
```

<https://github.com/microsoft/documentdb/pkgs/container/documentdb%2Fdocumentdb-local>

## Run container

TODO

```bash
docker run \
    --detach \
    --tty \
    --publish 10260:10260 \
    --env USERNAME=<username> \
    --env PASSWORD=<password> \
    ghcr.io/microsoft/documentdb/documentdb-local:latest
```

## Connect to container

TODO

```bash
mongosh localhost:10260 \
    --username <username> \
    --password <password> \
    --authenticationMechanism SCRAM-SHA-256 \
    --tls \
    --tlsAllowInvalidCertificates 
```
