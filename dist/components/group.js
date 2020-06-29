'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      fruitItem: {}
    }, _this.computed = {
      a_sum: function a_sum() {
        var a_sum = 0;
        return a_sum += this.fruitItem.price * this.fruitItem.buynbr;
        console.log(a_sum);
        this.fruitItem.sum = a_sum;
      }
    }, _this.methods = {
      // 减少数量
      decrease: function decrease() {
        this.fruitItem.buynbr--;
        this.fruitItem.number++;
        // console.log(this.fruitItem.sum);
        if (this.fruitItem.buynbr == 0) {
          this.fruitItem.reducedis = true;
          this.fruitItem.adddis = false;
        } else {
          this.fruitItem.reducedis = false;
          this.fruitItem.adddis = false;
        }
      },


      // 增加数量 
      increase: function increase() {
        this.fruitItem.buynbr++;
        this.fruitItem.number--;
        //  console.log(this.fruitItem.sum);
        if (this.fruitItem.number == 0) {
          this.fruitItem.reducedis = false;
          this.fruitItem.adddis = true;
        } else {
          this.fruitItem.reducedis = false;
          this.fruitItem.adddis = false;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJmcnVpdEl0ZW0iLCJjb21wdXRlZCIsImFfc3VtIiwicHJpY2UiLCJidXluYnIiLCJjb25zb2xlIiwibG9nIiwic3VtIiwibWV0aG9kcyIsImRlY3JlYXNlIiwibnVtYmVyIiwicmVkdWNlZGlzIiwiYWRkZGlzIiwiaW5jcmVhc2UiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFETCxLLFFBSVJDLFEsR0FBVztBQUNUQyxXQURTLG1CQUNBO0FBQ1AsWUFBSUEsUUFBUSxDQUFaO0FBQ0EsZUFBT0EsU0FBUyxLQUFLRixTQUFMLENBQWVHLEtBQWYsR0FBdUIsS0FBS0gsU0FBTCxDQUFlSSxNQUF0RDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixLQUFaO0FBQ0EsYUFBS0YsU0FBTCxDQUFlTyxHQUFmLEdBQXFCTCxLQUFyQjtBQUNEO0FBTlEsSyxRQVFYTSxPLEdBQVU7QUFDUjtBQUNGQyxjQUZVLHNCQUVFO0FBQ0osYUFBS1QsU0FBTCxDQUFlSSxNQUFmO0FBQ0EsYUFBS0osU0FBTCxDQUFlVSxNQUFmO0FBQ0Q7QUFDQyxZQUFJLEtBQUtWLFNBQUwsQ0FBZUksTUFBZixJQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFLSixTQUFMLENBQWVXLFNBQWYsR0FBMkIsSUFBM0I7QUFDQSxlQUFLWCxTQUFMLENBQWVZLE1BQWYsR0FBd0IsS0FBeEI7QUFDRCxTQUhELE1BR0s7QUFDSCxlQUFLWixTQUFMLENBQWVXLFNBQWYsR0FBMkIsS0FBM0I7QUFDQSxlQUFLWCxTQUFMLENBQWVZLE1BQWYsR0FBd0IsS0FBeEI7QUFDRDtBQUNSLE9BYlM7OztBQWVWO0FBQ0FDLGNBaEJVLHNCQWdCRTtBQUNaLGFBQUtiLFNBQUwsQ0FBZUksTUFBZjtBQUNJLGFBQUtKLFNBQUwsQ0FBZVUsTUFBZjtBQUNGO0FBQ0YsWUFBSSxLQUFLVixTQUFMLENBQWVVLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDeEIsZUFBS1YsU0FBTCxDQUFlVyxTQUFmLEdBQTJCLEtBQTNCO0FBQ0EsZUFBS1gsU0FBTCxDQUFlWSxNQUFmLEdBQXdCLElBQXhCO0FBQ1AsU0FIRCxNQUdLO0FBQ0MsZUFBS1osU0FBTCxDQUFlVyxTQUFmLEdBQTJCLEtBQTNCO0FBQ0EsZUFBS1gsU0FBTCxDQUFlWSxNQUFmLEdBQXdCLEtBQXhCO0FBQ0Q7QUFDSjtBQTNCUyxLOzs7O0VBYnVCRSxlQUFLQyxTOztrQkFBbkJqQixLIiwiZmlsZSI6Imdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXAgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBmcnVpdEl0ZW06IHt9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBhX3N1bSAoKSB7XG4gICAgICAgIGxldCBhX3N1bSA9IDA7XG4gICAgICAgIHJldHVybiBhX3N1bSArPSB0aGlzLmZydWl0SXRlbS5wcmljZSAqIHRoaXMuZnJ1aXRJdGVtLmJ1eW5icjtcbiAgICAgICAgY29uc29sZS5sb2coYV9zdW0pO1xuICAgICAgICB0aGlzLmZydWl0SXRlbS5zdW0gPSBhX3N1bTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIC8vIOWHj+WwkeaVsOmHj1xuXHRcdCAgZGVjcmVhc2UgKCkge1xuICAgICAgICAgICAgdGhpcy5mcnVpdEl0ZW0uYnV5bmJyLS07XG4gICAgICAgICAgICB0aGlzLmZydWl0SXRlbS5udW1iZXIrKztcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mcnVpdEl0ZW0uc3VtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZydWl0SXRlbS5idXluYnIgPT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmZydWl0SXRlbS5yZWR1Y2VkaXMgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmZydWl0SXRlbS5hZGRkaXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLmZydWl0SXRlbS5yZWR1Y2VkaXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5mcnVpdEl0ZW0uYWRkZGlzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cdFx0ICB9LFxuXG5cdFx0ICAvLyDlop7liqDmlbDph48gXG5cdFx0ICBpbmNyZWFzZSAoKSB7ICAgIFxuXHRcdFx0XHR0aGlzLmZydWl0SXRlbS5idXluYnIrKztcbiAgICAgICAgdGhpcy5mcnVpdEl0ZW0ubnVtYmVyLS07XG4gICAgICAvLyAgY29uc29sZS5sb2codGhpcy5mcnVpdEl0ZW0uc3VtKTtcblx0XHRcdFx0aWYgKHRoaXMuZnJ1aXRJdGVtLm51bWJlciA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZydWl0SXRlbS5yZWR1Y2VkaXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZnJ1aXRJdGVtLmFkZGRpcyA9IHRydWU7XG5cdFx0XHRcdH1lbHNle1xuICAgICAgICAgIHRoaXMuZnJ1aXRJdGVtLnJlZHVjZWRpcyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZnJ1aXRJdGVtLmFkZGRpcyA9IGZhbHNlO1xuICAgICAgICB9XG5cdFx0ICB9LFxuXG5cdFx0fVxuICB9XG4iXX0=