$(document).ready(function() {
    $('#addposts').submit(function(event) {
        event.preventDefault();
        var image = $("#postimage").get(0).files;
        var description = $("#description").val();
        var date = $("#date").val();
        var formData = new FormData(this);
        if (image.length > 0) {
            formData.append("postimage", image);
        }
        formData.append('description', description);
        formData.append('date', date);

        $.ajax({

            url: 'http://localhost:8000/post/addpost',
            method: 'POST',
            contentType: false,
            enctype: 'multipart-formdata',
            processData: false,
            data: formData,
            dataType: 'json',



            success: function(result, status) {
                if (result.message === 'Post added Sucessfully') {
                    alert("Post created sucessfully");
                    window.location.href = "/post/addpost";


                } else {
                    alert("Error creating Posts")
                }



            },

            error: function(jqXHR, status) {
                //console.log(jqXHR.responseJSON.message);
                //$('#successmessage').html(jqXHR.responseJSON.message);

            }
        })
    })





})