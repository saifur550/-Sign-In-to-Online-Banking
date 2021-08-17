
// add EvenLister with login -submit
document.getElementById('login-submit').addEventListener('click', function(){
    //get user emaill address 
   const emailFiled = document.getElementById('user-email');
   const userEmail = emailFiled.value;
console.log(userEmail);
   //get user password
   const passwordFiled = document.getElementById('user-password');
   const userPassword = passwordFiled.value;
    console.log(userPassword);
//if condition
if(userEmail == 'user@demo.com' && userPassword == 'admin'){
    // console.log('vaild');
    window.location.href ='bank.html'
}
})




