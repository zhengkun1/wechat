'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../util/content.js');

var _content2 = _interopRequireDefault(_content);

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
      QQ: '../image/phone qq.png',
      aiqiyi: '../image/aiqiyi.png',
      leshi: '../image/leshi.png',
      youku: '../image/youku.png',
      souhu: '../image/souhu.png',
      bf: '../image/baofengyingyin.png',
      quanmin: '../image/quanmin.jpg',
      panda: '../image/panda.jpg',
      huya: '../image/huya.png',
      twitch: '../image/twitch.png',
      douyu: '../image/douyu.png',
      longzhu: '../image/longzhu.jpg',
      content: null
    }, _this.methods = {
      serch: function serch() {
        _wepy2.default.navigateTo({
          url: './serch'
        });
      },
      url: function url(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './txtv?title=' + item.title + '&desc=' + item.desc
        });
      },
      qq: function qq() {
        _wepy2.default.navigateTo({
          url: './qq'
        });
      },
      aiqiyi: function aiqiyi() {
        _wepy2.default.navigateTo({
          url: './aiqiyi'
        });
      },
      leshi: function leshi() {
        _wepy2.default.navigateTo({
          url: './leshi'
        });
      },
      youku: function youku() {
        _wepy2.default.navigateTo({
          url: './youku'
        });
      },
      souhu: function souhu() {
        _wepy2.default.navigateTo({
          url: './souhu'
        });
      },
      bf: function bf() {
        _wepy2.default.navigateTo({
          url: './bf'
        });
      },
      quanmin: function quanmin() {
        _wepy2.default.navigateTo({
          url: './quanmin'
        });
      },
      huya: function huya() {
        _wepy2.default.navigateTo({
          url: './huya'
        });
      },
      twitch: function twitch() {
        _wepy2.default.navigateTo({
          url: './twitch'
        });
      },
      panda: function panda() {
        _wepy2.default.navigateTo({
          url: './panda'
        });
      },
      douyu: function douyu() {
        _wepy2.default.navigateTo({
          url: './douyu'
        });
      },
      longzhu: function longzhu() {
        _wepy2.default.navigateTo({
          url: './longzhu'
        });
      },
      scroll: function scroll(e) {
        console.log(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(First, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _content2.default;
    }
  }]);

  return First;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(First , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkZpcnN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmb2N1cyIsImlucHV0dmFsdWUiLCJ0eCIsIlFRIiwiYWlxaXlpIiwibGVzaGkiLCJ5b3VrdSIsInNvdWh1IiwiYmYiLCJxdWFubWluIiwicGFuZGEiLCJodXlhIiwidHdpdGNoIiwiZG91eXUiLCJsb25nemh1IiwiY29udGVudCIsIm1ldGhvZHMiLCJzZXJjaCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ0aXRsZSIsImRlc2MiLCJxcSIsInNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxhQUFPLEtBREY7QUFFTEMsa0JBQVksUUFGUDtBQUdMQyxVQUFJLGlCQUhDO0FBSUxDLFVBQUksdUJBSkM7QUFLTEMsY0FBUSxxQkFMSDtBQU1MQyxhQUFPLG9CQU5GO0FBT0xDLGFBQU8sb0JBUEY7QUFRTEMsYUFBTyxvQkFSRjtBQVNMQyxVQUFJLDZCQVRDO0FBVUxDLGVBQVMsc0JBVko7QUFXTEMsYUFBTyxvQkFYRjtBQVlMQyxZQUFNLG1CQVpEO0FBYUxDLGNBQVEscUJBYkg7QUFjTEMsYUFBTyxvQkFkRjtBQWVMQyxlQUFTLHNCQWZKO0FBZ0JMQyxlQUFTO0FBaEJKLEssUUFrQlBDLE8sR0FBVTtBQUNSQyxXQURRLG1CQUNBO0FBQ04sdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQSxTQU5RLGVBTUpDLENBTkksRUFNRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtOLE9BQUwsQ0FBYUssRUFBRUcsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBLHVCQUFLTixVQUFMLENBQWdCO0FBQ2RDLGlDQUFxQkcsS0FBS0csS0FBMUIsY0FBd0NILEtBQUtJO0FBRC9CLFNBQWhCO0FBR0QsT0FaTztBQWFSQyxRQWJRLGdCQWFIO0FBQ0gsdUJBQUtULFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FqQk87QUFrQlJmLFlBbEJRLG9CQWtCQztBQUNQLHVCQUFLYyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BdEJPO0FBdUJSZCxXQXZCUSxtQkF1QkE7QUFDTix1QkFBS2EsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTNCTztBQTRCUmIsV0E1QlEsbUJBNEJBO0FBQ04sdUJBQUtZLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FoQ087QUFpQ1JaLFdBakNRLG1CQWlDQTtBQUNOLHVCQUFLVyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BckNPO0FBc0NSWCxRQXRDUSxnQkFzQ0g7QUFDSCx1QkFBS1UsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTFDTztBQTJDUlYsYUEzQ1EscUJBMkNFO0FBQ1IsdUJBQUtTLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvQ087QUFnRFJSLFVBaERRLGtCQWdERDtBQUNMLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BcERPO0FBcURSUCxZQXJEUSxvQkFxREM7QUFDUCx1QkFBS00sVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXpETztBQTBEUlQsV0ExRFEsbUJBMERBO0FBQ04sdUJBQUtRLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E5RE87QUErRFJOLFdBL0RRLG1CQStEQTtBQUNOLHVCQUFLSyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BbkVPO0FBb0VSTCxhQXBFUSxxQkFvRUU7QUFDUix1QkFBS0ksVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXhFTztBQXlFUlMsWUF6RVEsa0JBeUVEUixDQXpFQyxFQXlFRTtBQUNSUyxnQkFBUUMsR0FBUixDQUFZVixDQUFaO0FBQ0Q7QUEzRU8sSzs7Ozs7NkJBNkVEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtOLE9BQUw7QUFDRDs7OztFQXRHZ0MsZUFBS2dCLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29udGVudCBmcm9tICcuLi91dGlsL2NvbnRlbnQuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQVBQJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGlucHV0dmFsdWU6ICdzb3VzdW8nLFxuICAgIHR4OiAnLi4vaW1hZ2UvdHgucG5nJyxcbiAgICBRUTogJy4uL2ltYWdlL3Bob25lIHFxLnBuZycsXG4gICAgYWlxaXlpOiAnLi4vaW1hZ2UvYWlxaXlpLnBuZycsXG4gICAgbGVzaGk6ICcuLi9pbWFnZS9sZXNoaS5wbmcnLFxuICAgIHlvdWt1OiAnLi4vaW1hZ2UveW91a3UucG5nJyxcbiAgICBzb3VodTogJy4uL2ltYWdlL3NvdWh1LnBuZycsXG4gICAgYmY6ICcuLi9pbWFnZS9iYW9mZW5neWluZ3lpbi5wbmcnLFxuICAgIHF1YW5taW46ICcuLi9pbWFnZS9xdWFubWluLmpwZycsXG4gICAgcGFuZGE6ICcuLi9pbWFnZS9wYW5kYS5qcGcnLFxuICAgIGh1eWE6ICcuLi9pbWFnZS9odXlhLnBuZycsXG4gICAgdHdpdGNoOiAnLi4vaW1hZ2UvdHdpdGNoLnBuZycsXG4gICAgZG91eXU6ICcuLi9pbWFnZS9kb3V5dS5wbmcnLFxuICAgIGxvbmd6aHU6ICcuLi9pbWFnZS9sb25nemh1LmpwZycsXG4gICAgY29udGVudDogbnVsbFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VyY2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHVybChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vdHh0dj90aXRsZT0ke2l0ZW0udGl0bGV9JmRlc2M9JHtpdGVtLmRlc2N9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIHFxKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9xcSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhaXFpeWkoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2FpcWl5aSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsZXNoaSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbGVzaGknXG4gICAgICB9KVxuICAgIH0sXG4gICAgeW91a3UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3lvdWt1J1xuICAgICAgfSlcbiAgICB9LFxuICAgIHNvdWh1KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zb3VodSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiZigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vYmYnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcXVhbm1pbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vcXVhbm1pbidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBodXlhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9odXlhJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHR3aXRjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdHdpdGNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBhbmRhKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9wYW5kYSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkb3V5dSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vZG91eXUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbG9uZ3podSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbG9uZ3podSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzY3JvbGwoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgfVxufVxuIl19