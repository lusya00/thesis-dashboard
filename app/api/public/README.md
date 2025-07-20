# Public Activity Endpoints

This folder contains public endpoints that can be accessed from external applications.

## Available Endpoints

### 1. Get all activities
**GET** `/api/public/activities`

#### Query parameters (optional):
- `category`: Filter by activity category
- `status`: Filter by activity status
- `is_featured`: Filter featured activities (true/false)
- `limit`: Maximum number of results
- `offset`: Number of results to skip (for pagination)

#### Usage example:
```
GET /api/public/activities?category=adventure&is_featured=true&limit=10
```

#### Response:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Mount Bromo Trekking",
      "description": "Amazing adventure...",
      "category": "adventure",
      "price": "150000.00",
      "currency": "IDR",
      "location": "East Java",
      "status": "active",
      "is_featured": true,
      "difficulty_level": "moderate",
      "admin_users": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "homestay_owner"
      },
      "homestay": {
        "id": 1,
        "title": "Bromo Homestay",
        "location": "East Java"
      },
      "activity_images": [...],
      "activity_schedules": [...],
      "activity_bookings": [...],
      "activity_reviews": [...],
      "stats": {
        "total_bookings": 25,
        "confirmed_bookings": 20,
        "total_participants": 45,
        "average_rating": 4.5,
        "review_count": 12,
        "available_schedules_count": 8
      }
    }
  ],
  "pagination": {
    "limit": 10,
    "offset": 0,
    "total": 1
  }
}
```

### 2. Get specific activity by ID
**GET** `/api/public/activities/[id]`

#### Usage example:
```
GET /api/public/activities/1
```

#### Response:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Mount Bromo Trekking",
    "description": "Amazing adventure...",
    // ... all activity fields
    "stats": {
      "total_bookings": 25,
      "confirmed_bookings": 20,
      "total_participants": 45,
      "average_rating": 4.5,
      "review_count": 12,
      "available_schedules_count": 8
    }
  }
}
```

## Features

### Included Relations
- **admin_users**: Information about the activity manager/administrator
- **homestay**: Associated homestay information (if exists)
- **activity_images**: Activity images ordered by priority
- **activity_schedules**: Available activity schedules
- **activity_bookings**: Activity bookings
- **activity_reviews**: Reviews and ratings

### Calculated Statistics
Each activity includes automatically calculated statistics:
- `total_bookings`: Total number of bookings
- `confirmed_bookings`: Confirmed bookings
- `total_participants`: Total number of participants
- `average_rating`: Average rating
- `review_count`: Number of reviews
- `available_schedules_count`: Available schedules

### Available Filters
- **Category**: cultural, adventure, nature, food_tour, etc.
- **Status**: active, inactive, suspended, draft
- **Featured**: Only activities marked as featured
- **Pagination**: Limit and offset control

### CORS
Endpoints are configured to allow access from any origin (`*`) to facilitate use from external applications.

## Available Activity Categories
- cultural
- adventure
- nature
- food_tour
- water_sports
- mountain_hiking
- city_tour
- religious
- art_craft
- traditional_dance
- cooking_class
- photography
- wellness
- transportation
- shopping
- nightlife
- educational
- family_friendly
- romantic
- extreme_sports

## Difficulty Levels
- easy
- moderate
- challenging
- expert

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Invalid ID format",
  "message": "ID must be a valid number"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Activity not found",
  "message": "Activity not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal server error",
  "message": "Error retrieving activities"
}
```

## Integration Examples

### JavaScript/Fetch
```javascript
// Get all activities
const response = await fetch('/api/public/activities?category=adventure&limit=5');
const data = await response.json();

// Get specific activity
const activityResponse = await fetch('/api/public/activities/1');
const activity = await activityResponse.json();
```

### cURL
```bash
# Get all activities
curl -X GET "https://your-domain.com/api/public/activities?category=adventure"

# Get specific activity
curl -X GET "https://your-domain.com/api/public/activities/1"
```

### React/Next.js
```jsx
import { useState, useEffect } from 'react';

function ActivitiesList() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/activities')
      .then(res => res.json())
      .then(data => {
        setActivities(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {activities.map(activity => (
        <div key={activity.id}>
          <h3>{activity.title}</h3>
          <p>Rating: {activity.stats.average_rating}/5</p>
          <p>Bookings: {activity.stats.total_bookings}</p>
        </div>
      ))}
    </div>
  );
}
``` 