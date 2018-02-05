'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _promisify = require('./utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _constant = require('./constant/index.js');

var _request = require('./utils/request.js');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/share', 'pages/result', 'pages/packet', 'pages/history', 'pages/balance'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        backgroundColor: '#f6f6f6',
        enablePullDownRefresh: true
      },
      tabBar: {
        list: [{
          pagePath: 'pages/history',
          text: '记录',
          selectedIconPath: 'assets/images/icon_record_active.png',
          iconPath: 'assets/images/icon_record.png'
        }, {
          pagePath: 'pages/index',
          text: '语音红包',
          selectedIconPath: 'assets/images/icon_audio_active.png',
          iconPath: 'assets/images/icon_audio.png'
        }, {
          pagePath: 'pages/balance',
          text: '余额',
          selectedIconPath: 'assets/images/icon_balance_active.png',
          iconPath: 'assets/images/icon_balance.png'
        }],
        color: '#565656',
        backgroundColor: '#ffffff',
        selectedColor: '#fa8330',
        borderStyle: 'white',
        position: 'bottom'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch(options) {
      this.setScene(options.scene);
      this.getSystemInfo();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(options);
                this.setScene(options.scene);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'getSystemInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _promisify2.default)(wx.getSystemInfo);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSystemInfo() {
        return _ref2.apply(this, arguments);
      }

      return getSystemInfo;
    }()
  }, {
    key: 'setScene',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(scene) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _promisify2.default)(wx.setStorage, { key: 'scene', data: scene });

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setScene(_x2) {
        return _ref3.apply(this, arguments);
      }

      return setScene;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _ref5, code, _ref6, userInfo, signature, loadSessionRet, my_session_key, initUserInfoRet, signInfo;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.globalData.userInfo) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', this.globalData.userInfo);

              case 2:
                _context4.next = 4;
                return (0, _promisify2.default)(wx.login);

              case 4:
                _ref5 = _context4.sent;
                code = _ref5.code;
                _context4.next = 8;
                return (0, _promisify2.default)(wx.getUserInfo);

              case 8:
                _ref6 = _context4.sent;
                userInfo = _ref6.userInfo;
                signature = _ref6.signature;
                _context4.next = 13;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadSessionKey',
                  data: { code: code }
                });

              case 13:
                loadSessionRet = _context4.sent;
                my_session_key = loadSessionRet.data;
                _context4.next = 17;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/initRedPaperUser',
                  data: Object.assign(userInfo, { signature: signature, my_session_key: my_session_key })
                });

              case 17:
                initUserInfoRet = _context4.sent;
                signInfo = initUserInfoRet.data;
                _context4.next = 21;
                return (0, _promisify2.default)(wx.setStorage, { key: 'signInfo', data: signInfo });

              case 21:
                this.globalData.userInfo = userInfo;
                return _context4.abrupt('return', this.globalData.userInfo);

              case 23:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserInfo() {
        return _ref4.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRJY29uUGF0aCIsImljb25QYXRoIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJwb3NpdGlvbiIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsIm9wdGlvbnMiLCJzZXRTY2VuZSIsInNjZW5lIiwiZ2V0U3lzdGVtSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwibG9naW4iLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJzaWduYXR1cmUiLCJ1cmwiLCJsb2FkU2Vzc2lvblJldCIsIm15X3Nlc3Npb25fa2V5IiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdFVzZXJJbmZvUmV0Iiwic2lnbkluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWxEZEEsTUFrRGMsR0FsREw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxhQUZLLEVBR0wsY0FISyxFQUlMLGNBSkssRUFLTCxlQUxLLEVBTUwsZUFOSyxDQURBO0FBU1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixRQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCLFNBTFg7QUFNTkMsK0JBQXVCO0FBTmpCLE9BVEQ7QUFpQlBDLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGVBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyw0QkFBa0Isc0NBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FESSxFQU9KO0FBQ0VILG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sTUFGUjtBQUdFQyw0QkFBa0IscUNBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGVBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyw0QkFBa0IsdUNBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FiSSxDQURBO0FBcUJOQyxlQUFPLFNBckJEO0FBc0JOUix5QkFBaUIsU0F0Qlg7QUF1Qk5TLHVCQUFlLFNBdkJUO0FBd0JOQyxxQkFBYSxPQXhCUDtBQXlCTkMsa0JBQVU7QUF6Qko7QUFqQkQsS0FrREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7Ozs2QkFFUUMsTyxFQUFTO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBY0QsUUFBUUUsS0FBdEI7QUFDQSxXQUFLQyxhQUFMO0FBQ0Q7Ozs7MEZBRVlILE87Ozs7O0FBQ1hJLHdCQUFRQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxxQkFBS0MsUUFBTCxDQUFjRCxRQUFRRSxLQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJTSx5QkFBVUksR0FBR0gsYUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUdPRCxLOzs7Ozs7dUJBQ1AseUJBQVVJLEdBQUdDLFVBQWIsRUFBeUIsRUFBRUMsS0FBSyxPQUFQLEVBQWdCQyxNQUFNUCxLQUF0QixFQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFJRixLQUFLTCxVQUFMLENBQWdCQyxROzs7OztrREFBaUIsS0FBS0QsVUFBTCxDQUFnQkMsUTs7Ozt1QkFHOUIseUJBQVVRLEdBQUdJLEtBQWIsQzs7OztBQUFmQyxvQixTQUFBQSxJOzt1QkFFOEIseUJBQVVMLEdBQUdNLFdBQWIsQzs7OztBQUE5QmQsd0IsU0FBQUEsUTtBQUFVZSx5QixTQUFBQSxTOzt1QkFDVyx1QkFBZTtBQUMxQ0MsbUVBRDBDO0FBRTFDTCx3QkFBTSxFQUFFRSxVQUFGO0FBRm9DLGlCQUFmLEM7OztBQUF2QkksOEI7QUFJQUMsOEIsR0FBaUJELGVBQWVOLEk7O3VCQUNSLHVCQUFlO0FBQzNDSyxxRUFEMkM7QUFFM0NMLHdCQUFNUSxPQUFPQyxNQUFQLENBQWNwQixRQUFkLEVBQXdCLEVBQUVlLG9CQUFGLEVBQWFHLDhCQUFiLEVBQXhCO0FBRnFDLGlCQUFmLEM7OztBQUF4QkcsK0I7QUFJQUMsd0IsR0FBV0QsZ0JBQWdCVixJOzt1QkFDM0IseUJBQVVILEdBQUdDLFVBQWIsRUFBeUIsRUFBRUMsS0FBSyxVQUFQLEVBQW1CQyxNQUFNVyxRQUF6QixFQUF6QixDOzs7QUFDTixxQkFBS3ZCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjtrREFDTyxLQUFLRCxVQUFMLENBQWdCQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0ZFLGVBQUt1QixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi91dGlscy9wcm9taXNpZnknXHJcbmltcG9ydCB7IHJlcXVlc3RCYXNlVXJsIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJy4vdXRpbHMvcmVxdWVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zaGFyZScsXHJcbiAgICAgICdwYWdlcy9yZXN1bHQnLFxyXG4gICAgICAncGFnZXMvcGFja2V0JyxcclxuICAgICAgJ3BhZ2VzL2hpc3RvcnknLFxyXG4gICAgICAncGFnZXMvYmFsYW5jZSdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y2ZjZmNicsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaGlzdG9yeScsXHJcbiAgICAgICAgICB0ZXh0OiAn6K6w5b2VJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2ljb25fcmVjb3JkX2FjdGl2ZS5wbmcnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2ljb25fcmVjb3JkLnBuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICAgdGV4dDogJ+ivremfs+e6ouWMhScsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9pY29uX2F1ZGlvX2FjdGl2ZS5wbmcnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2ljb25fYXVkaW8ucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9iYWxhbmNlJyxcclxuICAgICAgICAgIHRleHQ6ICfkvZnpop0nLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaWNvbl9iYWxhbmNlX2FjdGl2ZS5wbmcnLFxyXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2ljb25fYmFsYW5jZS5wbmcnXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjb2xvcjogJyM1NjU2NTYnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNmYTgzMzAnLFxyXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcclxuICAgICAgcG9zaXRpb246ICdib3R0b20nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgdGhpcy5zZXRTY2VuZShvcHRpb25zLnNjZW5lKVxyXG4gICAgdGhpcy5nZXRTeXN0ZW1JbmZvKClcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uU2hvdyhvcHRpb25zKSB7XHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgdGhpcy5zZXRTY2VuZShvcHRpb25zLnNjZW5lKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0U3lzdGVtSW5mbygpIHtcclxuICAgIGF3YWl0IHByb21pc2lmeSh3eC5nZXRTeXN0ZW1JbmZvKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0U2NlbmUoc2NlbmUpIHtcclxuICAgIGF3YWl0IHByb21pc2lmeSh3eC5zZXRTdG9yYWdlLCB7IGtleTogJ3NjZW5lJywgZGF0YTogc2NlbmUgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHByb21pc2lmeSh3eC5jaGVja1Nlc3Npb24pO1xyXG4gICAgLy8gaWYoIXNlc3Npb24pIHtcclxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmxvZ2luKVxyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgeyB1c2VySW5mbywgc2lnbmF0dXJlIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0VXNlckluZm8pXHJcbiAgICBjb25zdCBsb2FkU2Vzc2lvblJldCA9IGF3YWl0IHJlcXVlc3RQcm9taXNlKHtcclxuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vbG9hZFNlc3Npb25LZXlgLFxyXG4gICAgICBkYXRhOiB7IGNvZGUgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IG15X3Nlc3Npb25fa2V5ID0gbG9hZFNlc3Npb25SZXQuZGF0YVxyXG4gICAgY29uc3QgaW5pdFVzZXJJbmZvUmV0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xyXG4gICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9pbml0UmVkUGFwZXJVc2VyYCxcclxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih1c2VySW5mbywgeyBzaWduYXR1cmUsIG15X3Nlc3Npb25fa2V5IH0pXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc2lnbkluZm8gPSBpbml0VXNlckluZm9SZXQuZGF0YVxyXG4gICAgYXdhaXQgcHJvbWlzaWZ5KHd4LnNldFN0b3JhZ2UsIHsga2V5OiAnc2lnbkluZm8nLCBkYXRhOiBzaWduSW5mbyB9KVxyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gdXNlckluZm9cclxuICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICB9XHJcbn1cclxuIl19