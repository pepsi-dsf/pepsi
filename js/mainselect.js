window.onload=function () {
    var btn = document.querySelector('button');
    var week = document.querySelector('select[name="week"]');
    var day = document.querySelector('select[name="day"]');
    var classroom = document.querySelector('select[name="class"]');
    var roomname = document.querySelector('select[name="roomname"]');
    var result=document.querySelector('.result');
    btn.addEventListener('click',function(){
        var w=week.value;
        var d=day.value;
        var c=classroom.value;
        switch (roomname.value) {
            case "0":
                init();
                 bml(w,d,c);
                break;
            case "1":
                init();
                 bwl(w,d,c);
                break;
            case "2":
                init();
                 cyl(w,d,c);
                break;
            case "3":
                init();
                 drl(w,d,c);
                break;
            case "4":
                init();
                 srl(w,d,c);
                break;
        }
    })
    function init() {
        result.innerHTML='';
    }
    function bml(w,d,c) {
        $.getJSON('./json/博明楼(五教).json',data=>{
            // console.log(data[w][d][c])
            data[w][d][c].forEach(function(value){
                var tr=document.createElement('tr');
                tr.innerHTML='<td>'+value+'</td>';
                result.appendChild(tr);
            });
            // console.log(typeof data)
           })
    }
    function bwl(w,d,c){
        $.getJSON('./json/博文楼(文综).json',data=>{
            data[w][d][c].forEach(function(value){
                var tr=document.createElement('tr');
                tr.innerHTML='<td>'+value+'</td>';
                result.appendChild(tr);
            });
          })
    }
    function cyl(w,d,c){
        $.getJSON('./json/诚意楼(七教).json',data=>{
            data[w][d][c].forEach(function(value){
                var tr=document.createElement('tr');
                tr.innerHTML='<td>'+value+'</td>';
                result.appendChild(tr);
            });
           })
    }
    
    function drl(w,d,c){
        $.getJSON('./json/德润楼(国际).json',data=>{
            data[w][d][c].forEach(function(value){
                var tr=document.createElement('tr');
                tr.innerHTML='<td>'+value+'</td>';
                result.appendChild(tr);
            });
           })
    }
    function srl(w,d,c){
        $.getJSON('./json/树人楼(一教).json',data=>{
            data[w][d][c].forEach(function(value){
                var tr=document.createElement('tr');
                tr.innerHTML='<td>'+value+'</td>';
                result.appendChild(tr);
            });
           })
    }

}
