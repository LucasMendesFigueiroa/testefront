import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

export default class MensagensService {
  private hub: any;

  constructor() {
    this.hub = new HubConnectionBuilder()
      .withUrl("http://localhost:")
      .configureLogging(LogLevel.Information)
      .build();
  }

  public conccao() {
    console.log("entrou");
    this.hub.start().then(() => {
      console.log("conectou");
    });
    console.log("saiu");
  }
}
