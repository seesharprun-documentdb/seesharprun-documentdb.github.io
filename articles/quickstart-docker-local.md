---
title: Quickstart - Run Using Docker Locally
description:
---

# Quickstart: Run DocumentDB using Docker locally

Want to try DocumentDB on your own machine? It's easy! You can get started in just a few steps using Docker.

## Prerequisites
- [Docker](https://docs.docker.com/engine/install/) installed on your computer

## Option 1: Use the Prebuilt Docker Image
1. **Pull the image:**
   ```sh
   docker pull ghcr.io/microsoft/documentdb/documentdb-oss:PG16-amd64-0.105.0
   ```
2. **Run the container:**
   ```sh
   docker run -p 127.0.0.1:9712:9712 -dt ghcr.io/microsoft/documentdb/documentdb-oss:PG16-amd64-0.105.0
   ```
   This will start DocumentDB and make it available on your computer at port 9712.

## Option 2: Build the Image Yourself
1. **Clone the repo:**
   ```sh
   git clone https://github.com/microsoft/documentdb.git
   cd documentdb
   ```
2. **Build the Docker image:**
   ```sh
   docker build . -f .devcontainer/Dockerfile -t documentdb
   ```
3. **Run the container:**
   ```sh
   docker run -v $(pwd):/home/documentdb/code -it documentdb /bin/bash
   ```
4. **Build and install inside the container:**
   ```sh
   make
   sudo make install
   ```

## Connecting to DocumentDB
- To connect from your computer:
  ```sh
  psql -h localhost --port 9712 -d postgres -U documentdb
  ```
- Or, to connect from inside the container:
  ```sh
  psql -p 9712 -d postgres
  ```

That's it! You're ready to start exploring DocumentDB.

---

Need help? [Join the Discord](https://aka.ms/documentdb_discord) or check out the [GitHub repo](https://github.com/microsoft/documentdb).