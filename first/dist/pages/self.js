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
      var self = this;
      try {
        var data = _wepy2.default.getStorageSync('avatarUrl');
        var data1 = _wepy2.default.getStorageSync('nickName');
        if (data) {
          self.pic = data;
          self.name = data1;
        }
      } catch (err) {}
    }
  }]);

  return Self;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Self , 'pages/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsImRhdGEiLCJwaWMiLCJuYW1lIiwibWV0aG9kcyIsImxvZ2luIiwic2VsZiIsIm9uQmFjayIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTdG9yYWdlU3luYyIsImRhdGExIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxrQkFEQTtBQUVMQyxZQUFNO0FBRkQsSyxRQUlQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixHQUFMLEdBQVcsV0FBWDtBQUNBSSxhQUFLSCxJQUFMLEdBQVksTUFBWjtBQUNELE9BTE87QUFNUkksWUFOUSxvQkFNQztBQUNQLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBVk8sSzs7Ozs7NkJBWUQsQ0FDUjs7OzZCQUVRO0FBQ1AsVUFBSUgsT0FBTyxJQUFYO0FBQ0EsVUFBSTtBQUNGLFlBQUlMLE9BQU8sZUFBS1MsY0FBTCxDQUFvQixXQUFwQixDQUFYO0FBQ0EsWUFBSUMsUUFBUSxlQUFLRCxjQUFMLENBQW9CLFVBQXBCLENBQVo7QUFDQSxZQUFJVCxJQUFKLEVBQVU7QUFDUkssZUFBS0osR0FBTCxHQUFXRCxJQUFYO0FBQ0FLLGVBQUtILElBQUwsR0FBWVEsS0FBWjtBQUNEO0FBQ0YsT0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWSxDQUNiO0FBQ0Y7Ozs7RUFsQytCLGVBQUtDLEk7O2tCQUFsQmQsSSIsImZpbGUiOiJzZWxmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcblxuICB9XG4gIGRhdGEgPSB7XG4gICAgcGljOiAnLi4vaW1hZ2UvcGljLnBuZycsXG4gICAgbmFtZTogJ+eZu+W9lSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxvZ2luKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnBpYyA9ICdhdmF0YXJVcmwnXG4gICAgICBzZWxmLm5hbWUgPSAnbmFtZSdcbiAgICB9LFxuICAgIG9uQmFjaygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbG9naW4nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXZhdGFyVXJsJylcbiAgICAgIGxldCBkYXRhMSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ25pY2tOYW1lJylcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHNlbGYucGljID0gZGF0YVxuICAgICAgICBzZWxmLm5hbWUgPSBkYXRhMVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgIH1cbiAgfVxufVxuIl19