import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from 'session.serializer';
import { LocalStrategy } from 'src/local.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
