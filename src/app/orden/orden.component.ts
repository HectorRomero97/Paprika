import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent {

  selectedItem = 'https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2019/04/papa_para_aliviar_quemaduras.jpg';


  title: string = 'Arma tu Pedido!';

  msg: string = '';

  employees = [
    { 'name': 'Fazt', position: 'manager', email: 'email@email.com' },
    { 'name': 'Juan', position: 'Designer', email: 'email@email.com' },
    { 'name': 'Pedro', position: 'Programmer', email: 'email@email.com' }
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);

  }

  deleteEmployee(i): void {
    var answer = confirm('Estas seguro querer eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  changeImage(selectedItem): string {
    switch (selectedItem) {
      case 'Papas Gajo':
        return 'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-papas-gajo.jpg'
      case 'Papas a la Francesa':
        return 'https://www.therusticelk.com/wp-content/uploads/2020/01/seasoned-french-fries-720x540.png'
      case 'Papas Chips':
        return 'https://cdn2.actitudfem.com/media/files/images/2020/06/como-hacer-chips-de-manzana1.jpg'
      default:
        break;
    }
  }

  closeAlert(): void {
    this.msg = '';
  }

}
