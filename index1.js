$(document).ready(_=>{
    $(document).on("submit", "#inputForm", (e)=>{
        e.preventDefault();
        let lastEl = Number($("table > tbody > tr:last > td:first").text());
        $("table > tbody").append('<tr data-index = "' + (lastEl + 1) + '"><td>' + (lastEl + 1) + '</td>\
                    <td>' + $("#nameInput").val()+'</td>\
                    <td>'+$("#addressInput").val()+'</td>\
                    <td>'+$("#codeInput").val()+'</td>\
                    <td>'+$("#numInput").val()+'</td>\
                    <td>'+$("#dateInput").val()+'</td>\
                    <td>'+$("#procInput").val()+'</td>\
                    <td>'+$("#loanInput").val()+'</td>\
                    <td>'+$("#moneyInput").val()+'</td>\
                    <td><a data-index="'+(lastEl+1)+'" class="delete" href="#">Видалити</a></td></tr>');
        $("#inputForm")[0].reset();
    });
    $(document).on("click",".delete", function(e){
        e.preventDefault();
        let deleteNum=$(this).parent().parent().children().first().text();
        $(this).parent().parent().nextAll().each(function (index) {
            $(this).children().first().text(Number($(this).children().first().text())-1);
        });
        $(this).parent().parent().remove();
    });
 });
 