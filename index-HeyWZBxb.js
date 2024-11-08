(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function dg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cd = { exports: {} },
  Ls = {},
  fd = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  hg = Symbol.for("react.portal"),
  pg = Symbol.for("react.fragment"),
  mg = Symbol.for("react.strict_mode"),
  gg = Symbol.for("react.profiler"),
  vg = Symbol.for("react.provider"),
  yg = Symbol.for("react.context"),
  wg = Symbol.for("react.forward_ref"),
  xg = Symbol.for("react.suspense"),
  Sg = Symbol.for("react.memo"),
  Pg = Symbol.for("react.lazy"),
  Mu = Symbol.iterator;
function Tg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mu && e[Mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hd = Object.assign,
  pd = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pd),
    (this.updater = n || dd);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function md() {}
md.prototype = Jn.prototype;
function ea(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pd),
    (this.updater = n || dd);
}
var ta = (ea.prototype = new md());
ta.constructor = ea;
hd(ta, Jn.prototype);
ta.isPureReactComponent = !0;
var Ru = Array.isArray,
  gd = Object.prototype.hasOwnProperty,
  na = { current: null },
  vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function yd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      gd.call(t, r) && !vd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: br,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: na.current,
  };
}
function kg(e, t) {
  return {
    $$typeof: br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ra(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Cg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ju = /\/+/g;
function to(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Cg("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case br:
          case hg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + to(o, 0) : r),
      Ru(i)
        ? ((n = ""),
          e != null && (n = e.replace(ju, "$&/") + "/"),
          Ri(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ra(i) &&
            (i = kg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ju, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ru(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + to(s, l);
      o += Ri(s, t, n, a, i);
    }
  else if (((a = Tg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + to(s, l++)), (o += Ri(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function fi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Eg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  ji = { transition: null },
  Lg = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: ji,
    ReactCurrentOwner: na,
  };
function wd() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: fi,
  forEach: function (e, t, n) {
    fi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ra(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
_.Component = Jn;
_.Fragment = pg;
_.Profiler = gg;
_.PureComponent = ea;
_.StrictMode = mg;
_.Suspense = xg;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
_.act = wd;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = na.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      gd.call(t, a) &&
        !vd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: br, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: yg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vg, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = yd;
_.createFactory = function (e) {
  var t = yd.bind(null, e);
  return (t.type = e), t;
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: wg, render: e };
};
_.isValidElement = ra;
_.lazy = function (e) {
  return { $$typeof: Pg, _payload: { _status: -1, _result: e }, _init: Eg };
};
_.memo = function (e, t) {
  return { $$typeof: Sg, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = ji.transition;
  ji.transition = {};
  try {
    e();
  } finally {
    ji.transition = t;
  }
};
_.unstable_act = wd;
_.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
_.useContext = function (e) {
  return xe.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
_.useId = function () {
  return xe.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return xe.current.useRef(e);
};
_.useState = function (e) {
  return xe.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return xe.current.useTransition();
};
_.version = "18.3.1";
fd.exports = _;
var V = fd.exports;
const sn = dg(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ag = V,
  Vg = Symbol.for("react.element"),
  Mg = Symbol.for("react.fragment"),
  Rg = Object.prototype.hasOwnProperty,
  jg = Ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function xd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Rg.call(t, r) && !Dg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Vg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: jg.current,
  };
}
Ls.Fragment = Mg;
Ls.jsx = xd;
Ls.jsxs = xd;
cd.exports = Ls;
var x = cd.exports,
  Sd = { exports: {} },
  je = {},
  Pd = { exports: {} },
  Td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var D = E.length;
    E.push(j);
    e: for (; 0 < D; ) {
      var X = (D - 1) >>> 1,
        ie = E[X];
      if (0 < i(ie, j)) (E[X] = j), (E[D] = ie), (D = X);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      D = E.pop();
    if (D !== j) {
      E[0] = D;
      e: for (var X = 0, ie = E.length, ui = ie >>> 1; X < ui; ) {
        var Gt = 2 * (X + 1) - 1,
          eo = E[Gt],
          Qt = Gt + 1,
          ci = E[Qt];
        if (0 > i(eo, D))
          Qt < ie && 0 > i(ci, eo)
            ? ((E[X] = ci), (E[Qt] = D), (X = Qt))
            : ((E[X] = eo), (E[Gt] = D), (X = Gt));
        else if (Qt < ie && 0 > i(ci, D)) (E[X] = ci), (E[Qt] = D), (X = Qt);
        else break e;
      }
    }
    return j;
  }
  function i(E, j) {
    var D = E.sortIndex - j.sortIndex;
    return D !== 0 ? D : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    v = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= E)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function w(E) {
    if (((y = !1), m(E), !v))
      if (n(a) !== null) (v = !0), ai(S);
      else {
        var j = n(u);
        j !== null && b(w, j.startTime - E);
      }
  }
  function S(E, j) {
    (v = !1), y && ((y = !1), p(T), (T = -1)), (g = !0);
    var D = d;
    try {
      for (
        m(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (E && !re()));

      ) {
        var X = f.callback;
        if (typeof X == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var ie = X(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ie == "function" ? (f.callback = ie) : f === n(a) && r(a),
            m(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ui = !0;
      else {
        var Gt = n(u);
        Gt !== null && b(w, Gt.startTime - j), (ui = !1);
      }
      return ui;
    } finally {
      (f = null), (d = D), (g = !1);
    }
  }
  var C = !1,
    L = null,
    T = -1,
    F = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < F);
  }
  function wt() {
    if (L !== null) {
      var E = e.unstable_now();
      R = E;
      var j = !0;
      try {
        j = L(!0, E);
      } finally {
        j ? Kt() : ((C = !1), (L = null));
      }
    } else C = !1;
  }
  var Kt;
  if (typeof h == "function")
    Kt = function () {
      h(wt);
    };
  else if (typeof MessageChannel < "u") {
    var nr = new MessageChannel(),
      Vu = nr.port2;
    (nr.port1.onmessage = wt),
      (Kt = function () {
        Vu.postMessage(null);
      });
  } else
    Kt = function () {
      k(wt, 0);
    };
  function ai(E) {
    (L = E), C || ((C = !0), Kt());
  }
  function b(E, j) {
    T = k(function () {
      E(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), ai(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var D = d;
      d = j;
      try {
        return E();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = d;
      d = E;
      try {
        return j();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, D) {
      var X = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? X + D : X))
          : (D = X),
        E)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = D + ie),
        (E = {
          id: c++,
          callback: j,
          priorityLevel: E,
          startTime: D,
          expirationTime: ie,
          sortIndex: -1,
        }),
        D > X
          ? ((E.sortIndex = D),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (y ? (p(T), (T = -1)) : (y = !0), b(w, D - X)))
          : ((E.sortIndex = ie), t(a, E), v || g || ((v = !0), ai(S))),
        E
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (E) {
      var j = d;
      return function () {
        var D = d;
        d = j;
        try {
          return E.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(Td);
Pd.exports = Td;
var Ng = Pd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g = V,
  Me = Ng;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kd = new Set(),
  Dr = {};
function mn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) kd.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ho = Object.prototype.hasOwnProperty,
  Og =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Du = {},
  Nu = {};
function Fg(e) {
  return Ho.call(Nu, e)
    ? !0
    : Ho.call(Du, e)
    ? !1
    : Og.test(e)
    ? (Nu[e] = !0)
    : ((Du[e] = !0), !1);
}
function Ig(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zg(e, t, n, r) {
  if (t === null || typeof t > "u" || Ig(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ia = /[\-:]([a-z])/g;
function sa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, sa);
    de[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, sa);
    de[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ia, sa);
  de[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oa(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zg(t, n, i, r) && (n = null),
    r || i === null
      ? Fg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = _g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  di = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  la = Symbol.for("react.strict_mode"),
  Ko = Symbol.for("react.profiler"),
  Cd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  aa = Symbol.for("react.forward_ref"),
  Go = Symbol.for("react.suspense"),
  Qo = Symbol.for("react.suspense_list"),
  ua = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  Ld = Symbol.for("react.offscreen"),
  _u = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  no;
function hr(e) {
  if (no === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      no = (t && t[1]) || "";
    }
  return (
    `
` +
    no +
    e
  );
}
var ro = !1;
function io(e, t) {
  if (!e || ro) return "";
  ro = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (ro = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Bg(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = io(e.type, !1)), e;
    case 11:
      return (e = io(e.type.render, !1)), e;
    case 1:
      return (e = io(e.type, !0)), e;
    default:
      return "";
  }
}
function Yo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case xn:
      return "Portal";
    case Ko:
      return "Profiler";
    case la:
      return "StrictMode";
    case Go:
      return "Suspense";
    case Qo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ed:
        return (e.displayName || "Context") + ".Consumer";
      case Cd:
        return (e._context.displayName || "Context") + ".Provider";
      case aa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ua:
        return (
          (t = e.displayName || null), t !== null ? t : Yo(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Yo(e(t));
        } catch {}
    }
  return null;
}
function Ug(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yo(t);
    case 8:
      return t === la ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ad(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wg(e) {
  var t = Ad(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hi(e) {
  e._valueTracker || (e._valueTracker = Wg(e));
}
function Vd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ad(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Md(e, t) {
  (t = t.checked), t != null && oa(e, "checked", t, !1);
}
function qo(e, t) {
  Md(e, t);
  var n = Ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zo(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zo(e, t, n) {
  (t !== "number" || Yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function Rd(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var pi,
  Dd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        pi = pi || document.createElement("div"),
          pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $g = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  $g.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
  });
});
function Nd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function _d(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Nd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Hg = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function el(e, t) {
  if (t) {
    if (Hg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function tl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nl = null;
function ca(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var rl = null,
  In = null,
  zn = null;
function Bu(e) {
  if ((e = ni(e))) {
    if (typeof rl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = js(t)), rl(e.stateNode, e.type, t));
  }
}
function Od(e) {
  In ? (zn ? zn.push(e) : (zn = [e])) : (In = e);
}
function Fd() {
  if (In) {
    var e = In,
      t = zn;
    if (((zn = In = null), Bu(e), t)) for (e = 0; e < t.length; e++) Bu(t[e]);
  }
}
function Id(e, t) {
  return e(t);
}
function zd() {}
var so = !1;
function Bd(e, t, n) {
  if (so) return e(t, n);
  so = !0;
  try {
    return Id(e, t, n);
  } finally {
    (so = !1), (In !== null || zn !== null) && (zd(), Fd());
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = js(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var il = !1;
if (pt)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        il = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    il = !1;
  }
function Kg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  Xi = null,
  qi = !1,
  sl = null,
  Gg = {
    onError: function (e) {
      (xr = !0), (Xi = e);
    },
  };
function Qg(e, t, n, r, i, s, o, l, a) {
  (xr = !1), (Xi = null), Kg.apply(Gg, arguments);
}
function Yg(e, t, n, r, i, s, o, l, a) {
  if ((Qg.apply(this, arguments), xr)) {
    if (xr) {
      var u = Xi;
      (xr = !1), (Xi = null);
    } else throw Error(P(198));
    qi || ((qi = !0), (sl = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ud(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Uu(e) {
  if (gn(e) !== e) throw Error(P(188));
}
function Xg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Uu(i), e;
        if (s === r) return Uu(i), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Wd(e) {
  return (e = Xg(e)), e !== null ? $d(e) : null;
}
function $d(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $d(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hd = Me.unstable_scheduleCallback,
  Wu = Me.unstable_cancelCallback,
  qg = Me.unstable_shouldYield,
  Zg = Me.unstable_requestPaint,
  Z = Me.unstable_now,
  Jg = Me.unstable_getCurrentPriorityLevel,
  fa = Me.unstable_ImmediatePriority,
  Kd = Me.unstable_UserBlockingPriority,
  Zi = Me.unstable_NormalPriority,
  bg = Me.unstable_LowPriority,
  Gd = Me.unstable_IdlePriority,
  As = null,
  et = null;
function ev(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : rv,
  tv = Math.log,
  nv = Math.LN2;
function rv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((tv(e) / nv) | 0)) | 0;
}
var mi = 64,
  gi = 4194304;
function mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = mr(l)) : ((s &= o), s !== 0 && (r = mr(s)));
  } else (o = n & ~i), o !== 0 ? (r = mr(o)) : s !== 0 && (r = mr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function iv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Ge(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = iv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qd() {
  var e = mi;
  return (mi <<= 1), !(mi & 4194240) && (mi = 64), e;
}
function oo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ei(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function ov(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ge(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function Yd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xd,
  ha,
  qd,
  Zd,
  Jd,
  ll = !1,
  vi = [],
  Vt = null,
  Mt = null,
  Rt = null,
  Or = new Map(),
  Fr = new Map(),
  Ct = [],
  lv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $u(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ni(t)), t !== null && ha(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function av(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Vt = sr(Vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Mt = sr(Mt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rt = sr(Rt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Or.set(s, sr(Or.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Fr.set(s, sr(Fr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function bd(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ud(n)), t !== null)) {
          (e.blockedOn = t),
            Jd(e.priority, function () {
              qd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (nl = r), n.target.dispatchEvent(r), (nl = null);
    } else return (t = ni(n)), t !== null && ha(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hu(e, t, n) {
  Di(e) && n.delete(t);
}
function uv() {
  (ll = !1),
    Vt !== null && Di(Vt) && (Vt = null),
    Mt !== null && Di(Mt) && (Mt = null),
    Rt !== null && Di(Rt) && (Rt = null),
    Or.forEach(Hu),
    Fr.forEach(Hu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ll ||
      ((ll = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, uv)));
}
function Ir(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < vi.length) {
    or(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && or(Vt, e),
      Mt !== null && or(Mt, e),
      Rt !== null && or(Rt, e),
      Or.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < Ct.length;
    n++
  )
    (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
    bd(n), n.blockedOn === null && Ct.shift();
}
var Bn = yt.ReactCurrentBatchConfig,
  bi = !0;
function cv(e, t, n, r) {
  var i = z,
    s = Bn.transition;
  Bn.transition = null;
  try {
    (z = 1), pa(e, t, n, r);
  } finally {
    (z = i), (Bn.transition = s);
  }
}
function fv(e, t, n, r) {
  var i = z,
    s = Bn.transition;
  Bn.transition = null;
  try {
    (z = 4), pa(e, t, n, r);
  } finally {
    (z = i), (Bn.transition = s);
  }
}
function pa(e, t, n, r) {
  if (bi) {
    var i = al(e, t, n, r);
    if (i === null) vo(e, t, r, es, n), $u(e, r);
    else if (av(i, e, t, n, r)) r.stopPropagation();
    else if (($u(e, r), t & 4 && -1 < lv.indexOf(e))) {
      for (; i !== null; ) {
        var s = ni(i);
        if (
          (s !== null && Xd(s),
          (s = al(e, t, n, r)),
          s === null && vo(e, t, r, es, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else vo(e, t, r, null, n);
  }
}
var es = null;
function al(e, t, n, r) {
  if (((es = null), (e = ca(r)), (e = en(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (es = e), null;
}
function eh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jg()) {
        case fa:
          return 1;
        case Kd:
          return 4;
        case Zi:
        case bg:
          return 16;
        case Gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  ma = null,
  Ni = null;
function th() {
  if (Ni) return Ni;
  var e,
    t = ma,
    n = t.length,
    r,
    i = "value" in Lt ? Lt.value : Lt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ni = i.slice(e, 1 < r ? 1 - r : void 0));
}
function _i(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yi() {
  return !0;
}
function Ku() {
  return !1;
}
function De(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? yi
        : Ku),
      (this.isPropagationStopped = Ku),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yi));
      },
      persist: function () {},
      isPersistent: yi,
    }),
    t
  );
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ga = De(bn),
  ti = Q({}, bn, { view: 0, detail: 0 }),
  dv = De(ti),
  lo,
  ao,
  lr,
  Vs = Q({}, ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: va,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((lo = e.screenX - lr.screenX), (ao = e.screenY - lr.screenY))
              : (ao = lo = 0),
            (lr = e)),
          lo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ao;
    },
  }),
  Gu = De(Vs),
  hv = Q({}, Vs, { dataTransfer: 0 }),
  pv = De(hv),
  mv = Q({}, ti, { relatedTarget: 0 }),
  uo = De(mv),
  gv = Q({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vv = De(gv),
  yv = Q({}, bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wv = De(yv),
  xv = Q({}, bn, { data: 0 }),
  Qu = De(xv),
  Sv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Pv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Tv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function kv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tv[e]) ? !!t[e] : !1;
}
function va() {
  return kv;
}
var Cv = Q({}, ti, {
    key: function (e) {
      if (e.key) {
        var t = Sv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: va,
    charCode: function (e) {
      return e.type === "keypress" ? _i(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _i(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ev = De(Cv),
  Lv = Q({}, Vs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yu = De(Lv),
  Av = Q({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: va,
  }),
  Vv = De(Av),
  Mv = Q({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rv = De(Mv),
  jv = Q({}, Vs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Dv = De(jv),
  Nv = [9, 13, 27, 32],
  ya = pt && "CompositionEvent" in window,
  Sr = null;
pt && "documentMode" in document && (Sr = document.documentMode);
var _v = pt && "TextEvent" in window && !Sr,
  nh = pt && (!ya || (Sr && 8 < Sr && 11 >= Sr)),
  Xu = " ",
  qu = !1;
function rh(e, t) {
  switch (e) {
    case "keyup":
      return Nv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ih(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function Ov(e, t) {
  switch (e) {
    case "compositionend":
      return ih(t);
    case "keypress":
      return t.which !== 32 ? null : ((qu = !0), Xu);
    case "textInput":
      return (e = t.data), e === Xu && qu ? null : e;
    default:
      return null;
  }
}
function Fv(e, t) {
  if (Pn)
    return e === "compositionend" || (!ya && rh(e, t))
      ? ((e = th()), (Ni = ma = Lt = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Iv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Iv[e.type] : t === "textarea";
}
function sh(e, t, n, r) {
  Od(r),
    (t = ts(t, "onChange")),
    0 < t.length &&
      ((n = new ga("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  zr = null;
function zv(e) {
  gh(e, 0);
}
function Ms(e) {
  var t = Cn(e);
  if (Vd(t)) return e;
}
function Bv(e, t) {
  if (e === "change") return t;
}
var oh = !1;
if (pt) {
  var co;
  if (pt) {
    var fo = "oninput" in document;
    if (!fo) {
      var Ju = document.createElement("div");
      Ju.setAttribute("oninput", "return;"),
        (fo = typeof Ju.oninput == "function");
    }
    co = fo;
  } else co = !1;
  oh = co && (!document.documentMode || 9 < document.documentMode);
}
function bu() {
  Pr && (Pr.detachEvent("onpropertychange", lh), (zr = Pr = null));
}
function lh(e) {
  if (e.propertyName === "value" && Ms(zr)) {
    var t = [];
    sh(t, zr, e, ca(e)), Bd(zv, t);
  }
}
function Uv(e, t, n) {
  e === "focusin"
    ? (bu(), (Pr = t), (zr = n), Pr.attachEvent("onpropertychange", lh))
    : e === "focusout" && bu();
}
function Wv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ms(zr);
}
function $v(e, t) {
  if (e === "click") return Ms(t);
}
function Hv(e, t) {
  if (e === "input" || e === "change") return Ms(t);
}
function Kv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : Kv;
function Br(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ho.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function ec(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tc(e, t) {
  var n = ec(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ec(n);
  }
}
function ah(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ah(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function uh() {
  for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yi(e.document);
  }
  return t;
}
function wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gv(e) {
  var t = uh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ah(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = tc(n, s));
        var o = tc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qv = pt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  ul = null,
  Tr = null,
  cl = !1;
function nc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  cl ||
    Tn == null ||
    Tn !== Yi(r) ||
    ((r = Tn),
    "selectionStart" in r && wa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tr && Br(Tr, r)) ||
      ((Tr = r),
      (r = ts(ul, "onSelect")),
      0 < r.length &&
        ((t = new ga("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function wi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: wi("Animation", "AnimationEnd"),
    animationiteration: wi("Animation", "AnimationIteration"),
    animationstart: wi("Animation", "AnimationStart"),
    transitionend: wi("Transition", "TransitionEnd"),
  },
  ho = {},
  ch = {};
pt &&
  ((ch = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function Rs(e) {
  if (ho[e]) return ho[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ch) return (ho[e] = t[n]);
  return e;
}
var fh = Rs("animationend"),
  dh = Rs("animationiteration"),
  hh = Rs("animationstart"),
  ph = Rs("transitionend"),
  mh = new Map(),
  rc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ut(e, t) {
  mh.set(e, t), mn(t, [e]);
}
for (var po = 0; po < rc.length; po++) {
  var mo = rc[po],
    Yv = mo.toLowerCase(),
    Xv = mo[0].toUpperCase() + mo.slice(1);
  Ut(Yv, "on" + Xv);
}
Ut(fh, "onAnimationEnd");
Ut(dh, "onAnimationIteration");
Ut(hh, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(ph, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qv = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function ic(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yg(r, t, void 0, e), (e.currentTarget = null);
}
function gh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          ic(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          ic(i, l, u), (s = a);
        }
    }
  }
  if (qi) throw ((e = sl), (qi = !1), (sl = null), e);
}
function U(e, t) {
  var n = t[ml];
  n === void 0 && (n = t[ml] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vh(t, e, 2, !1), n.add(r));
}
function go(e, t, n) {
  var r = 0;
  t && (r |= 4), vh(n, e, r, t);
}
var xi = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[xi]) {
    (e[xi] = !0),
      kd.forEach(function (n) {
        n !== "selectionchange" && (qv.has(n) || go(n, !1, e), go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xi] || ((t[xi] = !0), go("selectionchange", !1, t));
  }
}
function vh(e, t, n, r) {
  switch (eh(t)) {
    case 1:
      var i = cv;
      break;
    case 4:
      i = fv;
      break;
    default:
      i = pa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !il ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = en(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Bd(function () {
    var u = s,
      c = ca(n),
      f = [];
    e: {
      var d = mh.get(e);
      if (d !== void 0) {
        var g = ga,
          v = e;
        switch (e) {
          case "keypress":
            if (_i(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ev;
            break;
          case "focusin":
            (v = "focus"), (g = uo);
            break;
          case "focusout":
            (v = "blur"), (g = uo);
            break;
          case "beforeblur":
          case "afterblur":
            g = uo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = pv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Vv;
            break;
          case fh:
          case dh:
          case hh:
            g = vv;
            break;
          case ph:
            g = Rv;
            break;
          case "scroll":
            g = dv;
            break;
          case "wheel":
            g = Dv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = wv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Yu;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = _r(h, p)), w != null && y.push(Wr(h, w, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== nl &&
            (v = n.relatedTarget || n.fromElement) &&
            (en(v) || v[mt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? en(v) : null),
              v !== null &&
                ((k = gn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((y = Gu),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Yu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = g == null ? d : Cn(g)),
            (m = v == null ? d : Cn(v)),
            (d = new y(w, h + "leave", g, n, c)),
            (d.target = k),
            (d.relatedTarget = m),
            (w = null),
            en(c) === u &&
              ((y = new y(p, h + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = k),
              (w = y)),
            (k = w),
            g && v)
          )
            t: {
              for (y = g, p = v, h = 0, m = y; m; m = yn(m)) h++;
              for (m = 0, w = p; w; w = yn(w)) m++;
              for (; 0 < h - m; ) (y = yn(y)), h--;
              for (; 0 < m - h; ) (p = yn(p)), m--;
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = yn(y)), (p = yn(p));
              }
              y = null;
            }
          else y = null;
          g !== null && sc(f, d, g, y, !1),
            v !== null && k !== null && sc(f, k, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Cn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = Bv;
        else if (Zu(d))
          if (oh) S = Hv;
          else {
            S = Wv;
            var C = Uv;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = $v);
        if (S && (S = S(e, u))) {
          sh(f, S, n, c);
          break e;
        }
        C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Zo(d, "number", d.value);
      }
      switch (((C = u ? Cn(u) : window), e)) {
        case "focusin":
          (Zu(C) || C.contentEditable === "true") &&
            ((Tn = C), (ul = u), (Tr = null));
          break;
        case "focusout":
          Tr = ul = Tn = null;
          break;
        case "mousedown":
          cl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cl = !1), nc(f, n, c);
          break;
        case "selectionchange":
          if (Qv) break;
        case "keydown":
        case "keyup":
          nc(f, n, c);
      }
      var L;
      if (ya)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Pn
          ? rh(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (nh &&
          n.locale !== "ko" &&
          (Pn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Pn && (L = th())
            : ((Lt = c),
              (ma = "value" in Lt ? Lt.value : Lt.textContent),
              (Pn = !0))),
        (C = ts(u, T)),
        0 < C.length &&
          ((T = new Qu(T, e, null, n, c)),
          f.push({ event: T, listeners: C }),
          L ? (T.data = L) : ((L = ih(n)), L !== null && (T.data = L)))),
        (L = _v ? Ov(e, n) : Fv(e, n)) &&
          ((u = ts(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = L)));
    }
    gh(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ts(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = _r(e, n)),
      s != null && r.unshift(Wr(e, s, i)),
      (s = _r(e, t)),
      s != null && r.push(Wr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = _r(n, s)), a != null && o.unshift(Wr(n, a, l)))
        : i || ((a = _r(n, s)), a != null && o.push(Wr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Zv = /\r\n?/g,
  Jv = /\u0000|\uFFFD/g;
function oc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zv,
      `
`
    )
    .replace(Jv, "");
}
function Si(e, t, n) {
  if (((t = oc(t)), oc(e) !== t && n)) throw Error(P(425));
}
function ns() {}
var fl = null,
  dl = null;
function hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pl = typeof setTimeout == "function" ? setTimeout : void 0,
  bv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lc = typeof Promise == "function" ? Promise : void 0,
  ey =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lc < "u"
      ? function (e) {
          return lc.resolve(null).then(e).catch(ty);
        }
      : pl;
function ty(e) {
  setTimeout(function () {
    throw e;
  });
}
function yo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ir(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ac(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var er = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + er,
  $r = "__reactProps$" + er,
  mt = "__reactContainer$" + er,
  ml = "__reactEvents$" + er,
  ny = "__reactListeners$" + er,
  ry = "__reactHandles$" + er;
function en(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = ac(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ni(e) {
  return (
    (e = e[Je] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function js(e) {
  return e[$r] || null;
}
var gl = [],
  En = -1;
function Wt(e) {
  return { current: e };
}
function W(e) {
  0 > En || ((e.current = gl[En]), (gl[En] = null), En--);
}
function B(e, t) {
  En++, (gl[En] = e.current), (e.current = t);
}
var It = {},
  ve = Wt(It),
  ke = Wt(!1),
  un = It;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function rs() {
  W(ke), W(ve);
}
function uc(e, t, n) {
  if (ve.current !== It) throw Error(P(168));
  B(ve, t), B(ke, n);
}
function yh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Ug(e) || "Unknown", i));
  return Q({}, n, r);
}
function is(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
    (un = ve.current),
    B(ve, e),
    B(ke, ke.current),
    !0
  );
}
function cc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = yh(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(ke),
      W(ve),
      B(ve, e))
    : W(ke),
    B(ke, n);
}
var st = null,
  Ds = !1,
  wo = !1;
function wh(e) {
  st === null ? (st = [e]) : st.push(e);
}
function iy(e) {
  (Ds = !0), wh(e);
}
function $t() {
  if (!wo && st !== null) {
    wo = !0;
    var e = 0,
      t = z;
    try {
      var n = st;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Ds = !1);
    } catch (i) {
      throw (st !== null && (st = st.slice(e + 1)), Hd(fa, $t), i);
    } finally {
      (z = t), (wo = !1);
    }
  }
  return null;
}
var Ln = [],
  An = 0,
  ss = null,
  os = 0,
  Oe = [],
  Fe = 0,
  cn = null,
  ot = 1,
  lt = "";
function qt(e, t) {
  (Ln[An++] = os), (Ln[An++] = ss), (ss = e), (os = t);
}
function xh(e, t, n) {
  (Oe[Fe++] = ot), (Oe[Fe++] = lt), (Oe[Fe++] = cn), (cn = e);
  var r = ot;
  e = lt;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Ge(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ot = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (lt = s + e);
  } else (ot = (1 << s) | (n << i) | r), (lt = e);
}
function xa(e) {
  e.return !== null && (qt(e, 1), xh(e, 1, 0));
}
function Sa(e) {
  for (; e === ss; )
    (ss = Ln[--An]), (Ln[An] = null), (os = Ln[--An]), (Ln[An] = null);
  for (; e === cn; )
    (cn = Oe[--Fe]),
      (Oe[Fe] = null),
      (lt = Oe[--Fe]),
      (Oe[Fe] = null),
      (ot = Oe[--Fe]),
      (Oe[Fe] = null);
}
var Ve = null,
  Ae = null,
  $ = !1,
  Ke = null;
function Sh(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Ae = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: ot, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yl(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!fc(e, t)) {
        if (vl(e)) throw Error(P(418));
        t = jt(n.nextSibling);
        var r = Ve;
        t && fc(e, t)
          ? Sh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e));
      }
    } else {
      if (vl(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ve = e);
    }
  }
}
function dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Pi(e) {
  if (e !== Ve) return !1;
  if (!$) return dc(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (vl(e)) throw (Ph(), Error(P(418)));
    for (; t; ) Sh(e, t), (t = jt(t.nextSibling));
  }
  if ((dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ve ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ph() {
  for (var e = Ae; e; ) e = jt(e.nextSibling);
}
function Kn() {
  (Ae = Ve = null), ($ = !1);
}
function Pa(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var sy = yt.ReactCurrentBatchConfig;
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Ti(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hc(e) {
  var t = e._init;
  return t(e._payload);
}
function Th(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ot(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = Eo(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function a(p, h, m, w) {
    var S = m.type;
    return S === Sn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tt &&
            hc(S) === h.type))
      ? ((w = i(h, m.props)), (w.ref = ar(p, h, m)), (w.return = p), w)
      : ((w = Wi(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = ar(p, h, m)),
        (w.return = p),
        w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Lo(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = ln(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Eo("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case di:
          return (
            (m = Wi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = ar(p, null, h)),
            (m.return = p),
            m
          );
        case xn:
          return (h = Lo(h, p.mode, m)), (h.return = p), h;
        case Tt:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (pr(h) || rr(h))
        return (h = ln(h, p.mode, m, null)), (h.return = p), h;
      Ti(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : l(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case di:
          return m.key === S ? a(p, h, m, w) : null;
        case xn:
          return m.key === S ? u(p, h, m, w) : null;
        case Tt:
          return (S = m._init), d(p, h, S(m._payload), w);
      }
      if (pr(m) || rr(m)) return S !== null ? null : c(p, h, m, w, null);
      Ti(p, m);
    }
    return null;
  }
  function g(p, h, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), l(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case di:
          return (p = p.get(w.key === null ? m : w.key) || null), a(h, p, w, S);
        case xn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S);
        case Tt:
          var C = w._init;
          return g(p, h, m, C(w._payload), S);
      }
      if (pr(w) || rr(w)) return (p = p.get(m) || null), c(h, p, w, S, null);
      Ti(h, w);
    }
    return null;
  }
  function v(p, h, m, w) {
    for (
      var S = null, C = null, L = h, T = (h = 0), F = null;
      L !== null && T < m.length;
      T++
    ) {
      L.index > T ? ((F = L), (L = null)) : (F = L.sibling);
      var R = d(p, L, m[T], w);
      if (R === null) {
        L === null && (L = F);
        break;
      }
      e && L && R.alternate === null && t(p, L),
        (h = s(R, h, T)),
        C === null ? (S = R) : (C.sibling = R),
        (C = R),
        (L = F);
    }
    if (T === m.length) return n(p, L), $ && qt(p, T), S;
    if (L === null) {
      for (; T < m.length; T++)
        (L = f(p, m[T], w)),
          L !== null &&
            ((h = s(L, h, T)), C === null ? (S = L) : (C.sibling = L), (C = L));
      return $ && qt(p, T), S;
    }
    for (L = r(p, L); T < m.length; T++)
      (F = g(L, p, T, m[T], w)),
        F !== null &&
          (e && F.alternate !== null && L.delete(F.key === null ? T : F.key),
          (h = s(F, h, T)),
          C === null ? (S = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        L.forEach(function (re) {
          return t(p, re);
        }),
      $ && qt(p, T),
      S
    );
  }
  function y(p, h, m, w) {
    var S = rr(m);
    if (typeof S != "function") throw Error(P(150));
    if (((m = S.call(m)), m == null)) throw Error(P(151));
    for (
      var C = (S = null), L = h, T = (h = 0), F = null, R = m.next();
      L !== null && !R.done;
      T++, R = m.next()
    ) {
      L.index > T ? ((F = L), (L = null)) : (F = L.sibling);
      var re = d(p, L, R.value, w);
      if (re === null) {
        L === null && (L = F);
        break;
      }
      e && L && re.alternate === null && t(p, L),
        (h = s(re, h, T)),
        C === null ? (S = re) : (C.sibling = re),
        (C = re),
        (L = F);
    }
    if (R.done) return n(p, L), $ && qt(p, T), S;
    if (L === null) {
      for (; !R.done; T++, R = m.next())
        (R = f(p, R.value, w)),
          R !== null &&
            ((h = s(R, h, T)), C === null ? (S = R) : (C.sibling = R), (C = R));
      return $ && qt(p, T), S;
    }
    for (L = r(p, L); !R.done; T++, R = m.next())
      (R = g(L, p, T, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && L.delete(R.key === null ? T : R.key),
          (h = s(R, h, T)),
          C === null ? (S = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        L.forEach(function (wt) {
          return t(p, wt);
        }),
      $ && qt(p, T),
      S
    );
  }
  function k(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case di:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === Sn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tt &&
                    hc(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = ar(p, C, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === Sn
              ? ((h = ln(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Wi(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = ar(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case xn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Lo(m, p.mode, w)), (h.return = p), (p = h);
          }
          return o(p);
        case Tt:
          return (C = m._init), k(p, h, C(m._payload), w);
      }
      if (pr(m)) return v(p, h, m, w);
      if (rr(m)) return y(p, h, m, w);
      Ti(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Eo(m, p.mode, w)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return k;
}
var Gn = Th(!0),
  kh = Th(!1),
  ls = Wt(null),
  as = null,
  Vn = null,
  Ta = null;
function ka() {
  Ta = Vn = as = null;
}
function Ca(e) {
  var t = ls.current;
  W(ls), (e._currentValue = t);
}
function wl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Un(e, t) {
  (as = e),
    (Ta = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Ta !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (as === null) throw Error(P(308));
      (Vn = e), (as.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var tn = null;
function Ea(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function Ch(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ea(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function La(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Eh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ea(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
function pc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function us(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            y = l;
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(g, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(g, f, d) : v),
                d == null)
              )
                break e;
              f = Q({}, f, d);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (dn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function mc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var ri = {},
  tt = Wt(ri),
  Hr = Wt(ri),
  Kr = Wt(ri);
function nn(e) {
  if (e === ri) throw Error(P(174));
  return e;
}
function Aa(e, t) {
  switch ((B(Kr, t), B(Hr, e), B(tt, ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = bo(t, e));
  }
  W(tt), B(tt, t);
}
function Qn() {
  W(tt), W(Hr), W(Kr);
}
function Lh(e) {
  nn(Kr.current);
  var t = nn(tt.current),
    n = bo(t, e.type);
  t !== n && (B(Hr, e), B(tt, n));
}
function Va(e) {
  Hr.current === e && (W(tt), W(Hr));
}
var H = Wt(0);
function cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xo = [];
function Ma() {
  for (var e = 0; e < xo.length; e++)
    xo[e]._workInProgressVersionPrimary = null;
  xo.length = 0;
}
var Fi = yt.ReactCurrentDispatcher,
  So = yt.ReactCurrentBatchConfig,
  fn = 0,
  G = null,
  te = null,
  se = null,
  fs = !1,
  kr = !1,
  Gr = 0,
  oy = 0;
function he() {
  throw Error(P(321));
}
function Ra(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function ja(e, t, n, r, i, s) {
  if (
    ((fn = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? cy : fy),
    (e = n(r, i)),
    kr)
  ) {
    s = 0;
    do {
      if (((kr = !1), (Gr = 0), 25 <= s)) throw Error(P(301));
      (s += 1),
        (se = te = null),
        (t.updateQueue = null),
        (Fi.current = dy),
        (e = n(r, i));
    } while (kr);
  }
  if (
    ((Fi.current = ds),
    (t = te !== null && te.next !== null),
    (fn = 0),
    (se = te = G = null),
    (fs = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Da() {
  var e = Gr !== 0;
  return (Gr = 0), e;
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (G.memoizedState = se = e) : (se = se.next = e), se;
}
function Ue() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = se === null ? G.memoizedState : se.next;
  if (t !== null) (se = t), (te = e);
  else {
    if (e === null) throw Error(P(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      se === null ? (G.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Po(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((fn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (G.lanes |= c),
          (dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      Ye(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (G.lanes |= s), (dn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function To(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ye(s, t.memoizedState) || (Te = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Ah() {}
function Vh(e, t) {
  var n = G,
    r = Ue(),
    i = t(),
    s = !Ye(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Na(jh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, Rh.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(P(349));
    fn & 30 || Mh(n, t, i);
  }
  return i;
}
function Mh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dh(t) && Nh(e);
}
function jh(e, t, n) {
  return n(function () {
    Dh(t) && Nh(e);
  });
}
function Dh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Nh(e) {
  var t = gt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function gc(e) {
  var t = Ze();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uy.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _h() {
  return Ue().memoizedState;
}
function Ii(e, t, n, r) {
  var i = Ze();
  (G.flags |= e),
    (i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ns(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((s = o.destroy), r !== null && Ra(r, o.deps))) {
      i.memoizedState = Yr(t, n, s, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Yr(1 | t, n, s, r));
}
function vc(e, t) {
  return Ii(8390656, 8, e, t);
}
function Na(e, t) {
  return Ns(2048, 8, e, t);
}
function Oh(e, t) {
  return Ns(4, 2, e, t);
}
function Fh(e, t) {
  return Ns(4, 4, e, t);
}
function Ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function zh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ns(4, 4, Ih.bind(null, t, e), n)
  );
}
function _a() {}
function Bh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Uh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ra(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wh(e, t, n) {
  return fn & 21
    ? (Ye(n, t) || ((n = Qd()), (G.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function ly(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = So.transition;
  So.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (So.transition = r);
  }
}
function $h() {
  return Ue().memoizedState;
}
function ay(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hh(e))
  )
    Kh(t, n);
  else if (((n = Ch(e, t, n, r)), n !== null)) {
    var i = we();
    Qe(n, e, r, i), Gh(n, t, r);
  }
}
function uy(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hh(e)) Kh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ea(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ch(e, t, i, r)),
      n !== null && ((i = we()), Qe(n, e, r, i), Gh(n, t, r));
  }
}
function Hh(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Kh(e, t) {
  kr = fs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n);
  }
}
var ds = {
    readContext: Be,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  cy = {
    readContext: Be,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: vc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ii(4194308, 4, Ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ay.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gc,
    useDebugValue: _a,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = gc(!1),
        t = e[0];
      return (e = ly.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Ze();
      if ($) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(P(349));
        fn & 30 || Mh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        vc(jh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Yr(9, Rh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = le.identifierPrefix;
      if ($) {
        var n = lt,
          r = ot;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = oy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fy = {
    readContext: Be,
    useCallback: Bh,
    useContext: Be,
    useEffect: Na,
    useImperativeHandle: zh,
    useInsertionEffect: Oh,
    useLayoutEffect: Fh,
    useMemo: Uh,
    useReducer: Po,
    useRef: _h,
    useState: function () {
      return Po(Qr);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = Ue();
      return Wh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(Qr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ah,
    useSyncExternalStore: Vh,
    useId: $h,
    unstable_isNewReconciler: !1,
  },
  dy = {
    readContext: Be,
    useCallback: Bh,
    useContext: Be,
    useEffect: Na,
    useImperativeHandle: zh,
    useInsertionEffect: Oh,
    useLayoutEffect: Fh,
    useMemo: Uh,
    useReducer: To,
    useRef: _h,
    useState: function () {
      return To(Qr);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = Ue();
      return te === null ? (t.memoizedState = e) : Wh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = To(Qr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: Ah,
    useSyncExternalStore: Vh,
    useId: $h,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _s = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = _t(e),
      s = ut(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Dt(e, s, i)),
      t !== null && (Qe(t, e, i, r), Oi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = _t(e),
      s = ut(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Dt(e, s, i)),
      t !== null && (Qe(t, e, i, r), Oi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = _t(e),
      i = ut(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Dt(e, i, r)),
      t !== null && (Qe(t, e, r, n), Oi(t, e, r));
  },
};
function yc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(i, s)
      : !0
  );
}
function Qh(e, t, n) {
  var r = !1,
    i = It,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Be(s))
      : ((i = Ce(t) ? un : ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Hn(e, i) : It)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _s),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function wc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _s.enqueueReplaceState(t, t.state, null);
}
function Sl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), La(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Be(s))
    : ((s = Ce(t) ? un : ve.current), (i.context = Hn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (xl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _s.enqueueReplaceState(i, i.state, null),
      us(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ko(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hy = typeof WeakMap == "function" ? WeakMap : Map;
function Yh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ps || ((ps = !0), (jl = r)), Pl(e, t);
    }),
    n
  );
}
function Xh(e, t, n) {
  (n = ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Pl(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ly.bind(null, e, t, n)), t.then(e, e));
}
function Sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var py = yt.ReactCurrentOwner,
  Te = !1;
function ye(e, t, n, r) {
  t.child = e === null ? kh(t, null, n, r) : Gn(t, e.child, n, r);
}
function Tc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Un(t, i),
    (r = ja(e, t, n, r, s, i)),
    (n = Da()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && n && xa(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function kc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !$a(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), qh(e, t, s, r, i))
      : ((e = Wi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(o, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Br(s, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return Tl(e, t, n, r, i);
}
function Zh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Rn, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Rn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        B(Rn, Le),
        (Le |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Rn, Le),
      (Le |= r);
  return ye(e, t, i, n), t.child;
}
function Jh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Tl(e, t, n, r, i) {
  var s = Ce(n) ? un : ve.current;
  return (
    (s = Hn(t, s)),
    Un(t, i),
    (n = ja(e, t, n, r, s, i)),
    (r = Da()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : ($ && r && xa(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function Cc(e, t, n, r, i) {
  if (Ce(n)) {
    var s = !0;
    is(t);
  } else s = !1;
  if ((Un(t, i), t.stateNode === null))
    zi(e, t), Qh(t, n, r), Sl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = Ce(n) ? un : ve.current), (u = Hn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && wc(t, o, r, u)),
      (kt = !1);
    var d = t.memoizedState;
    (o.state = d),
      us(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || ke.current || kt
        ? (typeof c == "function" && (xl(t, n, c, r), (a = t.memoizedState)),
          (l = kt || yc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Eh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : $e(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Be(a))
        : ((a = Ce(n) ? un : ve.current), (a = Hn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && wc(t, o, r, a)),
      (kt = !1),
      (d = t.memoizedState),
      (o.state = d),
      us(t, r, o, i);
    var v = t.memoizedState;
    l !== f || d !== v || ke.current || kt
      ? (typeof g == "function" && (xl(t, n, g, r), (v = t.memoizedState)),
        (u = kt || yc(t, n, u, r, d, v, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return kl(e, t, n, r, s, i);
}
function kl(e, t, n, r, i, s) {
  Jh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && cc(t, n, !1), vt(e, t, s);
  (r = t.stateNode), (py.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Gn(t, e.child, null, s)), (t.child = Gn(t, null, l, s)))
      : ye(e, t, l, s),
    (t.memoizedState = r.state),
    i && cc(t, n, !0),
    t.child
  );
}
function bh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? uc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && uc(e, t.context, !1),
    Aa(e, t.containerInfo);
}
function Ec(e, t, n, r, i) {
  return Kn(), Pa(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
function El(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ep(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(H, i & 1),
    e === null)
  )
    return (
      yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Is(o, r, 0, null)),
              (e = ln(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = El(n)),
              (t.memoizedState = Cl),
              e)
            : Oa(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return my(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Ot(l, s)) : ((s = ln(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? El(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oa(e, t) {
  return (
    (t = Is({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ki(e, t, n, r) {
  return (
    r !== null && Pa(r),
    Gn(t, e.child, null, n),
    (e = Oa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function my(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ko(Error(P(422)))), ki(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Is({ mode: "visible", children: r.children }, i, 0, null)),
        (s = ln(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, o),
        (t.child.memoizedState = El(o)),
        (t.memoizedState = Cl),
        s);
  if (!(t.mode & 1)) return ki(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(P(419))), (r = ko(s, r, void 0)), ki(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Te || l)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), gt(e, i), Qe(r, e, i, -1));
    }
    return Wa(), (r = ko(Error(P(421)))), ki(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ay.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ae = jt(i.nextSibling)),
      (Ve = t),
      ($ = !0),
      (Ke = null),
      e !== null &&
        ((Oe[Fe++] = ot),
        (Oe[Fe++] = lt),
        (Oe[Fe++] = cn),
        (ot = e.id),
        (lt = e.overflow),
        (cn = t)),
      (t = Oa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wl(e.return, t, n);
}
function Co(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function tp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ye(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lc(e, n, t);
        else if (e.tag === 19) Lc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && cs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Co(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && cs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Co(t, !0, n, null, s);
        break;
      case "together":
        Co(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gy(e, t, n) {
  switch (t.tag) {
    case 3:
      bh(t), Kn();
      break;
    case 5:
      Lh(t);
      break;
    case 1:
      Ce(t.type) && is(t);
      break;
    case 4:
      Aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(ls, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ep(e, t, n)
          : (B(H, H.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      B(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zh(e, t, n);
  }
  return vt(e, t, n);
}
var np, Ll, rp, ip;
np = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ll = function () {};
rp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), nn(tt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Xo(e, i)), (r = Xo(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Jo(e, i)), (r = Jo(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ns);
    }
    el(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Dr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Dr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ip = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vy(e, t, n) {
  var r = t.pendingProps;
  switch ((Sa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Ce(t.type) && rs(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        W(ke),
        W(ve),
        Ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (_l(Ke), (Ke = null)))),
        Ll(e, t),
        pe(t),
        null
      );
    case 5:
      Va(t);
      var i = nn(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return pe(t), null;
        }
        if (((e = nn(tt.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Je] = t), (r[$r] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) U(gr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Ou(r, s), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Iu(r, s), U("invalid", r);
          }
          el(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Si(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Si(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Dr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              hi(r), Fu(r, s, !0);
              break;
            case "textarea":
              hi(r), zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ns);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[$r] = r),
            np(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = tl(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) U(gr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Ou(e, r), (i = Xo(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Iu(e, r), (i = Jo(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            el(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? _d(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Dd(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Dr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && U("scroll", e)
                      : a != null && oa(e, s, a, o));
              }
            switch (n) {
              case "input":
                hi(e), Fu(e, r, !1);
                break;
              case "textarea":
                hi(e), zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Fn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ns);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) ip(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = nn(Kr.current)), nn(tt.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (s = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Si(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Si(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (W(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Ph(), Kn(), (t.flags |= 98560), (s = !1);
        else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(P(317));
            s[Je] = t;
          } else
            Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (s = !1);
        } else Ke !== null && (_l(Ke), (Ke = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? ne === 0 && (ne = 3) : Wa())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Qn(), Ll(e, t), e === null && Ur(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Ca(t.type._context), pe(t), null;
    case 17:
      return Ce(t.type) && rs(), pe(t), null;
    case 19:
      if ((W(H), (s = t.memoizedState), s === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ur(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = cs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ur(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Z() > Xn &&
            ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = cs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
            )
              return pe(t), null;
          } else
            2 * Z() - s.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Z()),
          (t.sibling = null),
          (n = H.current),
          B(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function yy(e, t) {
  switch ((Sa(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        W(ke),
        W(ve),
        Ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Va(t), null;
    case 13:
      if ((W(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340));
        Kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(H), null;
    case 4:
      return Qn(), null;
    case 10:
      return Ca(t.type._context), null;
    case 22:
    case 23:
      return Ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  ge = !1,
  wy = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Al(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Ac = !1;
function xy(e, t) {
  if (((fl = bi), (e = uh()), wa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (dl = { focusedElem: e, selectionRange: n }, bi = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    k = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : $e(t.type, y),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (w) {
          Y(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = Ac), (Ac = !1), v;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Al(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[$r], delete t[ml], delete t[ny], delete t[ry])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function op(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || op(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ns));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), (e = e.sibling);
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
var ae = null,
  He = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) lp(e, t, n), (n = n.sibling);
}
function lp(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(As, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Mn(n, t);
    case 6:
      var r = ae,
        i = He;
      (ae = null),
        xt(e, t, n),
        (ae = r),
        (He = i),
        ae !== null &&
          (He
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (He
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? yo(e.parentNode, n)
              : e.nodeType === 1 && yo(e, n),
            Ir(e))
          : yo(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = He),
        (ae = n.stateNode.containerInfo),
        (He = !0),
        xt(e, t, n),
        (ae = r),
        (He = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Al(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Y(n, t, l);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), xt(e, t, n), (ge = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wy()),
      t.forEach(function (r) {
        var i = Vy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (He = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (He = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(P(160));
        lp(s, o, i), (ae = null), (He = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Y(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ap(t, e), (t = t.sibling);
}
function ap(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), qe(e), r & 4)) {
        try {
          Cr(3, e, e.return), Os(3, e);
        } catch (y) {
          Y(e, e.return, y);
        }
        try {
          Cr(5, e, e.return);
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 1:
      We(t, e), qe(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (We(t, e),
        qe(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Md(i, s),
              tl(l, o);
            var u = tl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? _d(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Dd(i, f)
                : c === "children"
                ? Nr(i, f)
                : oa(i, c, f, u);
            }
            switch (l) {
              case "input":
                qo(i, s);
                break;
              case "textarea":
                Rd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Fn(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Fn(i, !!s.multiple, s.defaultValue, !0)
                      : Fn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[$r] = s;
          } catch (y) {
            Y(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((We(t, e), qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          Y(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (y) {
          Y(e, e.return, y);
        }
      break;
    case 4:
      We(t, e), qe(e);
      break;
    case 13:
      We(t, e),
        qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (za = Z())),
        r & 4 && Mc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (u = ge) || c), We(t, e), (ge = u)) : We(t, e),
        qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, d, d.return);
                  break;
                case 1:
                  Mn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Y(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Mn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    jc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (A = g)) : jc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Nd("display", o)));
              } catch (y) {
                Y(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                Y(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      We(t, e), qe(e), r & 4 && Mc(e);
      break;
    case 21:
      break;
    default:
      We(t, e), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (op(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var s = Vc(e);
          Rl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Vc(e);
          Ml(e, l, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sy(e, t, n) {
  (A = e), up(e);
}
function up(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ci;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ge;
        l = Ci;
        var u = ge;
        if (((Ci = o), (ge = a) && !u))
          for (A = i; A !== null; )
            (o = A),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Dc(i)
                : a !== null
                ? ((a.return = o), (A = a))
                : Dc(i);
        for (; s !== null; ) (A = s), up(s), (s = s.sibling);
        (A = i), (Ci = l), (ge = u);
      }
      Rc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : Rc(e);
  }
}
function Rc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && mc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mc(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ir(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        ge || (t.flags & 512 && Vl(t));
      } catch (d) {
        Y(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function jc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Dc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Os(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, i, a);
            }
          }
          var s = t.return;
          try {
            Vl(t);
          } catch (a) {
            Y(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Vl(t);
          } catch (a) {
            Y(t, o, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var Py = Math.ceil,
  hs = yt.ReactCurrentDispatcher,
  Fa = yt.ReactCurrentOwner,
  ze = yt.ReactCurrentBatchConfig,
  I = 0,
  le = null,
  J = null,
  ce = 0,
  Le = 0,
  Rn = Wt(0),
  ne = 0,
  Xr = null,
  dn = 0,
  Fs = 0,
  Ia = 0,
  Er = null,
  Pe = null,
  za = 0,
  Xn = 1 / 0,
  it = null,
  ps = !1,
  jl = null,
  Nt = null,
  Ei = !1,
  At = null,
  ms = 0,
  Lr = 0,
  Dl = null,
  Bi = -1,
  Ui = 0;
function we() {
  return I & 6 ? Z() : Bi !== -1 ? Bi : (Bi = Z());
}
function _t(e) {
  return e.mode & 1
    ? I & 2 && ce !== 0
      ? ce & -ce
      : sy.transition !== null
      ? (Ui === 0 && (Ui = Qd()), Ui)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : eh(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Dl = null), Error(P(185)));
  ei(e, n, r),
    (!(I & 2) || e !== le) &&
      (e === le && (!(I & 2) && (Fs |= n), ne === 4 && Et(e, ce)),
      Ee(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((Xn = Z() + 500), Ds && $t()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  sv(e, t);
  var r = Ji(e, e === le ? ce : 0);
  if (r === 0)
    n !== null && Wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wu(n), t === 1))
      e.tag === 0 ? iy(Nc.bind(null, e)) : wh(Nc.bind(null, e)),
        ey(function () {
          !(I & 6) && $t();
        }),
        (n = null);
    else {
      switch (Yd(r)) {
        case 1:
          n = fa;
          break;
        case 4:
          n = Kd;
          break;
        case 16:
          n = Zi;
          break;
        case 536870912:
          n = Gd;
          break;
        default:
          n = Zi;
      }
      n = vp(n, cp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cp(e, t) {
  if (((Bi = -1), (Ui = 0), I & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = Ji(e, e === le ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var s = dp();
    (le !== e || ce !== t) && ((it = null), (Xn = Z() + 500), on(e, t));
    do
      try {
        Cy();
        break;
      } catch (l) {
        fp(e, l);
      }
    while (!0);
    ka(),
      (hs.current = s),
      (I = i),
      J !== null ? (t = 0) : ((le = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ol(e)), i !== 0 && ((r = i), (t = Nl(e, i)))), t === 1)
    )
      throw ((n = Xr), on(e, 0), Et(e, r), Ee(e, Z()), n);
    if (t === 6) Et(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ty(i) &&
          ((t = gs(e, r)),
          t === 2 && ((s = ol(e)), s !== 0 && ((r = s), (t = Nl(e, s)))),
          t === 1))
      )
        throw ((n = Xr), on(e, 0), Et(e, r), Ee(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Zt(e, Pe, it);
          break;
        case 3:
          if (
            (Et(e, r), (r & 130023424) === r && ((t = za + 500 - Z()), 10 < t))
          ) {
            if (Ji(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = pl(Zt.bind(null, e, Pe, it), t);
            break;
          }
          Zt(e, Pe, it);
          break;
        case 4:
          if ((Et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ge(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Py(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pl(Zt.bind(null, e, Pe, it), r);
            break;
          }
          Zt(e, Pe, it);
          break;
        case 5:
          Zt(e, Pe, it);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ee(e, Z()), e.callbackNode === n ? cp.bind(null, e) : null;
}
function Nl(e, t) {
  var n = Er;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = gs(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && _l(t)),
    e
  );
}
function _l(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function Ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ye(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Et(e, t) {
  for (
    t &= ~Ia,
      t &= ~Fs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nc(e) {
  if (I & 6) throw Error(P(327));
  Wn();
  var t = Ji(e, 0);
  if (!(t & 1)) return Ee(e, Z()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ol(e);
    r !== 0 && ((t = r), (n = Nl(e, r)));
  }
  if (n === 1) throw ((n = Xr), on(e, 0), Et(e, t), Ee(e, Z()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, Pe, it),
    Ee(e, Z()),
    null
  );
}
function Ba(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((Xn = Z() + 500), Ds && $t());
  }
}
function hn(e) {
  At !== null && At.tag === 0 && !(I & 6) && Wn();
  var t = I;
  I |= 1;
  var n = ze.transition,
    r = z;
  try {
    if (((ze.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (ze.transition = n), (I = t), !(I & 6) && $t();
  }
}
function Ua() {
  (Le = Rn.current), W(Rn);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bv(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Sa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rs();
          break;
        case 3:
          Qn(), W(ke), W(ve), Ma();
          break;
        case 5:
          Va(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          W(H);
          break;
        case 19:
          W(H);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Ua();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (J = e = Ot(e.current, null)),
    (ce = Le = t),
    (ne = 0),
    (Xr = null),
    (Ia = Fs = dn = 0),
    (Pe = Er = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function fp(e, t) {
  do {
    var n = J;
    try {
      if ((ka(), (Fi.current = ds), fs)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fs = !1;
      }
      if (
        ((fn = 0),
        (se = te = G = null),
        (kr = !1),
        (Gr = 0),
        (Fa.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Xr = t), (J = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Sc(o);
          if (g !== null) {
            (g.flags &= -257),
              Pc(g, o, l, s, t),
              g.mode & 1 && xc(s, u, t),
              (t = g),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xc(s, u, t), Wa();
              break e;
            }
            a = Error(P(426));
          }
        } else if ($ && l.mode & 1) {
          var k = Sc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Pc(k, o, l, s, t),
              Pa(Yn(a, l));
            break e;
          }
        }
        (s = a = Yn(a, l)),
          ne !== 4 && (ne = 2),
          Er === null ? (Er = [s]) : Er.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Yh(s, a, t);
              pc(s, p);
              break e;
            case 1:
              l = a;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Xh(s, l, t);
                pc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      pp(n);
    } catch (S) {
      (t = S), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dp() {
  var e = hs.current;
  return (hs.current = ds), e === null ? ds : e;
}
function Wa() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(dn & 268435455) && !(Fs & 268435455)) || Et(le, ce);
}
function gs(e, t) {
  var n = I;
  I |= 2;
  var r = dp();
  (le !== e || ce !== t) && ((it = null), on(e, t));
  do
    try {
      ky();
      break;
    } catch (i) {
      fp(e, i);
    }
  while (!0);
  if ((ka(), (I = n), (hs.current = r), J !== null)) throw Error(P(261));
  return (le = null), (ce = 0), ne;
}
function ky() {
  for (; J !== null; ) hp(J);
}
function Cy() {
  for (; J !== null && !qg(); ) hp(J);
}
function hp(e) {
  var t = gp(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? pp(e) : (J = t),
    (Fa.current = null);
}
function pp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yy(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (J = null);
        return;
      }
    } else if (((n = vy(n, t, Le)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Zt(e, t, n) {
  var r = z,
    i = ze.transition;
  try {
    (ze.transition = null), (z = 1), Ey(e, t, n, r);
  } finally {
    (ze.transition = i), (z = r);
  }
  return null;
}
function Ey(e, t, n, r) {
  do Wn();
  while (At !== null);
  if (I & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (ov(e, s),
    e === le && ((J = le = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      vp(Zi, function () {
        return Wn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = ze.transition), (ze.transition = null);
    var o = z;
    z = 1;
    var l = I;
    (I |= 4),
      (Fa.current = null),
      xy(e, n),
      ap(n, e),
      Gv(dl),
      (bi = !!fl),
      (dl = fl = null),
      (e.current = n),
      Sy(n),
      Zg(),
      (I = l),
      (z = o),
      (ze.transition = s);
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (At = e), (ms = i)),
    (s = e.pendingLanes),
    s === 0 && (Nt = null),
    ev(n.stateNode),
    Ee(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ps) throw ((ps = !1), (e = jl), (jl = null), e);
  return (
    ms & 1 && e.tag !== 0 && Wn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Dl ? Lr++ : ((Lr = 0), (Dl = e))) : (Lr = 0),
    $t(),
    null
  );
}
function Wn() {
  if (At !== null) {
    var e = Yd(ms),
      t = ze.transition,
      n = z;
    try {
      if (((ze.transition = null), (z = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (ms = 0), I & 6)) throw Error(P(331));
        var i = I;
        for (I |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        g = c.return;
                      if ((sp(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (A = d);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (A = p);
                break e;
              }
              A = s.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          o = A;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (A = m);
          else
            e: for (o = h; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Os(9, l);
                  }
                } catch (S) {
                  Y(l, l.return, S);
                }
              if (l === o) {
                A = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (A = w);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((I = i), $t(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(As, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (ze.transition = t);
    }
  }
  return !1;
}
function _c(e, t, n) {
  (t = Yn(n, t)),
    (t = Yh(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = we()),
    e !== null && (ei(e, 1, t), Ee(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = Xh(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = we()),
            t !== null && (ei(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ly(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > Z() - za)
        ? on(e, 0)
        : (Ia |= n)),
    Ee(e, t);
}
function mp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gi), (gi <<= 1), !(gi & 130023424) && (gi = 4194304))
      : (t = 1));
  var n = we();
  (e = gt(e, t)), e !== null && (ei(e, t, n), Ee(e, n));
}
function Ay(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mp(e, n);
}
function Vy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), mp(e, n);
}
var gp;
gp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ke.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), gy(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), $ && t.flags & 1048576 && xh(t, os, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zi(e, t), (e = t.pendingProps);
      var i = Hn(t, ve.current);
      Un(t, n), (i = ja(null, t, r, e, i, n));
      var s = Da();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((s = !0), is(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            La(t),
            (i.updater = _s),
            (t.stateNode = i),
            (i._reactInternals = t),
            Sl(t, r, e, n),
            (t = kl(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && xa(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ry(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = Tl(null, t, r, e, n);
            break e;
          case 1:
            t = Cc(null, t, r, e, n);
            break e;
          case 11:
            t = Tc(null, t, r, e, n);
            break e;
          case 14:
            t = kc(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Tl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Cc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((bh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Eh(e, t),
          us(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Yn(Error(P(423)), t)), (t = Ec(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Yn(Error(P(424)), t)), (t = Ec(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = jt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                $ = !0,
                Ke = null,
                n = kh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lh(t),
        e === null && yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        hl(r, i) ? (o = null) : s !== null && hl(r, s) && (t.flags |= 32),
        Jh(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && yl(t), null;
    case 13:
      return ep(e, t, n);
    case 4:
      return (
        Aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Tc(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          B(ls, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ye(s.value, o)) {
            if (s.children === i.children && !ke.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = ut(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      wl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  wl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        kc(e, t, r, i, n)
      );
    case 15:
      return qh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        zi(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), is(t)) : (e = !1),
        Un(t, n),
        Qh(t, r, i),
        Sl(t, r, i, n),
        kl(null, t, r, !0, e, n)
      );
    case 19:
      return tp(e, t, n);
    case 22:
      return Zh(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function vp(e, t) {
  return Hd(e, t);
}
function My(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new My(e, t, n, r);
}
function $a(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ry(e) {
  if (typeof e == "function") return $a(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === aa)) return 11;
    if (e === ua) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) $a(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Sn:
        return ln(n.children, i, s, t);
      case la:
        (o = 8), (i |= 8);
        break;
      case Ko:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = Ko), (e.lanes = s), e
        );
      case Go:
        return (e = Ie(13, n, t, i)), (e.elementType = Go), (e.lanes = s), e;
      case Qo:
        return (e = Ie(19, n, t, i)), (e.elementType = Qo), (e.lanes = s), e;
      case Ld:
        return Is(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cd:
              o = 10;
              break e;
            case Ed:
              o = 9;
              break e;
            case aa:
              o = 11;
              break e;
            case ua:
              o = 14;
              break e;
            case Tt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function ln(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Is(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Ld),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Eo(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function Lo(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = oo(0)),
    (this.expirationTimes = oo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ha(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new jy(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ie(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    La(s),
    e
  );
}
function Dy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yp(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return yh(e, n, t);
  }
  return t;
}
function wp(e, t, n, r, i, s, o, l, a) {
  return (
    (e = Ha(n, r, !0, e, i, s, o, l, a)),
    (e.context = yp(null)),
    (n = e.current),
    (r = we()),
    (i = _t(n)),
    (s = ut(r, i)),
    (s.callback = t ?? null),
    Dt(n, s, i),
    (e.current.lanes = i),
    ei(e, i, r),
    Ee(e, r),
    e
  );
}
function zs(e, t, n, r) {
  var i = t.current,
    s = we(),
    o = _t(i);
  return (
    (n = yp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ut(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(i, t, o)),
    e !== null && (Qe(e, i, o, s), Oi(e, i, o)),
    o
  );
}
function vs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ka(e, t) {
  Oc(e, t), (e = e.alternate) && Oc(e, t);
}
function Ny() {
  return null;
}
var xp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ga(e) {
  this._internalRoot = e;
}
Bs.prototype.render = Ga.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  zs(e, t, null, null);
};
Bs.prototype.unmount = Ga.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      zs(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function Bs(e) {
  this._internalRoot = e;
}
Bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
    Ct.splice(n, 0, e), n === 0 && bd(e);
  }
};
function Qa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fc() {}
function _y(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = vs(o);
        s.call(u);
      };
    }
    var o = wp(t, r, e, 0, null, !1, !1, "", Fc);
    return (
      (e._reactRootContainer = o),
      (e[mt] = o.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = vs(a);
      l.call(u);
    };
  }
  var a = Ha(e, 0, !1, null, null, !1, !1, "", Fc);
  return (
    (e._reactRootContainer = a),
    (e[mt] = a.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      zs(t, a, n, r);
    }),
    a
  );
}
function Ws(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = vs(o);
        l.call(a);
      };
    }
    zs(t, o, e, i);
  } else o = _y(n, t, e, i, r);
  return vs(o);
}
Xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (da(t, n | 1), Ee(t, Z()), !(I & 6) && ((Xn = Z() + 500), $t()));
      }
      break;
    case 13:
      hn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }),
        Ka(e, 1);
  }
};
ha = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    Ka(e, 134217728);
  }
};
qd = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = gt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    Ka(e, t);
  }
};
Zd = function () {
  return z;
};
Jd = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = js(r);
            if (!i) throw Error(P(90));
            Vd(r), qo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
  }
};
Id = Ba;
zd = hn;
var Oy = { usingClientEntryPoint: !1, Events: [ni, Cn, js, Od, Fd, Ba] },
  cr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fy = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Li.isDisabled && Li.supportsFiber)
    try {
      (As = Li.inject(Fy)), (et = Li);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qa(t)) throw Error(P(200));
  return Dy(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Qa(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = xp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ha(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    new Ga(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Wd(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return hn(e);
};
je.hydrate = function (e, t, n) {
  if (!Us(t)) throw Error(P(200));
  return Ws(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Qa(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = xp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = wp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[mt] = t.current),
    Ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Bs(t);
};
je.render = function (e, t, n) {
  if (!Us(t)) throw Error(P(200));
  return Ws(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Us(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (hn(function () {
        Ws(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Ba;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Us(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ws(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function Sp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp);
    } catch (e) {
      console.error(e);
    }
}
Sp(), (Sd.exports = je);
var Iy = Sd.exports,
  Pp,
  Ic = Iy;
(Pp = Ic.createRoot), Ic.hydrateRoot;
var Tp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  zc = sn.createContext && sn.createContext(Tp),
  zy = ["attr", "size", "title"];
function By(e, t) {
  if (e == null) return {};
  var n = Uy(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Uy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ys() {
  return (
    (ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ys.apply(this, arguments)
  );
}
function Bc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(n), !0).forEach(function (r) {
          Wy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Bc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Wy(e, t, n) {
  return (
    (t = $y(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $y(e) {
  var t = Hy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kp(e) {
  return (
    e &&
    e.map((t, n) =>
      sn.createElement(t.tag, ws({ key: n }, t.attr), kp(t.child))
    )
  );
}
function $s(e) {
  return (t) =>
    sn.createElement(Ky, ys({ attr: ws({}, e.attr) }, t), kp(e.child));
}
function Ky(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = By(e, zy),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      sn.createElement(
        "svg",
        ys(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: ws(ws({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && sn.createElement("title", null, s),
        e.children
      )
    );
  };
  return zc !== void 0
    ? sn.createElement(zc.Consumer, null, (n) => t(n))
    : t(Tp);
}
function Gy(e) {
  return $s({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function Qy(e) {
  return $s({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function Yy(e) {
  return $s({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function Xy(e) {
  return $s({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function qy(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Hs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ol = (e) => Array.isArray(e);
function Cp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function qr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Uc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ya(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Uc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Uc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Ks(e, t, n) {
  const r = e.getProps();
  return Ya(r, t, n !== void 0 ? n : r.custom, e);
}
const Xa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qa = ["initial", ...Xa],
  ii = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(ii),
  ct = (e) => e * 1e3,
  ft = (e) => e / 1e3,
  Zy = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Jy = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  by = { type: "keyframes", duration: 0.8 },
  e0 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  t0 = (e, { keyframes: t }) =>
    t.length > 2
      ? by
      : vn.has(e)
      ? e.startsWith("scale")
        ? Jy(t[1])
        : Zy
      : e0;
function Za(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const n0 = { skipAnimations: !1, useManualTiming: !1 },
  r0 = (e) => e !== null;
function Gs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(r0),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const fe = (e) => e;
function i0(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    s.has(u) && (a.schedule(u), e()), u(o);
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && s.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u));
    },
  };
  return a;
}
const Ai = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  s0 = 40;
function Ep(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ai.reduce((p, h) => ((p[h] = i0(s)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = o,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, s0), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: Ai.reduce((p, h) => {
      const m = o[h];
      return (p[h] = (w, S = !1, C = !1) => (n || v(), m.schedule(w, S, C))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ai.length; h++) o[Ai[h]].cancel(p);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: O,
    cancel: Xe,
    state: ee,
    steps: Ao,
  } = Ep(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0),
  Lp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  o0 = 1e-7,
  l0 = 12;
function a0(e, t, n, r, i) {
  let s,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (s = Lp(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > o0 && ++l < l0);
  return o;
}
function si(e, t, n, r) {
  if (e === t && n === r) return fe;
  const i = (s) => a0(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Lp(i(s), t, r));
}
const Ap = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Vp = (e) => (t) => 1 - e(1 - t),
  Mp = si(0.33, 1.53, 0.69, 0.99),
  Ja = Vp(Mp),
  Rp = Ap(Ja),
  jp = (e) =>
    (e *= 2) < 1 ? 0.5 * Ja(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ba = (e) => 1 - Math.sin(Math.acos(e)),
  Dp = Vp(ba),
  Np = Ap(ba),
  _p = (e) => /^0[^.\s]+$/u.test(e);
function u0(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || _p(e)
    : !0;
}
let c0 = fe,
  Fl = fe;
const Op = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Fp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Ip = Fp("--"),
  f0 = Fp("var(--"),
  eu = (e) => (f0(e) ? d0.test(e.split("/*")[0].trim()) : !1),
  d0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  h0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function p0(e) {
  const t = h0.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function zp(e, t, n = 1) {
  const [r, i] = p0(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Op(o) ? parseFloat(o) : o;
  }
  return eu(i) ? zp(i, t, n + 1) : i;
}
const zt = (e, t, n) => (n > t ? t : n < e ? e : n),
  tr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Zr = { ...tr, transform: (e) => zt(0, 1, e) },
  Vi = { ...tr, default: 1 },
  oi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = oi("deg"),
  nt = oi("%"),
  M = oi("px"),
  m0 = oi("vh"),
  g0 = oi("vw"),
  Wc = {
    ...nt,
    parse: (e) => nt.parse(e) / 100,
    transform: (e) => nt.transform(e * 100),
  },
  v0 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  $c = (e) => e === tr || e === M,
  Hc = (e, t) => parseFloat(e.split(", ")[t]),
  Kc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Hc(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Hc(s[1], e) : 0;
      }
    },
  y0 = new Set(["x", "y", "z"]),
  w0 = ii.filter((e) => !y0.has(e));
function x0(e) {
  const t = [];
  return (
    w0.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const qn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Kc(4, 13),
  y: Kc(5, 14),
};
qn.translateX = qn.x;
qn.translateY = qn.y;
const Bp = (e) => (t) => t.test(e),
  S0 = { test: (e) => e === "auto", parse: (e) => e },
  Up = [tr, M, nt, St, g0, m0, S0],
  Gc = (e) => Up.find(Bp(e)),
  an = new Set();
let Il = !1,
  zl = !1;
function Wp() {
  if (zl) {
    const e = Array.from(an).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = x0(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var l;
            (l = r.getValue(s)) === null || l === void 0 || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (zl = !1), (Il = !1), an.forEach((e) => e.complete()), an.clear();
}
function $p() {
  an.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (zl = !0);
  });
}
function P0() {
  $p(), Wp();
}
class tu {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (an.add(this), Il || ((Il = !0), O.read($p), O.resolveKeyframes(Wp)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      an.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), an.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ar = (e) => Math.round(e * 1e5) / 1e5,
  nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function T0(e) {
  return e == null;
}
const k0 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ru = (e, t) => (n) =>
    !!(
      (typeof n == "string" && k0.test(n) && n.startsWith(e)) ||
      (t && !T0(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Hp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, l] = r.match(nu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  C0 = (e) => zt(0, 255, e),
  Vo = { ...tr, transform: (e) => Math.round(C0(e)) },
  rn = {
    test: ru("rgb", "red"),
    parse: Hp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vo.transform(e) +
      ", " +
      Vo.transform(t) +
      ", " +
      Vo.transform(n) +
      ", " +
      Ar(Zr.transform(r)) +
      ")",
  };
function E0(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Bl = { test: ru("#"), parse: E0, transform: rn.transform },
  jn = {
    test: ru("hsl", "hue"),
    parse: Hp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      nt.transform(Ar(t)) +
      ", " +
      nt.transform(Ar(n)) +
      ", " +
      Ar(Zr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => rn.test(e) || Bl.test(e) || jn.test(e),
    parse: (e) =>
      rn.test(e) ? rn.parse(e) : jn.test(e) ? jn.parse(e) : Bl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? rn.transform(e)
        : jn.transform(e),
  },
  L0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function A0(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(nu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(L0)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Kp = "number",
  Gp = "color",
  V0 = "var",
  M0 = "var(",
  Qc = "${}",
  R0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const l = t
    .replace(
      R0,
      (a) => (
        me.test(a)
          ? (r.color.push(s), i.push(Gp), n.push(me.parse(a)))
          : a.startsWith(M0)
          ? (r.var.push(s), i.push(V0), n.push(a))
          : (r.number.push(s), i.push(Kp), n.push(parseFloat(a))),
        ++s,
        Qc
      )
    )
    .split(Qc);
  return { values: n, split: l, indexes: r, types: i };
}
function Qp(e) {
  return Jr(e).values;
}
function Yp(e) {
  const { split: t, types: n } = Jr(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o];
        l === Kp
          ? (s += Ar(i[o]))
          : l === Gp
          ? (s += me.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const j0 = (e) => (typeof e == "number" ? 0 : e);
function D0(e) {
  const t = Qp(e);
  return Yp(e)(t.map(j0));
}
const Bt = {
    test: A0,
    parse: Qp,
    createTransformer: Yp,
    getAnimatableNone: D0,
  },
  N0 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(nu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = N0.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const O0 = /\b([a-z-]*)\(.*?\)/gu,
  Ul = {
    ...Bt,
    getAnimatableNone: (e) => {
      const t = e.match(O0);
      return t ? t.map(_0).join(" ") : e;
    },
  },
  F0 = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
  },
  I0 = {
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Vi,
    scaleX: Vi,
    scaleY: Vi,
    scaleZ: Vi,
    skew: St,
    skewX: St,
    skewY: St,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Zr,
    originX: Wc,
    originY: Wc,
    originZ: M,
  },
  Yc = { ...tr, transform: Math.round },
  iu = {
    ...F0,
    ...I0,
    zIndex: Yc,
    size: M,
    fillOpacity: Zr,
    strokeOpacity: Zr,
    numOctaves: Yc,
  },
  z0 = {
    ...iu,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Ul,
    WebkitFilter: Ul,
  },
  su = (e) => z0[e];
function Xp(e, t) {
  let n = su(e);
  return (
    n !== Ul && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const B0 = new Set(["auto", "none", "0"]);
function U0(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !B0.has(s) && Jr(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = Xp(n, i);
}
class qp extends tu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), eu(u))) {
        const c = zp(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !v0.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Gc(i),
      l = Gc(s);
    if (o !== l)
      if ($c(o) && $c(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) u0(t[i]) && r.push(i);
    r.length && U0(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = qn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      l = i[o];
    (i[o] = qn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function ou(e) {
  return typeof e == "function";
}
let $i;
function W0() {
  $i = void 0;
}
const rt = {
    now: () => (
      $i === void 0 &&
        rt.set(
          ee.isProcessing || n0.useManualTiming
            ? ee.timestamp
            : performance.now()
        ),
      $i
    ),
    set: (e) => {
      ($i = e), queueMicrotask(W0);
    },
  },
  Xc = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Bt.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function $0(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function H0(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Xc(i, t),
    l = Xc(s, t);
  return !o || !l ? !1 : $0(e) || ((n === "spring" || ou(n)) && r);
}
const K0 = 40;
class Zp {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = rt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > K0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && P0(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = rt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !H0(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        a == null || a(Gs(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function lu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const G0 = 5;
function Jp(e, t, n) {
  const r = Math.max(t - G0, 0);
  return lu(n - e(r), t - r);
}
const Mo = 0.001,
  Q0 = 0.01,
  Y0 = 10,
  X0 = 0.05,
  q0 = 1;
function Z0({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = zt(X0, q0, o)),
    (e = zt(Q0, Y0, ft(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            g = Wl(u, o),
            v = Math.exp(-f);
          return Mo - (d / g) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            y = Wl(Math.pow(u, 2), o);
          return ((-i(u) + Mo > 0 ? -1 : 1) * ((d - g) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Mo + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = b0(i, s, l);
  if (((e = ct(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const J0 = 12;
function b0(e, t, n) {
  let r = n;
  for (let i = 1; i < J0; i++) r = r - e(r) / t(r);
  return r;
}
function Wl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const e1 = ["duration", "bounce"],
  t1 = ["stiffness", "damping", "mass"];
function qc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function n1(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!qc(e, t1) && qc(e, e1)) {
    const n = Z0(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function bp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = n1({ ...r, velocity: -ft(r.velocity || 0) }),
    g = f || 0,
    v = a / (2 * Math.sqrt(l * u)),
    y = s - i,
    k = ft(Math.sqrt(l / u)),
    p = Math.abs(y) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const m = Wl(k, v);
    h = (w) => {
      const S = Math.exp(-v * k * w);
      return (
        s - S * (((g + v * k * y) / m) * Math.sin(m * w) + y * Math.cos(m * w))
      );
    };
  } else if (v === 1) h = (m) => s - Math.exp(-k * m) * (y + (g + k * y) * m);
  else {
    const m = k * Math.sqrt(v * v - 1);
    h = (w) => {
      const S = Math.exp(-v * k * w),
        C = Math.min(m * w, 300);
      return (
        s - (S * ((g + v * k * y) * Math.sinh(C) + m * y * Math.cosh(C))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const w = h(m);
      if (d) o.done = m >= c;
      else {
        let S = 0;
        v < 1 && (S = m === 0 ? ct(g) : Jp(h, m, w));
        const C = Math.abs(S) <= n,
          L = Math.abs(s - w) <= t;
        o.done = C && L;
      }
      return (o.value = o.done ? s : w), o;
    },
  };
}
function Zc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (T) => (l !== void 0 && T < l) || (a !== void 0 && T > a),
    v = (T) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - T) < Math.abs(a - T)
        ? l
        : a;
  let y = n * t;
  const k = f + y,
    p = o === void 0 ? k : o(k);
  p !== k && (y = p - f);
  const h = (T) => -y * Math.exp(-T / r),
    m = (T) => p + h(T),
    w = (T) => {
      const F = h(T),
        R = m(T);
      (d.done = Math.abs(F) <= u), (d.value = d.done ? p : R);
    };
  let S, C;
  const L = (T) => {
    g(d.value) &&
      ((S = T),
      (C = bp({
        keyframes: [d.value, v(d.value)],
        velocity: Jp(m, T, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    L(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let F = !1;
        return (
          !C && S === void 0 && ((F = !0), w(T), L(T)),
          S !== void 0 && T >= S ? C.next(T - S) : (!F && w(T), d)
        );
      },
    }
  );
}
const r1 = si(0.42, 0, 1, 1),
  i1 = si(0, 0, 0.58, 1),
  em = si(0.42, 0, 0.58, 1),
  s1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  au = (e) => Array.isArray(e) && typeof e[0] == "number",
  Jc = {
    linear: fe,
    easeIn: r1,
    easeInOut: em,
    easeOut: i1,
    circIn: ba,
    circInOut: Np,
    circOut: Dp,
    backIn: Ja,
    backInOut: Rp,
    backOut: Mp,
    anticipate: jp,
  },
  bc = (e) => {
    if (au(e)) {
      Fl(e.length === 4);
      const [t, n, r, i] = e;
      return si(t, n, r, i);
    } else if (typeof e == "string") return Fl(Jc[e] !== void 0), Jc[e];
    return e;
  },
  o1 = (e, t) => (n) => t(e(n)),
  dt = (...e) => e.reduce(o1),
  pn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  K = (e, t, n) => e + (t - e) * n;
function Ro(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function l1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ro(a, l, e + 1 / 3)), (s = Ro(a, l, e)), (o = Ro(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function xs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const jo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  a1 = [Bl, rn, jn],
  u1 = (e) => a1.find((t) => t.test(e));
function ef(e) {
  const t = u1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === jn && (n = l1(n)), n;
}
const tf = (e, t) => {
    const n = ef(e),
      r = ef(t);
    if (!n || !r) return xs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = jo(n.red, r.red, s)),
      (i.green = jo(n.green, r.green, s)),
      (i.blue = jo(n.blue, r.blue, s)),
      (i.alpha = K(n.alpha, r.alpha, s)),
      rn.transform(i)
    );
  },
  $l = new Set(["none", "hidden"]);
function c1(e, t) {
  return $l.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function f1(e, t) {
  return (n) => K(e, t, n);
}
function uu(e) {
  return typeof e == "number"
    ? f1
    : typeof e == "string"
    ? eu(e)
      ? xs
      : me.test(e)
      ? tf
      : p1
    : Array.isArray(e)
    ? tm
    : typeof e == "object"
    ? me.test(e)
      ? tf
      : d1
    : xs;
}
function tm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => uu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function d1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = uu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function h1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[s] = a), i[o]++;
  }
  return r;
}
const p1 = (e, t) => {
  const n = Bt.createTransformer(t),
    r = Jr(e),
    i = Jr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? ($l.has(e) && !i.values.length) || ($l.has(t) && !r.values.length)
      ? c1(e, t)
      : dt(tm(h1(r, i), i.values), n)
    : xs(e, t);
};
function nm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : uu(e)(e, t);
}
function m1(e, t, n) {
  const r = [],
    i = n || nm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || fe : t;
      l = dt(a, l);
    }
    r.push(l);
  }
  return r;
}
function cu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Fl(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = m1(t, r, i),
    l = o.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = pn(e[c], e[c + 1], u);
      return o[c](f);
    };
  return n ? (u) => a(zt(e[0], e[s - 1], u)) : a;
}
function g1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = pn(0, t, r);
    e.push(K(n, 1, i));
  }
}
function rm(e) {
  const t = [0];
  return g1(t, e.length - 1), t;
}
function v1(e, t) {
  return e.map((n) => n * t);
}
function y1(e, t) {
  return e.map(() => t || em).splice(0, e.length - 1);
}
function Ss({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = s1(r) ? r.map(bc) : bc(r),
    s = { done: !1, value: t[0] },
    o = v1(n && n.length === t.length ? n : rm(t), e),
    l = cu(o, t, { ease: Array.isArray(i) ? i : y1(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
  };
}
const nf = 2e4;
function w1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < nf; ) (t += n), (r = e.next(t));
  return t >= nf ? 1 / 0 : t;
}
const x1 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => O.update(t, !0),
      stop: () => Xe(t),
      now: () => (ee.isProcessing ? ee.timestamp : rt.now()),
    };
  },
  S1 = { decay: Zc, inertia: Zc, tween: Ss, keyframes: Ss, spring: bp },
  P1 = (e) => e / 100;
class Qs extends Zp {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || tu,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      l = ou(n) ? n : S1[n] || Ss;
    let a, u;
    l !== Ss &&
      typeof t[0] != "number" &&
      ((a = dt(P1, nm(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = w1(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: v,
      repeatDelay: y,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = s;
    if (g) {
      const T = Math.min(this.currentTime, c) / f;
      let F = Math.floor(T),
        R = T % 1;
      !R && T >= 1 && (R = 1),
        R === 1 && F--,
        (F = Math.min(F, g + 1)),
        !!(F % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), y && (R -= y / f))
            : v === "mirror" && (w = o)),
        (m = zt(0, 1, R) * f);
    }
    const S = h ? { done: !1, value: a[0] } : w.next(m);
    l && (S.value = l(S.value));
    let { done: C } = S;
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const L =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      L && i !== void 0 && (S.value = Gs(a, this.options, i)),
      k && k(S.value),
      L && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? ft(t.calculatedDuration) : 0;
  }
  get time() {
    return ft(this.currentTime);
  }
  set time(t) {
    (t = ct(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = ft(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = x1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
function T1(e) {
  return new Qs(e);
}
const k1 = new Set(["opacity", "clipPath", "filter", "transform"]),
  C1 = 10,
  E1 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / C1), 2);
    for (let i = 0; i < r; i++) n += e(pn(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function fu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const L1 = { linearEasing: void 0 };
function A1(e, t) {
  const n = fu(e);
  return () => {
    var r;
    return (r = L1[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ps = A1(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function im(e) {
  return !!(
    (typeof e == "function" && Ps()) ||
    !e ||
    (typeof e == "string" && (e in Hl || Ps())) ||
    au(e) ||
    (Array.isArray(e) && e.every(im))
  );
}
const vr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Hl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vr([0, 0.65, 0.55, 1]),
    circOut: vr([0.55, 0, 1, 0.45]),
    backIn: vr([0.31, 0.01, 0.66, -0.59]),
    backOut: vr([0.33, 1.53, 0.69, 0.99]),
  };
function sm(e, t) {
  if (e)
    return typeof e == "function" && Ps()
      ? E1(e, t)
      : au(e)
      ? vr(e)
      : Array.isArray(e)
      ? e.map((n) => sm(n, t) || Hl.easeOut)
      : Hl[e];
}
function V1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = sm(l, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function rf(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const M1 = fu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ts = 10,
  R1 = 2e4;
function j1(e) {
  return ou(e.type) || e.type === "spring" || !im(e.ease);
}
function D1(e, t) {
  const n = new Qs({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < R1; ) (r = n.sample(s)), i.push(r.value), (s += Ts);
  return { times: void 0, keyframes: i, duration: s - Ts, ease: "linear" };
}
const om = { anticipate: jp, backInOut: Rp, circInOut: Np };
function N1(e) {
  return e in om;
}
class sf extends Zp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new qp(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && Ps() && N1(o) && (o = om[o]), j1(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: v,
          element: y,
          ...k
        } = this.options,
        p = D1(t, k);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (s = p.times),
        (o = p.ease),
        (l = "keyframes");
    }
    const f = V1(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (rf(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(Gs(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: s, type: l, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return ft(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return ft(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ct(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return fe;
      const { animation: r } = n;
      rf(r, t);
    }
    return fe;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        v = new Qs({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0,
        }),
        y = ct(this.time);
      u.setWithVelocity(v.sample(y - Ts).value, v.sample(y).value, Ts);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: l,
    } = t;
    return (
      M1() &&
      r &&
      k1.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      l !== "inertia"
    );
  }
}
const lm = fu(() => window.ScrollTimeline !== void 0);
class _1 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      lm() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function O1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const du =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const l = Za(r, e) || {},
        a = l.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - ct(a);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), l.onUpdate && l.onUpdate(d);
        },
        onComplete: () => {
          o(), l.onComplete && l.onComplete();
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      O1(l) || (c = { ...c, ...t0(e, c) }),
        c.duration && (c.duration = ct(c.duration)),
        c.repeatDelay && (c.repeatDelay = ct(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !s && t.get() !== void 0)
      ) {
        const d = Gs(c.keyframes, l);
        if (d !== void 0)
          return (
            O.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new _1([])
          );
      }
      return !s && sf.supports(c) ? new sf(c) : new Qs(c);
    },
  F1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  I1 = (e) => (Ol(e) ? e[e.length - 1] || 0 : e);
function hu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hu(this.subscriptions, t), () => pu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const of = 30,
  z1 = (e) => !isNaN(parseFloat(e)),
  Vr = { current: void 0 };
class B1 {
  constructor(t, n = {}) {
    (this.version = "11.11.11"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = rt.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = rt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = z1(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            O.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Vr.current && Vr.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = rt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > of
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, of);
    return lu(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function be(e, t) {
  return new B1(e, t);
}
function U1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, be(n));
}
function W1(e, t) {
  const n = Ks(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = I1(s[o]);
    U1(e, o, l);
  }
}
const gu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  $1 = "framerAppearId",
  am = "data-" + gu($1);
function um(e) {
  return e.props[am];
}
const oe = (e) => !!(e && e.getVelocity);
function H1(e) {
  return !!(oe(e) && e.add);
}
function Kl(e, t) {
  const n = e.getValue("willChange");
  if (H1(n)) return n.add(t);
}
function K1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function cm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null
      ),
      g = a[f];
    if (g === void 0 || (c && K1(c, f))) continue;
    const v = { delay: n, ...Za(o || {}, f) };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const p = um(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, O);
        h !== null && ((v.startTime = h), (y = !0));
      }
    }
    Kl(e, f),
      d.start(
        du(f, d, g, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : v, e, y)
      );
    const k = d.animation;
    k && u.push(k);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        O.update(() => {
          l && W1(e, l);
        });
      }),
    u
  );
}
function Gl(e, t, n = {}) {
  var r;
  const i = Ks(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(cm(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = s;
            return G1(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else return Promise.all([o(), l(n.delay)]);
}
function G1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Q1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Gl(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function Q1(e, t) {
  return e.sortNodePosition(t);
}
function Y1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Gl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Gl(e, t, n);
  else {
    const i = typeof t == "function" ? Ks(e, t, n.custom) : t;
    r = Promise.all(cm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const X1 = qa.length;
function fm(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? fm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < X1; n++) {
    const r = qa[n],
      i = e.props[r];
    (qr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const q1 = [...Xa].reverse(),
  Z1 = Xa.length;
function J1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Y1(e, n, r)));
}
function b1(e) {
  let t = J1(e),
    n = lf(),
    r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Ks(
      e,
      c,
      a === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: g, transitionEnd: v, ...y } = d;
      u = { ...u, ...y, ...v };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: u } = e,
      c = fm(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      v = 1 / 0;
    for (let k = 0; k < Z1; k++) {
      const p = q1[k],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = qr(m),
        S = p === a ? h.isActive : null;
      S === !1 && (v = k);
      let C = m === c[p] && m !== u[p] && w;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Hs(m) ||
          typeof m == "boolean")
      )
        continue;
      const L = ew(h.prevProp, m);
      let T = L || (p === a && h.isActive && !C && w) || (k > v && w),
        F = !1;
      const R = Array.isArray(m) ? m : [m];
      let re = R.reduce(i(p), {});
      S === !1 && (re = {});
      const { prevResolvedValues: wt = {} } = h,
        Kt = { ...wt, ...re },
        nr = (b) => {
          (T = !0),
            d.has(b) && ((F = !0), d.delete(b)),
            (h.needsAnimating[b] = !0);
          const E = e.getValue(b);
          E && (E.liveStyle = !1);
        };
      for (const b in Kt) {
        const E = re[b],
          j = wt[b];
        if (g.hasOwnProperty(b)) continue;
        let D = !1;
        Ol(E) && Ol(j) ? (D = !Cp(E, j)) : (D = E !== j),
          D
            ? E != null
              ? nr(b)
              : d.add(b)
            : E !== void 0 && d.has(b)
            ? nr(b)
            : (h.protectedKeys[b] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = re),
        h.isActive && (g = { ...g, ...re }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(C && L) || F) &&
          f.push(...R.map((b) => ({ animation: b, options: { type: p } })));
    }
    if (d.size) {
      const k = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (k[p] = h ?? null);
      }),
        f.push({ animation: k });
    }
    let y = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (r = !1),
      y ? t(f) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u);
      }),
      (n[a].isActive = u);
    const f = o(a);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = lf()), (r = !0);
    },
  };
}
function ew(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Cp(t, e) : !1;
}
function Yt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function lf() {
  return {
    animate: Yt(!0),
    whileInView: Yt(),
    whileHover: Yt(),
    whileTap: Yt(),
    whileDrag: Yt(),
    whileFocus: Yt(),
    exit: Yt(),
  };
}
class Ht {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class tw extends Ht {
  constructor(t) {
    super(t), t.animationState || (t.animationState = b1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Hs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let nw = 0;
class rw extends Ht {
  constructor() {
    super(...arguments), (this.id = nw++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const iw = { animation: { Feature: tw }, exit: { Feature: rw } },
  dm = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Ys(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const sw = (e) => (t) => dm(t) && e(t, Ys(t));
function at(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ht(e, t, n, r) {
  return at(e, t, sw(n), r);
}
const af = (e, t) => Math.abs(e - t);
function ow(e, t) {
  const n = af(e.x, t.x),
    r = af(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class hm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = No(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = ow(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: v } = f,
          { timestamp: y } = ee;
        this.history.push({ ...v, timestamp: y });
        const { onStart: k, onMove: p } = this.handlers;
        d ||
          (k && k(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Do(d, this.transformPagePoint)),
          O.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = No(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Do(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, k), v && v(f, k);
      }),
      !dm(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Ys(t),
      l = Do(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = ee;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, No(l, this.history)),
      (this.removeListeners = dt(
        ht(this.contextWindow, "pointermove", this.handlePointerMove),
        ht(this.contextWindow, "pointerup", this.handlePointerUp),
        ht(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Xe(this.updatePoint);
  }
}
function Do(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function No({ point: e }, t) {
  return {
    point: e,
    delta: uf(e, pm(t)),
    offset: uf(e, lw(t)),
    velocity: aw(t, 0.1),
  };
}
function lw(e) {
  return e[0];
}
function pm(e) {
  return e[e.length - 1];
}
function aw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = pm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ct(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = ft(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function mm(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const cf = mm("dragHorizontal"),
  ff = mm("dragVertical");
function gm(e) {
  let t = !1;
  if (e === "y") t = ff();
  else if (e === "x") t = cf();
  else {
    const n = cf(),
      r = ff();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function vm() {
  const e = gm(!0);
  return e ? (e(), !1) : !0;
}
function Dn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const ym = 1e-4,
  uw = 1 - ym,
  cw = 1 + ym,
  wm = 0.01,
  fw = 0 - wm,
  dw = 0 + wm;
function Re(e) {
  return e.max - e.min;
}
function hw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function df(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= uw && e.scale <= cw) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= fw && e.translate <= dw) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Mr(e, t, n, r) {
  df(e.x, t.x, n.x, r ? r.originX : void 0),
    df(e.y, t.y, n.y, r ? r.originY : void 0);
}
function hf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function pw(e, t, n) {
  hf(e.x, t.x, n.x), hf(e.y, t.y, n.y);
}
function pf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Rr(e, t, n) {
  pf(e.x, t.x, n.x), pf(e.y, t.y, n.y);
}
function mw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function mf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function gw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: mf(e.x, n, i), y: mf(e.y, t, r) };
}
function gf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vw(e, t) {
  return { x: gf(e.x, t.x), y: gf(e.y, t.y) };
}
function yw(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = pn(t.min, t.max - r, e.min))
      : r > i && (n = pn(e.min, e.max - i, t.min)),
    zt(0, 1, n)
  );
}
function ww(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Ql = 0.35;
function xw(e = Ql) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ql),
    { x: vf(e, "left", "right"), y: vf(e, "top", "bottom") }
  );
}
function vf(e, t, n) {
  return { min: yf(e, t), max: yf(e, n) };
}
function yf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const wf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nn = () => ({ x: wf(), y: wf() }),
  xf = () => ({ min: 0, max: 0 }),
  q = () => ({ x: xf(), y: xf() });
function _e(e) {
  return [e("x"), e("y")];
}
function xm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Sw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Pw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _o(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !_o(e) || !_o(t) || !_o(n);
}
function Jt(e) {
  return (
    Yl(e) ||
    Sm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sm(e) {
  return Sf(e.x) || Sf(e.y);
}
function Sf(e) {
  return e && e !== "0%";
}
function ks(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Pf(e, t, n, r, i) {
  return i !== void 0 && (e = ks(e, i, r)), ks(e, n, r) + t;
}
function Xl(e, t = 0, n = 1, r, i) {
  (e.min = Pf(e.min, t, n, r, i)), (e.max = Pf(e.max, t, n, r, i));
}
function Pm(e, { x: t, y: n }) {
  Xl(e.x, t.translate, t.scale, t.originPoint),
    Xl(e.y, n.translate, n.scale, n.originPoint);
}
const Tf = 0.999999999999,
  kf = 1.0000000000001;
function Tw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    (s = n[l]), (o = s.projectionDelta);
    const { visualElement: a } = s.options;
    (a && a.props.style && a.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        On(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Pm(e, o)),
      r && Jt(s.latestValues) && On(e, s.latestValues));
  }
  t.x < kf && t.x > Tf && (t.x = 1), t.y < kf && t.y > Tf && (t.y = 1);
}
function _n(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Cf(e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i);
  Xl(e, t, n, s, r);
}
function On(e, t) {
  Cf(e.x, t.x, t.scaleX, t.scale, t.originX),
    Cf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Tm(e, t) {
  return xm(Pw(e.getBoundingClientRect(), t));
}
function kw(e, t, n) {
  const r = Tm(e, n),
    { scroll: i } = t;
  return i && (_n(r.x, i.offset.x), _n(r.y, i.offset.y)), r;
}
const km = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Cw = new WeakMap();
class Ew {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ys(c, "page").point);
      },
      s = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: v } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = gm(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((k) => {
            let p = this.getAxisMotionValue(k).get() || 0;
            if (nt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[k];
                m && (p = Re(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[k] = p;
          }),
          v && O.postRender(() => v(c, f)),
          Kl(this.visualElement, "transform");
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: k } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Lw(k)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, k),
          this.updateAxis("y", f.point, k),
          this.visualElement.render(),
          y && y(c, f);
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        _e((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new hm(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: km(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && O.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Mi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = mw(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Dn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = gw(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = xw(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = ww(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = kw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = vw(i.layout.layoutBox, s);
    if (n) {
      const l = n(Sw(o));
      (this.hasMutatedConstraints = !!l), l && (o = xm(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = _e((c) => {
        if (!Mi(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        o && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Kl(this.visualElement, t), r.start(du(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!Mi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - K(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Dn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = yw({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((o) => {
        if (!Mi(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o];
        l.set(K(a, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Cw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ht(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Dn(a) && a.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      O.read(r);
    const o = at(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_e((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Ql,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function Mi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Lw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Aw extends Ht {
  constructor(t) {
    super(t),
      (this.removeGroupControls = fe),
      (this.removeListeners = fe),
      (this.controls = new Ew(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || fe);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ef = (e) => (t, n) => {
  e && O.postRender(() => e(t, n));
};
class Vw extends Ht {
  constructor() {
    super(...arguments), (this.removePointerDownListener = fe);
  }
  onPointerDown(t) {
    this.session = new hm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: km(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Ef(t),
      onStart: Ef(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && O.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const vu = V.createContext(null);
function Mw() {
  const e = V.useContext(vu);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = V.useId();
  V.useEffect(() => r(i), []);
  const s = V.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const Cm = V.createContext({}),
  Em = V.createContext({}),
  Hi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Lf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Lf(e, t.target.x),
        r = Lf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Rw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Bt.parse(e);
      if (i.length > 5) return r;
      const s = Bt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + o] /= l), (i[1 + o] /= a);
      const u = K(l, a, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Cs = {};
function jw(e) {
  Object.assign(Cs, e);
}
const { schedule: yu, cancel: kP } = Ep(queueMicrotask, !1);
class Dw extends V.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    jw(Nw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Hi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              O.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      yu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Lm(e) {
  const [t, n] = Mw(),
    r = V.useContext(Cm);
  return x.jsx(Dw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: V.useContext(Em),
    isPresent: t,
    safeToRemove: n,
  });
}
const Nw = {
    borderRadius: {
      ...fr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fr,
    borderTopRightRadius: fr,
    borderBottomLeftRadius: fr,
    borderBottomRightRadius: fr,
    boxShadow: Rw,
  },
  Am = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  _w = Am.length,
  Af = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Vf = (e) => typeof e == "number" || M.test(e);
function Ow(e, t, n, r, i, s) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, Fw(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, Iw(r))))
    : s &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < _w; o++) {
    const l = `border${Am[o]}Radius`;
    let a = Mf(t, l),
      u = Mf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Vf(a) === Vf(u)
        ? ((e[l] = Math.max(K(Af(a), Af(u), r), 0)),
          (nt.test(u) || nt.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function Mf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Fw = Vm(0, 0.5, Dp),
  Iw = Vm(0.5, 0.95, fe);
function Vm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(pn(e, t, r)));
}
function Rf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ne(e, t) {
  Rf(e.x, t.x), Rf(e.y, t.y);
}
function jf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Df(e, t, n, r, i) {
  return (
    (e -= t), (e = ks(e, 1 / n, r)), i !== void 0 && (e = ks(e, 1 / i, r)), e
  );
}
function zw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (nt.test(t) &&
      ((t = parseFloat(t)), (t = K(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = K(s.min, s.max, r);
  e === s && (l -= t),
    (e.min = Df(e.min, t, n, l, i)),
    (e.max = Df(e.max, t, n, l, i));
}
function Nf(e, t, [n, r, i], s, o) {
  zw(e, t[n], t[r], t[i], t.scale, s, o);
}
const Bw = ["x", "scaleX", "originX"],
  Uw = ["y", "scaleY", "originY"];
function _f(e, t, n, r) {
  Nf(e.x, t, Bw, n ? n.x : void 0, r ? r.x : void 0),
    Nf(e.y, t, Uw, n ? n.y : void 0, r ? r.y : void 0);
}
function Of(e) {
  return e.translate === 0 && e.scale === 1;
}
function Mm(e) {
  return Of(e.x) && Of(e.y);
}
function Ff(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Ww(e, t) {
  return Ff(e.x, t.x) && Ff(e.y, t.y);
}
function If(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Rm(e, t) {
  return If(e.x, t.x) && If(e.y, t.y);
}
function zf(e) {
  return Re(e.x) / Re(e.y);
}
function Bf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class $w {
  constructor() {
    this.members = [];
  }
  add(t) {
    hu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (pu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Hw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Kw = (e, t) => e.depth - t.depth;
class Gw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    pu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Kw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Ki(e) {
  const t = oe(e) ? e.get() : e;
  return F1(t) ? t.toValue() : t;
}
function Qw(e, t) {
  const n = rt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Xe(r), e(s - t));
    };
  return O.read(r, !0), () => Xe(r);
}
function Yw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Xw(e, t, n) {
  const r = oe(e) ? e : be(e);
  return r.start(du("", r, t, n)), r.animation;
}
const bt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  yr = typeof window < "u" && window.MotionDebug !== void 0,
  Oo = ["", "X", "Y", "Z"],
  qw = { visibility: "hidden" },
  Uf = 1e3;
let Zw = 0;
function Fo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function jm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = um(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", O, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && jm(r);
}
function Dm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = Zw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            yr &&
              (bt.totalNodes =
                bt.resolvedTargetDeltas =
                bt.recalculatedProjection =
                  0),
            this.nodes.forEach(ex),
            this.nodes.forEach(sx),
            this.nodes.forEach(ox),
            this.nodes.forEach(tx),
            yr && window.MotionDebug.record(bt);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gw());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new mu()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Yw(o)), (this.instance = o);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Qw(d, 250)),
            Hi.hasAnimatedSinceResize &&
              ((Hi.hasAnimatedSinceResize = !1), this.nodes.forEach($f));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || fx,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Rm(this.targetLayout, v) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...Za(y, "layout"), onPlay: k, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || $f(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Xe(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(lx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          jm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wf);
        return;
      }
      this.isUpdating || this.nodes.forEach(rx),
        (this.isUpdating = !1),
        this.nodes.forEach(ix),
        this.nodes.forEach(Jw),
        this.nodes.forEach(bw),
        this.clearAllSnapshots();
      const l = rt.now();
      (ee.delta = zt(0, 1e3 / 60, l - ee.timestamp)),
        (ee.timestamp = l),
        (ee.isProcessing = !0),
        Ao.update.process(ee),
        Ao.preRender.process(ee),
        Ao.render.process(ee),
        (ee.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), yu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nx), this.sharedNodes.forEach(ax);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        O.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      O.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Mm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (l || Jt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        o && (a = this.removeTransform(a)),
        dx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l) return q();
      const a = l.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(hx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (_n(a.x, c.offset.x), _n(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = q();
      if (
        (Ne(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Ne(a, o), _n(a.x, f.offset.x), _n(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = q();
      Ne(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          On(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Jt(c.latestValues) && On(a, c.latestValues);
      }
      return Jt(this.latestValues) && On(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = q();
      Ne(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Jt(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const c = q(),
          f = u.measurePageBox();
        Ne(c, f),
          _f(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Jt(this.latestValues) && _f(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ee.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = q()),
              (this.relativeTargetOrigin = q()),
              Rr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Ne(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = q()), (this.targetWithTransforms = q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                pw(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ne(this.target, this.layout.layoutBox),
                Pm(this.target, this.targetDelta))
              : Ne(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = q()),
                (this.relativeTargetOrigin = q()),
                Rr(this.relativeTargetOrigin, this.target, g.target),
                Ne(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          yr && bt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          Sm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ee.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ne(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      Tw(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = q()));
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (jf(this.prevProjectionDelta.x, this.projectionDelta.x),
          jf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !Bf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Bf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        yr && bt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
      ) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Nn()),
        (this.projectionDelta = Nn()),
        (this.projectionDeltaWithTransform = Nn());
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Nn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = q(),
        g = a ? a.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = g !== v,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(cx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Hf(f.x, o.x, S),
          Hf(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ux(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && Ww(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = q()),
            Ne(m, this.relativeTarget)),
          y &&
            ((this.animationValues = c), Ow(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Xe(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = O.update(() => {
          (Hi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Xw(0, Uf, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Uf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Nm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || q();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = o.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = o.target.y.min), (a.y.max = a.y.min + d);
        }
        Ne(l, a),
          On(l, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new $w()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: a } = o;
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      a.z && Fo("z", o, u, this.animationValues);
      for (let c = 0; c < Oo.length; c++)
        Fo(`rotate${Oo[c]}`, o, u, this.animationValues),
          Fo(`skew${Oo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return qw;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ki(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Ki(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Jt(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Hw(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y: v } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const y in Cs) {
        if (d[y] === void 0) continue;
        const { correct: k, applyTo: p } = Cs[y],
          h = u.transform === "none" ? d[y] : k(d[y], f);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++) u[p[w]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Ki(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Wf),
        this.root.sharedNodes.clear();
    }
  };
}
function Jw(e) {
  e.updateLayout();
}
function bw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? _e((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Nm(s, n.layoutBox, r) &&
        _e((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = Nn();
    Mr(l, r, n.layoutBox);
    const a = Nn();
    o ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !Mm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const v = q();
          Rr(v, n.layoutBox, d.layoutBox);
          const y = q();
          Rr(y, r, g.layoutBox),
            Rm(v, y) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ex(e) {
  yr && bt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nx(e) {
  e.clearSnapshot();
}
function Wf(e) {
  e.clearMeasurements();
}
function rx(e) {
  e.isLayoutDirty = !1;
}
function ix(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $f(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function sx(e) {
  e.resolveTargetDelta();
}
function ox(e) {
  e.calcProjection();
}
function lx(e) {
  e.resetSkewAndRotation();
}
function ax(e) {
  e.removeLeadSnapshot();
}
function Hf(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Kf(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function ux(e, t, n, r) {
  Kf(e.x, t.x, n.x, r), Kf(e.y, t.y, n.y, r);
}
function cx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Gf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Qf = Gf("applewebkit/") && !Gf("chrome/") ? Math.round : fe;
function Yf(e) {
  (e.min = Qf(e.min)), (e.max = Qf(e.max));
}
function dx(e) {
  Yf(e.x), Yf(e.y);
}
function Nm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !hw(zf(t), zf(n), 0.2))
  );
}
function hx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const px = Dm({
    attachResizeListener: (e, t) => at(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Io = { current: void 0 },
  _m = Dm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Io.current) {
        const e = new px({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Io.current = e);
      }
      return Io.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  mx = {
    pan: { Feature: Vw },
    drag: { Feature: Aw, ProjectionNode: _m, MeasureLayout: Lm },
  };
function Xf(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || vm()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && O.postRender(() => a(s, o));
    };
  return ht(e.current, n, i, { passive: !e.getProps()[r] });
}
class gx extends Ht {
  mount() {
    this.unmount = dt(Xf(this.node, !0), Xf(this.node, !1));
  }
  unmount() {}
}
class vx extends Ht {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = dt(
      at(this.node.current, "focus", () => this.onFocus()),
      at(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Om = (e, t) => (t ? (e === t ? !0 : Om(e, t.parentElement)) : !1);
function zo(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ys(n));
}
class yx extends Ht {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = fe),
      (this.removeEndListeners = fe),
      (this.removeAccessibleListeners = fe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = ht(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Om(this.node.current, l.target) ? c : u;
              d && O.update(() => d(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = ht(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = dt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                zo("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && O.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = at(this.node.current, "keyup", o)),
              zo("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = at(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && zo("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = at(this.node.current, "blur", r);
        this.removeAccessibleListeners = dt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && O.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !vm()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && O.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ht(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = at(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const ql = new WeakMap(),
  Bo = new WeakMap(),
  wx = (e) => {
    const t = ql.get(e.target);
    t && t(e);
  },
  xx = (e) => {
    e.forEach(wx);
  };
function Sx({ root: e, ...t }) {
  const n = e || document;
  Bo.has(n) || Bo.set(n, {});
  const r = Bo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(xx, { root: e, ...t })), r[i];
}
function Px(e, t, n) {
  const r = Sx(t);
  return (
    ql.set(e, n),
    r.observe(e),
    () => {
      ql.delete(e), r.unobserve(e);
    }
  );
}
const Tx = { some: 0, all: 1 };
class kx extends Ht {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Tx[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Px(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Cx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Cx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ex = {
    inView: { Feature: kx },
    tap: { Feature: yx },
    focus: { Feature: vx },
    hover: { Feature: gx },
  },
  Lx = { layout: { ProjectionNode: _m, MeasureLayout: Lm } },
  Xs = V.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  qs = V.createContext({}),
  wu = typeof window < "u",
  Zs = wu ? V.useLayoutEffect : V.useEffect,
  Fm = V.createContext({ strict: !1 });
function Ax(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = V.useContext(qs),
    a = V.useContext(Fm),
    u = V.useContext(vu),
    c = V.useContext(Xs).reducedMotion,
    f = V.useRef();
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = V.useContext(Em);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    Vx(f.current, n, i, g);
  const v = V.useRef(!1);
  V.useInsertionEffect(() => {
    d && v.current && d.update(n, u);
  });
  const y = n[am],
    k = V.useRef(
      !!y &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y))
    );
  return (
    Zs(() => {
      d &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        yu.render(d.render),
        k.current && d.animationState && d.animationState.animateChanges());
    }),
    V.useEffect(() => {
      d &&
        (!k.current && d.animationState && d.animationState.animateChanges(),
        k.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, y);
          }),
          (k.current = !1)));
    }),
    d
  );
}
function Vx(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Im(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && Dn(l)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function Im(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Im(e.parent);
}
function Mx(e, t, n) {
  return V.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dn(n) && (n.current = r));
    },
    [t]
  );
}
function Js(e) {
  return Hs(e.animate) || qa.some((t) => qr(e[t]));
}
function zm(e) {
  return !!(Js(e) || e.variants);
}
function Rx(e, t) {
  if (Js(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || qr(n) ? n : void 0,
      animate: qr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function jx(e) {
  const { initial: t, animate: n } = Rx(e, V.useContext(qs));
  return V.useMemo(() => ({ initial: t, animate: n }), [qf(t), qf(n)]);
}
function qf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Zn = {};
for (const e in Zf) Zn[e] = { isEnabled: (t) => Zf[e].some((n) => !!t[n]) };
function Dx(e) {
  for (const t in e) Zn[t] = { ...Zn[t], ...e[t] };
}
const Nx = Symbol.for("motionComponentSymbol");
function _x({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Dx(e);
  function s(l, a) {
    let u;
    const c = { ...V.useContext(Xs), ...l, layoutId: Ox(l) },
      { isStatic: f } = c,
      d = jx(l),
      g = r(l, f);
    if (!f && wu) {
      Fx();
      const v = Ix(c);
      (u = v.MeasureLayout),
        (d.visualElement = Ax(i, g, c, t, v.ProjectionNode));
    }
    return x.jsxs(qs.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? x.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, Mx(g, d.visualElement, a), g, f, d.visualElement),
      ],
    });
  }
  const o = V.forwardRef(s);
  return (o[Nx] = i), o;
}
function Ox({ layoutId: e }) {
  const t = V.useContext(Cm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Fx(e, t) {
  V.useContext(Fm).strict;
}
function Ix(e) {
  const { drag: t, layout: n } = Zn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const zx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function xu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(zx.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Bm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Um = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Wm(e, t, n, r) {
  Bm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Um.has(i) ? i : gu(i), t.attrs[i]);
}
function $m(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Cs[e] || e === "opacity"))
  );
}
function Su(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (oe(i[o]) ||
      (t.style && oe(t.style[o])) ||
      $m(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Hm(e, t, n) {
  const r = Su(e, t, n);
  for (const i in e)
    if (oe(e[i]) || oe(t[i])) {
      const s =
        ii.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function bs(e) {
  const t = V.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Bx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: Ux(r, i, s, e), renderState: t() };
  return n && (o.mount = (l) => n(r, l, o)), o;
}
const Km = (e) => (t, n) => {
  const r = V.useContext(qs),
    i = V.useContext(vu),
    s = () => Bx(e, t, r, i);
  return n ? s() : bs(s);
};
function Ux(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = Ki(s[d]);
  let { initial: o, animate: l } = e;
  const a = Js(e),
    u = zm(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !Hs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const v = Ya(e, d[g]);
      if (v) {
        const { transitionEnd: y, transition: k, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in y) i[h] = y[h];
      }
    }
  }
  return i;
}
const Pu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Gm = () => ({ ...Pu(), attrs: {} }),
  Qm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  $x = ii.length;
function Hx(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < $x; s++) {
    const o = ii[s],
      l = e[o];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (o.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = Qm(l, iu[o]);
      if (!a) {
        i = !1;
        const c = Wx[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Tu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (vn.has(a)) {
      o = !0;
      continue;
    } else if (Ip(a)) {
      i[a] = u;
      continue;
    } else {
      const c = Qm(u, iu[a]);
      a.startsWith("origin") ? ((l = !0), (s[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Hx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function Jf(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function Kx(e, t, n) {
  const r = Jf(t, e.x, e.width),
    i = Jf(n, e.y, e.height);
  return `${r} ${i}`;
}
const Gx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Qx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Yx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Gx : Qx;
  e[s.offset] = M.transform(-r);
  const o = M.transform(t),
    l = M.transform(n);
  e[s.array] = `${o} ${l}`;
}
function ku(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((Tu(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: v } = e;
  d.transform && (v && (g.transform = d.transform), delete d.transform),
    v &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = Kx(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && Yx(d, o, l, a, !1);
}
const Cu = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  Xx = {
    useVisualState: Km({
      scrapeMotionValuesFromProps: Hm,
      createRenderState: Gm,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        O.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          O.render(() => {
            ku(n, r, Cu(t.tagName), e.transformTemplate), Wm(t, n);
          });
      },
    }),
  },
  qx = {
    useVisualState: Km({
      scrapeMotionValuesFromProps: Su,
      createRenderState: Pu,
    }),
  };
function Ym(e, t, n) {
  for (const r in t) !oe(t[r]) && !$m(r, n) && (e[r] = t[r]);
}
function Zx({ transformTemplate: e }, t) {
  return V.useMemo(() => {
    const n = Pu();
    return Tu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Jx(e, t) {
  const n = e.style || {},
    r = {};
  return Ym(r, n, e), Object.assign(r, Zx(e, t)), r;
}
function bx(e, t) {
  const n = {},
    r = Jx(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const eS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Es(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    eS.has(e)
  );
}
let Xm = (e) => !Es(e);
function tS(e) {
  e && (Xm = (t) => (t.startsWith("on") ? !Es(t) : e(t)));
}
try {
  tS(require("@emotion/is-prop-valid").default);
} catch {}
function nS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Xm(i) ||
        (n === !0 && Es(i)) ||
        (!t && !Es(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function rS(e, t, n, r) {
  const i = V.useMemo(() => {
    const s = Gm();
    return (
      ku(s, t, Cu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Ym(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function iS(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (xu(n) ? rS : bx)(r, s, o, n),
      u = nS(r, typeof n == "string", e),
      c = n !== V.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = V.useMemo(() => (oe(f) ? f.get() : f), [f]);
    return V.createElement(n, { ...c, children: d });
  };
}
function sS(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(xu(r) ? Xx : qx),
      preloadedFeatures: e,
      useRender: iS(i),
      createVisualElement: t,
      Component: r,
    };
    return _x(o);
  };
}
const Zl = { current: null },
  qm = { current: !1 };
function oS() {
  if (((qm.current = !0), !!wu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Zl.current = e.matches);
      e.addListener(t), t();
    } else Zl.current = !1;
}
function lS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (oe(i)) e.addValue(r, i);
    else if (oe(s)) e.addValue(r, be(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, be(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const bf = new WeakMap(),
  aS = [...Up, me, Bt],
  uS = (e) => aS.find(Bp(e)),
  ed = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class cS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = tu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = rt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), O.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Js(n)),
      (this.isVariantNode = zm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const g = f[d];
      a[d] !== void 0 && oe(g) && g.set(a[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      bf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      qm.current || oS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Zl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    bf.delete(this.current),
      this.projection && this.projection.unmount(),
      Xe(this.notifyUpdate),
      Xe(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = vn.has(t),
      i = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && O.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Zn) {
      const n = Zn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < ed.length; r++) {
      const i = ed[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = lS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = be(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Op(i) || _p(i))
          ? (i = parseFloat(i))
          : !uS(i) && Bt.test(n) && (i = Xp(t, n)),
        this.setBaseTarget(t, oe(i) ? i.get() : i)),
      oe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Ya(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !oe(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Zm extends cS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = qp);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function fS(e) {
  return window.getComputedStyle(e);
}
class dS extends Zm {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Bm);
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    } else {
      const r = fS(t),
        i = (Ip(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Tm(t, n);
  }
  build(t, n, r) {
    Tu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Su(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    oe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class hS extends Zm {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    }
    return (n = Um.has(n) ? n : gu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Hm(t, n, r);
  }
  build(t, n, r) {
    ku(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Wm(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Cu(t.tagName)), super.mount(t);
  }
}
const pS = (e, t) =>
    xu(e) ? new hS(t) : new dS(t, { allowProjection: e !== V.Fragment }),
  mS = sS({ ...iw, ...Ex, ...mx, ...Lx }, pS),
  N = qy(mS);
function Jm(e) {
  const t = bs(() => be(e)),
    { isStatic: n } = V.useContext(Xs);
  if (n) {
    const [, r] = V.useState(e);
    V.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function bm(e, t) {
  const n = Jm(t()),
    r = () => n.set(t());
  return (
    r(),
    Zs(() => {
      const i = () => O.preRender(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        s.forEach((o) => o()), Xe(r);
      };
    }),
    n
  );
}
const gS = (e) => e && typeof e == "object" && e.mix,
  vS = (e) => (gS(e) ? e.mix : void 0);
function yS(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    l = cu(i, s, { mixer: vS(s[0]), ...o });
  return t ? l(r) : l;
}
function wS(e) {
  (Vr.current = []), e();
  const t = bm(Vr.current, e);
  return (Vr.current = void 0), t;
}
function Jl(e, t, n, r) {
  if (typeof e == "function") return wS(e);
  const i = typeof t == "function" ? t : yS(t, n, r);
  return Array.isArray(e) ? td(e, i) : td([e], ([s]) => i(s));
}
function td(e, t) {
  const n = bs(() => []);
  return bm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function nd(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function xS(e, t = {}) {
  const { isStatic: n } = V.useContext(Xs),
    r = V.useRef(null),
    i = Jm(oe(e) ? nd(e.get()) : e),
    s = V.useRef(i.get()),
    o = V.useRef(() => {}),
    l = () => {
      const u = r.current;
      u && u.time === 0 && u.sample(ee.delta),
        a(),
        (r.current = T1({
          keyframes: [i.get(), s.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: o.current,
        }));
    },
    a = () => {
      r.current && r.current.stop();
    };
  return (
    V.useInsertionEffect(
      () =>
        i.attach(
          (u, c) =>
            n ? c(u) : ((s.current = u), (o.current = c), O.update(l), i.get()),
          a
        ),
      [JSON.stringify(t)]
    ),
    Zs(() => {
      if (oe(e)) return e.on("change", (u) => i.set(nd(u)));
    }, [i]),
    i
  );
}
function eg(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const Gi = new WeakMap();
let Pt;
function SS(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function PS({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Gi.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return SS(e, n);
        },
      });
    });
}
function TS(e) {
  e.forEach(PS);
}
function kS() {
  typeof ResizeObserver > "u" || (Pt = new ResizeObserver(TS));
}
function CS(e, t) {
  Pt || kS();
  const n = eg(e);
  return (
    n.forEach((r) => {
      let i = Gi.get(r);
      i || ((i = new Set()), Gi.set(r, i)),
        i.add(t),
        Pt == null || Pt.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Gi.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Pt == null || Pt.unobserve(r);
      });
    }
  );
}
const Qi = new Set();
let jr;
function ES() {
  (jr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Qi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", jr);
}
function LS(e) {
  return (
    Qi.add(e),
    jr || ES(),
    () => {
      Qi.delete(e), !Qi.size && jr && (jr = void 0);
    }
  );
}
function AS(e, t) {
  return typeof e == "function" ? LS(e) : CS(e, t);
}
const VS = 50,
  rd = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  MS = () => ({ time: 0, x: rd(), y: rd() }),
  RS = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function id(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = RS[t],
    l = i.current,
    a = n.time;
  (i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${s}`] - e[`client${s}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = pn(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > VS ? 0 : lu(i.current - l, u);
}
function jS(e, t, n) {
  id(e, "x", t, n), id(e, "y", t, n), (t.time = n);
}
function DS(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      (n.x += i.left - s.left), (n.y += i.top - s.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      (n.x += i), (n.y += s);
      let o = null,
        l = r.parentNode;
      for (; !o; ) l.tagName === "svg" && (o = l), (l = r.parentNode);
      r = o;
    } else break;
  return n;
}
const NS = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  bl = { start: 0, center: 0.5, end: 1 };
function sd(e, t, n = 0) {
  let r = 0;
  if ((e in bl && (e = bl[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const _S = [0, 0];
function OS(e, t, n, r) {
  let i = Array.isArray(e) ? e : _S,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, bl[e] ? e : "0"])),
    (s = sd(i[0], n, r)),
    (o = sd(i[1], t)),
    s - o
  );
}
const FS = { x: 0, y: 0 };
function IS(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function zS(e, t, n) {
  const { offset: r = NS.All } = n,
    { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    l = i !== e ? DS(i, e) : FS,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : IS(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let c = !t[s].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const g = OS(r[d], u[o], a[o], l[s]);
    !c && g !== t[s].interpolatorOffsets[d] && (c = !0), (t[s].offset[d] = g);
  }
  c &&
    ((t[s].interpolate = cu(t[s].offset, rm(r))),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = t[s].interpolate(t[s].current));
}
function BS(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function US(e, t, n, r = {}) {
  return {
    measure: () => BS(e, r.target, n),
    update: (i) => {
      jS(e, n, i), (r.offset || r.target) && zS(e, n, r);
    },
    notify: () => t(n),
  };
}
const dr = new WeakMap(),
  od = new WeakMap(),
  Uo = new WeakMap(),
  ld = (e) => (e === document.documentElement ? window : e);
function Eu(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Uo.get(t);
  r || ((r = new Set()), Uo.set(t, r));
  const i = MS(),
    s = US(t, e, i, n);
  if ((r.add(s), !dr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(ee.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        O.read(l, !1, !0), O.read(a, !1, !0), O.update(u, !1, !0);
      };
    dr.set(t, c);
    const f = ld(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && od.set(t, AS(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const o = dr.get(t);
  return (
    O.read(o, !1, !0),
    () => {
      var l;
      Xe(o);
      const a = Uo.get(t);
      if (!a || (a.delete(s), a.size)) return;
      const u = dr.get(t);
      dr.delete(t),
        u &&
          (ld(t).removeEventListener("scroll", u),
          (l = od.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function tg(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && e(o), (n = o);
  };
  return O.update(r, !0), () => Xe(r);
}
function WS({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  const r = { value: 0 },
    i = Eu(
      (s) => {
        r.value = s[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
const Wo = new Map();
function ng({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), Wo.has(t) || Wo.set(t, {});
  const r = Wo.get(t);
  return (
    r[n] ||
      (r[n] = lm()
        ? new ScrollTimeline({ source: t, axis: n })
        : WS({ source: t, axis: n })),
    r[n]
  );
}
function $S(e) {
  return e.length === 2;
}
function rg(e) {
  return e && (e.target || e.offset);
}
function HS(e, t) {
  return $S(e) || rg(t)
    ? Eu((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : tg(e, ng(t));
}
function KS(e, t) {
  if (rg(t))
    return (
      e.pause(),
      Eu((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    const n = ng(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        tg((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function GS(e, { axis: t = "y", ...n } = {}) {
  const r = { axis: t, ...n };
  return typeof e == "function" ? HS(e, r) : KS(e, r);
}
function ad(e, t) {
  c0(!!(!t || t.current));
}
const QS = () => ({
  scrollX: be(0),
  scrollY: be(0),
  scrollXProgress: be(0),
  scrollYProgress: be(0),
});
function Lu({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = bs(QS);
  return (
    (n ? Zs : V.useEffect)(
      () => (
        ad("target", t),
        ad("container", e),
        GS(
          (o, { x: l, y: a }) => {
            i.scrollX.set(l.current),
              i.scrollXProgress.set(l.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const YS = { some: 0, all: 1 };
function XS(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = eg(e),
    o = new WeakMap(),
    l = (u) => {
      u.forEach((c) => {
        const f = o.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const d = t(c);
            typeof d == "function" ? o.set(c.target, d) : a.unobserve(c.target);
          } else f && (f(c), o.delete(c.target));
      });
    },
    a = new IntersectionObserver(l, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : YS[i],
    });
  return s.forEach((u) => a.observe(u)), () => a.disconnect();
}
function qS(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [s, o] = V.useState(!1);
  return (
    V.useEffect(() => {
      if (!e.current || (i && s)) return;
      const l = () => (o(!0), i ? void 0 : () => o(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return XS(e.current, l, a);
    }, [t, e, n, i, r]),
    s
  );
}
const ZS = {
    open: { transition: { staggerChilden: 0.1 } },
    closed: { transition: { staggerChilden: 0.1, staggerDirection: -2 } },
  },
  JS = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } },
  bS = () => {
    const e = ["Homepage", "Services", "Portfolio", "Contact", "About"];
    return x.jsx(N.div, {
      className: "links",
      variants: ZS,
      children: e.map((t) =>
        x.jsx(
          N.a,
          {
            href: `#${t}`,
            variants: JS,
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.8 },
            children: t,
          },
          t
        )
      ),
    });
  },
  eP = ({ setOpen: e }) =>
    x.jsx("button", {
      onClick: () => e((t) => !t),
      children: x.jsxs("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        children: [
          x.jsx(N.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            },
          }),
          x.jsx(N.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            d: "M 2 9.423 L 20 9.423",
            variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          }),
          x.jsx(N.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            },
          }),
        ],
      }),
    }),
  tP = () => {
    const [e, t] = V.useState(!1),
      n = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: { type: "spring", stiffness: "20" },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
    return x.jsxs(N.div, {
      className: "sidebar",
      animate: e ? "open" : "closed",
      children: [
        x.jsx(N.div, { className: "bg", variants: n, children: x.jsx(bS, {}) }),
        x.jsx(eP, { setOpen: t }),
      ],
    });
  },
  nP = () =>
    x.jsxs("nav", {
      className: "navbar",
      children: [
        x.jsx(tP, {}),
        x.jsxs("div", {
          className: "wrapper",
          children: [
            x.jsx("span", { children: "Gm Logo" }),
            x.jsxs("div", {
              className: "social",
              children: [
                x.jsx("a", {
                  href: "#",
                  className: "social-logos",
                  children: x.jsx(Gy, {}),
                }),
                x.jsx("a", {
                  href: "#",
                  className: "social-logos",
                  children: x.jsx(Qy, {}),
                }),
                x.jsx("a", {
                  href: "#",
                  className: "social-logos",
                  children: x.jsx(Yy, {}),
                }),
                x.jsx("a", {
                  href: "#",
                  className: "social-logos",
                  children: x.jsx(Xy, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Xt = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: { duration: 2, repeat: 1 / 0 },
    },
  },
  rP = {
    initial: { x: 0 },
    animate: {
      x: "-220%",
      transition: {
        repeat: 1 / 0,
        repeatType: "mirror",
        duration: 20,
        delay: 1,
      },
    },
  },
  iP = () =>
    x.jsxs("div", {
      className: "hero",
      children: [
        x.jsx("div", {
          className: "wrapper",
          children: x.jsxs(N.div, {
            className: "textContainer",
            variants: Xt,
            initial: "initial",
            animate: "animate",
            children: [
              x.jsx(N.h2, { variants: Xt, children: "GAUTAM MANNA" }),
              x.jsx(N.h1, {
                variants: Xt,
                children: "Web developer and UI designer",
              }),
              x.jsxs(N.div, {
                variants: Xt,
                className: "buttons",
                children: [
                  x.jsx(N.button, {
                    variants: Xt,
                    children: "See Latest Works",
                  }),
                  x.jsx(N.button, { variants: Xt, children: "Contact Me" }),
                ],
              }),
              x.jsx(N.img, {
                variants: Xt,
                animate: "scrollButton",
                src: "../../public/scroll.png",
                alt: "",
              }),
            ],
          }),
        }),
        x.jsx(N.div, {
          variants: rP,
          initial: "initial",
          animate: "animate",
          className: "slidingTextContainer",
          children:
            "Front End Developer with Extensive Knowledge on Javascript and other JS framworks and Libraries",
        }),
        x.jsx("div", {
          className: "imageContainer",
          children: x.jsx("img", { src: "../../profile1.png", alt: "" }),
        }),
      ],
    }),
  ud = ({ type: e }) => {
    const t = V.useRef(),
      { scrollYProgress: n } = Lu({
        target: t,
        offset: ["start start", "end start"],
      }),
      r = Jl(n, [0, 1], ["0%", "500%"]),
      i = Jl(n, [0, 1], ["0%", "100%"]);
    return x.jsxs("div", {
      className: "parallax",
      ref: t,
      style: {
        background:
          e === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132,#505064)",
      },
      children: [
        x.jsx(N.h1, {
          style: { y: r },
          children: e === "services" ? "What We Do?" : "What We Did",
        }),
        x.jsx(N.div, { className: "mountains" }),
        x.jsx(N.div, {
          className: "planets",
          style: {
            y: i,
            backgroundImage: `url(${
              e === "services"
                ? "../../public/planets.png"
                : "../../public/sun.png"
            })`,
          },
        }),
        x.jsx(N.div, { style: { x: i }, className: "stars" }),
      ],
    });
  },
  $o = {
    initial: { x: -500, y: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildern: 0.1 },
    },
  },
  sP = () => {
    const e = V.useRef();
    return (
      qS(e, { margin: "-100px" }),
      x.jsxs(N.div, {
        className: "services",
        children: [
          x.jsxs(N.div, {
            className: "textContainer",
            variants: $o,
            children: [
              x.jsx("p", { children: "Whatever lines of Text" }),
              x.jsx("hr", {}),
            ],
          }),
          x.jsxs(N.div, {
            className: "titleContainer",
            variants: $o,
            children: [
              x.jsxs("div", {
                className: "title",
                children: [
                  x.jsx("img", { src: "../../people.webp", alt: "" }),
                  x.jsxs("h1", {
                    children: [
                      x.jsx(N.b, {
                        whileHover: { color: "Orange" },
                        children: "Unique",
                      }),
                      " Ideas",
                    ],
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "title",
                children: [
                  x.jsxs("h1", {
                    children: [
                      x.jsx(N.b, {
                        whileHover: { color: "Orange" },
                        children: "For Your",
                      }),
                      " Business",
                    ],
                  }),
                  x.jsx("button", { children: "WHAT WE DO?" }),
                ],
              }),
            ],
          }),
          x.jsxs(N.div, {
            className: "listContainer",
            variants: $o,
            children: [
              x.jsxs(N.div, {
                className: "box",
                whileHover: { backgroundColor: "lightgray", color: "black" },
                children: [
                  x.jsx("h2", { children: "Branding" }),
                  x.jsx("p", {
                    children:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
                  }),
                  x.jsx("button", { children: "Go" }),
                ],
              }),
              x.jsxs(N.div, {
                className: "box",
                children: [
                  x.jsx("h2", { children: "Branding" }),
                  x.jsx("p", {
                    children:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
                  }),
                  x.jsx("button", { children: "Go" }),
                ],
              }),
              x.jsxs(N.div, {
                className: "box",
                children: [
                  x.jsx("h2", { children: "Branding" }),
                  x.jsx("p", {
                    children:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
                  }),
                  x.jsx("button", { children: "Go" }),
                ],
              }),
              x.jsxs(N.div, {
                className: "box",
                children: [
                  x.jsx("h2", { children: "Branding" }),
                  x.jsx("p", {
                    children:
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
                  }),
                  x.jsx("button", { children: "Go" }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  oP = [
    {
      id: 1,
      title: "React Commerce",
      img: "https://images.pexels.com/photos/6214461/pexels-photo-6214461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
    },
    {
      id: 2,
      title: "Sass Design",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
    },
    {
      id: 3,
      title: "React Portfolio",
      img: "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
    },
    {
      id: 4,
      title: "React Business Website",
      img: "https://images.pexels.com/photos/7172828/pexels-photo-7172828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi itaque rerum voluptate fugit vero debitis consequatur fugiat sunt iure ipsa asperiores maiores, animi minus dicta expedita alias. Asperiores, maxime modi.",
    },
  ],
  lP = ({ item: e }) => {
    const t = V.useRef(),
      { scrollYProgress: n } = Lu({ target: t }),
      r = Jl(n, [0, 1], [-300, 300]);
    return x.jsx("section", {
      children: x.jsx("div", {
        className: "container",
        children: x.jsxs("div", {
          className: "wrapper",
          children: [
            x.jsx("div", {
              className: "imageContainer",
              ref: t,
              children: x.jsx("img", { src: e.img, alt: "" }),
            }),
            x.jsxs(N.div, {
              className: "textContainer",
              style: { y: r },
              children: [
                x.jsx("h2", { children: e.title }),
                x.jsx("p", { children: e.desc }),
                x.jsx("button", { children: "See Demo" }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  aP = () => {
    const e = V.useRef(),
      { scrollYProgress: t } = Lu({
        target: e,
        offset: ["end end", "start start"],
      }),
      n = xS(t, { stiffness: 100, damping: 30 });
    return x.jsxs("div", {
      className: "portfolio",
      ref: e,
      children: [
        x.jsxs("div", {
          className: "progress",
          children: [
            x.jsx("h1", { children: "Featured Works" }),
            x.jsx(N.div, { style: { scaleX: n }, className: "progressBar" }),
          ],
        }),
        oP.map((r) => x.jsx(lP, { item: r }, r.id)),
      ],
    });
  };
class li {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const uP = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  ue = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: uP(),
  },
  Au = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  cP = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = Au(e);
    (ue.publicKey = n.publicKey),
      (ue.blockHeadless = n.blockHeadless),
      (ue.storageProvider = n.storageProvider),
      (ue.blockList = n.blockList),
      (ue.limitRate = n.limitRate),
      (ue.origin = n.origin || t);
  },
  ig = async (e, t, n = {}) => {
    const r = await fetch(ue.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      i = await r.text(),
      s = new li(r.status, i);
    if (r.ok) return s;
    throw s;
  },
  sg = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  fP = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  og = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  lg = () => new li(451, "Unavailable For Headless Browser"),
  dP = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  hP = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  pP = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  ag = (e, t) => {
    if (hP(e)) return !1;
    dP(e.list, e.watchVariable);
    const n = pP(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  ug = () => new li(403, "Forbidden"),
  mP = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  gP = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  cg = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    mP(t.throttle, t.id);
    const r = t.id || e;
    return (await gP(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  fg = () => new li(429, "Too Many Requests"),
  vP = async (e, t, n, r) => {
    const i = Au(r),
      s = i.publicKey || ue.publicKey,
      o = i.blockHeadless || ue.blockHeadless,
      l = i.storageProvider || ue.storageProvider,
      a = { ...ue.blockList, ...i.blockList },
      u = { ...ue.limitRate, ...i.limitRate };
    return o && og(navigator)
      ? Promise.reject(lg())
      : (sg(s, e, t),
        fP(n),
        n && ag(a, n)
          ? Promise.reject(ug())
          : (await cg(location.pathname, u, l))
          ? Promise.reject(fg())
          : ig(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: s,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  yP = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  wP = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  xP = async (e, t, n, r) => {
    const i = Au(r),
      s = i.publicKey || ue.publicKey,
      o = i.blockHeadless || ue.blockHeadless,
      l = ue.storageProvider || i.storageProvider,
      a = { ...ue.blockList, ...i.blockList },
      u = { ...ue.limitRate, ...i.limitRate };
    if (o && og(navigator)) return Promise.reject(lg());
    const c = wP(n);
    sg(s, e, t), yP(c);
    const f = new FormData(c);
    return ag(a, f)
      ? Promise.reject(ug())
      : (await cg(location.pathname, u, l))
      ? Promise.reject(fg())
      : (f.append("lib_version", "4.4.1"),
        f.append("service_id", e),
        f.append("template_id", t),
        f.append("user_id", s),
        ig("/api/v1.0/email/send-form", f));
  },
  SP = { init: cP, send: vP, sendForm: xP, EmailJSResponseStatus: li },
  wn = {
    initial: { y: 500, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  },
  PP = () => {
    const e = V.useRef(),
      [t, n] = V.useState(!1),
      [r, i] = V.useState(null),
      s = (o) => {
        o.preventDefault(),
          SP.sendForm("service_4ylvfqj", "template_q79kdkm", e.current, {
            publicKey: "TiZIKNQRIOroB31KP",
          }).then(
            () => {
              i(!0);
            },
            (l) => {
              n(!0);
            }
          );
      };
    return x.jsx("div", {
      className: "background-wrapper",
      children: x.jsxs(N.div, {
        className: "contact",
        variants: wn,
        initial: "initial",
        whileInView: "animate",
        children: [
          x.jsxs(N.div, {
            className: "textContainer",
            variants: wn,
            children: [
              x.jsx(N.h1, { variants: wn, children: "Let's Work Together" }),
              x.jsxs(N.div, {
                className: "item",
                variants: wn,
                children: [
                  x.jsx("h2", { children: "Mail" }),
                  x.jsx("span", { children: "hotrideraz@gmail.com" }),
                ],
              }),
              x.jsxs(N.div, {
                className: "item",
                variants: wn,
                children: [
                  x.jsx("h2", { children: "Address" }),
                  x.jsx("span", { children: "India, WB" }),
                ],
              }),
              x.jsxs(N.div, {
                className: "item",
                variants: wn,
                children: [
                  x.jsx("h2", { children: "Phone" }),
                  x.jsx("span", { children: "+91-9163758587" }),
                ],
              }),
            ],
          }),
          x.jsx(N.div, {
            className: "formContainer",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { delay: 1, duration: 1, staggerChildren: 0.1 },
            children: x.jsxs(N.form, {
              action: "",
              ref: e,
              onSubmit: s,
              children: [
                x.jsx("input", {
                  type: "text",
                  required: !0,
                  placeholder: "Name",
                  name: "from_name",
                }),
                x.jsx("input", {
                  type: "email",
                  required: !0,
                  placeholder: "Email",
                  name: "user_email",
                }),
                x.jsx("textarea", {
                  rows: 8,
                  placeholder: "Message",
                  name: "message",
                }),
                x.jsx("button", { children: "Submit" }),
                t && "Error",
                r && "Success",
              ],
            }),
          }),
        ],
      }),
    });
  },
  TP = () =>
    x.jsxs("div", {
      children: [
        x.jsxs("section", {
          id: "HomePage",
          children: [x.jsx(nP, {}), x.jsx(iP, {})],
        }),
        x.jsx("section", {
          id: "Services",
          children: x.jsx(ud, { type: "services" }),
        }),
        x.jsx("section", { children: x.jsx(sP, {}) }),
        x.jsx("section", {
          id: "Portfolio",
          children: x.jsx(ud, { type: "portfolio" }),
        }),
        x.jsx(aP, {}),
        x.jsx("section", { id: "Contact", children: x.jsx(PP, {}) }),
      ],
    });
Pp(document.getElementById("root")).render(
  x.jsx(V.StrictMode, { children: x.jsx(TP, {}) })
);
