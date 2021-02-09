// Pure function
export function capitalize(string) {
    if(typeof string !== 'string') {
        return ''
    }

    return string.charAt(0).toUpperCase() + string.slice(1)
}
export function range(start, end) {
    if(start > end) {
        [end, start] = [start, end] // диструктурируем значения
    }
    return new Array(end - start + 1) // создаем массив и вычисляем длинну с помощью вычетания id ячеек
        .fill('') // заполняем массив пустыми строками, чтобы производить операции с ними
        .map((_, index) => start + index)
}