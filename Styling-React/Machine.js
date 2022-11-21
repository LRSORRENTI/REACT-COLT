class Machine extends React.Component{
    render(){
        const { s1, s2, s3 } = this.props;
        const winner = s1 === s2 && s2 === s3 
        const styling = {fontSize:'60px', backgroundColor:'purple'}
    return(
<div className="Machine">
    <label htmlFor="textInput"></label>
<p style={styling}>
{s1} {s2} {s3}
</p>
<p className={winner ? 'Machine-winner' : 'Machine-loser'}>{winner ? 'Winner' : 'Loser'}</p>
</div>





);
}
}