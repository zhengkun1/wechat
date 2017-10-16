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
      tx: '../image/tx.png',
      title: '',
      desc: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Txtv, [{
    key: 'onLoad',
    value: function onLoad(data) {
      console.log(data);
      var self = this;
      self.title = data.title;
      self.desc = data.desc;
    }
  }]);

  return Txtv;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Txtv , 'pages/txtv'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4dHYuanMiXSwibmFtZXMiOlsiVHh0diIsImNvbmZpZyIsImRhdGEiLCJ0eCIsInRpdGxlIiwiZGVzYyIsImNvbnNvbGUiLCJsb2ciLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVMsRSxRQUdUQyxJLEdBQU87QUFDTEMsVUFBSSxpQkFEQztBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTTtBQUhELEs7Ozs7OzJCQUtBSCxJLEVBQU07QUFDWEksY0FBUUMsR0FBUixDQUFZTCxJQUFaO0FBQ0EsVUFBSU0sT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLEtBQUwsR0FBYUYsS0FBS0UsS0FBbEI7QUFDQUksV0FBS0gsSUFBTCxHQUFZSCxLQUFLRyxJQUFqQjtBQUNEOzs7O0VBZCtCLGVBQUtJLEk7O2tCQUFsQlQsSSIsImZpbGUiOiJ0eHR2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHh0diBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcblxuICB9XG4gIGRhdGEgPSB7XG4gICAgdHg6ICcuLi9pbWFnZS90eC5wbmcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjOiAnJ1xuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuZGVzYyA9IGRhdGEuZGVzY1xuICB9XG59XG5cbiJdfQ==