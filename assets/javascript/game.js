var randNum = Math.floor((Math.random() * 188) + 12);
var totalSum = [];
var blue = 0;
var green = 0;
var red = 0;
var yellow = 0;
var orange = 0;
var purple = 0;
var wins = 0;
var loss = 0;
var audioAvengers = new Audio('./assets/audio/avengers.mp3');
var audioSpidey = new Audio('./assets/audio/spidey.mp3');
var audioGroot = new Audio('./assets/audio/groot.mp3');
var audioTony = new Audio('./assets/audio/tony.mp3');
var audioCaptain = new Audio('./assets/audio/captain.mp3');
var audioHulk = new Audio('./assets/audio/hulk.mp3');
var audioStrange = new Audio('./assets/audio/strange.mp3');


// run this loop until blue is different than green, red, yellow, orange, and purple
do {
    blue = Math.floor((Math.random() * 12) + 1);
} while(blue === green || blue === red || blue === yellow || blue === orange || blue === purple);

// run this loop until green is different than blue, red, yellow, orange, and purple
do {
    green = Math.floor((Math.random() * 12) + 1);
} while(green === blue || green === red || green === yellow || green === orange || green === purple);

// run this loop until red is different than blue, green, yellow, orange, and purple
do {
    red = Math.floor((Math.random() * 12) + 1);
} while(red === blue || red === green || red === yellow || red === orange || red === purple);

// run this loop until yellow is different than blue, green, red, orange, and purple
do {
    yellow = Math.floor((Math.random() * 12) + 1);
} while(yellow === blue || yellow === green || yellow === red || yellow === orange || yellow === purple);

// run this loop until orange is different than blue, green, red, yellow, and purple
do {
    orange = Math.floor((Math.random() * 12) + 1);
} while(orange === blue || orange === green || orange === red || orange === yellow || orange === purple);

// run this loop until purple is different than blue, green, red, yellow, and orange
do {
    purple = Math.floor((Math.random() * 12) + 1);
} while(purple === blue || purple === green || purple === red || purple === yellow || purple === orange);

function reset() {
    blue = 0;
    green = 0;
    red = 0;
    yellow = 0;
    orange = 0;
    purple = 0;
    randNum = Math.floor((Math.random() * 188) + 12);
    totalSum = [];
    $("#thanosNum").text(randNum);

    do {
        blue = Math.floor((Math.random() * 12) + 1);
    } while(blue === green || blue === red || blue === yellow || blue === orange || blue === purple);

    do {
        green = Math.floor((Math.random() * 12) + 1);
    } while(green === blue || green === red || green === yellow || green === orange || green === purple);

    do {
        red = Math.floor((Math.random() * 12) + 1);
    } while(red === blue || red === green || red === yellow || red === orange || red === purple);

    do {
        yellow = Math.floor((Math.random() * 12) + 1);
    } while(yellow === blue || yellow === green || yellow === red || yellow === orange || yellow === purple);

    do {
        orange = Math.floor((Math.random() * 12) + 1);
    } while(orange === blue || orange === green || orange === red || orange === yellow || orange === purple);

    do {
        purple = Math.floor((Math.random() * 12) + 1);
    } while(purple === blue || purple === green || purple === red || purple === yellow || purple === orange);
}

function test() {
    var arrayTotal = totalSum.reduce(function(acc, value) {
        return acc + value;
    });
    if(randNum === arrayTotal) {
        wins++;
        alert("You prevented Thanos from obtaining all the Infinity Stones! You live to fight another day.");
        $("#gif").html('<img src="./assets/images/wingif.gif" class="wingif" alt="wingif.gif">');
        reset();
    } else if(randNum < arrayTotal) {
        loss++;
        alert("Thanos has evaporated you into dust.");
        $("#gif").html('<img src="./assets/images/thanos.gif" class="thanosgif" alt="thanos.gif">');
        reset();
    }
}


$(document).ready(function() {

    $("#redBtn").on("click", function() {
        totalSum.push(red);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioSpidey.play();
        test();
        $("#total").text(arrayTotal);
    })
    $("#blueBtn").on("click", function() {
        totalSum.push(blue);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioCaptain.play();
        test();
        $("#total").text(arrayTotal);
    })
    $("#greenBtn").on("click", function() {
        totalSum.push(green);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioHulk.play();
        test();
        $("#total").text(arrayTotal);
    })
    $("#yellowBtn").on("click", function() {
        totalSum.push(yellow);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioStrange.play();
        test();
        $("#total").text(arrayTotal);
    })
    $("#orangeBtn").on("click", function() {
        totalSum.push(orange);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioTony.play();
        test();
        $("#total").text(arrayTotal);
    })
    $("#purpleBtn").on("click", function() {
        totalSum.push(purple);
        var arrayTotal = totalSum.reduce(function(acc, value) {
            return acc + value;
        });
        audioGroot.play();
        test();
        $("#total").text(arrayTotal);
    })
    
    $(".container").on("click", "button", function(){
        $("#wins").text("Wins: " + wins);
        $("#loss").text("Loss: " + loss);
        audioAvengers.play();
    })
    $("#thanosNum").text(randNum);
});