'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Serch = function (_wepy$page) {
  _inherits(Serch, _wepy$page);

  function Serch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Serch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Serch.__proto__ || Object.getPrototypeOf(Serch)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      // pickerHidden: true,
      // chosen: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      },
      formReset: function formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value);
      }
    }, _this.onLoad = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Serch;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Serch , 'pages/serch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmNoLmpzIl0sIm5hbWVzIjpbIlNlcmNoIiwiY29uZmlnIiwiZGF0YSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImZvcm1SZXNldCIsIm9uTG9hZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxFLFFBR1RDLEksR0FBTztBQUNMO0FBQ0E7QUFGSyxLLFFBSVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRCxPQUhPO0FBSVJDLGVBSlEscUJBSUVMLENBSkYsRUFJSztBQUNYQyxnQkFBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixFQUFFRyxNQUFGLENBQVNDLEtBQTlDO0FBQ0Q7QUFOTyxLLFFBU1ZFLE0sR0FBUyxFOzs7O0VBakJ3QixlQUFLQyxJOztrQkFBbkJaLEsiLCJmaWxlIjoic2VyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcblxuICB9XG4gIGRhdGEgPSB7XG4gICAgLy8gcGlja2VySGlkZGVuOiB0cnVlLFxuICAgIC8vIGNob3NlbjogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGZvcm1SZXNldChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkID0ge1xuICB9XG59XG4iXX0=