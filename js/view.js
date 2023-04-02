function createView({
    onIncremenrBtnClick, 
    onDecrementBtnClick, 
    onResetBtnClick,
}) {
    const counterNode = document.querySelector('.js__counter');
    const incrementBtnNode = document.querySelector('.btnIncrease');
    const decrementBtnNode = document.querySelector('.btnDecrease');
    const resetBtnNode = document.querySelector('.btnReset');

    incrementBtnNode.addEventListener('click', onIncremenrBtnClick);

    decrementBtnNode.addEventListener('click', onDecrementBtnClick);

    resetBtnNode.addEventListener('click', onResetBtnClick);

    return {
        render({counter}){
            counterNode.innerHTML = counter;
        }
    }
}