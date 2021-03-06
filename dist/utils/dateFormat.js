'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timestampToTime = timestampToTime;
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return {
        Y: Y,
        M: M,
        D: D,
        h: h,
        m: m,
        s: s
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVGb3JtYXQuanMiXSwibmFtZXMiOlsidGltZXN0YW1wVG9UaW1lIiwidGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxlLEdBQUFBLGU7QUFBVCxTQUFTQSxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUN2QyxRQUFJQyxPQUFPLElBQUlDLElBQUosQ0FBU0YsWUFBWSxJQUFyQixDQUFYLENBRHVDLENBQ0Q7QUFDdENHLFFBQUlGLEtBQUtHLFdBQUwsS0FBcUIsR0FBekI7QUFDQUMsUUFBSSxDQUFDSixLQUFLSyxRQUFMLEtBQWdCLENBQWhCLEdBQW9CLEVBQXBCLEdBQXlCLE9BQUtMLEtBQUtLLFFBQUwsS0FBZ0IsQ0FBckIsQ0FBekIsR0FBbURMLEtBQUtLLFFBQUwsS0FBZ0IsQ0FBcEUsSUFBeUUsR0FBN0U7QUFDQUMsUUFBSU4sS0FBS08sT0FBTCxLQUFpQixHQUFyQjtBQUNBQyxRQUFJUixLQUFLUyxRQUFMLEtBQWtCLEdBQXRCO0FBQ0FDLFFBQUlWLEtBQUtXLFVBQUwsS0FBb0IsR0FBeEI7QUFDQUMsUUFBSVosS0FBS2EsVUFBTCxFQUFKO0FBQ0EsV0FBTztBQUNIWCxZQURHO0FBRUhFLFlBRkc7QUFHSEUsWUFIRztBQUlIRSxZQUpHO0FBS0hFLFlBTEc7QUFNSEU7QUFORyxLQUFQO0FBUUgiLCJmaWxlIjoiZGF0ZUZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0aW1lc3RhbXBUb1RpbWUodGltZXN0YW1wKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTsvL+aXtumXtOaIs+S4ujEw5L2N6ZyAKjEwMDDvvIzml7bpl7TmiLPkuLoxM+S9jeeahOivneS4jemcgOS5mDEwMDBcbiAgICBZID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nO1xuICAgIE0gPSAoZGF0ZS5nZXRNb250aCgpKzEgPCAxMCA/ICcwJysoZGF0ZS5nZXRNb250aCgpKzEpIDogZGF0ZS5nZXRNb250aCgpKzEpICsgJy0nO1xuICAgIEQgPSBkYXRlLmdldERhdGUoKSArICcgJztcbiAgICBoID0gZGF0ZS5nZXRIb3VycygpICsgJzonO1xuICAgIG0gPSBkYXRlLmdldE1pbnV0ZXMoKSArICc6JztcbiAgICBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgWSxcbiAgICAgICAgTSxcbiAgICAgICAgRCxcbiAgICAgICAgaCxcbiAgICAgICAgbSxcbiAgICAgICAgc1xuICAgIH1cbn0iXX0=