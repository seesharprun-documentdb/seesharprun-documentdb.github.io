# DocumentDB

DocumentDB is an open-source document database engine, designed to make working with data simple, flexible, and powerful. Built on top of PostgreSQL, DocumentDB brings the best of both worlds: the reliability of a proven relational database and the flexibility of a document-oriented NoSQL system.

Whether you're building a new app, exploring data, or just curious about modern databases, DocumentDB is here to help you get started quickly and easily.

## Why DocumentDB?

- **Open Source & Community-Driven:** DocumentDB is fully open source under the MIT license, welcoming contributions and ideas from everyone.

- **PostgreSQL Powered:** DocumentDB riles the stability, performance, and features of PostgreSQL, with added support for document data.

- **Flexible Data Model:** DocumentDB allows you to store and query JSON-like documents (BSON) alongside traditional tables.

- **Easy to Run Anywhere:** DocumentDB can be used anywhere including on your own machine, in the cloud, or on-premises—wherever you need it.

## Get Started

Get started with DocumentDB today by running a containerized version of the database using Docker on your machine:

```bash
docker run \
    --detach \
    --tty \
    --publish 10260:10260 \
    --env USERNAME=<username> \
    --env PASSWORD=<password> \
    ghcr.io/microsoft/documentdb/documentdb-local:latest
```

Then connect using the Mongo driver or client of your choice. For example, to connect with `mongosh`:

```bash
mongosh localhost:10260 \
    --username <username> \
    --password <password> \
    --authenticationMechanism SCRAM-SHA-256 \
    --tls \
    --tlsAllowInvalidCertificates 
```

Want to learn more? Explore our [documentation](/documentdb/).

## Community

Want to join the community or contribute?

- [Visit the GitHub repo](https://github.com/microsoft/documentdb) 

- [Join the `Micorsoft OSS - DocumentDB` Discord channel](https://aka.ms/documentdb_discord)

Interested in projects that use DocumentDB?

- [FerretDB](https://github.com/ferretdb/ferretdb) uses DocumentDB as the back-end engine
