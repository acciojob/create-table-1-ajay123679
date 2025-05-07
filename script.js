function insert_Row() {
    //Write your code here
  let tbl=document.getElementById("sampleTable");
  let nrow=tbl.insertRow(0);
  let cell1=nrow.insertCell(0);
  let cell2=nrow.insertCell(1);
  cell1.textContent="New Cell1";
  cell2.textContent="New Cell2";
  
}
