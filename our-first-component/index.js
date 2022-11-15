class Hello extends React.Component {
    render() {
       return (<h1> Hello there! I am JSX! HTML inside of 
            a JavaScript File
        </h1>
        
        );
     }
 }

function Dog(){
    return <p> German Shepherd, Cava-Corgi </p>
}
ReactDOM.render(<Hello />, document.getElementById('root'));
