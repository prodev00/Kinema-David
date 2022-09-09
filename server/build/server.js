/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.dev.ts":
/*!******************************!*\
  !*** ./config/config.dev.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nconst devConfig = {\n    db: {\n        uri: process.env.MONGO_URI || '',\n        options: {\n            dbName: 'dev',\n            keepAlive: true,\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            useCreateIndex: true\n        },\n    }\n};\nexports.default = devConfig;\n\n\n//# sourceURL=webpack:///./config/config.dev.ts?");

/***/ }),

/***/ "./config/config.prod.ts":
/*!*******************************!*\
  !*** ./config/config.prod.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nconst prodConfig = {\n    db: {\n        uri: process.env.MONGO_URI || '',\n        options: {\n            dbName: 'prod',\n            keepAlive: true,\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            useCreateIndex: true,\n        },\n    }\n};\nexports.default = prodConfig;\n\n\n//# sourceURL=webpack:///./config/config.prod.ts?");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst config_dev_1 = __importDefault(__webpack_require__(/*! ./config.dev */ \"./config/config.dev.ts\"));\nconst config_prod_1 = __importDefault(__webpack_require__(/*! ./config.prod */ \"./config/config.prod.ts\"));\nconst selectedConfiguration =  false\n    ? undefined\n    : config_dev_1.default;\nexports.default = selectedConfiguration;\n\n\n//# sourceURL=webpack:///./config/config.ts?");

/***/ }),

/***/ "./controllers/contact.ts":
/*!********************************!*\
  !*** ./controllers/contact.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.update = exports.remove = exports.get = exports.list = exports.create = void 0;\nconst http_status_codes_1 = __importDefault(__webpack_require__(/*! http-status-codes */ \"http-status-codes\"));\nconst contact_1 = __importDefault(__webpack_require__(/*! ../models/contact */ \"./models/contact.ts\"));\nconst create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const payload = req.body;\n        const contact = yield contact_1.default.create(payload);\n        return res.status(http_status_codes_1.default.OK).send(contact);\n    }\n    catch (err) {\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n});\nexports.create = create;\nconst list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { q } = req.query;\n        const filter = {\n            lastname: new RegExp(\".*\\\\b\" + q + \".*\\\\b\")\n        };\n        const contacts = yield contact_1.default.find(filter);\n        return res.status(http_status_codes_1.default.OK).send(contacts);\n    }\n    catch (err) {\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n});\nexports.list = list;\nconst get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { id } = req.params;\n        const contact = yield contact_1.default.findById(id);\n        return res.status(http_status_codes_1.default.OK).send(contact);\n    }\n    catch (err) {\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n});\nexports.get = get;\nconst remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { id } = req.params;\n        yield contact_1.default.findByIdAndDelete(id);\n        return res.status(http_status_codes_1.default.OK).send();\n    }\n    catch (err) {\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n});\nexports.remove = remove;\nconst update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const { id } = req.params;\n        const payload = req.body;\n        const contact = yield contact_1.default.findByIdAndUpdate(id, payload);\n        return res.status(http_status_codes_1.default.OK).send(contact);\n    }\n    catch (err) {\n        console.log('Failed to update the contact: ', err);\n        return res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR).send();\n    }\n});\nexports.update = update;\n\n\n//# sourceURL=webpack:///./controllers/contact.ts?");

/***/ }),

/***/ "./core/init.ts":
/*!**********************!*\
  !*** ./core/init.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.initMongoose = exports.initMiddleware = void 0;\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./utils.ts\");\nconst initMiddleware = (app) => {\n    app.use((0, cors_1.default)());\n    app.use(body_parser_1.default.json());\n    app.use(body_parser_1.default.urlencoded({ extended: false }));\n};\nexports.initMiddleware = initMiddleware;\nconst initMongoose = () => {\n    mongoose_1.default.connect(config_1.default.db.uri, config_1.default.db.options, (err) => {\n        if (err) {\n            console.log('could not connect to mongodb', err);\n        }\n        else {\n            console.log('connected to mongodb');\n        }\n        mongoose_1.default.set('debug', !utils_1.isProduction);\n    });\n};\nexports.initMongoose = initMongoose;\n\n\n//# sourceURL=webpack:///./core/init.ts?");

/***/ }),

/***/ "./models/contact.ts":
/*!***************************!*\
  !*** ./models/contact.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst contactSchema = new mongoose_1.Schema({\n    firstname: {\n        type: String,\n        required: true,\n    },\n    lastname: {\n        type: String,\n        required: true,\n    },\n    phone: {\n        type: String,\n        required: true,\n    }\n});\nconst Contact = (0, mongoose_1.model)('Contact', contactSchema);\nexports.default = Contact;\n\n\n//# sourceURL=webpack:///./models/contact.ts?");

/***/ }),

/***/ "./routes/contact.ts":
/*!***************************!*\
  !*** ./routes/contact.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst contact_1 = __webpack_require__(/*! ../controllers/contact */ \"./controllers/contact.ts\");\nconst router = (0, express_1.Router)();\nrouter.post('/', contact_1.create);\nrouter.get('/', contact_1.list);\nrouter.get('/:id', contact_1.get);\nrouter.put('/:id', contact_1.update);\nrouter.delete('/:id', contact_1.remove);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./routes/contact.ts?");

/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst init_1 = __webpack_require__(/*! ./core/init */ \"./core/init.ts\");\nconst contact_1 = __importDefault(__webpack_require__(/*! ./routes/contact */ \"./routes/contact.ts\"));\nconst app = (0, express_1.default)();\nconst PORT = 8000;\n(0, init_1.initMongoose)();\n(0, init_1.initMiddleware)(app);\napp.get('/', (_req, res) => {\n    res.send({\n        message: 'API running',\n    });\n});\napp.use('/api/contact', contact_1.default);\napp.listen(PORT, () => {\n    console.log('server started at http://localhost:' + PORT);\n});\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isProduction = void 0;\nexports.isProduction = \"development\" === 'production';\n\n\n//# sourceURL=webpack:///./utils.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status-codes\");\n\n//# sourceURL=webpack:///external_%22http-status-codes%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });