<template>
    <footer>
        <p>Fake Store</p>
        <form action="#">
        <div class="topic">Subscribe us
         <input type="text" placeholder="   Enter email address">
         <button class="button">Send</button>
        </div>
       </form>

    </footer>    
</template>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  font-family: 'Poppins',sans-serif;
  text-decoration: none;
}
footer{
  width: 100%;
  bottom: 0;
  left: 0;
  background: rgb(221, 94, 40);
  text-align: center;
  color:white;
  max-height: 1350px;
  margin: auto;
  padding: 20px;
}
p{
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 20px;
    color:rgb(239, 51, 18);
    text-shadow: rgb(245, 243, 242) 1px 0 10px;;
}
input{
    margin-left: 20px;
}
.button{
    background-color:rgb(239, 51, 18);
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
}
@media (max-width:1100px) {
  footer .content .middle{
    padding-left: 50px;
  }
}
@media (max-width:950px){
  footer .content .box{
    width: 50%;
  }
  .content .right{
    margin-top: 40px;
  }
}
@media (max-width:560px){
  footer{
    position: relative;
  }
 
}
</style>