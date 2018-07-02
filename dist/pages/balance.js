'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _promisify = require('./../utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _constant = require('./../constant/index.js');

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _numberPrecision = require('./../npm/number-precision/build/index.js');

var _numberPrecision2 = _interopRequireDefault(_numberPrecision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Balance = function (_wepy$page) {
  _inherits(Balance, _wepy$page);

  function Balance() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Balance);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Balance.__proto__ || Object.getPrototypeOf(Balance)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      userMoney: '',
      transMoney: 0
    }, _this.methods = {
      opendebug: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _promisify2.default)(wx.setEnableDebug, { enableDebug: true });

                case 2:
                  console.log('开始调试');

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function opendebug() {
          return _ref2.apply(this, arguments);
        }

        return opendebug;
      }(),
      withdrawalAll: function withdrawalAll() {
        wx.showModal({
          title: '提示',
          content: '提现功能尚未开放',
          showCancel: false
        });
      },

      submit: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(money) {
          var _ref4, data, transResult;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

                case 2:
                  _ref4 = _context2.sent;
                  data = _ref4.data;
                  _context2.next = 6;
                  return (0, _request2.default)({
                    url: _constant.requestBaseUrl + '/transfers',
                    data: Object.assign(data, { money: _numberPrecision2.default.times(money, 100) })
                  });

                case 6:
                  transResult = _context2.sent;

                  wx.showModal({
                    title: '提示',
                    content: '提现成功!',
                    showCancel: false
                  });
                  _this.loadData();

                case 9:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        function submit(_x) {
          return _ref3.apply(this, arguments);
        }

        return submit;
      }(),
      moneyInputHandler: function moneyInputHandler(e) {
        _this.transMoney = +e.detail.value;
      }
    }, _this.events = {
      tabChange: function tabChange(index) {
        // console.log(index)
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Balance, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // this.loadData().then(()=>{
      wx.stopPullDownRefresh();
      // });
    }
  }, {
    key: 'loadData',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref6, data, userMoney;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

              case 2:
                _ref6 = _context3.sent;
                data = _ref6.data;
                _context3.next = 6;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadUserMoney',
                  data: data
                });

              case 6:
                userMoney = _context3.sent;

                this.userMoney = userMoney.data;
                this.$apply();

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _ref5.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: 'onLoad',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$parent.getUserInfo();

              case 2:
                userInfo = _context4.sent;

                this.setData({ userInfo: userInfo });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoad() {
        return _ref7.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {
      this.loadData();
    }
  }]);

  return Balance;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Balance , 'pages/balance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2UuanMiXSwibmFtZXMiOlsiQmFsYW5jZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlck1vbmV5IiwidHJhbnNNb25leSIsIm1ldGhvZHMiLCJvcGVuZGVidWciLCJ3eCIsInNldEVuYWJsZURlYnVnIiwiZW5hYmxlRGVidWciLCJjb25zb2xlIiwibG9nIiwid2l0aGRyYXdhbEFsbCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJzdWJtaXQiLCJtb25leSIsImdldFN0b3JhZ2UiLCJrZXkiLCJ1cmwiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aW1lcyIsInRyYW5zUmVzdWx0IiwibG9hZERhdGEiLCJtb25leUlucHV0SGFuZGxlciIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImV2ZW50cyIsInRhYkNoYW5nZSIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkYXBwbHkiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozt3TEFlbkJDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGtCQUFZO0FBRlAsSyxRQUlQQyxPLEdBQVU7QUFDRkMsZUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUVBLHlCQUFVQyxHQUFHQyxjQUFiLEVBQTZCLEVBQUVDLGFBQWEsSUFBZixFQUE3QixDQUZBOztBQUFBO0FBR05DLDBCQUFRQyxHQUFSLENBQVksTUFBWjs7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUtSQyxtQkFMUSwyQkFLUTtBQUNkTCxXQUFHTSxTQUFILENBQWE7QUFDWEMsaUJBQU8sSUFESTtBQUVYQyxtQkFBUyxVQUZFO0FBR1hDLHNCQUFZO0FBSEQsU0FBYjtBQUtELE9BWE87O0FBWVJDO0FBQUEsNEVBQVEsa0JBQU1DLEtBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ2lCLHlCQUFVWCxHQUFHWSxVQUFiLEVBQXlCLEVBQUVDLEtBQUssVUFBUCxFQUF6QixDQURqQjs7QUFBQTtBQUFBO0FBQ0VsQixzQkFERixTQUNFQSxJQURGO0FBQUE7QUFBQSx5QkFFb0IsdUJBQWU7QUFDdkNtQixnRUFEdUM7QUFFdkNuQiwwQkFBTW9CLE9BQU9DLE1BQVAsQ0FBY3JCLElBQWQsRUFBb0IsRUFBRWdCLE9BQU8sMEJBQUdNLEtBQUgsQ0FBU04sS0FBVCxFQUFnQixHQUFoQixDQUFULEVBQXBCO0FBRmlDLG1CQUFmLENBRnBCOztBQUFBO0FBRUFPLDZCQUZBOztBQU1ObEIscUJBQUdNLFNBQUgsQ0FBYTtBQUNYQywyQkFBTyxJQURJO0FBRVhDLDZCQUFTLE9BRkU7QUFHWEMsZ0NBQVk7QUFIRCxtQkFBYjtBQUtBLHdCQUFLVSxRQUFMOztBQVhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsU0FaUTtBQXlCUkMseUJBQW1CLDhCQUFLO0FBQ3RCLGNBQUt2QixVQUFMLEdBQWtCLENBQUN3QixFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBQ0Q7QUEzQk8sSyxRQThCVkMsTSxHQUFTO0FBQ1BDLGlCQUFXLDBCQUFTO0FBQ2xCO0FBQ0Q7QUFITSxLOzs7Ozt3Q0FsRFc7QUFDbEI7QUFDQXpCLFNBQUcwQixtQkFBSDtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7Ozt1QkFFd0IseUJBQVUxQixHQUFHWSxVQUFiLEVBQXlCLEVBQUVDLEtBQUssVUFBUCxFQUF6QixDOzs7O0FBQWZsQixvQixTQUFBQSxJOzt1QkFDZ0IsdUJBQWU7QUFDckNtQixrRUFEcUM7QUFFckNuQjtBQUZxQyxpQkFBZixDOzs7QUFBbEJDLHlCOztBQUlOLHFCQUFLQSxTQUFMLEdBQWlCQSxVQUFVRCxJQUEzQjtBQUNBLHFCQUFLZ0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBNkN1QixLQUFLQyxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQWpCQyx3Qjs7QUFDTixxQkFBS0MsT0FBTCxDQUFhLEVBQUVELGtCQUFGLEVBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNQLFdBQUtYLFFBQUw7QUFDRDs7OztFQS9Ea0MsZUFBS2EsSTs7a0JBQXJCeEMsTyIsImZpbGUiOiJiYWxhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuLi91dGlscy9wcm9taXNpZnknXG5pbXBvcnQgeyByZXF1ZXN0QmFzZVVybCB9IGZyb20gJy4uL2NvbnN0YW50J1xuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG5pbXBvcnQgTlAgZnJvbSAnbnVtYmVyLXByZWNpc2lvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsYW5jZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIC8vIHRoaXMubG9hZERhdGEoKS50aGVuKCgpPT57XG4gICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgLy8gfSk7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGEoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0U3RvcmFnZSwgeyBrZXk6ICdzaWduSW5mbycgfSlcbiAgICBjb25zdCB1c2VyTW9uZXkgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZSh7XG4gICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9sb2FkVXNlck1vbmV5YCxcbiAgICAgIGRhdGFcbiAgICB9KVxuICAgIHRoaXMudXNlck1vbmV5ID0gdXNlck1vbmV5LmRhdGFcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbiAgY29uZmlnID0ge31cbiAgY29tcG9uZW50cyA9IHt9XG4gIGRhdGEgPSB7XG4gICAgdXNlck1vbmV5OiAnJyxcbiAgICB0cmFuc01vbmV5OiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBvcGVuZGVidWcoKSB7XG4gICAgICBhd2FpdCBwcm9taXNpZnkod3guc2V0RW5hYmxlRGVidWcsIHsgZW5hYmxlRGVidWc6IHRydWUgfSlcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vosIPor5UnKVxuICAgIH0sXG4gICAgd2l0aGRyYXdhbEFsbCgpIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+aPkOeOsOWKn+iDveWwmuacquW8gOaUvicsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3VibWl0OiBhc3luYyBtb25leSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJyB9KVxuICAgICAgY29uc3QgdHJhbnNSZXN1bHQgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZSh7XG4gICAgICAgIHVybDogYCR7cmVxdWVzdEJhc2VVcmx9L3RyYW5zZmVyc2AsXG4gICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oZGF0YSwgeyBtb25leTogTlAudGltZXMobW9uZXksIDEwMCkgfSlcbiAgICAgIH0pXG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICfmj5DnjrDmiJDlip8hJyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgIH0pXG4gICAgICB0aGlzLmxvYWREYXRhKClcbiAgICB9LFxuICAgIG1vbmV5SW5wdXRIYW5kbGVyOiBlID0+IHtcbiAgICAgIHRoaXMudHJhbnNNb25leSA9ICtlLmRldGFpbC52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICB0YWJDaGFuZ2U6IGluZGV4ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgdGhpcy5zZXREYXRhKHsgdXNlckluZm8gfSlcbiAgfVxuICBvblNob3coKSB7XG4gICAgdGhpcy5sb2FkRGF0YSgpXG4gIH1cbn1cbiJdfQ==