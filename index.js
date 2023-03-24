const names = [`Guadalupe`, `Ollie`, `Aki`]

const occasion =[`surprise`]

function writeCards(names, date) {
    let message = []
  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${date} gift!`)

  }
  return message;
}

function countDown(count) {
    while (count > -1){
        console.log(count--)}
        return count
    
}
let newCount = [4]
