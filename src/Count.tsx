
let count = 0
function Counting(){
    console.log(count, 'Called');
    count++;
    
    return <div>counting{count}</div>
}

export default Counting