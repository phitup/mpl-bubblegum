/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { PublicKey } from '@metaplex-foundation/umi';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  bytes,
  dataEnum,
  publicKey as publicKeySerializer,
  struct,
  u64,
} from '@metaplex-foundation/umi-serializers';

export type LeafSchema = {
  __kind: 'V1';
  id: PublicKey;
  owner: PublicKey;
  delegate: PublicKey;
  nonce: bigint;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
};

export type LeafSchemaArgs = {
  __kind: 'V1';
  id: PublicKey;
  owner: PublicKey;
  delegate: PublicKey;
  nonce: number | bigint;
  dataHash: Uint8Array;
  creatorHash: Uint8Array;
};

export function getLeafSchemaSerializer(): Serializer<
  LeafSchemaArgs,
  LeafSchema
> {
  return dataEnum<LeafSchema>(
    [
      [
        'V1',
        struct<GetDataEnumKindContent<LeafSchema, 'V1'>>([
          ['id', publicKeySerializer()],
          ['owner', publicKeySerializer()],
          ['delegate', publicKeySerializer()],
          ['nonce', u64()],
          ['dataHash', bytes({ size: 32 })],
          ['creatorHash', bytes({ size: 32 })],
        ]),
      ],
    ],
    { description: 'LeafSchema' }
  ) as Serializer<LeafSchemaArgs, LeafSchema>;
}

// Data Enum Helpers.
export function leafSchema(
  kind: 'V1',
  data: GetDataEnumKindContent<LeafSchemaArgs, 'V1'>
): GetDataEnumKind<LeafSchemaArgs, 'V1'>;
export function leafSchema<K extends LeafSchemaArgs['__kind']>(
  kind: K,
  data?: any
): Extract<LeafSchemaArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isLeafSchema<K extends LeafSchema['__kind']>(
  kind: K,
  value: LeafSchema
): value is LeafSchema & { __kind: K } {
  return value.__kind === kind;
}
