

interface Props {
    cartCount: number
}

const Navbar=({cartCount}: Props)=> {
    return (
        <div>NavBaring{cartCount}</div>
    )
}

export default Navbar
