$(document).ready(function() {
    
    $("#loginform").submit(function(e) {
        e.preventDefault();
        username=$("#username").val();
        password=$("#password").val();

        // ['username']= $("[username= 'username']").val(),
        // ['password']= $("[password= 'password']").val()

         
        data = {
            "username": username,
            "password": password
        }
            $.ajax({
            url:'http://localhost:8000/admin/adminlogin',  
            type: 'POST',
            dataType:'json',
            data: data,

            success: function(res, textStatus, xhr) {
                if(res.id !=null){
                    // localStorage.setItem('username', res.username);
                    // localStorage.setItem('id', res.id);
                    console.log(username);
                    alert("login");         
                    window.location.href = "http://localhost:5000/dashboard";
      
                }
                else{
                    alert('Email or passorword is wrong');
                }
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log('Error in operation');
            }
        });
    

    });
});