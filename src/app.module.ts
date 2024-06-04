import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ProductosModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
