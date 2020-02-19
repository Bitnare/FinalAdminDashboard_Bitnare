$(document).ready(function() {



    $(".deletepost").click(function(e) {
        var elem = $(this);
        e.preventDefault();
        $.ajax({
            type: 'DELETE',
            url: elem.attr("href"),
            processData: false,
            contentType: false,
            success: function(result) {
                alert('Successfully deleted');
                window.location.href = 'http://localhost:5000/post/viewpost';

            },
            error: function(err) {
                alert('error', err)
            }
        });


    });


})