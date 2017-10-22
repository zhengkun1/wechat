'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Serch = function (_wepy$page) {
  _inherits(Serch, _wepy$page);

  function Serch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Serch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Serch.__proto__ || Object.getPrototypeOf(Serch)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      // pickerHidden: true,
      // chosen: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      formReset: function formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Serch, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Serch;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Serch , 'pages/serch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmNoLmpzIl0sIm5hbWVzIjpbIlNlcmNoIiwiY29uZmlnIiwiZGF0YSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImZvcm1SZXNldCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFHVEMsSSxHQUFPO0FBQ0w7QUFDQTtBQUZLLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUEvQztBQUNELE9BSE87QUFJUkMsZUFKUSxxQkFJRUwsQ0FKRixFQUlLO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVksdUJBQVosRUFBcUNGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBOUM7QUFDRDtBQU5PLEs7Ozs7OzZCQVNELENBQ1I7Ozs7RUFsQmdDLGVBQUtFLEk7O2tCQUFuQlgsSyIsImZpbGUiOiJzZXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAvLyBwaWNrZXJIaWRkZW46IHRydWUsXG4gICAgLy8gY2hvc2VuOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgZm9ybVJlc2V0KGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==