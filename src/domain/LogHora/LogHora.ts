export default class LogHora {
  private id?: number;
  private titulo: string;
  private nome: string;
  private tempo: number;
  private descricao: string;

  constructor(titulo: string, nome: string, tempo: number, descricao: string) {
    this.titulo = titulo;
    this.nome = nome;
    this.tempo = tempo;
    this.descricao = descricao;
  }

  public setId(id: number) {
    this.id = id;
  }
  public getId() {
    return this.id;
  }
}
