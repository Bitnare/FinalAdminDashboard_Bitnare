$(document).ready(function() {

    $.ajax({
        url: 'http://localhost:8000/post',
        method: 'GET',
        ContentType: 'application/json',
        dataType: 'json',

        success: function(result, status) {

            console.log(result.Posts)
            for (key in result) {
                $('#card').append('\
            <tbody>\
\
                <tr>\
                    <td align="center">\
                        <a class="btn btn-default"><em class="fa fa-pencil"></em></a>\
                        <a class="btn btn-danger"><em class="fa fa-trash"></em></a>\
                    </td>\
                    <td class="hidden-xs">1</td>\
                    <td>' + result[key].postimage + '</td>\
                    <td>' + result[key].postdescription + '</td>\
                    <td>' + result[key].posteddate + '</td>\
\
                </tr>\
\
            </tbody>\
\
\
            ')




            }


        },

        error: function(jqXHR, status) {




        }






    })













});