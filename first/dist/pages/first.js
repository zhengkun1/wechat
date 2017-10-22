'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../util/content.js');

var _content2 = _interopRequireDefault(_content);

var _content3 = require('./../util/content1.js');

var _content4 = _interopRequireDefault(_content3);

var _contents = require('./../util/contents.js');

var _contents2 = _interopRequireDefault(_contents);

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
      content: null,
      content1: null,
      contents: null
    }, _this.methods = {
      serch: function serch() {
        _wepy2.default.navigateTo({
          url: './serch'
        });
      },
      video: function video() {
        _wepy2.default.navigateTo({
          url: './video'
        });
      },
      live: function live() {
        _wepy2.default.navigateTo({
          url: './live'
        });
      },
      url: function url(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './txtv?title=' + item.title + '&desc=' + item.desc + '&icon=' + item.icon + '&introduce=' + item.introduce + '&update=' + item.update
        });
      },
      hot: function hot(e) {
        var self = this;
        var item = self.contents[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './hot?title=' + item.title + '&desc=' + item.desc + '&icon=' + item.icon + '&introduce=' + item.introduce + '&update=' + item.update
        });
      },
      panda: function panda(e) {
        var self = this;
        var item = self.content1[e.currentTarget.id];
        console.log(item);
        _wepy2.default.navigateTo({
          url: './panda?title=' + item.title + '&desc=' + item.desc + '&icon=' + item.icon + '&introduce=' + item.introduce + '&update=' + item.update
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
      self.content1 = _content4.default;
      self.contents = _contents2.default;
    }
  }]);

  return First;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(First , 'pages/first'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0LmpzIl0sIm5hbWVzIjpbIkZpcnN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJmb2N1cyIsImlucHV0dmFsdWUiLCJjb250ZW50IiwiY29udGVudDEiLCJjb250ZW50cyIsIm1ldGhvZHMiLCJzZXJjaCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ2aWRlbyIsImxpdmUiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ0aXRsZSIsImRlc2MiLCJpY29uIiwiaW50cm9kdWNlIiwidXBkYXRlIiwiaG90IiwicGFuZGEiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sS0FERjtBQUVMQyxrQkFBWSxRQUZQO0FBR0xDLGVBQVMsSUFISjtBQUlMQyxnQkFBVSxJQUpMO0FBS0xDLGdCQUFVO0FBTEwsSyxRQU9QQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQTtBQUNOLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsV0FOUSxtQkFNQTtBQUNOLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsVUFYUSxrQkFXRDtBQUNMLHVCQUFLSCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJBLFNBaEJRLGVBZ0JKRyxDQWhCSSxFQWdCRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtWLE9BQUwsQ0FBYVMsRUFBRUcsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBLHVCQUFLUixVQUFMLENBQWdCO0FBQ2RDLGlDQUFxQkssS0FBS0csS0FBMUIsY0FBd0NILEtBQUtJLElBQTdDLGNBQTBESixLQUFLSyxJQUEvRCxtQkFBaUZMLEtBQUtNLFNBQXRGLGdCQUEwR04sS0FBS087QUFEakcsU0FBaEI7QUFHRCxPQXRCTztBQXVCUkMsU0F2QlEsZUF1QkpWLENBdkJJLEVBdUJEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1IsUUFBTCxDQUFjTyxFQUFFRyxhQUFGLENBQWdCQyxFQUE5QixDQUFYO0FBQ0EsdUJBQUtSLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CSyxLQUFLRyxLQUF6QixjQUF1Q0gsS0FBS0ksSUFBNUMsY0FBeURKLEtBQUtLLElBQTlELG1CQUFnRkwsS0FBS00sU0FBckYsZ0JBQXlHTixLQUFLTztBQURoRyxTQUFoQjtBQUdELE9BN0JPO0FBOEJSRSxXQTlCUSxpQkE4QkZYLENBOUJFLEVBOEJDO0FBQ1AsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1QsUUFBTCxDQUFjUSxFQUFFRyxhQUFGLENBQWdCQyxFQUE5QixDQUFYO0FBQ0FRLGdCQUFRQyxHQUFSLENBQVlYLElBQVo7QUFDQSx1QkFBS04sVUFBTCxDQUFnQjtBQUNkQyxrQ0FBc0JLLEtBQUtHLEtBQTNCLGNBQXlDSCxLQUFLSSxJQUE5QyxjQUEyREosS0FBS0ssSUFBaEUsbUJBQWtGTCxLQUFLTSxTQUF2RixnQkFBMkdOLEtBQUtPO0FBRGxHLFNBQWhCO0FBR0QsT0FyQ087QUFzQ1JLLFlBdENRLGtCQXNDRGQsQ0F0Q0MsRUFzQ0U7QUFDUlksZ0JBQVFDLEdBQVIsQ0FBWWIsQ0FBWjtBQUNEO0FBeENPLEs7Ozs7OzZCQTBDRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLVixPQUFMO0FBQ0FVLFdBQUtULFFBQUw7QUFDQVMsV0FBS1IsUUFBTDtBQUNEOzs7O0VBMURnQyxlQUFLc0IsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3V0aWwvY29udGVudC5qcydcbmltcG9ydCBjb250ZW50MSBmcm9tICcuLi91dGlsL2NvbnRlbnQxLmpzJ1xuaW1wb3J0IGNvbnRlbnRzIGZyb20gJy4uL3V0aWwvY29udGVudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQVBQJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgZm9jdXM6IGZhbHNlLFxuICAgIGlucHV0dmFsdWU6ICdzb3VzdW8nLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudDE6IG51bGwsXG4gICAgY29udGVudHM6IG51bGxcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNlcmNoKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZXJjaCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICB2aWRlbygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vdmlkZW8nXG4gICAgICB9KVxuICAgIH0sXG4gICAgbGl2ZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbGl2ZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICB1cmwoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL3R4dHY/dGl0bGU9JHtpdGVtLnRpdGxlfSZkZXNjPSR7aXRlbS5kZXNjfSZpY29uPSR7aXRlbS5pY29ufSZpbnRyb2R1Y2U9JHtpdGVtLmludHJvZHVjZX0mdXBkYXRlPSR7aXRlbS51cGRhdGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIGhvdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50c1tlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2hvdD90aXRsZT0ke2l0ZW0udGl0bGV9JmRlc2M9JHtpdGVtLmRlc2N9Jmljb249JHtpdGVtLmljb259JmludHJvZHVjZT0ke2l0ZW0uaW50cm9kdWNlfSZ1cGRhdGU9JHtpdGVtLnVwZGF0ZX1gXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFuZGEoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudDFbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vcGFuZGE/dGl0bGU9JHtpdGVtLnRpdGxlfSZkZXNjPSR7aXRlbS5kZXNjfSZpY29uPSR7aXRlbS5pY29ufSZpbnRyb2R1Y2U9JHtpdGVtLmludHJvZHVjZX0mdXBkYXRlPSR7aXRlbS51cGRhdGV9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIHNjcm9sbChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gY29udGVudFxuICAgIHNlbGYuY29udGVudDEgPSBjb250ZW50MVxuICAgIHNlbGYuY29udGVudHMgPSBjb250ZW50c1xuICB9XG59XG4iXX0=