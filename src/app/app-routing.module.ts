import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida', // Ruta por defecto
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./paginas/bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'registrocelular',
    loadChildren: () => import('./paginas/registrocelular/registrocelular.module').then( m => m.RegistrocelularPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./paginas/verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'crea-pin',
    loadChildren: () => import('./paginas/crea-pin/crea-pin.module').then( m => m.CreaPinPageModule)
  },

  // ... otras rutas
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
