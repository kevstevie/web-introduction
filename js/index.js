var submit = document.getElementById("submit");

submit.onclick = function () {
    var name = document.getElementById("username");
    var checkboxes = document.getElementsByName("like");
    var count = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count += 1;
        }
    }

    alert(name.value + "님 저와 " + count + "개의 취향이 같으시네요!");
};

var clear = document.getElementById("clear");
clear.onclick = function () {
    // checkbox 전부 클리어
    var checkboxes = document.getElementsByName("like");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
};
