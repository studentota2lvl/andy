$(function () {
    var $phoneTable = $("#phoneTable > table");
    var $newContactName = $("#newContactName");
    var $newContactSurname = $("#newContactSurname");
    var $newContactPhone = $("#newContactPhone");
    var $addNewContactButton = $("#addNewContactButton");
    $newContactPhone.on("change", buttonEnabled);
    $newContactSurname.on("change", buttonEnabled);
    $newContactName.on("change", buttonEnabled);
    $phoneTable.on("click", "button", deleteContactButton);



    function buttonEnabled (event) {
        var patNewContactName_Surname = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
        var patNewContactPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        var $name = patNewContactName_Surname.test($newContactName.val());
        var $surname = patNewContactName_Surname.test($newContactSurname.val());
        var $phone = patNewContactPhone.test($newContactPhone.val());

        if (($name && $surname && $phone) === true) {
            $addNewContactButton.prop('disabled', false);
        } else {
            $addNewContactButton.prop('disabled', true);
        }
    }

    $addNewContactButton.click(addNewContactClick);

    function addNewContactClick (event) {

        var contactDataArr = [
            $newContactName.val(),
            $newContactSurname.val(),
            $newContactPhone.val()
        ];

        creatingHtmlObj ();


        function creatingHtmlObj () {
            var deleteButton = "<td><button class = 'deleteContact'>Удалить</button></td>";
            var contactData = "<td></td><td>" + contactDataArr[0] + "</td><td>" + contactDataArr[1] + "</td><td>" + contactDataArr[2] + "</td>";
            var tr = "<tr>" + contactData + deleteButton + "</tr>";
            moveToTable (tr);
        }

        function moveToTable (arg) {
            $phoneTable.append(arg);
        }

    }



    function deleteContactButton() {
        var $tr = $(this).parents("tr");
        $tr.detach();
    }


//funny fynctions
    $phoneTable.on("mouseover", "button", (function() {
        $(this).css("color", "red")
    }));

    $phoneTable.on("mouseout", "button", (function() {
        $(this).css("color", "")
    }))


});




