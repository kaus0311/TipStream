function App() {
    const [contents, setContents] = useState([]);
  
    // Fetch and set content on component mount
    React.useEffect(() => {
      fetchContent();
    }, []);
  
    return (
      <div className="App">
        <ContentCreation createContent={createContent} />
        {contents.map((content) => (
          <ContentPost key={content.id} content={content} tipContent={tipContent} />
        ))}
      </div>
    );
  }
  
  export default App;
  