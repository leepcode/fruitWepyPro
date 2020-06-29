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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.data = {
      fruitList: [{ name: "香蕉", number: 10, price: 1, buynbr: 0, image: '../image/banana.jpg' }, { name: "苹果", number: 10, price: 3, buynbr: 0, image: '../image/apple.jpg' }, { name: "橘子", number: 10, price: 2, buynbr: 0, image: '../image/orange.jpg' }, { name: "芒果", number: 10, price: 4, buynbr: 0, image: '../image/mango.jpg' }],
      sum: 0
    }, _this.computed = {}, _this.methods = {

      // 减少数量
      decrease: function decrease(Index) {
        //console.log(Index);
        this.fruitList[Index].buynbr--;
        this.fruitList[Index].number++;
        this.sum = this.sum - this.fruitList[Index].price;
      },

      // 增加数量
      increase: function increase(Index) {
        //console.log(Index);
        this.fruitList[Index].buynbr++;
        this.fruitList[Index].number--;
        this.sum = this.sum + this.fruitList[Index].price;
      },
      goNext: function goNext() {
        _wepy2.default.navigateTo({
          url: './Purchase?money=' + this.sum
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
    // Other properties

  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/FruitList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZydWl0TGlzdC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJkYXRhIiwiZnJ1aXRMaXN0IiwibmFtZSIsIm51bWJlciIsInByaWNlIiwiYnV5bmJyIiwiaW1hZ2UiLCJzdW0iLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJkZWNyZWFzZSIsImluY3JlYXNlIiwiZ29OZXh0Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxpQkFBVyxDQUNULEVBQUVDLE1BQU0sSUFBUixFQUFjQyxRQUFRLEVBQXRCLEVBQTBCQyxPQUFPLENBQWpDLEVBQW9DQyxRQUFRLENBQTVDLEVBQStDQyxPQUFPLHFCQUF0RCxFQURTLEVBRVQsRUFBRUosTUFBTSxJQUFSLEVBQWNDLFFBQVEsRUFBdEIsRUFBMEJDLE9BQU8sQ0FBakMsRUFBb0NDLFFBQVEsQ0FBNUMsRUFBK0NDLE9BQU8sb0JBQXRELEVBRlMsRUFHVCxFQUFFSixNQUFNLElBQVIsRUFBY0MsUUFBUSxFQUF0QixFQUEwQkMsT0FBTyxDQUFqQyxFQUFvQ0MsUUFBUSxDQUE1QyxFQUErQ0MsT0FBTyxxQkFBdEQsRUFIUyxFQUlULEVBQUVKLE1BQU0sSUFBUixFQUFjQyxRQUFRLEVBQXRCLEVBQTBCQyxPQUFPLENBQWpDLEVBQW9DQyxRQUFRLENBQTVDLEVBQStDQyxPQUFPLG9CQUF0RCxFQUpTLENBRE47QUFPTEMsV0FBSztBQVBBLEssUUFTUEMsUSxHQUFXLEUsUUFDWEMsTyxHQUFVOztBQUVSO0FBQ0FDLGNBSFEsb0JBR0NiLEtBSEQsRUFHUTtBQUNmO0FBQ0MsYUFBS0ksU0FBTCxDQUFlSixLQUFmLEVBQXNCUSxNQUF0QjtBQUNBLGFBQUtKLFNBQUwsQ0FBZUosS0FBZixFQUFzQk0sTUFBdEI7QUFDQSxhQUFLSSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLEtBQUtOLFNBQUwsQ0FBZUosS0FBZixFQUFzQk8sS0FBNUM7QUFDRCxPQVJPOztBQVNSO0FBQ0FPLGNBVlEsb0JBVUNkLEtBVkQsRUFVUTtBQUNkO0FBQ0EsYUFBS0ksU0FBTCxDQUFlSixLQUFmLEVBQXNCUSxNQUF0QjtBQUNBLGFBQUtKLFNBQUwsQ0FBZUosS0FBZixFQUFzQk0sTUFBdEI7QUFDQSxhQUFLSSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLEtBQUtOLFNBQUwsQ0FBZUosS0FBZixFQUFzQk8sS0FBNUM7QUFDRCxPQWZPO0FBZ0JSUSxZQWhCUSxvQkFnQkM7QUFDUEMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxzQkFBb0IsS0FBS1I7QUFEaEIsU0FBaEI7QUFHRDtBQXBCTyxLLFFBdUJWUyxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTtBQUNYOzs7OztFQXRDaUNILGVBQUtJLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiRnJ1aXRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHt9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge1xyXG4gICAgZnJ1aXRMaXN0OiBbXHJcbiAgICAgIHsgbmFtZTogXCLpppnolYlcIiwgbnVtYmVyOiAxMCwgcHJpY2U6IDEsIGJ1eW5icjogMCwgaW1hZ2U6ICcuLi9pbWFnZS9iYW5hbmEuanBnJyB9LFxyXG4gICAgICB7IG5hbWU6IFwi6Iu55p6cXCIsIG51bWJlcjogMTAsIHByaWNlOiAzLCBidXluYnI6IDAsIGltYWdlOiAnLi4vaW1hZ2UvYXBwbGUuanBnJyB9LFxyXG4gICAgICB7IG5hbWU6IFwi5qmY5a2QXCIsIG51bWJlcjogMTAsIHByaWNlOiAyLCBidXluYnI6IDAsIGltYWdlOiAnLi4vaW1hZ2Uvb3JhbmdlLmpwZycgfSxcclxuICAgICAgeyBuYW1lOiBcIuiKkuaenFwiLCBudW1iZXI6IDEwLCBwcmljZTogNCwgYnV5bmJyOiAwLCBpbWFnZTogJy4uL2ltYWdlL21hbmdvLmpwZycgfVxyXG4gICAgXSxcclxuICAgIHN1bTogMFxyXG4gIH07XHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuICBtZXRob2RzID0ge1xyXG5cclxuICAgIC8vIOWHj+WwkeaVsOmHj1xyXG4gICAgZGVjcmVhc2UoSW5kZXgpIHtcclxuICAgICAvL2NvbnNvbGUubG9nKEluZGV4KTtcclxuICAgICAgdGhpcy5mcnVpdExpc3RbSW5kZXhdLmJ1eW5ici0tO1xyXG4gICAgICB0aGlzLmZydWl0TGlzdFtJbmRleF0ubnVtYmVyKys7XHJcbiAgICAgIHRoaXMuc3VtID0gdGhpcy5zdW0gLSB0aGlzLmZydWl0TGlzdFtJbmRleF0ucHJpY2U7XHJcbiAgICB9LFxyXG4gICAgLy8g5aKe5Yqg5pWw6YePXHJcbiAgICBpbmNyZWFzZShJbmRleCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKEluZGV4KTtcclxuICAgICAgdGhpcy5mcnVpdExpc3RbSW5kZXhdLmJ1eW5icisrO1xyXG4gICAgICB0aGlzLmZydWl0TGlzdFtJbmRleF0ubnVtYmVyLS07XHJcbiAgICAgIHRoaXMuc3VtID0gdGhpcy5zdW0gKyB0aGlzLmZydWl0TGlzdFtJbmRleF0ucHJpY2U7XHJcbiAgICB9LFxyXG4gICAgZ29OZXh0KCkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy4vUHVyY2hhc2U/bW9uZXk9Jyt0aGlzLnN1bVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgXHJcbiAgfTtcclxuICBldmVudHMgPSB7fTtcclxuICBvbkxvYWQoKSB7fVxyXG4gIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=