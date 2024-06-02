async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const ContentTipping = await ethers.getContractFactory("ContentTipping");
    const contentTipping = await ContentTipping.deploy();
  
    console.log("ContentTipping contract deployed to:", contentTipping.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  