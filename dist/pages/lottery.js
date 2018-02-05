'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _promisify = require('./../utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lottery = function (_wepy$page) {
  _inherits(lottery, _wepy$page);

  function lottery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, lottery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = lottery.__proto__ || Object.getPrototypeOf(lottery)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(lottery, [{
    key: 'onLoad',
    value: function onLoad() {
      var innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
      innerAudioContext.onPlay(function () {
        console.log('开始播放');
      });
      innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
    }
  }]);

  return lottery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(lottery , 'pages/lottery'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvdHRlcnkuanMiXSwibmFtZXMiOlsibG90dGVyeSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImV2ZW50cyIsImlubmVyQXVkaW9Db250ZXh0Iiwid3giLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImF1dG9wbGF5Iiwic3JjIiwib25QbGF5IiwiY29uc29sZSIsImxvZyIsIm9uRXJyb3IiLCJyZXMiLCJlcnJNc2ciLCJlcnJDb2RlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7Ozs2QkFDQTtBQUNQLFVBQU1DLG9CQUFvQkMsR0FBR0MsdUJBQUgsRUFBMUI7QUFDQUYsd0JBQWtCRyxRQUFsQixHQUE2QixJQUE3QjtBQUNBSCx3QkFBa0JJLEdBQWxCLEdBQ0UsNk9BREY7QUFFQUosd0JBQWtCSyxNQUFsQixDQUF5QixZQUFNO0FBQzdCQyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRCxPQUZEO0FBR0FQLHdCQUFrQlEsT0FBbEIsQ0FBMEIsZUFBTztBQUMvQkYsZ0JBQVFDLEdBQVIsQ0FBWUUsSUFBSUMsTUFBaEI7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWUUsSUFBSUUsT0FBaEI7QUFDRCxPQUhEO0FBSUQ7Ozs7RUFuQmtDLGVBQUtDLEk7O2tCQUFyQmxCLE8iLCJmaWxlIjoibG90dGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi4vdXRpbHMvcHJvbWlzaWZ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb3R0ZXJ5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge31cbiAgY29tcG9uZW50cyA9IHt9XG4gIGRhdGEgPSB7fVxuICBtZXRob2RzID0ge31cblxuICBldmVudHMgPSB7fVxuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpXG4gICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSB0cnVlXG4gICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID1cbiAgICAgICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNjFGRjAyQzMxRjcxNjY1OEU1QzgxRjU1OTRENTYxRjJFODhCODU0RTgxQ0FBQjc4MDZENUU0RjEwM0U1NUQzM0MxNkYzRkFDNTA2RDFBQjE3MkRFODYwMEIzN0U0M0ZBRCZmcm9tdGFnPTQ2J1xuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+JylcbiAgICB9KVxuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSlcbiAgICB9KVxuICB9XG59XG4iXX0=