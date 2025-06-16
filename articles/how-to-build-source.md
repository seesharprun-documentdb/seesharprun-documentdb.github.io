---
title: Build From Source
description: Learn how to build DocumentDB from source. Follow step-by-step instructions to compile, configure, and contribute to the open-source DocumentDB project.
---

# Build DocumentDB from source

TODO

```bash
git clone https://github.com/microsoft/documentdb.git
cd documentdb
docker build -f .devcontainer/Dockerfile -t documentdb .
docker run -v $(pwd):/home/documentdb/code -it documentdb /bin/bash
make && sudo make install
```
