export default class Chat {
  private nome: string;
  private mensagem?: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public setMensagem(text: string) {
    this.mensagem = text;
  }
  public getMensagem() {
    return this.mensagem;
  }
  public getNome() {
    return this.nome;
  }
}
