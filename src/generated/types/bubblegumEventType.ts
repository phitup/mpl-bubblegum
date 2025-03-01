/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi-serializers';

export enum BubblegumEventType {
  Uninitialized,
  LeafSchemaEvent,
}

export type BubblegumEventTypeArgs = BubblegumEventType;

export function getBubblegumEventTypeSerializer(): Serializer<
  BubblegumEventTypeArgs,
  BubblegumEventType
> {
  return scalarEnum<BubblegumEventType>(BubblegumEventType, {
    description: 'BubblegumEventType',
  }) as Serializer<BubblegumEventTypeArgs, BubblegumEventType>;
}
