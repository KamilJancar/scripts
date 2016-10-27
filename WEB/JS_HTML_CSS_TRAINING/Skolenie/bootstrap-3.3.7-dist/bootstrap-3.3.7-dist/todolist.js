function populate() {
    var ul = $('#todolist');
    for (var i = 0; i < localStorage.length; i++) {
        ul.append($('<li>').append(localStorage.getItem(localStorage.key(i))));

    }

}


//TOJE tO ISTE ALE CEZ js
// window.onload() = function(){
//populate()
//};

function addTask() {

    var newTask = $('#inputField').val().trim();
    if (newTask.length > 0) {
        $('#btn-add').removeAttr(disabled);
        var ul = $('#todolist');
        ul.append($('<li>').append(newTask));
        index = localStorage.length;
        localStorage.setItem(index, newTask);
    }

}




function lineTrough() {

    $('#todolist').on('click', 'li', function() {
        var item = $(this);
        if (item.css('text-decoration') == "line-through") {
            item.removeClass('selected');
        } else {
            item.addClass('selected');
        }
    });
    //Da sa na to pouzit aj toogleClass a potom to dam bez podmienky

}

function deleteDone() {
    $('#btn-delete').click(function() {
        $('#todolist').children('li').each(function() {
            if ($(this).css('text-decoration') == "line-through") {
                localStorage.removeItem(localStorage.key($(this).text()));
                $(this).remove();

            }
        });
    });
}

$(document).ready(function() {
    populate();


    $('#btn-add').on('click', function() {
        addTask();
    });
    deleteDone();
    lineTrough();
    //Funkcia pre kliku na element listu preciarkne ulohu
});
