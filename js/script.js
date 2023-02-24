'use strict'

const pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const submitBtn = document.getElementById('btn-form-submit');
const personalInfo = document.querySelector('.personal-info-detail');
const personalConfirmForm = document.querySelector('.personal-confirm');
const confirmMsg = document.querySelector('.confirm-msg');

submitBtn.addEventListener('click',function(){
    let emailVal;
    emailVal = document.getElementById('confirm-email').value;
    if(pattern.test(emailVal)){
        personalInfo.classList.remove('hidden');
        personalConfirmForm.classList.add('hidden');
    }else{
        if(!confirmMsg.classList.contains('msg-error')){
            confirmMsg.classList.add('msg-error');
        } 
    }
});


const jobItemAry = document.querySelectorAll(".job-item");

if(jobItemAry.length){
    for(let i = 0; i < jobItemAry.length; i++){
        let jobItem = jobItemAry[i];
        let btnViewMore = jobItem.querySelector(".btn-viewMore");
        let btnViewLess = jobItem.querySelector(".btn-viewLess");
        if(btnViewMore && btnViewLess){
            jobItem.addEventListener("mouseover",function(){
                if(btnViewLess.classList.contains("hidden")){
                    btnViewMore.classList.remove("hidden");
                }
            });
            jobItem.addEventListener("mouseout",function(){
                btnViewMore.classList.add("hidden");
            });

            btnViewMore.addEventListener("click",function(){
                jobItem.querySelector(".job-detail").classList.remove("hidden");
                btnViewLess.classList.remove("hidden");
                btnViewMore.classList.add("hidden");
            });

            btnViewLess.addEventListener("click",function(){
                jobItem.querySelector(".job-detail").classList.add("hidden");
                btnViewLess.classList.toggle("hidden");
            });
        }        
    }
}