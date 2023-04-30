const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
let list = []
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
studentNode.forEach(function(item) {
  const nameNode = item.querySelector("name");
  const firstNameNode = nameNode.querySelector("first")
  const secondNameNode = nameNode.querySelector("second")
  const ageNode = item.querySelector("age");
  const profNode = item.querySelector("prof");
  const langAttr = nameNode.getAttribute('lang');
  
  list.push({name: firstNameNode.textContent + ' ' + secondNameNode.textContent,
            age: Number(ageNode.textContent),
            prof: profNode.textContent,
            lang: langAttr,
            })            
});
//как объект
console.log("list", list)

// как строка
console.log(`{
   list: [
     {name: '${list[0].name}', age: ${list[0].age}, prof: '${list[0].prof}', lang: '${list[0].lang}' },
     {name: '${list[1].name}', age: ${list[1].age}, prof: '${list[1].prof}', lang: '${list[1].lang}' },
   ]
}`)
