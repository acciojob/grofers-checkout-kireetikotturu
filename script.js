const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let total = 0
  const prices = document.querySelectorAll(".price");
  prices.forEach((item, index) =>{
    total+=(parseInt(item.textContent))
  })
  const newRow = document.createElement("tr");
  
  const tableData1 = document.createElement("td");
  const tableData2 = document.createElement("td");
  tableData1.textContent = "total";
  tableData2.textContent = total;

  newRow.appendChild(tableData1)
  newRow.appendChild(tableData2)

  let table = document.querySelector("table");
  table.appendChild(newRow)
  
};

getSumBtn.addEventListener("click", getSum);

