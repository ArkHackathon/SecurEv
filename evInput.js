web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[ { constant: true,
    inputs: [ [Object] ],
    name: 'evidencehash',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'outputHashforEntry',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'hashInput',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' } ]')
EvidenceContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which $
contractInstance = EvidenceContract.at('0xfd1ebf47f1af01e325918d667878b3afc7e7c2df');
entryList = {"On-site report": "entry-1"}
function hashInput() {
  entry = $("#entry1").val();
  contractInstance.hashInput(entry, {from: web3.eth.accounts[0]}, function() {
    let div_id = entryList[entry];
    $("#" + div_id).html(contractInstance.outputHashforEntry.call(entry).toString());
  });
}
$(document).ready(function() {
  eList = Object.keys(entryList);
  for (var i = 0; i < eList.length; i++) {
    let name = eList[i];
    let val = contractInstance.outputHashforEntry.call(name).toString()
    $("#" + entryList[entry]).html(val);
  }
});
