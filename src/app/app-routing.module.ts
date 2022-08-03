import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExtractComponent } from "./extract";
import { NewTransferComponent } from "./new-transfer";

export const routes: Routes = [
    {path: '', redirectTo: 'extract', pathMatch: 'full'},
    {path: 'extract', component: ExtractComponent},
    {path: 'new-transfer', component: NewTransferComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRountingModule{

}
