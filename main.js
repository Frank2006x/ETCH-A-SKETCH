const gridsize = 400;
let row = 16;
let col = 16;

const sketch_area=document.getElementById('sketch-area');
sketch_area.style.width=`${gridsize}px`;
sketch_area.style.height=`${gridsize}px`;

function createGridCells(){
    for (let i = 0 ; i < (row*col) ;i++){
        const gridcell=document.createElement("div")
        gridcell.id='cell'
        gridcell.style.width=`${(gridsize/col)-2}px`;
        gridcell.style.height=`${(gridsize/col)-2}px`;
        sketch_area.appendChild(gridcell);
    }

}
createGridCells()