import { PostService } from './post.service';
import { Module, Post } from '@nestjs/common';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostAggregateSchema, AggregateSchema } from './models/post.aggregate.model';
import { PostRootEntity, RootEntitySchema } from './models/post.root-entity.model';

@Module({
  imports: [MongooseModule.forFeature(
    [{ name: PostAggregateSchema.name, schema: AggregateSchema },
    { name: PostRootEntity.name, schema: RootEntitySchema }
    ])
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule { }