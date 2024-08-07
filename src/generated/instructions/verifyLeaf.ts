/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  bytes,
  mapSerializer,
  struct,
  u32,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type VerifyLeafInstructionAccounts = {
  merkleTree: PublicKey | Pda;
};

// Data.
export type VerifyLeafInstructionData = {
  discriminator: Array<number>;
  root: Uint8Array;
  leaf: Uint8Array;
  index: number;
};

export type VerifyLeafInstructionDataArgs = {
  root: Uint8Array;
  leaf: Uint8Array;
  index: number;
};

export function getVerifyLeafInstructionDataSerializer(): Serializer<
  VerifyLeafInstructionDataArgs,
  VerifyLeafInstructionData
> {
  return mapSerializer<
    VerifyLeafInstructionDataArgs,
    any,
    VerifyLeafInstructionData
  >(
    struct<VerifyLeafInstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['root', bytes({ size: 32 })],
        ['leaf', bytes({ size: 32 })],
        ['index', u32()],
      ],
      { description: 'VerifyLeafInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [124, 220, 22, 223, 104, 10, 250, 224],
    })
  ) as Serializer<VerifyLeafInstructionDataArgs, VerifyLeafInstructionData>;
}

// Extra Args.
export type VerifyLeafInstructionExtraArgs = { proof: Array<PublicKey> };

// Args.
export type VerifyLeafInstructionArgs = PickPartial<
  VerifyLeafInstructionDataArgs & VerifyLeafInstructionExtraArgs,
  'proof'
>;

// Instruction.
export function verifyLeaf(
  context: Pick<Context, 'programs'>,
  input: VerifyLeafInstructionAccounts & VerifyLeafInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splAccountCompression',
    'cmtDvXumGCrqC1Age74AVPhSRVXJMd8PJS91L8KbNCK'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    merkleTree: {
      index: 0,
      isWritable: false,
      value: input.merkleTree ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: VerifyLeafInstructionArgs = { ...input };

  // Default values.
  if (!resolvedArgs.proof) {
    resolvedArgs.proof = [];
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Remaining Accounts.
  const remainingAccounts = resolvedArgs.proof.map((value, index) => ({
    index,
    value,
    isWritable: false,
  }));
  orderedAccounts.push(...remainingAccounts);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getVerifyLeafInstructionDataSerializer().serialize(
    resolvedArgs as VerifyLeafInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}