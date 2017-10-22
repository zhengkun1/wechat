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
      _login: '登录',
      pic: '../image/pic.png',
      name: '',
      icon: '',
      title: '',
      _icon: '',
      _title: ''
    }, _this.methods = {
      login: function login() {
        var self = this;
        self.pic = 'avatarUrl';
        self.name = 'name';
        self.icon = 'icon';
        self.title = 'title';
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
        var array = _wepy2.default.getStorageSync('arr');
        if (array) {
          array.push({
            icon: '',
            title: ''
          });
        } else {
          var arr = [{
            icon: '',
            title: ''
          }];
          _wepy2.default.setStorageSync('arr', arr);
        }
        var data = _wepy2.default.getStorageSync('avatarUrl');
        var data1 = _wepy2.default.getStorageSync('nickName');
        var data2 = _wepy2.default.getStorageSync('icon');
        var data3 = _wepy2.default.getStorageSync('title');
        var _icon = _wepy2.default.getStorageSync('_icon');
        var _title = _wepy2.default.getStorageSync('_title');
        if (data) {
          self.pic = data;
          self.name = data1;
          self.icon = data2;
          self.title = data3;
          self._icon = _icon;
          self._title = _title;
        }
      } catch (err) {}
    }
  }]);

  return Self;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Self , 'pages/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsImRhdGEiLCJfbG9naW4iLCJwaWMiLCJuYW1lIiwiaWNvbiIsInRpdGxlIiwiX2ljb24iLCJfdGl0bGUiLCJtZXRob2RzIiwibG9naW4iLCJzZWxmIiwib25CYWNrIiwibmF2aWdhdGVUbyIsInVybCIsImFycmF5IiwiZ2V0U3RvcmFnZVN5bmMiLCJwdXNoIiwiYXJyIiwic2V0U3RvcmFnZVN5bmMiLCJkYXRhMSIsImRhdGEyIiwiZGF0YTMiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLElBREg7QUFFTEMsV0FBSyxrQkFGQTtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsY0FBUTtBQVBILEssUUFTUEMsTyxHQUFVO0FBQ1JDLFdBRFEsbUJBQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1IsR0FBTCxHQUFXLFdBQVg7QUFDQVEsYUFBS1AsSUFBTCxHQUFZLE1BQVo7QUFDQU8sYUFBS04sSUFBTCxHQUFZLE1BQVo7QUFDQU0sYUFBS0wsS0FBTCxHQUFhLE9BQWI7QUFDRCxPQVBPO0FBUVJNLFlBUlEsb0JBUUM7QUFDUCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQVpPLEs7Ozs7OzZCQWNELENBQ1I7Ozs2QkFFUTtBQUNQLFVBQUlILE9BQU8sSUFBWDtBQUNBLFVBQUk7QUFDRixZQUFJSSxRQUFRLGVBQUtDLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBWjtBQUNBLFlBQUlELEtBQUosRUFBVztBQUNUQSxnQkFBTUUsSUFBTixDQUFXO0FBQ1RaLGtCQUFNLEVBREc7QUFFVEMsbUJBQU87QUFGRSxXQUFYO0FBSUQsU0FMRCxNQUtPO0FBQ0wsY0FBSVksTUFBTSxDQUNSO0FBQ0ViLGtCQUFNLEVBRFI7QUFFRUMsbUJBQU87QUFGVCxXQURRLENBQVY7QUFNQSx5QkFBS2EsY0FBTCxDQUFvQixLQUFwQixFQUEyQkQsR0FBM0I7QUFDRDtBQUNELFlBQUlqQixPQUFPLGVBQUtlLGNBQUwsQ0FBb0IsV0FBcEIsQ0FBWDtBQUNBLFlBQUlJLFFBQVEsZUFBS0osY0FBTCxDQUFvQixVQUFwQixDQUFaO0FBQ0EsWUFBSUssUUFBUSxlQUFLTCxjQUFMLENBQW9CLE1BQXBCLENBQVo7QUFDQSxZQUFJTSxRQUFRLGVBQUtOLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBWjtBQUNBLFlBQUlULFFBQVEsZUFBS1MsY0FBTCxDQUFvQixPQUFwQixDQUFaO0FBQ0EsWUFBSVIsU0FBUyxlQUFLUSxjQUFMLENBQW9CLFFBQXBCLENBQWI7QUFDQSxZQUFJZixJQUFKLEVBQVU7QUFDUlUsZUFBS1IsR0FBTCxHQUFXRixJQUFYO0FBQ0FVLGVBQUtQLElBQUwsR0FBWWdCLEtBQVo7QUFDQVQsZUFBS04sSUFBTCxHQUFZZ0IsS0FBWjtBQUNBVixlQUFLTCxLQUFMLEdBQWFnQixLQUFiO0FBQ0FYLGVBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBSSxlQUFLSCxNQUFMLEdBQWNBLE1BQWQ7QUFDRDtBQUNGLE9BOUJELENBOEJFLE9BQU9lLEdBQVAsRUFBWSxDQUNiO0FBQ0Y7Ozs7RUFoRStCLGVBQUtDLEk7O2tCQUFsQnpCLEkiLCJmaWxlIjoic2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGYgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG5cbiAgfVxuICBkYXRhID0ge1xuICAgIF9sb2dpbjogJ+eZu+W9lScsXG4gICAgcGljOiAnLi4vaW1hZ2UvcGljLnBuZycsXG4gICAgbmFtZTogJycsXG4gICAgaWNvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIF9pY29uOiAnJyxcbiAgICBfdGl0bGU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsb2dpbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5waWMgPSAnYXZhdGFyVXJsJ1xuICAgICAgc2VsZi5uYW1lID0gJ25hbWUnXG4gICAgICBzZWxmLmljb24gPSAnaWNvbidcbiAgICAgIHNlbGYudGl0bGUgPSAndGl0bGUnXG4gICAgfSxcbiAgICBvbkJhY2soKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xvZ2luJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG5cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBsZXQgYXJyYXkgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhcnInKVxuICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFyciA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnInLCBhcnIpXG4gICAgICB9XG4gICAgICBsZXQgZGF0YSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2F2YXRhclVybCcpXG4gICAgICBsZXQgZGF0YTEgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCduaWNrTmFtZScpXG4gICAgICBsZXQgZGF0YTIgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdpY29uJylcbiAgICAgIGxldCBkYXRhMyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3RpdGxlJylcbiAgICAgIGxldCBfaWNvbiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19pY29uJylcbiAgICAgIGxldCBfdGl0bGUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfdGl0bGUnKVxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc2VsZi5waWMgPSBkYXRhXG4gICAgICAgIHNlbGYubmFtZSA9IGRhdGExXG4gICAgICAgIHNlbGYuaWNvbiA9IGRhdGEyXG4gICAgICAgIHNlbGYudGl0bGUgPSBkYXRhM1xuICAgICAgICBzZWxmLl9pY29uID0gX2ljb25cbiAgICAgICAgc2VsZi5fdGl0bGUgPSBfdGl0bGVcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICB9XG4gIH1cbn1cbiJdfQ==