let tg = window.Telegram.WebApp;

let btnSH = document.getElementById("btn");
let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать

let area = document.getElementById("area");
let thickness = document.getElementById("thickness");
let price_stone = document.getElementById("price_stone");
let price_primer = document.getElementById("price_primer");

let sendData = "";

tg.expand();

tg.MainButton.setText("Рассчитать"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#FFFFFF"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 

tg.MainButton.show();

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	sendData = area.value + "$" + thickness.value + "$" + price_stone.value + "$" + price_primer.value + "&";

	tg.sendData(sendData); 
});
