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

var Txtv = function (_wepy$page) {
  _inherits(Txtv, _wepy$page);

  function Txtv() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Txtv);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Txtv.__proto__ || Object.getPrototypeOf(Txtv)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      icon: '',
      title: '',
      desc: '',
      introduce: '',
      update: ''
    }, _this.methods = {
      collect: function collect() {
        var self = this;
        try {
          _wepy2.default.setStorageSync('icon', self.icon);
          _wepy2.default.setStorageSync('title', self.title);
        } catch (e) {}
      },
      collection: function collection() {
        var self = this;
        try {
          _wepy2.default.setStorageSync('_icon', self.icon);
          _wepy2.default.setStorageSync('_title', self.title);
        } catch (e) {}
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Txtv, [{
    key: 'onLoad',
    value: function onLoad(data) {
      console.log(data);
      var self = this;
      self.title = data.title;
      self.desc = data.desc;
      self.icon = data.icon;
      self.introduce = data.introduce;
      self.update = data.update;
    }
  }]);

  return Txtv;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Txtv , 'pages/txtv'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4dHYuanMiXSwibmFtZXMiOlsiVHh0diIsImNvbmZpZyIsImRhdGEiLCJpY29uIiwidGl0bGUiLCJkZXNjIiwiaW50cm9kdWNlIiwidXBkYXRlIiwibWV0aG9kcyIsImNvbGxlY3QiLCJzZWxmIiwic2V0U3RvcmFnZVN5bmMiLCJlIiwiY29sbGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGNBQVE7QUFMSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSTtBQUNGLHlCQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCRCxLQUFLUCxJQUFqQztBQUNBLHlCQUFLUSxjQUFMLENBQW9CLE9BQXBCLEVBQTZCRCxLQUFLTixLQUFsQztBQUNELFNBSEQsQ0FHRSxPQUFPUSxDQUFQLEVBQVUsQ0FDWDtBQUNGLE9BUk87QUFTUkMsZ0JBVFEsd0JBU0s7QUFDWCxZQUFJSCxPQUFPLElBQVg7QUFDQSxZQUFJO0FBQ0YseUJBQUtDLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJELEtBQUtQLElBQWxDO0FBQ0EseUJBQUtRLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEJELEtBQUtOLEtBQW5DO0FBQ0QsU0FIRCxDQUdFLE9BQU9RLENBQVAsRUFBVSxDQUNYO0FBQ0Y7QUFoQk8sSzs7Ozs7MkJBa0JIVixJLEVBQU07QUFDWFksY0FBUUMsR0FBUixDQUFZYixJQUFaO0FBQ0EsVUFBSVEsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLEtBQUwsR0FBYUYsS0FBS0UsS0FBbEI7QUFDQU0sV0FBS0wsSUFBTCxHQUFZSCxLQUFLRyxJQUFqQjtBQUNBSyxXQUFLUCxJQUFMLEdBQVlELEtBQUtDLElBQWpCO0FBQ0FPLFdBQUtKLFNBQUwsR0FBaUJKLEtBQUtJLFNBQXRCO0FBQ0FJLFdBQUtILE1BQUwsR0FBY0wsS0FBS0ssTUFBbkI7QUFDRDs7OztFQXJDK0IsZUFBS1MsSTs7a0JBQWxCaEIsSSIsImZpbGUiOiJ0eHR2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHh0diBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcblxuICB9XG4gIGRhdGEgPSB7XG4gICAgaWNvbjogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2M6ICcnLFxuICAgIGludHJvZHVjZTogJycsXG4gICAgdXBkYXRlOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnaWNvbicsIHNlbGYuaWNvbilcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygndGl0bGUnLCBzZWxmLnRpdGxlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH0sXG4gICAgY29sbGVjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcyBcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ19pY29uJywgc2VsZi5pY29uKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfdGl0bGUnLCBzZWxmLnRpdGxlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGVcbiAgICBzZWxmLmRlc2MgPSBkYXRhLmRlc2NcbiAgICBzZWxmLmljb24gPSBkYXRhLmljb25cbiAgICBzZWxmLmludHJvZHVjZSA9IGRhdGEuaW50cm9kdWNlXG4gICAgc2VsZi51cGRhdGUgPSBkYXRhLnVwZGF0ZVxuICB9XG59XG5cbiJdfQ==