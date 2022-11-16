
function randNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component{
    render(){
const num = randNum();
let msg;
if(num === 7){
    msg = 
    <div>
        <h2>Congrats</h2>
        <img src="https://images.unsplash.com/photo-1609473295863-2d9299af71d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    </div>
} else {
    msg = <p>
        'not lucky'
    </p>
}
      return(
        <div>
        <h1>Your number is: {num} </h1>
      {msg}
      </div>
          )
    }
}

