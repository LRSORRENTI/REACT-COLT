class Hello extends React.Component {
    render() {
        return <h1> Hello there! I am JSX! HTML inside of 
            a JavaScript File
        </h1>;
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'));