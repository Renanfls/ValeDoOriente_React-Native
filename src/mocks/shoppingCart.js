import banner from "../../assets/Banner.jpg";
import logo from "../../assets/logo.png";
import americano from "../../assets/americano.jpeg";
import cappuccino from "../../assets/cappuccino.png";
import doubleExpresso from "../../assets/doubleExpresso.jpg";
import latte from "../../assets/latte.jpg";
import macchiato from "../../assets/macchiato.jpg";
import mintChocolate from "../../assets/mintChocolate.jpg";
import mocha from "../../assets/mocha.png";
import expresso from "../../assets/expresso.jpg";

const shoppingCart = {
    banner: {
        image: banner,
        title: "Detalhe do carrinho",
    },
    details: {
        title: "Meus pedidos",
        logoStore: logo,
        nameStore: "Vale do Oriente",
        description: "Produtos gourmets produzidos com café-arábica, grãos selecionados propondo um sabor ameno e adocicado.",
        price: "R$ 60,00",
    },
    items: {
        title: "Itens no carrinho",
        list: [
            {
                name: "Americano",
                image: americano,
            },
            {
                name: "Cappuccino",
                image: cappuccino,
            },
            {
                name: "Double Expresso",
                image: doubleExpresso,
            },
            {
                name: "Latte",
                image: latte,
            },
            {
                name: "Macchiato",
                image: macchiato,
            },
            {
                name: "Mint Chocolate",
                image: mintChocolate,
            },
            {
                name: "Mocha",
                image: mocha,
            },
            {
                name: "Expresso",
                image: expresso,
            },
        ]
    }
}

export default shoppingCart;