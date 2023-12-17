let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxs = document.querySelectorAll(".box");
let drag =null;
btn.onclick = function(){
    if(!inp.value){}else{
        boxs[0].innerHTML +=`<p class='item' draggable='true' >${inp.value}</p>`;
        inp.value='';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart' , function(){
            // console.log("drag start")
            drag= item;
            // console.log(drag);
            item.style.opacity='.5';
        })
        item.addEventListener('dragend' , function(){
            // console.log("drag start")
            drag=null;
            item.style.opacity = '1';

        })

    });
    boxs.forEach(box =>{
        box.addEventListener('dragover' , function(e){
            e.preventDefault();
            this.style.background='#090';
            this.style.color='#fff';
        })
        box.addEventListener('dragleave' , function(){
            this.style.background='#fff';
            this.style.color='#000';
        })
        box.addEventListener('drop',function(){
            this.append(drag);
            this.style.background = '#fff';
            this.style.color = '#000';
        })
    })
}
