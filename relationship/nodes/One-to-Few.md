# One to Few

In MongoDB, a "one to few" relationship typically refers to a scenario where one document in a collection is related to a small number of documents in another collection. This is akin to a "one-to-many" relationship but with a smaller number of related documents.

## Note:

Whenever we make the relationship we have to think that we can use the model individually or not like
User and Address
we can use user data individually but we cannot use the address data
individually

In one to few relationship we store child (Address) data into the
parent(User)

## Example:

{\_id: ObjectId("3842489304i89208409"),
username:"Test",
addresses: [
{location:"test1", city: "London"},
{location:"test2", city: "Lahore"},
]
\_\_v :1
}
