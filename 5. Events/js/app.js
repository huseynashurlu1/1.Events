//  var input = document.getElementById('inp');
//  var input = document.querySelector('#inp');
//  var icon = document.getElementById('icon');

//  function Type() {
//      if(input.type==="password") {
//         input.type="text";
//          icon.className = "fa-solid fa-eye-slash";
//      }
//      else{
//          input.type = "password"
//         icon.className = "fa-solid fa-eye"
//      }
//  }

// // // preventDefault()

// // var tag = document.getElementById('tag');

// // function Click(e){
// //     e.preventDefault();
// // }
    

// // // contextMenu

// // window.oncontextmenu = function(e) {
// //     e.preventDefault();
// // }

// // var btn = document.getElementById('btn')

// // btn.onclick = function(e){
// //     e.preventDefault();
// // }

// // var length = document.getElementById('length');
// // var input = document.getElementById('sms');
// // var smsCount = document.getElementById('sms-count');
// // var times = 0;
// // // keypress / keyup / keydown

// // function Handle() {
// //     length.innerHTML = input.value.length;
// //     if(input.value.length > 60) {
// //         times++;
// //         smsCount.innerHTML = times
// //     }
// // }

// var count = 0
// var times = document.getElementById('times')
// window.onkeyup = function(e) {
//     if(e.keyCode===18) { 
//       document.body.style.backgroundColor = 'red'
//     }
//     else if(e.keyCode===13) {
//       document.body.style.backgroundColor = 'green'
//     }
// }

// function myFunction(event) {
//     var err = document.getElementById('err')
//     var x = event.getModifierState("CapsLock");
//     if(x===true) {
//         err.innerHTML = "Caps Lock is ON";
//         err.style.opacity = '1';
//     }
//     else{
//         err.style.opacity = '0';
//     }
  
// }

// // function myFunction(event) {
// //     var x = event.getModifierState("CapsLock");
// //     document.getElementById("demo").innerHTML = "Caps Lock activated: " + x;
// //   }


function ShowPage()  {
    document.getElementById('site').style.opacity = '1'
    document.getElementById('loader').style.opacity = '0'
}

setTimeout(ShowPage,5000)
