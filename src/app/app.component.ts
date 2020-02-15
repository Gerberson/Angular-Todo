// Importação externa para criar um novo componente
import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Decoraitor metadados do componente que esta sendo criado
@Component({
  selector: 'app-root', // Se transforma em uma tag html <app-root></app-root>
  templateUrl: './app.component.html', // Aqui voce informa o html deste componente
  styleUrls: ['./app.component.css'] // É um array que define todos os css deste componente
})

// Export para tornar o componente publico
export class AppComponent {
  // ":" responsavel por tipar as variaveis
  // "any[]" corresponde ao object do C#
  public mode = 'list';
  public todos: Todo[] = []; // Troca do Any para classe Todo
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  // construtor da classe 
  // sempre que a classe iniciar passa pelas variaveis e depois para o construtor
  // this dentro construtor refere-se a classe AppComponent
  // this com a notação ponto acessa as propiedades da classe
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ // atribuir o FromBuilder para o FormGroup
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]// No caso de uma validação apenas
    });

    this.load();
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }
  // Defindo um metodo TypeScript com parametro tipado
  remove(todo: Todo) {
    // Forma de capturar o indice da lista
    const index = this.todos.indexOf(todo);

    // Se o indice for -1 não encontrou na lista 
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('listaTodos', data);
    this.mode = 'list'
  }

  load() {
    const data = localStorage.getItem('listaTodos');
    // Validar para evitar do metodo falhar
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}
