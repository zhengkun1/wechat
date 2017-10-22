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

var Hot = function (_wepy$page) {
  _inherits(Hot, _wepy$page);

  function Hot() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hot);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hot.__proto__ || Object.getPrototypeOf(Hot)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      title: '',
      icon: '',
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

  _createClass(Hot, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.icon = data.icon;
      self.desc = data.desc;
      self.introduce = data.introduce;
      self.update = data.update;
    }
  }]);

  return Hot;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Hot , 'pages/hot'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdC5qcyJdLCJuYW1lcyI6WyJIb3QiLCJjb25maWciLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiZGVzYyIsImludHJvZHVjZSIsInVwZGF0ZSIsIm1ldGhvZHMiLCJjb2xsZWN0Iiwic2VsZiIsInNldFN0b3JhZ2VTeW5jIiwiZSIsImNvbGxlY3Rpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsWUFBTSxFQUZEO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxpQkFBVyxFQUpOO0FBS0xDLGNBQVE7QUFMSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSTtBQUNGLHlCQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCRCxLQUFLTixJQUFqQztBQUNBLHlCQUFLTyxjQUFMLENBQW9CLE9BQXBCLEVBQTZCRCxLQUFLUCxLQUFsQztBQUNELFNBSEQsQ0FHRSxPQUFPUyxDQUFQLEVBQVUsQ0FDWDtBQUNGLE9BUk87QUFTUkMsZ0JBVFEsd0JBU0s7QUFDWCxZQUFJSCxPQUFPLElBQVg7QUFDQSxZQUFJO0FBQ0YseUJBQUtDLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJELEtBQUtOLElBQWxDO0FBQ0EseUJBQUtPLGNBQUwsQ0FBb0IsUUFBcEIsRUFBOEJELEtBQUtQLEtBQW5DO0FBQ0QsU0FIRCxDQUdFLE9BQU9TLENBQVAsRUFBVSxDQUNYO0FBQ0Y7QUFoQk8sSzs7Ozs7MkJBa0JIVixJLEVBQU07QUFDWCxVQUFJUSxPQUFPLElBQVg7QUFDQUEsV0FBS1AsS0FBTCxHQUFhRCxLQUFLQyxLQUFsQjtBQUNBTyxXQUFLTixJQUFMLEdBQVlGLEtBQUtFLElBQWpCO0FBQ0FNLFdBQUtMLElBQUwsR0FBWUgsS0FBS0csSUFBakI7QUFDQUssV0FBS0osU0FBTCxHQUFpQkosS0FBS0ksU0FBdEI7QUFDQUksV0FBS0gsTUFBTCxHQUFjTCxLQUFLSyxNQUFuQjtBQUNEOzs7O0VBcEM4QixlQUFLTyxJOztrQkFBakJkLEciLCJmaWxlIjoiaG90LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaWNvbjogJycsXG4gICAgZGVzYzogJycsXG4gICAgaW50cm9kdWNlOiAnJyxcbiAgICB1cGRhdGU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdpY29uJywgc2VsZi5pY29uKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCd0aXRsZScsIHNlbGYudGl0bGUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xsZWN0aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfaWNvbicsIHNlbGYuaWNvbilcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnX3RpdGxlJywgc2VsZi50aXRsZSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaWNvbiA9IGRhdGEuaWNvblxuICAgIHNlbGYuZGVzYyA9IGRhdGEuZGVzY1xuICAgIHNlbGYuaW50cm9kdWNlID0gZGF0YS5pbnRyb2R1Y2VcbiAgICBzZWxmLnVwZGF0ZSA9IGRhdGEudXBkYXRlXG4gIH1cbn1cblxuIl19