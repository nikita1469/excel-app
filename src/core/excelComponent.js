import {DomListener} from '@core/domListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubs = []

        console.log(options)

        this.prepare()
    }

    // Настраиваем наш компонент до init
    prepare() {
        
    }

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubs.push(unsub)
    }

    // Инициализируем компонент
    // Добавляем слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент
    // Чистим слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubs.forEach(unsub => unsub())
    }
}