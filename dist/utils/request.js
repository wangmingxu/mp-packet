'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _route = require('./route.js');

var _promisify = require('./promisify.js');

var _promisify2 = _interopRequireDefault(_promisify);

var _constant = require('./../constant/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestPromise = function requestPromise(params) {
  return new Promise(function (resolve, reject) {
    wx.request(Object.assign({
      success: function success(_ref) {
        var data = _ref.data;

        console.log(data);
        // 0成功,6余额不足,7签名授权过期
        switch (data.status) {
          case 0:
            resolve(data);
            break;
          case 6:
            reject(data);
            break;
          case 7:
            var url = (0, _route.getCurrentPageUrlWithArgs)().replace('pages/', '');
            (0, _promisify2.default)(wx.getStorage, { key: 'signInfo' }).then(function (_ref2) {
              var signInfo = _ref2.data;

              return requestPromise({
                url: _constant.requestBaseUrl + '/refurbishUserSign',
                data: signInfo
              });
            }).then(function (_ref3) {
              var signInfo = _ref3.data;

              return (0, _promisify2.default)(wx.setStorage, {
                key: 'signInfo',
                data: signInfo
              });
            }).then(function () {
              wx.reLaunch({ url: url });
            });
            reject(data);
            break;
          default:
            wx.showModal({
              title: '提示',
              content: data.msg,
              showCancel: false
            });
            reject(data);
        }
      },
      fail: function fail(ret) {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(ret),
          showCancel: false
        });
        reject(ret);
      }
    }, params));
  });
};

exports.default = requestPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInVybCIsInJlcGxhY2UiLCJnZXRTdG9yYWdlIiwia2V5IiwidGhlbiIsInNpZ25JbmZvIiwic2V0U3RvcmFnZSIsInJlTGF1bmNoIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwibXNnIiwic2hvd0NhbmNlbCIsImZhaWwiLCJyZXQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixTQUFVO0FBQy9CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsT0FBR0MsT0FBSCxDQUNFQyxPQUFPQyxNQUFQLENBQ0U7QUFDRUMsYUFERix5QkFDb0I7QUFBQSxZQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0E7QUFDQSxnQkFBUUEsS0FBS0csTUFBYjtBQUNFLGVBQUssQ0FBTDtBQUNFVixvQkFBUU8sSUFBUjtBQUNBO0FBQ0YsZUFBSyxDQUFMO0FBQ0VOLG1CQUFPTSxJQUFQO0FBQ0E7QUFDRixlQUFLLENBQUw7QUFDRSxnQkFBTUksTUFBTSx3Q0FBNEJDLE9BQTVCLENBQW9DLFFBQXBDLEVBQTZDLEVBQTdDLENBQVo7QUFDQSxxQ0FBVVYsR0FBR1csVUFBYixFQUF5QixFQUFFQyxLQUFLLFVBQVAsRUFBekIsRUFDR0MsSUFESCxDQUNRLGlCQUF3QjtBQUFBLGtCQUFmQyxRQUFlLFNBQXJCVCxJQUFxQjs7QUFDNUIscUJBQU9ULGVBQWU7QUFDcEJhLG9FQURvQjtBQUVwQkosc0JBQU1TO0FBRmMsZUFBZixDQUFQO0FBSUQsYUFOSCxFQU9HRCxJQVBILENBT1EsaUJBQXdCO0FBQUEsa0JBQWZDLFFBQWUsU0FBckJULElBQXFCOztBQUM1QixxQkFBTyx5QkFBVUwsR0FBR2UsVUFBYixFQUF5QjtBQUM5QkgscUJBQUssVUFEeUI7QUFFOUJQLHNCQUFNUztBQUZ3QixlQUF6QixDQUFQO0FBSUQsYUFaSCxFQWFHRCxJQWJILENBYVEsWUFBTTtBQUNWYixpQkFBR2dCLFFBQUgsQ0FBWSxFQUFFUCxRQUFGLEVBQVo7QUFDRCxhQWZIO0FBZ0JBVixtQkFBT00sSUFBUDtBQUNBO0FBQ0Y7QUFDRUwsZUFBR2lCLFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxJQURJO0FBRVhDLHVCQUFTZCxLQUFLZSxHQUZIO0FBR1hDLDBCQUFZO0FBSEQsYUFBYjtBQUtBdEIsbUJBQU9NLElBQVA7QUFqQ0o7QUFtQ0QsT0F2Q0g7QUF3Q0VpQixVQXhDRixnQkF3Q09DLEdBeENQLEVBd0NZO0FBQ1J2QixXQUFHaUIsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLElBREk7QUFFWEMsbUJBQVNLLEtBQUtDLFNBQUwsQ0FBZUYsR0FBZixDQUZFO0FBR1hGLHNCQUFZO0FBSEQsU0FBYjtBQUtBdEIsZUFBT3dCLEdBQVA7QUFDRDtBQS9DSCxLQURGLEVBa0RFRyxNQWxERixDQURGO0FBc0RELEdBdkRNLENBQVA7QUF3REQsQ0F6REQ7O2tCQTJEZTlCLGMiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1cnJlbnRQYWdlVXJsV2l0aEFyZ3MgfSBmcm9tICcuL3JvdXRlJ1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuL3Byb21pc2lmeSdcbmltcG9ydCB7IHJlcXVlc3RCYXNlVXJsIH0gZnJvbSAnLi4vY29uc3RhbnQnXG5cbmNvbnN0IHJlcXVlc3RQcm9taXNlID0gcGFyYW1zID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3eC5yZXF1ZXN0KFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHN1Y2Nlc3MoeyBkYXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAvLyAw5oiQ5YqfLDbkvZnpop3kuI3otrMsN+etvuWQjeaOiOadg+i/h+acn1xuICAgICAgICAgICAgc3dpdGNoIChkYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZWplY3QoZGF0YSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0Q3VycmVudFBhZ2VVcmxXaXRoQXJncygpLnJlcGxhY2UoJ3BhZ2VzLycsJycpXG4gICAgICAgICAgICAgICAgcHJvbWlzaWZ5KHd4LmdldFN0b3JhZ2UsIHsga2V5OiAnc2lnbkluZm8nIH0pXG4gICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhOiBzaWduSW5mbyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0UHJvbWlzZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtyZXF1ZXN0QmFzZVVybH0vcmVmdXJiaXNoVXNlclNpZ25gLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNpZ25JbmZvXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogc2lnbkluZm8gfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KHd4LnNldFN0b3JhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzaWduSW5mbycsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2lnbkluZm9cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHsgdXJsIH0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEubXNnLFxuICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlamVjdChkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbChyZXQpIHtcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkocmV0KSxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZWplY3QocmV0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zXG4gICAgICApXG4gICAgKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0UHJvbWlzZVxuIl19