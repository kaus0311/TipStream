const fetchContent = async () => {
    const contentCount = await contract.contentCount();
    const contents = [];
    for (let i = 1; i <= contentCount; i++) {
      const content = await contract.contents(i);
      contents.push({
        id: i,
        creator: content.creator,
        contentHash: content.contentHash,
        tipsReceived: content.tipsReceived.toString(),
      });
    }
    setContents(contents);
  };
  
  React.useEffect(() => {
    fetchContent();
  }, []);
  