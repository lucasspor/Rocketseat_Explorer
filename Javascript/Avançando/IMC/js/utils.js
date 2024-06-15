export {notAnumber, calculateIMC}
function notAnumber(value){
  return isNaN(value) || value == ""
}

function calculateIMC(height, weight) {
  return (weight / ((height / 100) ** 2).toFixed(2))
}