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

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      nickName: '',
      avatarUrl: ''
    }, _this.methods = {
      onSelf: function onSelf() {
        var self = this;
        try {
          _wepy2.default.setStorageSync('avatarUrl', self.avatarUrl);
          _wepy2.default.setStorageSync('nickName', self.nickName);
        } catch (e) {}
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.nickName = res.userInfo.nickName;
          self.avatarUrl = res.userInfo.avatarUrl;
        }
      });
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwibWV0aG9kcyIsIm9uU2VsZiIsInNlbGYiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxpQkFBVztBQUZOLEssUUFJUEMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJO0FBQ0YseUJBQUtDLGNBQUwsQ0FBb0IsV0FBcEIsRUFBaUNELEtBQUtILFNBQXRDO0FBQ0EseUJBQUtJLGNBQUwsQ0FBb0IsVUFBcEIsRUFBZ0NELEtBQUtKLFFBQXJDO0FBQ0QsU0FIRCxDQUdFLE9BQU9NLENBQVAsRUFBVSxDQUNYO0FBQ0QsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLGlCQUFPO0FBRFMsU0FBbEI7QUFHRDtBQVhPLEs7Ozs7OzZCQWFEO0FBQ1AsVUFBSUosT0FBTyxJQUFYO0FBQ0EscUJBQUtLLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlAsZUFBS0osUUFBTCxHQUFnQlcsSUFBSUMsUUFBSixDQUFhWixRQUE3QjtBQUNBSSxlQUFLSCxTQUFMLEdBQWlCVSxJQUFJQyxRQUFKLENBQWFYLFNBQTlCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBN0JnQyxlQUFLWSxJOztrQkFBbkJoQixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG5cbiAgfVxuICBkYXRhID0ge1xuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvblNlbGYoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2F2YXRhclVybCcsIHNlbGYuYXZhdGFyVXJsKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCduaWNrTmFtZScsIHNlbGYubmlja05hbWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=