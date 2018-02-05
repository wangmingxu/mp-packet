"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (func) {
    return new Promise(function (resolve, reject) {
        func({
            success: function success(ret) {
                resolve(ret);
            },
            fail: function fail(ret) {
                reject(ret);
            }
        });
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21pc2VpZnkuanMiXSwibmFtZXMiOlsiZnVuYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsInJldCIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZSxVQUFDQSxJQUFELEVBQVE7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCO0FBQ2pDSCxhQUFLO0FBQ0RJLG1CQURDLG1CQUNPQyxHQURQLEVBQ1c7QUFDUkgsd0JBQVFHLEdBQVI7QUFDSCxhQUhBO0FBSURDLGdCQUpDLGdCQUlJRCxHQUpKLEVBSVE7QUFDTEYsdUJBQU9FLEdBQVA7QUFDSDtBQU5BLFNBQUw7QUFRSCxLQVRNLENBQVA7QUFVSCxDIiwiZmlsZSI6InByb21pc2VpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZnVuYyk9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBmdW5jKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmV0KXtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbChyZXQpe1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59Il19