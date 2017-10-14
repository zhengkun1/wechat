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

var Self = function (_wepy$page) {
  _inherits(Self, _wepy$page);

  function Self() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Self);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Self.__proto__ || Object.getPrototypeOf(Self)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      pic: '../image/pic.png',
      name: '登录'
    }, _this.methods = {
      login: function login() {
        var self = this;
        self.pic = 'avatarUrl';
        self.name = 'name';
      },
      onBack: function onBack() {
        _wepy2.default.navigateTo({
          url: './login'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Self, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      _wepy2.default.getStorage({
        key: 'avatarUrl',
        success: function success(res) {
          console.log(res.data);
        }
      });
    }
  }]);

  return Self;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Self , 'pages/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsImRhdGEiLCJwaWMiLCJuYW1lIiwibWV0aG9kcyIsImxvZ2luIiwic2VsZiIsIm9uQmFjayIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLGtCQURBO0FBRUxDLFlBQU07QUFGRCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEdBQUwsR0FBVyxXQUFYO0FBQ0FJLGFBQUtILElBQUwsR0FBWSxNQUFaO0FBQ0QsT0FMTztBQU1SSSxZQU5RLG9CQU1DO0FBQ1AsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFWTyxLOzs7Ozs2QkFZRCxDQUNSOzs7NkJBRVE7QUFDUCxxQkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxhQUFLLFdBRFM7QUFFZEMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSVosSUFBaEI7QUFDRDtBQUphLE9BQWhCO0FBTUQ7Ozs7RUE5QitCLGVBQUtlLEk7O2tCQUFsQmpCLEkiLCJmaWxlIjoic2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGYgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG5cbiAgfVxuICBkYXRhID0ge1xuICAgIHBpYzogJy4uL2ltYWdlL3BpYy5wbmcnLFxuICAgIG5hbWU6ICfnmbvlvZUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsb2dpbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5waWMgPSAnYXZhdGFyVXJsJ1xuICAgICAgc2VsZi5uYW1lID0gJ25hbWUnXG4gICAgfSxcbiAgICBvbkJhY2soKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xvZ2luJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG5cbiAgb25TaG93KCkge1xuICAgIHdlcHkuZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdhdmF0YXJVcmwnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==