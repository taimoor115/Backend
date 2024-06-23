# Database Operations:

-- show dbs
-- use <database_name>
-- show collections
-- db.createCollection("collection_name")
-- db.dropDatabase()

# Collection Operations:

db.collection_name.insert({ key: value })
db.collection_name.find({ key: value })
db.collection_name.deleteOne({ key: value })
db.students.updateOne( {name: "Taimoor Hussain"}, {$set: {age: 25}} );
db.students.updateMany( {city: "Lahore"}, {$set: {city: "LAHORE"}} )
db.students.replaceOne({name: "Taimoor Hussain"}, {name: "Taimoor", age: 23, city: "LAHORE"})
db.students.insertOne({name: "Ghayoor", age: 25, city: "Lahore", performance: {marks: 88, grade: "A"}});
db.students.find({"performance.marks": 88})
db.students.deleteOne({city: "LAHORE"});
db.students.deleteMany({age: {$gt: 18}})
db.students.deleteMany({}) //Delete All
db.dropDatabase() // delete collection

# Query Operators:

## Comparison Operators:

$eq, $ne, $gt, $lt, $gte, $lte, $in, $nin, etc.

db.users.find({ age: { $eq: 30 } })
db.users.find({ age: { $ne: 30 } })
db.users.find({ age: { $gt: 30 } })
db.users.find({ age: { $lt: 30 } })
db.users.find({ age: { $gte: 30 } })
db.users.find({ age: { $lte: 30 } })
db.users.find({ status: { $in: ["active", "pending"] } })
db.users.find({ status: { $nin: ["active", "pending"] } })

## Logical Operators:

db.users.find({ $and: [{ age: { $gte: 30 } }, { age: { $lte: 50 } }] })
db.users.find({ $or: [{ age: { $lt: 30 } }, { age: { $gt: 50 } }] })
db.users.find({ age: { $not: { $gt: 30 } } })
db.users.find({ $nor: [{ age: { $lt: 30 } }, { age: { $gt: 50 } }] })

## Element Operators:

db.users.find({ email: { $exists: true } })
db.users.find({ age: { $type: "number" } })

## Array Operators:

db.users.find({ tags: { $all: ["mongodb", "database"] } })
db.users.find({ tags: { $elemMatch: { $eq: "mongodb", $gt: "database" } } })
db.users.find({ tags: { $size: 3 } })
