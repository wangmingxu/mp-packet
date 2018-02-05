'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _promisify = require('./../utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _constant = require('./../constant/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_wepy$page) {
  _inherits(Share, _wepy$page);

  function Share() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      id: -1,
      userInfo: {},
      transFinish: false,
      imgUrl: ''
    }, _this.methods = {
      share: function share() {},
      save: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _promisify2.default)(wx.saveImageToPhotosAlbum, { filePath: _this.imgUrl });

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        function save() {
          return _ref2.apply(this, arguments);
        }

        return save;
      }(),
      toPacketPage: function toPacketPage() {
        wx.navigateTo({ url: 'packet?id=' + _this.id });
      }
    }, _this.events = {}, _this.makePic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var ctx, avatarUrl, fetchBackground, fetchAvatar, QrcodeUrl, fetchQrcode, _ref4, _ref5, bg, avatar, qrcode, drawPromise, _ref6, tempFilePath;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ctx = wx.createCanvasContext('poster');
              avatarUrl = _this.data.userInfo.avatarUrl.substr(0, _this.data.userInfo.avatarUrl.length - 1) + '132';
              fetchBackground = (0, _promisify2.default)(wx.getImageInfo, {
                src: 'https://bizadv.lizhi.fm/static/2018/voice_app/share.png'
                // src: '../assets/images/share.png'
              });
              fetchAvatar = (0, _promisify2.default)(wx.getImageInfo, {
                src: avatarUrl
              });
              QrcodeUrl = _constant.requestBaseUrl + '/loadQrcode?scene=' + (_this.id || '1031') + '&page=' + encodeURIComponent('pages/packet');
              fetchQrcode = (0, _promisify2.default)(wx.getImageInfo, {
                src: QrcodeUrl
              });
              _context2.next = 8;
              return Promise.all([fetchBackground, fetchAvatar, fetchQrcode]);

            case 8:
              _ref4 = _context2.sent;
              _ref5 = _slicedToArray(_ref4, 3);
              bg = _ref5[0].path;
              avatar = _ref5[1].path;
              qrcode = _ref5[2].path;

              //绘制底图
              ctx.drawImage(bg, 0, 0, 750, 1254, 0, 0, 750, 1254);
              //绘制昵称
              ctx.setTextAlign('center');
              ctx.setFontSize(32);
              ctx.setFillStyle('#ffffff');
              ctx.fillText(_this.data.userInfo.nickName + '\u53D1\u4E86\u4E00\u4E2A\u8BED\u97F3\u53E3\u4EE4', 375, 285);
              //绘制头像
              ctx.save();
              ctx.setStrokeStyle('#ffffff');
              ctx.beginPath();
              ctx.setLineWidth(8);
              ctx.arc(300 + 150 / 2, 80 + 150 / 2, 75, 0, 2 * Math.PI);
              ctx.stroke();
              ctx.clip();
              ctx.drawImage(avatar, 0, 0, 132, 132, 300, 80, 150, 150);
              ctx.restore();
              //绘制二维码
              ctx.save();
              ctx.setStrokeStyle('#fdba54');
              ctx.beginPath();
              ctx.setLineWidth(8);
              ctx.arc(375, 550, 287 / 2, 0, 2 * Math.PI);
              ctx.stroke();
              ctx.clip();
              ctx.drawImage(qrcode, 0, 0, 300, 300, 230, 550 - 287 / 2, 287, 287);
              ctx.restore();
              //渲染到画布上
              drawPromise = new Promise(function (resolve, reject) {
                ctx.draw(false, function () {
                  resolve();
                });
              });
              _context2.next = 39;
              return Promise.race([drawPromise, (0, _promisify.sleep)(500)]);

            case 39:
              _context2.next = 41;
              return (0, _promisify2.default)(wx.canvasToTempFilePath, {
                canvasId: 'poster',
                x: 0,
                y: 0,
                width: 750,
                height: 1254,
                destWidth: 750,
                destHeight: 1254
              });

            case 41:
              _ref6 = _context2.sent;
              tempFilePath = _ref6.tempFilePath;

              // await promisify(wx.previewImage, { urls: [tempFilePath] })
              _this.transFinish = true;
              _this.imgUrl = tempFilePath;
              _this.$apply();

            case 46:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Share, [{
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      // this.loadData().then(()=>{
      wx.stopPullDownRefresh();
      // });
    }
  }, {
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
    key: 'onLoad',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.id = options.id;
                _context3.next = 3;
                return this.$parent.getUserInfo();

              case 3:
                this.userInfo = _context3.sent;

                this.$apply();
                _context3.next = 7;
                return (0, _promisify2.default)(wx.showLoading, {
                  mask: true,
                  title: '正在生成...'
                });

              case 7:
                _context3.prev = 7;
                _context3.next = 10;
                return this.makePic();

              case 10:
                wx.hideLoading();
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](7);

                wx.hideLoading();

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 13]]);
      }));

      function onLoad(_x) {
        return _ref7.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Share;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Share , 'pages/share'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbIlNoYXJlIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJpZCIsInVzZXJJbmZvIiwidHJhbnNGaW5pc2giLCJpbWdVcmwiLCJtZXRob2RzIiwic2hhcmUiLCJzYXZlIiwid3giLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiZmlsZVBhdGgiLCJ0b1BhY2tldFBhZ2UiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwibWFrZVBpYyIsImN0eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJhdmF0YXJVcmwiLCJzdWJzdHIiLCJsZW5ndGgiLCJmZXRjaEJhY2tncm91bmQiLCJnZXRJbWFnZUluZm8iLCJzcmMiLCJmZXRjaEF2YXRhciIsIlFyY29kZVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoUXJjb2RlIiwiUHJvbWlzZSIsImFsbCIsImJnIiwicGF0aCIsImF2YXRhciIsInFyY29kZSIsImRyYXdJbWFnZSIsInNldFRleHRBbGlnbiIsInNldEZvbnRTaXplIiwic2V0RmlsbFN0eWxlIiwiZmlsbFRleHQiLCJuaWNrTmFtZSIsInNldFN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwic2V0TGluZVdpZHRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiY2xpcCIsInJlc3RvcmUiLCJkcmF3UHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJkcmF3IiwicmFjZSIsImNhbnZhc1RvVGVtcEZpbGVQYXRoIiwiY2FudmFzSWQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsInRlbXBGaWxlUGF0aCIsIiRhcHBseSIsInN0b3BQdWxsRG93blJlZnJlc2giLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwic2hvd0xvYWRpbmciLCJt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QixlQUFLQyxJOztrQkFBbkJsRixLIiwiZmlsZSI6InNoYXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHByb21pc2lmeSwgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzL3Byb21pc2lmeSdcbmltcG9ydCB7IHJlcXVlc3RCYXNlVXJsIH0gZnJvbSAnLi4vY29uc3RhbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgLy8gdGhpcy5sb2FkRGF0YSgpLnRoZW4oKCk9PntcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICAvLyB9KTtcbiAgfVxuICBjb25maWcgPSB7fVxuICBjb21wb25lbnRzID0ge31cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuZnJvbSlcbiAgICBpZiAob3B0aW9ucy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zLnRhcmdldClcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5Y+j5b+r5pyJ77yM5Y+j5oWi5pegJyxcbiAgICAgIHBhdGg6IGAvcGFnZXMvcGFja2V0P2lkPSR7dGhpcy5pZH1gLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMudXNlckluZm8gPSBhd2FpdCB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgICBhd2FpdCBwcm9taXNpZnkod3guc2hvd0xvYWRpbmcsIHtcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICB0aXRsZTogJ+ato+WcqOeUn+aIkC4uLidcbiAgICB9KVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm1ha2VQaWMoKVxuICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgaWQ6IC0xLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICB0cmFuc0ZpbmlzaDogZmFsc2UsXG4gICAgaW1nVXJsOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2hhcmU6ICgpID0+IHt9LFxuICAgIHNhdmU6IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHByb21pc2lmeSh3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtLCB7IGZpbGVQYXRoOiB0aGlzLmltZ1VybCB9KVxuICAgIH0sXG4gICAgdG9QYWNrZXRQYWdlOiAoKSA9PiB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHsgdXJsOiBgcGFja2V0P2lkPSR7dGhpcy5pZH1gIH0pXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBtYWtlUGljID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ3Bvc3RlcicpXG4gICAgY29uc3QgYXZhdGFyVXJsID0gYCR7dGhpcy5kYXRhLnVzZXJJbmZvLmF2YXRhclVybC5zdWJzdHIoXG4gICAgICAwLFxuICAgICAgdGhpcy5kYXRhLnVzZXJJbmZvLmF2YXRhclVybC5sZW5ndGggLSAxXG4gICAgKX0xMzJgXG4gICAgY29uc3QgZmV0Y2hCYWNrZ3JvdW5kID0gcHJvbWlzaWZ5KHd4LmdldEltYWdlSW5mbywge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9iaXphZHYubGl6aGkuZm0vc3RhdGljLzIwMTgvdm9pY2VfYXBwL3NoYXJlLnBuZydcbiAgICAgIC8vIHNyYzogJy4uL2Fzc2V0cy9pbWFnZXMvc2hhcmUucG5nJ1xuICAgIH0pXG4gICAgY29uc3QgZmV0Y2hBdmF0YXIgPSBwcm9taXNpZnkod3guZ2V0SW1hZ2VJbmZvLCB7XG4gICAgICBzcmM6IGF2YXRhclVybFxuICAgIH0pXG4gICAgY29uc3QgUXJjb2RlVXJsID0gYCR7cmVxdWVzdEJhc2VVcmx9L2xvYWRRcmNvZGU/c2NlbmU9JHt0aGlzLmlkIHx8XG4gICAgICAnMTAzMSd9JnBhZ2U9JHtlbmNvZGVVUklDb21wb25lbnQoJ3BhZ2VzL3BhY2tldCcpfWBcbiAgICBjb25zdCBmZXRjaFFyY29kZSA9IHByb21pc2lmeSh3eC5nZXRJbWFnZUluZm8sIHtcbiAgICAgIHNyYzogUXJjb2RlVXJsXG4gICAgfSlcbiAgICBjb25zdCBbXG4gICAgICB7IHBhdGg6IGJnIH0sXG4gICAgICB7IHBhdGg6IGF2YXRhciB9LFxuICAgICAgeyBwYXRoOiBxcmNvZGUgfVxuICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hCYWNrZ3JvdW5kLCBmZXRjaEF2YXRhciwgZmV0Y2hRcmNvZGVdKVxuICAgIC8v57uY5Yi25bqV5Zu+XG4gICAgY3R4LmRyYXdJbWFnZShiZywgMCwgMCwgNzUwLCAxMjU0LCAwLCAwLCA3NTAsIDEyNTQpXG4gICAgLy/nu5jliLbmmLXnp7BcbiAgICBjdHguc2V0VGV4dEFsaWduKCdjZW50ZXInKVxuICAgIGN0eC5zZXRGb250U2l6ZSgzMilcbiAgICBjdHguc2V0RmlsbFN0eWxlKCcjZmZmZmZmJylcbiAgICBjdHguZmlsbFRleHQoYCR7dGhpcy5kYXRhLnVzZXJJbmZvLm5pY2tOYW1lfeWPkeS6huS4gOS4quivremfs+WPo+S7pGAsIDM3NSwgMjg1KVxuICAgIC8v57uY5Yi25aS05YOPXG4gICAgY3R4LnNhdmUoKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnI2ZmZmZmZicpXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LnNldExpbmVXaWR0aCg4KVxuICAgIGN0eC5hcmMoMzAwICsgMTUwIC8gMiwgODAgKyAxNTAgLyAyLCA3NSwgMCwgMiAqIE1hdGguUEkpXG4gICAgY3R4LnN0cm9rZSgpXG4gICAgY3R4LmNsaXAoKVxuICAgIGN0eC5kcmF3SW1hZ2UoYXZhdGFyLCAwLCAwLCAxMzIsIDEzMiwgMzAwLCA4MCwgMTUwLCAxNTApXG4gICAgY3R4LnJlc3RvcmUoKVxuICAgIC8v57uY5Yi25LqM57u056CBXG4gICAgY3R4LnNhdmUoKVxuICAgIGN0eC5zZXRTdHJva2VTdHlsZSgnI2ZkYmE1NCcpXG4gICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgY3R4LnNldExpbmVXaWR0aCg4KVxuICAgIGN0eC5hcmMoMzc1LCA1NTAsIDI4NyAvIDIsIDAsIDIgKiBNYXRoLlBJKVxuICAgIGN0eC5zdHJva2UoKVxuICAgIGN0eC5jbGlwKClcbiAgICBjdHguZHJhd0ltYWdlKHFyY29kZSwgMCwgMCwgMzAwLCAzMDAsIDIzMCwgNTUwIC0gMjg3IC8gMiwgMjg3LCAyODcpXG4gICAgY3R4LnJlc3RvcmUoKVxuICAgIC8v5riy5p+T5Yiw55S75biD5LiKXG4gICAgY29uc3QgZHJhd1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjdHguZHJhdyhmYWxzZSwgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLnJhY2UoW2RyYXdQcm9taXNlLCBzbGVlcCg1MDApXSlcbiAgICBjb25zdCB7IHRlbXBGaWxlUGF0aCB9ID0gYXdhaXQgcHJvbWlzaWZ5KHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoLCB7XG4gICAgICBjYW52YXNJZDogJ3Bvc3RlcicsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiA3NTAsXG4gICAgICBoZWlnaHQ6IDEyNTQsXG4gICAgICBkZXN0V2lkdGg6IDc1MCxcbiAgICAgIGRlc3RIZWlnaHQ6IDEyNTRcbiAgICB9KVxuICAgIC8vIGF3YWl0IHByb21pc2lmeSh3eC5wcmV2aWV3SW1hZ2UsIHsgdXJsczogW3RlbXBGaWxlUGF0aF0gfSlcbiAgICB0aGlzLnRyYW5zRmluaXNoID0gdHJ1ZVxuICAgIHRoaXMuaW1nVXJsID0gdGVtcEZpbGVQYXRoXG4gICAgdGhpcy4kYXBwbHkoKVxuICB9XG59XG4iXX0=