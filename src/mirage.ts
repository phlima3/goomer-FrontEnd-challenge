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
            image:
              "https://www.google.com/maps/uv?pb=!1s0x94c38d490910b7f3:0xc73b86df65cd40ef!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOko86cyyDo1Djn11QoKqqpZma2nLkB9WHpo7RX%3Dw298-h200-k-no!5sronnos+-+Pesquisa+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOko86cyyDo1Djn11QoKqqpZma2nLkB9WHpo7RX&hl=pt-BR&sa=X&ved=2ahUKEwiXtaTTprb6AhVlrpUCHRd6CtEQoip6BAhlEAM",
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
