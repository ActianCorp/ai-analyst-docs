---
description: Built-in functions for location-based queries and distance calculations
---

# Geo Functions

SemQL has two built-in geo functions for working with coordinates: `GEO_DISTANCE()` and `GEO_WITHIN_RADIUS()`. Both take latitude/longitude pairs and return results you can use directly in your queries.

These functions are database-agnostic — they work regardless of which database you're connected to (Snowflake, BigQuery, Redshift, etc.), because SemQL compiles them to standard trigonometry (the Haversine formula) that runs on any SQL engine.

---

## GEO\_DISTANCE

Returns the distance in **kilometers** between two geographic coordinates.

### Syntax

```sql
GEO_DISTANCE(lat1, lng1, lat2, lng2)
```

| Parameter | Type | Description |
|---|---|---|
| `lat1` | number | Latitude of the first point |
| `lng1` | number | Longitude of the first point |
| `lat2` | number | Latitude of the second point |
| `lng2` | number | Longitude of the second point |

### Examples

**Distance from a fixed point to a column value:**

```sql
SELECT
    store_name,
    city,
    GEO_DISTANCE(48.8566, 2.3522, store_lat, store_lng) AS distance_from_paris_km
FROM retail_stores
ORDER BY distance_from_paris_km ASC
```

**Filter by a calculated distance:**

```sql
SELECT
    store_name,
    GEO_DISTANCE(51.5074, -0.1278, store_lat, store_lng) AS distance_km
FROM retail_stores
WHERE GEO_DISTANCE(51.5074, -0.1278, store_lat, store_lng) <= 50
ORDER BY distance_km
```

**Distance between two columns (e.g., customer location to nearest warehouse):**

```sql
SELECT
    order_id,
    customer_name,
    GEO_DISTANCE(customer_lat, customer_lng, warehouse_lat, warehouse_lng) AS delivery_distance_km
FROM orders
JOIN customers ON orders.customer_id = customers.customer_id
JOIN warehouses ON orders.warehouse_id = warehouses.warehouse_id
ORDER BY delivery_distance_km DESC
LIMIT 20
```

---

## GEO\_WITHIN\_RADIUS

Returns `true` if a point is within a given radius of another point, `false` otherwise. Useful for filtering by proximity.

### Syntax

```sql
GEO_WITHIN_RADIUS(lat1, lng1, lat2, lng2, radius_km)
```

| Parameter | Type | Description |
|---|---|---|
| `lat1` | number | Latitude of the reference point |
| `lng1` | number | Longitude of the reference point |
| `lat2` | number | Latitude of the point to test |
| `lng2` | number | Longitude of the point to test |
| `radius_km` | number | Radius in kilometers |

### Examples

**Filter stores within 25 km of a city:**

```sql
SELECT store_name, city, store_lat, store_lng
FROM retail_stores
WHERE GEO_WITHIN_RADIUS(52.3676, 4.9041, store_lat, store_lng, 25)
ORDER BY store_name
```

**Categorize records by proximity:**

```sql
SELECT
    customer_name,
    city,
    CASE
        WHEN GEO_WITHIN_RADIUS(48.8566, 2.3522, customer_lat, customer_lng, 50)
            THEN 'Within 50km of Paris'
        WHEN GEO_WITHIN_RADIUS(48.8566, 2.3522, customer_lat, customer_lng, 200)
            THEN 'Within 200km of Paris'
        ELSE 'Outside 200km'
    END AS proximity_band
FROM customers
ORDER BY proximity_band
```

**Count customers within a radius:**

```sql
SELECT
    COUNT(*) AS customer_count
FROM customers
WHERE GEO_WITHIN_RADIUS(40.7128, -74.0060, customer_lat, customer_lng, 100)
```

---

## Combining both functions

A common pattern is to show the actual distance alongside a proximity flag:

```sql
SELECT
    store_name,
    city,
    GEO_DISTANCE(50.8503, 4.3517, store_lat, store_lng) AS distance_from_brussels_km,
    GEO_WITHIN_RADIUS(50.8503, 4.3517, store_lat, store_lng, 100) AS within_100km
FROM retail_stores
ORDER BY distance_from_brussels_km
```

---

## Notes

- Coordinates must be numeric (decimal degrees). Null coordinates will cause an error.
- Distances are always in **kilometers**.
- The Haversine formula assumes a spherical Earth — it's accurate to within ~0.5% for most practical distances.
- Both functions are compiled to standard SQL math functions (`SIN`, `COS`, `ACOS`, `RADIANS`) and work on all supported database dialects.
