'use strict';
var myDevices = [];
var Devices = function (deviceName, quantity, price, category) {
    this.deviceName = deviceName;
    this.quantity = quantity;
    this.price = price;
    this.category = category;
    myDevices.push(this);
};
Devices.prototype.calPrice = function () {
    this.price = this.quantity * random();
}
function addToLocalStorage() {
    var local = JSON.stringify(devicesArray);
    localStorage.setItem('devices', local);
}
var devicesArray = JSON.parse(localStorage.getItem('devices')) || [];
console.log(myDevices);
var form = document.getElementById(myForm);
var button = document.getElementById(submit);
form.addEventListener('click', function (event) {
    if (event.target.id === button) {
        var name = form.names.value;
        var quantity = form.quantity.value;
        localStorage.setItem('devices', JSON.stringify(devicesArray));
    }
});
function random() {
    return Math.floor(Math.random() * (750 - 350 + 1)) + 350;
}

function renderTable(){
    for(var i=0;i<devicesArray.length;i++){
        var row=document.createElement('tr');
        var cloumn1= document.createElement('td');
        var cloumn2= document.createElement('td');
        var cloumn3= document.createElement('td');
        var cloumn4= document.createElement('td');
        cloumn1.textContent=myDevices.deviceName;
        cloumn2.textContent=myDevices.quantity;
        cloumn3.textContent=myDevices.price;
        cloumn4.textContent=myDevices.category;


    }
}