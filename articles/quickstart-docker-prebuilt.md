---
title: Quickstart - Run Prebuilt Docker Container Image
description: Learn how to quickly start DocumentDB using a prebuilt Docker container image. Deploy DocumentDB instantly and begin exploring its features.
---

# Quickstart: Run prebuilt DocumentDB Docker container image

There are prebuild images available for different platforms. You can find the list of prebuild images [here](#prebuilt-images).

## Run prebuilt image

To run the prebuild image, use the following command:

```bash
# example for Ubuntu 22.04, PostgreSQL 16, amd64
# Choose the image tag according to your configuration
docker run -dt mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:22.04-PG16-AMD64-0.103.0
docker exec -it <container-id> bash  
```

## Rebuild the prebuilt image

```bash
docker build -t <image-tag> -f .github/containers/Build-Ubuntu/Dockerfile_prebuild \ 
    --platform=linux/amd64 --build-arg BASE_IMAGE=ubuntu:22.04 --build-arg POSTGRES_VERSION=16 \ 
    --build-arg DEB_PACKAGE_REL_PATH=packaging/packages/ubuntu22.04-postgresql-16-documentdb_0.103.0_amd64.deb .
```

## Use prebuilt image

1. Running the container in detached mode

    ```bash
    docker run -dt <image-tag>
    docker exec -it <container-id> bash
    ```

1. Connect to `psql` shell

    ```bash
    psql -p 9712 -d postgres
    ```

## Prebuilt images
  
### v0.103.0
  
#### Ubuntu 22.04  
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:22.04-PG17-AMD64-0.103.0`  
  - **OS:** Ubuntu 22.04  
  - **Database:** PostgreSQL 17  
  - **Architecture:** AMD64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:5c7765af1ac51ff894e2795d5ee8c6bcca7ea90159d38c40b1c164feef18037d 
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:22.04-PG17-ARM64-0.103.0`  
  - **OS:** Ubuntu 22.04  
  - **Database:** PostgreSQL 17  
  - **Architecture:** ARM64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:98d8abfb65f8dbb23dcd87d819496af0c9955c0234ff542ff18c16a294d6478f
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:22.04-PG16-AMD64-0.103.0`  
  - **OS:** Ubuntu 22.04  
  - **Database:** PostgreSQL 16  
  - **Architecture:** AMD64  
  - **Version:** 0.103.0 
  - **Digest:** sha256:e0f2b7c9115bec5692679fe3afe2eaf1dc268db14282585cc7bae047cd50325c 
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:22.04-PG16-ARM64-0.103.0`  
  - **OS:** Ubuntu 22.04  
  - **Database:** PostgreSQL 16  
  - **Architecture:** ARM64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:62e2b4c2f39de9e81c432a889d4268cfc1c335cbe4878517ee0760ea33739477

  
#### Ubuntu 24.04  
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:24.04-PG17-AMD64-0.103.0`  
  - **OS:** Ubuntu 24.04  
  - **Database:** PostgreSQL 17  
  - **Architecture:** AMD64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:a6f72e31c9d9b39a7ac201ac41f6d77b439e048d892f6edddcb4b06774cc6292
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:24.04-PG17-ARM64-0.103.0`  
  - **OS:** Ubuntu 24.04  
  - **Database:** PostgreSQL 17  
  - **Architecture:** ARM64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:621eb5f5ea380d152a254a2f2d35e169c3ae217cb940f6090fbb07040dcd2c67
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:24.04-PG16-AMD64-0.103.0`  
  - **OS:** Ubuntu 24.04  
  - **Database:** PostgreSQL 16  
  - **Architecture:** AMD64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:dc4f0155e545ae14bcf65d31d4b9d21c8fdfee42d467f3419106ced8e141a6bd
  
- **Image Name:** `mcr.microsoft.com/cosmosdb/ubuntu/documentdb-oss:24.04-PG16-ARM64-0.103.0`  
  - **OS:** Ubuntu 24.04  
  - **Database:** PostgreSQL 16  
  - **Architecture:** ARM64  
  - **Version:** 0.103.0  
  - **Digest:** sha256:162df47ba5e8b10f88d7bd0e2e7c5775e764774928920ea532c372c5ee360b24
  
### Notes  
  
- Ensure each image meets your environment requirements and compatibility needs.  
- Refer to the official documentation for setup instructions and best practices.  