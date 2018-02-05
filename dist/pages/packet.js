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

        var _ref5, scene, userInfo, _ref6, data, luckyMoneyRst;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _promisify2.default)(wx.getStorage, { key: 'scene' });

              case 2:
                _ref5 = _context2.sent;
                scene = _ref5.data;

                this.id = options.id || decodeURIComponent(scene);
                console.log(options.id);
                _context2.next = 8;
                return this.$parent.getUserInfo();

              case 8:
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
                _context2.next = 16;
                return (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' });

              case 16:
                _ref6 = _context2.sent;
                data = _ref6.data;
                _context2.next = 20;
                return (0, _request2.default)({
                  url: _constant.requestBaseUrl + '/loadLuckyMoney',
                  data: Object.assign(data, { id: this.id }) //todo
                });

              case 20:
                luckyMoneyRst = _context2.sent;

                this.luckyMoneyInfo = luckyMoneyRst.data;
                this.$apply();
                if (this.luckyMoneyInfo.snatchStatus !== 0) {
                  wx.redirectTo({ url: 'result?id=' + this.id });
                } else {
                  this.ready = true;
                  this.$apply();
                }

              case 24:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2tldC5qcyJdLCJuYW1lcyI6WyJQYWNrZXQiLCJjb25maWciLCJjb21wb25lbnRzIiwiZGF0YSIsImlkIiwibHVja3lNb25leUluZm8iLCJwbGF5aW5nSWQiLCJjaG9vc2VJZCIsInJlYWR5IiwibWV0aG9kcyIsImNob29zZSIsImxpc3RlbiIsInVybCIsImlubmVyQXVkaW9Db250ZXh0Iiwic3JjIiwicGxheSIsInN1Ym1pdCIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImdldFN0b3JhZ2UiLCJrZXkiLCJPYmplY3QiLCJhc3NpZ24iLCJhbnN3ZXIiLCJSZXN1bHQiLCJyZWRpcmVjdFRvIiwiZXZlbnRzIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIm9wdGlvbnMiLCJzY2VuZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNldERhdGEiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsIm9uUGxheSIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwib25FbmRlZCIsIiRhcHBseSIsImx1Y2t5TW9uZXlSc3QiLCJzbmF0Y2hTdGF0dXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7c0xBTW5CQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsVUFBSSxDQUFDLENBREE7QUFFTEMsc0JBQWdCLEVBRlg7QUFHTEMsaUJBQVcsRUFITjtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLGFBQU87QUFMRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQUFRLG9CQUFNO0FBQ1osY0FBS0gsUUFBTCxHQUFnQkgsRUFBaEI7QUFDRCxPQUhPO0FBSVJPLGNBQVEsZ0JBQUNDLEdBQUQs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LEtBQUtSLEVBQXpCLEVBQWQ7QUFDRCxpQkFGRCxNQUVLO0FBQ0gsdUJBQUtJLEtBQUwsR0FBYSxJQUFiO0FBQ0EsdUJBQUt1QyxNQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RStCLGVBQUtHLEk7O2tCQUFwQmxELE0iLCJmaWxlIjoicGFja2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHByb21pc2lmeSwgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3Byb21pc2lmeSdcbmltcG9ydCB7IHJlcXVlc3RCYXNlVXJsIH0gZnJvbSAnLi4vY29uc3RhbnQnXG5pbXBvcnQgcmVxdWVzdFByb21pc2UgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFja2V0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgb25QdWxsRG93blJlZnJlc2goKXtcbiAgICAvLyB0aGlzLmxvYWREYXRhKCkudGhlbigoKT0+e1xuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgLy8gfSk7XG4gIH1cbiAgY29uZmlnID0ge31cbiAgY29tcG9uZW50cyA9IHt9XG4gIGRhdGEgPSB7XG4gICAgaWQ6IC0xLFxuICAgIGx1Y2t5TW9uZXlJbmZvOiB7fSxcbiAgICBwbGF5aW5nSWQ6ICcnLFxuICAgIGNob29zZUlkOiAnJyxcbiAgICByZWFkeTogZmFsc2UsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaG9vc2U6IGlkID0+IHtcbiAgICAgIHRoaXMuY2hvb3NlSWQgPSBpZFxuICAgIH0sXG4gICAgbGlzdGVuOiAodXJsLCBpZCkgPT4ge1xuICAgICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5zcmMgPSB1cmxcbiAgICAgIC8vIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2MUZGMDJDMzFGNzE2NjU4RTVDODFGNTU5NEQ1NjFGMkU4OEI4NTRFODFDQUFCNzgwNkQ1RTRGMTAzRTU1RDMzQzE2RjNGQUM1MDZEMUFCMTcyREU4NjAwQjM3RTQzRkFEJmZyb210YWc9NDYnXG4gICAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKVxuICAgICAgdGhpcy5wbGF5aW5nSWQgPSBpZFxuICAgIH0sXG4gICAgc3VibWl0OiBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2hvb3NlSWQpIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXG4gICAgICAgICAgY29udGVudDogJ+ivt+WFiOmAieaLqeetlOahiCcsXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByb21pc2lmeSh3eC5nZXRTdG9yYWdlLCB7IGtleTogJ3NpZ25JbmZvJyB9KVxuICAgICAgY29uc3QgUmVzdWx0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgICB1cmw6IGAke3JlcXVlc3RCYXNlVXJsfS9zbmF0Y2hMdWNreU1vbmV5YCxcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgYW5zd2VyOiB0aGlzLmNob29zZUlkLFxuICAgICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogYHJlc3VsdD9pZD0ke3RoaXMuaWR9YCB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG4gIGFzeW5jIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc3QgeyBkYXRhOiBzY2VuZSB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmdldFN0b3JhZ2UsIHsga2V5OiAnc2NlbmUnIH0pXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQgfHwgZGVjb2RlVVJJQ29tcG9uZW50KHNjZW5lKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zLmlkKTtcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbygpXG4gICAgdGhpcy5zZXREYXRhKHsgdXNlckluZm8gfSlcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKVxuICAgIHRoaXMuaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgY29uc29sZS5sb2cocmVzLmVyckNvZGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQocmVzID0+IHtcbiAgICAgIHRoaXMucGxheWluZ0lkID0gJyc7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwcm9taXNpZnkod3guZ2V0U3RvcmFnZSwgeyBrZXk6ICdzaWduSW5mbycgfSlcbiAgICBjb25zdCBsdWNreU1vbmV5UnN0ID0gYXdhaXQgcmVxdWVzdFByb21pc2Uoe1xuICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vbG9hZEx1Y2t5TW9uZXlgLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihkYXRhLCB7IGlkOiB0aGlzLmlkIH0pIC8vdG9kb1xuICAgIH0pXG4gICAgdGhpcy5sdWNreU1vbmV5SW5mbyA9IGx1Y2t5TW9uZXlSc3QuZGF0YVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICBpZih0aGlzLmx1Y2t5TW9uZXlJbmZvLnNuYXRjaFN0YXR1cyE9PTApe1xuICAgICAgd3gucmVkaXJlY3RUbyh7IHVybDogYHJlc3VsdD9pZD0ke3RoaXMuaWR9YCB9KVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWVcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==