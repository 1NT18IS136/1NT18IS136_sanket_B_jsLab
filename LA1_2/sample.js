const arry =[];

function onClick(){
    var obj={};
    obj.Location = document.getElementById('lctn').value;
    obj.Date = document.getElementById('dt').value;
    obj.Relief_Fund = document.getElementById('rf').value;
    //obj.Medical_Facility = document.getElementById('mf').value;
    const chars = document.getElementById('mf').value;
    let words = chars.split(',');
    obj.Medical_Facility = words;
    const chars1 = document.getElementById('ls').value;
    let words1 = chars1.split(',');
    obj.Loss_occured = words1;
    arry.push(obj)
    console.log(arry)
}


function display()
{
    for(let i=0;i<arry.length;i++)
    {
            console.log(arry[i])
    }
}