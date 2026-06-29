import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorProfileModule } from './users/tutor-profile.module';
import { UsersModule } from './users/users.module';
import { SubmissionModule } from './submissions/submission.module';
import { RewardsModule } from './rewards/rewards.module';
import { ChallengesModule } from './challenges/challenges.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TutorProfileModule,
    UsersModule,
    SubmissionModule,
    RewardsModule,
    ChallengesModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
