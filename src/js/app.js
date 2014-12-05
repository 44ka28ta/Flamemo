/// <reference path="./jquery.d.ts" />
var Flamemo;
(function (Flamemo) {
    var Memo = (function () {
        function Memo() {
        }
        return Memo;
    })();
    Flamemo.Memo = Memo;
})(Flamemo || (Flamemo = {}));

$(document).ready(function () {
    //var topPath: string = window.location.href.match (/^.*index\.html/)[0];
    $('#add-button').click(function () {
        var lMemoItem = $("#memo-list li:last-child").clone();
        var newNum = parseInt(lMemoItem.attr("id").match(/\d+/i)[0], 10) + 1;
        var newId = "doc" + newNum + "-item";
        lMemoItem.attr("id", newId);
        console.log(newId);

        // check whether can make a file of default name or not. FIXME
        var defaultName = "New Document";
        lMemoItem.find("p").text(defaultName + newNum);

        lMemoItem.appendTo("#memo-list");
        return;
    });

    // editor events
    $('#memo-list').on('click', 'li', function () {
        var jItemId = "#" + this.id;

        var eventObjectList = ["#edit-delete-button", "#edit-done-button", "#edit-cancel-button"];

        //delete button event
        $(eventObjectList[0]).click(function () {
            $(jItemId).remove();
            console.log(this);
            eventObjectList.forEach(function (jIdStr) {
                $(jIdStr).unbind();
                console.log(jIdStr);
            });

            return;
        });

        //done button event
        $(eventObjectList[1]).click(function () {
            eventObjectList.forEach(function (jIdStr) {
                $(jIdStr).unbind();
                console.log(jIdStr);
            });

            return;
        });

        //cancel button event
        $(eventObjectList[2]).click(function () {
            eventObjectList.forEach(function (jIdStr) {
                $(jIdStr).unbind();
                console.log(jIdStr);
            });

            return;
        });
        return;
    });
});

console.log("load");
//# sourceMappingURL=app.js.map
