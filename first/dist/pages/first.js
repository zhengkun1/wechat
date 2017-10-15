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

var First = function (_wepy$page) {
  _inherits(First, _wepy$page);

  function First() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, First);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = First.__proto__ || Object.getPrototypeOf(First)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'APP'
    }, _this.data = {
      focus: false,
      inputvalue: 'sousuo',
      tx: '../image/tx.png',
      QQ: '../image/QQ.png'

    }, _this.methods = {
      serch: function serch() {
        _wepy2.default.navigateTo({
          url: './serch'
        });
      },
      url: function url() {
        _wepy2.default.navigateTo({
          url: './txtv'
        });
      },
      qq: function qq() {
        _wepy2.default.navigateTo({
          url: './qq'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(First, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return First;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(First , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkZpcnN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmb2N1cyIsImlucHV0dmFsdWUiLCJ0eCIsIlFRIiwibWV0aG9kcyIsInNlcmNoIiwibmF2aWdhdGVUbyIsInVybCIsInFxIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sS0FERjtBQUVMQyxrQkFBWSxRQUZQO0FBR0xDLFVBQUksaUJBSEM7QUFJTEMsVUFBSTs7QUFKQyxLLFFBT1BDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQSxTQU5RLGlCQU1GO0FBQ0osdUJBQUtELFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSQyxRQVhRLGdCQVdIO0FBQ0gsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFmTyxLOzs7Ozs2QkFpQkQsQ0FDUjs7OztFQTdCZ0MsZUFBS0UsSTs7a0JBQW5CYixLIiwiZmlsZSI6ImZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0FQUCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGZvY3VzOiBmYWxzZSxcbiAgICBpbnB1dHZhbHVlOiAnc291c3VvJyxcbiAgICB0eDogJy4uL2ltYWdlL3R4LnBuZycsXG4gICAgUVE6ICcuLi9pbWFnZS9RUS5wbmcnLFxuICAgIFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VyY2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHVybCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdHh0didcbiAgICAgIH0pXG4gICAgfSxcbiAgICBxcSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcXEnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==