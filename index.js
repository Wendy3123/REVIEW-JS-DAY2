let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]


let i=0
let typeS1Count = 0

while(i < newInventoryCarModels.length){
    if(newInventoryCarModels[i]=== 'S1'){
        typeS1Count++
    }
    i++
}
console.log(`Number of S1 Cars : ${typeS1Count}`)


let lorrieCount = 0

for(let j=0;j<newInventoryCarTypes.length;j++){
    if(newInventoryCarTypes[j]==='Lorrie'){
        lorrieCount++
    }
}

console.log(`Number of Lorries : ${lorrieCount}`)