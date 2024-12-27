use("contact");
// db.createCollection("contactlist")
// db.contactlist.insertMany(
//     [
//         { Lastname: "Ben", Firstname: " Moris", Email: "ben@gmail.com", age: 26 },
//         { Lastname: "Kefi", Firstname: "Seif", Email: "kefi@gmail.com", age: 15 },
//         { Lastname: "Emilie", Firstname: "Brouge", Email: "emilie.b@gmail.com", age: 40 },
//         {Lastname: "Alex", Firstname: "Brown", age: 4},
//         {Lastname: "Denzel", Firstname: "Washington", age:3}
//     ]
// )
// let id=ObjectId("676ab24a9081eb215d637a41")
// db.contactlist.find(
// _id= id
// )
// db.contactlist.find({
//     age: { $gt: 18 }
// })
// db.contactlist.find({
//     age: { $gt: 18 },               // Age greater than 18
//     Firstname: { $regex:/E/, $options: "i" }  // Name containing "ah" (case-insensitive)
//   })
// db.contactlist.updateOne(
//     { Firstname: " Seif" },         // Find the contact with this name
//     { $set: { Firstname: " Anis" } } // Update the name to "Kefi Anis"
//   )
// db.contactlist.deleteMany({ age: { $lt: 5 } })
// db.contactlist.find({ age: { $lt: 5 } })
// db.contactlist.count()