import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorProfileModule } from './users/tutor-profile.module';
import { SubmissionModule } from './submissions/submission.module';
import { RewardsModule } from './rewards/rewards.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [TutorProfileModule, SubmissionModule, RewardsModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
