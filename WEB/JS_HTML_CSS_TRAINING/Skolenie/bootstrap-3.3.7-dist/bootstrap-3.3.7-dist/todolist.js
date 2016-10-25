var todoList = ["povysavat", "umyt riad", "naucit sa JS", "pozriet serial", "poskladat pradlo"];

function populate(input) {
    var ul = $('#todolist')
    for (var i = 0; i < input.length; i++) {
        ul.append($('<li>').append(input[i]));

    }

}


//TOJE tO ISTE ALE CEZ js
// window.onload() = function(){
// 	populate()
// 	};

function addTask() {

    var newTask = $('#inputField').val().trim();
    if (newTask.length > 0) {
        var ul = $('#todolist');
        ul.append($('<li>').append(newTask));
        todoList.push(newTask);
    }

}




function lineTrough(item) {

    console.log(item.css('text-decoration'))
        //Da sa na to pouzit aj toogleClass a potom to dam bez podmienky
    if (item.css('text-decoration') == "line-through") {

        item.removeClass('selected');
    } else {
        item.addClass('selected');
    }
}

// function deleteDone() {
//     var todoList = $('#todolist');
//     for (var item = 0; item < todoList.children().length; i++) {
//         if
//     }

// }


$(document).ready(function() {
    populate(todoList);

    $('#btn-add').on('click', function() {
        addTask();
    });

    $('#todolist li').on('click', function() {
        var item = $(this);
        lineTrough(item)
    });

    //Funkcia pre kliku na element listu preciarkne ulohu
});
