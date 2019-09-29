var ranks = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');
var suits = '♠︎ ♥︎ ♣︎ ♦︎'.split(' ');
var cards = [];
var card;
var container = document.getElementById('container');
var output = document.getElementById('center');
var html = [];
var sum = 0;
var card_1_index;
var card_2_index;
var number_1;
var number_2;
var suitpositions = [
    [
        [0, 0]
    ],
    [
        [0, -1],
        [0, 1, true]
    ],
    [
        [0, -1],
        [0, 0],
        [0, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [0, 0],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [0, -0.5],
        [-1, 0],
        [1, 0],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [0, -0.5],
        [-1, 0],
        [1, 0],
        [0, 0.5, true],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [-1, -1 / 3],
        [1, -1 / 3],
        [0, 0],
        [-1, 1 / 3, true],
        [1, 1 / 3, true],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [-1, -1],
        [1, -1],
        [0, -2 / 3],
        [-1, -1 / 3],
        [1, -1 / 3],
        [-1, 1 / 3, true],
        [1, 1 / 3, true],
        [0, 2 / 3, true],
        [-1, 1, true],
        [1, 1, true]
    ],
    [
        [0, 0]
    ],
    [
        [0, 0]
    ],
    [
        [0, 0]
    ]
];

function creat_array_palycards(array) {
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < ranks.length; j++) {
            card = ranks[j] + suits[i];
            array.push(card);
        }
    }
    return array;
}

function playcard(a) {
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < ranks.length; j++) {
            html[sum] = "";
            if (i == 1 || i == 3) html[sum] += '<div class="card red">';
            else html[sum] += '<div class="card">';
            html[sum] += '<div class="card-suits">'
            for (var x = 0; x <= j; x++) {
                if (suitpositions[j][x][2]) html[sum] += '<div class="card-suit mirrored" style="left:' + (suitpositions[j][x][0] * 100) + '% ; top: ' + (suitpositions[j][x][1] * 100) + '%;">';
                else html[sum] += '<div class="card-suit" style="left:' + (suitpositions[j][x][0] * 100) + '% ; top: ' + (suitpositions[j][x][1] * 100) + '%;">';
                html[sum] += suits[i];
                html[sum] += '</div>'
                if (j > 9) break;
            }
            html[sum] += '</div>'
                //index top start----------
            html[sum] += '<div class="card-topleft">'
            html[sum] += '<div class="card-corner-rank">'
            html[sum] += ranks[j];
            html[sum] += '</div>'
            html[sum] += '<div class="card-corner-suit">'
            html[sum] += suits[i];
            html[sum] += '</div>'
            html[sum] += '</div>'
                //index top end----------
                //index bottom start----------
            html[sum] += '<div class="card-bottomright">'
            html[sum] += '<div class="card-corner-rank">'
            html[sum] += ranks[j];
            html[sum] += '</div>'
            html[sum] += '<div class="card-corner-suit">'
            html[sum] += suits[i];
            html[sum] += '</div>'
            html[sum] += '</div>'
                //index bottom end----------
            html[sum] += '</div>';
            sum++;
        }
    }
    return html[a];
}

function shuffle(arr) {
    var rand;
    var temp;
    var temp_arr = arr;
    for (var i = (temp_arr.length - 1); i > 0; i--) {
        rand = Math.floor(Math.random() * (i));
        temp = temp_arr[i];
        temp_arr[i] = temp_arr[rand];
        temp_arr[rand] = temp;
    }
    return temp_arr;
}

var rand_1 = Math.floor(Math.random() * 52);
var rand_2 = Math.floor(Math.random() * 52);

creat_array_palycards(cards);

shuffle(cards);

card_1_index = cards[rand_1];
card_2_index = cards[rand_2];

cards = [];
creat_array_palycards(cards);

number_1 = cards.indexOf(card_1_index);
number_2 = cards.indexOf(card_2_index);

output.innerHTML += playcard(number_1);
output.innerHTML += playcard(number_2);