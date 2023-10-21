import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonService } from './lesson/lesson.service';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    LessonModule,
    TypeOrmModule.forRoot({ type: 'mongodb', url: 'mongodb://localhost:/school', synchronize: true, useUnifiedTopology: true, entities: [Lesson, Student] }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    StudentModule,
  ],
  providers: [LessonService],

})
export class AppModule { }
