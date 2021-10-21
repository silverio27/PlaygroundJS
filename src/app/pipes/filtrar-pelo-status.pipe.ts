import { Pipe, PipeTransform } from "@angular/core";
import { Pessoa } from "../interfaces/pessoa";

@Pipe({
  name: "filtrarPeloStatus",
})
export class FiltrarPeloStatusPipe implements PipeTransform {
  transform(pessoas: Pessoa[], status: "aprovado" | "reprovado"): unknown {
    return pessoas.filter((x) => x.status == status);
  }
}
