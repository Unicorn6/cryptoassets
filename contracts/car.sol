pragma solidity ^0.4.0;
contract car{
    struct ride{
        address owner;
    }
    mapping(string => ride) vehicle;
    function validator(address myadd,string reg_no) view public returns(bool) 
    {   if(vehicle[reg_no].owner==myadd)
        {
            return true;
        }
        else
         return false;
    }
    function car_transfer(address addr,string reg_no) public returns(string)
    {
        vehicle[reg_no].owner=addr;
        return("Transfer Successfull");
    }
}