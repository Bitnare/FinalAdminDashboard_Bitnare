$(document).ready(function() {

    $('#updateposts').on('click', '#editposts', function() {

        var image = $("#postimage").get(0).files;
        var description = $("#description").val();
        var date = $("#date").val();
        var formData = new FormData(this);
        if (image.length > 0) {
            formData.append("postimage", image);
        }
        formData.append('description', description);
        formData.append('date', date);
        var elem = $(this);
        $.ajax({
            type: 'PATCH',
            url: "http://localhost:8000/post/update" + elem,
            data: formData,
            processData: false,
            contentType: false,
            success: function(result) {
                alert('Successfully ');
                window.location.href = 'http://localhost:5000/post/viewpost';

            },
            error: function(err) {
                alert('error', err)
            }
        });











    })


})