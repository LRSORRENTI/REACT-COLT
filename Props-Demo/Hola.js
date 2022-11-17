class Hola extends React.Component {
    render() {
        console.log(this.props)
        const props = this.props;
        let bang = "!".repeat(props.bangs);
       return (
       <p>
       <h1> Hola {this.props.to}, mi nombre es JSX, 
        y mi favorito amigo es HTML, from {this.props.from}, 
        Adios {props.to} {bang} 
        </h1>
        <img src={this.props.img}/>
        </p>
       )
     }
 }

