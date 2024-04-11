import { Injectable } from '@nestjs/common';
import { Interval } from 'src/scheduler/interval.decorator';
import { UserService } from 'src/user/user.service';

@Injectable()
export class DataService {
  constructor(private users: UserService) {}

  @Interval({ ms: 1000 })
  private async checkData() {
    console.log(`USER SERVICE: ${this.users}`);
  }
}
