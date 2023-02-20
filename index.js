const startbtn = document.querySelector('.startbtn')
let stimer = document.querySelector('.time')
let dtimer = document.querySelector('.timer')
const color = document.querySelector('.color')
const percent = document.querySelector('.percentage')

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray[0])


startbtn.addEventListener('click', function() {

     console.log('hello')
     var splittime = stimer.value;
     const splitting = splittime.split(":");

     const hr = splitting[0]
     console.log(hr);

     const min = splitting[1];
     console.log(min);

     const sec = splitting[2];
     console.log(sec);


    console.log('hello')
    var totalcount = (parseInt(hr) * 60 * 60) + (parseInt(min) * 60) + (parseInt(sec));
    console.log(totalcount)

    var totalcount2 = totalcount;
    var newcount = totalcount;
   
    if(totalcount > 0) {

    const countdown = setInterval(function() {
          totalcount--
          displayTime(totalcount);
          if(totalcount <=0 || totalcount < 1) {
            clearInterval(countdown);
        }
      },1000)

     function displayTime(second) {
        const sec = second % 60;
        //console.log(sec);
        const min = Math.floor((second / 60) % 60);
        //console.log(min);
        const hr = Math.floor(second / (60*60));
        //console.log(hr);
        dtimer.innerHTML = `${hr<10 ? '0' : " "}${hr} &nbsp &nbsp &nbsp &nbsp &nbsp  :${min<10 ? '0' : " "}${min} &nbsp &nbsp &nbsp &nbsp &nbsp :${sec<10 ? '0' : " "}${sec} &nbsp &nbsp &nbsp &nbsp &nbsp `;
     }
    
     var progress = setInterval(function(){
         newcount -=5
         var percen = 100 - (Math.round((newcount * 100) /totalcount2))

       color.style.width = `${percen}%`
       percent.textContent =`${percen}%`

        if(newcount < 0){

             color.style.width = `0`
             percent.textContent =`0%`
             clearInterval(progress)

            }
            
         },5000)
    }  
})


