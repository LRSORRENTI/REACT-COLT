class App extends React.Component{
    render(){
        return (
            <div>
  <Friend 
   name="Luke"
   hobbies={['Learning webdev', 'Walking dogs', 'Exercising' ]}
  />
  <Friend 
  name="Luca"
  hobbies={['many']}
  />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))