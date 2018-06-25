/// <reference path="./component.d.ts" />

import {Component} from './component';
interface Behavior {

}
declare interface BehaviorConstructor {
  new(): Behavior
  (options: Component.Options): Behavior
}
declare var Behavior: BehaviorConstructor
