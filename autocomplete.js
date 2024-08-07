// let availableKeywords = [
// 'Ficus religiosa Linn',
// 'Peepal Tree',
// 'Arjuna Tree',
// 'Pomegranate Tree',
// 'Night-Flowering Jasmine',
// 'Vitex trifolia',
// 'Leo Tree',
// 'Areca Tree',
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function(){
//     let result =[];
//     let input = inputBox.value;
//     if(input.length){
//         result = availableKeywords.filter((keyword)=>{
//            return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//         console.log(result);
//     }
//     display(result);
//     if(!result.length){
//         resultsBox.innerHTML ='';      
//     }
// }
// function display(result){
//     const content =result.map((list)=>{
//         return "<li onclick=selectInput(this)>" + list  + "</li>";
//     });
//     resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }   
// function selectInput(list){
//     inputBox.value = list.innerHTML;
//     resultsBox.innerHTML ='';
// }

function search() {
    let filter = document.getElementById('input-box').value.toUpperCase();
    let item = document.querySelectorAll('.img_wrap');
        let l = document.getElementsByTagName('p');
        for(var i =0;i<=l.length;i++){
            let a=item[i].getElementsByTagName('p')[0];
            let value=a.innerHTML || a.innerText || a.textContent;
             if(value.toUpperCase().indexOf(filter) > -1){
                item[i].style.display="";
             }
             else
             {
                item[i].style.display="none";
             }
    }
}
