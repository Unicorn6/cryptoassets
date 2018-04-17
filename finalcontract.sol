pragma solidity^0.4.0;
contract finalcontract{
    uint public totuser=2;
    struct mapper{
        uint id;
        uint flg;
    }
    mapping(string=>mapper)find;
struct ride{
    string regno;
    string model;
    uint yr;
    string pic;
    uint flg;
    uint owner;
    
}
mapping(string => ride)car;
struct man{
    string adrs;
    string name;
    uint carown;
    uint flg;
    string[] vehicle;
    uint tp;
}
mapping(uint => man)user;
 function finalcontract()public{
     adduser0();
     adduser1();
     adduser2();
     addcar0();
     addcar1();
     addcar2();
 }
function adduser0() public
{
  user[0].adrs="0xe71f31d905824c1e3c46ce2559c57a1879a4acfb";
  user[0].name="AVG Motors";
  user[0].flg=1;
  user[0].carown=0;
  find['0xe71f31d905824c1e3c46ce2559c57a1879a4acfb'].id=0;
  find['0xe71f31d905824c1e3c46ce2559c57a1879a4acfb'].flg=1;
  
}
function adduser1() public
{
  user[1].adrs="0xe81f31d905824c1e3c46ce2559c57a1879a4acfb";
  user[1].name="Gintu";
  user[1].flg=1;
   user[1].carown=0;
  find['0xe81f31d905824c1e3c46ce2559c57a1879a4acfb'].id=1;
  find['0xe81f31d905824c1e3c46ce2559c57a1879a4acfb'].flg=1;
}
function adduser2() public
{
  user[2].adrs="0xe91f31d905824c1e3c46ce2559c57a1879a4acfb";
  user[2].name="Sachu";
  user[2].flg=1;
   user[2].carown=0;
  find['0xe91f31d905824c1e3c46ce2559c57a1879a4acfb'].id=2;
  find['0xe91f31d905824c1e3c46ce2559c57a1879a4acfb'].flg=1;
}

function viewuser(uint n) view public returns(string adr,string nam){
    adr=user[n].adrs;
    nam=user[n].name;
}
function find_user_id(string str) view public returns(uint n){
    n=find[str].id;
}
function addcar0() public{
    car['KL-05-111'].regno="KL-05-111";
    car['KL-05-111'].owner=0;
    car['KL-05-111'].model="Alto-LXI";
    car['KL-05-111'].yr=2014;
    car['KL-05-111'].flg=1;
    car['KL-05-111'].pic="a.jpg";
    user[0].vehicle.push("KL-05-111");
    user[0].carown++;
}
function addcar1() public{
    car['KL-05-222'].regno="KL-05-222";
    car['KL-05-222'].owner=0;
    car['KL-05-222'].model="Swift-LXI";
    car['KL-05-222'].yr=2017;
    car['KL-05-222'].flg=1;
    car['KL-05-222'].pic="a.jpg";
    user[0].vehicle.push("KL-05-222");
    user[0].carown++;
}
function addcar2() public{
    car['KL-05-333'].regno="KL-05-333";
    car['KL-05-333'].owner=0;
    car['KL-05-333'].model="Ritz-LXI";
    car['KL-05-333'].yr=2017;
    car['KL-05-333'].flg=1;
    car['KL-05-333'].pic="a.jpg";
    user[0].vehicle.push("KL-05-333");
    user[0].carown++;
}
function view_car_model(string str) public view returns(string)
{
    return(car[str].model);
    
    
}
function view_car_owner(string str) public view returns(string)
{
     return(user[car[str].owner].name);
    
    
}
function view_car_yr(string str) public view returns(uint)
{
    return(car[str].yr);
    
    
}
function view_car_pic(string str) public view returns(string)
{
    return(car[str].pic);
    
    
}
function car_owned(uint n) view public returns(uint nn,uint m){
    nn= user[n].carown;
    m=user[n].vehicle.length;
}
function view_car_owned(uint n,uint t) view public returns(string)
{
    return user[n].vehicle[t];
}
function validate_car(string str) view public returns(bool){
    if(car[str].flg==1)
     { return true;}
    else
     return false;
    
}
function validate_user(string str) view public returns(bool){
    if(find[str].flg==1)
     { return true;}
    else
     return false;
}
function validate_owner(uint on,string str) view public returns(bool){
    if(car[str].owner==on)
     return true;
    else
     return false;
}
function transfer_car(string carno,uint sad) public{
   car[carno].owner=sad;
   user[sad].vehicle.push(carno);
}
function add_carno(uint sad) public {
    user[sad].carown=user[sad].carown+1;
}
function remove_car(uint us,string str) public{
    uint j;
    uint k=user[us].vehicle.length;
    for(uint i=0;i<k;i++)
    {
        if(compareStrings(user[us].vehicle[i],str))
        {
            j=i;
            break;
        }
    }
    user[us].vehicle[j]=user[us].vehicle[k-1];
    user[us].vehicle[k-1]="-1-1-1";
    user[us].carown--;

   
}

function compareStrings (string a, string b) view public returns (bool){
       return keccak256(a) == keccak256(b);
   }
}