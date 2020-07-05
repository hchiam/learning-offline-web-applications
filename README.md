# My notes for the Udacity course: [Offline Web Applications](https://classroom.udacity.com/courses/ud899)

Just one of the things I'm learning. https://github.com/hchiam/learning

https://www.udacity.com/course/offline-web-applications--ud899

**Service worker** and **IndexedDB**!

## Service workers

I already have a related repo on service workers: https://github.com/hchiam/learning-service-workers

To update a service worker, you need to close the page controlled by the service worker, or navigate to a page that it doesn't control.

Service workers can have scope explicitly set (but defaults to the containing folder path the SW script sits in):

```js
navigator.serviceWorker.register("/sw.js", {
  scope: "/my-app/",
  // will control a page at /my-app/ or /my-app/hello/world,
  // but not / nor /another-app,
  // but also surprisingly neither /my-app because of the lack of trailing slash
});
```

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
cd wittr
npm install
npm run serve
# open http://localhost:8888
```

then

```bash
git reset --hard; git checkout task-register-sw
```

or

```bash
git reset --hard; git checkout task-register-sw
```

or

```bash
git reset --hard; git checkout task-custom-response
```
