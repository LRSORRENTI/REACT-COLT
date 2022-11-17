class App extends React.Component {
    render(){
        return(
            <div>
           <Hola to="Luke" from="Rene"/>  
           <Hola to="Ludwig" from="Mozart" />
           <Hola to="Leonardo" from="Michelangelo"/>
           </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))