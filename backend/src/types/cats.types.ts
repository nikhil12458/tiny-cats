import type { Document } from "mongoose";

// why document extends => When you fetch data from your MongoDB database using Mongoose, it doesn't just hand you a plain, simple JavaScript object. It hands you a Mongoose Document. By writing extends Document, you are telling TypeScript, "This ICat interface has my custom properties (name, breed, etc.), AND it also has all of Mongoose's built-in database superpowers." like built in properties and methods such as save(), remove(), and update() that allow you to interact with the database more easily. This way, when you work with an ICat object, TypeScript knows it has both your custom properties and Mongoose's built-in methods, giving you a richer development experience with better type safety and autocompletion in your IDE.

// if not use extends document => if we use cat.save() or cat.remove() without extending Document, TypeScript will throw an error because it won't recognize those methods as part of the ICat interface. By extending Document, we ensure that TypeScript understands that our ICat objects have access to Mongoose's built-in methods, allowing us to use them without any type errors.

export interface ICat extends Document {
  name: string;
  breed: string;
  description: string;
  kidsFriendly: boolean;
  apartmentFriendly: boolean;
  lifeSpan: number;
  energyLevel: string;
  image: string;
  color: string;

  createdAt?: Date;
  updatedAt?: Date;
}
