type ListPorps<T> = {
    items: T[]
    onClick: (value: T) => void
}
const List = <T extends { id: number, value: string }>({ items, onClick }: ListPorps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.value}
                    </div>
                )
            })}
        </div>
    )
}

export default List