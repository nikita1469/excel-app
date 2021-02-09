export class Emitter {
   constructor() {
      this.listeners = {} 
   }

   emit(event, ...args) { // уведомляем слушателей, если они есть
      if(!Array.isArray(this.listeners[event])) {
         return false
      }
      this.listeners[event].forEach(listener => {
         listener(...args)
      })
      return true
   }

   subscribe(event, fn) { // добавляем новых слушателей
      this.listeners[event] = this.listeners[event] || []
      this.listeners[event].push(fn)
      return () => {
         this.listeners[event] =
            this.listeners[event].filter(listener => listener !== fn)
      }
   }
}