const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];



const SweetAndSour = () => {

  const createBoard = () => {
      
        const randomNumber = Math.floor(Math.random() * candyColors.length)
        const randomColor = candyColors[randomNumber]
        
  }

	return (
    <>
    <h1>Sweet and Sour</h1>
    <button onClick={createBoard}>Random Number</button>
    </>
  )
};

export default SweetAndSour;
