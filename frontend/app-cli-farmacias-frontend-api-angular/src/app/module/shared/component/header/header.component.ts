/*
 * @overview        {HeaderComponent}
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
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router, RouterLinkActive, RouterLink } from '@angular/router';
import { DxMenuModule } from 'devextreme-angular';
import { DxTemplateModule } from 'devextreme-angular/core';
import { NgTemplateOutlet } from '@angular/common';

/**
 * TODO: Description of {@code HeaderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [DxMenuModule, RouterLinkActive, RouterLink, DxTemplateModule, NgTemplateOutlet]
})
export class HeaderComponent implements OnInit {

    public topMenu: any[];
    public showSubmenuModes: any;
    public showFirstSubmenuModes: any;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(private router: Router) {

        this.topMenu = [
            {
                name: 'Autenticacion',
                route: 'autenticacion',
                items: []
            },
            {
                name: 'Barrio',
                route: 'barrio',
                items: []
            },
            {
                name: 'Ciudad',
                route: 'ciudad',
                items: []
            },
            {
                name: 'Farmacia',
                route: 'farmacia',
                items: []
            },
            {
                name: 'FarmaciaMedicamento',
                route: 'farmacia-medicamento',
                items: []
            },
            {
                name: 'Laboratorio',
                route: 'laboratorio',
                items: []
            },
            {
                name: 'LaboratorioMedicamento',
                route: 'laboratorio-medicamento',
                items: []
            },
            {
                name: 'Medicamento',
                route: 'medicamento',
                items: []
            },
            {
                name: 'MedicamentoOnline',
                route: 'medicamento-online',
                items: []
            },
            {
                name: 'Persona',
                route: 'persona',
                items: []
            },
            {
                name: 'Propiedades',
                route: 'propiedades',
                items: []
            },
            {
                name: 'TipoPersona',
                route: 'tipo-persona',
                items: []
            },
        ];

        this.showSubmenuModes = [
            {
                name: "onhover",
                delay: { show: 0, hide: 0 }
            },
            {
                name: "onclick",
                delay: { show: 0, hide: 0 }
            }
        ];

        this.showFirstSubmenuModes = this.showSubmenuModes[0];

    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code itemClick}.
     *
     */
    public itemClick(data: any): void {
        if (data.route && (!data.items || data.items.length == 0))
            this.router.navigateByUrl(data.route);
    }

}
