$(function(){
    // 样式修改
    $("#quickChoose li").eq(0).css("border-left","none");
    $("#quickChoose li").eq(3).css("border-left","none");
    $("#quickChoose li").eq(3).css("border-bottom","none");
    $("#quickChoose li").eq(4).css("border-bottom","none");
    $("#quickChoose li").eq(5).css("border-bottom","none");
    $(".sbAd").eq(3).css("margin-left","0");
    $(".sbAd").eq(7).css("margin-left","0");
    $(".table3 li").eq(4).css("border-right","none");
    $(".col-links").eq(0).css("border-left","100px");
    
    $(".box2Top a").hover(function () {
            // over
            $(this).children("img").attr("src","../Pictures/进入箭头小选中.png");
        }, function () {
            // out
            $(this).children("img").attr("src","../Pictures/进入箭头小.png");
        }
    );


    $("#search").click(function(){
        $(this).css("border-width","1px");
    })

    $("#top2").mouseover(function () { 
        $("#top2>img").attr("src", "../Pictures/购物车选中.png");
        $("#top2>span").css("color","#ff6700")
        $("#top2>div").css("display","block")
    });
    $("#top2").mouseout(function () { 
        $("#top2>div").css("display","none")
        $("#top2>img").attr("src", "../Pictures/购物车.png");
        $("#top2>span").css("color","#b0b0b0")
    });
    $("#submit").mouseover(function () { 
        $(this).css({
                "background-image":"url('../Pictures/放大镜选中.png')",
                "background-size":"20px",
                "border":"gray solid 1px",
            })
        $("#search").css({

            "border":"gray solid 1px",
            "border-right":""
        })
    });
    $("#submit").mouseout(function () { 
        $(this).css({
                "background-image":"url('../Pictures/放大镜.png')",
                "background-size":"20px",
                "border":""
            })
        $("#search").css({
    
            "border":""
        })
    });
    $("#search").mouseover(function () { 
        $(this).css({
                
                "border":"gray solid 1px",
                "border-right":""
            })
        $("#submit").css({
            
            "border":"gray solid 1px"
        })    
    });
    $("#search").mouseout(function () { 
        $(this).css({
                "border":""
            })
        $("#submit").css({
        
            "border":""
        })    
    });
    
    var index=0;
    //初始状态定义
    $(".ADs").eq(index).show().siblings('div').hide();
    $("#slide ul li").eq(index).css("background-color","transparent").siblings("li").css("background-color","#5f5750");
    //定义计时器
    var timer=setInterval(function(){
        if($(".ADs").length-1==index){
            index=0;
        }else{
            index++;
        }
        $(".ADs").eq(index).show().siblings('div').hide();
        $("#slide ul li").eq(index).css("background-color","transparent").siblings("li").css("background-color","#5f5750");

    },3000);
    $("#slide ul li").hover(function () {
            // over
            clearInterval(timer);
            $(this).css("background-color","transparent");
        }, function () {
            // out
            let index=$(this).index();
            $(this).css("background-color","#5f5750");
        }
    );
    // 设置左右按钮的聚焦鼠标事件
    $("#prev").mouseover(function () { 
        $(this).attr("src","../Pictures/向左箭头选中.png");
        $(this).css("backgroundColor","rgb(0,0,0,0.5)");
    });
    $("#prev").mouseout(function () { 
        $(this).attr("src","../Pictures/向左箭头.png");
        $(this).css("backgroundColor","");
    });
    $("#next").mouseover(function () { 
        $(this).attr("src","../Pictures/向右箭头选中.png");
        $(this).css("backgroundColor","rgb(0,0,0,0.5)");
    });
    $("#next").mouseout(function () { 
        $(this).attr("src","../Pictures/向右箭头.png");
        $(this).css("backgroundColor","");
    });
    // 向左遍历广告轮播图
    $("#prev").click(function(){
        if(0==index){
            index=$(".ADs").length-1;
        }else{
            index--;
        }
        $(".ADs").eq(index).show().siblings('div').hide();
    })
    // 向右遍历广告轮播图
    $("#next").click(function(){
        if($(".ADs").length-1==index){
            index=0;
        }else{
            index++;
        }
        $(".ADs").eq(index).show().siblings('div').hide();
    })
    var flag=0;
    // 广告下方的按钮选图
    $("#slide ul li").click(function(){
        let index=$(this).index();
        $(".ADs").eq(index).show().siblings('div').hide();
        $(this).css("background-color","transparent").siblings("li").css("background-color","#5f5750");
        
    })
    // 鼠标移入slide块，触发广告停止轮播，离开后继续
    $("#slide").mouseover(function(){
        clearInterval(timer);
    })
    $("#slide").mouseout(function(){
        timer=setInterval(function(){
            if($(".ADs").length-1==index){
                index=0;
            }else{
                index++;
            }
            $(".ADs").eq(index).show().siblings('div').hide();
            $("#slide ul li").eq(index).css("background-color","transparent").siblings("li").css("background-color","#5f5750");
        },3000);
    })
    


    $("#table1 li").hover(function () {
            // over
            let count=$(this).index();
            $("#table1").nextAll("div").eq(count).show().siblings("div").hide();
            // console.log("触发！"+count);
        }, function () {
            // out
            $("#table1").nextAll("div").hide();
        }
    );
    $("#table1").nextAll("div").hover(function () {
        // over
        $(this).show();
    }, function () {
        // out
        $(this).hide();
    }
);
    $("#table2>ul li").hover(function () {
            // over
            let index=$(this).index();
            // console.log(index);
            $("#table2Info").css({"z-index":"7"});
            $(".info").eq(index).show().siblings("div").hide();
        }, function () {
            // out
            $(".info").hide();
        }
    );
    $(".info").hover(function () {
            // over
            $(this).show();
        }, function () {
            // out
            $(this).hide();
            $("#table2Info").css({"z-index":"4"});

        }
    );
    $("#quickChoose li").hover(function () {
            // over
            let count=$(this).index();
            // console.log(count);
            $("#quickChoose a img").eq(count).attr("src","../Pictures/choose"+(count+1)+"2.png");
            $("#quickChoose a").eq(count).css("color","white");
        }, function () {
            // out
            let count=$(this).index();
            $("#quickChoose a img").eq(count).attr("src","../Pictures/choose"+(count+1)+".png");
            $("#quickChoose a").eq(count).css("color","#b0b0b0");
        }
    );
});
