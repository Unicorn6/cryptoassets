web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi=JSON.parse('[{"constant":true,"inputs":[],"name":"carno","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nme","type":"string"},{"name":"ap","type":"uint8"}],"name":"adding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"look","outputs":[{"name":"_name","type":"string"},{"name":"qw","type":"uint8"},{"name":"add","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint8"}],"name":"carview","outputs":[{"name":"carn","type":"string"},{"name":"own","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_car_name","type":"string"},{"name":"_eng_no","type":"uint8"}],"name":"caradd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"carnoview","outputs":[{"name":"ccd","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"carid","type":"uint8"},{"name":"trans","type":"address"}],"name":"transaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
Vcontract=web3.eth.contract(abi);
Conin=Vcontract.at('0x6d17b0cb1997399903b744d6f117b4997940a2c0');
function adding_func()
{
    name=$('#First_Name').val();
    age=$('#num').val();
    Conin.adding(name,age,{from: web3.eth.accounts[2]});
    $('#First_Name').html("Added");
}