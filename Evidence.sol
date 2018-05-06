pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with
 
contract Evidence {
  /* mapping field below is equivalent to an associative array or hash.
  The key of the mapping is the entry stored as type bytes32 and value is
  a bytes32 to store the hash of the entry
  */
 
  mapping (bytes32 => bytes32) public evidencehash;
 
  // This function returns the hash for an entry
  function outputHashforEntry(bytes32 entry) view public returns (bytes32) {
      hashInput(entry);
      return evidencehash[entry];
  }
 
//this calculates the hash and updates evidence hash
  function hashInput(bytes32 entry) public {
        evidencehash[entry]=keccak256(entry);
  }
}




