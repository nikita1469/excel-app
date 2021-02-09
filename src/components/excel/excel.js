import { $ } from "@core/dom"
import { Emitter } from "@core/emitter"


export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
        this.emitter = new Emitter()
    }

    getRoot() {
        const $root = $.create('div', 'excel')
        const componentOptions = {
            emitter: this.emitter
        }

        // const $root = document.createElement('div')
        // $root.classList.add('excel')

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className) // Создаем div и обавляем соответствующий класс
            const component = new Component($el, componentOptions) // Вызваем конструктор компонента с корневым дивом domListener
            $el.html(component.toHTML()) // Помещаем сорержимое компонента в div
            $root.append($el) // Помещаем компонент в корневой элемент
            // $root.insertAdjacentHTML('beforeEnd', component.toHTML())
            return component
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot()) // Отрисовка DOM
        this.components.forEach(component => component.init()) // Добавление событий через родительский класс
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}

