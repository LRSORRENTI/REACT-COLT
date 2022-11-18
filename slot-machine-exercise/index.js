class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Slot machine</h1>
                <NumPicker/>
              
                </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))