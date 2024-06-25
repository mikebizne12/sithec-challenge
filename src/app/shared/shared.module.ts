import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [PipesModule, ComponentsModule],
  exports: [PipesModule, ComponentsModule],
})
export class SharedModule {}
