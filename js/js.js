var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

var $el = document.querySelector('.leancloud_visitors');
if($el) $el.id = window.location.pathname;

new Valine({
    el: '#vcomments',
    appId: valine_appid,
    appKey: valine_appKey,
    placeholder: '无需登录也可以评论，移动端访问不到数据，看不了评论，也评论不了，btw，你的IP会被记录哦',
//    avatar: "mp",

    serverURLs: "https://hebtpapf.api.lncldglobal.com",
    notify: true,
//    recordIP: true,
    visitor: true, 
//    highlight: true,
    meta: ['nick', 'mail'],
    pageSize: 10,
    path: window.location.pathname
//    verify: true,
//    guest_info: ['nick', 'mail'],
//    enableQQ: true 
})

const rateLimiter = (func, delay) => {
    let lastRun = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastRun < delay) return;
      lastRun = now;
      return func(...args);
    };
  };





function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
}




function updateStyle() {
    if (getCookie("style") == "white") {
        $("#footer").attr("style", "color: #51525d;");
        $(".flink").attr("style", "color: #51525d;");
        $(".ba").attr("style", "color: #51525d;");
        $("#bodyx").attr("class", "bg_while");
        $("#update_style").attr('checked', false);
    } else {
        $("#footer").attr("style", "");
        $(".flink").attr("style", "");
        $("#bodyx").attr("class", "");
        $(".ba").attr("style", "");
        $("#update_style").attr('checked', true);
    }

    ('CookieManager' in window) && CookieManager.getInstance().setAcceptThirdPartyCookies(webView, true);
}

if (getCookie("style") == null) {
    setCookie("style", web_style)
    updateStyle();
} else if (getCookie("style") == "white") {
    setCookie("style", "white")
    updateStyle();
} else if (getCookie("style") == "black") {
    setCookie("style", "black")
    updateStyle();
}

$("#update_style").change(function() {
    var style = $("#update_style").is(':checked');
    if (style) {
        setCookie("style", "black")
        updateStyle();
    } else {
        setCookie("style", "white")
        updateStyle();
    }
});