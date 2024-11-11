# API Documentation

## Overview

This API provides endpoints to interact with two deep learning models:

1. **Dish Recognition Model** - Classifies the type of dish in an image or from an image URL.
2. **Dish Recommendation Model** - Recommends dishes based on user ratings.

Each model supports actions for training, prediction, and evaluation.

---

## Authentication & Authorization

To access these endpoints, an API key is required. Include the API key in the `Authorization` header:

```
Authorization: Bearer <API_KEY>
```

> **Permissions**: Training actions require admin-level access; general users can access prediction endpoints.

---

## Model Endpoints

### 1. Dish Recognition Model

#### Training Endpoint

- **Description**: Initiates or updates the model training with new images and labels.
- **Endpoint**: `POST /model/dish-recognition/train`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "images": [
        { "url": "https://example.com/image1.jpg", "label": "pizza" },
        { "url": "https://example.com/image2.jpg", "label": "sushi" }
      ],
      "epochs": 10,
      "batch_size": 32
    }
    ```
  - **Optional Parameters**: `epochs`, `batch_size` (default values: 10 and 32)
- **Response**:
  - **Success (200)**:
    ```json
    {
      "status": "Training initiated",
      "epochs": 10,
      "batch_size": 32,
      "message": "Training started successfully"
    }
    ```
  - **Error (400)**: `{"error": "Invalid data format"}`

#### Prediction Endpoint

- **Description**: Classifies the dish in an image provided as a URL or file.
- **Endpoint**: `POST /model/dish-recognition/predict`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "image_url": "https://example.com/dish.jpg"
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "dish_type": "pizza",
      "confidence": 0.95,
      "status": "Prediction successful"
    }
    ```
  - **Error (422)**: `{"error": "Image format error"}`

#### Evaluation Endpoint

- **Description**: Evaluates the model’s accuracy using a provided test dataset.
- **Endpoint**: `POST /model/dish-recognition/evaluate`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "test_images": [
        { "url": "https://example.com/test1.jpg", "label": "burger" },
        { "url": "https://example.com/test2.jpg", "label": "salad" }
      ]
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "accuracy": 0.87,
      "f1_score": 0.84,
      "status": "Evaluation completed"
    }
    ```

---

### 2. Dish Recommendation Model

#### Training Endpoint

- **Description**: Updates the recommendation model based on users’ rating data.
- **Endpoint**: `POST /model/dish-recommendation/train`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "ratings": [
        { "user_id": 123, "dish_id": 1, "rating": 5 },
        { "user_id": 456, "dish_id": 2, "rating": 3 }
      ]
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "status": "Training started",
      "message": "Recommendation model training initiated"
    }
    ```

#### Prediction Endpoint

- **Description**: Provides dish recommendations based on a user’s rating history.
- **Endpoint**: `POST /model/dish-recommendation/predict`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "user_id": 123
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "recommendations": [
        { "dish_id": 3, "dish_name": "Spaghetti", "confidence": 0.89 },
        { "dish_id": 5, "dish_name": "Tacos", "confidence": 0.78 }
      ]
    }
    ```

#### Evaluation Endpoint

- **Description**: Evaluates the recommendation model’s performance.
- **Endpoint**: `POST /model/dish-recommendation/evaluate`
- **Request Format**:
  - **Headers**: Authorization (Bearer Token)
  - **Body (JSON)**:
    ```json
    {
      "test_data": [
        { "user_id": 123, "dish_id": 3, "actual_rating": 4 },
        { "user_id": 456, "dish_id": 2, "actual_rating": 5 }
      ]
    }
    ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "mean_squared_error": 0.32,
      "rmse": 0.57,
      "status": "Evaluation completed"
    }
    ```

---

### Model Versioning & Metadata

#### Version Check Endpoint

- **Description**: Retrieves current model version and last training date.
- **Endpoint**: `GET /model/version`
- **Response**:
  - **Success (200)**:
    ```json
    {
      "model_version": "v1.3",
      "last_trained": "2024-11-01T15:30:00Z",
      "status": "Model is ready"
    }
    ```

---

**Error Codes**:

- `200 OK`: Successful request.
- `400 Bad Request`: Input validation error.
- `401 Unauthorized`: Invalid API key or access denied.
- `422 Unprocessable Entity`: Issue with provided data format.
- `500 Internal Server Error`: Server encountered an unexpected condition.

Here's the updated API documentation for your additional recipe endpoints:

---

## Recipe API Endpoints

These public endpoints allow users to fetch recipe data by ID, search by name, and retrieve recipes with pagination.

### 1. Get Recipe by ID

- **Description**: Fetch a specific recipe using its unique ID.
- **Endpoint**: `GET /recipe/{recipe_id}`
- **Request Parameters**:
  - **Path Parameter**:
    - `recipe_id` (string): Unique identifier of the recipe.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "recipe_id": "12345",
      "title": "Spaghetti Carbonara",
      "description": "A classic Italian pasta dish...",
      "ingredients": [...],
      "directions": [...],
      "nutrition": {...}
    }
    ```
  - **Error (404)**: `{"detail": "Recipe not found"}`

### 2. Search Recipe by Name

- **Description**: Search for recipes by name.
- **Endpoint**: `GET /recipes/search`
- **Request Parameters**:
  - **Query Parameter**:
    - `name` (string): Name of the recipe to search.
- **Response**:
  - **Success (200)**:
    ```json
    [
      {
        "recipe_id": "12345",
        "title": "Spaghetti Carbonara",
        "description": "A classic Italian pasta dish..."
      },
      ...
    ]
    ```
  - **Error (404)**: `{"detail": "No recipes found with the given name"}`

### 3. Get Recipes with Pagination

- **Description**: Retrieve a list of recipes with pagination.
- **Endpoint**: `GET /recipes/`
- **Request Parameters**:
  - **Query Parameters**:
    - `limit` (integer, default: 10): Maximum number of recipes to return, between 1 and 100.
    - `last_evaluated_key` (object, optional): Key for retrieving the next page of results.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "recipes": [
        {
          "recipe_id": "12345",
          "title": "Spaghetti Carbonara",
          "description": "A classic Italian pasta dish..."
        },
        ...
      ],
      "nextKey": { ... }  // Use this for the next page request
    }
    ```
  - **Error (404)**: `{"detail": "No recipes found"}`

---

**Error Codes**:

- `200 OK`: Successful request.
- `404 Not Found`: Recipe not found or no matching results.
- `500 Internal Server Error`: An unexpected error occurred.

These endpoints provide comprehensive access to recipe data, allowing for detailed retrieval and efficient browsing through pagination.
