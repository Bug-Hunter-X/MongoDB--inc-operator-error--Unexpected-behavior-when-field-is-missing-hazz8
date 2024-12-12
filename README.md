# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises when attempting to increment a field that might not exist in the document.  The solution shows how to properly handle this using the `$setOnInsert` operator and error handling.

## Bug

The original code incorrectly uses `$inc` to increment the `likes` field. If the `likes` field doesn't exist in the document, the operation might fail silently or produce unexpected results. 

## Solution

The improved solution utilizes the `$setOnInsert` operator, which sets a field only if it does not already exist.  This ensures that the field is initialized before incrementing it. In addition error handling is implemented.