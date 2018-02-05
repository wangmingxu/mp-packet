'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _promisify = require('./../utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _request = require('./../utils/request.js');

var _request2 = _interopRequireDefault(_request);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _constant = require('./../constant/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_wepy$page) {
  _inherits(History, _wepy$page);

  function History() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = History.__proto__ || Object.getPrototypeOf(History)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:list.sync": "tabList", "v-bind:current.sync": "currentTab" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.data = {
      tabList: [{ id: 1, text: '我发出的' }, { id: 2, text: '我收到的' }],
      currentTab: 0,
      sendLog: {},
      receiveLog: {}
    }, _this.methods = {
      tabContentChange: function tabContentChange(e) {
        _this.currentTab = e.detail.current;
      },
      toSharePage: function toSharePage(id) {
        if (id) {
          wx.navigateTo({ url: 'share?id=' + id });
        }
      }
    }, _this.events = {
      tabChange: function tabChange(index) {
        _this.currentTab = index;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(History, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // this.loadData().then(()=>{
      wx.stopPullDownRefresh();
      // });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var userInfo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$parent.getUserInfo();

              case 2:
                userInfo = _context.sent;

                this.setData({ userInfo: userInfo });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShow',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref4, data, luckyMoneySend, luckyMoneyReceive;

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
                  url: _constant.requestBaseUrl + '/loadSendLog',
                  data: data
                });

              case 6:
                luckyMoneySend = _context2.sent;

                this.sendLog = luckyMoneySend.data;
                this.$apply();
                _context2.next = 11;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadReceiveLog',
                  data: data
                });

              case 11:
                luckyMoneyReceive = _context2.sent;

                this.receiveLog = luckyMoneyReceive.data;
                this.$apply();

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref3.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return History;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(History , 'pages/history'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiSGlzdG9yeSIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsImRhdGEiLCJ0YWJMaXN0IiwiaWQiLCJ0ZXh0IiwiY3VycmVudFRhYiIsInNlbmRMb2ciLCJyZWNlaXZlTG9nIiwibWV0aG9kcyIsInRhYkNvbnRlbnRDaGFuZ2UiLCJlIiwiZGV0YWlsIiwiY3VycmVudCIsInRvU2hhcmVQYWdlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwidGFiQ2hhbmdlIiwiaW5kZXgiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJzZXREYXRhIiwiZ2V0U3RvcmFnZSIsImtleSIsImx1Y2t5TW9uZXlTZW5kIiwiJGFwcGx5IiwibHVja3lNb25leVJlY2VpdmUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQU1uQkMsTSxHQUFTLEUsUUFDVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixTQUF0QyxFQUFnRCx1QkFBc0IsWUFBdEUsRUFBUCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUFHWkMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FBQyxFQUFFQyxJQUFHLENBQUwsRUFBT0MsTUFBTSxNQUFiLEVBQUQsRUFBd0IsRUFBRUQsSUFBRyxDQUFMLEVBQU9DLE1BQU0sTUFBYixFQUF4QixDQURKO0FBRUxDLGtCQUFZLENBRlA7QUFHTEMsZUFBUyxFQUhKO0FBSUxDLGtCQUFZO0FBSlAsSyxRQU1QQyxPLEdBQVU7QUFDUkMsd0JBQWtCLDBCQUFDQyxDQUFELEVBQU07QUFDdEIsY0FBS0wsVUFBTCxHQUFrQkssRUFBRUMsTUFBRixDQUFTQyxPQUEzQjtBQUNELE9BSE87QUFJUkMsbUJBQWEscUJBQUNWLEVBQUQsRUFBTTtBQUNqQixZQUFHQSxFQUFILEVBQU07QUFDSlcsYUFBR0MsVUFBSCxDQUFjLEVBQUVDLG1CQUFpQmIsRUFBbkIsRUFBZDtBQUNEO0FBQ0Y7QUFSTyxLLFFBV1ZjLE0sR0FBUztBQUNQQyxpQkFBVywwQkFBUztBQUNsQixjQUFLYixVQUFMLEdBQWtCYyxLQUFsQjtBQUNEO0FBSE0sSzs7Ozs7d0NBN0JVO0FBQ2pCO0FBQ0lMLFNBQUdNLG1CQUFIO0FBQ0o7QUFDRDs7Ozs7Ozs7Ozs7dUJBZ0N3QixLQUFLQyxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQWpCQyx3Qjs7QUFDTixxQkFBS0MsT0FBTCxDQUFhLEVBQUVELGtCQUFGLEVBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJdUIseUJBQVVULEdBQUdXLFVBQWIsRUFBeUIsRUFBRUMsS0FBSyxVQUFQLEVBQXpCLEM7Ozs7QUFBZnpCLG9CLFNBQUFBLEk7O3VCQUNxQix1QkFBZTtBQUMxQ2UsZ0VBRDBDO0FBRTFDZjtBQUYwQyxpQkFBZixDOzs7QUFBdkIwQiw4Qjs7QUFJTixxQkFBS3JCLE9BQUwsR0FBZXFCLGVBQWUxQixJQUE5QjtBQUNBLHFCQUFLMkIsTUFBTDs7dUJBQ2dDLHVCQUFlO0FBQzdDWixtRUFENkM7QUFFN0NmO0FBRjZDLGlCQUFmLEM7OztBQUExQjRCLGlDOztBQUlOLHFCQUFLdEIsVUFBTCxHQUFrQnNCLGtCQUFrQjVCLElBQXBDO0FBQ0EscUJBQUsyQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdERpQyxlQUFLRSxJOztrQkFBckJwQyxPIiwiZmlsZSI6Imhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcHJvbWlzaWZ5LCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvcHJvbWlzaWZ5J1xuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG5pbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuaW1wb3J0IHsgcmVxdWVzdEJhc2VVcmwgfSBmcm9tICcuLi9jb25zdGFudCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIG9uUHVsbERvd25SZWZyZXNoKCl7XG4gICAgLy8gdGhpcy5sb2FkRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgIC8vIH0pO1xuICB9XG4gIGNvbmZpZyA9IHt9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwidGFiTGlzdFwiLFwidi1iaW5kOmN1cnJlbnQuc3luY1wiOlwiY3VycmVudFRhYlwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdGFiOiBUYWJcbiAgfVxuICBkYXRhID0ge1xuICAgIHRhYkxpc3Q6IFt7IGlkOjEsdGV4dDogJ+aIkeWPkeWHuueahCcgfSwgeyBpZDoyLHRleHQ6ICfmiJHmlLbliLDnmoQnIH1dLFxuICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgc2VuZExvZzoge30sXG4gICAgcmVjZWl2ZUxvZzoge30sXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICB0YWJDb250ZW50Q2hhbmdlOiAoZSk9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRUYWIgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgIH0sXG4gICAgdG9TaGFyZVBhZ2U6IChpZCk9PntcbiAgICAgIGlmKGlkKXtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7IHVybDogYHNoYXJlP2lkPSR7aWR9YCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgdGFiQ2hhbmdlOiBpbmRleCA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRUYWIgPSBpbmRleDtcbiAgICB9LFxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbyB9KVxuICB9XG5cbiAgYXN5bmMgb25TaG93KCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmdldFN0b3JhZ2UsIHsga2V5OiAnc2lnbkluZm8nIH0pXG4gICAgY29uc3QgbHVja3lNb25leVNlbmQgPSBhd2FpdCByZXF1ZXN0UHJvbWlzZSh7XG4gICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9sb2FkU2VuZExvZ2AsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgdGhpcy5zZW5kTG9nID0gbHVja3lNb25leVNlbmQuZGF0YTtcbiAgICB0aGlzLiRhcHBseSgpO1xuICAgIGNvbnN0IGx1Y2t5TW9uZXlSZWNlaXZlID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vbG9hZFJlY2VpdmVMb2dgLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIHRoaXMucmVjZWl2ZUxvZyA9IGx1Y2t5TW9uZXlSZWNlaXZlLmRhdGE7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxufVxuIl19