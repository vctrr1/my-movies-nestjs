import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //permite usar prisma em qualquer modulo sem precisar importar manualmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
