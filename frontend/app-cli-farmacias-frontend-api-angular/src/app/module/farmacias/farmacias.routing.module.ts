/*
 * @fileoverview    {FarmaciasRoutingModule}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacionViewComponent } from './view/autenticacion-view/autenticacion-view.component';import { BarrioViewComponent } from './view/barrio-view/barrio-view.component';import { CiudadViewComponent } from './view/ciudad-view/ciudad-view.component';import { FarmaciaViewComponent } from './view/farmacia-view/farmacia-view.component';import { FarmaciaMedicamentoViewComponent } from './view/farmacia-medicamento-view/farmacia-medicamento-view.component';import { LaboratorioViewComponent } from './view/laboratorio-view/laboratorio-view.component';import { LaboratorioMedicamentoViewComponent } from './view/laboratorio-medicamento-view/laboratorio-medicamento-view.component';import { MedicamentoViewComponent } from './view/medicamento-view/medicamento-view.component';import { MedicamentoOnlineViewComponent } from './view/medicamento-online-view/medicamento-online-view.component';import { PersonaViewComponent } from './view/persona-view/persona-view.component';import { PropiedadesViewComponent } from './view/propiedades-view/propiedades-view.component';import { TipoPersonaViewComponent } from './view/tipo-persona-view/tipo-persona-view.component';

const routes: Routes = [
    {
        path: 'autenticacion',
        component: AutenticacionViewComponent
    },    {
        path: 'barrio',
        component: BarrioViewComponent
    },    {
        path: 'ciudad',
        component: CiudadViewComponent
    },    {
        path: 'farmacia',
        component: FarmaciaViewComponent
    },    {
        path: 'farmacia-medicamento',
        component: FarmaciaMedicamentoViewComponent
    },    {
        path: 'laboratorio',
        component: LaboratorioViewComponent
    },    {
        path: 'laboratorio-medicamento',
        component: LaboratorioMedicamentoViewComponent
    },    {
        path: 'medicamento',
        component: MedicamentoViewComponent
    },    {
        path: 'medicamento-online',
        component: MedicamentoOnlineViewComponent
    },    {
        path: 'persona',
        component: PersonaViewComponent
    },    {
        path: 'propiedades',
        component: PropiedadesViewComponent
    },    {
        path: 'tipo-persona',
        component: TipoPersonaViewComponent
    },
];

/**
 * TODO: Description of {@code FarmaciasRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FarmaciasRoutingModule { }
