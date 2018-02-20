var vm = new Vue({
	el: '#vue_det',
	data: {
		cowo : "Agung",
		cewe : "Ade"
	},
		methods: {
		keterangan : function() {
		return this.cowo +' dan '+ this.cewe + ' saling mencintai <3';
		}
	}
})