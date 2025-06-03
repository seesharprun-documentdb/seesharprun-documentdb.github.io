---
title: Count
description: The `count` command is used to count the number of documents in a collection that match specific criteria.
ms.date: 06/03/2025
appliesto:
  - Azure Cosmos DB for MongoDB vCore
  - DocumentDB
---

# `count`

The `count` command is used to count the number of documents in a collection that match specific criteria.

This command is useful for obtaining quick statistics about the data stored in your collections, such as the number of documents that meet certain criteria.

## Syntax

```documentdb
db.collection.count(
  <query>,
  <options>
);
```

## Parameters

| | Description |
| --- | --- |
| **`query`** | Required. A document specifying the selection criteria using query operators. |
| **`options`** | Optional. A document specifying options including, but not limited to `limit` and `skip`. |

## Examples

### Counting all documents in a collection

Use the `count` command with an empty document to count **all** documents in a collection. In this example, all documents in the `stores` collection are counted.

```documentdb
db.stores.count({})
```

```output
60570
```

### Counting documents that match specific criteria

Count all documents that match specific criteria by specifying that criteria in the `query` parameter. In this example, all documents that match on a specific `_id` field value are counted.

```documentdb
db.stores.count({ "_id": "ffffffff-5555-6666-7777-aaaaaaaaaaaa" })
```

```output
1
```

### Counting documents that match nested criteria

The `query` parameter supports nested parameters. In this example, the command counts documents that match the string value `"Incredible Discount Days"` for the `promotionEvents.eventName` field.

```documentdb
db.stores.count({ "promotionEvents.eventName": "Incredible Discount Days" })
```

```output
2156
```

### Counting documents that match multiple criteria

The `query` parameter also supports multiple parameters. In this example, the `locationLatitude` and `locationLongitude` parameters are used to count documents that match on these specific values.

```documentdb
db.stores.count({ "location.lat": -2.4111, "location.lon": 72.1041 })
```

```output
1
```

## Related content

- [DocumentDB query reference](index.md)
- [`$regex` operator](operators-query-regex.md)
