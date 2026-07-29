const name="Gayana"
const isLoggedIn = false;
function App() {
   return (
    // react fragments
    <>
    {/*jsx rule 1: return one parent element*/}
    <h1>Hello</h1>
    <p>Byeeee</p>

    {/*jsx rule 2: every tag must be closed properly */}
    <p>Error</p>
    <input type="text"/>

    {/*jsx rule 3: use camelcase for attributes */}
    <button onClick onSubmit>Click</button>

    {/*jsx rule 4: Embedding javascript with curly */}
    <h3>Hello, {name}</h3>

    {/*jsx rule 5: use expressions, not statements */}
    



    
    </>
    
  )
}

export default App
