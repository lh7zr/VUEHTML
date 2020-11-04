// 共用组件文件
Vue.component('tools', {
	template: '<div>引用组件</div>'
})
Vue.component('tool-itmems',{
	props:['todo'],//props接收父组件传递给子组件的值
	template: '<li>{{ todo.text }}</li>'
})
