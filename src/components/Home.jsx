function Home(props) {
    const [count, setCount] = useState(0);
    // rest of the code

  const handleClick = () => {
    props.onButtonClick();
    setCount(count + 1);
  };
    return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={handleClick}>Increment</button>
        </div>
      );
}
export default Home;