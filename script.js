console.log('asd')


const pn = document.getElementById('pn')
const phn = document.getElementById('phn')
const verify = document.getElementById('verify')
const enter = document.getElementById('enter')

let phone
let piradi
let code
pn.addEventListener('blur',(e)=>{
    piradi = e.target.value
})
phn.addEventListener('blur',(e)=>{
    phone=e.target.value
})
enter.addEventListener('click',()=>{
    console.log(phone, piradi)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://phws2.aversi.ge:8088/api/SendVerificationCode?PersonalNumber=${piradi}&Phone=${phone}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result[0])
        })
        .catch(error => console.log('error', error));
})
verify.style.display='none'