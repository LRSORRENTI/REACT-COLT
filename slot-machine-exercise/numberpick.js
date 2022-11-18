
function randNum(){
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1){
        return 'X'
    }
   if(rand === 2){
    return 'Y'
   }
   if(rand === 3){
    return 'Z'
   }
}

class NumPicker extends React.Component{
    render(){
let num = randNum();
let num2 = randNum();
let num3 = randNum();
let msg;
/*
if(num === 1){
    num = "X"
}
if(num === 2){
    num = 'Y'
}
if(num === 3){
    num = 'Z'
}
if(num2 === 1){
    num2 = 'X'
  }
  if(num2 === 2){
      num2 = 'Y'
  }
  if(num2 === 3){
      num2 = 'Z'
  }
  if(num3 === 1){
    num3 = 'X'
  }
  if(num3 === 2){
      num3 = 'Y'
  }
  if(num3 === 3){
      num3 = 'Z'
  }
  */
if(num === num2 && num === num3){
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
        <h1>Your number is: {num} {num2} {num3} </h1>
      {msg}
      </div>
          )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))