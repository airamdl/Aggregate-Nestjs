import { CreatePostRootEntityDto } from "./create-post-rootEntity.dto";

export class CreatePostDto {
    name: string;

    rootEntity: CreatePostRootEntityDto;
}
