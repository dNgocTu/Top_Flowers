$(document).ready(function(){
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
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let address = document.getElementById("address");
        let phoneNum = document.getElementById("phoneNum");
        let title = document.getElementById("title");
        let sub = document.getElementById("sub");
        document.getElementById("send-text-btn").addEventListener("click", function(){
            if(name.value != "" && email.value != "" && address.value != "" && phoneNum.value != "" && title.value != "" && sub.value != "" ) 
            {
                alert("Bạn đã gửi thành công");
                location.reload();
            }
            else alert("Vui lòng nhập đầy đủ thông tin");
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
