import fs from 'fs'

let packageText = fs.readFileSync('./package.json','utf-8')

//packageText = packageText.replace(/\^/g, '')

//fs.writeFileSync('./package.json', packageText)

let packageObj = JSON.parse(packageText)

let dependenciesString = JSON.stringify(packageObj.dependencies);

let newDependenciesString = dependenciesString.replace(/\^/g, '');

packageObj.dependencies = JSON.parse(newDependenciesString);

console.log(dependenciesString);


//console.log(packageObj.dependencies)

fs.writeFileSync('package.json', JSON.stringify(packageObj, null, 5));