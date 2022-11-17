class Hola extends React.Component {
    render() {
        const props = this.props;
       return <h1> Hola {this.props.to}, mi nombre es JSX, 
        y mi favorito amigo es HTML, from {this.props.from}, 
        Adios {props.to}
        </h1>
        
        
     }
 }

