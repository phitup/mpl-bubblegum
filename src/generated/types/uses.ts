/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, struct, u64 } from '@metaplex-foundation/umi-serializers';
import { UseMethod, UseMethodArgs, getUseMethodSerializer } from '.';

export type Uses = { useMethod: UseMethod; remaining: bigint; total: bigint };

export type UsesArgs = {
  useMethod: UseMethodArgs;
  remaining: number | bigint;
  total: number | bigint;
};

export function getUsesSerializer(): Serializer<UsesArgs, Uses> {
  return struct<Uses>(
    [
      ['useMethod', getUseMethodSerializer()],
      ['remaining', u64()],
      ['total', u64()],
    ],
    { description: 'Uses' }
  ) as Serializer<UsesArgs, Uses>;
}
