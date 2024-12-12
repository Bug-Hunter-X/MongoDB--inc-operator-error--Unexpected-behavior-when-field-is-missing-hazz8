```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("655e347070f76f2568268506")},{$inc:{likes:1}});
```