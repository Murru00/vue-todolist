let { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Digita il nome di una scarpa che desideri acquistare: ',
            items: [
                {
                    name: 'Jordan 4 Military Black',
                    done: true,

                },
                {
                    name: 'Jordan 4 Metallic Purple',
                    done: false,

                },
                {
                    name: 'Jordan 4 Thunder',
                    done: true,

                },
                {
                    name: 'Jordan 1 Patent Bred',
                    done: false,

                },

            ],
            newItem: {
                name: '',
                done: false,
            },
        };
    },

    methods: {
        printNewItem() {
            const newItemCopy = { ...this.newItem };
            if (!newItemCopy.name) {
                alert('Hai dimenticato di digitare, stupido');
                return;
            }
            this.items.push(newItemCopy);
        },

    },
    mounted() {
        console.log();
    },
});

app.mount('#app');