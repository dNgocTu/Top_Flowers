$(document).ready(function(){

    let removeButton = document.getElementsByClassName("fa-trash");
    for(let i = 0; i < removeButton.length; i++){
        let btn = removeButton[i];
        btn.addEventListener("click", removeCartItem)
    }
    //Ham removeCartItem la xoa di 1 san pham trong kho
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
                            <div style="padding-top:5%">${title} </div>
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

        
        //Bat su kien click vao anh nho thi hien anh lon

        let smallImg = document.querySelectorAll(".small-img > li > img");
        for(let i of smallImg)
        {
            i.addEventListener("click", function(){
                let main = document.getElementById("main");
                main.src = i.src;
            })
        }
        let buyBtn = document.getElementById("buy-btn");
        buyBtn.addEventListener("click", function(){
            let inputBtn = document.getElementById("input-btn");
             // Kiem tra san pham la so duong
            if(inputBtn.value <= 0)
                inputBtn.classList.add("change")
            else 
                {
                   //San pham thoa man yeu cau la so duong
                    inputBtn.classList.remove("change")
                    document.getElementById("modal-container").classList.add("show");
                }   
            document.getElementById("btn-close").addEventListener("click",function(){
                document.getElementById("modal-container").classList.remove("show");            
            }) 
        document.getElementById("product-name").innerText = document.getElementById("name").innerText;
        document.getElementById("product-price").innerText = document.getElementById("money").innerText + "VND";
        document.getElementById("product-amount").innerText = document.getElementById("input-btn").value;     
        document.getElementById("total").innerText = document.getElementById("input-btn").value * Number.parseInt(document.getElementById("money").innerText, 10) + ".000VND" ;     
    })
        document.getElementById("modal-container").addEventListener("click", function(e){
            if(!document.getElementById("modal").contains(e.target))
                document.getElementById("modal-container").classList.remove("show"); 
        })
        document.getElementById("pay").addEventListener("click",function(){
            alert("Bạn đã thanh toán thành công!")
            document.getElementById("modal-container").classList.remove("show"); 
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
