web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi=JSON.parse('[{"constant":false,"inputs":[{"name":"us","type":"uint256"},{"name":"str","type":"string"}],"name":"remove_car","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_pic","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adduser1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"on","type":"uint256"},{"name":"str","type":"string"}],"name":"validate_owner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"car_owned","outputs":[{"name":"nn","type":"uint256"},{"name":"m","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_owner","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totuser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_model","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adduser2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"},{"name":"t","type":"uint256"}],"name":"view_car_owned","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar0","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"find_user_id","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"validate_user","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"carno","type":"string"},{"name":"sad","type":"uint256"}],"name":"transfer_car","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"validate_car","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"compareStrings","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_yr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"viewuser","outputs":[{"name":"adr","type":"string"},{"name":"nam","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sad","type":"uint256"}],"name":"add_carno","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"adduser0","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
VotingContract=web3.eth.contract(abi);
contractInstance=VotingContract.at('0xd539227f3aeb2ce83670780e16631a827fe50ab6');

function viewing_car()
{   
    num=$("#carno").val();
    name=contractInstance.view_car_model.call(num,{from: web3.eth.accounts[0]}).toString();
    pict=contractInstance.view_car_pic.call(num,{from: web3.eth.accounts[0]}).toString();
    yrs=contractInstance.view_car_yr.call(num,{from: web3.eth.accounts[0]}).toString();
    ownn=contractInstance.view_car_owner.call(num,{from: web3.eth.accounts[0]}).toString();
    var nme="<strong>"+name+"</strong>";
  var picture="<img src=\""+pict+"\" width=\"600\"/>";
  yrs="Year Of Manufacturing - "+yrs;
  ownn="Owned By::"+ownn;
 $("#pic").html(picture);
  $("#model").html(nme);
  $("#reg").html(num);
  $("#manu").html(yrs);
  $("#owned").html(ownn);

    //$('#First_Name').html("Added");
}