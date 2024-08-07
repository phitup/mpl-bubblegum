/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, struct } from '@metaplex-foundation/umi-serializers';
import {
  CompressionAccountType,
  CompressionAccountTypeArgs,
  ConcurrentMerkleTreeHeaderData,
  ConcurrentMerkleTreeHeaderDataArgs,
  getCompressionAccountTypeSerializer,
  getConcurrentMerkleTreeHeaderDataSerializer,
} from '.';

/**
 * Initialization parameters for an SPL ConcurrentMerkleTree.
 *
 * Only the following permutations are valid:
 *
 * | max_depth | max_buffer_size       |
 * | --------- | --------------------- |
 * | 14        | (64, 256, 1024, 2048) |
 * | 20        | (64, 256, 1024, 2048) |
 * | 24        | (64, 256, 512, 1024, 2048) |
 * | 26        | (64, 256, 512, 1024, 2048) |
 * | 30        | (512, 1024, 2048) |
 *
 */

export type ConcurrentMerkleTreeHeader = {
  /** Account type */
  accountType: CompressionAccountType;
  /** Versioned header */
  header: ConcurrentMerkleTreeHeaderData;
};

export type ConcurrentMerkleTreeHeaderArgs = {
  /** Account type */
  accountType: CompressionAccountTypeArgs;
  /** Versioned header */
  header: ConcurrentMerkleTreeHeaderDataArgs;
};

export function getConcurrentMerkleTreeHeaderSerializer(): Serializer<
  ConcurrentMerkleTreeHeaderArgs,
  ConcurrentMerkleTreeHeader
> {
  return struct<ConcurrentMerkleTreeHeader>(
    [
      ['accountType', getCompressionAccountTypeSerializer()],
      ['header', getConcurrentMerkleTreeHeaderDataSerializer()],
    ],
    { description: 'ConcurrentMerkleTreeHeader' }
  ) as Serializer<ConcurrentMerkleTreeHeaderArgs, ConcurrentMerkleTreeHeader>;
}
