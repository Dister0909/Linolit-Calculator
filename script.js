let tg = window.Telegram.WebApp;
let sendData = "";

let area = document.getElementById('area').value;
let thickness = document.getElementById('thickness').value;
let price_stone = document.getElementById('price_stone').value;
let price_primer = document.getElementById('price_primer').value;

let volume = area * thickness; 
let mass_stone = volume * 778.29; // +
let mass_primer = volume * 62.6; // +
        
let cost_stone = mass_stone * price_stone; // +
let cost_primer = mass_primer * price_primer; // +
let total_cost = cost_stone + cost_primer; // +

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.MainButton.setText("Рассчитать");
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    sendData = mass_stone + "$" + mass_primer + "$" + cost_stone + "$" + cost_primer + "$" + total_cost;

    tg.sendData(sendData);
});