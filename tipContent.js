const tipContent = async (contentId) => {
    try {
      const tx = await contract.tipContent(contentId, { value: ethers.utils.parseEther('0.1') });
      await tx.wait();
      console.log('Content tipped:', tx);
    } catch (error) {
      console.error('Error tipping content:', error);
    }
  };
  
  function App() {
    // Fetch and display content here
    return (
      <div className="App">
        {/* Map over content and render ContentPost component */}
        <ContentPost content={exampleContent} tipContent={tipContent} />
      </div>
    );
  }
  
  export default App;
  