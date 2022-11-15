$(document).ready(function ()
{   
    // messages();
    get_notif();
    view_click();
    user_message();

    function view_click ()
    {
        var view = {
            'view': $('.stuff_view_click').val(),
        }

        if (view != null)
        {

            console.log(view);
            $.ajax({
                type: "GET",
                url: "/stuff/view/data",
                data: view,
                dataType: "json",
                success: function (response)
                {
                    if (response.stuff_view_data != null)
                    {
                        $('#stuff_viewnotif').modal('show');
                        $('#stuff_sender').html("");
                        $('#stuff_type').html("");
                        $('#stuff_message').html("");
    
                        $('#stuff_sender').append(response.stuff_view_data.sender);
                        $('#stuff_type').append(response.stuff_view_data.type);
                        $('#stuff_message').append(response.stuff_view_data.message);
    
                       
                    }
                }
            });
        }

    }

    //  user notification
    function user_message ()
    {
        $.ajax ({
            type: "GET",
            url: "/stuff/notif",
            dataType: "json",
            success: function (response) 
            {
                console.log(response.notification);
                $('#stuff_notifications').html("");

                var count = response.notification.length;

                for(var i = 0; i < count; i++)
                {
                    if (response.notification[i].type == 'normal')
                    {
                        if (response.notification[i].status == "unread")
                        {
                            $('#stuff_notifications').append('<tr class="alert alert-primary">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
                        else
                        {
                            $('#stuff_notifications').append('<tr class="">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
                    }
                    else if (response.notification[i].type == 'alert')
                    {
                        if (response.notification[i].status == "unread")
                        {
                            $('#stuff_notifications').append(' <tr class="alert alert-warning">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
                        else
                        {
                            $('#stuff_notifications').append(' <tr class="">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
                
                    }
                    else if (response.notification[i].type == 'danger')
                    {
                        if (response.notification[i].status == "unread")
                        {
                            $('#stuff_notifications').append(' <tr class="alert alert-danger">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
                        else 
                        {
                            $('#stuff_notifications').append(' <tr class="">\
                            <td>'+response.notification[i].type+'</th>\
                            <td>'+response.notification[i].message+'</td>\
                            <td>'+response.notification[i].time+'</td>\
                            <td>'+response.notification[i].date+'</td>\
                             <td>\
                            <a href="/stuff/view/notification?id='+response.notification[i].id+'" class="btn btn-primary"><i class="fa fa-eye"></i></a> \
                            </td>\
                            <td>\
                            <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                            </td>\
                            </tr>');
                        }
     
                    }
                }
                
            }

        });
    }

    function message ()
    {
        $.ajax ({
            type: "GET",
            url: "/stuff/notif",
            dataType: "json",
            success: function (response) 
            {
                console.log(response.notification);
                $('#stuff_notifications').html("");

                var count = response.notification.length;

                for(var i = 0; i < count; i++)
                {
                    if (response.notification[i].type == 'normal')
                    {
                    $('#stuff_notifications').append(' <tr class="alert alert-primary">\
                    <td>'+response.notification[i].type+'</th>\
                    <td>'+response.notification[i].message+'</td>\
                    <td>'+response.notification[i].time+'</td>\
                    <td>'+response.notification[i].date+'</td>\
                    <td>\
                    <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                    </td>\
                    </tr>');
                    }
                    else if (response.notification[i].type == 'alert')
                    {
                    $('#stuff_notifications').append(' <tr class="alert alert-warning">\
                    <td>'+response.notification[i].type+'</th>\
                    <td>'+response.notification[i].message+'</td>\
                    <td>'+response.notification[i].time+'</td>\
                    <td>'+response.notification[i].date+'</td>\
                    <td>\
                    <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                    </td>\
                    </tr>');
                    }
                    else if (response.notification[i].type == 'danger')
                    {
                    $('#stuff_notifications').append(' <tr class="alert alert-danger">\
                    <td>'+response.notification[i].type+'</th>\
                    <td>'+response.notification[i].message+'</td>\
                    <td>'+response.notification[i].time+'</td>\
                    <td>'+response.notification[i].date+'</td>\
                    <td>\
                    <a href="/stuff/delete/notif?id='+response.notification[i].id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a> \
                    </td>\
                    </tr>');
                    }
                }

                
            }

        });
    }

    $(document).on('click','.admin_create_notification', function (e)
    {
        e.preventDefault();

        var data = {
            // yong name ay class 
            'type': $('.admin_type').val(),
            'sendto': $('.admin_sendto').val(),
            'message': $('.admin_message').val(),
        }
        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax ({
            type: "POST",
            url: "/admin/create/notification",
            data: data,
            dataType: "json",
            success: function (response) 
            {
                console.log(response.errors);
                console.log(response.success);
                //get response
                if (response.status == 400)
                {
                    console.log('error');
                    $('#admin_err_type').html("");
                    $('#admin_err_message').html("");
                    $('#admin_err_sendto').html("");

                    $('#admin_err_type').append(response.errors.type);
                    $('#admin_err_sendto').append(response.errors.sendto);
                    $('#admin_err_message').append(response.errors.message);
            
                }
                else
                {
                    
                    $('#admin_add_success').html("");
                    $('#admin_add_success').addClass('alert alert-success');
                    $('#admin_add_success').text(response.success);
                    $('#admin_createNotification').find('textarea').val("");
                    $('#admin_createNotification').find('select').val("");
                    $('#admin_err_type').html("");
                    $('#admin_err_message').html("");
                    $('#admin_err_sendto').html("");
                }

                messages();
                get_notif();
            }

        });
    });


    function get_notif()
    {
        $.ajax ({
            type: "GET",
            url: "/stuff/notific",
            dataType: "json",
            success: function (response) 
            {
                console.log(response.get_notif);
                console.log(response.get_notif.length);
                $('#stuff_notif_count').html("");
                if (response.unread != null){

                    $('#stuff_notif_count').addClass('badge bg-primary badge-number');
                    $('#stuff_notif_count').append(response.unread.length);
                   
                }


                $('#stuf_notif').html("");
                for (let i = 0; i < response.get_notif.data.length; i++)
                {

                    if (response.get_notif.data[i].type == 'normal')
                    {
                        if (response.get_notif.data[i].status == "seen")
                        {
                            $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item">\
                            <i class="bi bi-exclamation"></i>\
                            <div>\
                              <h4>'+response.get_notif.data[i].type+'</h4>\
                              <p>'+response.get_notif.data[i].message+'</p>\
                              <p>'+response.get_notif.data[i].time+'</p>\
                            </div>\
                            </li> </a>');
                        }
                        else
                        {
                          $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item alert alert-primary">\
                          <i class="bi bi-exclamation"></i>\
                          <div>\
                            <h4>'+response.get_notif.data[i].type+'</h4>\
                            <p>'+response.get_notif.data[i].message+'</p>\
                            <p>'+response.get_notif.data[i].time+'</p>\
                          </div>\
                          </li> </a>');
                        }
                    }
                    else if (response.get_notif.data[i].type == 'alert')
                    {
                        if (response.get_notif.data[i].status == "seen")
                        {
                            $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item">\
                            <i class="bi bi-exclamation-circle text-warning"></i>\
                            <div>\
                              <h4>'+response.get_notif.data[i].type+'</h4>\
                              <p>'+response.get_notif.data[i].message+'</p>\
                              <p>'+response.get_notif.data[i].time+'</p>\
                            </div>\
                            </li> </a>');
                        }
                        else
                        {

                          $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item alert alert-warning">\
                          <i class="bi bi-exclamation-circle text-warning"></i>\
                          <div>\
                            <h4>'+response.get_notif.data[i].type+'</h4>\
                            <p>'+response.get_notif.data[i].message+'</p>\
                            <p>'+response.get_notif.data[i].time+'</p>\
                          </div>\
                          </li> </a>');
                        }

                    }

                    else if (response.get_notif.data[i].type == 'danger')
                    {
                        if (response.get_notif.data[i].status == "seen")
                        {
                            $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item">\
                            <i class="bi bi-exclamation-triangle-fill"></i>\
                            <div>\
                              <h4>'+response.get_notif.data[i].type+'</h4>\
                              <p>'+response.get_notif.data[i].message+'</p>\
                              <p>'+response.get_notif.data[i].time+'</p>\
                            </div>\
                          </li> </a>');
                        }
                        else
                        {
                            $('#stuff_notif').append('<a href="/stuff/view/notif?id='+response.get_notif.data[i].id+'"><li class="notification-item alert alert-danger">\
                            <i class="bi bi-exclamation-triangle-fill"></i>\
                            <div>\
                              <h4>'+response.get_notif.data[i].type+'</h4>\
                              <p>'+response.get_notif.data[i].message+'</p>\
                              <p>'+response.get_notif.data[i].time+'</p>\
                            </div>\
                            </li> </a>');
                        }

                    }

                }
            }

        });
    }
    

});
