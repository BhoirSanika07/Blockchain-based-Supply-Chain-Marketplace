

const hre =require ("hardhat"); 
async function main(){
  const Tracking =await hre.ethers.getContractFactory('Tracking');
  const tracking=await Tracking.deploy();
  // await tracking.deployed();
  // await tracking.waitForDeployment();
  console.log(`Tracking deployed to ${tracking.target}`);
}
main().catch((error)=>{
  console.log(error);
  process.exitCode=1;
});

