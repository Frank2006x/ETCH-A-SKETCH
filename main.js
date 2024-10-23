const gridsize =500;
let sqSize=16;
let tool='random'

const sketch_area=document.getElementById('sketch-area');
const changeGrid=document.getElementById('changeGrid')
const pencil=document.getElementById('pencil')
const eraser=document.getElementById('eraser')


sketch_area.style.width=`${gridsize}px`;
sketch_area.style.height=`${gridsize}px`;

function randomColor(){
    if (tool=='random'){
        let r =Math.random()*256;
        let g =Math.random()*256;
        let b =Math.random()*256;
        return `rgb(${r},${g},${b})`;
    }
    else{
        return 'black'
    }
}
function changeColor(){
    
    
    let opacity=parseFloat(this.getAttribute('data-opacity'))
    if (tool=='pencil'){
        this.style.background='black'
        if (opacity>=1){
            opacity==1;
            
        }
        else{
            opacity+=0.1
        }
        this.style.opacity=opacity
        this.setAttribute('data-opacity', opacity);


    }else if (tool=='eraser'){
        this.style.background='rgb(224, 247, 247)'
    }else if (tool=='random'){
        this.style.background=randomColor()
    }
}


function createGridCells(){
    for (let i = 0 ; i < (sqSize*sqSize) ;i++){
        const gridcell=document.createElement("div")
        gridcell.id='cell'
        gridcell.style.width=`${(gridsize/sqSize)-2}px`;
        gridcell.style.height=`${(gridsize/sqSize)-2}px`;
        gridcell.setAttribute('data-opacity', '0');
        sketch_area.appendChild(gridcell);


        gridcell.addEventListener('mouseover',changeColor)
        

    }

}

function removeGridCells(){
    while (sketch_area.firstChild){
        sketch_area.removeChild(sketch_area.firstChild)
    }
}

changeGrid.addEventListener('click',()=>{
    
    sqSize=parseInt(prompt('Enter the size of Grid'))
    while (sqSize<0 || sqSize>100){
        sqSize=parseInt(prompt('Enter the size of Grid(>0 & <100'))
    }
    removeGridCells()
    createGridCells()

})
random.addEventListener('click',()=>{
    tool='random'
})
pencil.addEventListener('click',()=>{
    tool='pencil'

})
eraser.addEventListener('click',()=>{
    tool='eraser'
}
)


createGridCells()