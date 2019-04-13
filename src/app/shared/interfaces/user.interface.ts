import { CollectionObject } from './collection-object.interface';

export interface User extends CollectionObject {
    username: String,
    password: String,
}