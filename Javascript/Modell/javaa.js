var modal= document.querySelector('.modal');
var modalTit= document.querySelector('.modal-title');
var modalCon= document.querySelector('.modal-content');

function openModal(modal_tit,modal_cont){
   modalTit.innerHTML=modal_tit + "<button type='button' onclick='CloseModal()'>X</button>";
   modalCon.innerHTML=modal_cont;
   if(modal.style.display=='block'){
    CloseModal();
   }else{
    modal.style.display='block';
   }
}


function CloseModal(){
    modal.style.display='none';
    modalTit.innerHTML='';
    modalCon.innerHTML='';

}

