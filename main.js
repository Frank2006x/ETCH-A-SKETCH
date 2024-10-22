const gridsize =500;
let sqSize=16;

const sketch_area=document.getElementById('sketch-area');



sketch_area.style.width=`${gridsize}px`;
sketch_area.style.height=`${gridsize}px`;

function changeColor(){
    this.style.background='black'
}


function createGridCells(){
    for (let i = 0 ; i < (sqSize*sqSize) ;i++){
        const gridcell=document.createElement("div")
        gridcell.id='cell'
        gridcell.style.width=`${(gridsize/sqSize)-2}px`;
        gridcell.style.height=`${(gridsize/sqSize)-2}px`;
        sketch_area.appendChild(gridcell);


        gridcell.addEventListener('mouseover',changeColor)
        

    }

}

function removeGridCells(){
    while (sketch_area.firstChild){
        sketch_area.removeChild(sketch_area.firstChild)
    }
}
createGridCells()