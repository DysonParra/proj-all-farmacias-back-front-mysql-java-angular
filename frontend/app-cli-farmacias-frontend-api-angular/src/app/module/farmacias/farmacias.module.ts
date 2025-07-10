/*
 * @overview        {FarmaciasModule}
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
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { AutenticacionFacade } from './facade/autenticacion.facade';
import { AutenticacionService } from './service/autenticacion.service';
import { AutenticacionComponent } from './component/autenticacion/autenticacion.component';
import { AutenticacionContainerComponent } from './container/autenticacion-container/autenticacion-container.component';
import { AutenticacionViewComponent } from './view/autenticacion-view/autenticacion-view.component';

import { BarrioFacade } from './facade/barrio.facade';
import { BarrioService } from './service/barrio.service';
import { BarrioComponent } from './component/barrio/barrio.component';
import { BarrioContainerComponent } from './container/barrio-container/barrio-container.component';
import { BarrioViewComponent } from './view/barrio-view/barrio-view.component';

import { CiudadFacade } from './facade/ciudad.facade';
import { CiudadService } from './service/ciudad.service';
import { CiudadComponent } from './component/ciudad/ciudad.component';
import { CiudadContainerComponent } from './container/ciudad-container/ciudad-container.component';
import { CiudadViewComponent } from './view/ciudad-view/ciudad-view.component';

import { FarmaciaFacade } from './facade/farmacia.facade';
import { FarmaciaService } from './service/farmacia.service';
import { FarmaciaComponent } from './component/farmacia/farmacia.component';
import { FarmaciaContainerComponent } from './container/farmacia-container/farmacia-container.component';
import { FarmaciaViewComponent } from './view/farmacia-view/farmacia-view.component';

import { FarmaciaMedicamentoFacade } from './facade/farmacia-medicamento.facade';
import { FarmaciaMedicamentoService } from './service/farmacia-medicamento.service';
import { FarmaciaMedicamentoComponent } from './component/farmacia-medicamento/farmacia-medicamento.component';
import { FarmaciaMedicamentoContainerComponent } from './container/farmacia-medicamento-container/farmacia-medicamento-container.component';
import { FarmaciaMedicamentoViewComponent } from './view/farmacia-medicamento-view/farmacia-medicamento-view.component';

import { LaboratorioFacade } from './facade/laboratorio.facade';
import { LaboratorioService } from './service/laboratorio.service';
import { LaboratorioComponent } from './component/laboratorio/laboratorio.component';
import { LaboratorioContainerComponent } from './container/laboratorio-container/laboratorio-container.component';
import { LaboratorioViewComponent } from './view/laboratorio-view/laboratorio-view.component';

import { LaboratorioMedicamentoFacade } from './facade/laboratorio-medicamento.facade';
import { LaboratorioMedicamentoService } from './service/laboratorio-medicamento.service';
import { LaboratorioMedicamentoComponent } from './component/laboratorio-medicamento/laboratorio-medicamento.component';
import { LaboratorioMedicamentoContainerComponent } from './container/laboratorio-medicamento-container/laboratorio-medicamento-container.component';
import { LaboratorioMedicamentoViewComponent } from './view/laboratorio-medicamento-view/laboratorio-medicamento-view.component';

import { MedicamentoFacade } from './facade/medicamento.facade';
import { MedicamentoService } from './service/medicamento.service';
import { MedicamentoComponent } from './component/medicamento/medicamento.component';
import { MedicamentoContainerComponent } from './container/medicamento-container/medicamento-container.component';
import { MedicamentoViewComponent } from './view/medicamento-view/medicamento-view.component';

import { MedicamentoOnlineFacade } from './facade/medicamento-online.facade';
import { MedicamentoOnlineService } from './service/medicamento-online.service';
import { MedicamentoOnlineComponent } from './component/medicamento-online/medicamento-online.component';
import { MedicamentoOnlineContainerComponent } from './container/medicamento-online-container/medicamento-online-container.component';
import { MedicamentoOnlineViewComponent } from './view/medicamento-online-view/medicamento-online-view.component';

import { PersonaFacade } from './facade/persona.facade';
import { PersonaService } from './service/persona.service';
import { PersonaComponent } from './component/persona/persona.component';
import { PersonaContainerComponent } from './container/persona-container/persona-container.component';
import { PersonaViewComponent } from './view/persona-view/persona-view.component';

import { PropiedadesFacade } from './facade/propiedades.facade';
import { PropiedadesService } from './service/propiedades.service';
import { PropiedadesComponent } from './component/propiedades/propiedades.component';
import { PropiedadesContainerComponent } from './container/propiedades-container/propiedades-container.component';
import { PropiedadesViewComponent } from './view/propiedades-view/propiedades-view.component';

import { TipoPersonaFacade } from './facade/tipo-persona.facade';
import { TipoPersonaService } from './service/tipo-persona.service';
import { TipoPersonaComponent } from './component/tipo-persona/tipo-persona.component';
import { TipoPersonaContainerComponent } from './container/tipo-persona-container/tipo-persona-container.component';
import { TipoPersonaViewComponent } from './view/tipo-persona-view/tipo-persona-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { FarmaciasRoutingModule } from '@app/module/farmacias/farmacias.routing.module';

/**
 * TODO: Description of {@code FarmaciasModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        AutenticacionComponent,
        AutenticacionContainerComponent,
        AutenticacionViewComponent,
        BarrioComponent,
        BarrioContainerComponent,
        BarrioViewComponent,
        CiudadComponent,
        CiudadContainerComponent,
        CiudadViewComponent,
        FarmaciaComponent,
        FarmaciaContainerComponent,
        FarmaciaViewComponent,
        FarmaciaMedicamentoComponent,
        FarmaciaMedicamentoContainerComponent,
        FarmaciaMedicamentoViewComponent,
        LaboratorioComponent,
        LaboratorioContainerComponent,
        LaboratorioViewComponent,
        LaboratorioMedicamentoComponent,
        LaboratorioMedicamentoContainerComponent,
        LaboratorioMedicamentoViewComponent,
        MedicamentoComponent,
        MedicamentoContainerComponent,
        MedicamentoViewComponent,
        MedicamentoOnlineComponent,
        MedicamentoOnlineContainerComponent,
        MedicamentoOnlineViewComponent,
        PersonaComponent,
        PersonaContainerComponent,
        PersonaViewComponent,
        PropiedadesComponent,
        PropiedadesContainerComponent,
        PropiedadesViewComponent,
        TipoPersonaComponent,
        TipoPersonaContainerComponent,
        TipoPersonaViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        FarmaciasRoutingModule,
        SharedModule
    ],
    exports: [
        AutenticacionViewComponent,
        BarrioViewComponent,
        CiudadViewComponent,
        FarmaciaViewComponent,
        FarmaciaMedicamentoViewComponent,
        LaboratorioViewComponent,
        LaboratorioMedicamentoViewComponent,
        MedicamentoViewComponent,
        MedicamentoOnlineViewComponent,
        PersonaViewComponent,
        PropiedadesViewComponent,
        TipoPersonaViewComponent,
    ],
    providers: [
        AutenticacionFacade,
        AutenticacionService,
        BarrioFacade,
        BarrioService,
        CiudadFacade,
        CiudadService,
        FarmaciaFacade,
        FarmaciaService,
        FarmaciaMedicamentoFacade,
        FarmaciaMedicamentoService,
        LaboratorioFacade,
        LaboratorioService,
        LaboratorioMedicamentoFacade,
        LaboratorioMedicamentoService,
        MedicamentoFacade,
        MedicamentoService,
        MedicamentoOnlineFacade,
        MedicamentoOnlineService,
        PersonaFacade,
        PersonaService,
        PropiedadesFacade,
        PropiedadesService,
        TipoPersonaFacade,
        TipoPersonaService,
    ]
})
export class FarmaciasModule { }
