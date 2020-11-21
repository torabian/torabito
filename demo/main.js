(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ipc-helpers/definitions.ts":
/*!************************************!*\
  !*** ./ipc-helpers/definitions.ts ***!
  \************************************/
/*! exports provided: Device, DeviceRichInformation, DeviceInsightInformation, DeviceMessage, NetworkConnection, MqttPacket, IncomingMessageFromDevice, DeviceMessageHistoryRow, ResponseErrorItem, ResponseError, ResponseData, Response, successResponse, IotEventTypes, HostMonitoringMessage, ElectronBootstrapConfig, DeviceLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRichInformation", function() { return DeviceRichInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInsightInformation", function() { return DeviceInsightInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMessage", function() { return DeviceMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkConnection", function() { return NetworkConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MqttPacket", function() { return MqttPacket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingMessageFromDevice", function() { return IncomingMessageFromDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMessageHistoryRow", function() { return DeviceMessageHistoryRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseErrorItem", function() { return ResponseErrorItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseError", function() { return ResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseData", function() { return ResponseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successResponse", function() { return successResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotEventTypes", function() { return IotEventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostMonitoringMessage", function() { return HostMonitoringMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronBootstrapConfig", function() { return ElectronBootstrapConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceLocation", function() { return DeviceLocation; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// Represents the message which is coming from device
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.set = function (data) {
        Object.assign(this, data);
        return this;
    };
    return Device;
}());

// When data is populated into a device and we have enough information
var DeviceRichInformation = /** @class */ (function (_super) {
    __extends(DeviceRichInformation, _super);
    function DeviceRichInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceRichInformation.prototype.from = function (data) {
        if (data.dataHistory && data.dataHistory.map) {
            data.dataHistory = data.dataHistory
                .filter(function (item) {
                if (Object.values(item.data).filter(function (t) { return t !== null; }).length === 0) {
                    return false;
                }
                return true;
            })
                .map(function (item) {
                return __assign(__assign({}, item), { message_original_creation: new Date(item.message_original_creation) });
            });
            data.dataHistory = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(data.dataHistory, 'message_original_creation');
        }
        Object.assign(this, data);
        return this;
    };
    return DeviceRichInformation;
}(Device));

var DeviceInsightInformation = /** @class */ (function () {
    function DeviceInsightInformation() {
    }
    return DeviceInsightInformation;
}());

var DeviceMessage = /** @class */ (function () {
    function DeviceMessage() {
    }
    return DeviceMessage;
}());

var NetworkConnection = /** @class */ (function () {
    function NetworkConnection() {
    }
    return NetworkConnection;
}());

var MqttPacket = /** @class */ (function () {
    function MqttPacket() {
    }
    return MqttPacket;
}());

// When a data comes from device
var IncomingMessageFromDevice = /** @class */ (function () {
    function IncomingMessageFromDevice() {
    }
    return IncomingMessageFromDevice;
}());

var DeviceMessageHistoryRow = /** @class */ (function () {
    function DeviceMessageHistoryRow() {
    }
    return DeviceMessageHistoryRow;
}());

var ResponseErrorItem = /** @class */ (function () {
    function ResponseErrorItem() {
    }
    return ResponseErrorItem;
}());

var ResponseError = /** @class */ (function () {
    function ResponseError() {
    }
    return ResponseError;
}());

var ResponseData = /** @class */ (function () {
    function ResponseData() {
    }
    return ResponseData;
}());

var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());

function successResponse(data) {
    var res = new Response();
    if (data && data.push) {
        res.data = { items: data };
    }
    else {
        res.data = __assign(__assign({}, data), { fields: Object.keys('data') });
    }
    return res;
}
var IotEventTypes;
(function (IotEventTypes) {
    IotEventTypes["IncomingMessage"] = "IncomingMessage";
    IotEventTypes["HostNetworkInformationChange"] = "HostNetworkInformationChange";
    IotEventTypes["BridgeConnect"] = "BridgeConnect";
    IotEventTypes["RequestInstallServer"] = "RequestInstallServer";
    IotEventTypes["RequestUninstallServer"] = "RequestUninstallServer";
})(IotEventTypes || (IotEventTypes = {}));
var HostMonitoringMessage = /** @class */ (function () {
    function HostMonitoringMessage() {
    }
    return HostMonitoringMessage;
}());

var ElectronBootstrapConfig = /** @class */ (function () {
    function ElectronBootstrapConfig() {
    }
    return ElectronBootstrapConfig;
}());

var DeviceLocation = /** @class */ (function () {
    function DeviceLocation() {
    }
    return DeviceLocation;
}());



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/active-streams/active-streams.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/active-streams/active-streams.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\">\n  <app-tabs>\n    <app-tab-item>\n      <app-tab-label>{{ translations.activeStreams.title }}</app-tab-label>\n      <app-tab-body>\n        <h1>{{ translations.activeStreams.activeDataStreams }}</h1>\n        <h2>{{ translations.activeStreams.description }}</h2>\n\n        <div class=\"message-box\" *ngIf=\"activeStreams.length == 0\">\n          <i class=\"icon-warningreport_problem\"></i>\n          <p>{{ translations.general.noData }}</p>\n        </div>\n\n        <table *ngIf=\"activeStreams.length > 0\" class=\"data-table-grid\">\n          <thead>\n            <th>#</th>\n            <th>{{ translations.activeStreams.columns.type }}</th>\n            <th>{{ translations.activeStreams.columns.status }}</th>\n            <th>{{ translations.activeStreams.columns.lastMessage }}</th>\n            <th>{{ translations.activeStreams.columns.lastActivity }}</th>\n            <th>{{ translations.activeStreams.columns.port }}</th>\n            <th>{{ translations.activeStreams.columns.path }}</th>\n            <th>{{ translations.activeStreams.columns.action }}</th>\n          </thead>\n\n          <tr *ngFor=\"let stream of activeStreams; let i = index\">\n            <td>{{ i + 1 }}/{{ stream.id }}</td>\n            <td>{{ stream.type }}</td>\n            <td>{{ stream.status }}</td>\n            <td>{{ stream.lastMessageDate }}</td>\n            <td>{{ stream.lastStatusChangeDate }}</td>\n            <td>\n              {{ stream.params?.port || '-' }}\n            </td>\n            <td>\n              {{ stream.params?.path || '-' }}\n            </td>\n            <th>\n              <app-button\n                type=\"danger\"\n                (click)=\"killProcess(stream.id)\"\n                icon=\"icon-open\"\n                [value]=\"translations.general.kill\"\n              ></app-button>\n            </th>\n          </tr>\n        </table>\n      </app-tab-body>\n    </app-tab-item>\n\n    <app-tab-item>\n      <app-tab-label>{{ translations.serialPorts.title }}</app-tab-label>\n      <app-tab-body>\n        <h1>{{ translations.serialPorts.activeSerialPorts }}</h1>\n        <h2>{{ translations.serialPorts.description }}</h2>\n        <div class=\"message-box\" *ngIf=\"serialPorts && serialPorts.length == 0\">\n          <i class=\"icon-warningreport_problem\"></i>\n          <p>{{ translations.general.noData }}</p>\n        </div>\n        <table *ngIf=\"serialPorts.length > 0\" class=\"data-table-grid\">\n          <thead>\n            <th>#</th>\n            <th>{{ translations.serialPorts.columns.path }}</th>\n            <th>{{ translations.serialPorts.columns.manufacturer }}</th>\n            <th>{{ translations.serialPorts.columns.productId }}</th>\n            <th>{{ translations.serialPorts.columns.status }}</th>\n            <th>{{ translations.serialPorts.columns.actions }}</th>\n          </thead>\n          <tr *ngFor=\"let port of serialPorts; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ port.path }}</td>\n            <td>{{ port.manufacturer || '-' }}</td>\n            <td>{{ port.productId || '-' }}</td>\n            <td>{{ port.status }}</td>\n            <td>\n              <app-button\n                type=\"success\"\n                (click)=\"navigatorService.openSerialPort(port.path)\"\n                icon=\"icon-open\"\n                [value]=\"translations.general.observe\"\n              ></app-button>\n            </td>\n          </tr>\n        </table>\n      </app-tab-body>\n    </app-tab-item>\n\n    <app-tab-item>\n      <app-tab-label>{{ translations.activePorts.title }}</app-tab-label>\n      <app-tab-body>\n        <h1>{{ translations.activePorts.listeners }}</h1>\n        <h2>{{ translations.activePorts.description }}</h2>\n        <div class=\"message-box\" *ngIf=\"activePorts && activePorts.length == 0\">\n          <i class=\"icon-warningreport_problem\"></i>\n          <p>{{ translations.general.noData }}</p>\n        </div>\n        <table *ngIf=\"activePorts.length > 0\" class=\"data-table-grid\">\n          <thead>\n            <th>#</th>\n            <th>{{ translations.activePorts.columns.path }}</th>\n            <th>{{ translations.activePorts.columns.manufacturer }}</th>\n            <th>{{ translations.activePorts.columns.productId }} ID</th>\n            <th>{{ translations.activePorts.columns.status }}</th>\n            <th>{{ translations.activePorts.columns.actions }}</th>\n          </thead>\n          <tr *ngFor=\"let port of activePorts; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ port.path }}</td>\n            <td>{{ port.manufacturer || '-' }}</td>\n            <td>{{ port.productId || '-' }}</td>\n            <td>{{ port.status }}</td>\n            <td>\n              <app-button\n                type=\"danger\"\n                (click)=\"deleteActivePort(port.id)\"\n                icon=\"icon-trash\"\n                value=\"Delete\"\n              ></app-button>\n            </td>\n          </tr>\n        </table>\n      </app-tab-body>\n    </app-tab-item>\n\n    <app-tab-item>\n      <app-tab-label>{{ translations.serverStatus.title }}</app-tab-label>\n      <app-tab-body>\n        <h1>{{ translations.serverStatus.generalInformation }}</h1>\n        <h2>{{ translations.serverStatus.description }}</h2>\n        <div class=\"message-box\" *ngIf=\"!serverInformation\">\n          <i class=\"icon-warningreport_problem\"></i>\n          <p>{{ translations.general.noData }}</p>\n        </div>\n\n        <ngx-json-viewer\n          *ngIf=\"serverInformation\"\n          [json]=\"serverInformation\"\n          [expanded]=\"true\"\n        ></ngx-json-viewer>\n      </app-tab-body>\n    </app-tab-item>\n  </app-tabs>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/am-chart/am-chart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/am-chart/am-chart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"divId\" style=\"width: 100%; height: 275px\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template><ng-content></ng-content></ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template><ng-content></ng-content></ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tabs/main-tabs.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tabs/main-tabs.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-tab\">\n  <div\n    class=\"tabs-header\"\n    [perfectScrollbar]=\"config\"\n    [class.hovered]=\"isHover\"\n    [class.fullWidth]=\"fullWidth\"\n  >\n    <perfect-scrollbar\n      class=\"scroll-container\"\n      fxFlex=\"auto\"\n      style=\"display: flex\"\n      [config]=\"config\"\n      [scrollIndicators]=\"true\"\n    >\n      <div class=\"tab-label-wrapper\">\n        <div\n          class=\"tab-label\"\n          appCursorGradient\n          (click)=\"selectTabService(item, $event)\"\n          [class.active]=\"activeTab === item\"\n          *ngFor=\"let item of tabItems$ | async; trackBy: trackBy\"\n          #tab\n        >\n          <span *ngIf=\"item.labelComponent\">\n            <span *ngTemplateOutlet=\"item.labelComponent.labelContent\"> </span>\n          </span>\n\n          <span *ngIf=\"!item.labelComponent\">\n            {{ item.label }}\n          </span>\n          <i\n            *ngIf=\"!(item.tab.url === 'welcome')\"\n            [class]=\"'icon-clearclose cb-' + item.tab.type || 'primary'\"\n            (click)=\"closeTab(item, $event)\"\n          ></i>\n        </div>\n      </div>\n    </perfect-scrollbar>\n  </div>\n\n  <div class=\"tabs-body\">\n    <perfect-scrollbar\n      class=\"scroll-container main-tab-body-scroll-container\"\n      [scrollIndicators]=\"false\"\n      [config]=\"config\"\n    >\n      <div class=\"main-tab-body-container\">\n        <ng-container *ngIf=\"activeTab && activeTab.bodyComponent\">\n          <ng-container *ngTemplateOutlet=\"activeTab.bodyComponent.bodyContent\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </perfect-scrollbar>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/tab/tab.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/tab/tab.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-tabs type=\"main\" *ngIf=\"tabItems && tabItems.length\">\n  <app-main-tab-item *ngFor=\"let tab of tabItems; trackBy: trackBy\" [tab]=\"tab\">\n    <app-main-tab-label>{{ tab.title }}</app-main-tab-label>\n    <app-main-tab-body>\n      <div #content></div>\n    </app-main-tab-body>\n  </app-main-tab-item>\n</app-main-tabs>\n<app-welcome-tab *ngIf=\"!(tabItems && tabItems.length)\"></app-welcome-tab>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/blockly/blockly.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/blockly/blockly.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-blockly [config]=\"config\"></ngx-blockly>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/button/button.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/button/button.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  [class]=\"'btn btn-' + type\"\n  [class.circle]=\"circle\"\n  [class.disabled]=\"disabled\"\n  [class.large]=\"isLarge\"\n  [class.loading]=\"loading\"\n  [disabled]=\"disabled\"\n>\n  <i *ngIf=\"icon\" [class]=\"'font-icon ' + icon\"></i>\n  <span *ngIf=\"value\">{{ value }}</span>\n</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/card/card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/card/card.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div *ngIf=\"title\" class=\"card-header\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"description\" class=\"card-description\">{{ description }}</div>\n  <div class=\"card-body\" [class.nopadding]=\"noPadding\">\n    <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/connection-status/connection-status.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/connection-status/connection-status.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"connection-status-wrapper d-flex align-center\"\n  (click)=\"navigatorService.openActiveStreamsTab()\"\n>\n  <app-button type=\"default\" [icon]=\"wifiIcon\" circle=\"true\"></app-button>\n  <span [@showHide]=\"animationState === 'enter' ? 'show' : 'hide'\">{{\n    content\n  }}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-preview/csv-import-preview.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-preview/csv-import-preview.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card title=\"Data Preview\" noPadding=\"true\">\n  <cdk-virtual-scroll-viewport\n    #scrollViewpor\n    style=\"height: 100%\"\n    itemSize=\"25\"\n  >\n    <table class=\"sticky-table data-preview-table\">\n      <thead>\n        <tr>\n          <th [style.top]=\"inverseOfTranslation\" class=\"rownum-header\">#</th>\n          <ng-container *ngFor=\"let fieldName of fieldNames; let i = index\">\n            <th\n              [style.top]=\"inverseOfTranslation\"\n              [class.creationDate]=\"\n                include[i] && dataTypes[i] == 'creationdate'\n              \"\n            >\n              {{\n                include[i] && dataTypes[i] === 'creationdate'\n                  ? 'Creation Date'\n                  : fieldName\n              }}\n            </th>\n          </ng-container>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngIf=\"contentPreview\">\n          <ng-container\n            *cdkVirtualFor=\"let row of contentPreview; let j = index\"\n          >\n            <tr *ngIf=\"j > 0\">\n              <td class=\"rownum\">\n                {{ j }}\n              </td>\n              <ng-container *ngFor=\"let field of row; let i = index\">\n                <td\n                  [class.skipped]=\"skipRows >= j || !include[i]\"\n                  [class.proccessed]=\"linesProcessed >= j\"\n                  [class.creationDate]=\"\n                    include[i] && dataTypes[i] == 'creationdate'\n                  \"\n                >\n                  {{ field }}\n                </td>\n              </ng-container>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </tbody>\n    </table>\n  </cdk-virtual-scroll-viewport>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"upload-box-info\">\n  <app-card>\n    <div *ngIf=\"file && !loading\" class=\"selected-file-preview\">\n      <i class=\"icon-insert_drive_file\"></i>\n      <div class=\"file-info\">\n        <div><b>File Name:</b> {{ file.name }}</div>\n        <div><b>File Size:</b> {{ fileSize }}</div>\n        <div><b>Total Rows:</b> {{ rowsCount }}</div>\n      </div>\n      <div class=\"remove-button-wrapper\">\n        <app-button\n          type=\"danger-light\"\n          (click)=\"removeSelectedFile()\"\n          icon=\"icon-delete\"\n          value=\"Remove\"\n        ></app-button>\n      </div>\n    </div>\n  </app-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import/csv-import.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import/csv-import.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"import-csv-wrapper\">\n  <div *ngIf=\"!contentPreview\" class=\"upload-box\">\n    <app-file-upload\n      *ngIf=\"!file\"\n      (upload)=\"fileChanged($event)\"\n    ></app-file-upload>\n    <app-spinner text=\"Loading...\" *ngIf=\"loading\"></app-spinner>\n  </div>\n\n  <ng-container *ngIf=\"contentPreview\">\n    <div class=\"data-config\">\n      <app-csv-import-uploadbox\n        [loading]=\"loading\"\n        [fileSize]=\"fileSize\"\n        (removeFile)=\"removeSelectedFile()\"\n        [file]=\"file\"\n        [rowsCount]=\"rowsCount\"\n      ></app-csv-import-uploadbox>\n\n      <div class=\"upload-config\">\n        <app-card noPadding=\"true\">\n          <app-tabs fullWidth=\"true\" [activeTabIndex]=\"activeTabsIndex\">\n            <app-tab-item>\n              <app-tab-label>General</app-tab-label>\n              <app-tab-body>\n                <app-form-text\n                  [(ngModel)]=\"skipRows\"\n                  type=\"number\"\n                  field=\"skipRows\"\n                  id=\"skip-row-input\"\n                  autofocus=\"true\"\n                  label=\"SkipRows\"\n                  placeholder=\"Skip Rows\"\n                ></app-form-text>\n                <app-form-text\n                  [(ngModel)]=\"imei\"\n                  field=\"imei\"\n                  id=\"imei-input\"\n                  label=\"IMEI\"\n                  placeholder=\"Device Token\"\n                ></app-form-text>\n                <app-form-text\n                  [(ngModel)]=\"name\"\n                  field=\"name\"\n                  id=\"name-input\"\n                  label=\"Name\"\n                  placeholder=\"Collection Name\"\n                ></app-form-text>\n              </app-tab-body>\n            </app-tab-item>\n\n            <app-tab-item>\n              <app-tab-label>Fields Configuration</app-tab-label>\n              <app-tab-body>\n                <table class=\"fields-configuration\">\n                  <tr>\n                    <td>\n                      <input\n                        (change)=\"toggleAllIncludes($event)\"\n                        checked\n                        type=\"checkbox\"\n                      />\n                    </td>\n                    <td class=\"toggle-checkbox\" colspan=\"2\">\n                      Toggle checkboxes\n                    </td>\n                  </tr>\n                  <ng-container *ngFor=\"let field of dataTypes; let i = index\">\n                    <tr>\n                      <td>\n                        <input [(ngModel)]=\"include[i]\" type=\"checkbox\" />\n                      </td>\n                      <td>\n                        <input\n                          [disabled]=\"\n                            include[i] === false || field == 'creationdate'\n                          \"\n                          [(ngModel)]=\"fieldNames[i]\"\n                          type=\"text\"\n                          [class.danger]=\"\n                            include[i] && fieldNames[i].length === 0\n                          \"\n                          [value]=\"\n                            include[i] && field == 'creationdate'\n                              ? 'Creation Date'\n                              : contentPreview[0][i]\n                          \"\n                        />\n                      </td>\n                      <td>\n                        <select\n                          [value]=\"getDataType(i)\"\n                          (change)=\"setDataType(i, $event)\"\n                          [disabled]=\"include[i] === false\"\n                        >\n                          <option\n                            *ngFor=\"\n                              let item of [\n                                'creationdate',\n                                'string',\n                                'number',\n                                'datetime'\n                              ]\n                            \"\n                            [selected]=\"field === item\"\n                            [value]=\"item\"\n                          >\n                            {{ item }}\n                          </option>\n                        </select>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </table>\n              </app-tab-body>\n            </app-tab-item>\n          </app-tabs>\n        </app-card>\n      </div>\n\n      <div class=\"action-button-wrapper\">\n        <app-button\n          type=\"primary\"\n          (click)=\"beginImport()\"\n          [isLarge]=\"true\"\n          [loading]=\"isImporting\"\n          [disabled]=\"isImporting\"\n          [icon]=\"isImporting ? undefined : 'icon-play_arrow'\"\n          [value]=\"isImporting ? 'Executing Data...' : 'Execute Data'\"\n        ></app-button>\n      </div>\n    </div>\n\n    <div class=\"data-preview\">\n      <app-csv-import-preview\n        [fieldNames]=\"fieldNames\"\n        [include]=\"include\"\n        [dataTypes]=\"dataTypes\"\n        [skipRows]=\"skipRows\"\n        [contentPreview]=\"contentPreview\"\n        [contentTypeGuess]=\"contentTypeGuess\"\n        [isImporting]=\"isImporting\"\n        [jobId]=\"jobId\"\n        [linesProcessed]=\"linesProcessed\"\n      ></app-csv-import-preview>\n    </div>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dashboard/dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-tab></app-main-tab>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/database-configuration/database-configuration.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/database-configuration/database-configuration.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-wrapper\" [formGroup]=\"form\">\n  <app-form-select\n    formControlName=\"vendor\"\n    field=\"vendor\"\n    label=\"vendor\"\n    [res]=\"res\"\n    placeholder=\"Vendor (mysql/sqlite)\"\n    [items]=\"AvailableVendors\"\n  ></app-form-select>\n\n  <ng-container *ngIf=\"form.value.vendor === 'sqlite'\">\n    <app-form-text\n      formControlName=\"database\"\n      type=\"text\"\n      field=\"database\"\n      [res]=\"res\"\n      label=\"database\"\n      placeholder=\"database location on host\"\n    ></app-form-text>\n  </ng-container>\n\n  <ng-container *ngIf=\"form.value.vendor === 'mysql'\">\n    <app-form-text\n      formControlName=\"username\"\n      type=\"text\"\n      field=\"username\"\n      [res]=\"res\"\n      label=\"username\"\n      placeholder=\"Username (aka root)\"\n    ></app-form-text>\n\n    <app-form-text\n      formControlName=\"password\"\n      type=\"password\"\n      field=\"password\"\n      [res]=\"res\"\n      label=\"password\"\n      placeholder=\"Password (aka root)\"\n    ></app-form-text>\n    <app-form-text\n      formControlName=\"database\"\n      type=\"text\"\n      field=\"database\"\n      [res]=\"res\"\n      label=\"database\"\n      placeholder=\"database (database)\"\n    ></app-form-text>\n  </ng-container>\n\n  <div class=\"form-button-wrapper\">\n    <app-button\n      type=\"primary\"\n      (click)=\"submit()\"\n      icon=\"icon-autorenew\"\n      value=\"Reconnect database\"\n    ></app-button>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dataflow/dataflow.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dataflow/dataflow.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card title=\"Realtime message (instant from device)\">\n  <ngx-json-viewer\n    *ngIf=\"realtimeMessage\"\n    [json]=\"realtimeMessage\"\n    [expanded]=\"true\"\n  ></ngx-json-viewer>\n\n  <span *ngIf=\"!realtimeMessage\">\n    There are no data ever coming from any devices to be shown.\n  </span>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-single/device-single.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-single/device-single.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\" title=\"Device edit\" [description]=\"descriptionLabel\">\n  <form class=\"form-wrapper\" [formGroup]=\"form\">\n    <app-form-text\n      formControlName=\"name\"\n      type=\"text\"\n      field=\"name\"\n      [res]=\"res\"\n      label=\"name\"\n      placeholder=\"Device name\"\n    ></app-form-text>\n\n    <app-form-text\n      formControlName=\"imei\"\n      field=\"imei\"\n      label=\"Imei\"\n      [res]=\"res\"\n      placeholder=\"Device IMEI\"\n    ></app-form-text>\n\n    <app-form-select\n      formControlName=\"preset\"\n      field=\"preset\"\n      label=\"preset\"\n      [items]=\"devicePresets\"\n      [res]=\"res\"\n      placeholder=\"Preset\"\n    ></app-form-select>\n\n    <div class=\"form-button-wrapper\">\n      <app-button\n        type=\"primary\"\n        (click)=\"submit()\"\n        [value]=\"submitLabel\"\n      ></app-button>\n    </div>\n  </form>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-view/device-view.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-view/device-view.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  style=\"display: flex; flex: 1; flex-direction: column\"\n  *ngIf=\"$device; else loader\"\n>\n  <div style=\"flex: 1; display: flex\">\n    <div style=\"flex: 1; margin-right: 7.5px\">\n      <app-card title=\"Quick information\">\n        <div style=\"display: flex; justify-content: space-between\">\n          <span>\n            <strong>Device name:</strong>\n            {{ $device.name || '-' }}\n          </span>\n          <span>\n            <strong>Device IMEI:</strong>\n            {{ $device.imei || '-' }}\n          </span>\n        </div>\n\n        <div style=\"display: flex; justify-content: space-between\">\n          <span>\n            <strong>Total Messages:</strong>\n            {{ $device.dataInsights?.totalMessages || '0' }}\n          </span>\n          <span>\n            <strong>Total sub messages:</strong>\n            {{ $device.dataInsights?.totalSubMessages || '0' }}\n          </span>\n        </div>\n\n        <div\n          style=\"display: flex; justify-content: space-between\"\n          *ngIf=\"$device.firstMessage || $device.lastMessage\"\n        >\n          <span *ngIf=\"$device.firstMessage\">\n            <strong>First message date:</strong>\n            {{ $device.firstMessage?.message_original_creation }}\n          </span>\n          <span *ngIf=\"$device.lastMessage\">\n            <strong>Last message date:</strong>\n            {{ $device.lastMessage?.message_original_creation }}\n          </span>\n        </div>\n\n        <hr />\n        <button (click)=\"navigatorService.deviceEdit($device.id)\">\n          Click to edit information\n        </button>\n      </app-card>\n    </div>\n  </div>\n\n  <div\n    style=\"flex: 1; display: flex; margin-top: 15px\"\n    *ngIf=\"$device.firstMessage && $device.lastMessage\"\n  >\n    <div style=\"flex: 1; margin-right: 7.5px\">\n      <app-card title=\"Range\">\n        <app-form-date\n          [formControl]=\"date_range\"\n          field=\"date_range\"\n          [optional]=\"false\"\n          [autofocus]=\"true\"\n          [minDate]=\"minDate\"\n          [maxDate]=\"maxDate\"\n          [isInvalidDate]=\"isInvalidDate\"\n          id=\"date-start-name-input\"\n          placeholder=\"{{ 'Recent activity' }}\"\n        ></app-form-date>\n      </app-card>\n    </div>\n  </div>\n\n  <div\n    style=\"flex: 1; margin-top: 15px\"\n    *ngIf=\"$device.firstMessage && $device.lastMessage\"\n  >\n    <app-card title=\"Data overview\">\n      <app-heatmap\n        [deviceId]=\"$device.id\"\n        [beginYear]=\"beginYear\"\n        [endYear]=\"endYear\"\n      ></app-heatmap>\n    </app-card>\n  </div>\n\n  <div style=\"flex: 1; margin-top: 15px\">\n    <app-card title=\"History\">\n      <ngx-datatable\n        *ngIf=\"res && res.data\"\n        class=\"material\"\n        [rows]=\"historyView\"\n        [columnMode]=\"ColumnMode.force\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        rowHeight=\"auto\"\n        [externalPaging]=\"true\"\n        [count]=\"res.data.totalItems\"\n        [offset]=\"res.data.pageIndex\"\n        [limit]=\"res.data.itemsPerPage\"\n        (page)=\"setPage($event)\"\n      >\n        <ngx-datatable-column [name]=\"col\" *ngFor=\"let col of tableColumns\">\n          <ng-template\n            let-value=\"value\"\n            let-row=\"row\"\n            ngx-datatable-cell-template\n          >\n            {{ row.data[col] || '-' }}\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Creation Date\">\n          <ng-template\n            let-value=\"value\"\n            let-row=\"row\"\n            ngx-datatable-cell-template\n          >\n            {{ row.message_original_creation }}\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </app-card>\n  </div>\n</div>\n\n<ng-template #loader>\n  <app-spinner text=\"Loading...\"></app-spinner>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/devices/devices.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/devices/devices.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"flex: 1\">\n  <app-spinner text=\"Loading...\" *ngIf=\"loading\"></app-spinner>\n\n  <app-card title=\"Devices\">\n    <ng-container *ngIf=\"!loading && devices && devices.length === 0\">\n      You have no devices connected.\n    </ng-container>\n\n    <ngx-datatable\n      class=\"material\"\n      [rows]=\"devices\"\n      (activate)=\"onActivate($event)\"\n      [columns]=\"[\n        { name: 'id', prop: 'id' },\n        { name: 'name', prop: 'name' }\n      ]\"\n      [columnMode]=\"ColumnMode.force\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"50\"\n      rowHeight=\"auto\"\n      (activate)=\"select($event)\"\n      [externalPaging]=\"true\"\n      [count]=\"page.count\"\n      [offset]=\"page.offset\"\n      [limit]=\"page.limit\"\n      (page)=\"setPage($event)\"\n    >\n      <ngx-datatable-column name=\"Id\" [width]=\"300\">\n        <ng-template\n          let-value=\"value\"\n          let-row=\"row\"\n          ngx-datatable-cell-template\n        >\n          {{ row.id }}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name=\"Name\" [width]=\"300\">\n        <ng-template\n          let-row=\"row\"\n          let-value=\"value\"\n          ngx-datatable-cell-template\n        >\n          {{ row.name || 'Unnamed device' }}\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n  </app-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/file-upload/file-upload.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/file-upload/file-upload.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"uploader-container\"\n  (dragenter)=\"eventHandler($event)\"\n  (dragover)=\"eventHandler($event)\"\n  (dragleave)=\"eventHandler($event)\"\n  (drop)=\"setToFileUploader($event)\"\n>\n  <div *ngIf=\"false && windowUploader\" class=\"uploader-window\">\n    <h1>Drop your CSV file here</h1>\n  </div>\n\n  <div class=\"uploader-zone\">\n    <i class=\"icon-file_upload\"></i>\n    <p>Drop your CSV filess here</p>\n    <span>or</span>\n    <div class=\"upload-button\">\n      <label for=\"file-upload\" class=\"btn btn-primary\">\n        <span>Browse</span>\n      </label>\n      <input #inputFile id=\"file-upload\" type=\"file\" (change)=\"uploader()\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/day-picker/day-picker.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/day-picker/day-picker.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  *ngIf=\"params && params.selectMonth\"\n  class=\"months-container {{ params && params.class ? params.class : '' }}\"\n>\n  <ng-container *ngFor=\"let month of months; let index = i\">\n    <button\n      #monthButton\n      (dblclick)=\"monthButtonDBLClick(month.id)\"\n      (click)=\"monthButtonClick(month.id, $event)\"\n      class=\"month-item month-number-{{ month }}\"\n      [class.active]=\"month.id === form.value.month\"\n    >\n      <span class=\"long-name\">\n        {{ month.label }}\n      </span>\n      <span class=\"short-name\">\n        {{ month.shortLabel }}\n      </span>\n    </button>\n  </ng-container>\n</div>\n\n<div\n  class=\"days-container {{ params && params.class ? params.class : '' }}\"\n  *ngIf=\"params && params.selectDay !== false\"\n>\n  <ng-container *ngFor=\"let day of days; let index = i\">\n    <button\n      #dayButton\n      (dblclick)=\"dayButtonDBLClick(day)\"\n      (click)=\"dayButtonClick(day, $event)\"\n      class=\"day-item day-number-{{ day }}\"\n      [class.active]=\"day === form.value.day\"\n    >\n      {{ day }}\n    </button>\n  </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-date/form-date.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-date/form-date.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label>{{ label }}</label>\n<ng-container *ngIf=\"type === 'date'\">\n  <input\n    type=\"date\"\n    class=\"form-control\"\n    *ngIf=\"isMobile && edit\"\n    (ngModelChange)=\"onNativeInput($event)\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n  />\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    *ngIf=\"!autofocus && edit && !isMobile\"\n    (ngModelChange)=\"onInput($event)\"\n    ngxDaterangepickerMd\n    [singleDatePicker]=\"false\"\n    [minDate]=\"minDate\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n    [showCustomRangeLabel]=\"true\"\n    [alwaysShowCalendars]=\"true\"\n    [ranges]=\"ranges\"\n    [linkedCalendars]=\"true\"\n    [showClearButton]=\"true\"\n  />\n  <input\n    type=\"text\"\n    *ngIf=\"autofocus && edit && !isMobile\"\n    class=\"form-control\"\n    autofocus\n    ngdAutoFocus\n    ngxDaterangepickerMd\n    [singleDatePicker]=\"false\"\n    [minDate]=\"minDate\"\n    (ngModelChange)=\"onInput($event)\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n    [showCustomRangeLabel]=\"true\"\n    [alwaysShowCalendars]=\"true\"\n    [ranges]=\"ranges\"\n    [isInvalidDate]=\"isInvalidDate\"\n  />\n</ng-container>\n\n<ng-container *ngIf=\"type === 'day'\">\n  <div class=\"day-month-container\" *ngIf=\"edit\">\n    <input\n      class=\"form-control date-lable-input\"\n      disabled\n      *ngIf=\"value\"\n      [value]=\"dayLabel(value)\"\n    />\n    <div class=\"btn btn-primary\" (click)=\"openSelectDateModal()\">\n      {{ 'select' }}\n    </div>\n  </div>\n</ng-container>\n\n<div class=\"input-value\" *ngIf=\"!edit\">\n  <span *ngIf=\"type === 'date'\">\n    {{ showDate(value) }}\n  </span>\n  <span *ngIf=\"type !== 'date'\">\n    {{ dayLabel(value) }}\n  </span>\n</div>\n<span class=\"error-message-inline\">{{ error(res, field) }}</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-select/form-select.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-select/form-select.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"input-label\" *ngIf=\"label\"\n  >{{ label }}\n  <app-optional-label *ngIf=\"edit\" [optional]=\"optional\"></app-optional-label>\n</label>\n<select\n  class=\"form-control\"\n  [(ngModel)]=\"value\"\n  *ngIf=\"edit\"\n  (ngModelChange)=\"onInput($event)\"\n>\n  <option [value]=\"item.value\" *ngFor=\"let item of items\">\n    {{ item.label }}\n  </option>\n</select>\n<span class=\"error-message-inline\">{{ error(res, field) }}</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-text/form-text.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-text/form-text.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"input-label\" *ngIf=\"label\"\n  >{{ label }}\n  <app-optional-label *ngIf=\"edit\" [optional]=\"optional\"></app-optional-label>\n</label>\n\n<ng-container\n  *ngIf=\"\n    type === 'text' ||\n    type === 'password' ||\n    type === 'email' ||\n    type === 'number'\n  \"\n>\n  <input\n    [type]=\"type\"\n    class=\"form-control\"\n    *ngIf=\"!autofocus && edit\"\n    (ngModelChange)=\"onInput($event)\"\n    [ngClass]=\"{ 'is-invalid': error(resp, field) }\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n  />\n  <input\n    [type]=\"type\"\n    *ngIf=\"autofocus && edit\"\n    class=\"form-control\"\n    autofocus\n    ngdAutoFocus\n    [ngClass]=\"{ 'is-invalid': error(resp, field) }\"\n    (ngModelChange)=\"onInput($event)\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n  />\n</ng-container>\n\n<ng-container *ngIf=\"type === 'textarea'\">\n  <textarea\n    type=\"text\"\n    class=\"form-control\"\n    *ngIf=\"!autofocus && edit\"\n    (ngModelChange)=\"onInput($event)\"\n    [ngClass]=\"{ 'is-invalid': error(resp, field) }\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n  ></textarea>\n\n  <textarea\n    *ngIf=\"autofocus && edit\"\n    class=\"form-control\"\n    autofocus\n    ngdAutoFocus\n    [ngClass]=\"{ 'is-invalid': error(resp, field) }\"\n    (ngModelChange)=\"onInput($event)\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n  ></textarea>\n</ng-container>\n\n<div class=\"input-value\" *ngIf=\"!edit\">{{ value }}</div>\n<span *ngIf=\"error(resp, field)\" class=\"invalid-feedback\">{{\n  error(resp, field)\n}}</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/optional-label/optional-label.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/optional-label/optional-label.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"form-text-optional-label\" *ngIf=\"optional\">optional</span>\n<span class=\"form-text-mandatory-label\" *ngIf=\"!optional\">mandatory</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/gauge-chart/gauge-chart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/gauge-chart/gauge-chart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"divId\" style=\"width: 100%; height: 275px\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/heatmap/heatmap.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/heatmap/heatmap.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"calender-map\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/host-server/host-server.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/host-server/host-server.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\">\n  <p>\n    Here you can install or un install the host server.\n    <strong>This will register torabito server as a system process.</strong>\n    If you have different kind of setup for server, do not modify through here.\n    Contact the system administrator before any changes.\n  </p>\n\n  <h3>Install server</h3>\n  <p>\n    Click on the button to install the server as a system process. If any\n    process is already running, it will be stopped for a moment.\n  </p>\n\n  <app-button\n    type=\"default\"\n    (click)=\"promptInstallServer()\"\n    icon=\"icon-add_to_queue\"\n    value=\"Install server\"\n  ></app-button>\n\n  <h3>Uninstall server</h3>\n  <p>\n    This action will unregister the system service for host server, and\n    immediately will kill the running instance.\n  </p>\n\n  <app-button\n    type=\"default\"\n    (click)=\"promptUninstallServer()\"\n    icon=\"icon-add_to_queue\"\n    value=\"Uninstall\"\n  ></app-button>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/layout/layout.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/layout/layout.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout-wrapper\">\n  <app-navbar></app-navbar>\n  <div\n    (dragenter)=\"eventHandler($event)\"\n    (dragover)=\"eventHandler($event)\"\n    (dragleave)=\"eventHandler($event)\"\n    (drop)=\"setToFileUploader($event)\"\n    class=\"outlet-wrapper\"\n  >\n    <router-outlet></router-outlet>\n    <div *ngIf=\"windowUploader\" class=\"full-window-uploader\"></div>\n  </div>\n  <app-statusbar></app-statusbar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/loading/loading.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/loading/loading.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width: 50%; margin: auto\">\n  <ng-lottie [options]=\"options\"></ng-lottie>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/main-tab/main-tab.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/main-tab/main-tab.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-tab\">\n  <app-tab></app-tab>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/navbar/navbar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/navbar/navbar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"app-navbar\">\n  <div class=\"d-flex\">\n    <app-button\n      type=\"primary\"\n      (click)=\"openCSVImport()\"\n      icon=\"icon-device_hub\"\n      value=\"Import\"\n    ></app-button>\n    <app-button\n      type=\"success\"\n      (click)=\"openDevicesTab()\"\n      icon=\"icon-device_hub\"\n      value=\"Devices\"\n    ></app-button>\n    <app-button\n      (click)=\"openRealtimeTab()\"\n      type=\"succes-light\"\n      icon=\"icon-timeline\"\n      value=\"Realtime\"\n    ></app-button>\n\n    <app-button\n      type=\"default\"\n      icon=\"icon-add_to_queue\"\n      (click)=\"listenToPort()\"\n    ></app-button>\n    <app-button\n      type=\"default\"\n      icon=\"icon-add_to_queue\"\n      (click)=\"logicBuilding()\"\n    ></app-button>\n    <app-button\n      type=\"default\"\n      icon=\"icon-add_to_queue\"\n      (click)=\"openNewDevice()\"\n    ></app-button>\n  </div>\n  <div class=\"d-flex flex-reverse\">\n    <app-button\n      type=\"default\"\n      icon=\"icon-favorite\"\n      disabled=\"true\"\n    ></app-button>\n    <app-button\n      type=\"default\"\n      icon=\"icon-notifications\"\n      disabled=\"true\"\n    ></app-button>\n    <app-button\n      type=\"default\"\n      icon=\"icon-settings\"\n      (click)=\"showSettings()\"\n    ></app-button>\n    <app-connection-status></app-connection-status>\n    <app-button\n      type=\"default\"\n      icon=\"icon-search\"\n      circle=\"true\"\n      disabled=\"true\"\n    ></app-button>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/open-port/open-port.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/open-port/open-port.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\">\n  <p>\n    In order to recieve data from different protocols, you need to use this\n    form, and give the ports information\n  </p>\n\n  <ul>\n    <li>\n      <strong>SerialPort</strong> can be monitored and stored in the software,\n      you can type the address of the serialport or use from available ones\n    </li>\n    <li>\n      <strong>UDP Socket</strong> can be monitored and stored in the software,\n      you can open a socket with specific port.\n    </li>\n  </ul>\n\n  <form class=\"form-wrapper\" [formGroup]=\"form\">\n    <app-form-text\n      formControlName=\"name\"\n      type=\"text\"\n      field=\"name\"\n      [res]=\"res\"\n      label=\"name\"\n      placeholder=\"Port name (for easier recogniztion)\"\n    ></app-form-text>\n    <app-form-select\n      formControlName=\"type\"\n      field=\"type\"\n      label=\"type\"\n      [res]=\"res\"\n      placeholder=\"Type port type (serialport/udp)\"\n      [items]=\"AvailablePorts\"\n    ></app-form-select>\n\n    <ng-container *ngIf=\"form.value.type === 'serialport'\">\n      <app-form-text\n        formControlName=\"path\"\n        type=\"text\"\n        [res]=\"res\"\n        field=\"path\"\n        autofocus=\"true\"\n        label=\"path\"\n        placeholder=\"Location of port (COM1, /dev/utty1...)\"\n      ></app-form-text>\n\n      <app-form-text\n        formControlName=\"baudRate\"\n        type=\"number\"\n        [res]=\"res\"\n        field=\"baudRate\"\n        label=\"baudRate\"\n        placeholder=\"Baudrate: 19600\"\n      ></app-form-text>\n    </ng-container>\n\n    <ng-container *ngIf=\"form.value.type === 'udp'\">\n      <app-form-text\n        formControlName=\"port\"\n        type=\"number\"\n        field=\"port\"\n        [res]=\"res\"\n        label=\"port\"\n        placeholder=\"Port number\"\n      ></app-form-text>\n    </ng-container>\n\n    <div class=\"form-button-wrapper\">\n      <app-button\n        type=\"primary\"\n        (click)=\"submit()\"\n        icon=\"icon-settings_input_hdmi\"\n        value=\"Listen to port\"\n      ></app-button>\n    </div>\n  </form>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar-list/progress-bar-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar-list/progress-bar-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"message-box mt-1\" *ngIf=\"progressBars.length == 0\">\n  <i class=\"icon-warningreport_problem\"></i>\n  <p>There are no running task</p>\n</div>\n<div *ngFor=\"let progressBar of progressBars\" class=\"progress-bar-list\">\n  <p class=\"progress-title\">{{ progressBar.title }}</p>\n  <div class=\"progress-bar-item-wrapper\">\n    <div class=\"progress-bar\">\n      <span\n        [style.width]=\"progressBar.precentage + '%'\"\n        class=\"progress\"\n      ></span>\n    </div>\n    <button class=\"pause-tasks\" disabled>\n      <i class=\"icon-pause_circle_outline\"></i>\n    </button>\n    <button (click)=\"progressBar.stopFunction()\" class=\"stop-tasks\">\n      <i class=\"icon-add_circle_outlinecontrol_point\"></i>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar/progress-bar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar/progress-bar.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"progressBars.length > 0\" class=\"progress-bar-wrapper\">\n  <app-spinner\n    (click)=\"showAllProgressBars()\"\n    backColor=\"rgba(255, 255, 255, 0.5)\"\n    frontColor=\"#fff\"\n    size=\"1.8\"\n  ></app-spinner>\n  <span (click)=\"showAllProgressBars()\" class=\"progress-title\">{{\n    title\n  }}</span>\n  <div (click)=\"showAllProgressBars()\" class=\"progress-bar\">\n    <span [style.width]=\"precentage + '%'\" class=\"progress\"></span>\n  </div>\n  <button\n    tooltip=\"It will active in paid version\"\n    placement=\"top\"\n    class=\"pause-tasks\"\n    disabled\n  >\n    <i class=\"icon-pause_circle_outline\"></i>\n  </button>\n  <button\n    tooltip=\"It will stop all runnig tasks\"\n    placement=\"top\"\n    class=\"stop-tasks\"\n    (click)=\"stopAllProgresses()\"\n  >\n    <i class=\"icon-add_circle_outlinecontrol_point\"></i>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-8\">\n    <app-card title=\"Incoming messages per second\">\n      <app-am-chart #chartView></app-am-chart>\n    </app-card>\n  </div>\n  <div class=\"col-md-4 gauge-chart-wrapper\">\n    <app-card title=\"Incoming messages per second\">\n      <app-gauge-chart\n        #gaugeChartView\n        [ranges]=\"gaugeRange\"\n        [min]=\"0\"\n        [max]=\"100\"\n      ></app-gauge-chart>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime/realtime.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime/realtime.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin: 15px; flex: 1\">\n  <app-realtime-messages-chart></app-realtime-messages-chart>\n\n  <br />\n  <app-dataflow></app-dataflow>\n  <br />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/select-visualization-list/select-visualization-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/select-visualization-list/select-visualization-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-visualization-list\">\n  <div\n    class=\"select-visualization-item\"\n    *ngFor=\"let item of items\"\n    (click)=\"selectItem(item)\"\n    [class.disabled]=\"item.disabled\"\n    [class.selected]=\"data.value && data.value.type === item.type\"\n  >\n    <div class=\"select-visualization-title\">\n      {{ item.type }}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/serial-monitor/serial-monitor.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/serial-monitor/serial-monitor.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\">\n  <p>You can see serial data coming from device here.</p>\n  <pre style=\"line-height: 10px\"><code>\n<ng-container *ngFor=\"let line of lines\">\n  {{ line }}\n</ng-container>\n</code></pre>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/settings/settings.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/settings/settings.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card style=\"flex: 1\">\n  <app-tabs>\n    <app-tab-item>\n      <app-tab-label>Database Config</app-tab-label>\n      <app-tab-body>\n        <app-database-configuration></app-database-configuration>\n      </app-tab-body>\n    </app-tab-item>\n    <app-tab-item>\n      <app-tab-label>Host server</app-tab-label>\n      <app-tab-body>\n        <app-host-server></app-host-server>\n      </app-tab-body>\n    </app-tab-item>\n    <app-tab-item>\n      <app-tab-label>About</app-tab-label>\n      <app-tab-body>\n        <h1>Torabito IO Platform</h1>\n\n        <p>\n          This software is a product written by Ali Torabi, Yousef Sami under\n          PixelPlux Sp. z.o.o ownership.\n        </p>\n      </app-tab-body>\n    </app-tab-item>\n  </app-tabs>\n</app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/spinner/spinner.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/spinner/spinner.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-wrapper\">\n  <div\n    [style.borderColor]=\"backColor\"\n    [style.borderTopColor]=\"frontColor\"\n    [style.borderWidth]=\"_borderSize\"\n    [style.borderTopWidth]=\"_borderSize\"\n    [style.width]=\"_widthAndHeight\"\n    [style.height]=\"_widthAndHeight\"\n    class=\"spinner\"\n  ></div>\n  <span *ngIf=\"text\">{{ text }}</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/statusbar/statusbar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/statusbar/statusbar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"'statusbar ' + status\">\n  <app-progress-bar></app-progress-bar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-body/tab-body.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-body/tab-body.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template><ng-content></ng-content></ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-item/tab-item.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-item/tab-item.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-label/tab-label.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-label/tab-label.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template><ng-content></ng-content></ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tabs/tabs.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tabs/tabs.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tabs-wrapper\">\n  <div class=\"tabs-header\" [class.fullWidth]=\"fullWidth\">\n    <div\n      class=\"tab-label\"\n      (click)=\"selectTab(item)\"\n      [class.active]=\"activeTab === item\"\n      *ngFor=\"let item of tabItems$ | async\"\n    >\n      <span *ngIf=\"item.labelComponent\">\n        <span *ngTemplateOutlet=\"item.labelComponent.labelContent\"> </span>\n      </span>\n\n      <span *ngIf=\"!item.labelComponent\">\n        {{ item.label }}\n      </span>\n    </div>\n  </div>\n\n  <div class=\"tabs-body\">\n    <perfect-scrollbar\n      class=\"scroll-container child-tab-body-scroll-container\"\n      [scrollIndicators]=\"false\"\n      [config]=\"config\"\n    >\n      <ng-container *ngIf=\"activeTab && activeTab.bodyComponent\">\n        <ng-container *ngTemplateOutlet=\"activeTab.bodyComponent.bodyContent\">\n        </ng-container>\n      </ng-container>\n    </perfect-scrollbar>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/welcome-tab/welcome-tab.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/welcome-tab/welcome-tab.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"welcome-page-wrapper\">\n  <img class=\"welcome-logo\" src=\"assets/images/welcome-icon.png\" />\n  <div class=\"shortkeys\">\n    <div class=\"shortkey\">\n      <div class=\"shortkey-title\">Import CSV</div>\n      <div class=\"keys\"><span>Ctrl</span> + <span>I</span></div>\n    </div>\n    <div class=\"shortkey\">\n      <div class=\"shortkey-title\">Devices</div>\n      <div class=\"keys\"><span>Ctrl</span> + <span>C</span></div>\n    </div>\n  </div>\n\n  <div class=\"extra-links\">\n    <div class=\"extra-link\">\n      <i class=\"icon-archive\"></i>\n      <p class=\"extra-link-title\">Demo Importer</p>\n      <p>Import pre-made modern demo to your dashboard</p>\n    </div>\n    <div class=\"extra-link\">\n      <i class=\"icon-library_books\"></i>\n      <p class=\"extra-link-title\">Documentation</p>\n      <p>User guid and extra details about Torabito dashboard</p>\n    </div>\n    <div (click)=\"goToLink('https://www.youtube.com')\" class=\"extra-link\">\n      <i class=\"icon-subscriptions\"></i>\n      <p class=\"extra-link-title\">Learning Video</p>\n      <p>Watch videos for learning how to connect your devices to dashboard</p>\n    </div>\n  </div>\n</div>\n\n<!-- <h1>Welcome to your dashboard</h1>\n\n<div style=\"display: flex\">\n  <div style=\"flex: 1; margin-right: 7.5px\">\n    <app-card title=\"Import data\">\n      You can import your devices history in csv format.\n\n      <br /><br />\n\n      <app-button\n        type=\"primary\"\n        (click)=\"openCSVImport()\"\n        icon=\"icon-device_hub\"\n        value=\"Import\"\n      ></app-button>\n    </app-card>\n  </div>\n\n  <div style=\"margin-left: 7.5px; flex: 1\">\n    <app-card title=\"Devices\">\n      You can see your devices history (live and imported) here.\n\n      <br /><br />\n\n      <app-button\n        type=\"success\"\n        (click)=\"openDevicesTab()\"\n        icon=\"icon-device_hub\"\n        value=\"Devices\"\n      ></app-button>\n    </app-card>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-modal/base-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-modal/base-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"ngd-modal-wrapper\"\n  *ngIf=\"modal\"\n  [ngClass]=\"{\n    active: activeModal,\n    'dialog-mode': type === 'MODAL',\n    vibrate: vibrate\n  }\"\n  (click)=\"$event.stopPropagation(); Cancel($event)\"\n>\n  <div class=\"ngd-modal-content\" [ngClass]=\"{ active: activeModal }\">\n    <!-- Close button -->\n\n    <div *ngIf=\"modal.title\" class=\"ngd-modal-title\">\n      <span>{{ modal.title }}</span>\n      <i\n        class=\"icon-clearclose ngd-modal-close\"\n        (click)=\"CloseButtonClick()\"\n      ></i>\n    </div>\n\n    <div class=\"ngd-modal-text\">\n      <p *ngIf=\"modal.description\">{{ modal.description }}</p>\n      <p *ngIf=\"textContent\">{{ textContent }}</p>\n\n      <div #content></div>\n    </div>\n\n    <div *ngIf=\"buttons && buttons.length > 0\" id=\"base-modal-buttons\">\n      <ng-container *ngFor=\"let button of buttons\">\n        <button\n          *ngIf=\"button.type === 'CONFIRM'\"\n          class=\"btn btn-primary\"\n          (click)=\"$event.stopPropagation(); Confirm($event)\"\n        >\n          {{ button.label }}\n        </button>\n        <button\n          class=\"btn btn-secondary\"\n          *ngIf=\"button.type === 'CANCEL'\"\n          (click)=\"$event.stopPropagation(); Cancel($event)\"\n        >\n          {{ button.label }}\n        </button>\n      </ng-container>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-toast/base-toast.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-toast/base-toast.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"ngd-toast-wrapper\"\n  *ngIf=\"modal\"\n  [ngClass]=\"{\n    active: activeModal,\n    'dialog-mode': type === 'MODAL',\n    vibrate: vibrate\n  }\"\n  (click)=\"$event.stopPropagation(); Cancel($event)\"\n>\n  <div\n    class=\"ngd-toast-content\"\n    [ngClass]=\"{\n      active: activeModal\n    }\"\n    [class.theme-success]=\"modal.status === 'SUCCESS'\"\n    [class.theme-warning]=\"modal.status === 'WARNING'\"\n    [class.theme-info]=\"modal.status === 'INFO'\"\n    [class.theme-error]=\"modal.status === 'ERROR'\"\n  >\n    <!-- Close button -->\n    <i class=\"icon-close ngd-toast-close\" (click)=\"CloseButtonClick()\"></i>\n    <div class=\"ngd-toast-text\">\n      <div *ngIf=\"modal.title\" class=\"ngd-toast-title\">{{ modal.title }}</div>\n      <p *ngIf=\"modal.description\">{{ modal.description }}</p>\n      <p *ngIf=\"textContent\">{{ textContent }}</p>\n\n      <div #content></div>\n    </div>\n\n    <div>\n      <ng-container *ngFor=\"let button of buttons\">\n        <button\n          *ngIf=\"button.type === 'CONFIRM'\"\n          class=\"btn btn-primary\"\n          (click)=\"$event.stopPropagation(); Confirm($event)\"\n        >\n          {{ button.label }}\n        </button>\n        <button\n          class=\"btn btn-secondary\"\n          *ngIf=\"button.type === 'CANCEL'\"\n          (click)=\"$event.stopPropagation(); Cancel($event)\"\n        >\n          {{ button.label }}\n        </button>\n      </ng-container>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/zone.js/fesm2015/zone.js":
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @license Angular v10.1.0-next.6+7.sha-aaa1d8e
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
    undefined;
}((function () { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const Zone$1 = (function (global) {
        const performance = global['performance'];
        function mark(name) {
            performance && performance['mark'] && performance['mark'](name);
        }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.
        const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) {
            return symbolPrefix + name;
        }
        const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
            }
            else {
                return global['Zone'];
            }
        }
        class Zone {
            constructor(parent, zoneSpec) {
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate =
                    new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            static assertZonePatched() {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                        'has been overwritten.\n' +
                        'Most likely cause is that a Promise polyfill has been loaded ' +
                        'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                        'If you must load one, do so before loading zone.js.)');
                }
            }
            static get root() {
                let zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            }
            static get current() {
                return _currentZoneFrame.zone;
            }
            static get currentTask() {
                return _currentTask;
            }
            // tslint:disable-next-line:require-internal-with-underscore
            static __load_patch(name, fn) {
                if (patches.hasOwnProperty(name)) {
                    if (checkDuplicate) {
                        throw Error('Already loaded patch: ' + name);
                    }
                }
                else if (!global['__Zone_disable_' + name]) {
                    const perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            }
            get parent() {
                return this._parent;
            }
            get name() {
                return this._name;
            }
            get(key) {
                const zone = this.getZoneWith(key);
                if (zone)
                    return zone._properties[key];
            }
            getZoneWith(key) {
                let current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            }
            fork(zoneSpec) {
                if (!zoneSpec)
                    throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            }
            wrap(callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                const _callback = this._zoneDelegate.intercept(this, callback, source);
                const zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            }
            run(callback, applyThis, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runGuarded(callback, applyThis = null, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            }
            runTask(task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                    return;
                }
                const reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                const previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = undefined;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        }
                        else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard &&
                                task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            }
            scheduleTask(task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    let newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                const zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                }
                catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            }
            scheduleMicroTask(source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
            scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
            scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
            cancelTask(task) {
                if (task.zone != this)
                    throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                }
                catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            }
            _updateTaskCount(task, count) {
                const zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (let i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            }
        }
        // tslint:disable-next-line:require-internal-with-underscore
        Zone.__symbol__ = __symbol__;
        const DELEGATE_ZS = {
            name: '',
            onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
            onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
            onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
            onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
        };
        class ZoneDelegate {
            constructor(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt =
                    zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec &&
                    (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone =
                    zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            fork(targetZone, zoneSpec) {
                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                    new Zone(targetZone, zoneSpec);
            }
            intercept(targetZone, callback, source) {
                return this._interceptZS ?
                    this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                    callback;
            }
            invoke(targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                    callback.apply(applyThis, applyArgs);
            }
            handleError(targetZone, error) {
                return this._handleErrorZS ?
                    this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                    true;
            }
            scheduleTask(targetZone, task) {
                let returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    // clang-format off
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    // clang-format on
                    if (!returnTask)
                        returnTask = task;
                }
                else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    }
                    else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    }
                    else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            }
            invokeTask(targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                    task.callback.apply(applyThis, applyArgs);
            }
            cancelTask(targetZone, task) {
                let value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                }
                else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            }
            hasTask(targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    this._hasTaskZS &&
                        this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                }
                catch (err) {
                    this.handleError(targetZone, err);
                }
            }
            // tslint:disable-next-line:require-internal-with-underscore
            _updateTaskCount(type, count) {
                const counts = this._taskCounts;
                const prev = counts[type];
                const next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    const isEmpty = {
                        microTask: counts['microTask'] > 0,
                        macroTask: counts['macroTask'] > 0,
                        eventTask: counts['eventTask'] > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            }
        }
        class ZoneTask {
            constructor(type, source, callback, options, scheduleFn, cancelFn) {
                // tslint:disable-next-line:require-internal-with-underscore
                this._zone = null;
                this.runCount = 0;
                // tslint:disable-next-line:require-internal-with-underscore
                this._zoneDelegates = null;
                // tslint:disable-next-line:require-internal-with-underscore
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                if (!callback) {
                    throw new Error('callback is not defined');
                }
                this.callback = callback;
                const self = this;
                // TODO: @JiaLiPassion options should have interface
                if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                }
                else {
                    this.invoke = function () {
                        return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                }
            }
            static invokeTask(task, target, args) {
                if (!task) {
                    task = this;
                }
                _numberOfNestedTaskFrames++;
                try {
                    task.runCount++;
                    return task.zone.runTask(task, target, args);
                }
                finally {
                    if (_numberOfNestedTaskFrames == 1) {
                        drainMicroTaskQueue();
                    }
                    _numberOfNestedTaskFrames--;
                }
            }
            get zone() {
                return this._zone;
            }
            get state() {
                return this._state;
            }
            cancelScheduleRequest() {
                this._transitionTo(notScheduled, scheduling);
            }
            // tslint:disable-next-line:require-internal-with-underscore
            _transitionTo(toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                }
                else {
                    throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
                }
            }
            toString() {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId.toString();
                }
                else {
                    return Object.prototype.toString.call(this);
                }
            }
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            toJSON() {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount
                };
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const symbolSetTimeout = __symbol__('setTimeout');
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        let _microTaskQueue = [];
        let _isDrainingMicrotaskQueue = false;
        let nativeMicroTaskQueuePromise;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                    if (global[symbolPromise]) {
                        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                    }
                }
                if (nativeMicroTaskQueuePromise) {
                    let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                    if (!nativeThen) {
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise['then'];
                    }
                    nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                }
                else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    const queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (let i = 0; i < queue.length; i++) {
                        const task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        }
                        catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        const NO_ZONE = { name: 'NO ZONE' };
        const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
        const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
        const patches = {};
        const _api = {
            symbol: __symbol__,
            currentZoneFrame: () => _currentZoneFrame,
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
            patchEventTarget: () => [],
            patchOnProperties: noop,
            patchMethod: () => noop,
            bindArguments: () => [],
            patchThen: () => noop,
            patchMacroTask: () => noop,
            patchEventPrototype: () => noop,
            isIEOrEdge: () => false,
            getGlobalObjects: () => undefined,
            ObjectDefineProperty: () => noop,
            ObjectGetOwnPropertyDescriptor: () => undefined,
            ObjectCreate: () => undefined,
            ArraySlice: () => [],
            patchClass: () => noop,
            wrapWithCurrentZone: () => noop,
            filterProperties: () => [],
            attachOriginToPatched: () => noop,
            _redefineProperty: () => noop,
            patchCallbacks: () => noop
        };
        let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        let _currentTask = null;
        let _numberOfNestedTaskFrames = 0;
        function noop() { }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    const ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    const ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    const ObjectCreate = Object.create;
    /** Array.prototype.slice */
    const ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    const ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    const TRUE_STR = 'true';
    /** false string const */
    const FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    const zoneSymbol = Zone.__symbol__;
    const isWindowExists = typeof window !== 'undefined';
    const internalWindow = isWindowExists ? window : undefined;
    const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    const REMOVE_ATTRIBUTE = 'removeAttribute';
    const NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (let i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        const source = prototype.constructor['name'];
        for (let i = 0; i < fnNames.length; i++) {
            const name = fnNames[i];
            const delegate = prototype[name];
            if (delegate) {
                const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
                if (!isPropertyWritable(prototypeDesc)) {
                    continue;
                }
                prototype[name] = ((delegate) => {
                    const patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        }
    }
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    const isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    const zoneSymbolEventNames = {};
    const wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        let eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }
        const target = this || event.target || _global;
        const listener = target[eventNameSymbol];
        let result;
        if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            const errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        const originalDescGet = desc.get;
        const originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        const eventName = prop.substr(2);
        let eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            let previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            let target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            const listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                let value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (let i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            const onProperties = [];
            for (const prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (let j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    const originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        const OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            const a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        const instance = new OriginalClass(function () { });
        let prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () {
                            return this[originalInstanceKey][prop];
                        }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function patchMethod(target, name, patchFn) {
        let proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        const delegateName = zoneSymbol(name);
        let delegate = null;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                const patchDelegate = patchFn(delegate, delegateName, name);
                proto[name] = function () {
                    return patchDelegate(this, arguments);
                };
                attachOriginToPatched(proto[name], delegate);
            }
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        let setNative = null;
        function scheduleTask(task) {
            const data = task.data;
            data.args[data.cbIdx] = function () {
                task.invoke.apply(this, arguments);
            };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
            const meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        });
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }
    let isDetectedIEOrEdge = false;
    let ieOrEdge = false;
    function isIE() {
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            const ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
        const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        const ObjectDefineProperty = Object.defineProperty;
        function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
                const className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
            }
            return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }
        const __symbol__ = api.symbol;
        const _uncaughtPromiseErrors = [];
        const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
        const symbolPromise = __symbol__('Promise');
        const symbolThen = __symbol__('then');
        const creationTrace = '__creationTrace__';
        api.onUnhandledError = (e) => {
            if (api.showUncaughtError()) {
                const rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                else {
                    console.error(e);
                }
            }
        };
        api.microtaskDrainDone = () => {
            while (_uncaughtPromiseErrors.length) {
                const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(() => {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            }
        };
        const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                if (typeof handler === 'function') {
                    handler.call(this, e);
                }
            }
            catch (err) {
            }
        }
        function isThenable(value) {
            return value && value.then;
        }
        function forwardResolution(value) {
            return value;
        }
        function forwardRejection(rejection) {
            return ZoneAwarePromise.reject(rejection);
        }
        const symbolState = __symbol__('state');
        const symbolValue = __symbol__('value');
        const symbolFinally = __symbol__('finally');
        const symbolParentPromiseValue = __symbol__('parentPromiseValue');
        const symbolParentPromiseState = __symbol__('parentPromiseState');
        const source = 'Promise.then';
        const UNRESOLVED = null;
        const RESOLVED = true;
        const REJECTED = false;
        const REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return (v) => {
                try {
                    resolvePromise(promise, state, v);
                }
                catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        const once = function () {
            let wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        const TYPE_ERROR = 'Promise resolved with itself';
        const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            const onceWrapper = once();
            if (promise === value) {
                throw new TypeError(TYPE_ERROR);
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                let then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                }
                catch (err) {
                    onceWrapper(() => {
                        resolvePromise(promise, false, err);
                    })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                    value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                    value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                }
                else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                    }
                    catch (err) {
                        onceWrapper(() => {
                            resolvePromise(promise, false, err);
                        })();
                    }
                }
                else {
                    promise[symbolState] = state;
                    const queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    if (promise[symbolFinally] === symbolFinally) {
                        // the promise is generated by Promise.prototype.finally
                        if (state === RESOLVED) {
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState];
                            promise[symbolValue] = promise[symbolParentPromiseValue];
                        }
                    }
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        // check if longStackTraceZone is here
                        const trace = Zone.currentTask && Zone.currentTask.data &&
                            Zone.currentTask.data[creationTrace];
                        if (trace) {
                            // only keep the long stack trace into error when in longStackTraceZone
                            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                        }
                    }
                    for (let i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        let uncaughtPromiseError = value;
                        if (!isDisableWrappingUncaughtPromiseRejection) {
                            // If disable wrapping uncaught promise reject
                            // and the rejected value is an Error object,
                            // use the value instead of wrapping it.
                            try {
                                // Here we throws a new Error to print more readable error log
                                // and if the value is not an error, zone.js builds an `Error`
                                // Object here to attach the stack information.
                                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                    (value && value.stack ? '\n' + value.stack : ''));
                            }
                            catch (err) {
                                uncaughtPromiseError = err;
                            }
                        }
                        uncaughtPromiseError.rejection = value;
                        uncaughtPromiseError.promise = promise;
                        uncaughtPromiseError.zone = Zone.current;
                        uncaughtPromiseError.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(uncaughtPromiseError);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    const handler = Zone[REJECTION_HANDLED_HANDLER];
                    if (handler && typeof handler === 'function') {
                        handler.call(this, { rejection: promise[symbolValue], promise: promise });
                    }
                }
                catch (err) {
                }
                promise[symbolState] = REJECTED;
                for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            const promiseState = promise[symbolState];
            const delegate = promiseState ?
                (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                (typeof onRejected === 'function') ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, () => {
                try {
                    const parentPromiseValue = promise[symbolValue];
                    const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                    if (isFinallyPromise) {
                        // if the promise is generated from finally call, keep parent promise's state and value
                        chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                        chainPromise[symbolParentPromiseState] = promiseState;
                    }
                    // should not pass value to finally callback
                    const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                        [] :
                        [parentPromiseValue]);
                    resolvePromise(chainPromise, true, value);
                }
                catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                }
            }, chainPromise);
        }
        const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
        const noop = function () { };
        class ZoneAwarePromise {
            static toString() {
                return ZONE_AWARE_PROMISE_TO_STRING;
            }
            static resolve(value) {
                return resolvePromise(new this(null), RESOLVED, value);
            }
            static reject(error) {
                return resolvePromise(new this(null), REJECTED, error);
            }
            static race(values) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                function onResolve(value) {
                    resolve(value);
                }
                function onReject(error) {
                    reject(error);
                }
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            }
            static all(values) {
                return ZoneAwarePromise.allWithCallback(values);
            }
            static allSettled(values) {
                const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                    thenCallback: (value) => ({ status: 'fulfilled', value }),
                    errorCallback: (err) => ({ status: 'rejected', reason: err })
                });
            }
            static allWithCallback(values, callback) {
                let resolve;
                let reject;
                let promise = new this((res, rej) => {
                    resolve = res;
                    reject = rej;
                });
                // Start at 2 to prevent prematurely resolving if .then is called immediately.
                let unresolvedCount = 2;
                let valueIndex = 0;
                const resolvedValues = [];
                for (let value of values) {
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    const curValueIndex = valueIndex;
                    try {
                        value.then((value) => {
                            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }, (err) => {
                            if (!callback) {
                                reject(err);
                            }
                            else {
                                resolvedValues[curValueIndex] = callback.errorCallback(err);
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }
                        });
                    }
                    catch (thenErr) {
                        reject(thenErr);
                    }
                    unresolvedCount++;
                    valueIndex++;
                }
                // Make the unresolvedCount zero-based again.
                unresolvedCount -= 2;
                if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                }
                return promise;
            }
            constructor(executor) {
                const promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                }
                catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            get [Symbol.toStringTag]() {
                return 'Promise';
            }
            get [Symbol.species]() {
                return ZoneAwarePromise;
            }
            then(onFulfilled, onRejected) {
                let C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = this.constructor || ZoneAwarePromise;
                }
                const chainPromise = new C(noop);
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            }
            catch(onRejected) {
                return this.then(null, onRejected);
            }
            finally(onFinally) {
                let C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = ZoneAwarePromise;
                }
                const chainPromise = new C(noop);
                chainPromise[symbolFinally] = symbolFinally;
                const zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }
                return chainPromise;
            }
        }
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        const NativePromise = global[symbolPromise] = global['Promise'];
        global['Promise'] = ZoneAwarePromise;
        const symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            const proto = Ctor.prototype;
            const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
            if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
            }
            const originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                const wrapped = new ZoneAwarePromise((resolve, reject) => {
                    originalThen.call(this, resolve, reject);
                });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        api.patchThen = patchThen;
        function zoneify(fn) {
            return function (self, args) {
                let resultPromise = fn.apply(self, args);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                let ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            patchMethod(global, 'fetch', delegate => zoneify(delegate));
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', (global) => {
        // patch Func.prototype.toString to let them look like native
        const originalFunctionToString = Function.prototype.toString;
        const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        const PROMISE_SYMBOL = zoneSymbol('Promise');
        const ERROR_SYMBOL = zoneSymbol('Error');
        const newFunctionToString = function toString() {
            if (typeof this === 'function') {
                const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    const nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    const nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        const originalObjectToString = Object.prototype.toString;
        const PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    let passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            const options = Object.defineProperty({}, 'passive', {
                get: function () {
                    passiveSupported = true;
                }
            });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    const zoneSymbolEventNames$1 = {};
    const globalSources = {};
    const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
        const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, apis, patchOptions) {
        const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
        const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
        const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        const PREPEND_EVENT_LISTENER = 'prependListener';
        const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        const invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            const delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = (event) => delegate.handleEvent(event);
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            const options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        const globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        const globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            const target = this || event.target || _global;
            const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    const copyTasks = tasks.slice();
                    for (let i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            let useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            const validateHandler = patchOptions && patchOptions.vh;
            let checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            let returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            let proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            const eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            const taskData = {};
            const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            let nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */
            function buildEventListenerOptions(options, passive) {
                if (!passiveSupported && typeof options === 'object' && options) {
                    // doesn't support passive but user want to pass an object as options.
                    // this will not work on some old browser, so we just pass a boolean
                    // as useCapture parameter
                    return !!options.capture;
                }
                if (!passiveSupported || !passive) {
                    return options;
                }
                if (typeof options === 'boolean') {
                    return { capture: options, passive: true };
                }
                if (!options) {
                    return { passive: true };
                }
                if (typeof options === 'object' && options.passive !== false) {
                    return Object.assign(Object.assign({}, options), { passive: true });
                }
                return options;
            }
            const customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            const customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                    let symbolEventName;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                    }
                    const existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            const existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            const customScheduleNonGlobal = function (task) {
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            const customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            const compareTaskCallbackVsDelegate = function (task, delegate) {
                const typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            const blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];
            const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
            const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
                return function () {
                    const target = this || _global;
                    let eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    let delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    let isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                    const options = buildEventListenerOptions(arguments[2], passive);
                    if (blackListedEvents) {
                        // check black list
                        for (let i = 0; i < blackListedEvents.length; i++) {
                            if (eventName === blackListedEvents[i]) {
                                if (passive) {
                                    return nativeListener.call(target, eventName, delegate, options);
                                }
                                else {
                                    return nativeListener.apply(this, arguments);
                                }
                            }
                        }
                    }
                    const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                    const once = options && typeof options === 'object' ? options.once : false;
                    const zone = Zone.current;
                    let symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (!symbolEventNames) {
                        prepareEventNames(eventName, eventNameToString);
                        symbolEventNames = zoneSymbolEventNames$1[eventName];
                    }
                    const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                    let existingTasks = target[symbolEventName];
                    let isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (let i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    let source;
                    const constructorName = target.constructor['name'];
                    const targetSource = globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const options = arguments[2];
                const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                const delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                const listeners = [];
                const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i];
                    let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                const target = this || _global;
                let eventName = arguments[0];
                if (!eventName) {
                    const keys = Object.keys(target);
                    for (let i = 0; i < keys.length; i++) {
                        const prop = keys[i];
                        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        let evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    const symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (symbolEventNames) {
                        const symbolEventName = symbolEventNames[FALSE_STR];
                        const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                        const tasks = target[symbolEventName];
                        const captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            const removeTasks = tasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            const removeTasks = captureTasks.slice();
                            for (let i = 0; i < removeTasks.length; i++) {
                                const task = removeTasks[i];
                                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        let results = [];
        for (let i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    function findEventTasks(target, eventName) {
        if (!eventName) {
            const foundTasks = [];
            for (let prop in target) {
                const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                let evtName = match && match[1];
                if (evtName && (!eventName || evtName === eventName)) {
                    const tasks = target[prop];
                    if (tasks) {
                        for (let i = 0; i < tasks.length; i++) {
                            foundTasks.push(tasks[i]);
                        }
                    }
                }
            }
            return foundTasks;
        }
        let symbolEventName = zoneSymbolEventNames$1[eventName];
        if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = zoneSymbolEventNames$1[eventName];
        }
        const captureFalseTasks = target[symbolEventName[FALSE_STR]];
        const captureTrueTasks = target[symbolEventName[TRUE_STR]];
        if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
        }
        else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
                captureFalseTasks.slice();
        }
    }
    function patchEventPrototype(global, api) {
        const Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            });
        }
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCallbacks(api, target, targetName, method, callbacks) {
        const symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        const nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    const source = `${targetName}.${method}::` + callback;
                    const prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    const documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    const windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    const htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    const ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    const formEventNames = ['autocomplete', 'autocompleteerror'];
    const detailEventNames = ['toggle'];
    const frameEventNames = ['load'];
    const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    const marqueeEventNames = ['bounce', 'finish', 'start'];
    const XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    const websocketEventNames = ['close', 'error', 'open', 'message'];
    const workerEventNames = ['error', 'message'];
    const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        const tip = ignoreProperties.filter(ip => ip.target === target);
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        const targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
    }
    function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        const supportsWebSocket = typeof WebSocket !== 'undefined';
        const ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            const internalWindow = window;
            const ignoreErrorProperties = isIE() ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement) {
                patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
            }
            const Worker = internalWindow['Worker'];
            if (Worker) {
                patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
            }
        }
        const XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('util', (global, Zone, api) => {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;
        api.getGlobalObjects = () => ({
            globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames,
            isBrowser,
            isMix,
            isNode,
            TRUE_STR,
            FALSE_STR,
            ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR
        });
    });

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    const taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        let setNative = null;
        let clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        const tasksByHandleId = {};
        function scheduleTask(task) {
            const data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                }
                finally {
                    // issue-934, task will be cancelled
                    // even it is a periodic task such as
                    // setInterval
                    if (!(task.data && task.data.isPeriodic)) {
                        if (typeof data.handleId === 'number') {
                            // in non-nodejs env, we remove timerId
                            // from local cache
                            delete tasksByHandleId[data.handleId];
                        }
                        else if (data.handleId) {
                            // Node returns complex objects as handleIds
                            // we remove task reference from timer object
                            data.handleId[taskSymbol] = null;
                        }
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) {
            return clearNative.call(window, task.data.handleId);
        }
        setNative =
            patchMethod(window, setName, (delegate) => function (self, args) {
                if (typeof args[0] === 'function') {
                    const options = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    const handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            });
        clearNative =
            patchMethod(window, cancelName, (delegate) => function (self, args) {
                const id = args[0];
                let task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            });
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCustomElements(_global, api) {
        const { isBrowser, isMix } = api.getGlobalObjects();
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (let i = 0; i < eventNames.length; i++) {
            const eventName = eventNames[i];
            const falseEventName = eventName + FALSE_STR;
            const trueEventName = eventName + TRUE_STR;
            const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        const EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('legacy', (global) => {
        const legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('timers', (global) => {
        const set = 'set';
        const clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', (global) => {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', (global, Zone) => {
        const blockingMethods = ['alert', 'prompt', 'confirm'];
        for (let i = 0; i < blockingMethods.length; i++) {
            const name = blockingMethods[i];
            patchMethod(global, name, (delegate, symbol, name) => {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', (global, Zone, api) => {
        patchEvent(global, api);
        eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
    });
    Zone.__load_patch('MutationObserver', (global, Zone, api) => {
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
    });
    Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
        patchClass('IntersectionObserver');
    });
    Zone.__load_patch('FileReader', (global, Zone, api) => {
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', (global, Zone, api) => {
        propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', (global, Zone, api) => {
        patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', (global, Zone) => {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        const XHR_TASK = zoneSymbol('xhrTask');
        const XHR_SYNC = zoneSymbol('xhrSync');
        const XHR_LISTENER = zoneSymbol('xhrListener');
        const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        const XHR_URL = zoneSymbol('xhrURL');
        const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            const XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) {
                return target[XHR_TASK];
            }
            let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget) {
                    const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            const READY_STATE_CHANGE = 'readystatechange';
            const SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                const data = task.data;
                const target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                const listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                const newListener = target[XHR_LISTENER] = () => {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            const loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (loadTasks && loadTasks.length > 0) {
                                const oriInvoke = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    const loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (let i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                const storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                const data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            });
            const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            });
            const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
                const task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            });
        }
    });
    Zone.__load_patch('geolocation', (global) => {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                const eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(eventTask => {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _iot_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iot/components/layout/layout.component */ "./src/app/iot/components/layout/layout.component.ts");
/* harmony import */ var _iot_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iot/components/dashboard/dashboard.component */ "./src/app/iot/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _iot_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _iot_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            },
        ],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _iot_iot_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iot/iot.module */ "./src/app/iot/iot.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// NG Translate






// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _iot_iot_module__WEBPACK_IMPORTED_MODULE_11__["IotModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                    },
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    disableTimeOut: true,
                    closeButton: true,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                    enableHtml: true,
                    iconClasses: {
                        error: 'toast-error icon-error_outline',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning',
                    },
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/iot/components/active-streams/active-streams.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/iot/components/active-streams/active-streams.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2FjdGl2ZS1zdHJlYW1zL2FjdGl2ZS1zdHJlYW1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/active-streams/active-streams.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/iot/components/active-streams/active-streams.component.ts ***!
  \***************************************************************************/
/*! exports provided: ActiveStreamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStreamsComponent", function() { return ActiveStreamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var app_shared_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ActiveStreamsComponent = /** @class */ (function () {
    function ActiveStreamsComponent(dataService, modalService, navigatorService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.navigatorService = navigatorService;
        this.activeStreams = [];
        this.translations = app_locale_translations__WEBPACK_IMPORTED_MODULE_1__["translations"];
        this.subscriptions = [];
        this.serialPorts = [];
        this.activePorts = [];
        this.serverInformation = null;
    }
    ActiveStreamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions = [
            this.dataService
                .activeStreams$()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (items) {
                _this.activeStreams = items;
            }))
                .subscribe(),
            this.dataService
                .serialPorts$()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (items) {
                _this.serialPorts = items;
            }))
                .subscribe(),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(5000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.dataService.getSerialPorts(); }))
                .subscribe(),
            this.dataService
                .getActivePorts()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (items) {
                _this.activePorts = items;
            }))
                .subscribe(),
            this.dataService
                .getServerInformation()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (information) {
                _this.serverInformation = information;
            }))
                .subscribe(),
        ];
    };
    ActiveStreamsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .filter(Boolean)
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    ActiveStreamsComponent.prototype.killProcess = function (id) {
        this.dataService.killStream(id).subscribe();
    };
    ActiveStreamsComponent.prototype.deleteActivePort = function (id) {
        var _this = this;
        this.modalService
            .open({
            type: app_shared_definitions__WEBPACK_IMPORTED_MODULE_2__["ModalDialogType"].CONFIRMATION,
            title: app_locale_translations__WEBPACK_IMPORTED_MODULE_1__["translations"].activeStreams.deletePortTitle,
            description: app_locale_translations__WEBPACK_IMPORTED_MODULE_1__["translations"].activeStreams.deletePortDescription,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (data) { return data.type === 'CONFIRMED'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.dataService.deleteActivePort(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this.activePorts = _this.activePorts.filter(function (item) { return item.id !== id; });
        }))
            .subscribe();
    };
    ActiveStreamsComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
        { type: app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }
    ]; };
    ActiveStreamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-streams',
            template: __importDefault(__webpack_require__(/*! raw-loader!./active-streams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/active-streams/active-streams.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./active-streams.component.scss */ "./src/app/iot/components/active-streams/active-streams.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"]])
    ], ActiveStreamsComponent);
    return ActiveStreamsComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/am-chart/am-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/am-chart/am-chart.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2FtLWNoYXJ0L2FtLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/am-chart/am-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/am-chart/am-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: AmChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartComponent", function() { return AmChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var AmChartComponent = /** @class */ (function () {
    function AmChartComponent(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.divId = "doc-" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["random"])(111111, 9999999);
    }
    // Run the function only in the browser
    AmChartComponent.prototype.browserOnly = function (f) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                f();
            });
        }
    };
    AmChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(100).subscribe(function () {
            _this.drawChart();
        });
    };
    AmChartComponent.prototype.drawChart = function () {
        var _this = this;
        this.browserOnly(function () {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"](_this.divId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
            chart.paddingRight = 20;
            var data = [];
            chart.data = data;
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
            dateAxis.renderer.grid.template.location = 0;
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.minWidth = 35;
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'value';
            series.tooltipText = '{valueY.value}';
            series.strokeWidth = 0;
            series.fillOpacity = 0.5;
            series.tensionX = 0.77;
            series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]('blue');
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
            _this.chart = chart;
        });
    };
    AmChartComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.browserOnly(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    AmChartComponent.prototype.addData = function (data) {
        if (!this.chart) {
            return;
        }
        this.chart.addData(data, this.chart.data.length > 50 ? data.length : 0);
    };
    AmChartComponent.prototype.reset = function () {
        this.chart.removeData(this.chart.data.length);
    };
    AmChartComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    AmChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-am-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./am-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/am-chart/am-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./am-chart.component.scss */ "./src/app/iot/components/am-chart/am-chart.component.scss")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AmChartComponent);
    return AmChartComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2FwcC10YWIvbWFpbi10YWItYm9keS9tYWluLXRhYi1ib2R5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainTabBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabBodyComponent", function() { return MainTabBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MainTabBodyComponent = /** @class */ (function () {
    function MainTabBodyComponent() {
    }
    MainTabBodyComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MainTabBodyComponent.prototype, "bodyContent", void 0);
    MainTabBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tab-body',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-tab-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main-tab-body.component.scss */ "./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MainTabBodyComponent);
    return MainTabBodyComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainTabItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabItemComponent", function() { return MainTabItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_tab_label_main_tab_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../main-tab-label/main-tab-label.component */ "./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.ts");
/* harmony import */ var _main_tab_body_main_tab_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../main-tab-body/main-tab-body.component */ "./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MainTabItemComponent = /** @class */ (function () {
    function MainTabItemComponent() {
    }
    MainTabItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MainTabItemComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MainTabItemComponent.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainTabItemComponent.prototype, "tab", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_main_tab_body_main_tab_body_component__WEBPACK_IMPORTED_MODULE_2__["MainTabBodyComponent"]),
        __metadata("design:type", _main_tab_body_main_tab_body_component__WEBPACK_IMPORTED_MODULE_2__["MainTabBodyComponent"])
    ], MainTabItemComponent.prototype, "bodyComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_main_tab_label_main_tab_label_component__WEBPACK_IMPORTED_MODULE_1__["MainTabLabelComponent"]),
        __metadata("design:type", _main_tab_label_main_tab_label_component__WEBPACK_IMPORTED_MODULE_1__["MainTabLabelComponent"])
    ], MainTabItemComponent.prototype, "labelComponent", void 0);
    MainTabItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tab-item',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-tab-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], MainTabItemComponent);
    return MainTabItemComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MainTabLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabLabelComponent", function() { return MainTabLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MainTabLabelComponent = /** @class */ (function () {
    function MainTabLabelComponent() {
    }
    MainTabLabelComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], MainTabLabelComponent.prototype, "labelContent", void 0);
    MainTabLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tab-label',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-tab-label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], MainTabLabelComponent);
    return MainTabLabelComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/app-tab/main-tabs/main-tabs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/iot/components/app-tab/main-tabs/main-tabs.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabsComponent", function() { return MainTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_tab_item_main_tab_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../main-tab-item/main-tab-item.component */ "./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/tabs.service */ "./src/app/shared/services/tabs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var MainTabsComponent = /** @class */ (function () {
    function MainTabsComponent(tabService) {
        var _this = this;
        this.tabService = tabService;
        this.isHover = false;
        this.config = {
            suppressScrollX: false,
            suppressScrollY: true,
        };
        tabService.onTabActived
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(10))
            .subscribe(function (tab) {
            _this.selectTab(_this.tabs.find(function (x) { return x.tab.id === tab.id; }));
            _this.activeTabService = tab;
            _this.scrollToEnd();
        });
        tabService.onTabRemoved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(10)).subscribe(function () {
            _this.scrollToEnd();
        });
    }
    Object.defineProperty(MainTabsComponent.prototype, "activeTabIndex", {
        set: function (value) {
            this._activeTabIndex = value || 0;
            try {
                var items = this.tabs.toArray();
                this.selectTab(items[this._activeTabIndex]);
            }
            catch (e) { }
        },
        enumerable: false,
        configurable: true
    });
    MainTabsComponent.prototype.ngAfterContentInit = function () {
        this.setTabItems();
        this.scrollToEnd();
    };
    MainTabsComponent.prototype.trackBy = function (index, item) {
        return item.id;
    };
    MainTabsComponent.prototype.setTabItems = function () {
        var _this = this;
        this.tabItems$ = this.tabs.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.tabs.toArray(); }));
    };
    MainTabsComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.activeTab) {
            Promise.resolve().then(function () {
                _this.activeTab = _this.tabs.first;
            });
        }
    };
    MainTabsComponent.prototype.selectTab = function (tabItem) {
        if (this.activeTab === tabItem || !tabItem) {
            return;
        }
        if (this.activeTab) {
            this.activeTab.isActive = false;
        }
        this.activeTab = tabItem;
        tabItem.isActive = true;
    };
    MainTabsComponent.prototype.selectTabService = function (tabItem, e) {
        e.stopPropagation();
        this.tabService.activeTab(tabItem.tab);
    };
    MainTabsComponent.prototype.closeTab = function (tabItem, e) {
        e.stopPropagation();
        this.tabService.removeTab(tabItem.tab);
        this.setTabItems();
    };
    MainTabsComponent.prototype.scrollToEnd = function () {
        if (this.viewContainerRef) {
            var target = this.viewContainerRef
                .map(function (x) {
                if (x.element.nativeElement.classList.contains('active'))
                    return x.element.nativeElement;
            })
                .filter(Boolean)[0];
            if (target) {
                this.componentRef.directiveRef.scrollTo(target.offsetLeft - 100, 0, 500);
            }
            1;
        }
    };
    MainTabsComponent.ctorParameters = function () { return [
        { type: _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_4__["TabService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollframe', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainTabsComponent.prototype, "scrollFrame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MainTabsComponent.prototype, "fullWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MainTabsComponent.prototype, "activeTabIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], { static: false }),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"])
    ], MainTabsComponent.prototype, "componentRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_main_tab_item_main_tab_item_component__WEBPACK_IMPORTED_MODULE_1__["MainTabItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MainTabsComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tab', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MainTabsComponent.prototype, "viewContainerRef", void 0);
    MainTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tabs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/main-tabs/main-tabs.component.html")).default,
        }),
        __metadata("design:paramtypes", [_shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_4__["TabService"]])
    ], MainTabsComponent);
    return MainTabsComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/app-tab/tab/tab.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/app-tab/tab/tab.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2FwcC10YWIvdGFiL3RhYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/iot/components/app-tab/tab/tab.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/app-tab/tab/tab.component.ts ***!
  \*************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/tabs.service */ "./src/app/shared/services/tabs.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var TabComponent = /** @class */ (function () {
    function TabComponent(componentFactoryResolver, tabsService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.tabsService = tabsService;
        this.tabItems = [];
        this.tabsService.onTabAdded
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (tab) {
            _this.tabItems = __spreadArrays(_this.tabItems, [tab]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (tab) {
            var contents = _this.viewContainerRef.toArray();
            _this.renderBody(tab, contents[contents.length - 1]);
        }))
            .subscribe();
        this.tabsService.onTabRemoved.subscribe(function (tab) {
            _this.tabItems = _this.tabItems.filter(function (t) { return t.id !== tab.id; });
        });
    }
    TabComponent.prototype.ngAfterViewInit = function () { };
    TabComponent.prototype.trackBy = function (index, item) {
        return item.id;
    };
    TabComponent.prototype.renderBody = function (tab, content) {
        if (!tab.content) {
            return;
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(tab.content);
        this.contentRef = content.createComponent(factory);
        if (tab.params) {
            this.contentRef.instance.params = tab.params;
        }
        this.contentRef.changeDetectorRef.detectChanges();
    };
    TabComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: app_shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_1__["TabService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabComponent.prototype, "viewContainerRef", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/app-tab/tab/tab.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tab.component.scss */ "./src/app/iot/components/app-tab/tab/tab.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            app_shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_1__["TabService"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/blockly/blockly.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/blockly/blockly.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngx-blockly {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9ibG9ja2x5L2Jsb2NrbHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2Jsb2NrbHkvYmxvY2tseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2Jsb2NrbHkvYmxvY2tseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5neC1ibG9ja2x5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwibmd4LWJsb2NrbHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/iot/components/blockly/blockly.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/blockly/blockly.component.ts ***!
  \*************************************************************/
/*! exports provided: BlocklyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocklyComponent", function() { return BlocklyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlocklyComponent = /** @class */ (function () {
    function BlocklyComponent() {
        this.config = {
            toolbox: '<xml id="toolbox" style="display: none">' +
                '<block type="controls_if"></block>' +
                '<block type="controls_repeat_ext"></block>' +
                '<block type="logic_compare"></block>' +
                '<block type="math_number"></block>' +
                '<block type="math_arithmetic"></block>' +
                '<block type="text"></block>' +
                '<block type="text_print"></block>' +
                '</xml>',
            scrollbars: true,
            trashcan: true,
        };
    }
    BlocklyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockly',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blockly.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/blockly/blockly.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blockly.component.scss */ "./src/app/iot/components/blockly/blockly.component.scss")).default]
        })
    ], BlocklyComponent);
    return BlocklyComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/button/button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/iot/components/button/button.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.type = 'default';
        this.circle = false;
        this.disabled = false;
        this.loading = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "isLarge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "circle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "loading", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __importDefault(__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/button/button.component.html")).default,
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/iot/components/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.noPadding = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "noPadding", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/card/card.component.html")).default,
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/connection-status/connection-status.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/connection-status/connection-status.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConnectionStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatusComponent", function() { return ConnectionStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../active-streams/active-streams.component */ "./src/app/iot/components/active-streams/active-streams.component.ts");
/* harmony import */ var _shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/statusbar.service */ "./src/app/shared/services/statusbar.service.ts");
/* harmony import */ var _shared_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ConnectionStatusComponent = /** @class */ (function () {
    function ConnectionStatusComponent(dataService, modalService, statusbarService, navigatorService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.statusbarService = statusbarService;
        this.navigatorService = navigatorService;
        this.connected = null;
        this.content = 'Checking...';
        this.animationState = 'enter';
    }
    ConnectionStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.bridgeConnected$().subscribe(function (status) {
            if (_this.connected === status) {
                return;
            }
            _this.connected = status;
            _this.statusbarService.setStatus(status ? _shared_definitions__WEBPACK_IMPORTED_MODULE_6__["StatusbarStatus"].NORMAL : _shared_definitions__WEBPACK_IMPORTED_MODULE_6__["StatusbarStatus"].WARNING);
            _this.changeConnectionState(_this.connected);
        });
    };
    ConnectionStatusComponent.prototype.changeConnectionState = function (connected) {
        var _this = this;
        this.animationState = 'leave';
        setTimeout(function () {
            if (connected) {
                _this.content = 'Connected';
            }
            if (!connected) {
                _this.content = 'Offline';
            }
            _this.animationState = 'enter';
        }, 300);
    };
    ConnectionStatusComponent.prototype.showNetworkStatus = function () {
        this.modalService.open({
            title: 'Your network',
            content: _active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_4__["ActiveStreamsComponent"],
        });
    };
    Object.defineProperty(ConnectionStatusComponent.prototype, "wifiIcon", {
        get: function () {
            return this.content == 'Checking...'
                ? 'icon-network_check'
                : this.connected
                    ? 'icon-wifi'
                    : 'icon-wifi_off';
        },
        enumerable: false,
        configurable: true
    });
    ConnectionStatusComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
        { type: _shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__["StatusbarService"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_7__["NavigatorService"] }
    ]; };
    ConnectionStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connection-status',
            template: __importDefault(__webpack_require__(/*! raw-loader!./connection-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/connection-status/connection-status.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('showHide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
            _shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_5__["StatusbarService"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_7__["NavigatorService"]])
    ], ConnectionStatusComponent);
    return ConnectionStatusComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/csv-import-preview/csv-import-preview.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/csv-import-preview/csv-import-preview.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CSVImportPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVImportPreviewComponent", function() { return CSVImportPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CSVImportPreviewComponent = /** @class */ (function () {
    function CSVImportPreviewComponent() {
        this.fieldNames = [];
        this.include = [];
        this.dataTypes = [];
        this.skipRows = 1;
        this.contentPreview = null;
        this.contentTypeGuess = [];
        this.jobId = 0;
        this.linesProcessed = 0;
    }
    Object.defineProperty(CSVImportPreviewComponent.prototype, "inverseOfTranslation", {
        get: function () {
            if (!this.viewPort || !this.viewPort['_renderedContentOffset']) {
                return '-2px';
            }
            var offset = this.viewPort['_renderedContentOffset'];
            return "-" + (offset + 2) + "px";
        },
        enumerable: false,
        configurable: true
    });
    CSVImportPreviewComponent.prototype.scroll = function (index) {
        this.viewPort.scrollToIndex(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], { static: false }),
        __metadata("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"])
    ], CSVImportPreviewComponent.prototype, "viewPort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportPreviewComponent.prototype, "fieldNames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CSVImportPreviewComponent.prototype, "include", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportPreviewComponent.prototype, "dataTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportPreviewComponent.prototype, "skipRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportPreviewComponent.prototype, "contentPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CSVImportPreviewComponent.prototype, "contentTypeGuess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CSVImportPreviewComponent.prototype, "isImporting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CSVImportPreviewComponent.prototype, "jobId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CSVImportPreviewComponent.prototype, "linesProcessed", void 0);
    CSVImportPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-csv-import-preview',
            template: __importDefault(__webpack_require__(/*! raw-loader!./csv-import-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-preview/csv-import-preview.component.html")).default,
        })
    ], CSVImportPreviewComponent);
    return CSVImportPreviewComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CSVImportUploadboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVImportUploadboxComponent", function() { return CSVImportUploadboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CSVImportUploadboxComponent = /** @class */ (function () {
    function CSVImportUploadboxComponent() {
        this.removeFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
    }
    CSVImportUploadboxComponent.prototype.removeSelectedFile = function () {
        this.removeFile.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CSVImportUploadboxComponent.prototype, "removeFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CSVImportUploadboxComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportUploadboxComponent.prototype, "file", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportUploadboxComponent.prototype, "fileSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CSVImportUploadboxComponent.prototype, "rowsCount", void 0);
    CSVImportUploadboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-csv-import-uploadbox',
            template: __importDefault(__webpack_require__(/*! raw-loader!./csv-import-uploadbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.html")).default,
        })
    ], CSVImportUploadboxComponent);
    return CSVImportUploadboxComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/csv-import/csv-import.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/csv-import/csv-import.component.ts ***!
  \*******************************************************************/
/*! exports provided: CSVImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVImportComponent", function() { return CSVImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var _import_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import-tools */ "./src/app/iot/components/csv-import/import-tools.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils */ "./src/app/shared/utils.ts");
/* harmony import */ var _shared_services_import_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/import.service */ "./src/app/shared/services/import.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var _csv_import_preview_csv_import_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../csv-import-preview/csv-import-preview.component */ "./src/app/iot/components/csv-import-preview/csv-import-preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};











var CSVImportComponent = /** @class */ (function () {
    function CSVImportComponent(dataService, notification, importService, route) {
        var _this = this;
        this.dataService = dataService;
        this.notification = notification;
        this.importService = importService;
        this.route = route;
        this.params = {};
        this.loading = false;
        this.fieldNames = [];
        this.imei = '';
        this.name = '';
        this.include = [];
        this.dataTypes = [];
        this.skipRows = 1;
        this.contentPreview = null;
        this.contentTypeGuess = [];
        this.activeTabsIndex = 0;
        this.jobId = 0;
        this.linesProcessed = 0;
        this.importService.jobs.subscribe(function (result) {
            var pageJob = result.find(function (x) { return x.jobId == _this.jobId; });
            if (!pageJob) {
                return;
            }
            if (pageJob.status === _shared_definitions__WEBPACK_IMPORTED_MODULE_4__["ImportJobsStatus"].ACTIVE) {
                _this.isImporting = true;
                _this.linesProcessed = pageJob.linesProccessed;
            }
            else if (pageJob.status === _shared_definitions__WEBPACK_IMPORTED_MODULE_4__["ImportJobsStatus"].CANCELED) {
                _this.isImporting = false;
                _this.linesProcessed = pageJob.linesProccessed;
            }
            else if (pageJob.status === _shared_definitions__WEBPACK_IMPORTED_MODULE_4__["ImportJobsStatus"].FINISHED) {
                _this.isImporting = false;
                _this.linesProcessed = pageJob.totalLines;
            }
            _this.viewPort.scroll(_this.linesProcessed || 0);
        });
        this.route.params.subscribe(function (e) {
            _this.removeSelectedFile();
            if (_this.params && _this.params.file) {
                _this.fileChanged(_this.params.file);
            }
        });
    }
    CSVImportComponent.prototype.fileChanged = function (file) {
        var _this = this;
        this.file = file;
        this.loading = true;
        var fileReader = new FileReader();
        fileReader.onload = function () {
            var _a;
            var config = {
                header: false,
            };
            var text = fileReader.result.toString();
            var lines = papaparse__WEBPACK_IMPORTED_MODULE_1__["parse"](text, config).data;
            if (lines[lines.length - 1].length === 1) {
                lines.pop();
            }
            _this.contentPreview = lines;
            var _b = Object(_import_tools__WEBPACK_IMPORTED_MODULE_5__["detectCSVHeader"])(lines), items = _b.items, skipRows = _b.skipRows;
            _this.skipRows = skipRows;
            _this.fieldNames = items;
            _this.include = _this.fieldNames.map(function () { return true; });
            _this.contentTypeGuess = Object(_import_tools__WEBPACK_IMPORTED_MODULE_5__["detectDataType"])(_this.contentPreview);
            _this.dataTypes = _this.contentTypeGuess;
            _this.loading = false;
            _this.fileSize = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_6__["fileSize"])(_this.file.size);
            _this.rowsCount = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_6__["numberWithCommas"])(((_a = _this.contentPreview) === null || _a === void 0 ? void 0 : _a.length) - 1);
        };
        fileReader.readAsText(file);
    };
    Object.defineProperty(CSVImportComponent.prototype, "options", {
        get: function () {
            return {
                include: this.include,
                dataTypes: this.dataTypes,
                fieldNames: this.fieldNames,
                skipRows: this.skipRows,
                imei: this.imei,
                name: this.name,
            };
        },
        enumerable: false,
        configurable: true
    });
    CSVImportComponent.prototype.setDataType = function (i, event) {
        var _this = this;
        if (event.target.value == 'creationdate') {
            var count_1 = 0;
            this.dataTypes.forEach(function (x, i) {
                if (x == 'creationdate' && _this.include[i]) {
                    count_1++;
                }
            });
            if (count_1 > 0) {
                this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.doubleCreationDateError, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.doubleCreationDateErrorDescription);
                this.dataTypes = __spreadArrays(this.dataTypes);
            }
            else {
                this.dataTypes[i] = event.target.value;
            }
        }
        else {
            this.dataTypes[i] = event.target.value;
        }
    };
    CSVImportComponent.prototype.getDataType = function (i) {
        return this.dataTypes[i];
    };
    CSVImportComponent.prototype.toggleAllIncludes = function (e) {
        this.include = this.include.map(function () { return e.target.checked; });
    };
    /**
     * Check CreationDate before executing data
     */
    CSVImportComponent.prototype.checkDataTypes = function () {
        var count = 0, i = 0;
        for (var _i = 0, _a = this.dataTypes; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type === 'creationdate' && this.include[i]) {
                count++;
            }
            i++;
        }
        if (count === 0) {
            this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.missingCreationDateTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.missingCreationDateDescription);
            this.activeTabsIndex = 1;
            return false;
        }
        if (count > 1) {
            this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.moreThanOneTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.moreThanOneDescription);
            this.activeTabsIndex = 1;
            return false;
        }
        return true;
    };
    /**
     * Check include variable before executing data
     */
    CSVImportComponent.prototype.checkIncludes = function () {
        var count = 0;
        for (var _i = 0, _a = this.include; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                count++;
            }
        }
        if (count < 2) {
            this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.atLeastTwoColumnTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.atLeastTwoColumnDescription);
            this.activeTabsIndex = 1;
            return false;
        }
        return true;
    };
    /**
     * Check active fields name before executing data
     */
    CSVImportComponent.prototype.checkFieldsName = function () {
        var i = 0;
        for (var _i = 0, _a = this.fieldNames; _i < _a.length; _i++) {
            var type = _a[_i];
            if ((!type || type.length === 0) && this.include[i]) {
                this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.fieldNameMissingTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.fieldNameMissingDescription);
                this.activeTabsIndex = 1;
                return false;
            }
            i++;
        }
        return true;
    };
    CSVImportComponent.prototype.beginImport = function () {
        var _this = this;
        if (!this.checkFieldsName() ||
            !this.checkIncludes() ||
            !this.checkDataTypes()) {
            return;
        }
        this.dataService.importCSV(this.file, this.options).subscribe(function (result) {
            _this.jobId = result.data.jobId;
            if (_this.jobId !== 0) {
                _this.notification.showSuccessMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.startImportingTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.startImportingDescription);
            }
            else {
                _this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.unknownErrorTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].csvImport.unknownErrorDescription);
            }
        });
    };
    CSVImportComponent.prototype.removeSelectedFile = function () {
        this.file = undefined;
        this.loading = false;
        this.fieldNames = [];
        this.imei = '';
        this.name = '';
        this.include = [];
        this.dataTypes = [];
        this.skipRows = 1;
        this.contentPreview = null;
        this.contentTypeGuess = [];
    };
    CSVImportComponent.prototype.stopJob = function () {
        this.dataService.importStop(this.jobId).subscribe();
    };
    CSVImportComponent.prototype.ngOnDestroy = function () {
        this.statusSubscription && this.statusSubscription.unsubscribe();
    };
    CSVImportComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _shared_services_import_service__WEBPACK_IMPORTED_MODULE_7__["ImportService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_csv_import_preview_csv_import_preview_component__WEBPACK_IMPORTED_MODULE_10__["CSVImportPreviewComponent"], { static: false }),
        __metadata("design:type", _csv_import_preview_csv_import_preview_component__WEBPACK_IMPORTED_MODULE_10__["CSVImportPreviewComponent"])
    ], CSVImportComponent.prototype, "viewPort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CSVImportComponent.prototype, "params", void 0);
    CSVImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-csv-import',
            template: __importDefault(__webpack_require__(/*! raw-loader!./csv-import.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/csv-import/csv-import.component.html")).default,
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_services_import_service__WEBPACK_IMPORTED_MODULE_7__["ImportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], CSVImportComponent);
    return CSVImportComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/csv-import/import-tools.ts":
/*!***********************************************************!*\
  !*** ./src/app/iot/components/csv-import/import-tools.ts ***!
  \***********************************************************/
/*! exports provided: isDate, detectCSVHeader, isNumeric, detectDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCSVHeader", function() { return detectCSVHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectDataType", function() { return detectDataType; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function isDate(str) {
    // 20200927T0000
    if (!str) {
        return false;
    }
    if (str.match(/[0-9]{8}T[0-9]{4}/)) {
        return true;
    }
    if (!isNaN(Date.parse(str))) {
        return true;
    }
    return false;
}
/**
 * Gives the best guess for headers of a csv file (namess)
 */
function detectCSVHeader(rows) {
    var skipRows = 0;
    for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
        var row = rows_1[_i];
        if (row.length !== Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(row).length) {
            skipRows++;
            continue;
        }
        return { items: row, skipRows: skipRows };
    }
    return { items: rows[0], skipRows: skipRows };
}
function isNumeric(str) {
    if (typeof str !== 'string')
        return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}
/**
 * Detects the type of the data inside an array of csv string
 * as best guess. Send as many as rows you think is necessary
 */
function detectDataType(rows) {
    var lastRow = rows[rows.length - 1];
    var types = [];
    for (var _i = 0, lastRow_1 = lastRow; _i < lastRow_1.length; _i++) {
        var item = lastRow_1[_i];
        if (isNumeric(item)) {
            types.push('number');
            continue;
        }
        if (isDate(item)) {
            types.push('datetime');
            continue;
        }
        types.push('string');
    }
    return types;
}


/***/ }),

/***/ "./src/app/iot/components/dashboard/dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/dashboard/dashboard.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/iot/components/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_iot_components_csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/iot/components/csv-import/csv-import.component */ "./src/app/iot/components/csv-import/csv-import.component.ts");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.tabs = [];
        this.devices = [];
    }
    DashboardComponent.prototype.trackBy = function (index, item) {
        return item.id;
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.importCSV = function () {
        this.modalService
            .open({
            title: 'Import CSV',
            content: app_iot_components_csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_1__["CSVImportComponent"],
        })
            .subscribe();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/iot/components/dashboard/dashboard.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/database-configuration/database-configuration.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/iot/components/database-configuration/database-configuration.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2RhdGFiYXNlLWNvbmZpZ3VyYXRpb24vZGF0YWJhc2UtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/iot/components/database-configuration/database-configuration.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/iot/components/database-configuration/database-configuration.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatabaseConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseConfigurationComponent", function() { return DatabaseConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _locale_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var DatabaseConfigurationComponent = /** @class */ (function () {
    function DatabaseConfigurationComponent(dataService, notification) {
        this.dataService = dataService;
        this.notification = notification;
        this.subscriptions = [];
        this.AvailableVendors = [
            {
                value: 'mysql',
                label: 'MySQL',
            },
            {
                value: 'sqlite',
                label: 'SQLite',
            },
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            database: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.lines = [];
    }
    DatabaseConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getDataBaseInformation()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.form.patchValue(data);
        }))
            .subscribe();
    };
    DatabaseConfigurationComponent.prototype.submit = function () {
        var _this = this;
        this.dataService
            .postDatabaseConfiguration(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.res = res;
            if (res.error) {
                _this.notification.showFailedMessage(null, res.error.message);
            }
            else if (res.data) {
                _this.notification.showSuccessMessage(_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].general.success, _locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].database.configurationUpdated);
            }
        }))
            .subscribe();
    };
    DatabaseConfigurationComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .filter(Boolean)
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    DatabaseConfigurationComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
    ]; };
    DatabaseConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-database-configuration',
            template: __importDefault(__webpack_require__(/*! raw-loader!./database-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/database-configuration/database-configuration.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./database-configuration.component.scss */ "./src/app/iot/components/database-configuration/database-configuration.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], DatabaseConfigurationComponent);
    return DatabaseConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/dataflow/dataflow.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/dataflow/dataflow.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2RhdGFmbG93L2RhdGFmbG93LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/dataflow/dataflow.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/dataflow/dataflow.component.ts ***!
  \***************************************************************/
/*! exports provided: DataFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFlowComponent", function() { return DataFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DataFlowComponent = /** @class */ (function () {
    function DataFlowComponent(dataService) {
        this.dataService = dataService;
        this.devices = [];
        this.subscriptions = [];
    }
    DataFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Here you see the all devices in the app, with their complete information
        // subscribe to this for ever if you need device changes.
        this.subscriptions = [
            this.dataService
                .devices$()
                .subscribe(function (items) {
                _this.devices = items;
            }),
            this.dataService
                .realtimeMessage$()
                .subscribe(function (message) {
                _this.realtimeMessage = message;
            }),
        ];
    };
    DataFlowComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
    };
    DataFlowComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    DataFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dataflow',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dataflow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/dataflow/dataflow.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dataflow.component.scss */ "./src/app/iot/components/dataflow/dataflow.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DataFlowComponent);
    return DataFlowComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/device-single/device-single.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/iot/components/device-single/device-single.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2RldmljZS1zaW5nbGUvZGV2aWNlLXNpbmdsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/iot/components/device-single/device-single.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/iot/components/device-single/device-single.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeviceSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSingleComponent", function() { return DeviceSingleComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
/* harmony import */ var app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var devicePresets = [
    {
        value: 'custom',
        label: 'Custom device',
    },
    {
        value: 'temperature',
        label: 'General temperature',
    },
    {
        value: 'ovio_temperature',
        label: 'OVIO Temperature',
    },
];
var DeviceSingleComponent = /** @class */ (function () {
    function DeviceSingleComponent(dataService, notification, route, location, navigatorService) {
        this.dataService = dataService;
        this.notification = notification;
        this.route = route;
        this.location = location;
        this.navigatorService = navigatorService;
        this.subscriptions = [];
        this.devicePresets = devicePresets;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            preset: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            imei: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    DeviceSingleComponent.prototype.ngOnInit = function () {
        this.getDeviceHistory();
    };
    Object.defineProperty(DeviceSingleComponent.prototype, "descriptionLabel", {
        get: function () {
            return !this.form.value
                ? app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.createDescription
                : app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.updateDescription;
        },
        enumerable: false,
        configurable: true
    });
    DeviceSingleComponent.prototype.getDeviceHistory = function () {
        var _this = this;
        var id = +this.route.snapshot.params.device;
        if (!id) {
            return;
        }
        this.dataService
            .getDevice(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
            _this.res = res;
            _this.form.patchValue(res.data);
        }))
            .subscribe();
    };
    DeviceSingleComponent.prototype.submit = function () {
        var _this = this;
        var id = this.form.value.id;
        this.dataService
            .postDevice(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (res) {
            _this.res = res;
            if (res.error) {
                _this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.errorSubmit, res.error.message || app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.errorDescription);
            }
            else if (res.data) {
                _this.notification.showSuccessMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.submitUpdate, app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.submitDescription);
                if (id) {
                    _this.location.back();
                }
                else {
                    _this.navigatorService.openDevices();
                }
            }
        }))
            .subscribe();
    };
    DeviceSingleComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .filter(Boolean)
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    Object.defineProperty(DeviceSingleComponent.prototype, "submitLabel", {
        get: function () {
            return this.form.value.id
                ? app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.update
                : app_locale_translations__WEBPACK_IMPORTED_MODULE_4__["translations"].deviceForm.create;
        },
        enumerable: false,
        configurable: true
    });
    DeviceSingleComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] },
        { type: app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_5__["NavigatorService"] }
    ]; };
    DeviceSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-single',
            template: __importDefault(__webpack_require__(/*! raw-loader!./device-single.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-single/device-single.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./device-single.component.scss */ "./src/app/iot/components/device-single/device-single.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
            app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_5__["NavigatorService"]])
    ], DeviceSingleComponent);
    return DeviceSingleComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/device-view/device-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/iot/components/device-view/device-view.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep app-form-date input {\n  max-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9kZXZpY2Utdmlldy9kZXZpY2Utdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW90L2NvbXBvbmVudHMvZGV2aWNlLXZpZXcvZGV2aWNlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxnQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvaW90L2NvbXBvbmVudHMvZGV2aWNlLXZpZXcvZGV2aWNlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuOjpuZy1kZWVwIHtcbiAgYXBwLWZvcm0tZGF0ZSB7XG4gICAgaW5wdXQge1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjo6bmctZGVlcCBhcHAtZm9ybS1kYXRlIGlucHV0IHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/device-view/device-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/device-view/device-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: extractColumnsFromDevice, DeviceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractColumnsFromDevice", function() { return extractColumnsFromDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceViewComponent", function() { return DeviceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../ipc-helpers/definitions */ "./ipc-helpers/definitions.ts");
/* harmony import */ var _am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../am-chart/am-chart.component */ "./src/app/iot/components/am-chart/am-chart.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











function extractColumnsFromDevice(device) {
    return Object.keys(device.dataHistory[0].data);
}
var DeviceViewComponent = /** @class */ (function () {
    function DeviceViewComponent(dataService, notificationService, navigatorService) {
        this.dataService = dataService;
        this.notificationService = notificationService;
        this.navigatorService = navigatorService;
        this.selectedSubData = '';
        this.params = {};
        this.historyView = [];
        this.pagination = {
            offset: 0,
            limit: 20,
        };
        this.date_range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["ColumnMode"];
        this.subscriptions = [];
        this.isInvalidDate = this.isInvalidDate.bind(this);
    }
    Object.defineProperty(DeviceViewComponent.prototype, "beginYear", {
        get: function () {
            return new Date(this.$device.firstMessage.message_original_creation).getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceViewComponent.prototype, "endYear", {
        get: function () {
            return new Date(this.$device.lastMessage.message_original_creation).getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceViewComponent.prototype, "device", {
        get: function () {
            return this.$device;
        },
        set: function (device) {
            this.$device = device;
            this.historyView = (this.$device.dataHistory || []).map(function (item) {
                return __assign(__assign({}, item), { message_original_creation: moment__WEBPACK_IMPORTED_MODULE_3__(item.message_original_creation).format('YYYY-MM-DD HH:mm') });
            });
            if (this.$device.dataHistory) {
                this.tableColumns = extractColumnsFromDevice(this.$device);
            }
        },
        enumerable: false,
        configurable: true
    });
    DeviceViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDeviceHistory();
        this.date_range.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.getDeviceHistory();
        }))
            .subscribe();
    };
    DeviceViewComponent.prototype.buildDeviceQuery = function () {
        var date = this.date_range.value || { startDate: null, endDate: null };
        var options = {
            start: moment__WEBPACK_IMPORTED_MODULE_3__(date.startDate).toISOString(),
            end: moment__WEBPACK_IMPORTED_MODULE_3__(date.endDate).toISOString(),
            limit: this.pagination.limit,
            offset: this.pagination.offset,
        };
        if (!options.start) {
            delete options.start;
        }
        if (!options.end) {
            delete options.end;
        }
        return options;
    };
    DeviceViewComponent.prototype.setPage = function (_a) {
        var offset = _a.offset, pageSize = _a.pageSize;
        this.pagination = {
            limit: pageSize,
            offset: offset * pageSize,
        };
        this.getDeviceHistory();
    };
    DeviceViewComponent.prototype.getDeviceHistory = function () {
        var _this = this;
        var id = this.params.id;
        this.dataService
            .getDevice(id, this.buildDeviceQuery())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.res = res;
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (device) {
            if (!device) {
                _this.notificationService.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].deviceView.noData, app_locale_translations__WEBPACK_IMPORTED_MODULE_9__["translations"].deviceView.noDataForThisRange);
                return;
            }
            _this.device = device;
            _this.drawChartFromDataHistory(device);
        }))
            .subscribe();
    };
    DeviceViewComponent.prototype.drawChartFromDataHistory = function (device, columnIndex) {
        if (columnIndex === void 0) { columnIndex = 0; }
        if (!this.chartView ||
            !device.dataHistory ||
            device.dataHistory.length === 0) {
            return;
        }
        this.chartView.reset();
        var columns = Object.keys(device.dataHistory[0].data);
        var column = columns[columnIndex];
        this.selectedSubData = column;
        var chartData = [];
        for (var _i = 0, _a = device.dataHistory; _i < _a.length; _i++) {
            var item = _a[_i];
            var value = item.data[column];
            chartData.push({
                date: item.message_original_creation,
                name: column,
                value: value && !isNaN(value) ? value : 0,
            });
        }
        this.chartView.addData(chartData);
    };
    Object.defineProperty(DeviceViewComponent.prototype, "minDate", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this.device.firstMessage.message_original_creation).startOf('day');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceViewComponent.prototype, "maxDate", {
        get: function () {
            return moment__WEBPACK_IMPORTED_MODULE_3__(this.device.lastMessage.message_original_creation).endOf('day');
        },
        enumerable: false,
        configurable: true
    });
    DeviceViewComponent.prototype.isInvalidDate = function (date) {
        if (!this.device || !this.device.firstMessage) {
            return false;
        }
        if (date.isSameOrAfter(this.minDate) && date.isSameOrBefore(this.maxDate)) {
            return false;
        }
        return true;
    };
    DeviceViewComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
    };
    DeviceViewComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_10__["NavigatorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeviceViewComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_6__["DeviceRichInformation"]),
        __metadata("design:paramtypes", [_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_6__["DeviceRichInformation"]])
    ], DeviceViewComponent.prototype, "device", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartView', { static: false }),
        __metadata("design:type", _am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_7__["AmChartComponent"])
    ], DeviceViewComponent.prototype, "chartView", void 0);
    DeviceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./device-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/device-view/device-view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./device-view.component.scss */ "./src/app/iot/components/device-view/device-view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_10__["NavigatorService"]])
    ], DeviceViewComponent);
    return DeviceViewComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/devices/devices.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/devices/devices.component.ts ***!
  \*************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(dataService, navigatorService) {
        this.dataService = dataService;
        this.navigatorService = navigatorService;
        this.devices = [];
        this.subscriptions = [];
        this.loading = true;
        this.page = {
            count: 10,
            offset: 0,
            limit: 10,
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["SelectionType"];
    }
    DevicesComponent.prototype.onActivate = function (event) {
        event.type === 'click' && event.cellElement && event.cellElement.blur();
    };
    DevicesComponent.prototype.select = function (event) {
        var _this = this;
        if (event.type === 'click') {
            setTimeout(function () {
                _this.navigatorService.openViewDeviceTab(event.row);
            }, 0);
        }
    };
    DevicesComponent.prototype.setPage = function (event) { };
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions = [
            this.dataService
                .getDevices()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
                _this.res = res;
                _this.page = {
                    count: res.data.totalItems,
                    offset: res.data.pageIndex,
                    limit: res.data.itemsPerPage,
                };
                _this.devices = _this.res.data.items;
                _this.loading = false;
            }))
                .subscribe(),
        ];
    };
    DevicesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub && sub.unsubscribe(); });
    };
    DevicesComponent.prototype.readData = function (device) {
        return Object.keys(device.data).map(function (key) {
            return key + ": " + device.data[key];
        });
    };
    DevicesComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }
    ]; };
    DevicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devices',
            template: __importDefault(__webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/devices/devices.component.html")).default,
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/file-upload/file-upload.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/file-upload/file-upload.component.ts ***!
  \*********************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.windowUploader = false;
    }
    FileUploadComponent.prototype.uploader = function () {
        var file = this.fileuploader.nativeElement.files[0];
        this.uploadHandler(file);
    };
    FileUploadComponent.prototype.uploadHandler = function (file) {
        this.file = file;
        this.upload.emit(file);
    };
    FileUploadComponent.prototype.eventHandler = function (e) {
        var ele = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - ele.left;
        var y = e.clientY - ele.top;
        switch (e.type) {
            case 'dragover':
                e.preventDefault();
                break;
            case 'dragenter':
                e.preventDefault();
                this.windowUploader = true;
                break;
            case 'dragleave':
                if (x >= ele.width || y >= ele.height || x < 0 || y < 0) {
                    this.windowUploader = false;
                }
                break;
        }
    };
    FileUploadComponent.prototype.setToFileUploader = function (e) {
        e.preventDefault();
        this.windowUploader = false;
        this.uploadHandler(e.dataTransfer.files[0]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "upload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FileUploadComponent.prototype, "fileuploader", void 0);
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/file-upload/file-upload.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/form-controls/FormBaseComponent.ts":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/form-controls/FormBaseComponent.ts ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_VALUE_ACCESSOR, FormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VALUE_ACCESSOR", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBaseComponent", function() { return FormBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var response_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! response-type */ "./node_modules/response-type/lib/index.js");
/* harmony import */ var response_type__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(response_type__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FormBaseComponent; }),
    multi: true,
};
var FormBaseComponent = /** @class */ (function () {
    function FormBaseComponent() {
        this.class = 'form-group';
        this.field = null;
        this.label = null;
        this.type = 'text';
        this.autofocus = false;
        this.edit = true;
        this.optional = true;
        this.placeholder = '';
        this.value = null;
        this.resp = null;
        this.error = response_type__WEBPACK_IMPORTED_MODULE_1__["FieldError"];
        this.onChange = function (delta) { };
    }
    Object.defineProperty(FormBaseComponent.prototype, "submit", {
        set: function (value) {
            var _this = this;
            // Code for adding shake class :)
            if (!value) {
                return;
            }
            var err = Object(response_type__WEBPACK_IMPORTED_MODULE_1__["FieldError"])(value, this.field);
            if (this.class.indexOf('shake-horizontal') === -1 && err) {
                this.class += ' shake-horizontal';
                setTimeout(function () {
                    _this.class = _this.class.replace('shake-horizontal', ' ');
                }, 500);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormBaseComponent.prototype, "res", {
        set: function (value) {
            this.resp = value;
        },
        enumerable: false,
        configurable: true
    });
    FormBaseComponent.prototype.onInput = function (value) {
        this.onChange(value);
    };
    FormBaseComponent.prototype.writeValue = function (value) {
        if (!value && value !== false) {
            return;
        }
        this.value = value;
    };
    FormBaseComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FormBaseComponent.prototype.registerOnTouched = function (fn) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "autofocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "optional", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormBaseComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FormBaseComponent.prototype, "submit", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FormBaseComponent.prototype, "res", null);
    FormBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        }),
        __metadata("design:paramtypes", [])
    ], FormBaseComponent);
    return FormBaseComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/form-controls/day-picker/day-picker.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/day-picker/day-picker.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".days-container,\n.months-container {\n  margin: 30px auto;\n  border-top: 1px solid #cfd8dc;\n  border-left: 1px solid #cfd8dc;\n}\n.days-container .day-item,\n.days-container .month-item,\n.months-container .day-item,\n.months-container .month-item {\n  background-color: transparent;\n  height: 55px;\n  display: inline-block;\n  border: 1px solid #cfd8dc;\n  border-left: none;\n  border-top: none;\n  text-align: center;\n  line-height: 55px;\n  width: 10%;\n  transition: 0.3s background-color ease-in-out;\n}\n.days-container .day-item .short-name,\n.days-container .month-item .short-name,\n.months-container .day-item .short-name,\n.months-container .month-item .short-name {\n  display: none;\n}\n@media (max-width: 570px) {\n  .days-container .day-item,\n.days-container .month-item,\n.months-container .day-item,\n.months-container .month-item {\n    line-height: 45px;\n    height: 45px;\n  }\n  .days-container .day-item .short-name,\n.days-container .month-item .short-name,\n.months-container .day-item .short-name,\n.months-container .month-item .short-name {\n    display: inline;\n  }\n  .days-container .day-item .long-name,\n.days-container .month-item .long-name,\n.months-container .day-item .long-name,\n.months-container .month-item .long-name {\n    display: none;\n  }\n}\n.days-container .day-item:hover,\n.days-container .month-item:hover,\n.months-container .day-item:hover,\n.months-container .month-item:hover {\n  background-color: #b3e5fc;\n}\n.days-container .day-item.active,\n.days-container .month-item.active,\n.months-container .day-item.active,\n.months-container .month-item.active {\n  background-color: #80deea;\n  color: #006064;\n  font-weight: bold;\n}\n.days-container .day-item:focus,\n.days-container .month-item:focus,\n.months-container .day-item:focus,\n.months-container .month-item:focus {\n  outline: 5px auto #40c4ff;\n}\n.days-container .month-item,\n.months-container .month-item {\n  width: 20%;\n}\n.preset-highlight-end-of-month .day-number-30,\n.preset-highlight-end-of-month .day-number-29,\n.preset-highlight-end-of-month .day-number-31 {\n  background-color: #fff8e1;\n  color: #ff6f00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2RheS1waWNrZXIvZGF5LXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW90L2NvbXBvbmVudHMvZm9ybS1jb250cm9scy9kYXktcGlja2VyL2RheS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBRUUsaUJBQUE7RUFDQSw2QkFMTztFQU1QLDhCQU5PO0FDS1Q7QURHRTs7OztFQUVFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBYks7RUFjTCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUF1QkEsNkNBQUE7QUNyQko7QURBSTs7OztFQUNFLGFBQUE7QUNLTjtBREZJO0VBaEJGOzs7O0lBaUJJLGlCQUFBO0lBQ0EsWUFBQTtFQ1FKO0VEUEk7Ozs7SUFDRSxlQUFBO0VDWU47RURWSTs7OztJQUNFLGFBQUE7RUNlTjtBQUNGO0FESkk7Ozs7RUFDRSx5QkFBQTtBQ1NOO0FETkk7Ozs7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1dOO0FEUkk7Ozs7RUFDRSx5QkFBQTtBQ2FOO0FEVEU7O0VBQ0UsVUFBQTtBQ1lKO0FEUEU7OztFQUdFLHlCQUFBO0VBQ0EsY0FBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvaW90L2NvbXBvbmVudHMvZm9ybS1jb250cm9scy9kYXktcGlja2VyL2RheS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYm9yZGVyOiAxcHggc29saWQgI2NmZDhkYztcblxuLmRheXMtY29udGFpbmVyLFxuLm1vbnRocy1jb250YWluZXIge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYm9yZGVyLXRvcDogJGJvcmRlcjtcbiAgYm9yZGVyLWxlZnQ6ICRib3JkZXI7XG5cbiAgLmRheS1pdGVtLFxuICAubW9udGgtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6ICRib3JkZXI7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgd2lkdGg6IDEwJTtcblxuICAgIC5zaG9ydC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgIGhlaWdodDogNDVweDtcbiAgICAgIC5zaG9ydC1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgICAgLmxvbmctbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQGluY2x1ZGUgcGhvbmUtbWluaSgpIHtcbiAgICAvLyAgIHdpZHRoOiAyMCU7XG4gICAgLy8gICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAvLyAgIGhlaWdodDogNDBweDtcbiAgICAvLyB9XG5cbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2U1ZmM7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwZGVlYTtcbiAgICAgIGNvbG9yOiAjMDA2MDY0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiA1cHggYXV0byAjNDBjNGZmO1xuICAgIH1cbiAgfVxuXG4gIC5tb250aC1pdGVtIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbi5wcmVzZXQtaGlnaGxpZ2h0LWVuZC1vZi1tb250aCB7XG4gIC5kYXktbnVtYmVyLTMwLFxuICAuZGF5LW51bWJlci0yOSxcbiAgLmRheS1udW1iZXItMzEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XG4gICAgY29sb3I6ICNmZjZmMDA7XG4gIH1cbn1cbiIsIi5kYXlzLWNvbnRhaW5lcixcbi5tb250aHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2ZkOGRjO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZmQ4ZGM7XG59XG4uZGF5cy1jb250YWluZXIgLmRheS1pdGVtLFxuLmRheXMtY29udGFpbmVyIC5tb250aC1pdGVtLFxuLm1vbnRocy1jb250YWluZXIgLmRheS1pdGVtLFxuLm1vbnRocy1jb250YWluZXIgLm1vbnRoLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmQ4ZGM7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogMTAlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbi1vdXQ7XG59XG4uZGF5cy1jb250YWluZXIgLmRheS1pdGVtIC5zaG9ydC1uYW1lLFxuLmRheXMtY29udGFpbmVyIC5tb250aC1pdGVtIC5zaG9ydC1uYW1lLFxuLm1vbnRocy1jb250YWluZXIgLmRheS1pdGVtIC5zaG9ydC1uYW1lLFxuLm1vbnRocy1jb250YWluZXIgLm1vbnRoLWl0ZW0gLnNob3J0LW5hbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3MHB4KSB7XG4gIC5kYXlzLWNvbnRhaW5lciAuZGF5LWl0ZW0sXG4uZGF5cy1jb250YWluZXIgLm1vbnRoLWl0ZW0sXG4ubW9udGhzLWNvbnRhaW5lciAuZGF5LWl0ZW0sXG4ubW9udGhzLWNvbnRhaW5lciAubW9udGgtaXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG4gIC5kYXlzLWNvbnRhaW5lciAuZGF5LWl0ZW0gLnNob3J0LW5hbWUsXG4uZGF5cy1jb250YWluZXIgLm1vbnRoLWl0ZW0gLnNob3J0LW5hbWUsXG4ubW9udGhzLWNvbnRhaW5lciAuZGF5LWl0ZW0gLnNob3J0LW5hbWUsXG4ubW9udGhzLWNvbnRhaW5lciAubW9udGgtaXRlbSAuc2hvcnQtbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5kYXlzLWNvbnRhaW5lciAuZGF5LWl0ZW0gLmxvbmctbmFtZSxcbi5kYXlzLWNvbnRhaW5lciAubW9udGgtaXRlbSAubG9uZy1uYW1lLFxuLm1vbnRocy1jb250YWluZXIgLmRheS1pdGVtIC5sb25nLW5hbWUsXG4ubW9udGhzLWNvbnRhaW5lciAubW9udGgtaXRlbSAubG9uZy1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uZGF5cy1jb250YWluZXIgLmRheS1pdGVtOmhvdmVyLFxuLmRheXMtY29udGFpbmVyIC5tb250aC1pdGVtOmhvdmVyLFxuLm1vbnRocy1jb250YWluZXIgLmRheS1pdGVtOmhvdmVyLFxuLm1vbnRocy1jb250YWluZXIgLm1vbnRoLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNWZjO1xufVxuLmRheXMtY29udGFpbmVyIC5kYXktaXRlbS5hY3RpdmUsXG4uZGF5cy1jb250YWluZXIgLm1vbnRoLWl0ZW0uYWN0aXZlLFxuLm1vbnRocy1jb250YWluZXIgLmRheS1pdGVtLmFjdGl2ZSxcbi5tb250aHMtY29udGFpbmVyIC5tb250aC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGRlZWE7XG4gIGNvbG9yOiAjMDA2MDY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kYXlzLWNvbnRhaW5lciAuZGF5LWl0ZW06Zm9jdXMsXG4uZGF5cy1jb250YWluZXIgLm1vbnRoLWl0ZW06Zm9jdXMsXG4ubW9udGhzLWNvbnRhaW5lciAuZGF5LWl0ZW06Zm9jdXMsXG4ubW9udGhzLWNvbnRhaW5lciAubW9udGgtaXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IDVweCBhdXRvICM0MGM0ZmY7XG59XG4uZGF5cy1jb250YWluZXIgLm1vbnRoLWl0ZW0sXG4ubW9udGhzLWNvbnRhaW5lciAubW9udGgtaXRlbSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5wcmVzZXQtaGlnaGxpZ2h0LWVuZC1vZi1tb250aCAuZGF5LW51bWJlci0zMCxcbi5wcmVzZXQtaGlnaGxpZ2h0LWVuZC1vZi1tb250aCAuZGF5LW51bWJlci0yOSxcbi5wcmVzZXQtaGlnaGxpZ2h0LWVuZC1vZi1tb250aCAuZGF5LW51bWJlci0zMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XG4gIGNvbG9yOiAjZmY2ZjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/iot/components/form-controls/day-picker/day-picker.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/day-picker/day-picker.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DayPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return DayPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var response_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! response-type */ "./node_modules/response-type/lib/index.js");
/* harmony import */ var response_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(response_type__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var months = [
    {
        label: 'January',
        shortLabel: 'Jan',
        id: 1,
    },
    {
        label: 'February',
        shortLabel: 'Feb',
        id: 2,
    },
    {
        label: 'March',
        shortLabel: 'Mar',
        id: 3,
    },
    {
        label: 'April',
        shortLabel: 'Apr',
        id: 4,
    },
    {
        label: 'May',
        shortLabel: 'Ma',
        id: 5,
    },
    {
        label: 'June',
        shortLabel: 'Jun',
        id: 6,
    },
    {
        label: 'July',
        shortLabel: 'Jul',
        id: 7,
    },
    {
        label: 'August',
        shortLabel: 'Aug',
        id: 8,
    },
    {
        label: 'September',
        shortLabel: 'Sep',
        id: 9,
    },
    {
        label: 'October',
        shortLabel: 'Oct',
        id: 10,
    },
    {
        label: 'November',
        shortLabel: 'Nov',
        id: 11,
    },
    {
        label: 'December',
        shortLabel: 'Dec',
        id: 12,
    },
];
var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent() {
        this.params = {
            day: 1,
            month: 1,
            selectMonth: false,
        };
        this.error = response_type__WEBPACK_IMPORTED_MODULE_4__["FieldError"];
        this.days = Array.from(new Array(31)).map(function (t, index) { return index + 1; });
        this.months = months;
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.subscribe = null;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1),
        });
    }
    DayPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.form.valueChanges.subscribe(function (data) {
            _this.data.next(data);
        });
    };
    DayPickerComponent.prototype.pushResult = function () {
        // This function will be replaced by basemodal
    };
    DayPickerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            if (_this.params.day) {
                _this.form.patchValue({
                    day: _this.params.day,
                    month: _this.params.month,
                });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return _this.buttons.toArray()[_this.form.value.day - 1].nativeElement.focus();
        }))
            .subscribe();
    };
    DayPickerComponent.prototype.ngOnDestroy = function () {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    };
    DayPickerComponent.prototype.dayButtonDBLClick = function (day) {
        this.form.patchValue({ day: day });
        this.pushResult();
    };
    DayPickerComponent.prototype.dayButtonClick = function (day, event) {
        var isByKeyboardEnter = event.detail === 0;
        if (day === this.form.value.day && isByKeyboardEnter) {
            this.pushResult();
        }
        this.form.patchValue({ day: day });
    };
    DayPickerComponent.prototype.monthButtonClick = function (month, event) {
        var isByKeyboardEnter = event.detail === 0;
        if (month === this.form.value.month && isByKeyboardEnter) {
            this.pushResult();
        }
        this.form.patchValue({ month: month });
    };
    DayPickerComponent.prototype.monthButtonDBLClick = function (month) {
        this.form.patchValue({ month: month });
        this.pushResult();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('dayButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DayPickerComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DayPickerComponent.prototype, "params", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"])
    ], DayPickerComponent.prototype, "data", void 0);
    DayPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngd-day-picker',
            template: __importDefault(__webpack_require__(/*! raw-loader!./day-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/day-picker/day-picker.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./day-picker.component.scss */ "./src/app/iot/components/form-controls/day-picker/day-picker.component.scss")).default]
        })
    ], DayPickerComponent);
    return DayPickerComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/form-controls/form-date/form-date.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/form-date/form-date.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n}\n\n.input-value {\n  font-size: 20px;\n  color: #2196f3;\n}\n\n.day-month-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.date-lable-input {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2Zvcm0tZGF0ZS9mb3JtLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2Zvcm0tY29udHJvbHMvZm9ybS1kYXRlL2Zvcm0tZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9pb3QvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2Zvcm0tZGF0ZS9mb3JtLWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuLmRheS1tb250aC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXRlLWxhYmxlLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5kYXktbW9udGgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0ZS1sYWJsZS1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/form-controls/form-date/form-date.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/form-date/form-date.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DEFAULT_VALUE_ACCESSOR, FormDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VALUE_ACCESSOR", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDateComponent", function() { return FormDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormBaseComponent */ "./src/app/iot/components/form-controls/FormBaseComponent.ts");
/* harmony import */ var _day_picker_day_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../day-picker/day-picker.component */ "./src/app/iot/components/form-controls/day-picker/day-picker.component.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _shared_services_common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/common.functions */ "./src/app/shared/services/common.functions.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FormDateComponent; }),
    multi: true,
};
function getNumberWithOrdinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
var FormDateComponent = /** @class */ (function (_super) {
    __extends(FormDateComponent, _super);
    function FormDateComponent(modal) {
        var _this = _super.call(this) || this;
        _this.modal = modal;
        _this.isMobile = false;
        _this.type = 'date';
        _this.selectMonth = false;
        _this.ranges = {
            Today: [moment__WEBPACK_IMPORTED_MODULE_6__(), moment__WEBPACK_IMPORTED_MODULE_6__()],
            Yesterday: [moment__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'days')],
            'Last 7 Days': [moment__WEBPACK_IMPORTED_MODULE_6__().subtract(6, 'days'), moment__WEBPACK_IMPORTED_MODULE_6__()],
            'Last 30 Days': [moment__WEBPACK_IMPORTED_MODULE_6__().subtract(29, 'days'), moment__WEBPACK_IMPORTED_MODULE_6__()],
            'This Month': [moment__WEBPACK_IMPORTED_MODULE_6__().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_6__().endOf('month')],
            'Last Month': [
                moment__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'month').startOf('month'),
                moment__WEBPACK_IMPORTED_MODULE_6__().subtract(1, 'month').endOf('month'),
            ],
        };
        _this.isInvalidDate = function (date) {
            return false;
        };
        return _this;
    }
    FormDateComponent.prototype.ngOnInit = function () {
        this.isMobile = Object(_shared_services_common_functions__WEBPACK_IMPORTED_MODULE_5__["IsMobile"])();
    };
    FormDateComponent.prototype.onNativeInput = function (value) {
        this.onChange({
            startDate: moment__WEBPACK_IMPORTED_MODULE_6__(value).toDate(),
            endDate: moment__WEBPACK_IMPORTED_MODULE_6__(value).toDate(),
        });
    };
    FormDateComponent.prototype.showDate = function (value) {
        if (!value) {
            return '';
        }
        if (typeof value === 'string') {
            return value;
        }
        if (value.startDate &&
            value.endDate &&
            "" + value.startDate === "" + value.endDate) {
            return moment__WEBPACK_IMPORTED_MODULE_6__(value.startDate).format('YYYY-MM-DD');
        }
        return moment__WEBPACK_IMPORTED_MODULE_6__(value.startDate).format('YYYY-MM-DD') + " - " + moment__WEBPACK_IMPORTED_MODULE_6__(value.endDate).format('YYYY-MM-DD');
    };
    FormDateComponent.prototype.writeValue = function (value) {
        if (this.isMobile && this.type === 'date') {
            this.value = moment__WEBPACK_IMPORTED_MODULE_6__(value.startDate).format('YYYY-MM-DD');
            return;
        }
        this.value = value;
    };
    FormDateComponent.prototype.openSelectDateModal = function () {
        var _this = this;
        var value = this.value || { day: 1, month: 1 };
        this.modal
            .open({
            content: _day_picker_day_picker_component__WEBPACK_IMPORTED_MODULE_3__["DayPickerComponent"],
            title: 'Select date',
            params: {
                day: value.day,
                month: value.month,
                selectMonth: this.selectMonth,
            },
        })
            .subscribe(function (result) {
            if (result.type === 'CONFIRMED') {
                _this.writeValue(result.data);
                _this.onInput(result.data);
            }
        });
    };
    FormDateComponent.prototype.dayLabel = function (value) {
        if (this.selectMonth) {
            return _shared_services_common_functions__WEBPACK_IMPORTED_MODULE_5__["monthNames"][value.month - 1] + " " + getNumberWithOrdinal(value.day);
        }
        return getNumberWithOrdinal(value.day);
    };
    FormDateComponent.ctorParameters = function () { return [
        { type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormDateComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDateComponent.prototype, "selectMonth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDateComponent.prototype, "minDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDateComponent.prototype, "maxDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDateComponent.prototype, "isInvalidDate", void 0);
    FormDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-date',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form-date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-date/form-date.component.html")).default,
            providers: [DEFAULT_VALUE_ACCESSOR],
            styles: [__importDefault(__webpack_require__(/*! ./form-date.component.scss */ "./src/app/iot/components/form-controls/form-date/form-date.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
    ], FormDateComponent);
    return FormDateComponent;
}(_FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/iot/components/form-controls/form-select/form-select.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/form-select/form-select.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-value {\n  font-size: 20px;\n  color: #2196f3;\n}\n\n.select-placeholder {\n  font-size: 12px;\n  margin-top: 5px;\n  color: #2196f3;\n}\n\n.input-label {\n  padding-bottom: 0.3rem;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pb3QvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaW90L2NvbXBvbmVudHMvZm9ybS1jb250cm9scy9mb3JtLXNlbGVjdC9mb3JtLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiIsIi5pbnB1dC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICMyMTk2ZjM7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/form-controls/form-select/form-select.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/form-select/form-select.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FormSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectComponent", function() { return FormSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormBaseComponent */ "./src/app/iot/components/form-controls/FormBaseComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FormSelectComponent; }),
    multi: true,
};
var FormSelectComponent = /** @class */ (function (_super) {
    __extends(FormSelectComponent, _super);
    function FormSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    FormSelectComponent.prototype.itemValue = function (itemId) {
        var item = this.items.find(function (t) { return t.value === itemId; });
        if (item) {
            return item.label;
        }
        return null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "items", void 0);
    FormSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-select',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-select/form-select.component.html")).default,
            providers: [DEFAULT_VALUE_ACCESSOR],
            styles: [__importDefault(__webpack_require__(/*! ./form-select.component.scss */ "./src/app/iot/components/form-controls/form-select/form-select.component.scss")).default]
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}(_FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/iot/components/form-controls/form-text/form-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/form-text/form-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTextComponent", function() { return FormTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormBaseComponent */ "./src/app/iot/components/form-controls/FormBaseComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return FormTextComponent; }),
    multi: true,
};
var FormTextComponent = /** @class */ (function (_super) {
    __extends(FormTextComponent, _super);
    function FormTextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-text',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form-text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/form-text/form-text.component.html")).default,
            providers: [DEFAULT_VALUE_ACCESSOR],
        })
    ], FormTextComponent);
    return FormTextComponent;
}(_FormBaseComponent__WEBPACK_IMPORTED_MODULE_2__["FormBaseComponent"]));



/***/ }),

/***/ "./src/app/iot/components/form-controls/optional-label/optional-label.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/iot/components/form-controls/optional-label/optional-label.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OptionalLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalLabelComponent", function() { return OptionalLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var OptionalLabelComponent = /** @class */ (function () {
    function OptionalLabelComponent() {
        this.optional = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OptionalLabelComponent.prototype, "optional", void 0);
    OptionalLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-optional-label',
            template: __importDefault(__webpack_require__(/*! raw-loader!./optional-label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/form-controls/optional-label/optional-label.component.html")).default,
        })
    ], OptionalLabelComponent);
    return OptionalLabelComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/gauge-chart/gauge-chart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/iot/components/gauge-chart/gauge-chart.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2dhdWdlLWNoYXJ0L2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/gauge-chart/gauge-chart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/gauge-chart/gauge-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: GaugeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeChartComponent", function() { return GaugeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// amCharts imports




var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.min = 0;
        this.max = 100;
        this.divId = "doc-" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["random"])(111111, 9999999);
    }
    // Run the function only in the browser
    GaugeChartComponent.prototype.browserOnly = function (f) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                f();
            });
        }
    };
    GaugeChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(100).subscribe(function () {
            _this.drawChart();
        });
    };
    GaugeChartComponent.prototype.drawChart = function () {
        var _this = this;
        // Chart code goes in here
        this.browserOnly(function () {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"](_this.divId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.innerRadius = -25;
            var axis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
            axis.min = _this.min;
            axis.max = _this.max;
            axis.strictMinMax = true;
            axis.renderer.grid.template.stroke = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor('background');
            axis.renderer.grid.template.strokeOpacity = 0.3;
            var colorSet = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["ColorSet"]();
            if (!_this.ranges || _this.ranges.length === 0) {
                var range0 = axis.axisRanges.create();
                range0.value = _this.min;
                range0.endValue = _this.max;
                range0.axisFill.fillOpacity = 1;
                range0.axisFill.fill = colorSet.getIndex(0);
                range0.axisFill.zIndex = -1;
            }
            if (_this.ranges) {
                _this.ranges.forEach(function (range, i) {
                    var newRange = axis.axisRanges.create();
                    newRange.value = range.value;
                    newRange.endValue = range.endValue;
                    newRange.axisFill.fillOpacity = 1;
                    newRange.axisFill.fill = range.color
                        ? _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](range.color)
                        : colorSet.getIndex(i);
                    newRange.axisFill.zIndex = -1;
                });
            }
            _this.hand = chart.hands.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ClockHand"]());
            _this.chart = chart;
        });
    };
    GaugeChartComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // Clean up chart when the component is removed
        this.browserOnly(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    GaugeChartComponent.prototype.addData = function (value) {
        if (!this.chart) {
            return;
        }
        this.hand.showValue(value, 500, _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["ease"].cubicOut);
    };
    GaugeChartComponent.prototype.reset = function () {
        this.chart.removeData(this.chart.data.length);
    };
    GaugeChartComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeChartComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GaugeChartComponent.prototype, "ranges", void 0);
    GaugeChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gauge-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./gauge-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/gauge-chart/gauge-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./gauge-chart.component.scss */ "./src/app/iot/components/gauge-chart/gauge-chart.component.scss")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GaugeChartComponent);
    return GaugeChartComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/heatmap/heatmap.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/heatmap/heatmap.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngx-blockly {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9oZWF0bWFwL2hlYXRtYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2hlYXRtYXAvaGVhdG1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2hlYXRtYXAvaGVhdG1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5neC1ibG9ja2x5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwibmd4LWJsb2NrbHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/iot/components/heatmap/heatmap.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/heatmap/heatmap.component.ts ***!
  \*************************************************************/
/*! exports provided: HeatmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapComponent", function() { return HeatmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heatmap.helper */ "./src/app/iot/components/heatmap/heatmap.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent(dataService) {
        this.dataService = dataService;
        this.deviceId = 0;
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.deviceYearDayStat(this.deviceId).subscribe(function (res) {
            _this.initData(_this.beginYear, _this.endYear + 1, res.data.items.map(function (t) {
                return {
                    count: t.count,
                    date: parseInt(t.date.replace(/-/g, ''), 10),
                };
            }));
        });
    };
    HeatmapComponent.prototype.initData = function (beginYear, lastYear, json) {
        var svg = d3
            .select('.calender-map')
            .selectAll('svg')
            .data(d3.range(beginYear, lastYear))
            .enter()
            .append('svg')
            .attr('width', '100%')
            .attr('data-height', '0.5678')
            .attr('viewBox', '0 0 900 105')
            .attr('class', 'RdYlGn')
            .append('g')
            .attr('transform', 'translate(' +
            (_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["width"] - _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] * 53) / 2 +
            ',' +
            (_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["height"] - _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] * 7 - 1) +
            ')');
        svg
            .append('text')
            .attr('transform', 'translate(-38,' + _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] * 3.5 + ')rotate(-90)')
            .style('text-anchor', 'middle')
            .text(function (d) {
            return d;
        });
        for (var i = 0; i < 7; i++) {
            svg
                .append('text')
                .attr('transform', 'translate(-5,' + _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] * (i + 1) + ')')
                .style('text-anchor', 'end')
                .attr('dy', '-.25em')
                .text(function (d) {
                return _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["week_days"][i];
            });
        }
        var rect = svg
            .selectAll('.day')
            .data(function (d) {
            return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1));
        })
            .enter()
            .append('rect')
            .attr('class', 'day')
            .attr('width', _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"])
            .attr('height', _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"])
            .attr('x', function (d) {
            return Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["week"])(d) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"];
        })
            .attr('y', function (d) {
            return Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["day"])(d) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"];
        })
            .attr('fill', '#fff')
            .datum(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["format"]);
        var legend = svg
            .selectAll('.legend')
            .data(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["month"])
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function (d, i) {
            return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
        });
        legend
            .append('text')
            .attr('class', function (d, i) {
            return _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["month"][i];
        })
            .style('text-anchor', 'end')
            .attr('dy', '-.25em')
            .text(function (d, i) {
            return _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["month"][i];
        });
        svg
            .selectAll('.month')
            .data(function (d) {
            return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1));
        })
            .enter()
            .append('path')
            .attr('class', 'month')
            .attr('id', function (d, i) {
            return _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["month"][i];
        })
            .attr('d', monthPath);
        var count_Max = d3.max(json, function (d) {
            return d.count;
        });
        var data = d3
            .nest()
            .key(function (d) {
            return d.date;
        })
            .rollup(function (d) {
            return Math.sqrt(d[0].count / count_Max);
        })
            .map(json);
        rect
            .filter(function (d) {
            return d in data;
        })
            .attr('fill', function (d) {
            return Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["color"])(data[d]);
        })
            .attr('data-title', function (d) {
            return 'value : ' + Math.round(data[d] * 100);
        });
    };
    HeatmapComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeatmapComponent.prototype, "deviceId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeatmapComponent.prototype, "beginYear", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeatmapComponent.prototype, "endYear", void 0);
    HeatmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heatmap',
            template: __importDefault(__webpack_require__(/*! raw-loader!./heatmap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/heatmap/heatmap.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./heatmap.component.scss */ "./src/app/iot/components/heatmap/heatmap.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeatmapComponent);
    return HeatmapComponent;
}());

function monthPath(t0) {
    var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0), d0 = +Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["day"])(t0), w0 = +Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["week"])(t0), d1 = +Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["day"])(t1), w1 = +Object(_heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["week"])(t1);
    return ('M' +
        (w0 + 1) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        ',' +
        d0 * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'H' +
        w0 * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'V' +
        7 * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'H' +
        w1 * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'V' +
        (d1 + 1) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'H' +
        (w1 + 1) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'V' +
        0 +
        'H' +
        (w0 + 1) * _heatmap_helper__WEBPACK_IMPORTED_MODULE_2__["cellSize"] +
        'Z');
}


/***/ }),

/***/ "./src/app/iot/components/heatmap/heatmap.helper.ts":
/*!**********************************************************!*\
  !*** ./src/app/iot/components/heatmap/heatmap.helper.ts ***!
  \**********************************************************/
/*! exports provided: width, height, cellSize, week_days, month, day, week, format, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellSize", function() { return cellSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "week_days", function() { return week_days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "week", function() { return week; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
var width = 900, height = 105, cellSize = 12;
var week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
var day = d3.time.format('%w'), week = d3.time.format('%U'), format = d3.time.format('%Y%m%d');
var color = d3.scale
    .linear()
    .range(['white', '#002b53'])
    .domain([0, 1]);


/***/ }),

/***/ "./src/app/iot/components/host-server/host-server.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/iot/components/host-server/host-server.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL2hvc3Qtc2VydmVyL2hvc3Qtc2VydmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/host-server/host-server.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/host-server/host-server.component.ts ***!
  \*********************************************************************/
/*! exports provided: HostServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostServerComponent", function() { return HostServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_ipc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/ipc.service */ "./src/app/shared/services/ipc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HostServerComponent = /** @class */ (function () {
    function HostServerComponent(ipcService) {
        this.ipcService = ipcService;
    }
    HostServerComponent.prototype.promptInstallServer = function () {
        this.ipcService.requestInstall();
    };
    HostServerComponent.prototype.promptUninstallServer = function () {
        this.ipcService.requestUninstall();
    };
    HostServerComponent.ctorParameters = function () { return [
        { type: app_shared_services_ipc_service__WEBPACK_IMPORTED_MODULE_1__["IPCService"] }
    ]; };
    HostServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host-server',
            template: __importDefault(__webpack_require__(/*! raw-loader!./host-server.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/host-server/host-server.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./host-server.component.scss */ "./src/app/iot/components/host-server/host-server.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_ipc_service__WEBPACK_IMPORTED_MODULE_1__["IPCService"]])
    ], HostServerComponent);
    return HostServerComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/layout/layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/layout/layout.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".layout-wrapper {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: 100vh;\n}\n.layout-wrapper .outlet-wrapper {\n  display: flex;\n  flex: 1;\n  padding: 15px;\n  padding-bottom: 0;\n  position: relative;\n}\n.layout-wrapper .outlet-wrapper .full-window-uploader {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(43, 120, 254, 0.29);\n  z-index: 99999999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pb3QvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvaW90L2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLm91dGxldC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmZ1bGwtd2luZG93LXVwbG9hZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig0MyAxMjAgMjU0IC8gMjklKTtcbiAgICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xuICAgIH1cbiAgfVxufVxuIiwiLmxheW91dC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxheW91dC13cmFwcGVyIC5vdXRsZXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGF5b3V0LXdyYXBwZXIgLm91dGxldC13cmFwcGVyIC5mdWxsLXdpbmRvdy11cGxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQzLCAxMjAsIDI1NCwgMC4yOSk7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/iot/components/layout/layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/iot/components/layout/layout.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(navigatorService) {
        this.navigatorService = navigatorService;
        this.windowUploader = false;
        this.files = [];
    }
    LayoutComponent.prototype.uploadHandler = function () {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.navigatorService.openImportCSVTab(file);
        }
    };
    LayoutComponent.prototype.eventHandler = function (e) {
        var ele = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - ele.left;
        var y = e.clientY - ele.top;
        switch (e.type) {
            case 'dragover':
                e.preventDefault();
                break;
            case 'dragenter':
                e.preventDefault();
                this.windowUploader = true;
                break;
            case 'dragleave':
                if (x >= ele.width || y >= ele.height || x < 0 || y < 0) {
                    this.windowUploader = false;
                }
                break;
        }
    };
    LayoutComponent.prototype.setToFileUploader = function (e) {
        e.preventDefault();
        this.windowUploader = false;
        this.files = e.dataTransfer.files;
        this.uploadHandler();
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayoutComponent.prototype, "fileuploader", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/layout/layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./layout.component.scss */ "./src/app/iot/components/layout/layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/loading/loading.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/loading/loading.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.options = {
            path: '/assets/animations/working-on.json',
        };
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/loading/loading.component.html")).default,
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/main-tab/main-tab.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/main-tab/main-tab.component.ts ***!
  \***************************************************************/
/*! exports provided: MainTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabComponent", function() { return MainTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/tabs.service */ "./src/app/shared/services/tabs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MainTabComponent = /** @class */ (function () {
    function MainTabComponent(tabService) {
        this.tabService = tabService;
        this.tabs = [];
    }
    MainTabComponent.prototype.keyEvent = function (event) {
        var $event = document.all ? window.event : event;
        if (/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
            return;
        }
        if (event.keyCode == _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].RIGHT_ARROW) {
            this.tabService.nextTab();
        }
        if (event.keyCode == _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].LEFT_ARROW) {
            this.tabService.prevTab();
        }
        if (event.keyCode == _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].ESCAPE) {
            this.tabService.removeActiveTab();
        }
        if ((event.keyCode >= _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].ONE && event.keyCode <= _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].NINE) ||
            (event.keyCode >= _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].PAD_ONE && event.keyCode <= _shared_definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].PAD_NINE)) {
            this.tabService.activeTabById(+event.key - 1);
        }
    };
    MainTabComponent.prototype.ngOnInit = function () { };
    MainTabComponent.ctorParameters = function () { return [
        { type: _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tab', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MainTabComponent.prototype, "viewContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MainTabComponent.prototype, "keyEvent", null);
    MainTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tab',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/main-tab/main-tab.component.html")).default,
        }),
        __metadata("design:paramtypes", [_shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_2__["TabService"]])
    ], MainTabComponent);
    return MainTabComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/main-tab/main-tab.router.ts":
/*!************************************************************!*\
  !*** ./src/app/iot/components/main-tab/main-tab.router.ts ***!
  \************************************************************/
/*! exports provided: tabRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabRoutes", function() { return tabRoutes; });
/* harmony import */ var _realtime_messages_chart_realtime_messages_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../realtime-messages-chart/realtime-messages-chart.component */ "./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.ts");
/* harmony import */ var _dataflow_dataflow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataflow/dataflow.component */ "./src/app/iot/components/dataflow/dataflow.component.ts");
/* harmony import */ var _csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../csv-import/csv-import.component */ "./src/app/iot/components/csv-import/csv-import.component.ts");
/* harmony import */ var _welcome_tab_welcome_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome-tab/welcome-tab.component */ "./src/app/iot/components/welcome-tab/welcome-tab.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices/devices.component */ "./src/app/iot/components/devices/devices.component.ts");
/* harmony import */ var _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../realtime/realtime.component */ "./src/app/iot/components/realtime/realtime.component.ts");
/* harmony import */ var _device_view_device_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../device-view/device-view.component */ "./src/app/iot/components/device-view/device-view.component.ts");
/* harmony import */ var _active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../active-streams/active-streams.component */ "./src/app/iot/components/active-streams/active-streams.component.ts");
/* harmony import */ var _serial_monitor_serial_monitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../serial-monitor/serial-monitor.component */ "./src/app/iot/components/serial-monitor/serial-monitor.component.ts");
/* harmony import */ var _open_port_open_port_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../open-port/open-port.component */ "./src/app/iot/components/open-port/open-port.component.ts");
/* harmony import */ var _database_configuration_database_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../database-configuration/database-configuration.component */ "./src/app/iot/components/database-configuration/database-configuration.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../settings/settings.component */ "./src/app/iot/components/settings/settings.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../router */ "./src/app/router.ts");
/* harmony import */ var _blockly_blockly_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../blockly/blockly.component */ "./src/app/iot/components/blockly/blockly.component.ts");
/* harmony import */ var _device_single_device_single_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../device-single/device-single.component */ "./src/app/iot/components/device-single/device-single.component.ts");















var tabRoutes = [
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].messageCountGraph,
        component: _realtime_messages_chart_realtime_messages_chart_component__WEBPACK_IMPORTED_MODULE_0__["RealtimeMessagesChartComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].logicBuilding,
        component: _blockly_blockly_component__WEBPACK_IMPORTED_MODULE_13__["BlocklyComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].deviceEdit,
        component: _device_single_device_single_component__WEBPACK_IMPORTED_MODULE_14__["DeviceSingleComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].deviceNew,
        component: _device_single_device_single_component__WEBPACK_IMPORTED_MODULE_14__["DeviceSingleComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].dataCapture,
        component: _dataflow_dataflow_component__WEBPACK_IMPORTED_MODULE_1__["DataFlowComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].settings,
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].realtime,
        component: _realtime_realtime_component__WEBPACK_IMPORTED_MODULE_5__["RealtimeComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].activeStreams,
        component: _active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_7__["ActiveStreamsComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].serialMonitoring,
        component: _serial_monitor_serial_monitor_component__WEBPACK_IMPORTED_MODULE_8__["SerialMonitorComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].openPort,
        component: _open_port_open_port_component__WEBPACK_IMPORTED_MODULE_9__["OpenPortComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].database,
        component: _database_configuration_database_configuration_component__WEBPACK_IMPORTED_MODULE_10__["DatabaseConfigurationComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].importCsv,
        component: _csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_2__["CSVImportComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].importCsvSingle,
        component: _csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_2__["CSVImportComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].deviceView,
        component: _device_view_device_view_component__WEBPACK_IMPORTED_MODULE_6__["DeviceViewComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].welcome,
        component: _welcome_tab_welcome_tab_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeTabComponent"],
    },
    {
        path: _router__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"].devices,
        component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_4__["DevicesComponent"],
    },
];


/***/ }),

/***/ "./src/app/iot/components/navbar/navbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/iot/components/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_visualization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/visualization.service */ "./src/app/shared/services/visualization.service.ts");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(visualizationService, navigatorService) {
        this.visualizationService = visualizationService;
        this.navigatorService = navigatorService;
    }
    NavbarComponent.prototype.keyEvent = function (event) {
        var $event = document.all ? window.event : event;
        if (/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
            return;
        }
        if (event.key === 'n') {
            this.addButtonClick();
        }
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    /**
     * Use it for adding few elements
     */
    NavbarComponent.prototype.addButtonClick = function () {
        this.visualizationService.promptAddVisualization();
    };
    NavbarComponent.prototype.openDevicesTab = function () {
        this.navigatorService.openDevices();
    };
    NavbarComponent.prototype.openCSVImport = function () {
        this.navigatorService.openImportCSVTab();
    };
    NavbarComponent.prototype.openRealtimeTab = function () {
        this.navigatorService.openRealtimeTab();
    };
    NavbarComponent.prototype.openPortTab = function () {
        this.navigatorService.openPort();
    };
    NavbarComponent.prototype.openNewDevice = function () {
        this.navigatorService.openNewDevice();
    };
    NavbarComponent.prototype.openDatabaseConfig = function () {
        this.navigatorService.openDatabaseConfig();
    };
    NavbarComponent.prototype.logicBuilding = function () {
        this.navigatorService.openLogicBuilding();
    };
    NavbarComponent.prototype.showSettings = function () {
        this.navigatorService.openSettings();
    };
    NavbarComponent.prototype.listenToPort = function () {
        this.navigatorService.openPort();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: app_shared_services_visualization_service__WEBPACK_IMPORTED_MODULE_1__["VisualizationService"] },
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "keyEvent", null);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/navbar/navbar.component.html")).default,
        }),
        __metadata("design:paramtypes", [app_shared_services_visualization_service__WEBPACK_IMPORTED_MODULE_1__["VisualizationService"],
            app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/open-port/open-port.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/open-port/open-port.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL29wZW4tcG9ydC9vcGVuLXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/iot/components/open-port/open-port.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/open-port/open-port.component.ts ***!
  \*****************************************************************/
/*! exports provided: OpenPortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenPortComponent", function() { return OpenPortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var OpenPortComponent = /** @class */ (function () {
    function OpenPortComponent(dataService, notification) {
        this.dataService = dataService;
        this.notification = notification;
        this.subscriptions = [];
        this.AvailablePorts = [
            {
                value: 'serialport',
                label: 'Serial Port',
            },
            {
                value: 'udp',
                label: 'UDP',
            },
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('serialport'),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](23000),
            path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            baudRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.lines = [];
    }
    OpenPortComponent.prototype.ngOnInit = function () { };
    OpenPortComponent.prototype.submit = function () {
        var _this = this;
        this.dataService
            .postActivePort(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.res = res;
            if (res.error) {
                _this.notification.showFailedMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].openPort.errorTitle, res.error.message || app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].openPort.errorDescription);
            }
            else if (res.data) {
                _this.notification.showSuccessMessage(app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].openPort.openSuccessTitle, app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].openPort.openSuccessDescription);
            }
        }))
            .subscribe();
    };
    OpenPortComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .filter(Boolean)
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    OpenPortComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
    ]; };
    OpenPortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-port',
            template: __importDefault(__webpack_require__(/*! raw-loader!./open-port.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/open-port/open-port.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./open-port.component.scss */ "./src/app/iot/components/open-port/open-port.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], OpenPortComponent);
    return OpenPortComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/progress-bar-list/progress-bar-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/iot/components/progress-bar-list/progress-bar-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-bar-list {\n  height: 100%;\n  padding: 0.2rem 1rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin: 1rem 0;\n}\n.progress-bar-list .progress-bar-item-wrapper {\n  display: flex;\n  align-items: center;\n}\n.progress-bar-list .progress-bar-item-wrapper .progress-bar {\n  display: flex;\n  flex: 1;\n  background: rgba(43, 120, 254, 0.5);\n  min-width: 200px;\n  height: 10px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n.progress-bar-list .progress-bar-item-wrapper .progress-bar .progress {\n  display: inline-block;\n  width: 80%;\n  border-radius: 2px;\n  background-color: rgba(43, 120, 254, 0.7);\n  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);\n  background-size: 35px 35px;\n  -webkit-animation: cssProgressActive 1s linear infinite;\n          animation: cssProgressActive 1s linear infinite;\n  transition: width 0.2s;\n}\n.progress-bar-list .progress-bar-item-wrapper .pause-tasks,\n.progress-bar-list .progress-bar-item-wrapper .stop-tasks {\n  background: transparent;\n  border: 0;\n  border-radius: 50%;\n  margin: 0;\n  outline: none;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0 0.1rem;\n}\n.progress-bar-list .progress-bar-item-wrapper .pause-tasks:hover,\n.progress-bar-list .progress-bar-item-wrapper .stop-tasks:hover {\n  opacity: 0.8;\n}\n.progress-bar-list .progress-bar-item-wrapper .pause-tasks:disabled,\n.progress-bar-list .progress-bar-item-wrapper .stop-tasks:disabled {\n  opacity: 0.4;\n}\n.progress-bar-list .progress-bar-item-wrapper .stop-tasks > i {\n  display: inline-block;\n  transform: rotate(45deg);\n}\n.progress-bar-list .progress-title {\n  font-size: 0.8rem;\n  position: relative;\n  margin-bottom: 0.6rem;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9wcm9ncmVzcy1iYXItbGlzdC9wcm9ncmVzcy1iYXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW90L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyLWxpc3QvcHJvZ3Jlc3MtYmFyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RGO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREFNO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1NQUFBO0VBVUEsMEJBQUE7RUFDQSx1REFBQTtVQUFBLCtDQUFBO0VBQ0Esc0JBQUE7QUNQUjtBRFVJOztFQUVFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUk47QURTTTs7RUFDRSxZQUFBO0FDTlI7QURRTTs7RUFDRSxZQUFBO0FDTFI7QURTTTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNQUjtBRFlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci1saXN0L3Byb2dyZXNzLWJhci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5wcm9ncmVzcy1iYXItbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMC4ycmVtIDFyZW0gMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDFyZW0gMDtcbiAgLnByb2dyZXNzLWJhci1pdGVtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkcHJpbWFyeUNvbG9yLCAwLjUpO1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHByaW1hcnlDb2xvciwgMC43KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIC00NWRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMjUlLFxuICAgICAgICAgIHRyYW5zcGFyZW50IDI1JSxcbiAgICAgICAgICB0cmFuc3BhcmVudCA1MCUsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDUwJSxcbiAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgNzUlLFxuICAgICAgICAgIHRyYW5zcGFyZW50IDc1JSxcbiAgICAgICAgICB0cmFuc3BhcmVudFxuICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHggMzVweDtcbiAgICAgICAgYW5pbWF0aW9uOiBjc3NQcm9ncmVzc0FjdGl2ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG4gICAgICB9XG4gICAgfVxuICAgIC5wYXVzZS10YXNrcyxcbiAgICAuc3RvcC10YXNrcyB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiAwIDAuMXJlbTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgfVxuICAgIH1cbiAgICAuc3RvcC10YXNrcyB7XG4gICAgICA+IGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvZ3Jlc3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuIiwiLnByb2dyZXNzLWJhci1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjJyZW0gMXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLnByb2dyZXNzLWJhci1saXN0IC5wcm9ncmVzcy1iYXItaXRlbS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9ncmVzcy1iYXItbGlzdCAucHJvZ3Jlc3MtYmFyLWl0ZW0td3JhcHBlciAucHJvZ3Jlc3MtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgMTIwLCAyNTQsIDAuNSk7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wcm9ncmVzcy1iYXItbGlzdCAucHJvZ3Jlc3MtYmFyLWl0ZW0td3JhcHBlciAucHJvZ3Jlc3MtYmFyIC5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCAxMjAsIDI1NCwgMC43KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDM1cHggMzVweDtcbiAgYW5pbWF0aW9uOiBjc3NQcm9ncmVzc0FjdGl2ZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG4ucHJvZ3Jlc3MtYmFyLWxpc3QgLnByb2dyZXNzLWJhci1pdGVtLXdyYXBwZXIgLnBhdXNlLXRhc2tzLFxuLnByb2dyZXNzLWJhci1saXN0IC5wcm9ncmVzcy1iYXItaXRlbS13cmFwcGVyIC5zdG9wLXRhc2tzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwIDAuMXJlbTtcbn1cbi5wcm9ncmVzcy1iYXItbGlzdCAucHJvZ3Jlc3MtYmFyLWl0ZW0td3JhcHBlciAucGF1c2UtdGFza3M6aG92ZXIsXG4ucHJvZ3Jlc3MtYmFyLWxpc3QgLnByb2dyZXNzLWJhci1pdGVtLXdyYXBwZXIgLnN0b3AtdGFza3M6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4ucHJvZ3Jlc3MtYmFyLWxpc3QgLnByb2dyZXNzLWJhci1pdGVtLXdyYXBwZXIgLnBhdXNlLXRhc2tzOmRpc2FibGVkLFxuLnByb2dyZXNzLWJhci1saXN0IC5wcm9ncmVzcy1iYXItaXRlbS13cmFwcGVyIC5zdG9wLXRhc2tzOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLnByb2dyZXNzLWJhci1saXN0IC5wcm9ncmVzcy1iYXItaXRlbS13cmFwcGVyIC5zdG9wLXRhc2tzID4gaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnByb2dyZXNzLWJhci1saXN0IC5wcm9ncmVzcy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/progress-bar-list/progress-bar-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/iot/components/progress-bar-list/progress-bar-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgressBarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarListComponent", function() { return ProgressBarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/progress-bar.service */ "./src/app/shared/services/progress-bar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProgressBarListComponent = /** @class */ (function () {
    function ProgressBarListComponent(progressBarService) {
        var _this = this;
        this.progressBarService = progressBarService;
        this.progressBars = [];
        progressBarService.progressBar.subscribe(function (result) {
            _this.progressBars = result;
        });
    }
    ProgressBarListComponent.prototype.ngOnInit = function () { };
    ProgressBarListComponent.ctorParameters = function () { return [
        { type: _shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"] }
    ]; };
    ProgressBarListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-bar-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./progress-bar-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar-list/progress-bar-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./progress-bar-list.component.scss */ "./src/app/iot/components/progress-bar-list/progress-bar-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"]])
    ], ProgressBarListComponent);
    return ProgressBarListComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/progress-bar/progress-bar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/iot/components/progress-bar/progress-bar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/progress-bar.service */ "./src/app/shared/services/progress-bar.service.ts");
/* harmony import */ var _shared_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var _progress_bar_list_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-bar-list/progress-bar-list.component */ "./src/app/iot/components/progress-bar-list/progress-bar-list.component.ts");
/* harmony import */ var app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _shared_services_import_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/import.service */ "./src/app/shared/services/import.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(progressBarService, modalService, importService) {
        var _this = this;
        this.progressBarService = progressBarService;
        this.modalService = modalService;
        this.importService = importService;
        this.progressBars = [];
        progressBarService.progressBar.subscribe(function (progressBars) {
            _this.progressBars = progressBars;
            _this.title =
                _this.progressBars.length === 1
                    ? _this.progressBars[0].title
                    : _this.progressBars.length + ' tasks are running...';
            _this.precentage = _this.progressBars.reduce(function (avg, value, _, _a) {
                var length = _a.length;
                return avg + value.precentage / length;
            }, 0);
        });
    }
    ProgressBarComponent.prototype.ngOnInit = function () { };
    ProgressBarComponent.prototype.showAllProgressBars = function () {
        this.modalService.open({
            title: 'Running Tasks',
            content: _progress_bar_list_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarListComponent"],
            type: _shared_definitions__WEBPACK_IMPORTED_MODULE_2__["ModalDialogType"].NOTIFY,
        });
    };
    ProgressBarComponent.prototype.stopAllProgresses = function () {
        this.progressBars.forEach(function (e) {
            e.stopFunction();
        });
    };
    ProgressBarComponent.ctorParameters = function () { return [
        { type: _shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"] },
        { type: app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _shared_services_import_service__WEBPACK_IMPORTED_MODULE_5__["ImportService"] }
    ]; };
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-bar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/progress-bar/progress-bar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_shared_services_progress_bar_service__WEBPACK_IMPORTED_MODULE_1__["ProgressBarService"],
            app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _shared_services_import_service__WEBPACK_IMPORTED_MODULE_5__["ImportService"]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 992px) {\n  .gauge-chart-wrapper {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9yZWFsdGltZS1tZXNzYWdlcy1jaGFydC9yZWFsdGltZS1tZXNzYWdlcy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW90L2NvbXBvbmVudHMvcmVhbHRpbWUtbWVzc2FnZXMtY2hhcnQvcmVhbHRpbWUtbWVzc2FnZXMtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3JlYWx0aW1lLW1lc3NhZ2VzLWNoYXJ0L3JlYWx0aW1lLW1lc3NhZ2VzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5nYXVnZS1jaGFydC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG4iLCJAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmdhdWdlLWNoYXJ0LXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RealtimeMessagesChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeMessagesChartComponent", function() { return RealtimeMessagesChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../am-chart/am-chart.component */ "./src/app/iot/components/am-chart/am-chart.component.ts");
/* harmony import */ var _gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gauge-chart/gauge-chart.component */ "./src/app/iot/components/gauge-chart/gauge-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RealtimeMessagesChartComponent = /** @class */ (function () {
    function RealtimeMessagesChartComponent(dataService) {
        this.dataService = dataService;
        this.current = 0;
        this.gaugeRange = [
            {
                value: 0,
                endValue: 50,
            },
            {
                value: 50,
                endValue: 70,
            },
            {
                value: 70,
                endValue: 100,
            },
        ];
    }
    RealtimeMessagesChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var count = 0;
        this.dataService.realtimeMessage$().subscribe(function () {
            count++;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).subscribe(function () {
            _this.chartView.addData([
                {
                    date: new Date(),
                    name: 'data',
                    value: count,
                },
            ]);
            _this.gaugeChartView.addData(_this.current);
            _this.current = count;
            count = 0;
        });
    };
    RealtimeMessagesChartComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chartView', { static: false }),
        __metadata("design:type", _am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_3__["AmChartComponent"])
    ], RealtimeMessagesChartComponent.prototype, "chartView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gaugeChartView', { static: false }),
        __metadata("design:type", _gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_4__["GaugeChartComponent"])
    ], RealtimeMessagesChartComponent.prototype, "gaugeChartView", void 0);
    RealtimeMessagesChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-realtime-messages-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./realtime-messages-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./realtime-messages-chart.component.scss */ "./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RealtimeMessagesChartComponent);
    return RealtimeMessagesChartComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/realtime/realtime.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/realtime/realtime.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3JlYWx0aW1lL3JlYWx0aW1lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/realtime/realtime.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/realtime/realtime.component.ts ***!
  \***************************************************************/
/*! exports provided: RealtimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeComponent", function() { return RealtimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RealtimeComponent = /** @class */ (function () {
    function RealtimeComponent() {
    }
    RealtimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-realtime',
            template: __importDefault(__webpack_require__(/*! raw-loader!./realtime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/realtime/realtime.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./realtime.component.scss */ "./src/app/iot/components/realtime/realtime.component.scss")).default]
        })
    ], RealtimeComponent);
    return RealtimeComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/select-visualization-list/select-visualization-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/iot/components/select-visualization-list/select-visualization-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelectVisualiztionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVisualiztionComponent", function() { return SelectVisualiztionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SelectVisualiztionComponent = /** @class */ (function () {
    function SelectVisualiztionComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    SelectVisualiztionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.availableVisualisionTypes$().subscribe(function (items) {
            _this.items = items;
            var enabledItems = _this.items.filter(function (item) { return !item.disabled; });
            if (enabledItems.length === 1) {
                _this.data.next(enabledItems[0]);
            }
        });
    };
    SelectVisualiztionComponent.prototype.selectItem = function (item) {
        if (item.disabled) {
            return;
        }
        this.data.next(item);
    };
    SelectVisualiztionComponent.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    SelectVisualiztionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-visualization-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./select-visualization-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/select-visualization-list/select-visualization-list.component.html")).default,
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SelectVisualiztionComponent);
    return SelectVisualiztionComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/serial-monitor/serial-monitor.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/iot/components/serial-monitor/serial-monitor.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3NlcmlhbC1tb25pdG9yL3NlcmlhbC1tb25pdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/serial-monitor/serial-monitor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/iot/components/serial-monitor/serial-monitor.component.ts ***!
  \***************************************************************************/
/*! exports provided: SerialMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialMonitorComponent", function() { return SerialMonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_services_stream_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/stream.service */ "./src/app/shared/services/stream.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SerialMonitorComponent = /** @class */ (function () {
    function SerialMonitorComponent(dataService, route, streamService) {
        this.dataService = dataService;
        this.route = route;
        this.streamService = streamService;
        this.activeStreams = [];
        this.subscriptions = [];
        this.serialPorts = [];
        this.lines = [];
    }
    SerialMonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = decodeURIComponent(this.route.snapshot.params.port);
        this.dataService.observeSerialPort(path).subscribe();
        this.streamService.serialDataStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (content) { return content.path === path; }))
            .subscribe(function (content) {
            _this.lines.unshift(content.data);
        });
    };
    SerialMonitorComponent.prototype.ngOnDestroy = function () {
        this.subscriptions
            .filter(Boolean)
            .forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    SerialMonitorComponent.ctorParameters = function () { return [
        { type: _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: app_shared_services_stream_service__WEBPACK_IMPORTED_MODULE_2__["StreamService"] }
    ]; };
    SerialMonitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serial-monitor',
            template: __importDefault(__webpack_require__(/*! raw-loader!./serial-monitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/serial-monitor/serial-monitor.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./serial-monitor.component.scss */ "./src/app/iot/components/serial-monitor/serial-monitor.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_shared_services_stream_service__WEBPACK_IMPORTED_MODULE_2__["StreamService"]])
    ], SerialMonitorComponent);
    return SerialMonitorComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/settings/settings.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/settings/settings.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/iot/components/settings/settings.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/settings/settings.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/settings/settings.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/iot/components/settings/settings.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/spinner/spinner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/iot/components/spinner/spinner.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.spinner-wrapper .spinner {\n  border: 4px solid #f3f3f3;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n  border-top: 4px solid #2b78fe;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n.spinner-wrapper span {\n  display: inline-block;\n  font-weight: 500;\n  margin-left: 0.9rem;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREY7QURFRTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0U7SUFDRSx1QkFBQTtFQ0ZKO0VESUU7SUFDRSx5QkFBQTtFQ0ZKO0FBQ0Y7QURKRTtFQUNFO0lBQ0UsdUJBQUE7RUNGSjtFRElFO0lBQ0UseUJBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW90L2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICRwcmltYXJ5Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjlyZW07XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG59XG4iLCIuc3Bpbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3Bpbm5lci13cmFwcGVyIC5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzJiNzhmZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnNwaW5uZXItd3JhcHBlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMC45cmVtO1xufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/spinner/spinner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/components/spinner/spinner.component.ts ***!
  \*************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    Object.defineProperty(SpinnerComponent.prototype, "size", {
        set: function (value) {
            this._widthAndHeight = value * 10 + 'px';
            this._borderSize = Math.round(value) + 'px';
        },
        enumerable: false,
        configurable: true
    });
    SpinnerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SpinnerComponent.prototype, "size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "backColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "frontColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __importDefault(__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/spinner/spinner.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./spinner.component.scss */ "./src/app/iot/components/spinner/spinner.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/statusbar/statusbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/iot/components/statusbar/statusbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: StatusbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarComponent", function() { return StatusbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/statusbar.service */ "./src/app/shared/services/statusbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var StatusbarComponent = /** @class */ (function () {
    function StatusbarComponent(statusbarService) {
        var _this = this;
        this.statusbarService = statusbarService;
        statusbarService.statusbar.subscribe(function (config) {
            _this.status = config.status;
        });
    }
    StatusbarComponent.prototype.ngOnInit = function () { };
    StatusbarComponent.ctorParameters = function () { return [
        { type: _shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_1__["StatusbarService"] }
    ]; };
    StatusbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statusbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./statusbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/statusbar/statusbar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_shared_services_statusbar_service__WEBPACK_IMPORTED_MODULE_1__["StatusbarService"]])
    ], StatusbarComponent);
    return StatusbarComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/tab/tab-body/tab-body.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/tab/tab-body/tab-body.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3RhYi90YWItYm9keS90YWItYm9keS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/iot/components/tab/tab-body/tab-body.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/tab/tab-body/tab-body.component.ts ***!
  \*******************************************************************/
/*! exports provided: TabBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBodyComponent", function() { return TabBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TabBodyComponent = /** @class */ (function () {
    function TabBodyComponent() {
    }
    TabBodyComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TabBodyComponent.prototype, "bodyContent", void 0);
    TabBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-body',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tab-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-body/tab-body.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tab-body.component.scss */ "./src/app/iot/components/tab/tab-body/tab-body.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TabBodyComponent);
    return TabBodyComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/tab/tab-item/tab-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/iot/components/tab/tab-item/tab-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: TabItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabItemComponent", function() { return TabItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_label_tab_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../tab-label/tab-label.component */ "./src/app/iot/components/tab/tab-label/tab-label.component.ts");
/* harmony import */ var _tab_body_tab_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tab-body/tab-body.component */ "./src/app/iot/components/tab/tab-body/tab-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TabItemComponent = /** @class */ (function () {
    function TabItemComponent() {
    }
    TabItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TabItemComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabItemComponent.prototype, "isActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_tab_body_tab_body_component__WEBPACK_IMPORTED_MODULE_2__["TabBodyComponent"]),
        __metadata("design:type", _tab_body_tab_body_component__WEBPACK_IMPORTED_MODULE_2__["TabBodyComponent"])
    ], TabItemComponent.prototype, "bodyComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_tab_label_tab_label_component__WEBPACK_IMPORTED_MODULE_1__["TabLabelComponent"]),
        __metadata("design:type", _tab_label_tab_label_component__WEBPACK_IMPORTED_MODULE_1__["TabLabelComponent"])
    ], TabItemComponent.prototype, "labelComponent", void 0);
    TabItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-item',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tab-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-item/tab-item.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], TabItemComponent);
    return TabItemComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/tab/tab-label/tab-label.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/tab/tab-label/tab-label.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabLabelComponent", function() { return TabLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TabLabelComponent = /** @class */ (function () {
    function TabLabelComponent() {
    }
    TabLabelComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], TabLabelComponent.prototype, "labelContent", void 0);
    TabLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-label',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tab-label.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tab-label/tab-label.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], TabLabelComponent);
    return TabLabelComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/tab/tabs/tabs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/iot/components/tab/tabs/tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../tab-item/tab-item.component */ "./src/app/iot/components/tab/tab-item/tab-item.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.config = {
            suppressScrollX: true,
            suppressScrollY: true,
        };
    }
    Object.defineProperty(TabsComponent.prototype, "activeTabIndex", {
        set: function (value) {
            this._activeTabIndex = value || 0;
            try {
                var items = this.tabs.toArray();
                this.selectTab(items[this._activeTabIndex]);
            }
            catch (e) { }
        },
        enumerable: false,
        configurable: true
    });
    TabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabItems$ = this.tabs.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.tabs.toArray(); }));
    };
    TabsComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (!this.activeTab) {
            Promise.resolve().then(function () {
                _this.activeTab = _this.tabs.first;
            });
        }
    };
    TabsComponent.prototype.selectTab = function (tabItem) {
        if (this.activeTab === tabItem || !tabItem) {
            return;
        }
        if (this.activeTab) {
            this.activeTab.isActive = false;
        }
        this.activeTab = tabItem;
        tabItem.isActive = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TabsComponent.prototype, "fullWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TabsComponent.prototype, "activeTabIndex", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_1__["TabItemComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/tab/tabs/tabs.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/iot/components/welcome-tab/welcome-tab.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/iot/components/welcome-tab/welcome-tab.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-page-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.welcome-page-wrapper .welcome-logo {\n  width: 230px;\n  margin: 1rem;\n}\n@media (max-width: 992px) {\n  .welcome-page-wrapper .welcome-logo {\n    width: 200px;\n  }\n}\n.welcome-page-wrapper .shortkeys {\n  display: table;\n}\n.welcome-page-wrapper .shortkeys .shortkey {\n  display: table-row;\n}\n.welcome-page-wrapper .shortkeys .shortkey > div {\n  display: table-cell;\n  padding: 0.5rem;\n  vertical-align: middle;\n}\n.welcome-page-wrapper .shortkeys .shortkey .shortkey-title {\n  text-align: right;\n}\n.welcome-page-wrapper .shortkeys .shortkey .keys > span {\n  display: inline-block;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: inset 0px -2px 0px 0px #ddd;\n  font-size: 0.8rem;\n  padding: 0.1rem 0.5rem 0.25rem;\n  text-align: center;\n}\n.welcome-page-wrapper .extra-links {\n  display: flex;\n  margin-top: 1rem;\n}\n.welcome-page-wrapper .extra-links .extra-link {\n  cursor: pointer;\n  padding: 1rem;\n  background: #fff;\n  margin: 1rem;\n  text-align: center;\n  max-width: 320px;\n  min-width: 280px;\n  border-radius: 3px;\n  box-shadow: 0 0 6px #dddddd78;\n  transition: all 0.2s;\n  border: 1px solid #fff;\n}\n@media (max-width: 992px) {\n  .welcome-page-wrapper .extra-links .extra-link {\n    margin: 0 1rem;\n    padding: 0.7rem 1rem;\n  }\n}\n.welcome-page-wrapper .extra-links .extra-link:hover {\n  border: 1px solid #91b9fe;\n}\n.welcome-page-wrapper .extra-links .extra-link i {\n  font-size: 1.6rem;\n  color: #5e98fe;\n}\n.welcome-page-wrapper .extra-links .extra-link .extra-link-title {\n  font-weight: 500;\n  font-size: 1rem !important;\n}\n.welcome-page-wrapper .extra-links .extra-link p {\n  font-size: 0.9rem;\n  margin: 0.7rem 0 !important;\n}\n@media (max-width: 992px) {\n  .welcome-page-wrapper .extra-links .extra-link p {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9pb3QvY29tcG9uZW50cy93ZWxjb21lLXRhYi93ZWxjb21lLXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW90L2NvbXBvbmVudHMvd2VsY29tZS10YWIvd2VsY29tZS10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGO0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFIRjtJQUlJLFlBQUE7RUNFSjtBQUNGO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0FDR047QURGTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSVI7QURGTTtFQUNFLGlCQUFBO0FDSVI7QUREUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDQ047QURBTTtFQVpGO0lBYUksY0FBQTtJQUNBLG9CQUFBO0VDR047QUFDRjtBREZNO0VBQ0UseUJBQUE7QUNJUjtBREZNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDSVI7QURGTTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNJUjtBREZNO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQ0lSO0FESFE7RUFIRjtJQUlJLGlCQUFBO0VDTVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2lvdC9jb21wb25lbnRzL3dlbGNvbWUtdGFiL3dlbGNvbWUtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG4ud2VsY29tZS1wYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLndlbGNvbWUtbG9nbyB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIH1cbiAgLnNob3J0a2V5cyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgLnNob3J0a2V5IHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuICAgICAgLnNob3J0a2V5LXRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAua2V5cyB7XG4gICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMnB4IDBweCAwcHggI2RkZDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtIDAuMjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5leHRyYS1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5leHRyYS1saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNnB4ICNkZGRkZGQ3ODtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRlbigkcHJpbWFyeUNvbG9yLCAyMCk7XG4gICAgICB9XG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIGNvbG9yOiBsaWdodGVuKCRwcmltYXJ5Q29sb3IsIDEwKTtcbiAgICAgIH1cbiAgICAgIC5leHRyYS1saW5rLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIG1hcmdpbjogMC43cmVtIDAgIWltcG9ydGFudDtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi53ZWxjb21lLXBhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAud2VsY29tZS1sb2dvIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW46IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLndlbGNvbWUtcGFnZS13cmFwcGVyIC53ZWxjb21lLWxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLndlbGNvbWUtcGFnZS13cmFwcGVyIC5zaG9ydGtleXMge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAuc2hvcnRrZXlzIC5zaG9ydGtleSB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAuc2hvcnRrZXlzIC5zaG9ydGtleSA+IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAuc2hvcnRrZXlzIC5zaG9ydGtleSAuc2hvcnRrZXktdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAuc2hvcnRrZXlzIC5zaG9ydGtleSAua2V5cyA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0ycHggMHB4IDBweCAjZGRkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbSAwLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2VsY29tZS1wYWdlLXdyYXBwZXIgLmV4dHJhLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi53ZWxjb21lLXBhZ2Utd3JhcHBlciAuZXh0cmEtbGlua3MgLmV4dHJhLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggI2RkZGRkZDc4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAud2VsY29tZS1wYWdlLXdyYXBwZXIgLmV4dHJhLWxpbmtzIC5leHRyYS1saW5rIHtcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgfVxufVxuLndlbGNvbWUtcGFnZS13cmFwcGVyIC5leHRyYS1saW5rcyAuZXh0cmEtbGluazpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWI5ZmU7XG59XG4ud2VsY29tZS1wYWdlLXdyYXBwZXIgLmV4dHJhLWxpbmtzIC5leHRyYS1saW5rIGkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICM1ZTk4ZmU7XG59XG4ud2VsY29tZS1wYWdlLXdyYXBwZXIgLmV4dHJhLWxpbmtzIC5leHRyYS1saW5rIC5leHRyYS1saW5rLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4ud2VsY29tZS1wYWdlLXdyYXBwZXIgLmV4dHJhLWxpbmtzIC5leHRyYS1saW5rIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwLjdyZW0gMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC53ZWxjb21lLXBhZ2Utd3JhcHBlciAuZXh0cmEtbGlua3MgLmV4dHJhLWxpbmsgcCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/iot/components/welcome-tab/welcome-tab.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/iot/components/welcome-tab/welcome-tab.component.ts ***!
  \*********************************************************************/
/*! exports provided: WelcomeTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeTabComponent", function() { return WelcomeTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var WelcomeTabComponent = /** @class */ (function () {
    function WelcomeTabComponent(navigatorService) {
        this.navigatorService = navigatorService;
    }
    WelcomeTabComponent.prototype.openCSVImport = function () {
        this.navigatorService.openImportCSVTab();
    };
    WelcomeTabComponent.prototype.openDevicesTab = function () {
        this.navigatorService.openDevices();
    };
    WelcomeTabComponent.prototype.goToLink = function (url) {
        window.open(url, '_blank');
    };
    WelcomeTabComponent.ctorParameters = function () { return [
        { type: app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }
    ]; };
    WelcomeTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome-tab',
            template: __importDefault(__webpack_require__(/*! raw-loader!./welcome-tab.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/iot/components/welcome-tab/welcome-tab.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./welcome-tab.component.scss */ "./src/app/iot/components/welcome-tab/welcome-tab.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"]])
    ], WelcomeTabComponent);
    return WelcomeTabComponent;
}());



/***/ }),

/***/ "./src/app/iot/directives/cursor-gradient/cursor-gradient.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/iot/directives/cursor-gradient/cursor-gradient.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: CursorGradientDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorGradientDirective", function() { return CursorGradientDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursorGradientDirective = /** @class */ (function () {
    function CursorGradientDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    CursorGradientDirective.prototype.ngOnInit = function () {
        this.span = this.renderer.createElement('span');
        this.renderer.addClass(this.span, 'mouse-cursor-gradient-tracking');
        this.renderer.appendChild(this.elementRef.nativeElement, this.span);
    };
    CursorGradientDirective.prototype.mouseover = function (event) {
        var rect = this.elementRef.nativeElement.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        this.span.style.setProperty('--x', x + 'px');
        this.span.style.setProperty('--y', y + 'px');
    };
    CursorGradientDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CursorGradientDirective.prototype, "mouseover", null);
    CursorGradientDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCursorGradient]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CursorGradientDirective);
    return CursorGradientDirective;
}());



/***/ }),

/***/ "./src/app/iot/directives/tooltip/tooltip.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/iot/directives/tooltip/tooltip.directive.ts ***!
  \*************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.offset = 10;
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        if (!this.tooltip) {
            this.show();
        }
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        if (this.tooltip) {
            this.hide();
        }
    };
    TooltipDirective.prototype.onClick = function (e) {
        var _this = this;
        var timer = setInterval(function () {
            if (!document.querySelector("[tooltip='" + _this.el.nativeElement.getAttribute('tooltip') + "']")) {
                _this.hide();
                clearInterval(timer);
            }
        });
    };
    TooltipDirective.prototype.show = function () {
        this.create();
        this.setPosition();
        this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
    };
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
        window.setTimeout(function () {
            _this.renderer.removeChild(document.body, _this.tooltip);
            _this.tooltip = null;
        }, this.delay);
    };
    TooltipDirective.prototype.create = function () {
        this.tooltip = this.renderer.createElement('span');
        this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipTitle));
        this.renderer.appendChild(document.body, this.tooltip);
        this.renderer.addClass(this.tooltip, 'ng-tooltip');
        this.renderer.addClass(this.tooltip, "ng-tooltip-" + this.placement);
        this.renderer.setStyle(this.tooltip, '-webkit-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-moz-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, '-o-transition', "opacity " + this.delay + "ms");
        this.renderer.setStyle(this.tooltip, 'transition', "opacity " + this.delay + "ms");
    };
    TooltipDirective.prototype.setPosition = function () {
        var hostPos = this.el.nativeElement.getBoundingClientRect();
        var tooltipPos = this.tooltip.getBoundingClientRect();
        var scrollPos = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        var top, left;
        if (this.placement === 'top') {
            top = hostPos.top - tooltipPos.height - this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        }
        if (this.placement === 'bottom') {
            top = hostPos.bottom + this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
        }
        if (this.placement === 'left') {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.left - tooltipPos.width - this.offset;
        }
        if (this.placement === 'right') {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.right + this.offset;
        }
        this.renderer.setStyle(this.tooltip, 'top', top + scrollPos + "px");
        this.renderer.setStyle(this.tooltip, 'left', left + "px");
    };
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltip'),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TooltipDirective.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onClick", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tooltip]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/iot/iot.module.ts":
/*!***********************************!*\
  !*** ./src/app/iot/iot.module.ts ***!
  \***********************************/
/*! exports provided: IotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotModule", function() { return IotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/iot/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/realtime/realtime.component */ "./src/app/iot/components/realtime/realtime.component.ts");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-daterangepicker-material */ "./node_modules/ngx-daterangepicker-material/__ivy_ngcc__/fesm5/ngx-daterangepicker-material.js");
/* harmony import */ var _components_dataflow_dataflow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dataflow/dataflow.component */ "./src/app/iot/components/dataflow/dataflow.component.ts");
/* harmony import */ var _components_heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/heatmap/heatmap.component */ "./src/app/iot/components/heatmap/heatmap.component.ts");
/* harmony import */ var _components_am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/am-chart/am-chart.component */ "./src/app/iot/components/am-chart/am-chart.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/iot/components/navbar/navbar.component.ts");
/* harmony import */ var _components_realtime_messages_chart_realtime_messages_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/realtime-messages-chart/realtime-messages-chart.component */ "./src/app/iot/components/realtime-messages-chart/realtime-messages-chart.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/iot/components/loading/loading.component.ts");
/* harmony import */ var _components_open_port_open_port_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/open-port/open-port.component */ "./src/app/iot/components/open-port/open-port.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/iot/components/layout/layout.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/iot/components/button/button.component.ts");
/* harmony import */ var _components_csv_import_uploadbox_csv_import_uploadbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/csv-import-uploadbox/csv-import-uploadbox.component */ "./src/app/iot/components/csv-import-uploadbox/csv-import-uploadbox.component.ts");
/* harmony import */ var _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/connection-status/connection-status.component */ "./src/app/iot/components/connection-status/connection-status.component.ts");
/* harmony import */ var _components_tab_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tab/tabs/tabs.component */ "./src/app/iot/components/tab/tabs/tabs.component.ts");
/* harmony import */ var _shared_services_visualization_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/services/visualization.service */ "./src/app/shared/services/visualization.service.ts");
/* harmony import */ var _components_tab_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tab/tab-item/tab-item.component */ "./src/app/iot/components/tab/tab-item/tab-item.component.ts");
/* harmony import */ var _components_tab_tab_label_tab_label_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tab/tab-label/tab-label.component */ "./src/app/iot/components/tab/tab-label/tab-label.component.ts");
/* harmony import */ var _components_tab_tab_body_tab_body_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tab/tab-body/tab-body.component */ "./src/app/iot/components/tab/tab-body/tab-body.component.ts");
/* harmony import */ var _components_app_tab_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/app-tab/main-tabs/main-tabs.component */ "./src/app/iot/components/app-tab/main-tabs/main-tabs.component.ts");
/* harmony import */ var _components_app_tab_main_tab_item_main_tab_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/app-tab/main-tab-item/main-tab-item.component */ "./src/app/iot/components/app-tab/main-tab-item/main-tab-item.component.ts");
/* harmony import */ var _components_app_tab_main_tab_label_main_tab_label_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/app-tab/main-tab-label/main-tab-label.component */ "./src/app/iot/components/app-tab/main-tab-label/main-tab-label.component.ts");
/* harmony import */ var _components_app_tab_main_tab_body_main_tab_body_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/app-tab/main-tab-body/main-tab-body.component */ "./src/app/iot/components/app-tab/main-tab-body/main-tab-body.component.ts");
/* harmony import */ var _components_csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/csv-import/csv-import.component */ "./src/app/iot/components/csv-import/csv-import.component.ts");
/* harmony import */ var _components_host_server_host_server_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/host-server/host-server.component */ "./src/app/iot/components/host-server/host-server.component.ts");
/* harmony import */ var _components_csv_import_preview_csv_import_preview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/csv-import-preview/csv-import-preview.component */ "./src/app/iot/components/csv-import-preview/csv-import-preview.component.ts");
/* harmony import */ var _components_device_view_device_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/device-view/device-view.component */ "./src/app/iot/components/device-view/device-view.component.ts");
/* harmony import */ var _components_select_visualization_list_select_visualization_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/select-visualization-list/select-visualization-list.component */ "./src/app/iot/components/select-visualization-list/select-visualization-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/active-streams/active-streams.component */ "./src/app/iot/components/active-streams/active-streams.component.ts");
/* harmony import */ var _components_serial_monitor_serial_monitor_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/serial-monitor/serial-monitor.component */ "./src/app/iot/components/serial-monitor/serial-monitor.component.ts");
/* harmony import */ var _components_app_tab_tab_tab_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/app-tab/tab/tab.component */ "./src/app/iot/components/app-tab/tab/tab.component.ts");
/* harmony import */ var _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../shared/services/tabs.service */ "./src/app/shared/services/tabs.service.ts");
/* harmony import */ var _components_main_tab_main_tab_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/main-tab/main-tab.component */ "./src/app/iot/components/main-tab/main-tab.component.ts");
/* harmony import */ var _components_welcome_tab_welcome_tab_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/welcome-tab/welcome-tab.component */ "./src/app/iot/components/welcome-tab/welcome-tab.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/devices/devices.component */ "./src/app/iot/components/devices/devices.component.ts");
/* harmony import */ var _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/file-upload/file-upload.component */ "./src/app/iot/components/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/iot/components/card/card.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/iot/components/spinner/spinner.component.ts");
/* harmony import */ var _components_statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/statusbar/statusbar.component */ "./src/app/iot/components/statusbar/statusbar.component.ts");
/* harmony import */ var _components_form_controls_form_text_form_text_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/form-controls/form-text/form-text.component */ "./src/app/iot/components/form-controls/form-text/form-text.component.ts");
/* harmony import */ var _components_form_controls_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/form-controls/form-select/form-select.component */ "./src/app/iot/components/form-controls/form-select/form-select.component.ts");
/* harmony import */ var _components_form_controls_form_date_form_date_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/form-controls/form-date/form-date.component */ "./src/app/iot/components/form-controls/form-date/form-date.component.ts");
/* harmony import */ var _components_form_controls_day_picker_day_picker_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/form-controls/day-picker/day-picker.component */ "./src/app/iot/components/form-controls/day-picker/day-picker.component.ts");
/* harmony import */ var _components_device_single_device_single_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/device-single/device-single.component */ "./src/app/iot/components/device-single/device-single.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_form_controls_optional_label_optional_label_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/form-controls/optional-label/optional-label.component */ "./src/app/iot/components/form-controls/optional-label/optional-label.component.ts");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ "./src/app/iot/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _components_progress_bar_list_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/progress-bar-list/progress-bar-list.component */ "./src/app/iot/components/progress-bar-list/progress-bar-list.component.ts");
/* harmony import */ var _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./directives/tooltip/tooltip.directive */ "./src/app/iot/directives/tooltip/tooltip.directive.ts");
/* harmony import */ var _shared_services_shortkey_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../shared/services/shortkey.service */ "./src/app/shared/services/shortkey.service.ts");
/* harmony import */ var _shared_services_import_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../shared/services/import.service */ "./src/app/shared/services/import.service.ts");
/* harmony import */ var _components_database_configuration_database_configuration_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/database-configuration/database-configuration.component */ "./src/app/iot/components/database-configuration/database-configuration.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/iot/components/settings/settings.component.ts");
/* harmony import */ var _components_gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/gauge-chart/gauge-chart.component */ "./src/app/iot/components/gauge-chart/gauge-chart.component.ts");
/* harmony import */ var ngx_blockly__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ngx-blockly */ "./node_modules/ngx-blockly/__ivy_ngcc__/fesm2015/ngx-blockly.js");
/* harmony import */ var _components_blockly_blockly_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/blockly/blockly.component */ "./src/app/iot/components/blockly/blockly.component.ts");
/* harmony import */ var _directives_cursor_gradient_cursor_gradient_directive__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./directives/cursor-gradient/cursor-gradient.directive */ "./src/app/iot/directives/cursor-gradient/cursor-gradient.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































































var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
};
var IotModule = /** @class */ (function () {
    function IotModule() {
    }
    IotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_select_visualization_list_select_visualization_list_component__WEBPACK_IMPORTED_MODULE_31__["SelectVisualiztionComponent"],
                _components_am_chart_am_chart_component__WEBPACK_IMPORTED_MODULE_8__["AmChartComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_dataflow_dataflow_component__WEBPACK_IMPORTED_MODULE_6__["DataFlowComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_4__["RealtimeComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"],
                _components_device_view_device_view_component__WEBPACK_IMPORTED_MODULE_30__["DeviceViewComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"],
                _components_connection_status_connection_status_component__WEBPACK_IMPORTED_MODULE_17__["ConnectionStatusComponent"],
                _components_realtime_messages_chart_realtime_messages_chart_component__WEBPACK_IMPORTED_MODULE_11__["RealtimeMessagesChartComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"],
                _components_device_single_device_single_component__WEBPACK_IMPORTED_MODULE_50__["DeviceSingleComponent"],
                _components_heatmap_heatmap_component__WEBPACK_IMPORTED_MODULE_7__["HeatmapComponent"],
                _components_open_port_open_port_component__WEBPACK_IMPORTED_MODULE_13__["OpenPortComponent"],
                _components_database_configuration_database_configuration_component__WEBPACK_IMPORTED_MODULE_58__["DatabaseConfigurationComponent"],
                _components_tab_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_18__["TabsComponent"],
                _components_tab_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_20__["TabItemComponent"],
                _components_csv_import_csv_import_component__WEBPACK_IMPORTED_MODULE_27__["CSVImportComponent"],
                _components_csv_import_preview_csv_import_preview_component__WEBPACK_IMPORTED_MODULE_29__["CSVImportPreviewComponent"],
                _components_host_server_host_server_component__WEBPACK_IMPORTED_MODULE_28__["HostServerComponent"],
                _components_csv_import_uploadbox_csv_import_uploadbox_component__WEBPACK_IMPORTED_MODULE_16__["CSVImportUploadboxComponent"],
                _components_tab_tab_label_tab_label_component__WEBPACK_IMPORTED_MODULE_21__["TabLabelComponent"],
                _components_tab_tab_body_tab_body_component__WEBPACK_IMPORTED_MODULE_22__["TabBodyComponent"],
                _components_active_streams_active_streams_component__WEBPACK_IMPORTED_MODULE_33__["ActiveStreamsComponent"],
                _components_serial_monitor_serial_monitor_component__WEBPACK_IMPORTED_MODULE_34__["SerialMonitorComponent"],
                _components_app_tab_tab_tab_component__WEBPACK_IMPORTED_MODULE_35__["TabComponent"],
                _components_main_tab_main_tab_component__WEBPACK_IMPORTED_MODULE_37__["MainTabComponent"],
                _components_welcome_tab_welcome_tab_component__WEBPACK_IMPORTED_MODULE_38__["WelcomeTabComponent"],
                _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_40__["DevicesComponent"],
                _components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_41__["FileUploadComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_43__["CardComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_44__["SpinnerComponent"],
                _components_statusbar_statusbar_component__WEBPACK_IMPORTED_MODULE_45__["StatusbarComponent"],
                _components_form_controls_form_text_form_text_component__WEBPACK_IMPORTED_MODULE_46__["FormTextComponent"],
                _components_form_controls_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_47__["FormSelectComponent"],
                _components_form_controls_form_date_form_date_component__WEBPACK_IMPORTED_MODULE_48__["FormDateComponent"],
                _components_form_controls_day_picker_day_picker_component__WEBPACK_IMPORTED_MODULE_49__["DayPickerComponent"],
                _components_form_controls_optional_label_optional_label_component__WEBPACK_IMPORTED_MODULE_52__["OptionalLabelComponent"],
                _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_53__["ProgressBarComponent"],
                _components_progress_bar_list_progress_bar_list_component__WEBPACK_IMPORTED_MODULE_54__["ProgressBarListComponent"],
                _components_blockly_blockly_component__WEBPACK_IMPORTED_MODULE_62__["BlocklyComponent"],
                _directives_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_55__["TooltipDirective"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_59__["SettingsComponent"],
                _components_gauge_chart_gauge_chart_component__WEBPACK_IMPORTED_MODULE_60__["GaugeChartComponent"],
                _components_app_tab_main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_23__["MainTabsComponent"],
                _components_app_tab_main_tab_item_main_tab_item_component__WEBPACK_IMPORTED_MODULE_24__["MainTabItemComponent"],
                _components_app_tab_main_tab_label_main_tab_label_component__WEBPACK_IMPORTED_MODULE_25__["MainTabLabelComponent"],
                _components_app_tab_main_tab_body_main_tab_body_component__WEBPACK_IMPORTED_MODULE_26__["MainTabBodyComponent"],
                _directives_cursor_gradient_cursor_gradient_directive__WEBPACK_IMPORTED_MODULE_63__["CursorGradientDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PerfectScrollbarModule"],
                ngx_blockly__WEBPACK_IMPORTED_MODULE_61__["NgxBlocklyModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_51__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_51__["ReactiveFormsModule"],
                ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_5__["NgxDaterangepickerMd"].forRoot(),
            ],
            exports: [ngx_blockly__WEBPACK_IMPORTED_MODULE_61__["NgxBlocklyModule"]],
            providers: [
                _shared_services_visualization_service__WEBPACK_IMPORTED_MODULE_19__["VisualizationService"],
                _shared_services_tabs_service__WEBPACK_IMPORTED_MODULE_36__["TabService"],
                _shared_services_shortkey_service__WEBPACK_IMPORTED_MODULE_56__["ShortkeyService"],
                _shared_services_import_service__WEBPACK_IMPORTED_MODULE_57__["ImportService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                },
            ],
        })
    ], IotModule);
    return IotModule;
}());



/***/ }),

/***/ "./src/app/locale/translations.ts":
/*!****************************************!*\
  !*** ./src/app/locale/translations.ts ***!
  \****************************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translations", function() { return translations; });
var translations = {
    general: {
        success: 'Successfuly operation',
        failed: 'Operation failed!',
        status: 'Status',
        failedMessage: 'There is an error which we are not sure',
        noData: 'No data available',
        kill: 'Kill',
        observe: 'Observe',
    },
    database: {
        formDescription: 'You can swich the database configuration to connect to different database, or even to different type of vendor as supported.',
        configurationUpdated: 'Database configuration has been successfully updated and all incoming data will use new data.',
    },
    csvImport: {
        doubleCreationDateError: 'Column type failed',
        doubleCreationDateErrorDescription: 'More than one column as creation date is selected.',
        missingCreationDateTitle: 'Executing failed!',
        missingCreationDateDescription: 'It is necessary to select at least one CreationDate',
        moreThanOneTitle: 'More than one',
        moreThanOneDescription: 'You can only have one single column as creation date.',
        fieldNameMissingTitle: 'Name missing',
        fieldNameMissingDescription: 'You have an empty field for a column. If you do not want to import that column, just uncheck it from left side.',
        atLeastTwoColumnTitle: 'Columns missing',
        atLeastTwoColumnDescription: 'It is necessary to select at least two Fields',
        startImportingTitle: 'Importing started',
        startImportingDescription: 'Importing is started keep the tab open if you want to see the progress.',
        unknownErrorTitle: 'Unknown error',
        unknownErrorDescription: 'We cannot process the import, and cannot provide you a reason. Try another file.',
    },
    deviceView: {
        noData: 'No data',
        noDataForThisRange: 'There is no data for this range',
    },
    openPort: {
        errorTitle: 'Opening port error',
        errorDescription: 'We cannot open this port at the moment.',
        openSuccessTitle: 'Port opened',
        openSuccessDescription: 'Active port has been created successfully',
    },
    tabsTitle: {
        serialPort: 'Serialport',
        settings: 'Settings',
    },
    activeStreams: {
        title: 'Active streams',
        activeDataStreams: 'Active data streams',
        description: "Data streams or active ports, are different protocols that you can\n    send information to this dashboard. You can open as many as them if\n    you need.",
        deletePortTitle: 'Delete',
        deletePortDescription: 'Are you sure deleting this active port listener? All related streams will be shut down immediately.',
        columns: {
            type: 'Type',
            status: 'Status',
            lastMessage: 'Last message',
            lastActivity: 'Last activity',
            port: 'Port',
            path: 'Path',
            action: 'Action',
        },
    },
    serialPorts: {
        title: 'Serial ports',
        activeSerialPorts: 'Available serial ports',
        description: "List of serial ports that are recognized by host is shown here. You\n    can stream them if they are not in use.",
        columns: {
            path: 'Path',
            manufacturer: 'Manufacturer',
            productId: 'Product',
            status: 'Status',
            actions: 'Actions',
        },
    },
    activePorts: {
        openPortTitle: 'New port listener',
        title: 'Active Ports',
        listeners: 'Active Ports listeners',
        description: 'Active Ports listeners',
        columns: {
            path: 'Path',
            manufacturer: 'Manufacturer',
            productId: 'Product ID',
            status: 'Status',
            actions: 'Actions ',
        },
    },
    serverStatus: {
        title: 'Server status',
        generalInformation: 'General information from server',
        description: "Here you can see some information from the torabito server. The blue\n    application is only a user interface with torabito server (red\n    version) so here you can see such information.",
    },
    deviceForm: {
        update: 'Update',
        createDescription: 'You can create an empty device by filling the form below. Later, you can connect data to this device from different sources. Device name, and connected data will be editable in future.',
        updateDescription: 'You can update the device details here. Some fields might be disabled due to device usage.',
        create: 'Create',
        errorSubmit: 'Changes failed',
        errorDescription: 'Something went wrong while updating device. Try again later.',
        submitUpdate: 'Device updated',
        submitDescription: 'Device data has been changed successfully.',
    },
};


/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
var AppRoutes;
(function (AppRoutes) {
    AppRoutes["messageCountGraph"] = "message-count-graph";
    AppRoutes["logicBuilding"] = "logic-building";
    AppRoutes["dataCapture"] = "data-capture";
    AppRoutes["settings"] = "settings";
    AppRoutes["realtime"] = "realtime";
    AppRoutes["activeStreams"] = "active-streams";
    AppRoutes["serialMonitoring"] = "serial-monitoring/:port";
    AppRoutes["openPort"] = "open-port";
    AppRoutes["database"] = "database";
    AppRoutes["importCsv"] = "import-csv";
    AppRoutes["importCsvSingle"] = "import-csv";
    AppRoutes["devices"] = "devices";
    AppRoutes["deviceView"] = "device";
    AppRoutes["deviceNew"] = "new-device";
    AppRoutes["deviceEdit"] = "device-edit";
    AppRoutes["welcome"] = "welcome";
})(AppRoutes || (AppRoutes = {}));


/***/ }),

/***/ "./src/app/shared/components/base-modal/base-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/base-modal/base-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: BaseModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalComponent", function() { return BaseModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BaseModalComponent = /** @class */ (function () {
    function BaseModalComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeModal = false;
        this.type = 'MODAL';
        this.subject = null;
        this.vibrate = false;
        this.buttons = [];
    }
    BaseModalComponent.prototype.onKeyDown = function (event) {
        var $event = document.all ? window.event : event;
        if (/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
            return;
        }
        if (event.code === 'Escape') {
            this.Close(event);
        }
    };
    BaseModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modalAnimation();
        if (this.modal &&
            this.modal.content &&
            typeof this.modal.content === 'function') {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.modal.content);
            this.contentRef = this.viewContainerRef.createComponent(factory);
            this.contentRef.instance.pushResult = function () {
                _this.closeModal('CONFIRMED');
            };
            if (this.modal.params) {
                this.contentRef.instance.params = this.modal.params;
            }
            this.contentRef.changeDetectorRef.detectChanges();
        }
        // To focus on the first button when modal opens. If you know better way,
        // feel free :)
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(50).subscribe(function () {
            var button = document.querySelector('#base-modal-buttons .btn:first-child');
            if (button) {
                button.focus();
            }
        });
    };
    BaseModalComponent.prototype.CloseButtonClick = function () {
        this.closeModal('CANCELED');
    };
    Object.defineProperty(BaseModalComponent.prototype, "textContent", {
        get: function () {
            return typeof this.modal.content === 'string' ? this.modal.content : '';
        },
        enumerable: false,
        configurable: true
    });
    BaseModalComponent.prototype.modalAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeModal = true;
            _this.buttons = _this.ModalButtons(_this.modal);
        }, 1);
    };
    BaseModalComponent.prototype.Close = function (e, type) {
        if (type === void 0) { type = 'CANCELED'; }
        if (e.target === e.currentTarget || e.code === 'Escape') {
            this.closeModal(type);
        }
    };
    BaseModalComponent.prototype.closeModal = function (type) {
        var _this = this;
        var data = {};
        if (this.contentRef && this.contentRef.instance.data) {
            data = this.contentRef.instance.data.value;
        }
        var result = { type: type, data: data };
        if (this.subject) {
            this.subject.next(result);
        }
        this.resultChange.emit(result);
        if (this.type === 'INLINE') {
            this.vibrate = true;
            setTimeout(function () {
                _this.vibrate = false;
            }, 1000);
        }
        if (this.type === 'MODAL') {
            this.activeModal = false;
            setTimeout(function () {
                _this.appRef.detachView(_this.ref.hostView);
                _this.ref.destroy();
            }, 400);
        }
    };
    BaseModalComponent.prototype.Cancel = function (e) {
        this.Close(e, 'CANCELED');
    };
    BaseModalComponent.prototype.Confirm = function (e) {
        this.Close(e, 'CONFIRMED');
    };
    BaseModalComponent.prototype.ModalButtons = function (dialog) {
        if (!dialog) {
            return [];
        }
        if (!dialog.type || dialog.type === 'CONFIRMATION') {
            return [
                {
                    type: 'CONFIRM',
                    label: 'confirm',
                },
                {
                    type: 'CANCEL',
                    label: 'cancel',
                },
            ];
        }
        if (!dialog.type || dialog.type === 'YESNO') {
            return [
                {
                    type: 'CONFIRM',
                    label: 'yes',
                },
                {
                    type: 'CANCEL',
                    label: 'no',
                },
            ];
        }
    };
    BaseModalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BaseModalComponent.prototype, "resultChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseModalComponent.prototype, "activeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseModalComponent.prototype, "appRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseModalComponent.prototype, "ref", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseModalComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseModalComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseModalComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], BaseModalComponent.prototype, "subject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], BaseModalComponent.prototype, "viewContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BaseModalComponent.prototype, "onKeyDown", null);
    BaseModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngd-base-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./base-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-modal/base-modal.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], BaseModalComponent);
    return BaseModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/base-toast/base-toast.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/base-toast/base-toast.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ngd-toast-wrapper {\n  background: transparent;\n  transition: background 0.4s;\n  font-family: \"Roboto\", sans-serif;\n}\n.ngd-toast-wrapper.vibrate {\n  -webkit-animation: rotate-scale-down-ver 0.65s linear both;\n  animation: rotate-scale-down-ver 0.65s linear both;\n}\n.ngd-toast-wrapper .ngd-toast-content {\n  background-color: #e0f7fa;\n  border-left: 1px solid #2196f3;\n  max-width: 320px;\n  padding: 15px;\n  height: auto;\n  border-radius: 2px;\n  transition-timing-function: cubic-bezier(0.33, 0.2, 0.78, 0.23);\n  transition: transform 0.4s, opacity 0.3s;\n  transform: translate(100%) scale(0.8);\n  opacity: 0;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-success {\n  border-left: 3px solid #00897b;\n  background: #e0f2f1;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-success p {\n  color: #004d40;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-warning {\n  background: #fffde7;\n  border-left: 3px solid #ffd54f;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-warning p {\n  color: #f57f17;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-info {\n  border-left: 3px solid #039be5;\n  background: #e1f5fe;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-info p {\n  color: #01579b;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-error {\n  border-left: 3px solid #f4511e;\n  background: #fbe9e7;\n}\n.ngd-toast-wrapper .ngd-toast-content.theme-error p {\n  color: #bf360c;\n}\n.ngd-toast-wrapper .ngd-toast-content.static {\n  margin: 0px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 0 7px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.ngd-toast-wrapper .ngd-toast-content.active {\n  transform: translate(0) scale(1);\n  opacity: 1;\n}\n.ngd-toast-wrapper .btn {\n  margin-right: 5px;\n}\n.ngd-toast-wrapper .ngd-toast-title {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n.ngd-toast-wrapper.dialog-mode {\n  position: fixed;\n  overflow: hidden;\n  padding: 15px;\n  top: 50px;\n  z-index: 999;\n  right: 0;\n  max-width: 400px;\n}\n.ngd-toast-wrapper.dialog-mode .ngd-toast-content {\n  box-shadow: 5px 2px 9px 3px #c0c0c03b;\n}\n.ngd-toast-wrapper.dialog-mode .ngd-toast-content p {\n  margin-bottom: 0;\n}\n@media (max-width: 767px) {\n  .ngd-toast-wrapper.dialog-mode .ngd-toast-content {\n    margin: 10px auto;\n  }\n}\n.ngd-toast-wrapper .ngd-toast-close {\n  position: absolute;\n  font-size: 32px;\n  right: 3px;\n  top: 0;\n  cursor: pointer;\n}\n.ngd-toast-wrapper .ngd-toast-close:hover {\n  color: blue;\n}\n@-webkit-keyframes rotate-scale-down-ver {\n  0% {\n    transform: scale(1) rotateY(0);\n  }\n  50% {\n    transform: scale(0.5) rotateY(180deg);\n  }\n  100% {\n    transform: scale(1) rotateY(360deg);\n  }\n}\n@keyframes rotate-scale-down-ver {\n  0% {\n    transform: scale(1) rotateY(0);\n  }\n  50% {\n    transform: scale(0.5) rotateY(180deg);\n  }\n  100% {\n    transform: scale(1) rotateY(360deg);\n  }\n}\n.ngd-toast-text {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGkvbGFsYWxhbmQvdG9yYWJpdG8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9iYXNlLXRvYXN0L2Jhc2UtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UtdG9hc3QvYmFzZS10b2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQ0xGO0FET0U7RUFDRSwwREFBQTtFQUNBLGtEQUFBO0FDTEo7QURRRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFrQ0EsK0RBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBRUEsVUFBQTtBQ3hDSjtBRElJO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FER007RUFDRSxjQUFBO0FDRFI7QURLSTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUNITjtBRElNO0VBQ0UsY0FBQTtBQ0ZSO0FETUk7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDSk47QURLTTtFQUNFLGNBQUE7QUNIUjtBRE9JO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0xOO0FETU07RUFDRSxjQUFBO0FDSlI7QURjSTtFQUNFLFdBQUE7RUFDQSxvSEFBQTtBQ1pOO0FEZ0JJO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FDZE47QURrQkU7RUFDRSxpQkFBQTtBQ2hCSjtBRG1CRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ2xCSjtBRG9CSTtFQUVFLHFDQUFBO0FDbkJOO0FEcUJNO0VBQ0UsZ0JBQUE7QUNuQlI7QUQ3RUU7RUEyRkU7SUFTSSxpQkFBQTtFQ25CTjtBQUNGO0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FDckJKO0FEdUJJO0VBQ0UsV0FBQTtBQ3JCTjtBRHlCQTtFQUNFO0lBRUUsOEJBQUE7RUN0QkY7RUR3QkE7SUFFRSxxQ0FBQTtFQ3RCRjtFRHdCQTtJQUVFLG1DQUFBO0VDdEJGO0FBQ0Y7QUR3QkE7RUFDRTtJQUVFLDhCQUFBO0VDdEJGO0VEd0JBO0lBRUUscUNBQUE7RUN0QkY7RUR3QkE7SUFFRSxtQ0FBQTtFQ3RCRjtBQUNGO0FEeUJBO0VBQ0Usa0JBQUE7QUN2QkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9iYXNlLXRvYXN0L2Jhc2UtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcGhvbmUge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4ubmdkLXRvYXN0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbiAgJi52aWJyYXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLXNjYWxlLWRvd24tdmVyIDAuNjVzIGxpbmVhciBib3RoO1xuICAgIGFuaW1hdGlvbjogcm90YXRlLXNjYWxlLWRvd24tdmVyIDAuNjVzIGxpbmVhciBib3RoO1xuICB9XG5cbiAgLm5nZC10b2FzdC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzIxOTZmMztcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICYudGhlbWUtc3VjY2VzcyB7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDg5N2I7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBmMmYxO1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjMDA0ZDQwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYudGhlbWUtd2FybmluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZGU3O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZkNTRmO1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjZjU3ZjE3O1xuICAgICAgfVxuICAgIH1cblxuICAgICYudGhlbWUtaW5mbyB7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMzliZTU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTFmNWZlO1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjMDE1NzliO1xuICAgICAgfVxuICAgIH1cblxuICAgICYudGhlbWUtZXJyb3Ige1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjQ1MTFlO1xuICAgICAgYmFja2dyb3VuZDogI2ZiZTllNztcbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogI2JmMzYwYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzMsIDAuMiwgMC43OCwgMC4yMyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4zcztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKSBzY2FsZSgwLjgpO1xuXG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuc3RhdGljIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgIDAgMCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5idG4ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLm5nZC10b2FzdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gICYuZGlhbG9nLW1vZGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdG9wOiA1MHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuXG4gICAgLm5nZC10b2FzdC1jb250ZW50IHtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgYm94LXNoYWRvdzogNXB4IDJweCA5cHggM3B4ICNjMGMwYzAzYjtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIHBob25lKCkge1xuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmdkLXRvYXN0LWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHJpZ2h0OiAzcHg7XG4gICAgdG9wOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgfVxuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLXNjYWxlLWRvd24tdmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlLXNjYWxlLWRvd24tdmVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgcm90YXRlWSgxODBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cblxuLm5nZC10b2FzdC10ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuIiwiLm5nZC10b2FzdC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIudmlicmF0ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtc2NhbGUtZG93bi12ZXIgMC42NXMgbGluZWFyIGJvdGg7XG4gIGFuaW1hdGlvbjogcm90YXRlLXNjYWxlLWRvd24tdmVyIDAuNjVzIGxpbmVhciBib3RoO1xufVxuLm5nZC10b2FzdC13cmFwcGVyIC5uZ2QtdG9hc3QtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGY3ZmE7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzIxOTZmMztcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zMywgMC4yLCAwLjc4LCAwLjIzKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSkgc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAubmdkLXRvYXN0LWNvbnRlbnQudGhlbWUtc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwODk3YjtcbiAgYmFja2dyb3VuZDogI2UwZjJmMTtcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAubmdkLXRvYXN0LWNvbnRlbnQudGhlbWUtc3VjY2VzcyBwIHtcbiAgY29sb3I6ICMwMDRkNDA7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIgLm5nZC10b2FzdC1jb250ZW50LnRoZW1lLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmZmZGU3O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZmQ1NGY7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIgLm5nZC10b2FzdC1jb250ZW50LnRoZW1lLXdhcm5pbmcgcCB7XG4gIGNvbG9yOiAjZjU3ZjE3O1xufVxuLm5nZC10b2FzdC13cmFwcGVyIC5uZ2QtdG9hc3QtY29udGVudC50aGVtZS1pbmZvIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kOiAjZTFmNWZlO1xufVxuLm5nZC10b2FzdC13cmFwcGVyIC5uZ2QtdG9hc3QtY29udGVudC50aGVtZS1pbmZvIHAge1xuICBjb2xvcjogIzAxNTc5Yjtcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAubmdkLXRvYXN0LWNvbnRlbnQudGhlbWUtZXJyb3Ige1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmNDUxMWU7XG4gIGJhY2tncm91bmQ6ICNmYmU5ZTc7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIgLm5nZC10b2FzdC1jb250ZW50LnRoZW1lLWVycm9yIHAge1xuICBjb2xvcjogI2JmMzYwYztcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAubmdkLXRvYXN0LWNvbnRlbnQuc3RhdGljIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm5nZC10b2FzdC13cmFwcGVyIC5uZ2QtdG9hc3QtY29udGVudC5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIgLm5nZC10b2FzdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm5nZC10b2FzdC13cmFwcGVyLmRpYWxvZy1tb2RlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0b3A6IDUwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgcmlnaHQ6IDA7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG4ubmdkLXRvYXN0LXdyYXBwZXIuZGlhbG9nLW1vZGUgLm5nZC10b2FzdC1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogNXB4IDJweCA5cHggM3B4ICNjMGMwYzAzYjtcbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlci5kaWFsb2ctbW9kZSAubmdkLXRvYXN0LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5nZC10b2FzdC13cmFwcGVyLmRpYWxvZy1tb2RlIC5uZ2QtdG9hc3QtY29udGVudCB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbn1cbi5uZ2QtdG9hc3Qtd3JhcHBlciAubmdkLXRvYXN0LWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDMycHg7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5nZC10b2FzdC13cmFwcGVyIC5uZ2QtdG9hc3QtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZS1zY2FsZS1kb3duLXZlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zY2FsZS1kb3duLXZlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG4ubmdkLXRvYXN0LXRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/base-toast/base-toast.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/base-toast/base-toast.component.ts ***!
  \**********************************************************************/
/*! exports provided: BaseToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseToastComponent", function() { return BaseToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BaseToastComponent = /** @class */ (function () {
    function BaseToastComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeModal = false;
        this.type = 'MODAL';
        this.subject = null;
        this.vibrate = false;
        this.buttons = [];
    }
    BaseToastComponent.prototype.onKeyDown = function (event) {
        if (event.code === 'Escape' && this.type !== 'INLINE') {
            this.Close(event);
        }
    };
    BaseToastComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modalAnimation();
        setTimeout(function () {
            _this.closeModal('');
        }, this.modal.timeout || 5000);
        if (this.modal &&
            this.modal.content &&
            typeof this.modal.content === 'function') {
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.modal.content);
            this.contentRef = this.viewContainerRef.createComponent(factory);
            this.contentRef.instance.pushResult = function () {
                _this.closeModal('CONFIRMED');
            };
            if (this.modal.params) {
                this.contentRef.instance.params = this.modal.params;
            }
            this.contentRef.changeDetectorRef.detectChanges();
        }
    };
    BaseToastComponent.prototype.CloseButtonClick = function () {
        this.closeModal('CANCELED');
    };
    Object.defineProperty(BaseToastComponent.prototype, "textContent", {
        get: function () {
            return typeof this.modal.content === 'string' ? this.modal.content : '';
        },
        enumerable: false,
        configurable: true
    });
    BaseToastComponent.prototype.modalAnimation = function () {
        var _this = this;
        setTimeout(function () {
            _this.activeModal = true;
            _this.buttons = _this.ModalButtons(_this.modal);
        }, 1);
    };
    BaseToastComponent.prototype.Close = function (e, type) {
        if (type === void 0) { type = 'CANCELED'; }
        if (e.target === e.currentTarget || e.code === 'Escape') {
            this.closeModal(type);
        }
    };
    BaseToastComponent.prototype.closeModal = function (type) {
        var _this = this;
        var data = {};
        if (this.contentRef && this.contentRef.instance.data) {
            data = this.contentRef.instance.data.value;
        }
        var result = { type: type, data: data };
        if (this.subject) {
            this.subject.next(result);
        }
        this.resultChange.emit(result);
        if (this.type === 'INLINE') {
            this.vibrate = true;
            setTimeout(function () {
                _this.vibrate = false;
            }, 1000);
        }
        if (this.type === 'MODAL') {
            this.activeModal = false;
            setTimeout(function () {
                _this.appRef.detachView(_this.ref.hostView);
                _this.ref.destroy();
            }, 400);
        }
    };
    BaseToastComponent.prototype.Cancel = function (e) {
        this.Close(e, 'CANCELED');
    };
    BaseToastComponent.prototype.Confirm = function (e) {
        this.Close(e, 'CONFIRMED');
    };
    BaseToastComponent.prototype.ModalButtons = function (dialog) {
        if (!dialog || !dialog.type) {
            return [];
        }
        if (!dialog.type || dialog.type === 'CONFIRMATION') {
            return [
                {
                    type: 'CONFIRM',
                    label: 'modal_confirm',
                },
                {
                    type: 'CANCEL',
                    label: 'modal_cancel',
                },
            ];
        }
        if (!dialog.type || dialog.type === 'YESNO') {
            return [
                {
                    type: 'CONFIRM',
                    label: 'modal_yes',
                },
                {
                    type: 'CANCEL',
                    label: 'modal_no',
                },
            ];
        }
        return [];
    };
    BaseToastComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BaseToastComponent.prototype, "resultChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseToastComponent.prototype, "activeModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseToastComponent.prototype, "appRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseToastComponent.prototype, "ref", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseToastComponent.prototype, "dialogId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseToastComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseToastComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BaseToastComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], BaseToastComponent.prototype, "subject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], BaseToastComponent.prototype, "viewContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BaseToastComponent.prototype, "onKeyDown", null);
    BaseToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngd-base-toast',
            template: __importDefault(__webpack_require__(/*! raw-loader!./base-toast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/base-toast/base-toast.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./base-toast.component.scss */ "./src/app/shared/components/base-toast/base-toast.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], BaseToastComponent);
    return BaseToastComponent;
}());



/***/ }),

/***/ "./src/app/shared/definitions.ts":
/*!***************************************!*\
  !*** ./src/app/shared/definitions.ts ***!
  \***************************************/
/*! exports provided: IconReferences, HttpMethod, ConnectionStatus, DataVisualisionInputType, DataVisualisionElement, ReportScreen, DataVisualisionType, BarChartVisualision, LineChartVisualision, SerialMonitorVisualision, GaugeChartVisualision, ScatterPlotChartVisualision, PieChartVisualision, DataTableVisualision, MapVisualision, RelayControllerVisualision, ModalDialogType, MainTabType, KEY_CODE, NotificationType, StatusbarStatus, StatusbarItemPosition, ImportJobsStatus, ActivePortStatus, ActivePortListenerEvent, ActivePortType, ActivePortDataTarget, SupportedDatabaseVendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconReferences", function() { return IconReferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMethod", function() { return HttpMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionStatus", function() { return ConnectionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVisualisionInputType", function() { return DataVisualisionInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVisualisionElement", function() { return DataVisualisionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportScreen", function() { return ReportScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVisualisionType", function() { return DataVisualisionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartVisualision", function() { return BarChartVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartVisualision", function() { return LineChartVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialMonitorVisualision", function() { return SerialMonitorVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeChartVisualision", function() { return GaugeChartVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterPlotChartVisualision", function() { return ScatterPlotChartVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartVisualision", function() { return PieChartVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableVisualision", function() { return DataTableVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapVisualision", function() { return MapVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelayControllerVisualision", function() { return RelayControllerVisualision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogType", function() { return ModalDialogType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabType", function() { return MainTabType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarStatus", function() { return StatusbarStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarItemPosition", function() { return StatusbarItemPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportJobsStatus", function() { return ImportJobsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePortStatus", function() { return ActivePortStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePortListenerEvent", function() { return ActivePortListenerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePortType", function() { return ActivePortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePortDataTarget", function() { return ActivePortDataTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedDatabaseVendor", function() { return SupportedDatabaseVendor; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IconReferences;
(function (IconReferences) {
    IconReferences["BarChart"] = "./assets/icons/barcharts.png";
})(IconReferences || (IconReferences = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["UPDATE"] = "UPDATE";
})(HttpMethod || (HttpMethod = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "CONNECTED";
    ConnectionStatus["OFFLINE"] = "OFFLINE";
    ConnectionStatus["SLOW_CONNECTION"] = "SLOW_CONNECTION";
})(ConnectionStatus || (ConnectionStatus = {}));
var DataVisualisionInputType;
(function (DataVisualisionInputType) {
    DataVisualisionInputType["Device"] = "Device";
    DataVisualisionInputType["BlendedData"] = "BlendedData";
})(DataVisualisionInputType || (DataVisualisionInputType = {}));
var DataVisualisionElement = /** @class */ (function () {
    function DataVisualisionElement() {
        this.disabled = true;
    }
    return DataVisualisionElement;
}());

var ReportScreen = /** @class */ (function () {
    function ReportScreen() {
    }
    return ReportScreen;
}());

var DataVisualisionType;
(function (DataVisualisionType) {
    DataVisualisionType["BarChart"] = "Bar chart";
    DataVisualisionType["LineChart"] = "Line chart";
    DataVisualisionType["SerialMonitor"] = "Serial Monitor";
    DataVisualisionType["GaugeChart"] = "Gauge chart";
    DataVisualisionType["ScatterPlotChart"] = "Scatter Plot Chart";
    DataVisualisionType["PieChart"] = "Pie chart";
    DataVisualisionType["DataTable"] = "Data table";
    DataVisualisionType["Map"] = "Map";
    DataVisualisionType["RelayController"] = "Relay controller";
})(DataVisualisionType || (DataVisualisionType = {}));
var BarChartVisualision = /** @class */ (function (_super) {
    __extends(BarChartVisualision, _super);
    function BarChartVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.BarChart;
        return _this;
    }
    return BarChartVisualision;
}(DataVisualisionElement));

var LineChartVisualision = /** @class */ (function (_super) {
    __extends(LineChartVisualision, _super);
    function LineChartVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.LineChart;
        return _this;
    }
    return LineChartVisualision;
}(DataVisualisionElement));

var SerialMonitorVisualision = /** @class */ (function (_super) {
    __extends(SerialMonitorVisualision, _super);
    function SerialMonitorVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.type = DataVisualisionType.SerialMonitor;
        return _this;
    }
    return SerialMonitorVisualision;
}(DataVisualisionElement));

var GaugeChartVisualision = /** @class */ (function (_super) {
    __extends(GaugeChartVisualision, _super);
    function GaugeChartVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.GaugeChart;
        return _this;
    }
    return GaugeChartVisualision;
}(DataVisualisionElement));

var ScatterPlotChartVisualision = /** @class */ (function (_super) {
    __extends(ScatterPlotChartVisualision, _super);
    function ScatterPlotChartVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.ScatterPlotChart;
        return _this;
    }
    return ScatterPlotChartVisualision;
}(DataVisualisionElement));

var PieChartVisualision = /** @class */ (function (_super) {
    __extends(PieChartVisualision, _super);
    function PieChartVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.PieChart;
        return _this;
    }
    return PieChartVisualision;
}(DataVisualisionElement));

var DataTableVisualision = /** @class */ (function (_super) {
    __extends(DataTableVisualision, _super);
    function DataTableVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.DataTable;
        return _this;
    }
    return DataTableVisualision;
}(DataVisualisionElement));

var MapVisualision = /** @class */ (function (_super) {
    __extends(MapVisualision, _super);
    function MapVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.Map;
        return _this;
    }
    return MapVisualision;
}(DataVisualisionElement));

var RelayControllerVisualision = /** @class */ (function (_super) {
    __extends(RelayControllerVisualision, _super);
    function RelayControllerVisualision() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataVisualisionType.RelayController;
        return _this;
    }
    return RelayControllerVisualision;
}(DataVisualisionElement));

var ModalDialogType;
(function (ModalDialogType) {
    ModalDialogType["CONFIRMATION"] = "CONFIRMATION";
    ModalDialogType["NOTIFY"] = "NOTIFY";
    ModalDialogType["YESNO"] = "YESNO";
})(ModalDialogType || (ModalDialogType = {}));
var MainTabType;
(function (MainTabType) {
    MainTabType["PRIMARY"] = "primary";
    MainTabType["SUCCESS"] = "success";
    MainTabType["WARNING"] = "warning";
    MainTabType["DANGER"] = "danger";
})(MainTabType || (MainTabType = {}));
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
    KEY_CODE[KEY_CODE["SHIFT"] = 16] = "SHIFT";
    KEY_CODE[KEY_CODE["CTLR"] = 17] = "CTLR";
    KEY_CODE[KEY_CODE["ALT"] = 18] = "ALT";
    KEY_CODE[KEY_CODE["ESCAPE"] = 27] = "ESCAPE";
    KEY_CODE[KEY_CODE["UP_ARROW"] = 38] = "UP_ARROW";
    KEY_CODE[KEY_CODE["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ZERO"] = 48] = "ZERO";
    KEY_CODE[KEY_CODE["ONE"] = 49] = "ONE";
    KEY_CODE[KEY_CODE["TWO"] = 50] = "TWO";
    KEY_CODE[KEY_CODE["THREE"] = 51] = "THREE";
    KEY_CODE[KEY_CODE["FOUR"] = 52] = "FOUR";
    KEY_CODE[KEY_CODE["FIVE"] = 53] = "FIVE";
    KEY_CODE[KEY_CODE["SIX"] = 54] = "SIX";
    KEY_CODE[KEY_CODE["SEVEN"] = 55] = "SEVEN";
    KEY_CODE[KEY_CODE["EIGHT"] = 56] = "EIGHT";
    KEY_CODE[KEY_CODE["NINE"] = 57] = "NINE";
    KEY_CODE[KEY_CODE["PAD_ONE"] = 97] = "PAD_ONE";
    KEY_CODE[KEY_CODE["PAD_TWO"] = 98] = "PAD_TWO";
    KEY_CODE[KEY_CODE["PAD_THREE"] = 99] = "PAD_THREE";
    KEY_CODE[KEY_CODE["PAD_FOUR"] = 100] = "PAD_FOUR";
    KEY_CODE[KEY_CODE["PAD_FIVE"] = 101] = "PAD_FIVE";
    KEY_CODE[KEY_CODE["PAD_SIX"] = 102] = "PAD_SIX";
    KEY_CODE[KEY_CODE["PAD_SEVEN"] = 103] = "PAD_SEVEN";
    KEY_CODE[KEY_CODE["PAD_EIGHT"] = 104] = "PAD_EIGHT";
    KEY_CODE[KEY_CODE["PAD_NINE"] = 105] = "PAD_NINE";
    KEY_CODE[KEY_CODE["A"] = 65] = "A";
    KEY_CODE[KEY_CODE["B"] = 66] = "B";
    KEY_CODE[KEY_CODE["C"] = 67] = "C";
    KEY_CODE[KEY_CODE["D"] = 68] = "D";
    KEY_CODE[KEY_CODE["E"] = 69] = "E";
    KEY_CODE[KEY_CODE["F"] = 70] = "F";
    KEY_CODE[KEY_CODE["G"] = 71] = "G";
    KEY_CODE[KEY_CODE["H"] = 72] = "H";
    KEY_CODE[KEY_CODE["I"] = 73] = "I";
    KEY_CODE[KEY_CODE["J"] = 74] = "J";
    KEY_CODE[KEY_CODE["K"] = 75] = "K";
    KEY_CODE[KEY_CODE["L"] = 76] = "L";
    KEY_CODE[KEY_CODE["M"] = 77] = "M";
    KEY_CODE[KEY_CODE["N"] = 78] = "N";
    KEY_CODE[KEY_CODE["O"] = 79] = "O";
    KEY_CODE[KEY_CODE["P"] = 80] = "P";
    KEY_CODE[KEY_CODE["Q"] = 81] = "Q";
    KEY_CODE[KEY_CODE["R"] = 82] = "R";
    KEY_CODE[KEY_CODE["S"] = 83] = "S";
    KEY_CODE[KEY_CODE["T"] = 84] = "T";
    KEY_CODE[KEY_CODE["U"] = 85] = "U";
    KEY_CODE[KEY_CODE["V"] = 86] = "V";
    KEY_CODE[KEY_CODE["W"] = 87] = "W";
    KEY_CODE[KEY_CODE["X"] = 88] = "X";
    KEY_CODE[KEY_CODE["Y"] = 89] = "Y";
    KEY_CODE[KEY_CODE["Z"] = 90] = "Z";
})(KEY_CODE || (KEY_CODE = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["SUCCESS"] = "success";
    NotificationType["WARNING"] = "warning";
    NotificationType["ERROR"] = "error";
    NotificationType["INFO"] = "info";
})(NotificationType || (NotificationType = {}));
var StatusbarStatus;
(function (StatusbarStatus) {
    StatusbarStatus["NORMAL"] = "normal";
    StatusbarStatus["WARNING"] = "warning";
})(StatusbarStatus || (StatusbarStatus = {}));
var StatusbarItemPosition;
(function (StatusbarItemPosition) {
    StatusbarItemPosition["LEFT"] = "left";
    StatusbarItemPosition["RIGHT"] = "right";
})(StatusbarItemPosition || (StatusbarItemPosition = {}));
var ImportJobsStatus;
(function (ImportJobsStatus) {
    ImportJobsStatus["ACTIVE"] = "Active";
    ImportJobsStatus["FINISHED"] = "Finished";
    ImportJobsStatus["CANCELED"] = "Canceled";
})(ImportJobsStatus || (ImportJobsStatus = {}));
var ActivePortStatus;
(function (ActivePortStatus) {
    ActivePortStatus["Fresh"] = "fresh";
    ActivePortStatus["BroadCasting"] = "broadcasting";
    ActivePortStatus["Idle"] = "idle";
    ActivePortStatus["Connected"] = "connected";
    ActivePortStatus["Disconnected"] = "disconnected";
    ActivePortStatus["RetryConnecting"] = "retryingConnecting";
    ActivePortStatus["BootingConnection"] = "bootingConnection";
})(ActivePortStatus || (ActivePortStatus = {}));
var ActivePortListenerEvent;
(function (ActivePortListenerEvent) {
    ActivePortListenerEvent["Data"] = "data";
    ActivePortListenerEvent["Connected"] = "connected";
})(ActivePortListenerEvent || (ActivePortListenerEvent = {}));
var ActivePortType;
(function (ActivePortType) {
    ActivePortType["SerialPort"] = "serialport";
    ActivePortType["UdpServer"] = "udp";
})(ActivePortType || (ActivePortType = {}));
var ActivePortDataTarget;
(function (ActivePortDataTarget) {
    ActivePortDataTarget["DatawareHouse"] = "DatawareHouse";
    ActivePortDataTarget["UserPreview"] = "UserPreview";
})(ActivePortDataTarget || (ActivePortDataTarget = {}));
var SupportedDatabaseVendor;
(function (SupportedDatabaseVendor) {
    SupportedDatabaseVendor["MySQL"] = "mysql";
    SupportedDatabaseVendor["SQLite"] = "sqlite";
})(SupportedDatabaseVendor || (SupportedDatabaseVendor = {}));


/***/ }),

/***/ "./src/app/shared/services/common.functions.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/common.functions.ts ***!
  \*****************************************************/
/*! exports provided: API, IsMobile, monthNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsMobile", function() { return IsMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthNames", function() { return monthNames; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var API = function (affix) {
    if (affix === void 0) { affix = null; }
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].API + (affix ? '/' + affix : '');
};
function IsMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];


/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ipc-helpers/definitions */ "./ipc-helpers/definitions.ts");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.functions */ "./src/app/shared/services/common.functions.ts");
/* harmony import */ var _realtime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./realtime.service */ "./src/app/shared/services/realtime.service.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.service */ "./src/app/shared/services/store.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This service provides all information that application needs to work.
 * It means any http request, data collection, etc should go through this service.
 * Do not split it into module layer. It's not needed and intentionally all are placed in
 * the same place.
 */









var DataService = /** @class */ (function () {
    function DataService(http, realtimeService, storeService) {
        this.http = http;
        this.realtimeService = realtimeService;
        this.storeService = storeService;
    }
    /**
     * Returns the host ips connected to different parts of the app. Useful for showing user
     * that which ips user can connect to.
     */
    DataService.prototype.hostNetworkInformation$ = function () {
        return this.storeService.networkInformation.asObservable();
    };
    DataService.prototype.bridgeConnected$ = function () {
        return this.storeService.bridgeConnected.asObservable();
    };
    /**
     * Returns devices latest information which is stored into the database
     * try to not use this function as much possible, because devices$() always
     * give you this information with some delay.
     */
    DataService.prototype.getDevices = function () {
        var _this = this;
        return this.http
            .get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/devices'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            res.data.items = res.data.items.map(function (t) {
                return new _ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_4__["DeviceRichInformation"]().from(t);
            });
            _this.storeService.devicesList.next(res.data.items);
            return res;
        }));
    };
    DataService.prototype.devices$ = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getDevices().subscribe();
            _this.storeService.devicesList.subscribe(function (items) { return observer.next(items); });
        });
    };
    DataService.prototype.getSerialPorts = function () {
        var _this = this;
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/serialports')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.storeService.serialPorts.next(res.data.items);
        }));
    };
    DataService.prototype.killStream = function (id) {
        return this.http.delete(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/stream/' + id));
    };
    DataService.prototype.observeSerialPort = function (path) {
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/observe-serialport'), {
            path: path,
        });
    };
    DataService.prototype.serialPorts$ = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getSerialPorts().subscribe();
            _this.storeService.serialPorts.subscribe(function (items) { return observer.next(items); });
        });
    };
    DataService.prototype.getDevice = function (id, options) {
        if (options === void 0) { options = {}; }
        return this.http
            .get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/device/' + id), {
            params: options,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /**
     * Mirrors the incoming data from every devices to dashboard which goes to iot
     * server before processing. Note this is raw data incoming from device, it is not
     * validated yet, and cannot be used where DeviceRichInformation is needed.
     * Use only, when delay is unacceptable for data. (Such as keys)
     */
    DataService.prototype.realtimeMessage$ = function () {
        return this.realtimeService.lastMessageReceived;
    };
    DataService.prototype.getActivePortStreams = function () {
        var _this = this;
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/streams')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.data.items; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (items) {
            _this.storeService.activeStreams.next(items);
        }));
    };
    DataService.prototype.getActivePorts = function () {
        return this.http
            .get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/activeports'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.data.items; }));
    };
    DataService.prototype.getServerInformation = function () {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.data; }));
    };
    DataService.prototype.activeStreams$ = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getActivePortStreams().subscribe();
            _this.storeService.activeStreams.subscribe(function (items) {
                return observer.next(items);
            });
        });
    };
    /**
     * Returns the locations in the app, defined by user.
     */
    DataService.prototype.locations$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([{ id: 1, name: 'Default space' }]);
    };
    /**
     * Returns all available visualisation elements that user can put into their report screens.
     * Aka. Temperature, Controls, Serial Monitor
     */
    DataService.prototype.availableVisualisionTypes$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["BarChartVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["LineChartVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["SerialMonitorVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["GaugeChartVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["ScatterPlotChartVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["PieChartVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["DataTableVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["MapVisualision"](),
            new _definitions__WEBPACK_IMPORTED_MODULE_5__["RelayControllerVisualision"](),
        ]);
    };
    /**
     * Users can build as many as dashboard they want, and place DataVisualisionElement objects
     * inside and connect them into the data.
     */
    DataService.prototype.reportScreens$ = function () {
        var item1 = new _definitions__WEBPACK_IMPORTED_MODULE_5__["BarChartVisualision"]();
        item1.location = {
            x: 0,
            y: 1,
        };
        item1.name = 'Bar Chart 1';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            {
                name: 'Dashboard 1',
                icon: _definitions__WEBPACK_IMPORTED_MODULE_5__["IconReferences"].BarChart,
                id: 1,
                elements: [item1],
            },
        ]);
    };
    /**
     * Adds a new element into an specific sheet that user has.
     * Users can have as many as sheets they need, so pass the number here.
     */
    DataService.prototype.createVisualElement = function (element, sheetId) {
        if (sheetId === void 0) { sheetId = 1; }
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/visualization'), __assign(__assign({}, element), { sheetId: sheetId }));
    };
    DataService.prototype.postDevice = function (data) {
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/device'), __assign({}, data));
    };
    DataService.prototype.importCSV = function (file, options) {
        var formData = new FormData();
        formData.append('Image', file);
        formData.append('options', JSON.stringify(options));
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/import-csv'), formData);
    };
    DataService.prototype.importStop = function (jobId) {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/import-stop/' + jobId));
    };
    DataService.prototype.getImportStatus = function () {
        var _this = this;
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/import-status')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.storeService.activeImports.next(res.data.items);
        }));
    };
    DataService.prototype.importStatus$ = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getImportStatus().subscribe();
            _this.storeService.activeImports.subscribe(function (items) {
                return observer.next(items);
            });
        });
    };
    DataService.prototype.serverGeneralInformation = function () {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])(''));
    };
    DataService.prototype.postActivePort = function (data) {
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/openport'), data);
    };
    DataService.prototype.deviceYearDayStat = function (deviceId) {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/device-year-stats/' + deviceId));
    };
    DataService.prototype.triggerInternalIconTray = function () {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('tray/on'));
    };
    DataService.prototype.getDataBaseInformation = function () {
        return this.http.get(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.data.database && res.data.database.connectionOptions) {
                return res.data.database.connectionOptions;
            }
            return res;
        }));
    };
    DataService.prototype.postDatabaseConfiguration = function (data) {
        return this.http.post(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/database'), data);
    };
    DataService.prototype.deleteActivePort = function (id) {
        return this.http.delete(Object(_common_functions__WEBPACK_IMPORTED_MODULE_6__["API"])('api/iot/activeport/' + id));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _realtime_service__WEBPACK_IMPORTED_MODULE_7__["RealtimeService"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _realtime_service__WEBPACK_IMPORTED_MODULE_7__["RealtimeService"],
            _store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/import.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/import.service.ts ***!
  \***************************************************/
/*! exports provided: ImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return ImportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _progress_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.service */ "./src/app/shared/services/progress-bar.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var ImportService = /** @class */ (function () {
    function ImportService(dataService, progressBarService) {
        var _this = this;
        this.dataService = dataService;
        this.progressBarService = progressBarService;
        this.importItems = [];
        this.lastItems = [];
        this.jobs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        var jobs = this.jobs;
        this.dataService.importStatus$().subscribe(function (items) {
            _this.importItems = items;
            _this.addToStore();
            _this.checkImporingFinished();
            if (!(_this.importItems && _this.importItems.length > 0)) {
                return;
            }
            _this.lastItems = _this.importItems;
            var _loop_1 = function (item) {
                _this.progressBarService.addProgress({
                    id: item.jobId,
                    title: 'Importing ' +
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(item.linesProccessed) +
                        ' of ' +
                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(item.totalLines),
                    precentage: Math.round((item.linesProccessed * 100) / item.totalLines),
                    data: item,
                    stopFunction: function () {
                        dataService.importStop(item.jobId).subscribe(function (result) {
                            var newJobs = jobs
                                .getValue()
                                .map(function (e) {
                                return e.jobId === item.jobId
                                    ? __assign(__assign({}, e), { status: _definitions__WEBPACK_IMPORTED_MODULE_1__["ImportJobsStatus"].CANCELED }) : e;
                            });
                            jobs.next(newJobs);
                            progressBarService.removeProgress(item.jobId);
                        });
                    },
                });
            };
            for (var _i = 0, _a = _this.importItems; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_1(item);
            }
        });
    }
    ImportService.prototype.addToStore = function () {
        var allJobs = [];
        var _loop_2 = function (item) {
            allJobs = this_1.jobs.getValue() || [];
            if (allJobs.find(function (x) { return x.jobId == item.jobId; })) {
                var jobsItems = allJobs.map(function (e) {
                    return e.jobId === item.jobId && e.status === _definitions__WEBPACK_IMPORTED_MODULE_1__["ImportJobsStatus"].ACTIVE
                        ? __assign(__assign({}, e), { linesProccessed: item.linesProccessed, secondsLeft: item.secondsLeft, timeLeft: item.timeLeft }) : e;
                });
                this_1.jobs.next(jobsItems);
            }
            else {
                var itemStore = {
                    jobId: item.jobId,
                    filename: item.filename,
                    linesProccessed: item.linesProccessed,
                    secondsLeft: item.secondsLeft,
                    timeLeft: item.timeLeft,
                    totalLines: item.totalLines,
                    status: _definitions__WEBPACK_IMPORTED_MODULE_1__["ImportJobsStatus"].ACTIVE,
                };
                this_1.jobs.next(__spreadArrays(allJobs, [itemStore]));
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.importItems; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_2(item);
        }
    };
    ImportService.prototype.checkImporingFinished = function () {
        if (this.lastItems.length === this.importItems.length) {
            return;
        }
        var _loop_3 = function (lastItem) {
            if (this_2.importItems.findIndex(function (x) { return x.jobId === lastItem.jobId; }) === -1 &&
                this_2.jobs
                    .getValue()
                    .find(function (x) {
                    return x.jobId == lastItem.jobId && x.status === _definitions__WEBPACK_IMPORTED_MODULE_1__["ImportJobsStatus"].ACTIVE;
                })) {
                var jobsItems = this_2.jobs
                    .getValue()
                    .map(function (e) {
                    return e.jobId === lastItem.jobId
                        ? __assign(__assign({}, e), { status: _definitions__WEBPACK_IMPORTED_MODULE_1__["ImportJobsStatus"].FINISHED }) : e;
                });
                this_2.jobs.next(jobsItems);
                this_2.progressBarService.removeProgress(lastItem.jobId);
                this_2.lastItems = this_2.lastItems.filter(function (x) { return x.jobId !== lastItem.jobId; });
            }
        };
        var this_2 = this;
        for (var _i = 0, _a = this.lastItems; _i < _a.length; _i++) {
            var lastItem = _a[_i];
            _loop_3(lastItem);
        }
    };
    ImportService.ctorParameters = function () { return [
        { type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"] }
    ]; };
    ImportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _progress_bar_service__WEBPACK_IMPORTED_MODULE_3__["ProgressBarService"]])
    ], ImportService);
    return ImportService;
}());



/***/ }),

/***/ "./src/app/shared/services/ipc.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/ipc.service.ts ***!
  \************************************************/
/*! exports provided: IPCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPCService", function() { return IPCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ipc-helpers/definitions */ "./ipc-helpers/definitions.ts");
/* harmony import */ var _realtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realtime.service */ "./src/app/shared/services/realtime.service.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.service */ "./src/app/shared/services/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IPCService = /** @class */ (function () {
    function IPCService(realtimeService, storeService, ref) {
        var _this = this;
        this.realtimeService = realtimeService;
        this.storeService = storeService;
        this.ref = ref;
        if (window.require) {
            try {
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                throw e;
            }
        }
        else {
            console.warn('App not running inside Electron!');
        }
        if (!this.ipc) {
            return;
        }
        this.ipc.on(_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__["IotEventTypes"].IncomingMessage, function (type, data) {
            _this.realtimeService.handleIncomingData(data);
        });
        this.ipc.on(_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__["IotEventTypes"].HostNetworkInformationChange, function (type, data) {
            _this.storeService.networkInformation.next(data);
            _this.ref.tick();
        });
        // This is now handled by socket io. Review if it will be needed for release v2
        // this.ipc.on(IotEventTypes.BridgeConnect, (type, data) => {
        //   this.storeService.bridgeConnected.next(data);
        //   this.ref.tick();
        // });
        this.ipc.send(_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__["IotEventTypes"].BridgeConnect, null);
    }
    IPCService.prototype.requestInstall = function () {
        this.ipc.send(_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__["IotEventTypes"].RequestInstallServer);
    };
    IPCService.prototype.requestUninstall = function () {
        this.ipc.send(_ipc_helpers_definitions__WEBPACK_IMPORTED_MODULE_1__["IotEventTypes"].RequestUninstallServer);
    };
    IPCService.ctorParameters = function () { return [
        { type: _realtime_service__WEBPACK_IMPORTED_MODULE_2__["RealtimeService"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
    ]; };
    IPCService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_realtime_service__WEBPACK_IMPORTED_MODULE_2__["RealtimeService"],
            _store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]])
    ], IPCService);
    return IPCService;
}());



/***/ }),

/***/ "./src/app/shared/services/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ActiveModalsCount, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModalsCount", function() { return ActiveModalsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base-modal/base-modal.component */ "./src/app/shared/components/base-modal/base-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActiveModalsCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
var ModalService = /** @class */ (function () {
    function ModalService(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    ModalService.prototype.open = function (modal) {
        if (!modal) {
            console.warn('Modal is not defined. add argument');
            return null;
        }
        var componentRef = this.resolver.resolveComponentFactory(_components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_2__["BaseModalComponent"]);
        var tsc = componentRef.create(this.injector);
        tsc.instance.ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        tsc.instance.modal = modal;
        this.appRef.attachView(tsc.hostView);
        var domElem = tsc.hostView
            .rootNodes[0];
        document.body.appendChild(domElem);
        ActiveModalsCount.next(ActiveModalsCount.value + 1);
        var result = tsc.instance.subject.asObservable();
        var $interalSub = result.subscribe(function (x) {
            ActiveModalsCount.next(ActiveModalsCount.value - 1);
            $interalSub.unsubscribe();
        });
        return result;
    };
    ModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigator.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/navigator.service.ts ***!
  \******************************************************/
/*! exports provided: NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/router */ "./src/app/router.ts");
/* harmony import */ var app_locale_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/locale/translations */ "./src/app/locale/translations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigatorService = /** @class */ (function () {
    function NavigatorService() {
        this.translations = app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"];
        this.navigateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NavigatorService.prototype.go = function (title, path, params) {
        if (params === void 0) { params = {}; }
        this.navigateSubject.next({ title: title, path: path, params: params });
    };
    NavigatorService.prototype.openSerialPort = function (path) {
        this.go(app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].tabsTitle.serialPort, app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].serialMonitoring, {
            port: encodeURIComponent(path),
        });
    };
    NavigatorService.prototype.openActiveStreamsTab = function () {
        this.go('Network and streams', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].activeStreams);
    };
    NavigatorService.prototype.openRealtimeTab = function () {
        this.go('Realtime', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].realtime);
    };
    NavigatorService.prototype.openDevices = function () {
        this.go('Devices', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].devices);
    };
    NavigatorService.prototype.openPort = function () {
        this.go('Open port', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].openPort);
    };
    NavigatorService.prototype.openNewDevice = function () {
        this.go('New device', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].deviceNew);
    };
    NavigatorService.prototype.openDatabaseConfig = function () {
        this.go('Database configuration', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].database);
    };
    NavigatorService.prototype.openSettings = function () {
        this.go(app_locale_translations__WEBPACK_IMPORTED_MODULE_2__["translations"].tabsTitle.settings, app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].settings);
    };
    NavigatorService.prototype.openLogicBuilding = function () {
        this.go('Logic building', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].logicBuilding);
    };
    NavigatorService.prototype.deviceEdit = function (id) {
        this.go('Edit device', app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].deviceEdit, {
            device: id,
        });
    };
    NavigatorService.prototype.openViewDeviceTab = function (device) {
        var title = "Device " + (device.imei || 'unknown') + " (" + device.id + ")";
        this.go(title, app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].deviceView, { id: device.id });
    };
    NavigatorService.prototype.openImportCSVTab = function (file) {
        if (file === void 0) { file = null; }
        var title = "Import data";
        this.go(title, app_router__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].importCsv, { file: file });
    };
    NavigatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], NavigatorService);
    return NavigatorService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.service */ "./src/app/shared/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService(toastService) {
        this.toastService = toastService;
    }
    NotificationService.prototype.showFailedMessage = function (title, message) {
        this.toastService
            .open({ title: title, content: message, type: 'NOTIFY', status: 'ERROR' })
            .subscribe();
    };
    NotificationService.prototype.showSuccessMessage = function (title, message) {
        this.toastService
            .open({ title: title, content: message, type: 'NOTIFY', status: 'SUCCESS' })
            .subscribe();
    };
    NotificationService.ctorParameters = function () { return [
        { type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }
    ]; };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/progress-bar.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/progress-bar.service.ts ***!
  \*********************************************************/
/*! exports provided: ProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarService", function() { return ProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressBarService = /** @class */ (function () {
    function ProgressBarService() {
        this.progressBars = [];
        this.progressBar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.progressBars);
    }
    ProgressBarService.prototype.addProgress = function (progressBar) {
        if (!progressBar.id) {
            progressBar.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["maxId"])(this.progressBars);
            this.progressBars.push(progressBar);
        }
        else {
            if (this.progressBars.find(function (x) { return x.id === progressBar.id; })) {
                this.progressBars = this.progressBars.map(function (e) {
                    return e.id === progressBar.id ? progressBar : e;
                });
            }
            else {
                this.progressBars.push(progressBar);
            }
            if (progressBar.precentage >= 100) {
                this.removeProgress(progressBar.id);
            }
        }
        this.progressBar.next(this.progressBars);
        return progressBar;
    };
    ProgressBarService.prototype.removeProgress = function (progressId) {
        this.progressBars = this.progressBars.filter(function (x) { return x.id !== progressId; });
        this.progressBar.next(this.progressBars);
    };
    ProgressBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarService);
    return ProgressBarService;
}());



/***/ }),

/***/ "./src/app/shared/services/realtime.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/realtime.service.ts ***!
  \*****************************************************/
/*! exports provided: RealtimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeService", function() { return RealtimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealtimeService = /** @class */ (function () {
    function RealtimeService() {
        this.lastMessageReceived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    RealtimeService.prototype.handleIncomingData = function (data) {
        if (typeof data === 'object' && data && !data.timestamp) {
            data.timestamp = new Date().getTime();
        }
        this.lastMessageReceived.next(data);
    };
    RealtimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], RealtimeService);
    return RealtimeService;
}());



/***/ }),

/***/ "./src/app/shared/services/shortkey.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/shortkey.service.ts ***!
  \*****************************************************/
/*! exports provided: ShortkeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortkeyService", function() { return ShortkeyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var _navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShortkeyService = /** @class */ (function () {
    function ShortkeyService(rendererFactory2, navigatorService) {
        var _this = this;
        this.rendererFactory2 = rendererFactory2;
        this.navigatorService = navigatorService;
        this.renderer = this.rendererFactory2.createRenderer(null, null);
        this.renderer.listen('document', 'keyup', function (event) {
            var $event = document.all ? window.event : event;
            if (/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
                return;
            }
            if (event.ctrlKey && event.keyCode == _definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].I) {
                _this.navigatorService.openImportCSVTab();
            }
            if (event.ctrlKey && event.keyCode == _definitions__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].C) {
                _this.navigatorService.openDevices();
            }
        });
    }
    ShortkeyService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
        { type: _navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"] }
    ]; };
    ShortkeyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"],
            _navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], ShortkeyService);
    return ShortkeyService;
}());



/***/ }),

/***/ "./src/app/shared/services/statusbar.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/statusbar.service.ts ***!
  \******************************************************/
/*! exports provided: StatusbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarService", function() { return StatusbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusbarService = /** @class */ (function () {
    function StatusbarService() {
        this.statusbarOptions = {
            status: _definitions__WEBPACK_IMPORTED_MODULE_1__["StatusbarStatus"].WARNING,
        };
        this.statusbar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.statusbarOptions);
    }
    StatusbarService.prototype.setStatus = function (status) {
        if (this.statusbarOptions.status != status) {
            this.statusbarOptions.status = status;
            this.statusbar.next(this.statusbarOptions);
        }
    };
    StatusbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], StatusbarService);
    return StatusbarService;
}());



/***/ }),

/***/ "./src/app/shared/services/store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * This service provides all information that application needs to work.
 * It means any http request, data collection, etc should go through this service.
 * Do not split it into module layer. It's not needed and intentionally all are placed in
 * the same place.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = /** @class */ (function () {
    function StoreService() {
        this.networkInformation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.bridgeConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.devicesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.activeStreams = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.activeImports = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.serialPorts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/stream.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/stream.service.ts ***!
  \***************************************************/
/*! exports provided: StreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamService", function() { return StreamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * This service provides all information that application needs to work.
 * It means any http request, data collection, etc should go through this service.
 * Do not split it into module layer. It's not needed and intentionally all are placed in
 * the same place.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StreamService = /** @class */ (function () {
    function StreamService() {
        this.serialDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    StreamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], StreamService);
    return StreamService;
}());



/***/ }),

/***/ "./src/app/shared/services/tabs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/tabs.service.ts ***!
  \*************************************************/
/*! exports provided: TabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabService", function() { return TabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions */ "./src/app/shared/definitions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iot_components_main_tab_main_tab_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../iot/components/main-tab/main-tab.router */ "./src/app/iot/components/main-tab/main-tab.router.ts");
/* harmony import */ var _navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigator.service */ "./src/app/shared/services/navigator.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabService = /** @class */ (function () {
    function TabService(location, navigatorService) {
        var _this = this;
        this.location = location;
        this.navigatorService = navigatorService;
        this.onTabAdded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onTabRemoved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onTabActived = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.params = {};
        this.ls = JSON.parse(localStorage.getItem('tabs'));
        this.allTabs = this.ls || [];
        this.tabs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]((this.allTabs = this.allTabs.map(function (v, i) { return (__assign({ id: i + 1, active: i === 0 }, v)); })));
        this.navigatorService.navigateSubject.subscribe(function (change) {
            _this.quickTab(change.title, change.path, change.params);
        });
    }
    TabService.prototype.quickTab = function (title, path, params) {
        if (params === void 0) { params = {}; }
        var route = _iot_components_main_tab_main_tab_router__WEBPACK_IMPORTED_MODULE_5__["tabRoutes"].find(function (x) { return x.path === path; });
        var newTab = {
            id: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["random"])(111111, 9999999),
            title: title,
            type: _definitions__WEBPACK_IMPORTED_MODULE_1__["MainTabType"].PRIMARY,
            content: route.component,
            params: params,
        };
        this.onTabAdded.next(newTab);
        this.allTabs.push(newTab);
        this.tabs.next(this.allTabs);
        this.activeTab(newTab);
    };
    TabService.prototype.removeTab = function (tab) {
        if (this.allTabs.length > 0) {
            var tabindex = this.allTabs.findIndex(function (x) { return x.id == tab.id; });
            tab = this.allTabs[tabindex];
            this.allTabs = this.allTabs.filter(function (x) { return x.id !== tab.id; });
            this.tabs.next(this.allTabs);
            this.onTabRemoved.next(tab);
            console.log(tabindex, this.allTabs.length);
            if (tab.active) {
                var nextTab = 0;
                if (tabindex == 0) {
                    nextTab = 0;
                }
                else if (tabindex == this.allTabs.length) {
                    nextTab = this.allTabs.length - 1;
                }
                else {
                    nextTab = tabindex;
                }
                this.activeTab(this.allTabs[nextTab]);
            }
        }
        this.storeTabInLocalStorage();
    };
    TabService.prototype.activeTab = function (tab) {
        if (tab) {
            this.allTabs = this.allTabs.map(function (e) {
                return e.id == tab.id ? __assign(__assign({}, e), { active: true }) : __assign(__assign({}, e), { active: false });
            });
            this.tabs.next(this.allTabs);
            this.onTabActived.next(tab);
            this.storeTabInLocalStorage();
        }
    };
    TabService.prototype.setTabParam = function (tab) {
        if (tab.params) {
            var property = btoa("/" + tab.url + "/" + tab.id);
            this.params[property] = tab.params;
        }
    };
    TabService.prototype.getTabParam = function (url) {
        var property = btoa(url);
        return this.params[property];
    };
    TabService.prototype.activeTabById = function (index) {
        if (this.allTabs.length > 0) {
            this.activeTab(this.allTabs[index - 1]);
        }
    };
    TabService.prototype.tabFromRouter = function (url) {
        var urlSplit = url.split('/');
        var id = parseInt(urlSplit[urlSplit.length - 1]);
        return this.allTabs.find(function (x) { return x.id === id; });
    };
    TabService.prototype.nextTab = function () {
        var targetIndex = this.allTabs.findIndex(function (x) { return x.active; });
        if (targetIndex != this.allTabs.length - 1) {
            this.activeTab(this.allTabs[targetIndex + 1]);
        }
    };
    TabService.prototype.prevTab = function () {
        var targetIndex = this.allTabs.findIndex(function (x) { return x.active; });
        if (targetIndex != 0) {
            this.activeTab(this.allTabs[targetIndex - 1]);
        }
    };
    TabService.prototype.removeActiveTab = function () {
        var target = this.allTabs.find(function (x) { return x.active; });
        this.removeTab(target);
    };
    TabService.prototype.storeTabInLocalStorage = function () {
        // localStorage.setItem('tabs', JSON.stringify(this.allTabs));
    };
    TabService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _navigator_service__WEBPACK_IMPORTED_MODULE_6__["NavigatorService"] }
    ]; };
    TabService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _navigator_service__WEBPACK_IMPORTED_MODULE_6__["NavigatorService"]])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "./src/app/shared/services/toast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/*! exports provided: ActiveToastsCount, ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveToastsCount", function() { return ActiveToastsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_base_toast_base_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base-toast/base-toast.component */ "./src/app/shared/components/base-toast/base-toast.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var ActiveToastsCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
var ToastService = /** @class */ (function () {
    function ToastService(resolver, appRef, injector) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
        this.activeModals = [];
        this.modalQueue = [];
    }
    ToastService.prototype.open = function (modal) {
        if (!modal.timeout) {
            modal.timeout = 2000;
        }
        if (this.activeModals.length === 0) {
            return this.insertDialog(modal);
        }
        this.modalQueue = __spreadArrays(this.modalQueue, [modal]);
    };
    ToastService.prototype.insertDialog = function (modal) {
        var _this = this;
        if (!modal) {
            console.warn('Modal is not defined. add argument');
            return null;
        }
        var componentRef = this.resolver.resolveComponentFactory(_components_base_toast_base_toast_component__WEBPACK_IMPORTED_MODULE_2__["BaseToastComponent"]);
        var tsc = componentRef.create(this.injector);
        this.activeModals = __spreadArrays(this.activeModals, [tsc]);
        tsc.instance.dialogId = "" + Math.random();
        tsc.instance.ref = tsc;
        tsc.instance.appRef = this.appRef;
        tsc.instance.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        tsc.instance.modal = modal;
        this.appRef.attachView(tsc.hostView);
        var domElem = tsc.hostView
            .rootNodes[0];
        document.body.prepend(domElem);
        ActiveToastsCount.next(ActiveToastsCount.value + 1);
        var result = tsc.instance.subject.asObservable();
        var $interalSub = result.subscribe(function (x) {
            _this.activeModals = _this.activeModals.filter(function (item) { return item.instance.dialogId !== tsc.instance.dialogId; });
            if (_this.activeModals.length === 0 && _this.modalQueue.length > 0) {
                _this.open(_this.modalQueue[0]);
                _this.modalQueue = _this.modalQueue.filter(function (t, i) { return i > 0; });
            }
            ActiveToastsCount.next(ActiveToastsCount.value - 1);
            $interalSub.unsubscribe();
        });
        return result;
    };
    ToastService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/shared/services/visualization.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/visualization.service.ts ***!
  \**********************************************************/
/*! exports provided: VisualizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationService", function() { return VisualizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var app_iot_components_select_visualization_list_select_visualization_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/iot/components/select-visualization-list/select-visualization-list.component */ "./src/app/iot/components/select-visualization-list/select-visualization-list.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/shared/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisualizationService = /** @class */ (function () {
    function VisualizationService(modalService, dataService) {
        this.modalService = modalService;
        this.dataService = dataService;
    }
    /**
     * User can select what kind of visualiztion they want to add into the report
     */
    VisualizationService.prototype.promptAddVisualization = function () {
        var _this = this;
        this.modalService
            .open({
            title: 'Add visualization',
            content: app_iot_components_select_visualization_list_select_visualization_list_component__WEBPACK_IMPORTED_MODULE_1__["SelectVisualiztionComponent"],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (result) { return result.type === 'CONFIRMED'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) {
            return _this.dataService.createVisualElement(result.data, 1);
        }))
            .subscribe();
    };
    VisualizationService.ctorParameters = function () { return [
        { type: _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    VisualizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], VisualizationService);
    return VisualizationService;
}());



/***/ }),

/***/ "./src/app/shared/services/websocket.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/websocket.service.ts ***!
  \******************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _realtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realtime.service */ "./src/app/shared/services/realtime.service.ts");
/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream.service */ "./src/app/shared/services/stream.service.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/shared/services/store.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebSocketService = /** @class */ (function () {
    function WebSocketService(storeService, ref, realtimeService, streamService, dataService) {
        var _this = this;
        this.storeService = storeService;
        this.ref = ref;
        this.realtimeService = realtimeService;
        this.streamService = streamService;
        this.dataService = dataService;
        var socket = io("ws://" + environments_environment__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].HOST + ":" + environments_environment__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].PORT);
        socket.on('activeStreams', function (data) {
            if (Array.isArray(data)) {
                _this.storeService.activeStreams.next(data);
            }
        });
        socket.on('SerialPortStreamData', function (data) {
            _this.streamService.serialDataStream.next(data);
        });
        socket.on('rawMessage', function (data) {
            _this.realtimeService.handleIncomingData(data);
        });
        socket.on('activeImports', function (data) {
            if (Array.isArray(data)) {
                _this.storeService.activeImports.next(data);
            }
        });
        socket.on('disconnect', function () {
            _this.storeService.bridgeConnected.next(false);
            _this.ref.tick();
        });
        socket.on('connect', function () {
            _this.storeService.bridgeConnected.next(true);
            _this.dataService.triggerInternalIconTray().subscribe();
            _this.ref.tick();
        });
    }
    WebSocketService.ctorParameters = function () { return [
        { type: _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _realtime_service__WEBPACK_IMPORTED_MODULE_2__["RealtimeService"] },
        { type: _stream_service__WEBPACK_IMPORTED_MODULE_3__["StreamService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _realtime_service__WEBPACK_IMPORTED_MODULE_2__["RealtimeService"],
            _stream_service__WEBPACK_IMPORTED_MODULE_3__["StreamService"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: playerFactory, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_ipc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ipc.service */ "./src/app/shared/services/ipc.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/shared/services/websocket.service.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/__ivy_ngcc__/ngx-json-viewer.es5.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/base-modal/base-modal.component */ "./src/app/shared/components/base-modal/base-modal.component.ts");
/* harmony import */ var _components_base_toast_base_toast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/base-toast/base-toast.component */ "./src/app/shared/components/base-toast/base-toast.component.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_8___default.a;
}
var SharedModule = /** @class */ (function () {
    function SharedModule(ipcService, webSocketService) {
        this.ipcService = ipcService;
        this.webSocketService = webSocketService;
    }
    SharedModule.ctorParameters = function () { return [
        { type: _services_ipc_service__WEBPACK_IMPORTED_MODULE_4__["IPCService"] },
        { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"] }
    ]; };
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_10__["BaseModalComponent"], _components_base_toast_base_toast_component__WEBPACK_IMPORTED_MODULE_11__["BaseToastComponent"]],
            providers: [_services_modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([]),
                ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"].forRoot({ player: playerFactory }),
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxJsonViewerModule"],
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxJsonViewerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            ],
        }),
        __metadata("design:paramtypes", [_services_ipc_service__WEBPACK_IMPORTED_MODULE_4__["IPCService"],
            _services_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"]])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: numberWithCommas, fileSize, maxId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberWithCommas", function() { return numberWithCommas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxId", function() { return maxId; });
/**
 * Add commas as thousands seperator to a number
 * @param num
 */
function numberWithCommas(num) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * Calculate file size as a standard units
 * @param size
 */
function fileSize(size) {
    var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'), i = 0;
    while (size > 900) {
        size /= 1024;
        i++;
    }
    var exactSize = Math.round(size * 100) / 100 + ' ' + fSExt[i];
    return exactSize;
}
/**
 * Get max id of an array object that has id property
 * @param array
 */
function maxId(array) {
    return array.length > 0
        ? Math.max.apply(Math, array.map(function (e) { return e.id + 1; }))
        : 1;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var PORT = '8081';
var HOST = 'localhost';
var AppConfig = {
    production: false,
    environment: 'LOCAL',
    PORT: PORT,
    HOST: HOST,
    API: "http://" + HOST + ":" + PORT,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    preserveWhitespaces: false
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/fesm2015/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ali/lalaland/torabito/src/main.ts */"./src/main.ts");


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map