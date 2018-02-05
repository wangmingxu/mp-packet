'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _promisify = require('./../utils/promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_wepy$page) {
  _inherits(Share, _wepy$page);

  function Share() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Share);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:list.sync": "tabList" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _this.data = {
      tabList: [{ text: '我发出的' }, { text: '我收到的' }]
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Share;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Share , 'pages/record'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5qcyJdLCJuYW1lcyI6WyJTaGFyZSIsImNvbmZpZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsImRhdGEiLCJ0YWJMaXN0IiwidGV4dCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFDVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixTQUF0QyxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdaQyxJLEdBQU87QUFDSEMsZUFBUSxDQUFDLEVBQUNDLE1BQUssTUFBTixFQUFELEVBQWUsRUFBQ0EsTUFBSyxNQUFOLEVBQWY7QUFETCxLLFFBR1BDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFOzs7O0VBYndCLGVBQUtDLEk7O2tCQUFuQlosSyIsImZpbGUiOiJyZWNvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgcHJvbWlzaWZ5LCB7IHRpbWVvdXRQcm9taXNlIH0gZnJvbSAnLi4vdXRpbHMvcHJvbWlzaWZ5J1xuaW1wb3J0IFRhYiBmcm9tICcuLi9jb21wb25lbnRzL3RhYic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge31cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJ0YWJMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHRhYjogVGFiXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAgIHRhYkxpc3Q6W3t0ZXh0OifmiJHlj5Hlh7rnmoQnfSx7dGV4dDon5oiR5pS25Yiw55qEJ31dXG4gIH1cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge31cbn1cbiJdfQ==