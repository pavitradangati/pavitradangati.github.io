(function (b, l, e, g, h, f) {
    1 !== parseInt(e.msDoNotTrack || b.doNotTrack || e.doNotTrack, 10) && b.addEventListener("load", function () {
        var r = (new Date).getTime();
        b.galite = b.galite || {};
        var m = new XMLHttpRequest,
            n = "https://www.google-analytics.com/collect?cid=" + (l.uid = l.uid || Math.random() + "." + Math.random()) + "&v=1&tid=" + galite.UA + "&dl=" + f(h.location.href) + "&ul=en-us&de=UTF-8",
            a = function (b) {
                var d = "",
                    c;
                for (c in b) {
                    if (void 0 === b[c]) return !1;
                    d += f(b[c])
                }
                return d
            },
            p = {
                dt: [h.title],
                sd: [g.colorDepth, "-bit"],
                sr: [g.availHeight, "x", g.availWidth],
                vp: [innerWidth, "x", innerHeight],
                dr: [h.referrer]
            },
            k;
        for (k in p) {
            var q = k + "=" + a(p[k]);
            q && (n += "&" + q)
        }
        a = function (b, d) {
            var c = "",
                a;
            for (a in d) c += "&" + a + "=" + f(d[a]);
            return function () {
                var a = n + c + (galite.anonymizeIp ? "&aip=1" : "") + "&t=" + f(b) + "&z=" + (new Date).getTime();
                if (e.sendBeacon) e.sendBeacon(a);
                else try {
                    m.open("GET", a, !1), m.send()
                } catch (t) {
                    (new Image).src = a
                }
            }
        };
        setTimeout(a("pageview", null), 100);
        b.addEventListener("unload", a("timing", {
            utc: "JS Dependencies",
            utv: "unload",
            utt: (new Date).getTime() - r
        }))
    })
})(window, localStorage, navigator, screen, document, encodeURIComponent)