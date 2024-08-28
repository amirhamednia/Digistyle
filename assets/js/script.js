let male = document.getElementById("male");
let maleImages = document.getElementById("maleImages");

let female = document.getElementById("female");
let femaleImages = document.getElementById("femaleImages");

let child = document.getElementById("child");
let childmaleImages = document.getElementById("childImages");

let beauty = document.getElementById("beauty");
let beautyImages = document.getElementById("beautyImages");

$("#male").on("click", (maleEvent) => {
    $("#male").addClass("border-bottom-black");
    $("#maleImages").addClass("d-block");
    $("#maleImages").removeClass("d-none");

    $("#female").removeClass("border-bottom-black");
    $("#femaleImages").removeClass("d-block");

    $("#child").removeClass("border-bottom-black");
    $("#childImages").removeClass("d-block");

    $("#beauty").removeClass("border-bottom-black");
    $("#beautyImages").removeClass("d-block")
});

$("#female").on("click", (femaleEvent) => {
    $("#male").removeClass("border-bottom-black");
    $("#maleImages").removeClass("d-block");
    $("#maleImages").addClass("d-none");

    $("#female").addClass("border-bottom-black");
    $("#femaleImages").addClass("d-block");

    $("#child").removeClass("border-bottom-black");
    $("#childImages").removeClass("d-block");

    $("#beauty").removeClass("border-bottom-black");
    $("#beautyImages").removeClass("d-block")
});

$("#child").on("click", (childEvent) => {
    $("#male").removeClass("border-bottom-black");
    $("#maleImages").removeClass("d-block");
    $("#maleImages").addClass("d-none");

    $("#female").removeClass("border-bottom-black");
    $("#femaleImages").removeClass("d-block");

    $("#child").addClass("border-bottom-black");
    $("#childImages").addClass("d-block");

    $("#beauty").removeClass("border-bottom-black");
    $("#beautyImages").removeClass("d-block")
});

$("#beauty").on("click", (beautyEvent) => {
    $("#male").removeClass("border-bottom-black");
    $("#maleImages").removeClass("d-block");
    $("#maleImages").addClass("d-none");

    $("#female").removeClass("border-bottom-black");
    $("#femaleImages").removeClass("d-block");

    $("#child").removeClass("border-bottom-black");
    $("#childImages").removeClass("d-block");

    $("#beauty").addClass("border-bottom-black");
    $("#beautyImages").addClass("d-block")
});