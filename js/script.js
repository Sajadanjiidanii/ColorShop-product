const $ = document;

const NewProducts = $.getElementById("NewProducts");
const bestSellerItem = $.getElementById("bestsellerItem");
const otherItem = $.getElementById("otherItem");

const categorys = [
        { categoryName : "Colors", name : "رنگ هنری قهوه ای" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_1.png" },
        { categoryName : "Colors", name : "رنگ هنری صورتی" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_2.png" },
        { categoryName : "Colors", name : "رنگ هنری سبز" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_3.png" },
        { categoryName : "Colors", name : "رنگ هنری آبی" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_4.png" },

        { categoryName : "Dishes", name : "گلدان بتنی دایره ای" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_1.png" },
        { categoryName : "Dishes", name : "گلدان بتنی شیش ضلعی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_2.png" },
        { categoryName : "Dishes", name : "گلدان بتنی شیش ضلعی سه بعدی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_3.png" },
        { categoryName : "Dishes", name : "گلدان بتنی ستاره ای سه بعدی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_4.png" },

        { categoryName : "Epoxys", name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_1.png" },
        { categoryName : "Epoxys", name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_2.png" },
        { categoryName : "Epoxys", name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_3.png" },
        { categoryName : "Epoxys", name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_4.png" },
 
        { categoryName : "Sprays", name : "اسپری نارنجی" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_1.png" },
        { categoryName : "Sprays", name : "اسپری زرد" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_2.png" },
        { categoryName : "Sprays", name : "اسپری قرمز" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_3.png" },
        { categoryName : "Sprays", name : "اسپری صورتی" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_4.png" },

        { categoryName : "Supplies", name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_1.png" },
        { categoryName : "Supplies", name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_2.png" },
        { categoryName : "Supplies", name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_3.png" },
        { categoryName : "Supplies", name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_4.png" },
 
        { categoryName : "Tools", name : "پالت" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_1.png" },
        { categoryName : "Tools", name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_2.png" },
        { categoryName : "Tools", name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_3.png" },
        { categoryName : "Tools", name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_4.png" },
];

/// start Chack Href Page ///
window.addEventListener("load",function(){
    let locationSearch = new URLSearchParams(location.search);
    let categoryName = locationSearch.get("Product");
    categorys.forEach(function(category){
        if( categoryName == category.categoryName ){
            appendProducts(category);
        }
    });
    
});
/// end Chack Href Page ///

/// start append products in html ///

function appendProducts(category){

    NewProducts.insertAdjacentHTML("beforeend" , "<li><div><img class=\"ProductsImg\" src=\""+ category.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ category.name +"</p><p class=\"price\">"+ category.pricy +" تومان</p></div></li>");
    bestSellerItem.insertAdjacentHTML("beforeend" , "<li><div><img class=\"ProductsImg\" src=\""+ category.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ category.name +"</p><p class=\"price\">"+ category.pricy +" تومان</p></div></li>");
    otherItem.insertAdjacentHTML("beforeend" , "<li><div><img class=\"ProductsImg\" src=\""+ category.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ category.name +"</p><p class=\"price\">"+ category.pricy +" تومان</p></div></li>");
    otherItem.insertAdjacentHTML("beforeend" , "<li><div><img class=\"ProductsImg\" src=\""+ category.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ category.name +"</p><p class=\"price\">"+ category.pricy +" تومان</p></div></li>");

}

/// end append products in html ///

/// start create slider ///
const slider = $.getElementById("slider-img");
let sliderImgs = ["imgs/slider img/Paint-Cans.jpg","imgs/slider img/Paint-Cans1.jpg","imgs/slider img/Paint-Cans2.jpg","imgs/slider img/Paint-Cans3.jpg","imgs/slider img/Paint-Cans4.jpg","imgs/slider img/Paint-Cans5.jpg",];
setInterval(function(){
    slider.src = sliderImgs[0];
    sliderImgs.push(sliderImgs[0]);
    sliderImgs.splice(0,1);
},5000);
/// end create slider ///

/// sign in chacke ///

const loginSignup = $.querySelector("#login-signup");
const logIn = $.querySelector("#login");
const signUp = $.querySelector("#signup");

function exitAccount(){
    userAccount.style.display = "none";
    exitAccountBtn.style.display = "none";
    logIn.style.display = "inline";
    signUp.style.display = "inline";
}

function signChack(){
    let isName = localStorage.getItem("Name");
    let userName = JSON.parse(localStorage.getItem("Name"));

    if( isName ){
        logIn.style.display = "none";
        signUp.style.display = "none";
        loginSignup.insertAdjacentHTML("afterbegin","<span id=\"userAccount\">" + userName + "</span><span id=\"exitAccountBtn\"> / خروج </span>");
        const userAccount = $.querySelector("userAccount");
        const exitAccountBtn = $.querySelector("#exitAccountBtn");
        exitAccountBtn.addEventListener("click",exitAccount);
    }
};

window.addEventListener("load",signChack);
