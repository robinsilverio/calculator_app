import {Model} from 'vue-mc';
class Button extends Model {
    defaults() {
        return {
            className: null,
            text: null
        }
    }
    mutations(){
        return{
            className: (paramClassName) => String(paramClassName) || null,
            text: String 
        }
    }
    validation(){
        return {
            className: string.and(required),
            text: string.and(required)
        }
    }
}