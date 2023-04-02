const INITIAL_COUNTER = 0;

const counter = createCounter(INITIAL_COUNTER);
const view = createView({
    onDecrementBtnClick: handleDecrementBtnClick,
    onIncremenrBtnClick: handleIncremenrBtnClick,
    onResetBtnClick: handleResetBtnClick
});

view.render({
    counter: counter.get()
});

function handleIncremenrBtnClick(){
    counter.increment();
    view.render({
        counter: counter.get()
    });
}

function handleDecrementBtnClick(){
    counter.decrement();
    view.render({
        counter: counter.get()
    });
}

function handleResetBtnClick(){
    counter.reset();
    view.render({
        counter: counter.get()
    });
}