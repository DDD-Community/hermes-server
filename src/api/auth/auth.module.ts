import { Module } from '@nestjs/common';
import { ModelModule } from 'src/core/models/model.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ModelModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
