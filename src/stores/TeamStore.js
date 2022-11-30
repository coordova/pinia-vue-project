import {defineStore} from "pinia";

export let useTeamStore = defineStore('team', {
    // STATE === es la version de 'pinia' de las DATA del Options API
    // TIPO DE DECLARACION 1 - usar para cuando se usa TypeScript
   /* state() {
       return {
           name: '',
           spots: 0,
           members: []
       }
   }, */
    // TIPO DE DECLARACION 2 - LA MAS USADA
    /* state: () => {
        return {
            name: '',
            spots: 0,
            members: []
        }
    }, */
    // RECOMENDADO - la misma del tipo 2 pero inline, la mas comun para declarar 'states'
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    // ACTIONS === es la version de 'pinia' de los METHODS del Options API
    actions: {
       // init/handle/fill/seed
        fill2() {
            // aqui llenamos/cargamos los datos del state, estos datos puedes ser de una BD, API, etc - puede ser de una llamada ajax o de un archivo ...
            /* import('@/team.json').then(r => {
                // console.log(r.default);
                // cargamos los datos desde r.default
                let data = r.default;
                // actualizamos los 'estados' que necesitamos
                // OPCION 1 - forma tradicional de actualizar los 'estados' necesarios
                this.name = data.name;
                this.spots = data.spots;
                this.members = data.members;

                // OPCION 2 - Usamos 'fetch' para actualizar multiples estados al mismo tiempo
                this.$patch({
                    name: data.name,
                    spots: data.spots,
                    members: data.members
                });
            }); */

            import('@/team.json').then(r => {
                // OPCION 3 - Cargamos al 'state' todo lo que venga desde r.default - nota. se podrian cargar datos inecesarios
                this.$state = r.default;
            });

        },
        // Usando Async->Await para cargar cuando sea necesario, que es la mejor opcion
        async fill() {
            let r = await import('@/team.json');
            this.$state = r.default;
        },

        // podemos definir metodos para manipular los 'states' (datos)
        grow(spots) {
            this.spots = spots;
        }
    },

    // GETTERS === es la version de 'pinia' de las COMPUTED PROPERTIES del Options API
    getters: {
       spotsRemaining() {
           return this.spots - this.members.length;
       }
    }
});