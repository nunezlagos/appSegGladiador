import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
interface Pais {
  nombre: string;
  prefijos: { codigo: string; selected: boolean }[];
}

@Component({
  selector: 'app-registrocelular',
  templateUrl: './registrocelular.page.html',
  styleUrls: ['./registrocelular.page.scss'],
})
export class RegistrocelularPage {
  numeroPrefix: string = '+999';  // Asigna el valor predeterminado según sea necesario
  numeroCelular: string = '';
  numeroCompleto: string = '';

  


  actualizarNumeroCompleto(): void {
    this.numeroCompleto = this.selectedPrefix + this.numeroCelular;
  }



  constructor(private alertController: AlertController) {}


  paises: Pais[] = [
    {
      nombre: 'Chile',
      prefijos: [
        { codigo: '+569', selected: false },
      ],
    },
    {
      nombre: 'Argentina',
      prefijos: [
        { codigo: '+411', selected: false },
      ],
    },
    {
      nombre: 'México',
      prefijos: [
        { codigo: '+911 1', selected: false },
      ],
    },
    // Agrega más países según sea necesario
  ];

  acordeonExpanded = false;
  selectedCountry: string | null = null;
  selectedPrefix: string | null=null;
  
  toggleGroup(pais: Pais | null) {
    this.acordeonExpanded = !this.acordeonExpanded;

    if (pais) {
      this.selectedCountry = pais.nombre;
      this.selectedCountry = pais.prefijos[0].codigo;
    } else {
      this.selectedCountry = null;
    }
  }

  selectCountry(pais: Pais) {
    this.selectedCountry = pais.nombre;
    this.selectedPrefix = pais.prefijos[0].codigo //obtiene solo el codigo almacenado dentro de la clase RegistrocelularPage dentro de pais:Paises
    this.acordeonExpanded = false;
  }

  
  

  async mostrarPopup() {
    //validacion

    const alert = await this.alertController.create({
      header: 'Vamos a verificar el numero de telefono',
      subHeader: `${this.numeroCompleto}`,
      message: '¿Desea editar o continuar?',
      buttons: [
        {
          text: 'Editar',
          handler: () => {
                      
            console.log('Editar presionado');
          }
        },
        {
          text: 'Continuar',
          handler: () => {
            // Lógica para continuar (si es necesario)
            console.log('Continuar presionado');
          }
        }
      ]
    });

    await alert.present();
  }


}
