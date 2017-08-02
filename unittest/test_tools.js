"use strict";

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe('url having Cybozu service domains with direct access', () => {
  describe('isCybozuServiceUrl()', () => {
    it('should return true if direct access', () => {
      assert.equal(isCybozuServiceUrl("https://labs.cybozu.com/o/"), false);
      assert.equal(isCybozuServiceUrl("https://labs.cybozu.com/o/"), false);
      assert.equal(isCybozuServiceUrl("https://bozuman.cybozu.com/g/bulletin/index.csp?"), false);
    });
  });
});

describe('url having Cybozu service domains with secure access', () => {
  describe('isCybozuServiceUrl()', () => {
    it('should return true if secure access', () => {
      assert.equal(isCybozuServiceUrl("https://labs.s.cybozu.com/o/"), true);
      assert.equal(isCybozuServiceUrl("https://labs.s.cybozu.com/o/"), true);
      assert.equal(isCybozuServiceUrl("https://bozuman.s.cybozu.com/g/bulletin/index.csp?"), true);
    });
  });
});

describe('other download URLs', () => {
  describe('isCybozuServiceUrl()', () => {
    it('should return false if non-related URL', () => {
      assert.equal(isCybozuServiceUrl("http://download.cybozu.co.jp/old_archive/cbof40ja.exe"), false);
    });
  });
});

describe('url pathinfo having Garoon or Kintone file download', () => {
  describe('isCybozuDownloadUrl()', () => {
    it('should return true if file download URL', () => {
      assert.equal(isCybozuDownloadUrl("https://labs.s.cybozu.com/o/ag.cgi/Ogre%EF%BC%8BFW%EF%BC%9DAzalea2.ppt?page=FileDownload&id=97&notimecard=1&type=application&subtype=vnd.ms-powerpoint&ct=1&ext=.ppt"), true);
      assert.equal(isCybozuDownloadUrl("https://bozuman.s.cybozu.com/k/api/record/download.do/-/%E6%B7%BB%E4%BB%98%E8%B3%87%E6%96%99%E2%91%A2%E6%A9%9F%E8%83%BD%E8%A6%81%E4%BB%B6%EF%BC%88WEB%E3%82%A2%E3%83%97%E3%83%AA%E9%96%8B%E7%99%BA%E5%9F%BA%E7%9B%A4%EF%BC%89.xlsx?app=2160&field=38388&detectType=true&record=194888&row=64474366&id=837571&hash=632c6dd5c03093ad27ffe1c14345145fcf32e826&revision=1&.xlsx"), true);
      assert.equal(isCybozuDownloadUrl("https://labs.s.cybozu.com/o/ag.cgi?page=FileView&gid=293&fCID=11726&fFID=11731"), false);
      assert.equal(isCybozuDownloadUrl("https://bozuman.cybozu.com/k/#/portal"), false);
    });
  });
});

describe('if webRequest is file download', () => {
  describe('isResponseDownload()', () => {
    let testDetails = {
      requestId: "13",
      url: "https://labs.s.cybozu.com/o/ag.cgi/%E7%AC%AC%EF%BC%91%E6%9C%9F%E6%B1%BA%E7%AE%97%E5%85%AC%E5%91%8A.pdf?page=FileDownload&id=11731&notimecard=1&type=application&subtype=pdf&ct=1&ext=.pdf",
      originUrl: "https://labs.s.cybozu.com/o/ag.cgi/%E7%AC%AC%EF%BC%91%E6%9C%9F%E6%B1%BA%E7%AE%97%E5%85%AC%E5%91%8A.pdf?page=FileDownload&id=11731&notimecard=1&type=application&subtype=pdf&ct=1&ext=.pdf",
      method: "GET",
      type: "script",
      timeStamp: 1490118778473,
      frameId: 4294967303,
      parentFrameId: 0,
      tabId: 2,
      responseHeaders: [
        {
          name: "Server",
          value: "nginx"
        }, {
          name: "Date",
          value: "Wed, 05 Jul 2017 09:29:14 GMT"
        }, {
          name: "Content-Type",
          value: "application/pdf;"
        }, {
          name: "Content-Length",
          value: "87747"
        }, {
          name: "Connection",
          value: "keep-alive"
        }, {
          name: "X-Cybozu-User",
          value: "21"
        }, {
          name: "X-Cybozu-Forward",
          value: "1"
        }, {
          name: "Content-Disposition",
          value: "attachment;"
        }, {
          name: "Last-Modified",
          value: "Mon, 19 May 2008 00:14:26 GMT"
        }, {
          name: "X-XSS-Protection",
          value: "1; mode=block"
        }
      ]
    };
    assert.equal(isResponseDownload(testDetails), true);
  });
});
