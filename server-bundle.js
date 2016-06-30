/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var express = __webpack_require__(1);

	var authorize = function authorize(username, password) {
	    //UNCOMMENT THIS LINE IF YOU WANT A PASSWORD PROTECTED SITE
	    //return 'someone' === username & 'password' === password;
	    return true;
	};

	var configureServer = function configureServer() {
	    var server = express.createServer();

	    server.configure(function () {
	        //any static file from the static directory, just return it to user if requested
	        server.use(express.static('public'));
	    });
	    return server;
	};

	var port = process.env.PORT || 3000;
	var server = configureServer();

	//Catch every url call and redirect to index.html
	server.get(/^.*$/, function (req, res) {
	    res.redirect("index.html");
	});

	server.listen(port);
	console.log("static serving: " + __dirname + "/public");
	console.log("listening on port " + port);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ }
/******/ ]);