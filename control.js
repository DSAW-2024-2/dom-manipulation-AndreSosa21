/* we select the id images*/
const image_1=document.getElementById('first_image');
const image_2=document.getElementById('second_image');
const image_3=document.getElementById('third_image');

/*We select out buttons by query*/
const right_button=document.getElementById('right_button');
const left_button=document.getElementById('left_button');

let displayImage=image_1;
displayImage.style.display = 'block';
update_bottons(false,true);
image_2.style.display='none';
image_3.style.display='none'

right_button.addEventListener('click', function(){
    displayImage.classList.add('transition');
    setTimeout (function(){
    displayImage.style.display='none';
    if(displayImage===image_1){
        displayImage=image_2;
        update_bottons(false,false);
        
    }
    else if(displayImage===image_2){
        displayImage=image_3;
        update_bottons(true,false);
    }
    else if(displayImage===image_3){
        update_bottons(true,false);

    }
    displayImage.style.display='block';
    displayImage.classList.remove('transition');
    },600)
})

left_button.addEventListener('click',function()
{
    displayImage.classList.add('transition');
    setTimeout (function(){
    displayImage.style.display='none';   
    if(displayImage===image_1){
        update_bottons(false,true); 
    }
    else if(displayImage===image_2){
        displayImage=image_1;
        update_bottons(false,true);
    }
    else if(displayImage===image_3){
        displayImage=image_2;
        update_bottons(false,false);
    }
    
    displayImage.style.display='block';
    displayImage.classList.remove('transition');
    },600)
})

function update_bottons(right,left){
    right_button.disabled=right;
    left_button.disabled=left
}








