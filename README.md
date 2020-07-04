# My notes for the Udacity course: [Offline Web Applications](https://classroom.udacity.com/courses/ud899)

Just one of the things I'm learning. https://github.com/hchiam/learning

**Service worker** and **IndexedDB**!

I already have a related repo on service workers: https://github.com/hchiam/learning-service-workers

## IndexedDB in the browser

Tip: use the [idb](https://github.com/jakearchibald/idb) library for a friendlier API. `npm install idb`

**Database**(s) { object stores { keys and values and indexes. Indexes are the same data but ordered by particular properties.

**Transaction** { read or write actions. A transaction contains steps. If one step fails, DB state is as if none of the steps happened ("atomic" operation - see the "Clean Code" book by Robert Martin).

1. Look here first: https://github.com/jakearchibald/idb
2. Then find things like expected parameters here: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API (but the `idb` library returns a promise instead of a request object).

TODO: learn more from here: https://classroom.udacity.com/courses/ud899/lessons/6381510082/concepts/63774101620923

(also need to see how to set up to get the demo working in the browser)
