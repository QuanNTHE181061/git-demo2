/*let a=4;
let b=5;
let c=a+b;
console.log(c);
const j="Hello";*/
 
//alert("Hello"); /*thông báo*/
//confirm("Are you sure ?") 
//let g=prompt("What is your name");
//console.log(g);

//dom traversal
//chọn class
const heading=document.getElementsByClassName('heading');
//console.log(heading);
const heading1=document.getElementById('h1');
//console.log(heading1);
const headings=document.querySelector('.heading');


//add element
const body=document.querySelector('body');
body.append('Hello World','World','Hi');   //thêm vào phần cuối element đã lựa chọn

//tạo element

const newDiv=document.createElement('div');
//newDiv.innerText='Hello World'
//newDiv.textContent='Hello world'
//newDiv.innerHTML="<b>Hello World</b>"; //công cụ mạnh nhưng nguy hiểm
/*
const bold=document.createElement('b');
bold.innerText="Hello world";
newDiv.append(bold);
body.append(newDiv)
*/

//Xoá Elements
const para2=document.getElementById('para2');
//para2.remove();
//para2.removeChild(); xoá các phần tử bên trong
//Chỉnh sửa thuộc tính
//para2.setAttribute('onclick','alert("Hello")');
//para2.setAttribute('id','p5');

//para2.classList.remove('paragraph')
//para2.classList.toggle('paragraph');


para2.style.color='red';
para2.style.backgroundColor='red';