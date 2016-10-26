localStorage.setItem('uloha1',"povysavat");
localStorage.setItem('uloha2',"umyt riad");
localStorage.setItem('uloha3',"naucit sa JS");

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
        var ul = $('#todolist');
        ul.append($('<li>').append(newTask));
        localStorage.setItem(newTask,newTask);
    }

}




function lineTrough() {

    $('#todolist li').on('click', function() {
        var item = $(this);
        if (item.css('text-decoration') == "line-through") {

        item.removeClass('selected');
    } else {
        item.addClass('selected');
    }
    });
        //Da sa na to pouzit aj toogleClass a potom to dam bez podmienky
    
}

// function deleteDone() {
//     var todoList = $('#todolist');
//     for (var item = 0; item < todoList.children().length; i++) {
//         if
//     }

// }


$(document).ready(function() {
    populate();
    

    $('#btn-add').on('click', function() {
        addTask();
    });


    lineTrough();
    //Funkcia pre kliku na element listu preciarkne ulohu
});
