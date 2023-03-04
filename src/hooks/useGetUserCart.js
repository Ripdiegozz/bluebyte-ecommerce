const getUserCart = () => {
    const items = JSON.parse(localStorage.getItem('products')) || [];
    return items
}

export default getUserCart