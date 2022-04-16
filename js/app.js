const urlStr=window.location.pathname;

const selectBtn=document.querySelectorAll('.content__select-btn');
const valiForm=document.querySelectorAll('.content-validation');
const cvItemBtn=document.querySelectorAll('.cv-btn-item');
const tabBtn=document.querySelectorAll('.tab-btn');
const employerEl=document.querySelectorAll('.employer-main');



const hideText=document.querySelector('.search__keys-text');
const headerEl=document.querySelector('.header');
const cvBtnList=document.querySelector('.cv-btn');
// const formEl=document.querySelector('.form');

window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop > 100){
        headerEl.classList.add('shrink');

        if(cvBtnList){
            cvBtnList.classList.add('is-fixed');
            // formEl.setAttribute('style','margin-top:20px')
        }
    }else{
        headerEl.classList.remove('shrink');

        if(cvBtnList){
            cvBtnList.classList.remove('is-fixed');
        }
    }
});




if(selectBtn){
   selectBtn.forEach((btn)=>{
        const type=btn.getAttribute('type-data');
        
        btn.onclick=(e)=>{
            const active=document.querySelector('button.active-btn');
            active.classList.remove('active-btn');

            valiForm.forEach((vali)=>{
                if(type === vali.getAttribute('type-data')){
                    btn.classList.add('active-btn');
                    vali.classList.remove('hide');
                }else{
                    vali.classList.add('hide')
                }
            })
        }
   })
}

if(hideText){
    hideText.addEventListener('click',(e)=>{
        const parent=e.target.offsetParent;
        parent.setAttribute('style','display:none');
    })
}

if(tabBtn){
    tabBtn.forEach((btn)=>{
        btn.onclick=(e)=>{
            const id=e.target.dataset.id;

            const show=document.querySelector('.tab-btn.show');
            show.classList.remove('show');
            
            employerEl.forEach((item)=>{

                if(id === item.id){
                    item.classList.add('show');
                    btn.classList.add('show');
                }else{
                    item.classList.remove('show');
                }
            })
        }
    })
}

// if(cvItemBtn){
//     cvItemBtn.forEach((item,index)=>{

//         item.onclick=(e)=>{
//             const btn=document.querySelector('.cv-btn-item > .btn-submit');
//             btn.classList.remove('btn-submit');

//            const dataset=item.lastElementChild.getAttribute('data-set');

//             if(index === parseInt(dataset)){
//                 item.lastElementChild.classList.add('btn-submit');
//             }
//         }
//     })
// }


