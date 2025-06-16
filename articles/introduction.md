---
title: Introduction
description: 
---

# Introduction to DocumentDB

DocumentDB is the engine powering vCore-based Azure Cosmos DB for MongoDB. It offers a native implementation of document-oriented NoSQL database, enabling seamless CRUD operations on BSON data types within a PostgreSQL framework. Beyond basic operations, DocumentDB empowers you to execute complex workloads, including full-text searches, geospatial queries, and vector embeddings on your dataset, delivering robust functionality and flexibility for diverse data management needs.

[PostgreSQL](https://www.postgresql.org/about/) is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

## Components

The DocumentDB project comprises of two primary components, which work together to support document operations.

- `pg_documentdb_core` : PostgreSQL extension introducing BSON datatype support and operations for native Postgres.

- `pg_documentdb` : The public API surface for DocumentDB providing CRUD functionality on documents in the store.

## Related content

- [Get started by deploying to Docker locally](quickstart-docker-local.md)

- [Get started by running the pre-built Docker container image](quickstart-docker-prebuilt.md)

- [Review the frequently asked questions (FAQ)](faq.md)
