


export const toDoListData = () => {
    const toDo = []
    for (let i = 1; i == 1; i++) {
        const myObject = {
            id: i,
            text: `Item ${i}`
        }
        toDo.push(myObject)
    }
    return toDo;
}
toDoListData()

export const CardTypeData = () => {
    const card = []
    for (let i = 1; i <= 100; i++) {
        const myObject = {
            id: i,
            text: `Hi I'm ${i}`
        }
        card.push(myObject)
    }
    return card
}
CardTypeData()
