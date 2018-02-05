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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Balance = function (_wepy$page) {
  _inherits(Balance, _wepy$page);

  function Balance() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Balance);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Balance.__proto__ || Object.getPrototypeOf(Balance)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      userMoney: ''
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
      submit: function submit() {
        wx.showModal({
          title: '提示',
          content: '提现功能尚未开放',
          showCancel: false
        });
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
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$parent.getUserInfo();

              case 2:
                userInfo = _context2.sent;

                this.setData({ userInfo: userInfo });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad() {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _ref5, data, userMoney;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

              case 2:
                _ref5 = _context3.sent;
                data = _ref5.data;
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

      function onShow() {
        return _ref4.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Balance;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Balance , 'pages/balance'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2UuanMiXSwibmFtZXMiOlsiQmFsYW5jZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlck1vbmV5IiwibWV0aG9kcyIsIm9wZW5kZWJ1ZyIsInd4Iiwic2V0RW5hYmxlRGVidWciLCJlbmFibGVEZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoZHJhd2FsQWxsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN1Ym1pdCIsImV2ZW50cyIsInRhYkNoYW5nZSIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJnZXRTdG9yYWdlIiwia2V5IiwidXJsIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBTW5CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsaUJBQVc7QUFETixLLFFBR1BDLE8sR0FBVTtBQUNGQyxlQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRUEseUJBQVVDLEdBQUdDLGNBQWIsRUFBNEIsRUFBQ0MsYUFBWSxJQUFiLEVBQTVCLENBRkE7O0FBQUE7QUFHTkMsMEJBQVFDLEdBQVIsQ0FBWSxNQUFaOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBS1JDLG1CQUxRLDJCQUtRO0FBQ2RMLFdBQUdNLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxJQURJO0FBRVhDLG1CQUFTLFVBRkU7QUFHWEMsc0JBQVk7QUFIRCxTQUFiO0FBS0QsT0FYTztBQVlSQyxZQVpRLG9CQVlDO0FBQ1BWLFdBQUdNLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxJQURJO0FBRVhDLG1CQUFTLFVBRkU7QUFHWEMsc0JBQVk7QUFIRCxTQUFiO0FBS0Q7QUFsQk8sSyxRQXFCVkUsTSxHQUFTO0FBQ1BDLGlCQUFXLDBCQUFTO0FBQ2xCO0FBQ0Q7QUFITSxLOzs7Ozt3Q0EvQlU7QUFDakI7QUFDSVosU0FBR2EsbUJBQUg7QUFDSjtBQUNEOzs7Ozs7Ozs7Ozt1QkFrQ3dCLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixFOzs7QUFBakJDLHdCOztBQUNOLHFCQUFLQyxPQUFMLENBQWEsRUFBRUQsa0JBQUYsRUFBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUd1Qix5QkFBVWhCLEdBQUdrQixVQUFiLEVBQXlCLEVBQUVDLEtBQUssVUFBUCxFQUF6QixDOzs7O0FBQWZ2QixvQixTQUFBQSxJOzt1QkFDZ0IsdUJBQWU7QUFDckN3QixrRUFEcUM7QUFFckN4QjtBQUZxQyxpQkFBZixDOzs7QUFBbEJDLHlCOztBQUlOLHFCQUFLQSxTQUFMLEdBQWlCQSxVQUFVRCxJQUEzQjtBQUNBLHFCQUFLeUIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpEaUMsZUFBS0MsSTs7a0JBQXJCN0IsTyIsImZpbGUiOiJiYWxhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuLi91dGlscy9wcm9taXNpZnknXG5pbXBvcnQgeyByZXF1ZXN0QmFzZVVybCB9IGZyb20gJy4uL2NvbnN0YW50J1xuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGFuY2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBvblB1bGxEb3duUmVmcmVzaCgpe1xuICAgIC8vIHRoaXMubG9hZERhdGEoKS50aGVuKCgpPT57XG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcbiAgICAvLyB9KTtcbiAgfVxuICBjb25maWcgPSB7fVxuICBjb21wb25lbnRzID0ge31cbiAgZGF0YSA9IHtcbiAgICB1c2VyTW9uZXk6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhc3luYyBvcGVuZGVidWcoKSB7XG4gICAgICBhd2FpdCBwcm9taXNpZnkod3guc2V0RW5hYmxlRGVidWcse2VuYWJsZURlYnVnOnRydWV9KVxuICAgICAgY29uc29sZS5sb2coJ+W8gOWni+iwg+ivlScpO1xuICAgIH0sXG4gICAgd2l0aGRyYXdhbEFsbCgpIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+aPkOeOsOWKn+iDveWwmuacquW8gOaUvicsXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3VibWl0KCkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiAn5o+Q546w5Yqf6IO95bCa5pyq5byA5pS+JyxcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgIHRhYkNoYW5nZTogaW5kZXggPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbyB9KVxuICB9XG4gIGFzeW5jIG9uU2hvdygpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJyB9KVxuICAgIGNvbnN0IHVzZXJNb25leSA9IGF3YWl0IHJlcXVlc3RQcm9taXNlKHtcbiAgICAgIHVybDogYCR7cmVxdWVzdEJhc2VVcmx9L2xvYWRVc2VyTW9uZXlgLFxuICAgICAgZGF0YVxuICAgIH0pXG4gICAgdGhpcy51c2VyTW9uZXkgPSB1c2VyTW9uZXkuZGF0YTtcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==