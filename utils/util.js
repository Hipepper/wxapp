function convertStarsToArray(stars) {
  var array = [];
  var stars = parseFloat(stars / 10);
  for (var i = 0; i < 5; i++) {
    // 应该是大于等于1就添加一个实体星星
    if (stars >= 1) {
      array.push(1);
      stars--;
    } else if (stars === 0.5) {
      // 0.5颗星星用2来代替
      array.push(2);
      stars--;
    } else {
      array.push(0);
    }
  }
  return array;
}

function getMovieList(url, cb) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      // 豆瓣API不能填 'application/json'
      'content-type': 'json'
    },
    success: function (res) {
      cb(res.data);
    },
    fail: function (error) {
      console.log(error);
    }
  });
}
// 此处是exports别写成export
module.exports = {
  convertStarsToArray: convertStarsToArray,
  getMovieList: getMovieList
};