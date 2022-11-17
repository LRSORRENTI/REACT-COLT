class App extends React.Component {
    render(){
        return(
            <div>
           <Hola 
           to="Luke"
            from="Rene" 
            num={7}
            data={[1,2,3,4,5]}
            isBoolean={true}
            bangs={4}
            />  
           <Hola to="Ludwig" from="Mozart" bangs={10} />
           <Hola to="Leonardo" 
           from="Michelangelo"
           img="https://images.unsplash.com/photo-1668138628838-94d29b8f4a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
           />
           </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))