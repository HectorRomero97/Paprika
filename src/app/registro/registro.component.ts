import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  msg: string = '';

  Usuarios = [
    { firstName: 'Memo', secondName: 'Albertano', password: 'manager', email: 'email@email.com', address: 'Rio Nazas #6127', phone: '9211170003' },
    {
      firstName: 'Andres', secondName: 'Zagarragarra', password: 'andres123', email: 'andres@korreo.com',
      address: 'Tres Cruces #69', phone: '2221051234'
    }
  ];

  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmployee(): void {
    this.Usuarios.push(this.model);
    console.log(this.Usuarios);
  }

  deleteEmployee(i): void {
    const answer = confirm('Estas seguro querer eliminarlo?');
    if (answer) {
      this.Usuarios.splice(i, 1);
      this.msg = 'campo eliminado';
    }
  }

  myValue;
  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.firstName = this.Usuarios[i].firstName;
    this.model2.secondName = this.Usuarios[i].secondName;
    this.model2.password = this.Usuarios[i].password;
    this.model2.email = this.Usuarios[i].email;
    this.model2.address = this.Usuarios[i].address;
    this.model2.phone = this.Usuarios[i].phone;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.Usuarios.length; j++) {
      if (i === j) {
        this.Usuarios[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }
  getUsuarios() {
    return this.Usuarios;
  }
  closeAlert(): void {
    this.msg = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
