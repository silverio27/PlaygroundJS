import {
  CdkDragDrop,
  CdkDragEnter,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Pessoa } from "./interfaces/pessoa";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  showDragAndDrop: boolean = true;
  pessoas: Pessoa[] = [
    {
      id: 1,
      nome: "Lucas",
      status: "reprovado",
    },
  ];

  aprovados: Pessoa[] = [];
  reprovados: Pessoa[] = [];

  value: string = "";

  ngOnInit(): void {
    this.preencherLista();

    this.separarPessoasPeloStatus();
  }
  separarPessoasPeloStatus() {
    this.aprovados = this.filtrarPeloStatus("aprovado");
    this.reprovados = this.filtrarPeloStatus("reprovado");
  }

  private preencherLista() {
    for (let i = 0; i < 1000; i++) {
      const id = i + 2;
      this.pessoas.push({
        id: id,
        nome: `Nome-${id}`,
        status: this.isEven(id) ? "aprovado" : "reprovado",
      });
    }
  }

  isEven(value: number) {
    if (value % 2 == 0) return true;
    else return false;
  }

  filtrarPeloStatus(status: string) {
    return this.pessoas.filter((x) => x.status == status);
  }

  filtrarPeloNome(nome: string) {
    return this.pessoas.filter((x) =>
      x.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  listaDeNomes() {
    return this.pessoas.map((x) => x.nome);
  }

  listaDeNomesComId() {
    return this.pessoas.map((x) => ({
      id: x.id,
      nome: x.nome,
    }));
  }

  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  drop(event: CdkDragDrop<Pessoa[]>) {
    // const pessoa = event.previousIndex;
    // console.log(event.item.dropContainer.data);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
    }
  }

  enter(event: CdkDragEnter<Pessoa[]>){
    let pessoa = event.container.data[event.currentIndex]
    pessoa.status == 'aprovado'
    console.log(pessoa)
  }
}
