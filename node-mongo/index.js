const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';
const dboper = require('./operations');

MongoClient.connect(url, (err, db) => {
    assert.equal(err, null);
    console.log('Connect correctly to server');
    const collection = db.collection("dishes");

    dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(db, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            db.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                db.close();
                            });
                        });
                    });
            });
        });
})

