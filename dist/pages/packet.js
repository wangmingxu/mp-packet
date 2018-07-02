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

var Packet = function (_wepy$page) {
  _inherits(Packet, _wepy$page);

  function Packet() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Packet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Packet.__proto__ || Object.getPrototypeOf(Packet)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      id: -1,
      luckyMoneyInfo: {},
      playingId: '',
      chooseId: '',
      ready: false
    }, _this.methods = {
      choose: function choose(id) {
        _this.chooseId = id;
      },
      listen: function listen(url, id) {
        _this.innerAudioContext.src = url;
        // this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
        _this.innerAudioContext.play();
        _this.playingId = id;
      },
      submit: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _ref3, data, Result;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.chooseId) {
                    _context.next = 3;
                    break;
                  }

                  wx.showModal({
                    title: '温馨提示',
                    content: '请先选择答案',
                    showCancel: false
                  });
                  return _context.abrupt('return', false);

                case 3:
                  _context.next = 5;
                  return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

                case 5:
                  _ref3 = _context.sent;
                  data = _ref3.data;
                  _context.next = 9;
                  return (0, _request2.default)({
                    url: _constant.requestBaseUrl + '/snatchLuckyMoney',
                    data: Object.assign(data, {
                      answer: _this.chooseId,
                      id: _this.id
                    })
                  });

                case 9:
                  Result = _context.sent;

                  wx.redirectTo({ url: 'result?id=' + _this.id });

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        function submit() {
          return _ref2.apply(this, arguments);
        }

        return submit;
      }()
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Packet, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // this.loadData().then(()=>{
      wx.stopPullDownRefresh();
      // });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        var _this3 = this;

        var userInfo, _ref5, data, luckyMoneyRst;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // const { data: scene } = await promisify(wx.getStorage, { key: 'scene' })
                this.id = options.id || decodeURIComponent(options.scene); // todo
                _context2.next = 3;
                return this.$parent.getUserInfo();

              case 3:
                userInfo = _context2.sent;

                this.setData({ userInfo: userInfo });
                this.innerAudioContext = wx.createInnerAudioContext();
                this.innerAudioContext.onPlay(function () {
                  console.log('开始播放');
                });
                this.innerAudioContext.onError(function (res) {
                  console.log(res.errMsg);
                  console.log(res.errCode);
                });
                this.innerAudioContext.onEnded(function (res) {
                  _this3.playingId = '';
                  _this3.$apply();
                });
                _context2.next = 11;
                return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

              case 11:
                _ref5 = _context2.sent;
                data = _ref5.data;
                _context2.next = 15;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadLuckyMoney',
                  data: Object.assign(data, { id: this.id }) // todo
                });

              case 15:
                luckyMoneyRst = _context2.sent;

                this.luckyMoneyInfo = luckyMoneyRst.data;
                this.$apply();
                if (this.luckyMoneyInfo.snatchStatus !== 0) {
                  wx.redirectTo({ url: 'result?id=' + this.id });
                } else {
                  this.ready = true;
                  this.$apply();
                }

              case 19:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref4.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Packet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Packet , 'pages/packet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2tldC5qcyJdLCJuYW1lcyI6WyJQYWNrZXQiLCJjb25maWciLCJjb21wb25lbnRzIiwiZGF0YSIsImlkIiwibHVja3lNb25leUluZm8iLCJwbGF5aW5nSWQiLCJjaG9vc2VJZCIsInJlYWR5IiwibWV0aG9kcyIsImNob29zZSIsImxpc3RlbiIsInVybCIsImlubmVyQXVkaW9Db250ZXh0Iiwic3JjIiwicGxheSIsInN1Ym1pdCIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImdldFN0b3JhZ2UiLCJrZXkiLCJPYmplY3QiLCJhc3NpZ24iLCJhbnN3ZXIiLCJSZXN1bHQiLCJyZWRpcmVjdFRvIiwiZXZlbnRzIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9wdGlvbnMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzY2VuZSIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic2V0RGF0YSIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0Iiwib25QbGF5IiwiY29uc29sZSIsImxvZyIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwib25FbmRlZCIsIiRhcHBseSIsImx1Y2t5TW9uZXlSc3QiLCJzbmF0Y2hTdGF0dXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7c0xBTW5CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsVUFBSSxDQUFDLENBREE7QUFFTEMsc0JBQWdCLEVBRlg7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLGFBQU87QUFMRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQUFRLG9CQUFNO0FBQ1osY0FBS0gsUUFBTCxHQUFnQkgsRUFBaEI7QUFDRCxPQUhPO0FBSVJPLGNBQVEsZ0JBQUNDLEdBQUQs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Ozs7OztFQTVFK0IsZUFBS0csSTs7a0JBQXBCbEQsTSIsImZpbGUiOiJwYWNrZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcHJvbWlzaWZ5LCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMvcHJvbWlzaWZ5J1xuaW1wb3J0IHsgcmVxdWVzdEJhc2VVcmwgfSBmcm9tICcuLi9jb25zdGFudCdcbmltcG9ydCByZXF1ZXN0UHJvbWlzZSBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrZXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAvLyB0aGlzLmxvYWREYXRhKCkudGhlbigoKT0+e1xuICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIC8vIH0pO1xuICB9XG4gIGNvbmZpZyA9IHt9XG4gIGNvbXBvbmVudHMgPSB7fVxuICBkYXRhID0ge1xuICAgIGlkOiAtMSxcbiAgICBsdWNreU1vbmV5SW5mbzoge30sXG4gICAgcGxheWluZ0lkOiAnJyxcbiAgICBjaG9vc2VJZDogJycsXG4gICAgcmVhZHk6IGZhbHNlXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaG9vc2U6IGlkID0+IHtcbiAgICAgIHRoaXMuY2hvb3NlSWQgPSBpZFxuICAgIH0sXG4gICAgbGlzdGVuOiAodXJsLCBpZCkgPT4ge1xuICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5zcmMgPSB1cmxcbiAgICAgIC8vIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2MUZGMDJDMzFGNzE2NjU4RTVDODFGNTU5NEQ1NjFGMkU4OEI4NTRFODFDQUFCNzgwNkQ1RTRGMTAzRTU1RDMzQzE2RjNGQUM1MDZEMUFCMTcyREU4NjAwQjM3RTQzRkFEJmZyb210YWc9NDYnXG4gICAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKVxuICAgICAgdGhpcy5wbGF5aW5nSWQgPSBpZFxuICAgIH0sXG4gICAgc3VibWl0OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2hvb3NlSWQpIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+ivt+WFiOmAieaLqeetlOahiCcsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJyB9KVxuICAgICAgY29uc3QgUmVzdWx0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9zbmF0Y2hMdWNreU1vbmV5YCxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgYW5zd2VyOiB0aGlzLmNob29zZUlkLFxuICAgICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogYHJlc3VsdD9pZD0ke3RoaXMuaWR9YCB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgLy8gY29uc3QgeyBkYXRhOiBzY2VuZSB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmdldFN0b3JhZ2UsIHsga2V5OiAnc2NlbmUnIH0pXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQgfHwgZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuc2NlbmUpLy8gdG9kb1xuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKClcbiAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbyB9KVxuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+W8gOWni+aSreaUvicpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQub25FbmRlZChyZXMgPT4ge1xuICAgICAgdGhpcy5wbGF5aW5nSWQgPSAnJ1xuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0pXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0U3RvcmFnZSwgeyBrZXk6ICdzaWduSW5mbycgfSlcbiAgICBjb25zdCBsdWNreU1vbmV5UnN0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vbG9hZEx1Y2t5TW9uZXlgLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihkYXRhLCB7IGlkOiB0aGlzLmlkIH0pIC8vIHRvZG9cbiAgICB9KVxuICAgIHRoaXMubHVja3lNb25leUluZm8gPSBsdWNreU1vbmV5UnN0LmRhdGFcbiAgICB0aGlzLiRhcHBseSgpXG4gICAgaWYgKHRoaXMubHVja3lNb25leUluZm8uc25hdGNoU3RhdHVzICE9PSAwKSB7XG4gICAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiBgcmVzdWx0P2lkPSR7dGhpcy5pZH1gIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVhZHkgPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG59XG4iXX0=