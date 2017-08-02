# cybozu-download suppress

[Cybozu Download Suppress]() is a Chrome Extension to disable file download from Cybozu services with specific domain names

## How it works

With this Chrome extension, when you try to download files on Cybozu services listed in domains.js, download is just cancelled. Error page will be showed which tells that the browser prohibits it.

![How it is blocked](screenshots/download_blocked.png)

## unit test

~~~
$ npm run test
~~~

## lint and fix

~~~
$ npm run lint
~~~

~~~
$ npm run beautify
~~~

## contribution

### site info

Please change domains.js and send me a PR.

### translation

Please add _locales/(your locale)/messages.json , then send me a PR.

## credit

This extension is by MIT License

# ToDo-es

## ToDo: packaging

These are needed.

 $ npm run package
 $ npm run upload

## ToDo: force install company-wide

There might be a way to force users to install Chrome Extentions?
ref: https://sites.google.com/site/lock5stat/offline-use/installing-for-all-users

