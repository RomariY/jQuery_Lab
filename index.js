
const inputCreate = $(this).add("input");
inputCreate.maxLength = "30";
function handleredit(){
    e.preventDefault()
    str = $(this).text();
    inputCreate.placeholder = str;
    $(this).empty();    
    $(this).appendChild(inputCreate);
    str = "";
};
$(document).ready(_=>{
    $(document).on("submit", "#inputForm", (e)=>{
        e.preventDefault();
        let lastEl = Number($("table > tbody > tr:last > td:first").text());
        $("table > tbody").append('<tr data-index = "'+(lastEl+1)+'"><td>'+(lastEl+1)+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#nameInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#addressInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#codeInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#numInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#dateInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#procInput").val()+'</td>\
                    <td class = "' + (lastEl + 1) + '-row">'+$("#loanInput").val()+'</td>\
                    <td><a data-index="'+(lastEl+1)+'" class="'+(lastEl+1)+'-row-btn-edit edit btn btn-secondary" href="#">Редагувати</a></td>\
                    <td class="'+(lastEl+1)+'-row-btn-del"><a data-index="'+(lastEl+1)+'" class="delete btn btn-danger" href="#">Видалити</a></td></tr>');
        $("#inputForm")[0].reset();
        post();
    });
    $(document).on("click", ".edit", function(e){   
        e.preventDefault();
        let numOfel = e.target.dataset.index;
        $("table > tbody > tr > td ." + numOfel + "-row-btn-edit").replaceWith('<a data-index="' + numOfel + '" class="' + numOfel + '-row-btn-save save btn btn-outline-success btn-sm" href="#">Зберегти</a><a data-index="' + numOfel + '" class="' + numOfel + '-row-btn-cancel cancel btn btn-outline-warning btn-sm" href="#">Скасувати</a>');
        $("table > tbody > tr > ." + numOfel + "-row").each(function(){
            let str = $(this).text();
            $(this).empty()
            $(this).append('<input type="text" maxLength = "30" placeholder="' + str +'">');
            //$("table > tbody > tr > ." + numOfel + "-row > input").remove()
        });
        
        $(document).on("click", "." + numOfel + "-row-btn-save", function(ed){
            e.preventDefault();
            $("table > tbody > tr > ." + numOfel + "-row").each(function(){
                let temp = $(this).children("input").attr('placeholder'), input = $(this).children("input").val();
                if (input == "") {
                    $(this).append(temp);
                    $(this).children("input").remove();
                }
                else{
                    $(this).append(input);
                    $(this).children("input").remove();
                }
            });
            $("table > tbody > tr > td ." + numOfel + "-row-btn-save").remove()
            $("table > tbody > tr > td ." + numOfel + "-row-btn-cancel").replaceWith('<a data-index="'+numOfel+'" class="'+numOfel+'-row-btn-edit edit btn btn-secondary" href="#">Редагувати</a>')  
            post();
        });
        $(document).on("click", "." + numOfel + "-row-btn-cancel", function(del){
            e.preventDefault();
            $("table > tbody > tr > ." + numOfel + "-row").each(function(){
                let temp = $(this).children("input").attr('placeholder');
                $(this).append(temp);
                $(this).children("input").remove();
            });
            $("table > tbody > tr > td ." + numOfel + "-row-btn-save").remove()
            $("table > tbody > tr > td ." + numOfel + "-row-btn-cancel").replaceWith('<a data-index="'+numOfel+'" class="'+numOfel+'-row-btn-edit edit btn btn-secondary" href="#">Редагувати</a>') 
        });


    });
    $(document).on("click",".delete", function(e){
        e.preventDefault();
        $(this).parent().parent().nextAll().each(function(index) {
            $(this).children().first().text(Number($(this).children().first().text())-1);
        });
        $(this).parent().parent().remove();
        post();
    });
});

function post(){
    $.post({
        url:"http://jsonplaceholder.typicode.com/posts",
        type: "POST", 
        data:$("#requestForm").serialize(),
        success:function(response)
        {
          console.log("Well done!");
        }
    });
}