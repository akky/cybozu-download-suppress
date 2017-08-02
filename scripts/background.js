/* suppress for eslint */
/* global webResponseListener */

'use strict';

// https://developer.chrome.com/extensions/webRequest#event-onHeadersReceived
chrome.webRequest.onHeadersReceived.addListener(
    webResponseListener, 
    {'urls': ['<all_urls>']},
    ['responseHeaders', 'blocking']
);
