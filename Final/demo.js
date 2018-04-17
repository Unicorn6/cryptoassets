web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi=JSON.parse('[{"constant":false,"inputs":[{"name":"us","type":"uint256"},{"name":"str","type":"string"}],"name":"remove_car","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_pic","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adduser1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"view_user_name","outputs":[{"name":"nam","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"view_user_totlist","outputs":[{"name":"nam","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"on","type":"uint256"},{"name":"str","type":"string"}],"name":"validate_owner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"car_owned","outputs":[{"name":"nn","type":"uint256"},{"name":"m","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar1","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"view_user_adr","outputs":[{"name":"nam","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_owner","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totuser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_model","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"adduser2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"},{"name":"t","type":"uint256"}],"name":"view_car_owned","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar0","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"find_user_id","outputs":[{"name":"n","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"s","type":"uint256"}],"name":"validate_user_id","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"validate_user","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"carno","type":"string"},{"name":"sad","type":"uint256"}],"name":"transfer_car","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"validate_car","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"n","type":"uint256"}],"name":"view_user_totcar","outputs":[{"name":"nam","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"compareStrings","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"str","type":"string"}],"name":"view_car_yr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"addcar2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sad","type":"uint256"}],"name":"add_carno","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"adduser0","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
VotingContract=web3.eth.contract(abi);
contractInstance=VotingContract.at('0x63d19cfb1d0f1a179c425824c6ef9b788bf76f40');
var myid;
function verify_login()
{
     var adb=$("#wadd").val();

  if(contractInstance.validate_user.call(adb,{from: web3.eth.accounts[0]}))
   {
      var myid=contractInstance.find_user_id.call(adb,{from: web3.eth.accounts[0]}).toString();   
    
        url = 'file:///C:/Users/Tom%20M%20Thomas/Desktop/cryptoassets/user.html?idd=' + encodeURIComponent(myid);
        document.location.href = url;
   }
    else
    { window.alert("Invalid User");
      $("#tried").html("The Address Provided is not in our System");}
}

function set_user(id)
{
   myid=id;
   nme=contractInstance.view_user_name.call(myid,{from: web3.eth.accounts[0]}).toString();
   $("#myname").html(nme);
   
   $("#myid").html("User Id::"+myid);
   
   
     find_my_cars(myid);
}
function find_my_cars(myid)
{
  it=contractInstance.view_user_totcar.call(myid,{from: web3.eth.accounts[0]}).toString();
   it="Cars Owned -> "+it;
   $("#carsow").html(it);
  i=1;
  j=contractInstance.view_user_totlist.call(myid,{from: web3.eth.accounts[0]}).toString();
  j=parseInt(j);
   for(k=0;k<j;k++)
   {
   str=contractInstance.view_car_owned.call(myid,k,{from: web3.eth.accounts[0]}).toString();

    if(contractInstance.validate_car.call(str,{from: web3.eth.accounts[0]}))
    { t=toString(i);
      if(i==1)
      {
        x=str;
      m="<button class=\"button is-link\" onclick=\"display(x)\">"+x+"</button>";
      $("#car1").html(m);
      }
      else if(i==2)
      {y=str;
      m="<button class=\"button is-link\" onclick=\"display(y)\">"+y+"</button>";
      $("#car2").html(m);}
      else 
      {z=str;
      m="<button class=\"button is-link\" onclick=\"display(z)\">"+z+"</button>";
      $("#car3").html(m);}

      i++;
    }
  }
}

function display(num){
 pict=contractInstance.view_car_pic.call(num,{from: web3.eth.accounts[0]}).toString();
  var picture="<img src=\""+pict+"\" width=\"300\"/>";
  $("#pic").html(picture);
  name=contractInstance.view_car_model.call(num,{from: web3.eth.accounts[0]}).toString();
  var nme="<strong>"+name+"</strong>";
  $("#model").html(nme);
  yrs=contractInstance.view_car_yr.call(num,{from: web3.eth.accounts[0]}).toString();
  yrs="Year Of Manufacturing - "+yrs;
  $("#manu").html(yrs);

}
function transaction()
{
  carreg=$("#carid").val();
  user=$("#userid").val();
  if((contractInstance.validate_owner.call(myid,carreg,{from: web3.eth.accounts[0]}))&&(contractInstance.validate_user_id.call(user,{from: web3.eth.accounts[0]})))
  {
    contractInstance.remove_car(myid,carreg,{from: web3.eth.accounts[0]});
    contractInstance.transfer_car(carreg,user,{from: web3.eth.accounts[0]});
    contractInstance.add_carno(user,{from: web3.eth.accounts[0]});
    window.alert("Transaction Successfull");
    find_my_cars(myid);
  }
  else
   window.alert("Access Denied,Transaction Failed");
}
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