/* suppress for eslint */
/* global isCybozuServiceUrl */
/* global isCybozuDownloadUrl */
/* global isResponseDownload */

'use strict';

function webResponseListener(details) {
    return {
        cancel: isCybozuServiceUrl(details.url)
            && isCybozuDownloadUrl(details.url)
            && isResponseDownload(details)
    };
}

// https://developer.chrome.com/extensions/webRequest#event-onHeadersReceived
chrome.webRequest.onHeadersReceived.addListener(
    webResponseListener, 
    {'urls': ['<all_urls>']},
    ['responseHeaders', 'blocking']
);
