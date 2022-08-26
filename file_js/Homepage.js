$(document).ready(function() {
    setInterval(function(){

    $("#photoShow").animate({marginLeft: "-100%"}, 1000).delay(3000);
    
    $("#photoShow").animate({marginLeft: "-200%"}, 1000).delay(3000);
    
    $("#photoShow").animate({marginLeft: "-300%"}, 1000).delay(3000);

    $("#photoShow").animate({marginLeft: "0px"}, 1000).delay(3000);
    
},  1000);
    //Khi click vao icon thung rac thi se xoa cac item da dat hang
    let removeButton = document.getElementsByClassName("fa-trash");
    for(let i = 0; i < removeButton.length; i++){
        let btn = removeButton[i];
        btn.addEventListener("click", removeCartItem)
    }
    //Ham  xoa di 1 san pham trong kho
    function removeCartItem(event){
        event.target.parentElement.parentElement.remove();
    }
    //Add 1 san pham vao gio hang
    let addCart = document.getElementsByClassName("btn");
    for(let i = 0; i < addCart.length; i++)
    {
        let addBtn = addCart[i];
        addBtn.addEventListener("click", function(){
            let shopProduct = this.parentElement.parentElement;
            let title = shopProduct.parentElement.getElementsByClassName("name-item")[0].innerText;
            let price = shopProduct.parentElement.getElementsByClassName("money")[0].innerHTML;
            let productImg = document.getElementsByClassName("contentImg")[i].src;
            //Goi ham them san pham vao kho
            addProduct(productImg, title, price);
        })
    }
    //Ham them san pham vao kho
    function addProduct(productImg, title, price){
        let cartShop = document.createElement("div");
        cartShop.classList.add("flex");
        let cartItem = document.getElementsByClassName("container")[0]
        var cartBoxContent = `
                            <div><img src="${productImg}" alt="picture" ></div>
                            <div class="title" style="padding-top:5%">${title} </div>
                            <div style="padding-top:5%">${price}</div>
                            <div style="padding-top:5%"><i class="fa-solid fa-trash"></i></div>       `;
        cartShop.innerHTML = cartBoxContent;
        cartItem.append(cartShop);
        cartShop.getElementsByClassName("fa-trash")[0].addEventListener("click", removeCartItem);
        }
        //JS nut scroll top
        $(".scroll-top-btn").fadeOut();
        $(window).scroll(function(){
            if($(this).scrollTop()){
                $(".scroll-top-btn").fadeIn();
            }
            else{
                $(".scroll-top-btn").fadeOut();
            }
        })
        $(".scroll-top-btn").click(function(){
            $("html, body").animate({scrollTop:0}, 1000)
        })
        //Khi scroll thi chuyen  cai menu thanh flex de chay theo trang
        window.addEventListener("scroll", function(){
            let nav = document.querySelector("ul.menu");
            nav.classList.toggle("fixed", this.scrollY > 100);
        })
        //Chat messenger
        $("#close-chat").click(function(){
            $("#chat-box .box").css("display", "none");
        })
        $("#fb-btn").click(function(){
            $("#chat-box .box").css("display", "block");
        })
        $("#chat-box button").click(function(){
            alert("Đã gửi thành công")
            location.reload();
        })

})
