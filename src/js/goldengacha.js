import $ from 'jquery'

$(function () {
    $.ajaxSetup({
        type    : 'GET',
        url     : baseURL + "/goldengacha/ticket",
        dataType: 'json',
        cache   : true,
        timeout : 4000
    });
    $.ajax({
        success : function(data) {
            if (data) {
                $('#goldengacha_sheet').append(data.sheet);
                $('#goldengacha_time').append(data.time);
            }
        },
        error   : function(XMLHttpRequest, textStatus, errorThrown) {
        }
    });
});
