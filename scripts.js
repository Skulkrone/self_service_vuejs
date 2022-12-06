var products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

const SelfServiceMachine = {
  // data() = fonction qui retourne un objet
  data() {
    return {
      // Rendu déclaratif
      // window.products permet de récupérer la variable products précédemment créée
      products: window.products,
    };
  },
  methods: {
    total: function () {
      let total = 0;

      this.products.forEach(function (item) {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });

      return total.toFixed(2);
    },
  },
};

// Création d'une appli Vue avec createApp qui contient comme argument l'objet qui a toute la logique puis mount pour monter l'application qui va être passé dans un élément html parent
Vue.createApp(SelfServiceMachine).mount("#app");
