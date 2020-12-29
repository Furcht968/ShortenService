chrome.contextMenus.create(
    {
        id:"shorten",
        title: "URLをしょーてん！"
    }
);
function copipe(text) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.blur();
    document.body.removeChild(copyFrom);
}
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "shorten") {
        var request = new XMLHttpRequest();
        request.open('GET', "http://u.furcht968.ml/shoten_api.php?url="+tab.url, true);
        request.onload = function () {
            var data = this.response;
            copipe(JSON.parse(data)["url"]);
            var notification = new Notification('短縮化成功！', { body: "短縮化に成功しました！\n"+JSON.parse(data)["url"]+"\n\n※すでにコピーされていますのでご心配なく。", icon: 'icon.png' });
        };
        request.send();
    }
});
