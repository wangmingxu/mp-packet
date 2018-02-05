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

var _constant = require('./../constant/index.js');

var _numberPrecision = require('./../npm/number-precision/build/index.js');

var _numberPrecision2 = _interopRequireDefault(_numberPrecision);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      recording: false,
      recordFinish: false,
      wishArray: ['大吉大利，今晚吃鸡', '天冷了注意保暖，多穿一条秋裤哟', '2018年要身体倍儿棒，吃饭倍儿香', '新的一年好好照顾自己，别太累了', '愿我所爱皆顺意，愿爱我之人皆如意', '今年一起脱单脱贫不脱发吧', '年底再忙，也要记得休息', '简简单单，健康快乐幸福就好', '我新年最大的愿望是升职加薪', '2018年，赐你一个赋予别人开心的超能力'],
      wishIndex: 0,
      wishText: '',
      file: '',
      luckyMoney: 0,
      number: 0,
      id: -1 //红包id
    }, _this.methods = {
      getRecordAuth: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref3, authSetting;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _promisify2.default)(wx.getSetting);

                case 2:
                  _ref3 = _context.sent;
                  authSetting = _ref3.authSetting;

                  if (authSetting['scope.record']) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 7;
                  return (0, _promisify2.default)(wx.showModal, {
                    title: '用户未授权',
                    content: '如需正常使用录音功能，请按确定并在授权管理中选中“录音功能”，然后按确定。最后重新进入小程序即可正常使用',
                    showCancel: false
                  });

                case 7:
                  _context.next = 9;
                  return (0, _promisify2.default)(wx.openSetting);

                case 9:
                  return _context.abrupt('return', false);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getRecordAuth() {
          return _ref2.apply(this, arguments);
        }

        return getRecordAuth;
      }(),
      startRecord: function startRecord() {
        this.recorderManager.start({ format: 'mp3', duration: 10000 });
      },
      stopRecord: function stopRecord() {
        this.recorderManager.stop();
      },

      bindPickerChange: function bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        _this.wishIndex = e.detail.value;
        _this.wishText = _this.wishArray[e.detail.value];
      },
      makeVoice: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _ref5, data, makeResult;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

                case 2:
                  _ref5 = _context2.sent;
                  data = _ref5.data;
                  _context2.next = 6;
                  return (0, _promisify2.default)(wx.showLoading);

                case 6:
                  _context2.prev = 6;
                  _context2.next = 9;
                  return (0, _request2.default)({
                    url: _constant.requestBaseUrl + '/luckyMoney',
                    data: Object.assign(data, {
                      file: _this.file,
                      luckyMoney: _numberPrecision2.default.times(_this.luckyMoney, 100),
                      number: _this.number,
                      wish: _this.wishText
                    })
                  });

                case 9:
                  makeResult = _context2.sent;

                  _this.id = makeResult.data;
                  _this.$apply();
                  wx.hideToast();
                  _context2.next = 35;
                  break;

                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2['catch'](6);

                  if (!(_context2.t0.status === 6)) {
                    _context2.next = 33;
                    break;
                  }

                  _this.id = _context2.t0.data.id;
                  _this.$apply();
                  _context2.prev = 20;
                  _context2.next = 23;
                  return (0, _promisify2.default)(wx.requestPayment, _context2.t0.data);

                case 23:
                  _context2.next = 25;
                  return _this.checkPayStatus();

                case 25:
                  _context2.next = 31;
                  break;

                case 27:
                  _context2.prev = 27;
                  _context2.t1 = _context2['catch'](20);

                  wx.hideToast();
                  return _context2.abrupt('return', false);

                case 31:
                  _context2.next = 35;
                  break;

                case 33:
                  wx.hideToast();
                  return _context2.abrupt('return', false);

                case 35:
                  wx.redirectTo({ url: 'share?id=' + _this.id });

                case 36:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[6, 15], [20, 27]]);
        }));

        function makeVoice() {
          return _ref4.apply(this, arguments);
        }

        return makeVoice;
      }(),
      moneyInputHandler: function moneyInputHandler(e) {
        if (+e.detail.value >= 1000) {
          _this.luckyMoney = 999;
          return '999';
        }
        _this.luckyMoney = +e.detail.value;
      },
      numInputHandler: function numInputHandler(e) {
        _this.number = +e.detail.value;
      }
    }, _this.events = {}, _this.checkPayStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var checkResult;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _request2.default)({
                url: _constant.requestBaseUrl + '/loadLuckyMoneyStatus',
                data: { id: _this.id }
              });

            case 2:
              checkResult = _context3.sent;

              if (!(checkResult.data !== 0)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 6;
              return (0, _promisify.sleep)(1000);

            case 6:
              _context3.next = 8;
              return _this.checkPayStatus();

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // this.loadData().then(()=>{
      wx.stopPullDownRefresh();
      // });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var userInfo, _ref8, authSetting;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$parent.getUserInfo();

              case 2:
                userInfo = _context4.sent;

                this.setData({ userInfo: userInfo });
                _context4.next = 6;
                return (0, _promisify2.default)(wx.getSetting);

              case 6:
                _ref8 = _context4.sent;
                authSetting = _ref8.authSetting;

                if (authSetting['scope.record']) {
                  _context4.next = 13;
                  break;
                }

                console.log('录音未授权');
                _context4.next = 12;
                return (0, _promisify2.default)(wx.authorize, { scope: 'scope.record' });

              case 12:
                console.log('录音授权成功');

              case 13:
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
    key: 'onReady',
    value: function onReady() {
      var _this3 = this;

      this.recorderManager = wx.getRecorderManager();
      this.recorderManager.onStart(function (ret) {
        // console.log('开始录音')
        _this3.recording = true;
        _this3.$apply();
      });
      this.recorderManager.onStop(function (ret) {
        if (_this3.recording) {
          _this3.recording = false;
          _this3.recordFinish = true;
          _this3.$apply();
          wx.showToast({
            title: '录音完成',
            icon: 'success'
          });
          (0, _promisify2.default)(wx.uploadFile, {
            url: _constant.requestBaseUrl + '/uploadAudio',
            filePath: ret.tempFilePath,
            name: 'file'
          }).then(function (_ref9) {
            var data = _ref9.data;

            _this3.file = data;
            _this3.$apply();
          });
        }
        // wx.showToast({ title: ret.tempFilePath })
      });
      this.recorderManager.onFrameRecorded(function (ret) {
        console.log(ret);
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJyZWNvcmRpbmciLCJyZWNvcmRGaW5pc2giLCJ3aXNoQXJyYXkiLCJ3aXNoSW5kZXgiLCJ3aXNoVGV4dCIsImZpbGUiLCJsdWNreU1vbmV5IiwibnVtYmVyIiwiaWQiLCJtZXRob2RzIiwiZ2V0UmVjb3JkQXV0aCIsInd4IiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm9wZW5TZXR0aW5nIiwic3RhcnRSZWNvcmQiLCJyZWNvcmRlck1hbmFnZXIiLCJzdGFydCIsImZvcm1hdCIsImR1cmF0aW9uIiwic3RvcFJlY29yZCIsInN0b3AiLCJiaW5kUGlja2VyQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm1ha2VWb2ljZSIsImdldFN0b3JhZ2UiLCJrZXkiLCJzaG93TG9hZGluZyIsInVybCIsIk9iamVjdCIsImFzc2lnbiIsInRpbWVzIiwid2lzaCIsIm1ha2VSZXN1bHQiLCIkYXBwbHkiLCJoaWRlVG9hc3QiLCJzdGF0dXMiLCJyZXF1ZXN0UGF5bWVudCIsImNoZWNrUGF5U3RhdHVzIiwicmVkaXJlY3RUbyIsIm1vbmV5SW5wdXRIYW5kbGVyIiwibnVtSW5wdXRIYW5kbGVyIiwiZXZlbnRzIiwiY2hlY2tSZXN1bHQiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJzZXREYXRhIiwiYXV0aG9yaXplIiwic2NvcGUiLCJnZXRSZWNvcmRlck1hbmFnZXIiLCJvblN0YXJ0Iiwib25TdG9wIiwic2hvd1RvYXN0IiwiaWNvbiIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsInJldCIsInRlbXBGaWxlUGF0aCIsIm5hbWUiLCJ0aGVuIiwib25GcmFtZVJlY29yZGVkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7b0xBTW5CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQTRDYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEtBRE47QUFFTEMsb0JBQWMsS0FGVDtBQUdMQyxpQkFBVyxDQUNULFdBRFMsRUFFVCxpQkFGUyxFQUdULG1CQUhTLEVBSVQsaUJBSlMsRUFLVCxrQkFMUyxFQU1ULGNBTlMsRUFPVCxhQVBTLEVBUVQsZUFSUyxFQVNULGVBVFMsRUFVVCxzQkFWUyxDQUhOO0FBZUxDLGlCQUFXLENBZk47QUFnQkxDLGdCQUFVLEVBaEJMO0FBaUJMQyxZQUFNLEVBakJEO0FBa0JMQyxrQkFBWSxDQWxCUDtBQW1CTEMsY0FBUSxDQW5CSDtBQW9CTEMsVUFBSSxDQUFDLENBcEJBLENBb0JFO0FBcEJGLEssUUFzQlBDLE8sR0FBVTtBQUNGQyxtQkFERTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUV3Qix5QkFBVUMsR0FBR0MsVUFBYixDQUZ4Qjs7QUFBQTtBQUFBO0FBRUVDLDZCQUZGLFNBRUVBLFdBRkY7O0FBQUEsc0JBR0RBLFlBQVksY0FBWixDQUhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEseUJBSUUseUJBQVVGLEdBQUdHLFNBQWIsRUFBd0I7QUFDNUJDLDJCQUFPLE9BRHFCO0FBRTVCQyw2QkFDRSxzREFIMEI7QUFJNUJDLGdDQUFZO0FBSmdCLG1CQUF4QixDQUpGOztBQUFBO0FBQUE7QUFBQSx5QkFVRSx5QkFBVU4sR0FBR08sV0FBYixDQVZGOztBQUFBO0FBQUEsbURBV0csS0FYSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWNSQyxpQkFkUSx5QkFjTTtBQUNaLGFBQUtDLGVBQUwsQ0FBcUJDLEtBQXJCLENBQTJCLEVBQUVDLFFBQVEsS0FBVixFQUFpQkMsVUFBVSxLQUEzQixFQUEzQjtBQUNELE9BaEJPO0FBaUJSQyxnQkFqQlEsd0JBaUJLO0FBQ1gsYUFBS0osZUFBTCxDQUFxQkssSUFBckI7QUFDRCxPQW5CTzs7QUFvQlJDLHdCQUFrQiw2QkFBSztBQUNyQkMsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0MsRUFBRUMsTUFBRixDQUFTQyxLQUExQztBQUNBLGNBQUs1QixTQUFMLEdBQWlCMEIsRUFBRUMsTUFBRixDQUFTQyxLQUExQjtBQUNBLGNBQUszQixRQUFMLEdBQWdCLE1BQUtGLFNBQUwsQ0FBZTJCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEIsQ0FBaEI7QUFDRCxPQXhCTztBQXlCUkM7QUFBQSw0RUFBVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDYyx5QkFBVXJCLEdBQUdzQixVQUFiLEVBQXlCLEVBQUVDLEtBQUssVUFBUCxFQUF6QixDQURkOztBQUFBO0FBQUE7QUFDRG5DLHNCQURDLFNBQ0RBLElBREM7QUFBQTtBQUFBLHlCQUVILHlCQUFVWSxHQUFHd0IsV0FBYixDQUZHOztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUlrQix1QkFBZTtBQUN0Q0MsaUVBRHNDO0FBRXRDckMsMEJBQU1zQyxPQUFPQyxNQUFQLENBQWN2QyxJQUFkLEVBQW9CO0FBQ3hCTSw0QkFBTSxNQUFLQSxJQURhO0FBRXhCQyxrQ0FBWSwwQkFBR2lDLEtBQUgsQ0FBUyxNQUFLakMsVUFBZCxFQUEwQixHQUExQixDQUZZO0FBR3hCQyw4QkFBUSxNQUFLQSxNQUhXO0FBSXhCaUMsNEJBQU0sTUFBS3BDO0FBSmEscUJBQXBCO0FBRmdDLG1CQUFmLENBSmxCOztBQUFBO0FBSURxQyw0QkFKQzs7QUFhUCx3QkFBS2pDLEVBQUwsR0FBVWlDLFdBQVcxQyxJQUFyQjtBQUNBLHdCQUFLMkMsTUFBTDtBQUNBL0IscUJBQUdnQyxTQUFIO0FBZk87QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsd0JBaUJILGFBQUVDLE1BQUYsS0FBYSxDQWpCVjtBQUFBO0FBQUE7QUFBQTs7QUFrQkwsd0JBQUtwQyxFQUFMLEdBQVUsYUFBRVQsSUFBRixDQUFPUyxFQUFqQjtBQUNBLHdCQUFLa0MsTUFBTDtBQW5CSztBQUFBO0FBQUEseUJBcUJHLHlCQUFVL0IsR0FBR2tDLGNBQWIsRUFBNkIsYUFBRTlDLElBQS9CLENBckJIOztBQUFBO0FBQUE7QUFBQSx5QkFzQkcsTUFBSytDLGNBQUwsRUF0Qkg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUF3QkhuQyxxQkFBR2dDLFNBQUg7QUF4Qkcsb0RBeUJJLEtBekJKOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQTRCTGhDLHFCQUFHZ0MsU0FBSDtBQTVCSyxvREE2QkUsS0E3QkY7O0FBQUE7QUFnQ1RoQyxxQkFBR29DLFVBQUgsQ0FBYyxFQUFFWCxtQkFBaUIsTUFBSzVCLEVBQXhCLEVBQWQ7O0FBaENTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVg7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsU0F6QlE7QUEyRFJ3Qyx5QkFBbUIsOEJBQUs7QUFDdEIsWUFBSSxDQUFDbkIsRUFBRUMsTUFBRixDQUFTQyxLQUFWLElBQW1CLElBQXZCLEVBQTZCO0FBQzNCLGdCQUFLekIsVUFBTCxHQUFrQixHQUFsQjtBQUNBLGlCQUFPLEtBQVA7QUFDRDtBQUNELGNBQUtBLFVBQUwsR0FBa0IsQ0FBQ3VCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDRCxPQWpFTztBQWtFUmtCLHVCQUFpQiw0QkFBSztBQUNwQixjQUFLMUMsTUFBTCxHQUFjLENBQUNzQixFQUFFQyxNQUFGLENBQVNDLEtBQXhCO0FBQ0Q7QUFwRU8sSyxRQXVFVm1CLE0sR0FBUyxFLFFBRVRKLGMsMkRBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1csdUJBQWU7QUFDdkNWLHVFQUR1QztBQUV2Q3JDLHNCQUFNLEVBQUVTLElBQUksTUFBS0EsRUFBWDtBQUZpQyxlQUFmLENBRFg7O0FBQUE7QUFDVDJDLHlCQURTOztBQUFBLG9CQUtYQSxZQUFZcEQsSUFBWixLQUFxQixDQUxWO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBTVAsc0JBQU0sSUFBTixDQU5POztBQUFBO0FBQUE7QUFBQSxxQkFPUCxNQUFLK0MsY0FBTCxFQVBPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQWpKRztBQUNsQjtBQUNBbkMsU0FBR3lDLG1CQUFIO0FBQ0E7QUFDRDs7Ozs7Ozs7Ozs7O3VCQUl3QixLQUFLQyxPQUFMLENBQWFDLFdBQWIsRTs7O0FBQWpCQyx3Qjs7QUFDTixxQkFBS0MsT0FBTCxDQUFhLEVBQUVELGtCQUFGLEVBQWI7O3VCQUM4Qix5QkFBVTVDLEdBQUdDLFVBQWIsQzs7OztBQUF0QkMsMkIsU0FBQUEsVzs7b0JBQ0hBLFlBQVksY0FBWixDOzs7OztBQUNIYyx3QkFBUUMsR0FBUixDQUFZLE9BQVo7O3VCQUNNLHlCQUFVakIsR0FBRzhDLFNBQWIsRUFBd0IsRUFBRUMsT0FBTyxjQUFULEVBQXhCLEM7OztBQUNOL0Isd0JBQVFDLEdBQVIsQ0FBWSxRQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS007QUFBQTs7QUFDUixXQUFLUixlQUFMLEdBQXVCVCxHQUFHZ0Qsa0JBQUgsRUFBdkI7QUFDQSxXQUFLdkMsZUFBTCxDQUFxQndDLE9BQXJCLENBQTZCLGVBQU87QUFDbEM7QUFDQSxlQUFLNUQsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGVBQUswQyxNQUFMO0FBQ0QsT0FKRDtBQUtBLFdBQUt0QixlQUFMLENBQXFCeUMsTUFBckIsQ0FBNEIsZUFBTztBQUNqQyxZQUFJLE9BQUs3RCxTQUFULEVBQW9CO0FBQ2xCLGlCQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsaUJBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBS3lDLE1BQUw7QUFDQS9CLGFBQUdtRCxTQUFILENBQWE7QUFDWC9DLG1CQUFPLE1BREk7QUFFWGdELGtCQUFNO0FBRkssV0FBYjtBQUlBLG1DQUFVcEQsR0FBR3FELFVBQWIsRUFBeUI7QUFDdkI1QiwwREFEdUI7QUFFdkI2QixzQkFBVUMsSUFBSUMsWUFGUztBQUd2QkMsa0JBQU07QUFIaUIsV0FBekIsRUFJR0MsSUFKSCxDQUlRLGlCQUFjO0FBQUEsZ0JBQVh0RSxJQUFXLFNBQVhBLElBQVc7O0FBQ3BCLG1CQUFLTSxJQUFMLEdBQVlOLElBQVo7QUFDQSxtQkFBSzJDLE1BQUw7QUFDRCxXQVBEO0FBUUQ7QUFDRDtBQUNELE9BbkJEO0FBb0JBLFdBQUt0QixlQUFMLENBQXFCa0QsZUFBckIsQ0FBcUMsZUFBTztBQUMxQzNDLGdCQUFRQyxHQUFSLENBQVlzQyxHQUFaO0FBQ0QsT0FGRDtBQUdEOzs7O0VBbERnQyxlQUFLSyxJOztrQkFBbkIzRSxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHByb21pc2lmeSwgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3Byb21pc2lmeSdcbmltcG9ydCByZXF1ZXN0UHJvbWlzZSBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xuaW1wb3J0IHsgcmVxdWVzdEJhc2VVcmwgfSBmcm9tICcuLi9jb25zdGFudCdcbmltcG9ydCBOUCBmcm9tICdudW1iZXItcHJlY2lzaW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgIC8vIHRoaXMubG9hZERhdGEoKS50aGVuKCgpPT57XG4gICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXG4gICAgLy8gfSk7XG4gIH1cbiAgY29uZmlnID0ge31cbiAgY29tcG9uZW50cyA9IHt9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgdGhpcy5zZXREYXRhKHsgdXNlckluZm8gfSlcbiAgICBjb25zdCB7IGF1dGhTZXR0aW5nIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0U2V0dGluZylcbiAgICBpZiAoIWF1dGhTZXR0aW5nWydzY29wZS5yZWNvcmQnXSkge1xuICAgICAgY29uc29sZS5sb2coJ+W9lemfs+acquaOiOadgycpXG4gICAgICBhd2FpdCBwcm9taXNpZnkod3guYXV0aG9yaXplLCB7IHNjb3BlOiAnc2NvcGUucmVjb3JkJyB9KVxuICAgICAgY29uc29sZS5sb2coJ+W9lemfs+aOiOadg+aIkOWKnycpXG4gICAgfVxuICAgIC8vIGNvbnN0IHsgZGF0YTogc2NlbmUgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NjZW5lJyB9KVxuICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lKTtcbiAgfVxuICBvblJlYWR5KCkge1xuICAgIHRoaXMucmVjb3JkZXJNYW5hZ2VyID0gd3guZ2V0UmVjb3JkZXJNYW5hZ2VyKClcbiAgICB0aGlzLnJlY29yZGVyTWFuYWdlci5vblN0YXJ0KHJldCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn5byA5aeL5b2V6Z+zJylcbiAgICAgIHRoaXMucmVjb3JkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0pXG4gICAgdGhpcy5yZWNvcmRlck1hbmFnZXIub25TdG9wKHJldCA9PiB7XG4gICAgICBpZiAodGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLnJlY29yZEZpbmlzaCA9IHRydWVcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5b2V6Z+z5a6M5oiQJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcydcbiAgICAgICAgfSlcbiAgICAgICAgcHJvbWlzaWZ5KHd4LnVwbG9hZEZpbGUsIHtcbiAgICAgICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS91cGxvYWRBdWRpb2AsXG4gICAgICAgICAgZmlsZVBhdGg6IHJldC50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgbmFtZTogJ2ZpbGUnXG4gICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxlID0gZGF0YVxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIHd4LnNob3dUb2FzdCh7IHRpdGxlOiByZXQudGVtcEZpbGVQYXRoIH0pXG4gICAgfSlcbiAgICB0aGlzLnJlY29yZGVyTWFuYWdlci5vbkZyYW1lUmVjb3JkZWQocmV0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJldClcbiAgICB9KVxuICB9XG4gIGRhdGEgPSB7XG4gICAgcmVjb3JkaW5nOiBmYWxzZSxcbiAgICByZWNvcmRGaW5pc2g6IGZhbHNlLFxuICAgIHdpc2hBcnJheTogW1xuICAgICAgJ+Wkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oScsXG4gICAgICAn5aSp5Ya35LqG5rOo5oSP5L+d5pqW77yM5aSa56m/5LiA5p2h56eL6KOk5ZOfJyxcbiAgICAgICcyMDE45bm06KaB6Lqr5L2T5YCN5YS/5qOS77yM5ZCD6aWt5YCN5YS/6aaZJyxcbiAgICAgICfmlrDnmoTkuIDlubTlpb3lpb3nhafpob7oh6rlt7HvvIzliKvlpKrntK/kuoYnLFxuICAgICAgJ+aEv+aIkeaJgOeIseeahumhuuaEj++8jOaEv+eIseaIkeS5i+S6uueahuWmguaEjycsXG4gICAgICAn5LuK5bm05LiA6LW36ISx5Y2V6ISx6LSr5LiN6ISx5Y+R5ZCnJyxcbiAgICAgICflubTlupXlho3lv5nvvIzkuZ/opoHorrDlvpfkvJHmga8nLFxuICAgICAgJ+eugOeugOWNleWNle+8jOWBpeW6t+W/q+S5kOW5uOemj+WwseWlvScsXG4gICAgICAn5oiR5paw5bm05pyA5aSn55qE5oS/5pyb5piv5Y2H6IGM5Yqg6JaqJyxcbiAgICAgICcyMDE45bm077yM6LWQ5L2g5LiA5Liq6LWL5LqI5Yir5Lq65byA5b+D55qE6LaF6IO95YqbJ1xuICAgIF0sXG4gICAgd2lzaEluZGV4OiAwLFxuICAgIHdpc2hUZXh0OiAnJyxcbiAgICBmaWxlOiAnJyxcbiAgICBsdWNreU1vbmV5OiAwLFxuICAgIG51bWJlcjogMCxcbiAgICBpZDogLTEgLy/nuqLljIVpZFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXN5bmMgZ2V0UmVjb3JkQXV0aCgpIHtcbiAgICAgIGNvbnN0IHsgYXV0aFNldHRpbmcgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTZXR0aW5nKVxuICAgICAgaWYgKCFhdXRoU2V0dGluZ1snc2NvcGUucmVjb3JkJ10pIHtcbiAgICAgICAgYXdhaXQgcHJvbWlzaWZ5KHd4LnNob3dNb2RhbCwge1xuICAgICAgICAgIHRpdGxlOiAn55So5oi35pyq5o6I5p2DJyxcbiAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ+WmgumcgOato+W4uOS9v+eUqOW9lemfs+WKn+iDve+8jOivt+aMieehruWumuW5tuWcqOaOiOadg+euoeeQhuS4remAieS4reKAnOW9lemfs+WKn+iDveKAne+8jOeEtuWQjuaMieehruWumuOAguacgOWQjumHjeaWsOi/m+WFpeWwj+eoi+W6j+WNs+WPr+ato+W4uOS9v+eUqCcsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgcHJvbWlzaWZ5KHd4Lm9wZW5TZXR0aW5nKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXJ0UmVjb3JkKCkge1xuICAgICAgdGhpcy5yZWNvcmRlck1hbmFnZXIuc3RhcnQoeyBmb3JtYXQ6ICdtcDMnLCBkdXJhdGlvbjogMTAwMDAgfSlcbiAgICB9LFxuICAgIHN0b3BSZWNvcmQoKSB7XG4gICAgICB0aGlzLnJlY29yZGVyTWFuYWdlci5zdG9wKClcbiAgICB9LFxuICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgdGhpcy53aXNoSW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgdGhpcy53aXNoVGV4dCA9IHRoaXMud2lzaEFycmF5W2UuZGV0YWlsLnZhbHVlXVxuICAgIH0sXG4gICAgbWFrZVZvaWNlOiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJyB9KVxuICAgICAgYXdhaXQgcHJvbWlzaWZ5KHd4LnNob3dMb2FkaW5nKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWFrZVJlc3VsdCA9IGF3YWl0IHJlcXVlc3RQcm9taXNlKHtcbiAgICAgICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9sdWNreU1vbmV5YCxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgIGZpbGU6IHRoaXMuZmlsZSxcbiAgICAgICAgICAgIGx1Y2t5TW9uZXk6IE5QLnRpbWVzKHRoaXMubHVja3lNb25leSwgMTAwKSxcbiAgICAgICAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAgICAgICB3aXNoOiB0aGlzLndpc2hUZXh0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5pZCA9IG1ha2VSZXN1bHQuZGF0YVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLnN0YXR1cyA9PT0gNikge1xuICAgICAgICAgIHRoaXMuaWQgPSBlLmRhdGEuaWRcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHByb21pc2lmeSh3eC5yZXF1ZXN0UGF5bWVudCwgZS5kYXRhKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja1BheVN0YXR1cygpXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3guaGlkZVRvYXN0KClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogYHNoYXJlP2lkPSR7dGhpcy5pZH1gIH0pXG4gICAgfSxcbiAgICBtb25leUlucHV0SGFuZGxlcjogZSA9PiB7XG4gICAgICBpZiAoK2UuZGV0YWlsLnZhbHVlID49IDEwMDApIHtcbiAgICAgICAgdGhpcy5sdWNreU1vbmV5ID0gOTk5XG4gICAgICAgIHJldHVybiAnOTk5J1xuICAgICAgfVxuICAgICAgdGhpcy5sdWNreU1vbmV5ID0gK2UuZGV0YWlsLnZhbHVlXG4gICAgfSxcbiAgICBudW1JbnB1dEhhbmRsZXI6IGUgPT4ge1xuICAgICAgdGhpcy5udW1iZXIgPSArZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIGNoZWNrUGF5U3RhdHVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vbG9hZEx1Y2t5TW9uZXlTdGF0dXNgLFxuICAgICAgZGF0YTogeyBpZDogdGhpcy5pZCB9XG4gICAgfSlcbiAgICBpZiAoY2hlY2tSZXN1bHQuZGF0YSAhPT0gMCkge1xuICAgICAgYXdhaXQgc2xlZXAoMTAwMClcbiAgICAgIGF3YWl0IHRoaXMuY2hlY2tQYXlTdGF0dXMoKVxuICAgIH1cbiAgfVxufVxuIl19