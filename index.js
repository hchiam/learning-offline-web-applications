// https://github.com/jakearchibald/idb

// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

import idb from "idb";

var dbVersionNumber = 1;

var dbPromise = idb.openDB("test-db", dbVersionNumber, function (upgradeDB) {
  var keyValStore = upgradeDB.createObjectStore("keyval");
  var key = "key";
  var value = "value";
  keyValStore.put(value, key); // not (key, value)
});

// read:
dbPromise
  .then(function (db) {
    var objectStoreName = "keyval";
    var transaction = db.transaction(objectStoreName);
    var keyValStore = transaction.createObjectStore(objectStoreName); // a transaction could use multiple object stores
    return keyValStore.get("key");
  })
  .then(function (value) {
    console.log('The value for the key "key" is:', value);
  });

// add value:
dbPromise
  .then(function (db) {
    var objectStoreName = "keyval";
    var transaction = db.transaction(objectStoreName, "readwrite");
    var keyValStore = transaction.createObjectStore(objectStoreName); // a transaction could use multiple object stores
    keyValStore.put("value2", "key2");
    return transaction.complete;
  })
  .then(function () {
    console.log("Added key2:value2 to keyval");
  });
