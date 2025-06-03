---
title: Regex
description: The `$regex` operator is used to perform pattern matching with regular expressions.
ms.date: 06/03/2025
appliesto:
  - Azure Cosmos DB for MongoDB vCore
  - DocumentDB
---

# `$regex`

The `$regex` operator is used to perform pattern matching with regular expressions.

This operator is useful for querying string fields for matches that fit specific patterns. Common use cases include searching for documents where a field contains a substring, starts with a certain prefix, or matches a complex pattern.

## Syntax

```documentdb
{ 
  "field": { 
    $regex: /pattern/, 
    $options: '<options>' 
  }
}
```

## Parameters

| | Description |
| --- | --- |
| **`field`** | Required. The field in the document you want to query. |
| **`/pattern/`** |	Required. The regular expression pattern you want to match. |
| **`options`** | Optional. Flags to modify the behavior of the regex. Common options include, but are not limited to `i` for case-insensitive matching, `m` for multiline matching, etc. |

## Examples

Consider this sample set of documents within the `stores` collection for these examples.

```json
[
  {
    "_id": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb",
    "name": "Proseware, Inc. | Home Entertainment Hub - East Linwoodbury"
  },
  {
    "_id": "bbbbbbbb-1111-2222-3333-cccccccccccc",
    "name": "Fabrikam, Inc. | Home Accessory Outlet - West Adele"
  },
  {
    "_id": "cccccccc-2222-3333-4444-dddddddddddd",
    "name": "Wide World Importers | Fitness Equipment Outlet - Reillyborough"
  }
]
```

### Find documents with a specific substring

Use the `regex` operator to find all documents that match a specific pattern. In this example, the operator filters to documents that contain the exact phrase `Home` in its name.

```documentdb
db.stores.find({ "name": { "$regex": /Home/ }})
```

```output-json
[
  {
    "_id": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb",
    "name": "Proseware, Inc. | Home Entertainment Hub - East Linwoodbury"
  },
  {
    "_id": "bbbbbbbb-1111-2222-3333-cccccccccccc",
    "name": "Fabrikam, Inc. | Home Accessory Outlet - West Adele"
  }
]
```

### Find documents using a case-insensitive match

The `$regex` operator includes options like case-insensitive search. In this example, the operator filters to documents that contain the case-insensitive phrase `outlet` in its name.

```documentdb
db.stores.find({ "name": { $regex: /outlet/, $options: "i" }})
```

```output-json
[
  {
    "_id": "bbbbbbbb-1111-2222-3333-cccccccccccc",
    "name": "Fabrikam, Inc. | Home Accessory Outlet - West Adele"
  },
  {
    "_id": "cccccccc-2222-3333-4444-dddddddddddd",
    "name": "Wide World Importers | Fitness Equipment Outlet - Reillyborough"
  }
]
```

## Related content

- [DocumentDB query reference](index.md)
- [`count` command](commands-aggregation-count.md)
