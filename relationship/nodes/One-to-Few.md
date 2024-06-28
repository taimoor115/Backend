# One to Few

In one to few relationship we store child (Address) data into the
parent(User)

## Note:

Whenever we make the relationship we have to think that we can use the model individually or not like
User and Address
we can use user data individually but we cannot use the address data
individually

## Example:

{\_id: ObjectId("3842489304i89208409"),
username:"Test",
addresses: [
{location:"test1", city: "London"},
{location:"test2", city: "Lahore"},
]
\_\_v :1
}
