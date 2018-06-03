function countDown() {
  var flag = moment('2018-06-04 12:00:00');
  var now = moment();
  if (now > flag) {
    $('.timer p').html('<span style="color:red;">比賽進行中...</span>');
    clearInterval(counter);
    return;
  }
  var diff = moment.duration(flag.diff(now));
  var result = '距離開始還有 ' + diff.days() + ' 天 ' + diff.hours() + ' 小時 ' + diff.minutes() + ' 分鐘又 ' + diff.seconds() + ' 秒 ';
  $('.timer p').html(result);
}
var counter = setInterval(countDown, 1000);
  
