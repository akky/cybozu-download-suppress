/*--- Eslint suppress ---*/
/* eslint-disable no-unused-vars */

'use strict';

function webResponseListener(details) {
    return {
        cancel: isCybozuServiceUrl(details.url)
            && isCybozuDownloadUrl(details.url)
            && isResponseDownload(details)
    };
}

function parseUrl(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return parser;
}

function isCybozuServiceUrl(url) {
    const parser = parseUrl(url);
    const hostname = parser.hostname.toLowerCase();

    for (let i = 0; i < domains.length; i++) {
        if (hostname.indexOf(domains[i]) > -1) {
            return true;
        }
    }

    return false;
}


function isCybozuDownloadUrl(url) {
    // Garoon
    if (url.indexOf('page=FileDownload') > -1) {
        return true;
    }

    // Kintone
    if (url.indexOf('/download.do/') > -1) {
        return true;
    }

    return false;
}


function isResponseDownload(details) {
    for (let i = 0; i < details.responseHeaders.length; ++i) {
    //console.log(details.responseHeaders[i].name);
    //alert(details.responseHeaders[i].name);
        if (details.responseHeaders[i].name === 'Content-Disposition') {
            const header_value = details.responseHeaders[i].value;
            //alert(header_value);
            if (header_value.indexOf('attachment;') > -1) {
                //alert('found');
                return true; 
            }
        }
    }
    return false;
}
