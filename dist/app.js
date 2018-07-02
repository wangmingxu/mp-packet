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
        navigationBarTitleText: '声财包',
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
          text: '语音口令',
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
    key: 'getSystemInfo',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _promisify2.default)(wx.getSystemInfo);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSystemInfo() {
        return _ref.apply(this, arguments);
      }

      return getSystemInfo;
    }()
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref3, code, _ref4, userInfo, signature, loadSessionRet, my_session_key, initUserInfoRet, signInfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.globalData.userInfo) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', this.globalData.userInfo);

              case 2:
                _context2.next = 4;
                return (0, _promisify2.default)(wx.login);

              case 4:
                _ref3 = _context2.sent;
                code = _ref3.code;
                _context2.next = 8;
                return (0, _promisify2.default)(wx.getUserInfo);

              case 8:
                _ref4 = _context2.sent;
                userInfo = _ref4.userInfo;
                signature = _ref4.signature;
                _context2.next = 13;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadSessionKey',
                  data: { code: code }
                });

              case 13:
                loadSessionRet = _context2.sent;
                my_session_key = loadSessionRet.data;
                _context2.next = 17;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/initRedPaperUser',
                  data: Object.assign(userInfo, { signature: signature, my_session_key: my_session_key })
                });

              case 17:
                initUserInfoRet = _context2.sent;
                signInfo = initUserInfoRet.data;
                _context2.next = 21;
                return (0, _promisify2.default)(wx.setStorage, { key: 'signInfo', data: signInfo });

              case 21:
                this.globalData.userInfo = userInfo;
                return _context2.abrupt('return', this.globalData.userInfo);

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0Iiwic2VsZWN0ZWRJY29uUGF0aCIsImljb25QYXRoIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwiYm9yZGVyU3R5bGUiLCJwb3NpdGlvbiIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsImxvZ2luIiwiY29kZSIsImdldFVzZXJJbmZvIiwic2lnbmF0dXJlIiwidXJsIiwiZGF0YSIsImxvYWRTZXNzaW9uUmV0IiwibXlfc2Vzc2lvbl9rZXkiLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0VXNlckluZm9SZXQiLCJzaWduSW5mbyIsInNldFN0b3JhZ2UiLCJrZXkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxREUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWxEZEEsTUFrRGMsR0FsREw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxhQUZLLEVBR0wsY0FISyxFQUlMLGNBSkssRUFLTCxlQUxLLEVBTUwsZUFOSyxDQURBO0FBU1BDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLE1BRnhCO0FBR05DLGdDQUF3QixLQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCLFNBTFg7QUFNTkMsK0JBQXVCO0FBTmpCLE9BVEQ7QUFpQlBDLGNBQVE7QUFDTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLGVBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyw0QkFBa0Isc0NBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FESSxFQU9KO0FBQ0VILG9CQUFVLGFBRFo7QUFFRUMsZ0JBQU0sTUFGUjtBQUdFQyw0QkFBa0IscUNBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FQSSxFQWFKO0FBQ0VILG9CQUFVLGVBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyw0QkFBa0IsdUNBSHBCO0FBSUVDLG9CQUFVO0FBSlosU0FiSSxDQURBO0FBcUJOQyxlQUFPLFNBckJEO0FBc0JOUix5QkFBaUIsU0F0Qlg7QUF1Qk5TLHVCQUFlLFNBdkJUO0FBd0JOQyxxQkFBYSxPQXhCUDtBQXlCTkMsa0JBQVU7QUF6Qko7QUFqQkQsS0FrREs7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7Ozs7Ozs7Ozs7dUJBR08seUJBQVVDLEdBQUdDLGFBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSUYsS0FBS0osVUFBTCxDQUFnQkMsUTs7Ozs7a0RBQWlCLEtBQUtELFVBQUwsQ0FBZ0JDLFE7Ozs7dUJBRzlCLHlCQUFVRSxHQUFHRSxLQUFiLEM7Ozs7QUFBZkMsb0IsU0FBQUEsSTs7dUJBRThCLHlCQUFVSCxHQUFHSSxXQUFiLEM7Ozs7QUFBOUJOLHdCLFNBQUFBLFE7QUFBVU8seUIsU0FBQUEsUzs7dUJBQ1csdUJBQWU7QUFDMUNDLG1FQUQwQztBQUUxQ0Msd0JBQU0sRUFBRUosVUFBRjtBQUZvQyxpQkFBZixDOzs7QUFBdkJLLDhCO0FBSUFDLDhCLEdBQWlCRCxlQUFlRCxJOzt1QkFDUix1QkFBZTtBQUMzQ0QscUVBRDJDO0FBRTNDQyx3QkFBTUcsT0FBT0MsTUFBUCxDQUFjYixRQUFkLEVBQXdCLEVBQUVPLG9CQUFGLEVBQWFJLDhCQUFiLEVBQXhCO0FBRnFDLGlCQUFmLEM7OztBQUF4QkcsK0I7QUFJQUMsd0IsR0FBV0QsZ0JBQWdCTCxJOzt1QkFDM0IseUJBQVVQLEdBQUdjLFVBQWIsRUFBeUIsRUFBRUMsS0FBSyxVQUFQLEVBQW1CUixNQUFNTSxRQUF6QixFQUF6QixDOzs7QUFDTixxQkFBS2hCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCQSxRQUEzQjtrREFDTyxLQUFLRCxVQUFMLENBQWdCQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0VFLGVBQUtrQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi91dGlscy9wcm9taXNpZnknXHJcbmltcG9ydCB7IHJlcXVlc3RCYXNlVXJsIH0gZnJvbSAnLi9jb25zdGFudCdcclxuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJy4vdXRpbHMvcmVxdWVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zaGFyZScsXHJcbiAgICAgICdwYWdlcy9yZXN1bHQnLFxyXG4gICAgICAncGFnZXMvcGFja2V0JyxcclxuICAgICAgJ3BhZ2VzL2hpc3RvcnknLFxyXG4gICAgICAncGFnZXMvYmFsYW5jZSdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5aOw6LSi5YyFJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y2ZjZmNicsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9oaXN0b3J5JyxcclxuICAgICAgICAgIHRleHQ6ICforrDlvZUnLFxyXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaWNvbl9yZWNvcmRfYWN0aXZlLnBuZycsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaWNvbl9yZWNvcmQucG5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICB0ZXh0OiAn6K+t6Z+z5Y+j5LukJyxcclxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2ljb25fYXVkaW9fYWN0aXZlLnBuZycsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaWNvbl9hdWRpby5wbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2JhbGFuY2UnLFxyXG4gICAgICAgICAgdGV4dDogJ+S9meminScsXHJcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9pY29uX2JhbGFuY2VfYWN0aXZlLnBuZycsXHJcbiAgICAgICAgICBpY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvaWNvbl9iYWxhbmNlLnBuZydcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGNvbG9yOiAnIzU2NTY1NicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2ZhODMzMCcsXHJcbiAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRTeXN0ZW1JbmZvKCkge1xyXG4gICAgYXdhaXQgcHJvbWlzaWZ5KHd4LmdldFN5c3RlbUluZm8pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIC8vIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBwcm9taXNpZnkod3guY2hlY2tTZXNzaW9uKTtcclxuICAgIC8vIGlmKCFzZXNzaW9uKSB7XHJcbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5sb2dpbilcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHsgdXNlckluZm8sIHNpZ25hdHVyZSB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmdldFVzZXJJbmZvKVxyXG4gICAgY29uc3QgbG9hZFNlc3Npb25SZXQgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZSh7XHJcbiAgICAgIHVybDogYCR7cmVxdWVzdEJhc2VVcmx9L2xvYWRTZXNzaW9uS2V5YCxcclxuICAgICAgZGF0YTogeyBjb2RlIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBteV9zZXNzaW9uX2tleSA9IGxvYWRTZXNzaW9uUmV0LmRhdGFcclxuICAgIGNvbnN0IGluaXRVc2VySW5mb1JldCA9IGF3YWl0IHJlcXVlc3RQcm9taXNlKHtcclxuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vaW5pdFJlZFBhcGVyVXNlcmAsXHJcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24odXNlckluZm8sIHsgc2lnbmF0dXJlLCBteV9zZXNzaW9uX2tleSB9KVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHNpZ25JbmZvID0gaW5pdFVzZXJJbmZvUmV0LmRhdGFcclxuICAgIGF3YWl0IHByb21pc2lmeSh3eC5zZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJywgZGF0YTogc2lnbkluZm8gfSlcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgfVxyXG59XHJcbiJdfQ==