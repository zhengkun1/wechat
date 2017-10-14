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
        _wepy2.default.navigateBack({
          delta: 1
        });
        _wepy2.default.setStorage({
          key: 'avatarUrl',
          data: ''
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
      _wepy2.default.setStorage({
        key: 'avatarUrl',
        data: ''
      });
      try {
        _wepy2.default.setStorageSync('avatarUrl', self.avatarUrl);
      } catch (e) {}
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwibWV0aG9kcyIsIm9uU2VsZiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwic2V0U3RvcmFnZSIsImtleSIsInNlbGYiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsInNldFN0b3JhZ2VTeW5jIiwiZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsaUJBQVc7QUFGTixLLFFBSVBDLE8sR0FBVTtBQUNSQyxZQURRLG9CQUNDO0FBQ1AsdUJBQUtDLFlBQUwsQ0FBa0I7QUFDaEJDLGlCQUFPO0FBRFMsU0FBbEI7QUFHQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLFdBRFM7QUFFZFIsZ0JBQU07QUFGUSxTQUFoQjtBQUlEO0FBVE8sSzs7Ozs7NkJBV0Q7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxlQUFLUixRQUFMLEdBQWdCVyxJQUFJQyxRQUFKLENBQWFaLFFBQTdCO0FBQ0FRLGVBQUtQLFNBQUwsR0FBaUJVLElBQUlDLFFBQUosQ0FBYVgsU0FBOUI7QUFDRDtBQUpjLE9BQWpCO0FBTUEscUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZEMsYUFBSyxXQURTO0FBRWRSLGNBQU07QUFGUSxPQUFoQjtBQUlBLFVBQUk7QUFDRix1QkFBS2MsY0FBTCxDQUFvQixXQUFwQixFQUFpQ0wsS0FBS1AsU0FBdEM7QUFDRCxPQUZELENBRUUsT0FBT2EsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQW5DZ0MsZUFBS0MsSTs7a0JBQW5CbEIsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBuaWNrTmFtZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25TZWxmKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICAgIGtleTogJ2F2YXRhclVybCcsXG4gICAgICAgIGRhdGE6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uaWNrTmFtZSA9IHJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICBzZWxmLmF2YXRhclVybCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuc2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdhdmF0YXJVcmwnLFxuICAgICAgZGF0YTogJydcbiAgICB9KVxuICAgIHRyeSB7XG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhdmF0YXJVcmwnLCBzZWxmLmF2YXRhclVybClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG59XG4iXX0=