# My notes for the Udacity course: [Offline Web Applications](https://classroom.udacity.com/courses/ud899)

Just one of the things I'm learning. https://github.com/hchiam/learning

https://www.udacity.com/course/offline-web-applications--ud899

**Service worker** and **IndexedDB**!

I already have a related repo on service workers: https://github.com/hchiam/learning-service-workers

## IndexedDB in the browser

You can find IndexedDB in browser dev tools.

Tip: use the [idb](https://github.com/jakearchibald/idb) library for a friendlier API. `npm install idb`

**Database**(s) { object stores { keys and values and indexes. Indexes are the same data but ordered by particular properties.

**Transaction** { read or write actions. A transaction contains steps. If one step fails, DB state is as if none of the steps happened ("atomic" operation - see the "Clean Code" book by Robert Martin).

1. Look here first: https://github.com/jakearchibald/idb
2. Then find things like expected parameters here: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API (but the `idb` library returns a promise instead of a request object).

## Offline-first [demo](https://github.com/jakearchibald/wittr) setup

```bash
git clone https://github.com/jakearchibald/wittr
```
