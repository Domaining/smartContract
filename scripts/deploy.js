const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("ftm");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
    let txn = await domainContract.register("leprof",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();
    console.log("Minted domain leprof.core");
  
    txn = await domainContract.setRecord("leprof", "Am I a web3 dev??");
    await txn.wait();
    console.log("Set record for leprof.ftm");
  
    const address = await domainContract.getAddress("leprof");
    console.log("Owner of domain leprof:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }