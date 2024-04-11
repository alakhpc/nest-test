import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { DataService } from './data.service';

@Module({
  imports: [UserModule],
  providers: [DataService],
})
export class DataModule {}
