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

var Result = function (_wepy$page) {
  _inherits(Result, _wepy$page);

  function Result() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Result);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      id: -1,
      luckyMoneyResult: {}
    }, _this.computed = {
      best: function best() {
        var _t = this;
        if (_t.luckyMoneyResult.surplusNumber === 0) {
          var sortList = _t.luckyMoneyResult.list.sort(function (a, b) {
            return b.money - a.money;
          }).sort(function (a, b) {
            return new Date(a.createTime) - new Date(b.createTime);
          });
          return sortList[0].nickName;
        }
        return '';
      }
    }, _this.methods = {
      navToMakePage: function navToMakePage() {
        wx.switchTab({ url: 'index' });
      },
      share: function share() {}
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Result, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage(options) {
      console.log(options.from);
      if (options.from === 'button') {
        // 来自页面内转发按钮
        console.log(options.target);
      }
      return {
        title: '口快有，口慢无',
        path: '/pages/packet?id=' + this.id,
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.loadData().then(function () {
        wx.stopPullDownRefresh();
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.id = options.id;
                _context.next = 3;
                return this.$parent.getUserInfo();

              case 3:
                userInfo = _context.sent;

                this.setData({ userInfo: userInfo });
                this.loadData();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'loadData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref4, data, Result;

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
                  url: _constant.requestBaseUrl + '/snatchLuckyMoney',
                  data: Object.assign(data, {
                    answer: 1, //随便填
                    id: this.id
                  })
                });

              case 6:
                Result = _context2.sent;

                this.luckyMoneyResult = Result.data;
                this.$apply();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _ref3.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Result;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Result , 'pages/result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5qcyJdLCJuYW1lcyI6WyJSZXN1bHQiLCJjb25maWciLCJjb21wb25lbnRzIiwiZGF0YSIsImlkIiwibHVja3lNb25leVJlc3VsdCIsImNvbXB1dGVkIiwiYmVzdCIsIl90Iiwic3VycGx1c051bWJlciIsInNvcnRMaXN0IiwibGlzdCIsInNvcnQiLCJhIiwiYiIsIm1vbmV5IiwiRGF0ZSIsImNyZWF0ZVRpbWUiLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJuYXZUb01ha2VQYWdlIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiLCJzaGFyZSIsImV2ZW50cyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwibG9hZERhdGEiLCJ0aGVuIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic2V0RGF0YSIsImdldFN0b3JhZ2UiLCJrZXkiLCJPYmplY3QiLCJhc3NpZ24iLCJhbnN3ZXIiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEF1Qm5CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsVUFBSSxDQUFDLENBREE7QUFFTEMsd0JBQWtCO0FBRmIsSyxRQUlQQyxRLEdBQVc7QUFDVEMsVUFEUyxrQkFDRDtBQUNOLFlBQU1DLEtBQUssSUFBWDtBQUNBLFlBQUdBLEdBQUdILGdCQUFILENBQW9CSSxhQUFwQixLQUFvQyxDQUF2QyxFQUF5QztBQUN2QyxjQUFNQyxXQUFXRixHQUFHSCxnQkFBSCxDQUFvQk0sSUFBcEIsQ0FBeUJDLElBQXpCLENBQThCLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFPO0FBQ3BELG1CQUFPQSxFQUFFQyxLQUFGLEdBQVVGLEVBQUVFLEtBQW5CO0FBQ0QsV0FGZ0IsRUFFZEgsSUFGYyxDQUVULFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFPO0FBQ2IsbUJBQU8sSUFBSUUsSUFBSixDQUFTSCxFQUFFSSxVQUFYLElBQXlCLElBQUlELElBQUosQ0FBU0YsRUFBRUcsVUFBWCxDQUFoQztBQUNELFdBSmdCLENBQWpCO0FBS0EsaUJBQU9QLFNBQVMsQ0FBVCxFQUFZUSxRQUFuQjtBQUNEO0FBQ0QsZUFBTyxFQUFQO0FBQ0Q7QUFaUSxLLFFBY1hDLE8sR0FBVTtBQUNSQyxxQkFBZSx5QkFBTTtBQUNuQkMsV0FBR0MsU0FBSCxDQUFhLEVBQUVDLEtBQUssT0FBUCxFQUFiO0FBQ0QsT0FITztBQUlSQyxhQUFPLGlCQUFNLENBQUU7QUFKUCxLLFFBT1ZDLE0sR0FBUyxFOzs7OztzQ0FqRFNDLE8sRUFBUztBQUN6QkMsY0FBUUMsR0FBUixDQUFZRixRQUFRRyxJQUFwQjtBQUNBLFVBQUlILFFBQVFHLElBQVIsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0I7QUFDQUYsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBUUksTUFBcEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxTQURGO0FBRUxDLG9DQUEwQixLQUFLNUIsRUFGMUI7QUFHTDZCLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDRCxTQUxJO0FBTUxDLGNBQU0sY0FBU0QsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFSSSxPQUFQO0FBVUQ7Ozt3Q0FDa0I7QUFDZixXQUFLRSxRQUFMLEdBQWdCQyxJQUFoQixDQUFxQixZQUFJO0FBQ3JCaEIsV0FBR2lCLG1CQUFIO0FBQ0gsT0FGRDtBQUdIOzs7OzJGQThCWVosTzs7Ozs7O0FBQ1gscUJBQUt0QixFQUFMLEdBQVVzQixRQUFRdEIsRUFBbEI7O3VCQUN1QixLQUFLbUMsT0FBTCxDQUFhQyxXQUFiLEU7OztBQUFqQkMsd0I7O0FBQ04scUJBQUtDLE9BQUwsQ0FBYSxFQUFFRCxrQkFBRixFQUFiO0FBQ0EscUJBQUtMLFFBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJdUIseUJBQVVmLEdBQUdzQixVQUFiLEVBQXlCLEVBQUVDLEtBQUssVUFBUCxFQUF6QixDOzs7O0FBQWZ6QyxvQixTQUFBQSxJOzt1QkFDYSx1QkFBZTtBQUNsQ29CLHFFQURrQztBQUVsQ3BCLHdCQUFNMEMsT0FBT0MsTUFBUCxDQUFjM0MsSUFBZCxFQUFvQjtBQUN4QjRDLDRCQUFRLENBRGdCLEVBQ2I7QUFDWDNDLHdCQUFJLEtBQUtBO0FBRmUsbUJBQXBCO0FBRjRCLGlCQUFmLEM7OztBQUFmSixzQjs7QUFPTixxQkFBS0ssZ0JBQUwsR0FBd0JMLE9BQU9HLElBQS9CO0FBQ0EscUJBQUs2QyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckVnQyxlQUFLQyxJOztrQkFBcEJqRCxNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi4vdXRpbHMvcHJvbWlzaWZ5J1xuaW1wb3J0IHsgcmVxdWVzdEJhc2VVcmwgfSBmcm9tICcuLi9jb25zdGFudCdcbmltcG9ydCByZXF1ZXN0UHJvbWlzZSBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucy5mcm9tKVxuICAgIGlmIChvcHRpb25zLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMudGFyZ2V0KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICflj6Plv6vmnInvvIzlj6PmhaLml6AnLFxuICAgICAgcGF0aDogYC9wYWdlcy9wYWNrZXQ/aWQ9JHt0aGlzLmlkfWAsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvblB1bGxEb3duUmVmcmVzaCgpe1xuICAgICAgdGhpcy5sb2FkRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgICB9KTtcbiAgfVxuICBjb25maWcgPSB7fVxuICBjb21wb25lbnRzID0ge31cbiAgZGF0YSA9IHtcbiAgICBpZDogLTEsXG4gICAgbHVja3lNb25leVJlc3VsdDoge31cbiAgfVxuICBjb21wdXRlZCA9IHtcbiAgICBiZXN0ICgpIHtcbiAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgIGlmKF90Lmx1Y2t5TW9uZXlSZXN1bHQuc3VycGx1c051bWJlcj09PTApe1xuICAgICAgICBjb25zdCBzb3J0TGlzdCA9IF90Lmx1Y2t5TW9uZXlSZXN1bHQubGlzdC5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIGIubW9uZXkgLSBhLm1vbmV5O1xuICAgICAgICB9KS5zb3J0KChhLGIpPT57XG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuY3JlYXRlVGltZSkgLSBuZXcgRGF0ZShiLmNyZWF0ZVRpbWUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc29ydExpc3RbMF0ubmlja05hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBuYXZUb01ha2VQYWdlOiAoKSA9PiB7XG4gICAgICB3eC5zd2l0Y2hUYWIoeyB1cmw6ICdpbmRleCcgfSlcbiAgICB9LFxuICAgIHNoYXJlOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbyB9KVxuICAgIHRoaXMubG9hZERhdGEoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWREYXRhKCl7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0U3RvcmFnZSwgeyBrZXk6ICdzaWduSW5mbycgfSlcbiAgICBjb25zdCBSZXN1bHQgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZSh7XG4gICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9zbmF0Y2hMdWNreU1vbmV5YCxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBhbnN3ZXI6IDEsIC8v6ZqP5L6/5aGrXG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy5sdWNreU1vbmV5UmVzdWx0ID0gUmVzdWx0LmRhdGFcbiAgICB0aGlzLiRhcHBseSgpXG4gIH1cbn1cbiJdfQ==