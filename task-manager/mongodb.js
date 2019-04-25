// CRUD - Create Read Update and Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Second'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cc20de6a04e239f6cadaf73")
    // }, {
    //         $set: {
    //             name: 'Mike'
    //         },
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })


    // db.collection('users').insertOne({
    //     name: 'MJ',
    //     age: 24
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     console.log('ola')
    //     if (error) {
    //         return console.log('Unable to insert error')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'First task',
    //         completed: true
    //     }, {
    //         description: 'Second task',
    //         completed: false
    //     }, {
    //         description: 'Third task',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Error: Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection(`users`).findOne({_id: new ObjectID("5cbe7c5e9a96212b662ced1b")}, (error, user) => {
    //     if(error){
    //         return conosole.log('Error: Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5cbf17ec0b23fd46ba9caad8")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, task) => {
    //     console.log(task)
    // })

})

        // /home/mj/mongodb/bin/mongod --dbpath=/home/mj/mongodb-data
