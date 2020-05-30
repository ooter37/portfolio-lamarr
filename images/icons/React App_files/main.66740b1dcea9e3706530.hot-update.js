webpackHotUpdate("main",{

/***/ "./src/Components/Auth/Login.js":
/*!**************************************!*\
  !*** ./src/Components/Auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/reducers/user */ "./src/redux/reducers/user.js");
/* harmony import */ var _Auth_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth.scss */ "./src/Components/Auth/Auth.scss");
/* harmony import */ var _Auth_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Auth_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Alerts_Alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Alerts/Alerts */ "./src/Components/Alerts/Alerts.js");
var _jsxFileName = "/Users/derek/Web Development/highland/src/Components/Auth/Login.js";






const Login = props => {
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const changeHandler = e => {
    const setValue = e.target.value;
    console.log(setValue); // setValue(e.target.value)
  };

  const loginHandler = e => {
    e.preventDefault();
    props.login(email, password).then(() => {
      setEmail('');
      setPassword('');
      props.redirect();
      _Alerts_Alerts__WEBPACK_IMPORTED_MODULE_4__["authSuccess"].fire({
        title: 'Sign in successful.'
      });
    }).catch(err => {
      _Alerts_Alerts__WEBPACK_IMPORTED_MODULE_4__["errorLogin"].fire({
        text: 'Incorrect username or password.'
      }); // console.log("Error with login.", err)   // This causes a ~7 sec delay on login?
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-text-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Please login to continue.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-container",
    onSubmit: loginHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-input-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: setEmail,
    placeholder: "email",
    type: "text",
    required: true,
    value: email,
    onChange: changeHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "setPassword",
    placeholder: "password",
    type: "password",
    required: true,
    value: password,
    onChange: changeHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button login-button auth-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Login")), props.location ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "need-register-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Need an account?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button click-register-button auth-button",
    onClick: props.display,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Click to Register")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  login: _redux_reducers_user__WEBPACK_IMPORTED_MODULE_2__["login"]
})(Login));

/***/ })

})
//# sourceMappingURL=main.66740b1dcea9e3706530.hot-update.js.map