```javascript
try{
db.collection('myCollection').updateOne({"_id":ObjectId("655e347070f76f2568268506")},{
$inc:{likes:1},
$setOnInsert:{likes:0}
});}catch(error){
console.error("Error updating document:",error);
}
```