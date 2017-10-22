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

var Panda = function (_wepy$page) {
  _inherits(Panda, _wepy$page);

  function Panda() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panda);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panda.__proto__ || Object.getPrototypeOf(Panda)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
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

  _createClass(Panda, [{
    key: 'onLoad',
    value: function onLoad(data) {
      console.log(data);
      var self = this;
      self.title = data.title;
      self.icon = data.icon;
      self.desc = data.desc;
      self.introduce = data.introduce;
      self.update = data.update;
    }
  }]);

  return Panda;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Panda , 'pages/panda'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmRhLmpzIl0sIm5hbWVzIjpbIlBhbmRhIiwiY29uZmlnIiwiZGF0YSIsInRpdGxlIiwiaWNvbiIsImRlc2MiLCJpbnRyb2R1Y2UiLCJ1cGRhdGUiLCJtZXRob2RzIiwiY29sbGVjdCIsInNlbGYiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJjb2xsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsY0FBUTtBQUxILEssUUFPUEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJO0FBQ0YseUJBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJELEtBQUtOLElBQWpDO0FBQ0EseUJBQUtPLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJELEtBQUtQLEtBQWxDO0FBQ0QsU0FIRCxDQUdFLE9BQU9TLENBQVAsRUFBVSxDQUNYO0FBQ0YsT0FSTztBQVNSQyxnQkFUUSx3QkFTSztBQUNYLFlBQUlILE9BQU8sSUFBWDtBQUNBLFlBQUk7QUFDRix5QkFBS0MsY0FBTCxDQUFvQixPQUFwQixFQUE2QkQsS0FBS04sSUFBbEM7QUFDQSx5QkFBS08sY0FBTCxDQUFvQixRQUFwQixFQUE4QkQsS0FBS1AsS0FBbkM7QUFDRCxTQUhELENBR0UsT0FBT1MsQ0FBUCxFQUFVLENBQ1g7QUFDRjtBQWhCTyxLOzs7OzsyQkFrQkhWLEksRUFBTTtBQUNYWSxjQUFRQyxHQUFSLENBQVliLElBQVo7QUFDQSxVQUFJUSxPQUFPLElBQVg7QUFDQUEsV0FBS1AsS0FBTCxHQUFhRCxLQUFLQyxLQUFsQjtBQUNBTyxXQUFLTixJQUFMLEdBQVlGLEtBQUtFLElBQWpCO0FBQ0FNLFdBQUtMLElBQUwsR0FBWUgsS0FBS0csSUFBakI7QUFDQUssV0FBS0osU0FBTCxHQUFpQkosS0FBS0ksU0FBdEI7QUFDQUksV0FBS0gsTUFBTCxHQUFjTCxLQUFLSyxNQUFuQjtBQUNEOzs7O0VBckNnQyxlQUFLUyxJOztrQkFBbkJoQixLIiwiZmlsZSI6InBhbmRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZGEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG5cbiAgfVxuICBkYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBpY29uOiAnJyxcbiAgICBkZXNjOiAnJyxcbiAgICBpbnRyb2R1Y2U6ICcnLFxuICAgIHVwZGF0ZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2ljb24nLCBzZWxmLmljb24pXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3RpdGxlJywgc2VsZi50aXRsZSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbGxlY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ19pY29uJywgc2VsZi5pY29uKVxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfdGl0bGUnLCBzZWxmLnRpdGxlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGVcbiAgICBzZWxmLmljb24gPSBkYXRhLmljb25cbiAgICBzZWxmLmRlc2MgPSBkYXRhLmRlc2NcbiAgICBzZWxmLmludHJvZHVjZSA9IGRhdGEuaW50cm9kdWNlXG4gICAgc2VsZi51cGRhdGUgPSBkYXRhLnVwZGF0ZVxuICB9XG59XG5cbiJdfQ==