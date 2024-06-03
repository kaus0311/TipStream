async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const ContentTipping = await ethers.getContractFactory("ContentTipping");
  const priceFeedAddress = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"; // Chainlink ETH/USD price feed on Rinkeby
  const contentTipping = await ContentTipping.deploy(priceFeedAddress);

  console.log("ContentTipping contract deployed to:", contentTipping.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
