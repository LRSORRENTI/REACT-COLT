class App extends React.Component{
    render() {
    return (
        <div>
           <Hello 
           to="Luke"
           from="Dad"
           bangs={5}
           />
            <Hello 
           to="World"
           />
           
        </div>
    );
}
}

ReactDOM.render(<App />, document.getElementById('root'));