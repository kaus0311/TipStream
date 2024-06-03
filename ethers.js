import { ethers } from 'ethers';
import ContentCreation from './ContentCreation';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [
  // ABI array here
];

const contract = new ethers.Contract(contractAddress, abi, signer);

const createContent = async (contentHash) => {
  try {
    const tx = await contract.createContent(contentHash);
    await tx.wait();
    console.log('Content created:', tx);
  } catch (error) {
    console.error('Error creating content:', error);
  }
};

function App() {
  return (
    <div className="App">
      <ContentCreation createContent={createContent} />
    </div>
  );
}

export default App;
