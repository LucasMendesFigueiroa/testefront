import {
  Http,
  Resource,
  ResourceMethod,
  ResourceMethods,
} from "vue-resource/types/vue_resource";
import LogHora from "./LogHora";

export default class LogHoraService {
  private resource: ResourceMethods;
  constructor(resourse: Resource) {
    this.resource = resourse(`api/LogHora{/id}`);
  }

  public lista(): any {
    return this.resource.query().then((res) => res.json());
  }

  public cadastra(lg: LogHora) {
    this.resource.save(lg);
  }
  public atualizar(lg: any) {
    this.resource.update({ id: lg.id }, lg);
  }

  public deleta(id: number) {
    return this.resource.delete({ id });
  }
}
