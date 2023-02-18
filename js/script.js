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