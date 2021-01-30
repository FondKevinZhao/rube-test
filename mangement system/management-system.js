var oForm = document.querySelector('form');
var oUser = document.getElementById('user');
var oAge = document.getElementById('age');
var oSex = document.getElementById('sex');
var oTbody = document.querySelector('table>tbody');

// form event was committed
oForm.onsubmit = function () {
    // create a tr
    var newTr = document.createElement("tr");
    newTr.innerHTML = '<td>' + oUser.value + '</td>\
        <td>' + oAge.value + '</td>\
        <td>' + oSex.value + '</td>\
        <td><a href="###" class="dele">dele</a></td>\
    ';

    console.log(newTr)
    oTbody.appendChild(newTr)


    // when click the add each time, get all the deleted button again, and then bind all the deleted click button event
    var oDeles = document.querySelectorAll('table tr td .dele')
    ;
    for (var i = 0; i < oDeles.length; i++) {
        oDeles[i].onclick = function () {
            this.parentNode.parentNode.remove();
        }
    };
    // stop the form submit, actually stop the default event
    return false;
}

// when click the add each time, get all the deleted button again, and then bind all the deleted click button event
var oDeles = document.querySelectorAll('table tr td .dele');
for (var i = 0; i < oDeles.length; i++) {
    oDeles[i].onclick = function () {
        this.parentNode.parentNode.remove();
    }
}


