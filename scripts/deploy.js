const main = async () => {
    const [deployer] = await Headers.ethers.getSigners(); // private key like
    const accountBalance = await deployer.getBalance(); // balance of the account
    await waveContract.deployed();

    console.log("Deploying contract with account:" , deployer.address);
    console.log("Account balance:", accountBalance.toString());


    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("WavePortal address: ",waveContract.address);
};


const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};


runMain();