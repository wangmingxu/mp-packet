"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (func, options) {
  return new Promise(function (resolve, reject) {
    func(Object.assign({
      success: function success(ret) {
        console.log(ret);
        resolve(ret);
      },
      fail: function fail(ret) {
        console.log(ret);
        reject(ret);
      }
    }, options));
  });
};

var sleep = exports.sleep = function sleep(milsec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, milsec);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2lmeS5qcyJdLCJuYW1lcyI6WyJmdW5jIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwic3VjY2VzcyIsInJldCIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwic2xlZXAiLCJzZXRUaW1lb3V0IiwibWlsc2VjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQ0EsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ2hDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0osU0FDRUssT0FBT0MsTUFBUCxDQUNFO0FBQ0VDLGFBREYsbUJBQ1VDLEdBRFYsRUFDZTtBQUNYQyxnQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0FMLGdCQUFRSyxHQUFSO0FBQ0QsT0FKSDtBQUtFRyxVQUxGLGdCQUtPSCxHQUxQLEVBS1k7QUFDUkMsZ0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBSixlQUFPSSxHQUFQO0FBQ0Q7QUFSSCxLQURGLEVBV0VQLE9BWEYsQ0FERjtBQWVELEdBaEJNLENBQVA7QUFpQkQsQzs7QUFFTSxJQUFNVyx3QkFBUSxTQUFSQSxLQUFRLFNBQVU7QUFDN0IsU0FBTyxJQUFJVixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDUyxlQUFXLFlBQU07QUFDZlY7QUFDRCxLQUZELEVBRUdXLE1BRkg7QUFHRCxHQUpNLENBQVA7QUFLRCxDQU5NIiwiZmlsZSI6InByb21pc2lmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnVuYyhcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBzdWNjZXNzKHJldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmV0KVxuICAgICAgICAgICAgcmVzb2x2ZShyZXQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKHJldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmV0KVxuICAgICAgICAgICAgcmVqZWN0KHJldClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9IG1pbHNlYyA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKClcbiAgICB9LCBtaWxzZWMpXG4gIH0pXG59Il19