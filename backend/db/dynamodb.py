from fastapi import FastAPI, HTTPException
import boto3
from botocore.exceptions import ClientError
from dotenv import load_dotenv
import os

load_dotenv()

AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

dynamodb = boto3.resource('dynamodb',
                          region_name='us-east-2',
                          aws_access_key_id=AWS_ACCESS_KEY_ID,
                          aws_secret_access_key=AWS_SECRET_ACCESS_KEY
                          )
table = dynamodb.Table('recipes')


# Get recipe by ID
def get_recipe_by_id(recipe_id: str):
    """
    Fetches a recipe from the DynamoDB table using the recipe_id.
    """
    try:
        response = table.get_item(Key={"recipe_id": recipe_id})

        if 'Item' not in response:
            return None

        return response['Item']

    except ClientError as e:
        print(f"Error fetching recipe: {e.response['Error']['Message']}")
        raise


# Get recipes by name
def get_recipe_by_name(name: str):
    """
    Fetches recipes from the DynamoDB table that match the given name.
    Uses the scan operation since name is not a primary key.
    """
    try:
        # Perform a scan operation with filter on 'name'
        response = table.scan(
            FilterExpression="contains(#name, :name)",
            ExpressionAttributeNames={"#name": "name"},
            ExpressionAttributeValues={":name": name}
        )

        if 'Items' not in response or len(response['Items']) == 0:
            return None

        return response['Items']

    except ClientError as e:
        print(
            f"Error fetching recipe by name: {e.response['Error']['Message']}")
        raise


# Get recipes by pagination
def get_recipes_paginated(limit: int, last_evaluated_key: dict = None):
    """
    Fetches recipes from DynamoDB with pagination.
    """
    try:
        # Build query parameters
        params = {
            "Limit": limit
        }

        # Add the LastEvaluatedKey if provided (for pagination)
        if last_evaluated_key:
            params["ExclusiveStartKey"] = last_evaluated_key

        # Scan or Query (modify if using GSI)
        response = table.scan(**params)

        # Return the items and the LastEvaluatedKey (if there are more results)
        return response.get("Items", []), response.get("LastEvaluatedKey", None)

    except ClientError as e:
        print(
            f"Error fetching paginated recipes: {e.response['Error']['Message']}")
        raise
