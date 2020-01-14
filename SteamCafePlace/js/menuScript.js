$("#b1").click(function(){
    add_to_Selected("Coffee", 25); //method add_to_selected is defined at the bottom.
});

$("#b2").click(function(){
    add_to_Selected("MilkShake", 80);
});

$("#b3").click(function(){
    add_to_Selected("Sandwitch", 50);
});



let remove_button_count=0;
function add_to_Selected(dish,rate){
    let div=document.createElement("DIV");
    $(div).addClass("menuItem");
    $(div).css("height","80px");
    let left_div=document.createElement("DIV");
    $(left_div).addClass("left");
    let item=document.createElement("H3");
    let price=document.createElement("H4");
    $(price).append("Rs."+rate+"/-");
    $(item).append(dish);
    $(left_div).append(document.createElement("BR"));
    $(left_div).append(item);
    $(left_div).append(document.createElement("BR"));
    $(left_div).append(price);

    $(div).append(left_div);

    let right_div=document.createElement("DIV");
    $(right_div).addClass("right");

    let remove_button=document.createElement("BUTTON");
    $(remove_button).append("Remove");
    $(remove_button).attr("id","remove"+remove_button_count++);

    $(right_div).append(remove_button);
    $(div).append(right_div);
    
    $("#side").append(div);



    //setting event listener to the remove button:
    $(remove_button).click(function(){
        // alert("hello");
        $(remove_button).parent().parent().remove();
    });
    
}

