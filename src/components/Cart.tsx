
interface Props{
    cartItems: string[],
    onClear: () => void;
}
const Carting=({cartItems, onClear}: Props)=>{
    return (
        <>
            <div>Carts</div>
            <ul className="list">
                {cartItems.map(item=> <li  key={item} className="list-item">{item}</li>)}
            </ul>

            <button onClick={onClear}>Clear</button>
        </>
    )
}

export default Carting