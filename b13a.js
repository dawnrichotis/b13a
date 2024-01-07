function promotion(){
    alert("熱銷商品!");
};

function gift(){
    alert("主廚推薦!");
};

function get_order(){  
    var info = document.querySelectorAll('input[type=text]');
    var no = document.querySelectorAll('input[type=number]');
    var total_text = document.getElementById('total_text');
    var ship_cost_text = document.getElementById('ship_cost_text');
    var sum_text = document.getElementById('sum_text');
    var price = [150,200];
    var total = 0;
    var ship_cost = 0;
    var empty_info = 0;

    for(var i=0; i<4; i++){
        if(info[i].value == ''){
            empty_info = empty_info + 1;
        } 
    }
    if(empty_info > 0){
        alert('訂購人資訊填寫不完整');
    } else {
        for(var i=0; i<2; i++){
            total = total + no[i].value*price[i];
        }
        if( total > 0 ) ship_cost = 120;
        total_text.innerHTML=total+'元';
        ship_cost_text.innerHTML=ship_cost+'元';
        sum_text.innerHTML=(total+ship_cost)+'元';
    }
}

function clear_order(){
    var info = document.querySelectorAll('input[type=text]');
    var no = document.querySelectorAll('input[type=number]');
    var total_text = document.getElementById('total_text');
    var ship_cost_text = document.getElementById('ship_cost_text');
    var sum_text = document.getElementById('sum_text');

    for(var i=0; i<4; i++){
        info[i].value = '';
    }
    for(var i=0; i<2; i++){
        no[i].value=0;
    }
    total_text.innerHTML='';
    ship_cost_text.innerHTML='';
    sum_text.innerHTML='';
}



