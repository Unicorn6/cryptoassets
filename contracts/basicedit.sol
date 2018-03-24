pragma solidity ^0.4.0;
contract basicedit{
    //address homeadd;
     struct details{
      string name;
        uint8 age;

    }
    struct  car{
      string car_name;
      uint8 eng_no;

    }
    struct _owner{
      address ownby;
    }

    uint8 public carno=0;
    mapping(address => details) admin;
    mapping(uint8 => car) carid;
    mapping(uint8 => _owner)owner;
  address send ;

  function caradd(string _car_name,uint8 _eng_no) public
  {

          carid[carno].car_name=_car_name;
          carid[carno].eng_no=_eng_no;
          
          carno+=1;
  }
  function transaction(uint8 carid,address trans)
  {
    owner[carid].ownby=trans;
  }
  function carview(uint8 id) view public returns(string carn,address own)
  {
    carn=carid[id].car_name;
    own=owner[id].ownby;
  }

  function carnoview() public returns(uint8 ccd)
  {
    ccd=carno;
  }

    function adding(string nme,uint8 ap) public
    {
        send=msg.sender;
        admin[send].name=nme;
        admin[send].age=ap;
    }

    function look() public returns(string _name,uint8 qw,address add)
    {    add=msg.sender;
        _name=admin[add].name;
        qw=admin[add].age;

    }
}
