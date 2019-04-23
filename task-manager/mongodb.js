// CRUD - Create Read Update and Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

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

    db.collection('tasks').insertMany([
        {
            description: 'First task',
            completed: true
        }, {
            description: 'Second task',
            completed: false
        }, {
            description: 'Third task',
            completed: false
        }
    ], (error, result) => {
        if (error){
            return console.log('Error: Unable to insert tasks')
        }

        console.log(result.ops)
    })
})