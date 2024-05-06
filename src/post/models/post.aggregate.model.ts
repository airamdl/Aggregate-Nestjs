import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { IsObject, IsOptional, IsString } from "class-validator";
import { RootEntity } from "./root-entity.model";
import { HydratedDocument } from "mongoose";
import * as mongoose from 'mongoose';
import { Type } from "class-transformer";

export type AggregateDocument = HydratedDocument<PostAggregateSchema>;
@Schema()
export class PostAggregateSchema {

    @Prop({ required: true })
    @IsString()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PostRootEntity', required: false })
    @IsOptional()
    @Type(() => PostRootEntity)
    postRootEntity?: PostRootEntity;
}

export const AggregateSchema = SchemaFactory.createForClass(PostAggregateSchema)