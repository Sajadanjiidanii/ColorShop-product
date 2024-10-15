const $ = document;

const NewProducts = $.getElementById("NewProducts");
const bestSellerItem = $.getElementById("bestsellerItem");
const otherItem = $.getElementById("otherItem");

const categorys = [
        { categorySearch : "Colors", categoryName : "رنگ" , name : "رنگ هنری قهوه ای" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_1.png" },
        { categorySearch : "Colors", categoryName : "رنگ" , name : "رنگ هنری صورتی" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_2.png" },
        { categorySearch : "Colors", categoryName : "رنگ" , name : "رنگ هنری سبز" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_3.png" },
        { categorySearch : "Colors", categoryName : "رنگ" , name : "رنگ هنری آبی" , pricy : 120 , img : "imgs/New Products/Colors Products/Product_4.png" },

        { categorySearch : "Dishes", categoryName : "ظروف خام" , name : "گلدان بتنی دایره ای" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_1.png" },
        { categorySearch : "Dishes", categoryName : "ظروف خام" , name : "گلدان بتنی شیش ضلعی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_2.png" },
        { categorySearch : "Dishes", categoryName : "ظروف خام" , name : "گلدان بتنی شیش ضلعی سه بعدی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_3.png" },
        { categorySearch : "Dishes", categoryName : "ظروف خام" , name : "گلدان بتنی ستاره ای سه بعدی" , pricy : 200 , img : "imgs/New Products/Dishes Products/Product_4.png" },

        { categorySearch : "Epoxys", categoryName : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_1.png" },
        { categorySearch : "Epoxys", categoryName : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_2.png" },
        { categorySearch : "Epoxys", categoryName : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_3.png" },
        { categorySearch : "Epoxys", categoryName : "محصولات اپوکسی" , name : "جوهر الکلی" , pricy : 190 , img : "imgs/New Products/Epoxys Products/Product_4.png" },
 
        { categorySearch : "Sprays", categoryName : "اسپری" , name : "اسپری نارنجی" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_1.png" },
        { categorySearch : "Sprays", categoryName : "اسپری" , name : "اسپری زرد" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_2.png" },
        { categorySearch : "Sprays", categoryName : "اسپری" , name : "اسپری قرمز" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_3.png" },
        { categorySearch : "Sprays", categoryName : "اسپری" , name : "اسپری صورتی" , pricy : 150 , img : "imgs/New Products/Sprays Products/Product_4.png" },

        { categorySearch : "Supplies", categoryName : "لوازم هنری" , name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_1.png" },
        { categorySearch : "Supplies", categoryName : "لوازم هنری" , name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_2.png" },
        { categorySearch : "Supplies", categoryName : "لوازم هنری" , name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_3.png" },
        { categorySearch : "Supplies", categoryName : "لوازم هنری" , name : "خمیر شمع" , pricy : 100 , img : "imgs/New Products/Supplies Products/Product_4.png" },
 
        { categorySearch : "Tools", categoryName : "ابزار و لوازم" , name : "پالت" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_1.png" },
        { categorySearch : "Tools", categoryName : "ابزار و لوازم" , name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_2.png" },
        { categorySearch : "Tools", categoryName : "ابزار و لوازم" , name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_3.png" },
        { categorySearch : "Tools", categoryName : "ابزار و لوازم" , name : "قلمو" , pricy : 165 , img : "imgs/New Products/Tools Products/Product_4.png" },
];

/// start Chack Href Page ///
window.addEventListener("load",function(){
    let locationSearch = new URLSearchParams(location.search);
    let categoryName = locationSearch.get("Product");
    categorys.forEach(function(category){
        if( categoryName == category.categorySearch ){
            appendProducts(category);
        }
    });
    
});
/// end Chack Href Page ///

/// start append products in html ///

function appendProducts(item){

    NewProducts.insertAdjacentHTML("beforeend" , "<li><div id="+ item.categoryName +" onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ item.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ item.name +"</p><p class=\"price\">"+ item.pricy +" تومان</p></div></li>");
    bestSellerItem.insertAdjacentHTML("beforeend" , "<li><div id="+ item.categoryName +" onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ item.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ item.name +"</p><p class=\"price\">"+ item.pricy +" تومان</p></div></li>");
    otherItem.insertAdjacentHTML("beforeend" , "<li><div id="+ item.categoryName +" onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ item.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ item.name +"</p><p class=\"price\">"+ item.pricy +" تومان</p></div></li>");
    otherItem.insertAdjacentHTML("beforeend" , "<li><div id="+ item.categoryName +" onclick=\"goCart(event)\"><img class=\"ProductsImg\" src=\""+ item.img +"\" alt=\"ProductsImg\"><p class=\"ProductsName\">"+ item.name +"</p><p class=\"price\">"+ item.pricy +" تومان</p></div></li>");

}

/// end append products in html ///

function goCart(event){
    let parentTarget = event.target.parentElement;
    let categoryTarget = parentTarget.id;
    let imgTarget = parentTarget.firstChild.src;
    let nameTarget = parentTarget.firstChild.nextElementSibling.innerHTML;
    let pricyTarget = parentTarget.lastChild.innerHTML;
    localStorage.setItem("productInfo",JSON.stringify({category :  categoryTarget , name : nameTarget , pricy : pricyTarget , img : imgTarget}));
    location.href = "https://sajadanjiidanii.github.io/Purchase-page/";
}

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
    localStorage.setItem("ShowName","No");
}

function signChack(){
    let isName = localStorage.getItem("Name");
    let userName = JSON.parse(localStorage.getItem("Name"));
    let showName = localStorage.getItem("ShowName");

    if( isName ){
        if( showName == "Yes"){
            logIn.style.display = "none";
            signUp.style.display = "none";
            loginSignup.insertAdjacentHTML("afterbegin","<span id=\"userAccount\">" + userName + "</span><span id=\"exitAccountBtn\"> / خروج </span>");
            const userAccount = $.querySelector("userAccount");
            const exitAccountBtn = $.querySelector("#exitAccountBtn");
            exitAccountBtn.addEventListener("click",exitAccount);
        }
    }
};

window.addEventListener("load",signChack);
