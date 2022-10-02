'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [806],
    {
        7806: function (e, n, r) {
            r.r(n),
                r.d(n, {
                    Component: function () {
                        return u;
                    },
                });
            var i = r(603),
                t = r(5893),
                o = r(7294),
                a = r(146),
                c = r(2117);
            function u() {
                var e,
                    n = (0, i.Z)((0, c.h4)(), 2),
                    r = n[0],
                    u = n[1],
                    d = u.width,
                    h = u.height,
                    l = (0, o.useState)({ features: [] }),
                    s = l[0],
                    p = l[1];
                return (
                    (0, o.useEffect)(function () {
                        fetch('/web/czechia.json')
                            .then(function (e) {
                                return e.json();
                            })
                            .then(p);
                    }, []),
                    (0, t.jsx)('div', {
                        ref: r,
                        children: (0, t.jsx)(a.Z, {
                            width: d,
                            height: h,
                            globeImageUrl: '/web/earth.jpg',
                            hexPolygonsData: s.features,
                            hexPolygonColor: function (n) {
                                var r;
                                return null !==
                                    (e =
                                        null == n
                                            ? void 0
                                            : null === (r = n.properties) ||
                                              void 0 === r
                                            ? void 0
                                            : r.color) && void 0 !== e
                                    ? e
                                    : '#fff';
                            },
                            hexPolygonResolution: 5,
                            hexPolygonMargin: 0.1,
                            hexPolygonLabel: function (e) {
                                var n = e.properties;
                                return '<div style="padding: 10px; background: rgba(0, 0, 0, 0.75); border-radius: 12px; border: 0.5px solid white;"><b>Means:</b><br />Temperature: <i>'
                                    .concat(
                                        n.temperature,
                                        '</i><br />Irradiance: <i>',
                                    )
                                    .concat(
                                        n.irradiance,
                                        '</i><br />Wind speed: <i>',
                                    )
                                    .concat(
                                        n.windSpeed,
                                        '</i><br />Precipitation: <i>',
                                    )
                                    .concat(n.precipitation, '</i></div>');
                            },
                        }),
                    })
                );
            }
        },
    },
]);
