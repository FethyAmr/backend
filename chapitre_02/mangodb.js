"Student"

db.Students.insert({
    name: "Veronique",
    city: "Paris"
})

db.Students.insert({
    name: "Steeven",
    city: "Lyon"
})


db.Students.insert({
    name: "Marc",
    city: "Marseille"
})

db.Students.insert({
    name: "Nour",
    city: "Lyon"
})

db.Students.insert({
    name: "Romain",
    city: "Paris"
})

db.Students.insert({
    name: "Sophie",
    city: "Paris"
})

db.Students.find()

"Languages"

db.Languages.insert({
    name: "French",

})

db.Languages.insert({
    name: "English",

})

db.Languages.insert({
    name: "German",

})

db.Languages.insert({
    name: "Spanish",

})

db.Languages.insert({
    name: "Mandarin"

})

db.Languages.find()

"Favorite"

db.favorites.insert({
    class: "Maths", sport: "Cricket", student_id: ObjectId("60ba28891f079d4c51097c25")
})

db.favorites.insert({
    class: "Music", sport: "Hip-hop", student_id: ObjectId("60ba29641f079d4c51097c26")
})

db.favorites.insert({
    class: "Arts", sport: "Boxing", student_id: ObjectId("60ba299b1f079d4c51097c27")
})

db.favorites.insert({
    class: "Literature", sport: "Tennis", student_id: ObjectId("60ba29df1f079d4c51097c29")
})

db.favorites.insert({
    class: "Computer science", sport: "Tennis", student_id: ObjectId("60ba29ea1f079d4c51097c2a")
})

db.favorites.insert({
    class: "Arts", sport: "Baseball", student_id: ObjectId("60ba29f61f079d4c51097c2b")
})

db.favorites.find()

"Students_language"

db.student_languages.insert({
    student_id: ObjectId("60ba28891f079d4c51097c25"), languages_id: ObjectId("60ba2e801f079d4c51097c2c")
})

db.student_languages.insert({
    student_id: ObjectId("60ba29641f079d4c51097c26"), languages_id: ObjectId("60ba2e921f079d4c51097c2d")
})

db.student_languages.insert({
    student_id: ObjectId("60ba299b1f079d4c51097c27"), languages_id: ObjectId("60ba2ecf1f079d4c51097c2e")
})

db.student_languages.insert({
    student_id: ObjectId("60ba29df1f079d4c51097c29"), languages_id: ObjectId("60ba2ed81f079d4c51097c2f")
})

db.student_languages.insert({
    student_id: ObjectId("60ba29ea1f079d4c51097c2a"), languages_id: ObjectId("60ba2eea1f079d4c51097c30")
})

db.student_languages.find()