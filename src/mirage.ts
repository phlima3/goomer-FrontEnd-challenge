import { createServer } from "miragejs";

export function mirageServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/restaurants", () => {
        return [
          {
            id: 1,
            name: "Ronnos Lanches",
            address: "Higino Marques,275",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 2,
            name: "Pastelaria Agente",
            address: "Rua Primeiro de Maio,7496",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 3,
            name: "Restaurante Visão",
            address: "Rua Projetada,775",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 4,
            name: "Pastelaria pastel",
            address: "Rua São Luiz,967",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 5,
            name: "Lanchonete Natural",
            address: "Rua Paraíba,8504",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 6,
            name: "Cafeteria pão de queijo",
            address: "Rua Brasil,2022",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 7,
            name: "Restaurante Francisco",
            address: "Rua Vinte e Dois,8837",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 8,
            name: "Best Burguer",
            address: "Rua Santa Catarina,123",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 9,
            name: "Pizzaria Rainha",
            address: "Rua Santo Antônio,999",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
          {
            id: 10,
            name: "Delivery Pizzaria",
            address: "Rua Alagoas,274",
            image: "https://picsum.photos/200",
            hours: [
              {
                from: "19:00",
                to: "23:00",
                days: [1, 7],
              },
            ],
          },
        ];
      });
    },
  });
}
