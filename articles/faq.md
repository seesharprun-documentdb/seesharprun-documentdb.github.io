---
title: Frequently Asked Questions
description: Find answers to frequently asked questions about DocumentDB, including features, community involvement, troubleshooting, and best practices for using the database engine.
---

# Frequently asked questions

## General

### What is DocumentDB?

DocumentDB is the engine powering vCore-based Azure Cosmos DB for MongoDB. It offers a native implementation of document-oriented NoSQL database, enabling seamless CRUD operations on BSON data types within a PostgreSQL framework. Beyond basic operations, DocumentDB empowers you to execute complex workloads, including full-text searches, geospatial queries, and vector embeddings on your dataset, delivering robust functionality and flexibility for diverse data management needs.

### How can I get involved with the community?

Contributors and users can join the [`Micorsoft OSS - DocumentDB` Discord channel](https://aka.ms/documentdb_discord) for quick collaboration.

## Troubleshooting

### What can I do while performing `make check` if I encounter error `FATAL: "/home/documentdb/code/pg_documentdb_core/src/test/regress/tmp/data" has wrong ownership?`

Drop the `/home/documentdb/code/pg_documentdb_core/src/test/regress/tmp/` directory and rerun `make check`.

