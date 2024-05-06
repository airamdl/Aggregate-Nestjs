import { PartialType } from '@nestjs/mapped-types';
import { CreatePostAggregateDto } from './create-post.dto';

export class UpdatePostAggregateDto extends PartialType(CreatePostAggregateDto) {

}
