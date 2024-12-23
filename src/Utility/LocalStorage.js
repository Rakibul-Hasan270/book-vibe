const getStoredCardRead = () => {
    const storedCard = localStorage.getItem('readList');
    if (storedCard) {
        return JSON.parse(storedCard);
    }
    return [];
}

const saveToLocalStgRead = id => {
    const storedCard = getStoredCardRead();
    const exists = storedCard.find(cartId => cartId === id);
    if (!exists) {
        storedCard.push(id);
        localStorage.setItem('readList', JSON.stringify(storedCard));
    }
}

const getStoredCardWish = () => {
    const storedCard = localStorage.getItem('wishList');
    if (storedCard) {
        return JSON.parse(storedCard);
    }
    return [];
}


const saveToLocalStgWish = id => {
    const storedCard = getStoredCardWish();
    const exists = storedCard.find(cartId => cartId === id);
    if (!exists) {
        storedCard.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedCard));
    }
}

export { getStoredCardRead, getStoredCardWish, saveToLocalStgRead, saveToLocalStgWish };