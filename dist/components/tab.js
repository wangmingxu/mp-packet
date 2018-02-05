'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: {
        type: Array,
        default: 'null'
      },
      current: {
        type: Number,
        default: 0
      }
    }, _this.data = {
      activeItem: 0
    }, _this.events = {}, _this.methods = {
      changeTab: function changeTab(e) {
        var index = e.target.dataset.index;
        this.$emit('tabChange', index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.current);
    }
  }]);

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwiY3VycmVudCIsIk51bWJlciIsImRhdGEiLCJhY3RpdmVJdGVtIiwiZXZlbnRzIiwibWV0aG9kcyIsImNoYW5nZVRhYiIsImUiLCJpbmRleCIsInRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsY0FBTUMsS0FERjtBQUVKQyxpQkFBUztBQUZMLE9BREE7QUFLTkMsZUFBUztBQUNQSCxjQUFNSSxNQURDO0FBRVBGLGlCQUFTO0FBRkY7QUFMSCxLLFFBV1JHLEksR0FBTztBQUNMQyxrQkFBWTtBQURQLEssUUFJUEMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBQ1JDLGVBRFEscUJBQ0VDLENBREYsRUFDSztBQUNYLFlBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsS0FBL0I7QUFDQSxhQUFLRyxLQUFMLENBQVcsV0FBWCxFQUF3QkgsS0FBeEI7QUFDRDtBQUpPLEs7Ozs7OzZCQU9EO0FBQ1BJLGNBQVFDLEdBQVIsQ0FBWSxLQUFLYixPQUFqQjtBQUNEOzs7O0VBM0I4QixlQUFLYyxTOztrQkFBakJwQixHIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICdudWxsJ1xuICAgIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIGFjdGl2ZUl0ZW06IDBcbiAgfVxuXG4gIGV2ZW50cyA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGFuZ2VUYWIoZSkge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICB0aGlzLiRlbWl0KCd0YWJDaGFuZ2UnLCBpbmRleClcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50KVxuICB9XG59XG4iXX0=