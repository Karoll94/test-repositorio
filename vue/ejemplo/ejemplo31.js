const app = new Vue ({
    el:'#app',
    data:{
        titulo:"Hola muchachos",
        equipos : [
            {nombre: 'Colombia',titulos: 0},
            {nombre: 'Alemania',titulos: 4},
            {nombre: 'Brasil',titulos: 5} 
        ],
        nuevoEquipo:'' 
    },
    methods: {
        agregarEquipo(){
            this.equipos.push({
                nombre:this.nuevoEquipo,titulo:0
            });
            this.nuevoEquipo ='';
        }
    },
    computed:{
        sumarCopas(){
            this.total=0;
            for(equipo of this.equipos){
                this.total = this.total + equipo.titulos;
            }
            return this.total;
        }
    }
});
Vue.component('saludo',{
    template:'<h1>Hola muchachos</h1>'
});