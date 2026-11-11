/* 伊莫更新公告清單：新增公告時，只需要在最上面加一行（最新的放最前面） */
window.EMO_NEWS = [
  { file: "game-guide-emo-news-s2a.html", date: "11/12", title: "版本更新" },
  { file: "game-guide-emo-news-s1b.html", date: "10/29", title: "逐風啟程·下" },
  { file: "game-guide-emo-news.html",     date: "9/23",  title: "逐風啟程" }
];

(function () {
  var list = window.EMO_NEWS;
  var here = location.pathname.split("/").pop();
  var a = function (href, text, extra) {
    return '<a class="back-link" href="./' + href + '" style="margin-left:16px;' + (extra || "") + '">' + text + "</a>";
  };

  // 公告頁頂部導覽：<div id="news-nav"></div>
  var nav = document.getElementById("news-nav");
  if (nav) {
    var h = '<a class="back-link" href="./game-guide-emo.html">← 回伊莫位置攻略</a>';
    h += a("game-guide-emo-schedule.html", "📅 官方活動日程");
    h += a("game-guide-index.html", "← 回攻略選單");
    h += '<div style="margin:0 0 18px;font-size:13px;color:var(--ink-soft)">📰 更新公告：';
    list.forEach(function (n, i) {
      var cur = n.file === here;
      h += (i ? " ｜ " : "") + (cur
        ? '<strong style="color:var(--ink)">' + n.date + " " + n.title + "</strong>"
        : '<a href="./' + n.file + '" style="color:var(--seal);text-decoration:none">' + n.date + " " + n.title + "</a>");
    });
    h += "</div>";
    nav.innerHTML = h;
  }

  // 攻略頁：<span id="news-latest"></span> 顯示最新一則 + 其餘公告
  var lt = document.getElementById("news-latest");
  if (lt && list.length) {
    var s = a(list[0].file, "📰 最新更新公告（" + list[0].date + "）→");
    list.slice(1).forEach(function (n) { s += a(n.file, n.date + " " + n.title); });
    lt.innerHTML = s;
  }
})();
