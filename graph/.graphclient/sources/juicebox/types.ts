// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace JuiceboxTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type DeployETHERC20ProjectPayerEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  address: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  preferClaimedTokens: Scalars['Boolean'];
  preferAddToBalance: Scalars['Boolean'];
  directory: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  memo?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Bytes']>;
  caller: Scalars['Bytes'];
};

export type DeployETHERC20ProjectPayerEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  preferClaimedTokens?: InputMaybe<Scalars['Boolean']>;
  preferClaimedTokens_not?: InputMaybe<Scalars['Boolean']>;
  preferClaimedTokens_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferClaimedTokens_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  directory?: InputMaybe<Scalars['Bytes']>;
  directory_not?: InputMaybe<Scalars['Bytes']>;
  directory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  directory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  directory_contains?: InputMaybe<Scalars['Bytes']>;
  directory_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Bytes']>;
  metadata_not?: InputMaybe<Scalars['Bytes']>;
  metadata_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadata_contains?: InputMaybe<Scalars['Bytes']>;
  metadata_not_contains?: InputMaybe<Scalars['Bytes']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DeployETHERC20ProjectPayerEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'address'
  | 'beneficiary'
  | 'preferClaimedTokens'
  | 'preferAddToBalance'
  | 'directory'
  | 'owner'
  | 'memo'
  | 'metadata'
  | 'caller';

export type DeployedERC20Event = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  symbol: Scalars['String'];
  address?: Maybe<Scalars['Bytes']>;
};

export type DeployedERC20Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DeployedERC20Event_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'txHash'
  | 'symbol'
  | 'address';

export type DistributePayoutsEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleConfiguration: Scalars['BigInt'];
  fundingCycleNumber: Scalars['Int'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  distributedAmount: Scalars['BigInt'];
  fee: Scalars['BigInt'];
  beneficiaryDistributionAmount: Scalars['BigInt'];
  memo: Scalars['String'];
  caller: Scalars['Bytes'];
  splitDistributions: Array<DistributeToPayoutSplitEvent>;
};


export type DistributePayoutsEventsplitDistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
};

export type DistributePayoutsEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleConfiguration?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleConfiguration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  fundingCycleNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedAmount?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_not?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryDistributionAmount?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_not?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_gt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_lt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_gte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_lte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryDistributionAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryDistributionAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  splitDistributions_?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributePayoutsEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleConfiguration'
  | 'fundingCycleNumber'
  | 'beneficiary'
  | 'amount'
  | 'distributedAmount'
  | 'fee'
  | 'beneficiaryDistributionAmount'
  | 'memo'
  | 'caller'
  | 'splitDistributions';

export type DistributeReservedTokensEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleNumber: Scalars['Int'];
  beneficiary: Scalars['Bytes'];
  tokenCount: Scalars['BigInt'];
  beneficiaryTokenCount: Scalars['BigInt'];
  memo: Scalars['String'];
  caller: Scalars['Bytes'];
  splitDistributions: Array<DistributeToReservedTokenSplitEvent>;
};


export type DistributeReservedTokensEventsplitDistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
};

export type DistributeReservedTokensEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  fundingCycleNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTokenCount?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_not?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  splitDistributions_?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributeReservedTokensEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleNumber'
  | 'beneficiary'
  | 'tokenCount'
  | 'beneficiaryTokenCount'
  | 'memo'
  | 'caller'
  | 'splitDistributions';

export type DistributeToPayoutModEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleId: Scalars['BigInt'];
  modProjectId: Scalars['Int'];
  modAllocator: Scalars['Bytes'];
  modBeneficiary: Scalars['Bytes'];
  modPreferUnstaked: Scalars['Boolean'];
  modCut: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  tapEvent: TapEvent;
};

export type DistributeToPayoutModEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modProjectId?: InputMaybe<Scalars['Int']>;
  modProjectId_not?: InputMaybe<Scalars['Int']>;
  modProjectId_gt?: InputMaybe<Scalars['Int']>;
  modProjectId_lt?: InputMaybe<Scalars['Int']>;
  modProjectId_gte?: InputMaybe<Scalars['Int']>;
  modProjectId_lte?: InputMaybe<Scalars['Int']>;
  modProjectId_in?: InputMaybe<Array<Scalars['Int']>>;
  modProjectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  modAllocator?: InputMaybe<Scalars['Bytes']>;
  modAllocator_not?: InputMaybe<Scalars['Bytes']>;
  modAllocator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modAllocator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modAllocator_contains?: InputMaybe<Scalars['Bytes']>;
  modAllocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_not?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modBeneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  modPreferUnstaked?: InputMaybe<Scalars['Boolean']>;
  modPreferUnstaked_not?: InputMaybe<Scalars['Boolean']>;
  modPreferUnstaked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  modPreferUnstaked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  modCut?: InputMaybe<Scalars['BigInt']>;
  modCut_not?: InputMaybe<Scalars['BigInt']>;
  modCut_gt?: InputMaybe<Scalars['BigInt']>;
  modCut_lt?: InputMaybe<Scalars['BigInt']>;
  modCut_gte?: InputMaybe<Scalars['BigInt']>;
  modCut_lte?: InputMaybe<Scalars['BigInt']>;
  modCut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modCut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  tapEvent?: InputMaybe<Scalars['String']>;
  tapEvent_not?: InputMaybe<Scalars['String']>;
  tapEvent_gt?: InputMaybe<Scalars['String']>;
  tapEvent_lt?: InputMaybe<Scalars['String']>;
  tapEvent_gte?: InputMaybe<Scalars['String']>;
  tapEvent_lte?: InputMaybe<Scalars['String']>;
  tapEvent_in?: InputMaybe<Array<Scalars['String']>>;
  tapEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  tapEvent_contains?: InputMaybe<Scalars['String']>;
  tapEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_contains?: InputMaybe<Scalars['String']>;
  tapEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_starts_with?: InputMaybe<Scalars['String']>;
  tapEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  tapEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_ends_with?: InputMaybe<Scalars['String']>;
  tapEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  tapEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_?: InputMaybe<TapEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributeToPayoutModEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleId'
  | 'modProjectId'
  | 'modAllocator'
  | 'modBeneficiary'
  | 'modPreferUnstaked'
  | 'modCut'
  | 'caller'
  | 'tapEvent';

export type DistributeToPayoutSplitEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  domain: Scalars['BigInt'];
  group: Scalars['BigInt'];
  amount: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  distributePayoutsEvent: DistributePayoutsEvent;
  preferClaimed: Scalars['Boolean'];
  preferAddToBalance: Scalars['Boolean'];
  percent: Scalars['Int'];
  splitProjectId: Scalars['Int'];
  beneficiary: Scalars['Bytes'];
  lockedUntil: Scalars['Int'];
  allocator: Scalars['Bytes'];
};

export type DistributeToPayoutSplitEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  group?: InputMaybe<Scalars['BigInt']>;
  group_not?: InputMaybe<Scalars['BigInt']>;
  group_gt?: InputMaybe<Scalars['BigInt']>;
  group_lt?: InputMaybe<Scalars['BigInt']>;
  group_gte?: InputMaybe<Scalars['BigInt']>;
  group_lte?: InputMaybe<Scalars['BigInt']>;
  group_in?: InputMaybe<Array<Scalars['BigInt']>>;
  group_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  distributePayoutsEvent?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_gt?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_lt?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_gte?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_lte?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributePayoutsEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributePayoutsEvent_contains?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_filter>;
  preferClaimed?: InputMaybe<Scalars['Boolean']>;
  preferClaimed_not?: InputMaybe<Scalars['Boolean']>;
  preferClaimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferClaimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  percent?: InputMaybe<Scalars['Int']>;
  percent_not?: InputMaybe<Scalars['Int']>;
  percent_gt?: InputMaybe<Scalars['Int']>;
  percent_lt?: InputMaybe<Scalars['Int']>;
  percent_gte?: InputMaybe<Scalars['Int']>;
  percent_lte?: InputMaybe<Scalars['Int']>;
  percent_in?: InputMaybe<Array<Scalars['Int']>>;
  percent_not_in?: InputMaybe<Array<Scalars['Int']>>;
  splitProjectId?: InputMaybe<Scalars['Int']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']>;
  splitProjectId_in?: InputMaybe<Array<Scalars['Int']>>;
  splitProjectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocator?: InputMaybe<Scalars['Bytes']>;
  allocator_not?: InputMaybe<Scalars['Bytes']>;
  allocator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocator_contains?: InputMaybe<Scalars['Bytes']>;
  allocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributeToPayoutSplitEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'domain'
  | 'group'
  | 'amount'
  | 'caller'
  | 'distributePayoutsEvent'
  | 'preferClaimed'
  | 'preferAddToBalance'
  | 'percent'
  | 'splitProjectId'
  | 'beneficiary'
  | 'lockedUntil'
  | 'allocator';

export type DistributeToReservedTokenSplitEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  tokenCount: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  distributeReservedTokensEvent: DistributeReservedTokensEvent;
  preferClaimed: Scalars['Boolean'];
  percent: Scalars['Int'];
  splitProjectId: Scalars['Int'];
  beneficiary: Scalars['Bytes'];
  lockedUntil: Scalars['Int'];
  allocator: Scalars['Bytes'];
};

export type DistributeToReservedTokenSplitEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  distributeReservedTokensEvent?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeReservedTokensEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_filter>;
  preferClaimed?: InputMaybe<Scalars['Boolean']>;
  preferClaimed_not?: InputMaybe<Scalars['Boolean']>;
  preferClaimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferClaimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  percent?: InputMaybe<Scalars['Int']>;
  percent_not?: InputMaybe<Scalars['Int']>;
  percent_gt?: InputMaybe<Scalars['Int']>;
  percent_lt?: InputMaybe<Scalars['Int']>;
  percent_gte?: InputMaybe<Scalars['Int']>;
  percent_lte?: InputMaybe<Scalars['Int']>;
  percent_in?: InputMaybe<Array<Scalars['Int']>>;
  percent_not_in?: InputMaybe<Array<Scalars['Int']>>;
  splitProjectId?: InputMaybe<Scalars['Int']>;
  splitProjectId_not?: InputMaybe<Scalars['Int']>;
  splitProjectId_gt?: InputMaybe<Scalars['Int']>;
  splitProjectId_lt?: InputMaybe<Scalars['Int']>;
  splitProjectId_gte?: InputMaybe<Scalars['Int']>;
  splitProjectId_lte?: InputMaybe<Scalars['Int']>;
  splitProjectId_in?: InputMaybe<Array<Scalars['Int']>>;
  splitProjectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  lockedUntil?: InputMaybe<Scalars['Int']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']>>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']>>;
  allocator?: InputMaybe<Scalars['Bytes']>;
  allocator_not?: InputMaybe<Scalars['Bytes']>;
  allocator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  allocator_contains?: InputMaybe<Scalars['Bytes']>;
  allocator_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributeToReservedTokenSplitEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'tokenCount'
  | 'caller'
  | 'distributeReservedTokensEvent'
  | 'preferClaimed'
  | 'percent'
  | 'splitProjectId'
  | 'beneficiary'
  | 'lockedUntil'
  | 'allocator';

export type DistributeToTicketModEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleId: Scalars['BigInt'];
  modBeneficiary: Scalars['Bytes'];
  modPreferUnstaked: Scalars['Boolean'];
  modCut: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  printReservesEvent: PrintReservesEvent;
};

export type DistributeToTicketModEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modBeneficiary?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_not?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  modBeneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  modBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  modPreferUnstaked?: InputMaybe<Scalars['Boolean']>;
  modPreferUnstaked_not?: InputMaybe<Scalars['Boolean']>;
  modPreferUnstaked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  modPreferUnstaked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  modCut?: InputMaybe<Scalars['BigInt']>;
  modCut_not?: InputMaybe<Scalars['BigInt']>;
  modCut_gt?: InputMaybe<Scalars['BigInt']>;
  modCut_lt?: InputMaybe<Scalars['BigInt']>;
  modCut_gte?: InputMaybe<Scalars['BigInt']>;
  modCut_lte?: InputMaybe<Scalars['BigInt']>;
  modCut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  modCut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  printReservesEvent?: InputMaybe<Scalars['String']>;
  printReservesEvent_not?: InputMaybe<Scalars['String']>;
  printReservesEvent_gt?: InputMaybe<Scalars['String']>;
  printReservesEvent_lt?: InputMaybe<Scalars['String']>;
  printReservesEvent_gte?: InputMaybe<Scalars['String']>;
  printReservesEvent_lte?: InputMaybe<Scalars['String']>;
  printReservesEvent_in?: InputMaybe<Array<Scalars['String']>>;
  printReservesEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  printReservesEvent_contains?: InputMaybe<Scalars['String']>;
  printReservesEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_contains?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_starts_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_ends_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_?: InputMaybe<PrintReservesEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DistributeToTicketModEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleId'
  | 'modBeneficiary'
  | 'modPreferUnstaked'
  | 'modCut'
  | 'caller'
  | 'printReservesEvent';

export type ENSNode = {
  id: Scalars['ID'];
  projectId?: Maybe<Scalars['Int']>;
};

export type ENSNode_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ENSNode_orderBy =
  | 'id'
  | 'projectId';

export type ETHERC20ProjectPayer = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  address: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  preferClaimedTokens: Scalars['Boolean'];
  preferAddToBalance: Scalars['Boolean'];
  directory: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  memo?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Bytes']>;
};

export type ETHERC20ProjectPayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  preferClaimedTokens?: InputMaybe<Scalars['Boolean']>;
  preferClaimedTokens_not?: InputMaybe<Scalars['Boolean']>;
  preferClaimedTokens_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferClaimedTokens_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_not?: InputMaybe<Scalars['Boolean']>;
  preferAddToBalance_in?: InputMaybe<Array<Scalars['Boolean']>>;
  preferAddToBalance_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  directory?: InputMaybe<Scalars['Bytes']>;
  directory_not?: InputMaybe<Scalars['Bytes']>;
  directory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  directory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  directory_contains?: InputMaybe<Scalars['Bytes']>;
  directory_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['Bytes']>;
  metadata_not?: InputMaybe<Scalars['Bytes']>;
  metadata_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadata_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  metadata_contains?: InputMaybe<Scalars['Bytes']>;
  metadata_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ETHERC20ProjectPayer_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'address'
  | 'beneficiary'
  | 'preferClaimedTokens'
  | 'preferAddToBalance'
  | 'directory'
  | 'owner'
  | 'memo'
  | 'metadata';

export type MintTokensEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  memo: Scalars['String'];
  caller: Scalars['Bytes'];
};

export type MintTokensEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MintTokensEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'txHash'
  | 'beneficiary'
  | 'amount'
  | 'memo'
  | 'caller';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Participant = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  wallet: Scalars['Bytes'];
  totalPaid: Scalars['BigInt'];
  lastPaidTimestamp: Scalars['Int'];
  balance: Scalars['BigInt'];
  stakedBalance: Scalars['BigInt'];
  unstakedBalance: Scalars['BigInt'];
};

export type Participant_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<Scalars['Bytes']>;
  wallet_not?: InputMaybe<Scalars['Bytes']>;
  wallet_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  wallet_contains?: InputMaybe<Scalars['Bytes']>;
  wallet_not_contains?: InputMaybe<Scalars['Bytes']>;
  totalPaid?: InputMaybe<Scalars['BigInt']>;
  totalPaid_not?: InputMaybe<Scalars['BigInt']>;
  totalPaid_gt?: InputMaybe<Scalars['BigInt']>;
  totalPaid_lt?: InputMaybe<Scalars['BigInt']>;
  totalPaid_gte?: InputMaybe<Scalars['BigInt']>;
  totalPaid_lte?: InputMaybe<Scalars['BigInt']>;
  totalPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPaidTimestamp?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_not?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_gt?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_lt?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_gte?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_lte?: InputMaybe<Scalars['Int']>;
  lastPaidTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  lastPaidTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedBalance?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_not?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_gt?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_lt?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_gte?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_lte?: InputMaybe<Scalars['BigInt']>;
  stakedBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedBalance?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_not?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_gt?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_lt?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_gte?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_lte?: InputMaybe<Scalars['BigInt']>;
  unstakedBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unstakedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Participant_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'wallet'
  | 'totalPaid'
  | 'lastPaidTimestamp'
  | 'balance'
  | 'stakedBalance'
  | 'unstakedBalance';

export type PayEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  caller: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  note: Scalars['String'];
  feeFromV2Project?: Maybe<Scalars['Int']>;
};

export type PayEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  note?: InputMaybe<Scalars['String']>;
  note_not?: InputMaybe<Scalars['String']>;
  note_gt?: InputMaybe<Scalars['String']>;
  note_lt?: InputMaybe<Scalars['String']>;
  note_gte?: InputMaybe<Scalars['String']>;
  note_lte?: InputMaybe<Scalars['String']>;
  note_in?: InputMaybe<Array<Scalars['String']>>;
  note_not_in?: InputMaybe<Array<Scalars['String']>>;
  note_contains?: InputMaybe<Scalars['String']>;
  note_contains_nocase?: InputMaybe<Scalars['String']>;
  note_not_contains?: InputMaybe<Scalars['String']>;
  note_not_contains_nocase?: InputMaybe<Scalars['String']>;
  note_starts_with?: InputMaybe<Scalars['String']>;
  note_starts_with_nocase?: InputMaybe<Scalars['String']>;
  note_not_starts_with?: InputMaybe<Scalars['String']>;
  note_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  note_ends_with?: InputMaybe<Scalars['String']>;
  note_ends_with_nocase?: InputMaybe<Scalars['String']>;
  note_not_ends_with?: InputMaybe<Scalars['String']>;
  note_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeFromV2Project?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_not?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_gt?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_lt?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_gte?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_lte?: InputMaybe<Scalars['Int']>;
  feeFromV2Project_in?: InputMaybe<Array<Scalars['Int']>>;
  feeFromV2Project_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PayEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'txHash'
  | 'caller'
  | 'beneficiary'
  | 'amount'
  | 'note'
  | 'feeFromV2Project';

export type PrintReservesEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleId: Scalars['BigInt'];
  beneficiary: Scalars['Bytes'];
  count: Scalars['BigInt'];
  beneficiaryTicketAmount: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  distributions: Array<DistributeToTicketModEvent>;
};


export type PrintReservesEventdistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToTicketModEvent_filter>;
};

export type PrintReservesEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTicketAmount?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_not?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_gt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_lt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_gte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_lte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTicketAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTicketAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  distributions_?: InputMaybe<DistributeToTicketModEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PrintReservesEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleId'
  | 'beneficiary'
  | 'count'
  | 'beneficiaryTicketAmount'
  | 'caller'
  | 'distributions';

export type Project = {
  id: Scalars['ID'];
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  handle?: Maybe<Scalars['String']>;
  metadataUri?: Maybe<Scalars['String']>;
  metadataDomain?: Maybe<Scalars['BigInt']>;
  terminal?: Maybe<Scalars['Bytes']>;
  owner: Scalars['Bytes'];
  createdAt: Scalars['Int'];
  totalPaid: Scalars['BigInt'];
  totalRedeemed: Scalars['BigInt'];
  currentBalance: Scalars['BigInt'];
  trendingScore: Scalars['BigInt'];
  trendingVolume: Scalars['BigInt'];
  trendingPaymentsCount: Scalars['Int'];
  createdWithinTrendingWindow: Scalars['Boolean'];
  participants: Array<Participant>;
  payEvents: Array<PayEvent>;
  mintTokensEvents: Array<MintTokensEvent>;
  tapEvents: Array<TapEvent>;
  redeemEvents: Array<RedeemEvent>;
  printReservesEvents: Array<PrintReservesEvent>;
  distributeToPayoutModEvents: Array<DistributeToPayoutModEvent>;
  distributeToTicketModEvents: Array<DistributeToTicketModEvent>;
  deployedERC20s: Array<DeployedERC20Event>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  deployedERC20Events: Array<DeployedERC20Event>;
  useAllowanceEvents: Array<UseAllowanceEvent>;
  projectEvents: Array<ProjectEvent>;
  ethErc20ProjectPayers: Array<ETHERC20ProjectPayer>;
};


export type ProjectparticipantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Participant_filter>;
};


export type ProjectpayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PayEvent_filter>;
};


export type ProjectmintTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintTokensEvent_filter>;
};


export type ProjecttapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TapEvent_filter>;
};


export type ProjectredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemEvent_filter>;
};


export type ProjectprintReservesEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PrintReservesEvent_filter>;
};


export type ProjectdistributeToPayoutModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutModEvent_filter>;
};


export type ProjectdistributeToTicketModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToTicketModEvent_filter>;
};


export type ProjectdeployedERC20sArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedERC20Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployedERC20Event_filter>;
};


export type ProjectdistributePayoutsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributePayoutsEvent_filter>;
};


export type ProjectdistributeToPayoutSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
};


export type ProjectdistributeReservedTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeReservedTokensEvent_filter>;
};


export type ProjectdistributeToReservedTokenSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
};


export type ProjectdeployedERC20EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedERC20Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployedERC20Event_filter>;
};


export type ProjectuseAllowanceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UseAllowanceEvent_filter>;
};


export type ProjectprojectEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectEvent_filter>;
};


export type ProjectethErc20ProjectPayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ETHERC20ProjectPayer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ETHERC20ProjectPayer_filter>;
};

export type ProjectCreateEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  caller: Scalars['Bytes'];
};

export type ProjectCreateEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProjectCreateEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'txHash'
  | 'caller';

export type ProjectEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  payEvent?: Maybe<PayEvent>;
  mintTokensEvent?: Maybe<MintTokensEvent>;
  tapEvent?: Maybe<TapEvent>;
  redeemEvent?: Maybe<RedeemEvent>;
  printReservesEvent?: Maybe<PrintReservesEvent>;
  distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  deployedERC20Event?: Maybe<DeployedERC20Event>;
  projectCreateEvent?: Maybe<ProjectCreateEvent>;
  distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  useAllowanceEvent?: Maybe<UseAllowanceEvent>;
  deployETHERC20ProjectPayerEvent?: Maybe<DeployETHERC20ProjectPayerEvent>;
};

export type ProjectEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  payEvent?: InputMaybe<Scalars['String']>;
  payEvent_not?: InputMaybe<Scalars['String']>;
  payEvent_gt?: InputMaybe<Scalars['String']>;
  payEvent_lt?: InputMaybe<Scalars['String']>;
  payEvent_gte?: InputMaybe<Scalars['String']>;
  payEvent_lte?: InputMaybe<Scalars['String']>;
  payEvent_in?: InputMaybe<Array<Scalars['String']>>;
  payEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  payEvent_contains?: InputMaybe<Scalars['String']>;
  payEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  payEvent_not_contains?: InputMaybe<Scalars['String']>;
  payEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  payEvent_starts_with?: InputMaybe<Scalars['String']>;
  payEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  payEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  payEvent_ends_with?: InputMaybe<Scalars['String']>;
  payEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  payEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  payEvent_?: InputMaybe<PayEvent_filter>;
  mintTokensEvent?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not?: InputMaybe<Scalars['String']>;
  mintTokensEvent_gt?: InputMaybe<Scalars['String']>;
  mintTokensEvent_lt?: InputMaybe<Scalars['String']>;
  mintTokensEvent_gte?: InputMaybe<Scalars['String']>;
  mintTokensEvent_lte?: InputMaybe<Scalars['String']>;
  mintTokensEvent_in?: InputMaybe<Array<Scalars['String']>>;
  mintTokensEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  mintTokensEvent_contains?: InputMaybe<Scalars['String']>;
  mintTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  mintTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  mintTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  mintTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  mintTokensEvent_?: InputMaybe<MintTokensEvent_filter>;
  tapEvent?: InputMaybe<Scalars['String']>;
  tapEvent_not?: InputMaybe<Scalars['String']>;
  tapEvent_gt?: InputMaybe<Scalars['String']>;
  tapEvent_lt?: InputMaybe<Scalars['String']>;
  tapEvent_gte?: InputMaybe<Scalars['String']>;
  tapEvent_lte?: InputMaybe<Scalars['String']>;
  tapEvent_in?: InputMaybe<Array<Scalars['String']>>;
  tapEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  tapEvent_contains?: InputMaybe<Scalars['String']>;
  tapEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_contains?: InputMaybe<Scalars['String']>;
  tapEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_starts_with?: InputMaybe<Scalars['String']>;
  tapEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  tapEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_ends_with?: InputMaybe<Scalars['String']>;
  tapEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  tapEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tapEvent_?: InputMaybe<TapEvent_filter>;
  redeemEvent?: InputMaybe<Scalars['String']>;
  redeemEvent_not?: InputMaybe<Scalars['String']>;
  redeemEvent_gt?: InputMaybe<Scalars['String']>;
  redeemEvent_lt?: InputMaybe<Scalars['String']>;
  redeemEvent_gte?: InputMaybe<Scalars['String']>;
  redeemEvent_lte?: InputMaybe<Scalars['String']>;
  redeemEvent_in?: InputMaybe<Array<Scalars['String']>>;
  redeemEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  redeemEvent_contains?: InputMaybe<Scalars['String']>;
  redeemEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_not_contains?: InputMaybe<Scalars['String']>;
  redeemEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_starts_with?: InputMaybe<Scalars['String']>;
  redeemEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  redeemEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_ends_with?: InputMaybe<Scalars['String']>;
  redeemEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  redeemEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  redeemEvent_?: InputMaybe<RedeemEvent_filter>;
  printReservesEvent?: InputMaybe<Scalars['String']>;
  printReservesEvent_not?: InputMaybe<Scalars['String']>;
  printReservesEvent_gt?: InputMaybe<Scalars['String']>;
  printReservesEvent_lt?: InputMaybe<Scalars['String']>;
  printReservesEvent_gte?: InputMaybe<Scalars['String']>;
  printReservesEvent_lte?: InputMaybe<Scalars['String']>;
  printReservesEvent_in?: InputMaybe<Array<Scalars['String']>>;
  printReservesEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  printReservesEvent_contains?: InputMaybe<Scalars['String']>;
  printReservesEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_contains?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_starts_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_ends_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  printReservesEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  printReservesEvent_?: InputMaybe<PrintReservesEvent_filter>;
  distributeToPayoutModEvent?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_gt?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_lt?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_gte?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_lte?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToPayoutModEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToPayoutModEvent_contains?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutModEvent_?: InputMaybe<DistributeToPayoutModEvent_filter>;
  distributeToTicketModEvent?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_gt?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_lt?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_gte?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_lte?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToTicketModEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToTicketModEvent_contains?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToTicketModEvent_?: InputMaybe<DistributeToTicketModEvent_filter>;
  deployedERC20Event?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not?: InputMaybe<Scalars['String']>;
  deployedERC20Event_gt?: InputMaybe<Scalars['String']>;
  deployedERC20Event_lt?: InputMaybe<Scalars['String']>;
  deployedERC20Event_gte?: InputMaybe<Scalars['String']>;
  deployedERC20Event_lte?: InputMaybe<Scalars['String']>;
  deployedERC20Event_in?: InputMaybe<Array<Scalars['String']>>;
  deployedERC20Event_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployedERC20Event_contains?: InputMaybe<Scalars['String']>;
  deployedERC20Event_contains_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_contains?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_starts_with?: InputMaybe<Scalars['String']>;
  deployedERC20Event_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_starts_with?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_ends_with?: InputMaybe<Scalars['String']>;
  deployedERC20Event_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_ends_with?: InputMaybe<Scalars['String']>;
  deployedERC20Event_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployedERC20Event_?: InputMaybe<DeployedERC20Event_filter>;
  projectCreateEvent?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not?: InputMaybe<Scalars['String']>;
  projectCreateEvent_gt?: InputMaybe<Scalars['String']>;
  projectCreateEvent_lt?: InputMaybe<Scalars['String']>;
  projectCreateEvent_gte?: InputMaybe<Scalars['String']>;
  projectCreateEvent_lte?: InputMaybe<Scalars['String']>;
  projectCreateEvent_in?: InputMaybe<Array<Scalars['String']>>;
  projectCreateEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  projectCreateEvent_contains?: InputMaybe<Scalars['String']>;
  projectCreateEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_contains?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_starts_with?: InputMaybe<Scalars['String']>;
  projectCreateEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_ends_with?: InputMaybe<Scalars['String']>;
  projectCreateEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  projectCreateEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  projectCreateEvent_?: InputMaybe<ProjectCreateEvent_filter>;
  distributePayoutsEvent?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_gt?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_lt?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_gte?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_lte?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributePayoutsEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributePayoutsEvent_contains?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributePayoutsEvent_?: InputMaybe<DistributePayoutsEvent_filter>;
  distributeReservedTokensEvent?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_gt?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_lt?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_gte?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_lte?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeReservedTokensEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeReservedTokensEvent_contains?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeReservedTokensEvent_?: InputMaybe<DistributeReservedTokensEvent_filter>;
  distributeToReservedTokenSplitEvent?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_gt?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_lt?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_gte?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_lte?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToReservedTokenSplitEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToReservedTokenSplitEvent_contains?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToReservedTokenSplitEvent_?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
  distributeToPayoutSplitEvent?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_gt?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_lt?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_gte?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_lte?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToPayoutSplitEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  distributeToPayoutSplitEvent_contains?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_contains?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_starts_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_ends_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  distributeToPayoutSplitEvent_?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
  useAllowanceEvent?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_gt?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_lt?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_gte?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_lte?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_in?: InputMaybe<Array<Scalars['String']>>;
  useAllowanceEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  useAllowanceEvent_contains?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_contains?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_starts_with?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_ends_with?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  useAllowanceEvent_?: InputMaybe<UseAllowanceEvent_filter>;
  deployETHERC20ProjectPayerEvent?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_gt?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_lt?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_gte?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_lte?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_in?: InputMaybe<Array<Scalars['String']>>;
  deployETHERC20ProjectPayerEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  deployETHERC20ProjectPayerEvent_contains?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_contains?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_starts_with?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_ends_with?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  deployETHERC20ProjectPayerEvent_?: InputMaybe<DeployETHERC20ProjectPayerEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProjectEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'payEvent'
  | 'mintTokensEvent'
  | 'tapEvent'
  | 'redeemEvent'
  | 'printReservesEvent'
  | 'distributeToPayoutModEvent'
  | 'distributeToTicketModEvent'
  | 'deployedERC20Event'
  | 'projectCreateEvent'
  | 'distributePayoutsEvent'
  | 'distributeReservedTokensEvent'
  | 'distributeToReservedTokenSplitEvent'
  | 'distributeToPayoutSplitEvent'
  | 'useAllowanceEvent'
  | 'deployETHERC20ProjectPayerEvent';

export type Project_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  handle_not?: InputMaybe<Scalars['String']>;
  handle_gt?: InputMaybe<Scalars['String']>;
  handle_lt?: InputMaybe<Scalars['String']>;
  handle_gte?: InputMaybe<Scalars['String']>;
  handle_lte?: InputMaybe<Scalars['String']>;
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  handle_contains?: InputMaybe<Scalars['String']>;
  handle_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_not_contains?: InputMaybe<Scalars['String']>;
  handle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  handle_starts_with?: InputMaybe<Scalars['String']>;
  handle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  handle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  handle_ends_with?: InputMaybe<Scalars['String']>;
  handle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  handle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri?: InputMaybe<Scalars['String']>;
  metadataUri_not?: InputMaybe<Scalars['String']>;
  metadataUri_gt?: InputMaybe<Scalars['String']>;
  metadataUri_lt?: InputMaybe<Scalars['String']>;
  metadataUri_gte?: InputMaybe<Scalars['String']>;
  metadataUri_lte?: InputMaybe<Scalars['String']>;
  metadataUri_in?: InputMaybe<Array<Scalars['String']>>;
  metadataUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataUri_contains?: InputMaybe<Scalars['String']>;
  metadataUri_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_not_contains?: InputMaybe<Scalars['String']>;
  metadataUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_starts_with?: InputMaybe<Scalars['String']>;
  metadataUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_ends_with?: InputMaybe<Scalars['String']>;
  metadataUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataDomain?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_not?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_gt?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_lt?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_gte?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_lte?: InputMaybe<Scalars['BigInt']>;
  metadataDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  metadataDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  terminal?: InputMaybe<Scalars['Bytes']>;
  terminal_not?: InputMaybe<Scalars['Bytes']>;
  terminal_in?: InputMaybe<Array<Scalars['Bytes']>>;
  terminal_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  terminal_contains?: InputMaybe<Scalars['Bytes']>;
  terminal_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPaid?: InputMaybe<Scalars['BigInt']>;
  totalPaid_not?: InputMaybe<Scalars['BigInt']>;
  totalPaid_gt?: InputMaybe<Scalars['BigInt']>;
  totalPaid_lt?: InputMaybe<Scalars['BigInt']>;
  totalPaid_gte?: InputMaybe<Scalars['BigInt']>;
  totalPaid_lte?: InputMaybe<Scalars['BigInt']>;
  totalPaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRedeemed?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  totalRedeemed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRedeemed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentBalance?: InputMaybe<Scalars['BigInt']>;
  currentBalance_not?: InputMaybe<Scalars['BigInt']>;
  currentBalance_gt?: InputMaybe<Scalars['BigInt']>;
  currentBalance_lt?: InputMaybe<Scalars['BigInt']>;
  currentBalance_gte?: InputMaybe<Scalars['BigInt']>;
  currentBalance_lte?: InputMaybe<Scalars['BigInt']>;
  currentBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currentBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trendingScore?: InputMaybe<Scalars['BigInt']>;
  trendingScore_not?: InputMaybe<Scalars['BigInt']>;
  trendingScore_gt?: InputMaybe<Scalars['BigInt']>;
  trendingScore_lt?: InputMaybe<Scalars['BigInt']>;
  trendingScore_gte?: InputMaybe<Scalars['BigInt']>;
  trendingScore_lte?: InputMaybe<Scalars['BigInt']>;
  trendingScore_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trendingScore_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trendingVolume?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_not?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_gt?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_lt?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_gte?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_lte?: InputMaybe<Scalars['BigInt']>;
  trendingVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trendingVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trendingPaymentsCount?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_not?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_gt?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_lt?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_gte?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_lte?: InputMaybe<Scalars['Int']>;
  trendingPaymentsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  trendingPaymentsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  createdWithinTrendingWindow?: InputMaybe<Scalars['Boolean']>;
  createdWithinTrendingWindow_not?: InputMaybe<Scalars['Boolean']>;
  createdWithinTrendingWindow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdWithinTrendingWindow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  participants_?: InputMaybe<Participant_filter>;
  payEvents_?: InputMaybe<PayEvent_filter>;
  mintTokensEvents_?: InputMaybe<MintTokensEvent_filter>;
  tapEvents_?: InputMaybe<TapEvent_filter>;
  redeemEvents_?: InputMaybe<RedeemEvent_filter>;
  printReservesEvents_?: InputMaybe<PrintReservesEvent_filter>;
  distributeToPayoutModEvents_?: InputMaybe<DistributeToPayoutModEvent_filter>;
  distributeToTicketModEvents_?: InputMaybe<DistributeToTicketModEvent_filter>;
  deployedERC20s_?: InputMaybe<DeployedERC20Event_filter>;
  distributePayoutsEvents_?: InputMaybe<DistributePayoutsEvent_filter>;
  distributeToPayoutSplitEvents_?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
  distributeReservedTokensEvents_?: InputMaybe<DistributeReservedTokensEvent_filter>;
  distributeToReservedTokenSplitEvents_?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
  deployedERC20Events_?: InputMaybe<DeployedERC20Event_filter>;
  useAllowanceEvents_?: InputMaybe<UseAllowanceEvent_filter>;
  projectEvents_?: InputMaybe<ProjectEvent_filter>;
  ethErc20ProjectPayers_?: InputMaybe<ETHERC20ProjectPayer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Project_orderBy =
  | 'id'
  | 'projectId'
  | 'cv'
  | 'handle'
  | 'metadataUri'
  | 'metadataDomain'
  | 'terminal'
  | 'owner'
  | 'createdAt'
  | 'totalPaid'
  | 'totalRedeemed'
  | 'currentBalance'
  | 'trendingScore'
  | 'trendingVolume'
  | 'trendingPaymentsCount'
  | 'createdWithinTrendingWindow'
  | 'participants'
  | 'payEvents'
  | 'mintTokensEvents'
  | 'tapEvents'
  | 'redeemEvents'
  | 'printReservesEvents'
  | 'distributeToPayoutModEvents'
  | 'distributeToTicketModEvents'
  | 'deployedERC20s'
  | 'distributePayoutsEvents'
  | 'distributeToPayoutSplitEvents'
  | 'distributeReservedTokensEvents'
  | 'distributeToReservedTokenSplitEvents'
  | 'deployedERC20Events'
  | 'useAllowanceEvents'
  | 'projectEvents'
  | 'ethErc20ProjectPayers';

export type ProtocolLog = {
  id: Scalars['ID'];
  v1?: Maybe<ProtocolV1Log>;
  v2?: Maybe<ProtocolV2Log>;
  projectsCount: Scalars['Int'];
  volumePaid: Scalars['BigInt'];
  volumeRedeemed: Scalars['BigInt'];
  paymentsCount: Scalars['Int'];
  redeemCount: Scalars['Int'];
  erc20Count: Scalars['Int'];
  trendingLastUpdatedTimestamp: Scalars['Int'];
  oldestTrendingPayEvent?: Maybe<PayEvent>;
};

export type ProtocolLog_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  v1_?: InputMaybe<ProtocolV1Log_filter>;
  v2_?: InputMaybe<ProtocolV2Log_filter>;
  projectsCount?: InputMaybe<Scalars['Int']>;
  projectsCount_not?: InputMaybe<Scalars['Int']>;
  projectsCount_gt?: InputMaybe<Scalars['Int']>;
  projectsCount_lt?: InputMaybe<Scalars['Int']>;
  projectsCount_gte?: InputMaybe<Scalars['Int']>;
  projectsCount_lte?: InputMaybe<Scalars['Int']>;
  projectsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  projectsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumePaid?: InputMaybe<Scalars['BigInt']>;
  volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumePaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paymentsCount?: InputMaybe<Scalars['Int']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount?: InputMaybe<Scalars['Int']>;
  redeemCount_not?: InputMaybe<Scalars['Int']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']>;
  redeemCount_lt?: InputMaybe<Scalars['Int']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count?: InputMaybe<Scalars['Int']>;
  erc20Count_not?: InputMaybe<Scalars['Int']>;
  erc20Count_gt?: InputMaybe<Scalars['Int']>;
  erc20Count_lt?: InputMaybe<Scalars['Int']>;
  erc20Count_gte?: InputMaybe<Scalars['Int']>;
  erc20Count_lte?: InputMaybe<Scalars['Int']>;
  erc20Count_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  trendingLastUpdatedTimestamp?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  trendingLastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  trendingLastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oldestTrendingPayEvent?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_gt?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_lt?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_gte?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_lte?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_in?: InputMaybe<Array<Scalars['String']>>;
  oldestTrendingPayEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  oldestTrendingPayEvent_contains?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_contains?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_starts_with?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_ends_with?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oldestTrendingPayEvent_?: InputMaybe<PayEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProtocolLog_orderBy =
  | 'id'
  | 'v1'
  | 'v2'
  | 'projectsCount'
  | 'volumePaid'
  | 'volumeRedeemed'
  | 'paymentsCount'
  | 'redeemCount'
  | 'erc20Count'
  | 'trendingLastUpdatedTimestamp'
  | 'oldestTrendingPayEvent';

export type ProtocolV1Log = {
  id: Scalars['ID'];
  log: ProtocolLog;
  projectsCount: Scalars['Int'];
  volumePaid: Scalars['BigInt'];
  volumeRedeemed: Scalars['BigInt'];
  paymentsCount: Scalars['Int'];
  redeemCount: Scalars['Int'];
  erc20Count: Scalars['Int'];
};

export type ProtocolV1Log_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  log?: InputMaybe<Scalars['String']>;
  log_not?: InputMaybe<Scalars['String']>;
  log_gt?: InputMaybe<Scalars['String']>;
  log_lt?: InputMaybe<Scalars['String']>;
  log_gte?: InputMaybe<Scalars['String']>;
  log_lte?: InputMaybe<Scalars['String']>;
  log_in?: InputMaybe<Array<Scalars['String']>>;
  log_not_in?: InputMaybe<Array<Scalars['String']>>;
  log_contains?: InputMaybe<Scalars['String']>;
  log_contains_nocase?: InputMaybe<Scalars['String']>;
  log_not_contains?: InputMaybe<Scalars['String']>;
  log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  log_starts_with?: InputMaybe<Scalars['String']>;
  log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  log_not_starts_with?: InputMaybe<Scalars['String']>;
  log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  log_ends_with?: InputMaybe<Scalars['String']>;
  log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  log_not_ends_with?: InputMaybe<Scalars['String']>;
  log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  log_?: InputMaybe<ProtocolLog_filter>;
  projectsCount?: InputMaybe<Scalars['Int']>;
  projectsCount_not?: InputMaybe<Scalars['Int']>;
  projectsCount_gt?: InputMaybe<Scalars['Int']>;
  projectsCount_lt?: InputMaybe<Scalars['Int']>;
  projectsCount_gte?: InputMaybe<Scalars['Int']>;
  projectsCount_lte?: InputMaybe<Scalars['Int']>;
  projectsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  projectsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumePaid?: InputMaybe<Scalars['BigInt']>;
  volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumePaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paymentsCount?: InputMaybe<Scalars['Int']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount?: InputMaybe<Scalars['Int']>;
  redeemCount_not?: InputMaybe<Scalars['Int']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']>;
  redeemCount_lt?: InputMaybe<Scalars['Int']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count?: InputMaybe<Scalars['Int']>;
  erc20Count_not?: InputMaybe<Scalars['Int']>;
  erc20Count_gt?: InputMaybe<Scalars['Int']>;
  erc20Count_lt?: InputMaybe<Scalars['Int']>;
  erc20Count_gte?: InputMaybe<Scalars['Int']>;
  erc20Count_lte?: InputMaybe<Scalars['Int']>;
  erc20Count_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProtocolV1Log_orderBy =
  | 'id'
  | 'log'
  | 'projectsCount'
  | 'volumePaid'
  | 'volumeRedeemed'
  | 'paymentsCount'
  | 'redeemCount'
  | 'erc20Count';

export type ProtocolV2Log = {
  id: Scalars['ID'];
  log: ProtocolLog;
  projectsCount: Scalars['Int'];
  volumePaid: Scalars['BigInt'];
  volumeRedeemed: Scalars['BigInt'];
  paymentsCount: Scalars['Int'];
  redeemCount: Scalars['Int'];
  erc20Count: Scalars['Int'];
};

export type ProtocolV2Log_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  log?: InputMaybe<Scalars['String']>;
  log_not?: InputMaybe<Scalars['String']>;
  log_gt?: InputMaybe<Scalars['String']>;
  log_lt?: InputMaybe<Scalars['String']>;
  log_gte?: InputMaybe<Scalars['String']>;
  log_lte?: InputMaybe<Scalars['String']>;
  log_in?: InputMaybe<Array<Scalars['String']>>;
  log_not_in?: InputMaybe<Array<Scalars['String']>>;
  log_contains?: InputMaybe<Scalars['String']>;
  log_contains_nocase?: InputMaybe<Scalars['String']>;
  log_not_contains?: InputMaybe<Scalars['String']>;
  log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  log_starts_with?: InputMaybe<Scalars['String']>;
  log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  log_not_starts_with?: InputMaybe<Scalars['String']>;
  log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  log_ends_with?: InputMaybe<Scalars['String']>;
  log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  log_not_ends_with?: InputMaybe<Scalars['String']>;
  log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  log_?: InputMaybe<ProtocolLog_filter>;
  projectsCount?: InputMaybe<Scalars['Int']>;
  projectsCount_not?: InputMaybe<Scalars['Int']>;
  projectsCount_gt?: InputMaybe<Scalars['Int']>;
  projectsCount_lt?: InputMaybe<Scalars['Int']>;
  projectsCount_gte?: InputMaybe<Scalars['Int']>;
  projectsCount_lte?: InputMaybe<Scalars['Int']>;
  projectsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  projectsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumePaid?: InputMaybe<Scalars['BigInt']>;
  volumePaid_not?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lt?: InputMaybe<Scalars['BigInt']>;
  volumePaid_gte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_lte?: InputMaybe<Scalars['BigInt']>;
  volumePaid_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumePaid_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_not?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lt?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_gte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_lte?: InputMaybe<Scalars['BigInt']>;
  volumeRedeemed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeRedeemed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paymentsCount?: InputMaybe<Scalars['Int']>;
  paymentsCount_not?: InputMaybe<Scalars['Int']>;
  paymentsCount_gt?: InputMaybe<Scalars['Int']>;
  paymentsCount_lt?: InputMaybe<Scalars['Int']>;
  paymentsCount_gte?: InputMaybe<Scalars['Int']>;
  paymentsCount_lte?: InputMaybe<Scalars['Int']>;
  paymentsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  paymentsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount?: InputMaybe<Scalars['Int']>;
  redeemCount_not?: InputMaybe<Scalars['Int']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']>;
  redeemCount_lt?: InputMaybe<Scalars['Int']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count?: InputMaybe<Scalars['Int']>;
  erc20Count_not?: InputMaybe<Scalars['Int']>;
  erc20Count_gt?: InputMaybe<Scalars['Int']>;
  erc20Count_lt?: InputMaybe<Scalars['Int']>;
  erc20Count_gte?: InputMaybe<Scalars['Int']>;
  erc20Count_lte?: InputMaybe<Scalars['Int']>;
  erc20Count_in?: InputMaybe<Array<Scalars['Int']>>;
  erc20Count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ProtocolV2Log_orderBy =
  | 'id'
  | 'log'
  | 'projectsCount'
  | 'volumePaid'
  | 'volumeRedeemed'
  | 'paymentsCount'
  | 'redeemCount'
  | 'erc20Count';

export type Query = {
  protocolLog?: Maybe<ProtocolLog>;
  protocolLogs: Array<ProtocolLog>;
  projectCreateEvent?: Maybe<ProjectCreateEvent>;
  projectCreateEvents: Array<ProjectCreateEvent>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  ensnode?: Maybe<ENSNode>;
  ensnodes: Array<ENSNode>;
  participant?: Maybe<Participant>;
  participants: Array<Participant>;
  projectEvent?: Maybe<ProjectEvent>;
  projectEvents: Array<ProjectEvent>;
  payEvent?: Maybe<PayEvent>;
  payEvents: Array<PayEvent>;
  mintTokensEvent?: Maybe<MintTokensEvent>;
  mintTokensEvents: Array<MintTokensEvent>;
  redeemEvent?: Maybe<RedeemEvent>;
  redeemEvents: Array<RedeemEvent>;
  deployedERC20Event?: Maybe<DeployedERC20Event>;
  deployedERC20Events: Array<DeployedERC20Event>;
  protocolV1Log?: Maybe<ProtocolV1Log>;
  protocolV1Logs: Array<ProtocolV1Log>;
  printReservesEvent?: Maybe<PrintReservesEvent>;
  printReservesEvents: Array<PrintReservesEvent>;
  distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  distributeToPayoutModEvents: Array<DistributeToPayoutModEvent>;
  tapEvent?: Maybe<TapEvent>;
  tapEvents: Array<TapEvent>;
  distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  distributeToTicketModEvents: Array<DistributeToTicketModEvent>;
  protocolV2Log?: Maybe<ProtocolV2Log>;
  protocolV2Logs: Array<ProtocolV2Log>;
  distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  useAllowanceEvent?: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: Array<UseAllowanceEvent>;
  deployETHERC20ProjectPayerEvent?: Maybe<DeployETHERC20ProjectPayerEvent>;
  deployETHERC20ProjectPayerEvents: Array<DeployETHERC20ProjectPayerEvent>;
  etherc20ProjectPayer?: Maybe<ETHERC20ProjectPayer>;
  etherc20ProjectPayers: Array<ETHERC20ProjectPayer>;
  veNftToken?: Maybe<VeNftToken>;
  veNftTokens: Array<VeNftToken>;
  projectSearch: Array<Project>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryprotocolLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectCreateEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectCreateEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectCreateEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectCreateEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryensnodeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryensnodesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENSNode_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENSNode_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparticipantArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryparticipantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Participant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypayEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PayEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintTokensEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintTokensEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydeployedERC20EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydeployedERC20EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedERC20Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployedERC20Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolV1LogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolV1LogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV1Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolV1Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprintReservesEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprintReservesEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PrintReservesEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToPayoutModEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToPayoutModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutModEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToTicketModEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToTicketModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToTicketModEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolV2LogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolV2LogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV2Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolV2Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributePayoutsEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributePayoutsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributePayoutsEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToPayoutSplitEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToPayoutSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeReservedTokensEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeReservedTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeReservedTokensEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToReservedTokenSplitEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributeToReservedTokenSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuseAllowanceEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuseAllowanceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UseAllowanceEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydeployETHERC20ProjectPayerEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydeployETHERC20ProjectPayerEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployETHERC20ProjectPayerEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployETHERC20ProjectPayerEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryetherc20ProjectPayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryetherc20ProjectPayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ETHERC20ProjectPayer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ETHERC20ProjectPayer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryveNftTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryveNftTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VeNftToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectSearchArgs = {
  text: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RedeemEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  cv: Scalars['String'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  holder: Scalars['Bytes'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  returnAmount: Scalars['BigInt'];
  caller: Scalars['Bytes'];
};

export type RedeemEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cv?: InputMaybe<Scalars['String']>;
  cv_not?: InputMaybe<Scalars['String']>;
  cv_gt?: InputMaybe<Scalars['String']>;
  cv_lt?: InputMaybe<Scalars['String']>;
  cv_gte?: InputMaybe<Scalars['String']>;
  cv_lte?: InputMaybe<Scalars['String']>;
  cv_in?: InputMaybe<Array<Scalars['String']>>;
  cv_not_in?: InputMaybe<Array<Scalars['String']>>;
  cv_contains?: InputMaybe<Scalars['String']>;
  cv_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_not_contains?: InputMaybe<Scalars['String']>;
  cv_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cv_starts_with?: InputMaybe<Scalars['String']>;
  cv_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_starts_with?: InputMaybe<Scalars['String']>;
  cv_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cv_ends_with?: InputMaybe<Scalars['String']>;
  cv_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cv_not_ends_with?: InputMaybe<Scalars['String']>;
  cv_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  holder?: InputMaybe<Scalars['Bytes']>;
  holder_not?: InputMaybe<Scalars['Bytes']>;
  holder_in?: InputMaybe<Array<Scalars['Bytes']>>;
  holder_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  holder_contains?: InputMaybe<Scalars['Bytes']>;
  holder_not_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  returnAmount?: InputMaybe<Scalars['BigInt']>;
  returnAmount_not?: InputMaybe<Scalars['BigInt']>;
  returnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  returnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  returnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  returnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  returnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  returnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RedeemEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'cv'
  | 'timestamp'
  | 'txHash'
  | 'holder'
  | 'beneficiary'
  | 'amount'
  | 'returnAmount'
  | 'caller';

export type Subscription = {
  protocolLog?: Maybe<ProtocolLog>;
  protocolLogs: Array<ProtocolLog>;
  projectCreateEvent?: Maybe<ProjectCreateEvent>;
  projectCreateEvents: Array<ProjectCreateEvent>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  ensnode?: Maybe<ENSNode>;
  ensnodes: Array<ENSNode>;
  participant?: Maybe<Participant>;
  participants: Array<Participant>;
  projectEvent?: Maybe<ProjectEvent>;
  projectEvents: Array<ProjectEvent>;
  payEvent?: Maybe<PayEvent>;
  payEvents: Array<PayEvent>;
  mintTokensEvent?: Maybe<MintTokensEvent>;
  mintTokensEvents: Array<MintTokensEvent>;
  redeemEvent?: Maybe<RedeemEvent>;
  redeemEvents: Array<RedeemEvent>;
  deployedERC20Event?: Maybe<DeployedERC20Event>;
  deployedERC20Events: Array<DeployedERC20Event>;
  protocolV1Log?: Maybe<ProtocolV1Log>;
  protocolV1Logs: Array<ProtocolV1Log>;
  printReservesEvent?: Maybe<PrintReservesEvent>;
  printReservesEvents: Array<PrintReservesEvent>;
  distributeToPayoutModEvent?: Maybe<DistributeToPayoutModEvent>;
  distributeToPayoutModEvents: Array<DistributeToPayoutModEvent>;
  tapEvent?: Maybe<TapEvent>;
  tapEvents: Array<TapEvent>;
  distributeToTicketModEvent?: Maybe<DistributeToTicketModEvent>;
  distributeToTicketModEvents: Array<DistributeToTicketModEvent>;
  protocolV2Log?: Maybe<ProtocolV2Log>;
  protocolV2Logs: Array<ProtocolV2Log>;
  distributePayoutsEvent?: Maybe<DistributePayoutsEvent>;
  distributePayoutsEvents: Array<DistributePayoutsEvent>;
  distributeToPayoutSplitEvent?: Maybe<DistributeToPayoutSplitEvent>;
  distributeToPayoutSplitEvents: Array<DistributeToPayoutSplitEvent>;
  distributeReservedTokensEvent?: Maybe<DistributeReservedTokensEvent>;
  distributeReservedTokensEvents: Array<DistributeReservedTokensEvent>;
  distributeToReservedTokenSplitEvent?: Maybe<DistributeToReservedTokenSplitEvent>;
  distributeToReservedTokenSplitEvents: Array<DistributeToReservedTokenSplitEvent>;
  useAllowanceEvent?: Maybe<UseAllowanceEvent>;
  useAllowanceEvents: Array<UseAllowanceEvent>;
  deployETHERC20ProjectPayerEvent?: Maybe<DeployETHERC20ProjectPayerEvent>;
  deployETHERC20ProjectPayerEvents: Array<DeployETHERC20ProjectPayerEvent>;
  etherc20ProjectPayer?: Maybe<ETHERC20ProjectPayer>;
  etherc20ProjectPayers: Array<ETHERC20ProjectPayer>;
  veNftToken?: Maybe<VeNftToken>;
  veNftTokens: Array<VeNftToken>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionprotocolLogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolLogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolLog_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolLog_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectCreateEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectCreateEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectCreateEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectCreateEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionensnodeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionensnodesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ENSNode_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ENSNode_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparticipantArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionparticipantsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Participant_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Participant_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpayEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PayEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PayEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintTokensEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MintTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintTokensEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RedeemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondeployedERC20EventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondeployedERC20EventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployedERC20Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployedERC20Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolV1LogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolV1LogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV1Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolV1Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprintReservesEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprintReservesEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PrintReservesEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PrintReservesEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToPayoutModEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToPayoutModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutModEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToTicketModEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToTicketModEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToTicketModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToTicketModEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolV2LogArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolV2LogsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolV2Log_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolV2Log_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributePayoutsEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributePayoutsEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributePayoutsEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributePayoutsEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToPayoutSplitEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToPayoutSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutSplitEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeReservedTokensEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeReservedTokensEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeReservedTokensEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeReservedTokensEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToReservedTokenSplitEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributeToReservedTokenSplitEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToReservedTokenSplitEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToReservedTokenSplitEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuseAllowanceEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuseAllowanceEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UseAllowanceEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UseAllowanceEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondeployETHERC20ProjectPayerEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondeployETHERC20ProjectPayerEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DeployETHERC20ProjectPayerEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DeployETHERC20ProjectPayerEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionetherc20ProjectPayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionetherc20ProjectPayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ETHERC20ProjectPayer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ETHERC20ProjectPayer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionveNftTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionveNftTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VeNftToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VeNftToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TapEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleId: Scalars['BigInt'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  currency: Scalars['BigInt'];
  netTransferAmount: Scalars['BigInt'];
  beneficiaryTransferAmount: Scalars['BigInt'];
  govFeeAmount: Scalars['BigInt'];
  caller: Scalars['Bytes'];
  distributions: Array<DistributeToPayoutModEvent>;
};


export type TapEventdistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DistributeToPayoutModEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DistributeToPayoutModEvent_filter>;
};

export type TapEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleId?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currency?: InputMaybe<Scalars['BigInt']>;
  currency_not?: InputMaybe<Scalars['BigInt']>;
  currency_gt?: InputMaybe<Scalars['BigInt']>;
  currency_lt?: InputMaybe<Scalars['BigInt']>;
  currency_gte?: InputMaybe<Scalars['BigInt']>;
  currency_lte?: InputMaybe<Scalars['BigInt']>;
  currency_in?: InputMaybe<Array<Scalars['BigInt']>>;
  currency_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netTransferAmount?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_not?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  netTransferAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netTransferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTransferAmount?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_not?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_gt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_lt?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_gte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_lte?: InputMaybe<Scalars['BigInt']>;
  beneficiaryTransferAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiaryTransferAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  govFeeAmount?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  govFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  govFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  distributions_?: InputMaybe<DistributeToPayoutModEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TapEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleId'
  | 'beneficiary'
  | 'amount'
  | 'currency'
  | 'netTransferAmount'
  | 'beneficiaryTransferAmount'
  | 'govFeeAmount'
  | 'caller'
  | 'distributions';

export type UseAllowanceEvent = {
  id: Scalars['ID'];
  project: Project;
  projectId: Scalars['Int'];
  timestamp: Scalars['Int'];
  txHash: Scalars['Bytes'];
  fundingCycleConfiguration: Scalars['BigInt'];
  fundingCycleNumber: Scalars['Int'];
  beneficiary: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  distributedAmount: Scalars['BigInt'];
  netDistributedamount: Scalars['BigInt'];
  memo: Scalars['String'];
  caller: Scalars['Bytes'];
};

export type UseAllowanceEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  projectId?: InputMaybe<Scalars['Int']>;
  projectId_not?: InputMaybe<Scalars['Int']>;
  projectId_gt?: InputMaybe<Scalars['Int']>;
  projectId_lt?: InputMaybe<Scalars['Int']>;
  projectId_gte?: InputMaybe<Scalars['Int']>;
  projectId_lte?: InputMaybe<Scalars['Int']>;
  projectId_in?: InputMaybe<Array<Scalars['Int']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingCycleConfiguration?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_not?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_gt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_lt?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_gte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_lte?: InputMaybe<Scalars['BigInt']>;
  fundingCycleConfiguration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleConfiguration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingCycleNumber?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_not?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lt?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_gte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_lte?: InputMaybe<Scalars['Int']>;
  fundingCycleNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  fundingCycleNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  beneficiary?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedAmount?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_not?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  distributedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  distributedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDistributedamount?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_not?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_gt?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_lt?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_gte?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_lte?: InputMaybe<Scalars['BigInt']>;
  netDistributedamount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDistributedamount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_not?: InputMaybe<Scalars['String']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<Scalars['String']>>;
  memo_not_in?: InputMaybe<Array<Scalars['String']>>;
  memo_contains?: InputMaybe<Scalars['String']>;
  memo_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_not_contains?: InputMaybe<Scalars['String']>;
  memo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  memo_starts_with?: InputMaybe<Scalars['String']>;
  memo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_starts_with?: InputMaybe<Scalars['String']>;
  memo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  memo_ends_with?: InputMaybe<Scalars['String']>;
  memo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  memo_not_ends_with?: InputMaybe<Scalars['String']>;
  memo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  caller?: InputMaybe<Scalars['Bytes']>;
  caller_not?: InputMaybe<Scalars['Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UseAllowanceEvent_orderBy =
  | 'id'
  | 'project'
  | 'projectId'
  | 'timestamp'
  | 'txHash'
  | 'fundingCycleConfiguration'
  | 'fundingCycleNumber'
  | 'beneficiary'
  | 'amount'
  | 'distributedAmount'
  | 'netDistributedamount'
  | 'memo'
  | 'caller';

export type VeNftToken = {
  id: Scalars['ID'];
  tokenId: Scalars['Int'];
  tokenUri: Scalars['String'];
  createdAt: Scalars['Int'];
  redeemedAt?: Maybe<Scalars['Int']>;
  owner: Scalars['Bytes'];
  participant: Participant;
  lockAmount: Scalars['BigInt'];
  lockEnd: Scalars['Int'];
  lockDuration: Scalars['Int'];
  lockUseJbToken: Scalars['Boolean'];
  lockAllowPublicExtension: Scalars['Boolean'];
  unlockedAt: Scalars['Int'];
};

export type VeNftToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['Int']>;
  tokenId_not?: InputMaybe<Scalars['Int']>;
  tokenId_gt?: InputMaybe<Scalars['Int']>;
  tokenId_lt?: InputMaybe<Scalars['Int']>;
  tokenId_gte?: InputMaybe<Scalars['Int']>;
  tokenId_lte?: InputMaybe<Scalars['Int']>;
  tokenId_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tokenUri?: InputMaybe<Scalars['String']>;
  tokenUri_not?: InputMaybe<Scalars['String']>;
  tokenUri_gt?: InputMaybe<Scalars['String']>;
  tokenUri_lt?: InputMaybe<Scalars['String']>;
  tokenUri_gte?: InputMaybe<Scalars['String']>;
  tokenUri_lte?: InputMaybe<Scalars['String']>;
  tokenUri_in?: InputMaybe<Array<Scalars['String']>>;
  tokenUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenUri_contains?: InputMaybe<Scalars['String']>;
  tokenUri_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']>;
  tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']>;
  tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']>;
  tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemedAt?: InputMaybe<Scalars['Int']>;
  redeemedAt_not?: InputMaybe<Scalars['Int']>;
  redeemedAt_gt?: InputMaybe<Scalars['Int']>;
  redeemedAt_lt?: InputMaybe<Scalars['Int']>;
  redeemedAt_gte?: InputMaybe<Scalars['Int']>;
  redeemedAt_lte?: InputMaybe<Scalars['Int']>;
  redeemedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  participant?: InputMaybe<Scalars['String']>;
  participant_not?: InputMaybe<Scalars['String']>;
  participant_gt?: InputMaybe<Scalars['String']>;
  participant_lt?: InputMaybe<Scalars['String']>;
  participant_gte?: InputMaybe<Scalars['String']>;
  participant_lte?: InputMaybe<Scalars['String']>;
  participant_in?: InputMaybe<Array<Scalars['String']>>;
  participant_not_in?: InputMaybe<Array<Scalars['String']>>;
  participant_contains?: InputMaybe<Scalars['String']>;
  participant_contains_nocase?: InputMaybe<Scalars['String']>;
  participant_not_contains?: InputMaybe<Scalars['String']>;
  participant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  participant_starts_with?: InputMaybe<Scalars['String']>;
  participant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  participant_not_starts_with?: InputMaybe<Scalars['String']>;
  participant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  participant_ends_with?: InputMaybe<Scalars['String']>;
  participant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  participant_not_ends_with?: InputMaybe<Scalars['String']>;
  participant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  participant_?: InputMaybe<Participant_filter>;
  lockAmount?: InputMaybe<Scalars['BigInt']>;
  lockAmount_not?: InputMaybe<Scalars['BigInt']>;
  lockAmount_gt?: InputMaybe<Scalars['BigInt']>;
  lockAmount_lt?: InputMaybe<Scalars['BigInt']>;
  lockAmount_gte?: InputMaybe<Scalars['BigInt']>;
  lockAmount_lte?: InputMaybe<Scalars['BigInt']>;
  lockAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockEnd?: InputMaybe<Scalars['Int']>;
  lockEnd_not?: InputMaybe<Scalars['Int']>;
  lockEnd_gt?: InputMaybe<Scalars['Int']>;
  lockEnd_lt?: InputMaybe<Scalars['Int']>;
  lockEnd_gte?: InputMaybe<Scalars['Int']>;
  lockEnd_lte?: InputMaybe<Scalars['Int']>;
  lockEnd_in?: InputMaybe<Array<Scalars['Int']>>;
  lockEnd_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockDuration?: InputMaybe<Scalars['Int']>;
  lockDuration_not?: InputMaybe<Scalars['Int']>;
  lockDuration_gt?: InputMaybe<Scalars['Int']>;
  lockDuration_lt?: InputMaybe<Scalars['Int']>;
  lockDuration_gte?: InputMaybe<Scalars['Int']>;
  lockDuration_lte?: InputMaybe<Scalars['Int']>;
  lockDuration_in?: InputMaybe<Array<Scalars['Int']>>;
  lockDuration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lockUseJbToken?: InputMaybe<Scalars['Boolean']>;
  lockUseJbToken_not?: InputMaybe<Scalars['Boolean']>;
  lockUseJbToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lockUseJbToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lockAllowPublicExtension?: InputMaybe<Scalars['Boolean']>;
  lockAllowPublicExtension_not?: InputMaybe<Scalars['Boolean']>;
  lockAllowPublicExtension_in?: InputMaybe<Array<Scalars['Boolean']>>;
  lockAllowPublicExtension_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  unlockedAt?: InputMaybe<Scalars['Int']>;
  unlockedAt_not?: InputMaybe<Scalars['Int']>;
  unlockedAt_gt?: InputMaybe<Scalars['Int']>;
  unlockedAt_lt?: InputMaybe<Scalars['Int']>;
  unlockedAt_gte?: InputMaybe<Scalars['Int']>;
  unlockedAt_lte?: InputMaybe<Scalars['Int']>;
  unlockedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  unlockedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type VeNftToken_orderBy =
  | 'id'
  | 'tokenId'
  | 'tokenUri'
  | 'createdAt'
  | 'redeemedAt'
  | 'owner'
  | 'participant'
  | 'lockAmount'
  | 'lockEnd'
  | 'lockDuration'
  | 'lockUseJbToken'
  | 'lockAllowPublicExtension'
  | 'unlockedAt';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  protocolLog: InContextSdkMethod<Query['protocolLog'], QueryprotocolLogArgs, MeshContext>,
  /** null **/
  protocolLogs: InContextSdkMethod<Query['protocolLogs'], QueryprotocolLogsArgs, MeshContext>,
  /** null **/
  projectCreateEvent: InContextSdkMethod<Query['projectCreateEvent'], QueryprojectCreateEventArgs, MeshContext>,
  /** null **/
  projectCreateEvents: InContextSdkMethod<Query['projectCreateEvents'], QueryprojectCreateEventsArgs, MeshContext>,
  /** null **/
  project: InContextSdkMethod<Query['project'], QueryprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<Query['projects'], QueryprojectsArgs, MeshContext>,
  /** null **/
  ensnode: InContextSdkMethod<Query['ensnode'], QueryensnodeArgs, MeshContext>,
  /** null **/
  ensnodes: InContextSdkMethod<Query['ensnodes'], QueryensnodesArgs, MeshContext>,
  /** null **/
  participant: InContextSdkMethod<Query['participant'], QueryparticipantArgs, MeshContext>,
  /** null **/
  participants: InContextSdkMethod<Query['participants'], QueryparticipantsArgs, MeshContext>,
  /** null **/
  projectEvent: InContextSdkMethod<Query['projectEvent'], QueryprojectEventArgs, MeshContext>,
  /** null **/
  projectEvents: InContextSdkMethod<Query['projectEvents'], QueryprojectEventsArgs, MeshContext>,
  /** null **/
  payEvent: InContextSdkMethod<Query['payEvent'], QuerypayEventArgs, MeshContext>,
  /** null **/
  payEvents: InContextSdkMethod<Query['payEvents'], QuerypayEventsArgs, MeshContext>,
  /** null **/
  mintTokensEvent: InContextSdkMethod<Query['mintTokensEvent'], QuerymintTokensEventArgs, MeshContext>,
  /** null **/
  mintTokensEvents: InContextSdkMethod<Query['mintTokensEvents'], QuerymintTokensEventsArgs, MeshContext>,
  /** null **/
  redeemEvent: InContextSdkMethod<Query['redeemEvent'], QueryredeemEventArgs, MeshContext>,
  /** null **/
  redeemEvents: InContextSdkMethod<Query['redeemEvents'], QueryredeemEventsArgs, MeshContext>,
  /** null **/
  deployedERC20Event: InContextSdkMethod<Query['deployedERC20Event'], QuerydeployedERC20EventArgs, MeshContext>,
  /** null **/
  deployedERC20Events: InContextSdkMethod<Query['deployedERC20Events'], QuerydeployedERC20EventsArgs, MeshContext>,
  /** null **/
  protocolV1Log: InContextSdkMethod<Query['protocolV1Log'], QueryprotocolV1LogArgs, MeshContext>,
  /** null **/
  protocolV1Logs: InContextSdkMethod<Query['protocolV1Logs'], QueryprotocolV1LogsArgs, MeshContext>,
  /** null **/
  printReservesEvent: InContextSdkMethod<Query['printReservesEvent'], QueryprintReservesEventArgs, MeshContext>,
  /** null **/
  printReservesEvents: InContextSdkMethod<Query['printReservesEvents'], QueryprintReservesEventsArgs, MeshContext>,
  /** null **/
  distributeToPayoutModEvent: InContextSdkMethod<Query['distributeToPayoutModEvent'], QuerydistributeToPayoutModEventArgs, MeshContext>,
  /** null **/
  distributeToPayoutModEvents: InContextSdkMethod<Query['distributeToPayoutModEvents'], QuerydistributeToPayoutModEventsArgs, MeshContext>,
  /** null **/
  tapEvent: InContextSdkMethod<Query['tapEvent'], QuerytapEventArgs, MeshContext>,
  /** null **/
  tapEvents: InContextSdkMethod<Query['tapEvents'], QuerytapEventsArgs, MeshContext>,
  /** null **/
  distributeToTicketModEvent: InContextSdkMethod<Query['distributeToTicketModEvent'], QuerydistributeToTicketModEventArgs, MeshContext>,
  /** null **/
  distributeToTicketModEvents: InContextSdkMethod<Query['distributeToTicketModEvents'], QuerydistributeToTicketModEventsArgs, MeshContext>,
  /** null **/
  protocolV2Log: InContextSdkMethod<Query['protocolV2Log'], QueryprotocolV2LogArgs, MeshContext>,
  /** null **/
  protocolV2Logs: InContextSdkMethod<Query['protocolV2Logs'], QueryprotocolV2LogsArgs, MeshContext>,
  /** null **/
  distributePayoutsEvent: InContextSdkMethod<Query['distributePayoutsEvent'], QuerydistributePayoutsEventArgs, MeshContext>,
  /** null **/
  distributePayoutsEvents: InContextSdkMethod<Query['distributePayoutsEvents'], QuerydistributePayoutsEventsArgs, MeshContext>,
  /** null **/
  distributeToPayoutSplitEvent: InContextSdkMethod<Query['distributeToPayoutSplitEvent'], QuerydistributeToPayoutSplitEventArgs, MeshContext>,
  /** null **/
  distributeToPayoutSplitEvents: InContextSdkMethod<Query['distributeToPayoutSplitEvents'], QuerydistributeToPayoutSplitEventsArgs, MeshContext>,
  /** null **/
  distributeReservedTokensEvent: InContextSdkMethod<Query['distributeReservedTokensEvent'], QuerydistributeReservedTokensEventArgs, MeshContext>,
  /** null **/
  distributeReservedTokensEvents: InContextSdkMethod<Query['distributeReservedTokensEvents'], QuerydistributeReservedTokensEventsArgs, MeshContext>,
  /** null **/
  distributeToReservedTokenSplitEvent: InContextSdkMethod<Query['distributeToReservedTokenSplitEvent'], QuerydistributeToReservedTokenSplitEventArgs, MeshContext>,
  /** null **/
  distributeToReservedTokenSplitEvents: InContextSdkMethod<Query['distributeToReservedTokenSplitEvents'], QuerydistributeToReservedTokenSplitEventsArgs, MeshContext>,
  /** null **/
  useAllowanceEvent: InContextSdkMethod<Query['useAllowanceEvent'], QueryuseAllowanceEventArgs, MeshContext>,
  /** null **/
  useAllowanceEvents: InContextSdkMethod<Query['useAllowanceEvents'], QueryuseAllowanceEventsArgs, MeshContext>,
  /** null **/
  deployETHERC20ProjectPayerEvent: InContextSdkMethod<Query['deployETHERC20ProjectPayerEvent'], QuerydeployETHERC20ProjectPayerEventArgs, MeshContext>,
  /** null **/
  deployETHERC20ProjectPayerEvents: InContextSdkMethod<Query['deployETHERC20ProjectPayerEvents'], QuerydeployETHERC20ProjectPayerEventsArgs, MeshContext>,
  /** null **/
  etherc20ProjectPayer: InContextSdkMethod<Query['etherc20ProjectPayer'], Queryetherc20ProjectPayerArgs, MeshContext>,
  /** null **/
  etherc20ProjectPayers: InContextSdkMethod<Query['etherc20ProjectPayers'], Queryetherc20ProjectPayersArgs, MeshContext>,
  /** null **/
  veNftToken: InContextSdkMethod<Query['veNftToken'], QueryveNftTokenArgs, MeshContext>,
  /** null **/
  veNftTokens: InContextSdkMethod<Query['veNftTokens'], QueryveNftTokensArgs, MeshContext>,
  /** null **/
  projectSearch: InContextSdkMethod<Query['projectSearch'], QueryprojectSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  protocolLog: InContextSdkMethod<Subscription['protocolLog'], SubscriptionprotocolLogArgs, MeshContext>,
  /** null **/
  protocolLogs: InContextSdkMethod<Subscription['protocolLogs'], SubscriptionprotocolLogsArgs, MeshContext>,
  /** null **/
  projectCreateEvent: InContextSdkMethod<Subscription['projectCreateEvent'], SubscriptionprojectCreateEventArgs, MeshContext>,
  /** null **/
  projectCreateEvents: InContextSdkMethod<Subscription['projectCreateEvents'], SubscriptionprojectCreateEventsArgs, MeshContext>,
  /** null **/
  project: InContextSdkMethod<Subscription['project'], SubscriptionprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<Subscription['projects'], SubscriptionprojectsArgs, MeshContext>,
  /** null **/
  ensnode: InContextSdkMethod<Subscription['ensnode'], SubscriptionensnodeArgs, MeshContext>,
  /** null **/
  ensnodes: InContextSdkMethod<Subscription['ensnodes'], SubscriptionensnodesArgs, MeshContext>,
  /** null **/
  participant: InContextSdkMethod<Subscription['participant'], SubscriptionparticipantArgs, MeshContext>,
  /** null **/
  participants: InContextSdkMethod<Subscription['participants'], SubscriptionparticipantsArgs, MeshContext>,
  /** null **/
  projectEvent: InContextSdkMethod<Subscription['projectEvent'], SubscriptionprojectEventArgs, MeshContext>,
  /** null **/
  projectEvents: InContextSdkMethod<Subscription['projectEvents'], SubscriptionprojectEventsArgs, MeshContext>,
  /** null **/
  payEvent: InContextSdkMethod<Subscription['payEvent'], SubscriptionpayEventArgs, MeshContext>,
  /** null **/
  payEvents: InContextSdkMethod<Subscription['payEvents'], SubscriptionpayEventsArgs, MeshContext>,
  /** null **/
  mintTokensEvent: InContextSdkMethod<Subscription['mintTokensEvent'], SubscriptionmintTokensEventArgs, MeshContext>,
  /** null **/
  mintTokensEvents: InContextSdkMethod<Subscription['mintTokensEvents'], SubscriptionmintTokensEventsArgs, MeshContext>,
  /** null **/
  redeemEvent: InContextSdkMethod<Subscription['redeemEvent'], SubscriptionredeemEventArgs, MeshContext>,
  /** null **/
  redeemEvents: InContextSdkMethod<Subscription['redeemEvents'], SubscriptionredeemEventsArgs, MeshContext>,
  /** null **/
  deployedERC20Event: InContextSdkMethod<Subscription['deployedERC20Event'], SubscriptiondeployedERC20EventArgs, MeshContext>,
  /** null **/
  deployedERC20Events: InContextSdkMethod<Subscription['deployedERC20Events'], SubscriptiondeployedERC20EventsArgs, MeshContext>,
  /** null **/
  protocolV1Log: InContextSdkMethod<Subscription['protocolV1Log'], SubscriptionprotocolV1LogArgs, MeshContext>,
  /** null **/
  protocolV1Logs: InContextSdkMethod<Subscription['protocolV1Logs'], SubscriptionprotocolV1LogsArgs, MeshContext>,
  /** null **/
  printReservesEvent: InContextSdkMethod<Subscription['printReservesEvent'], SubscriptionprintReservesEventArgs, MeshContext>,
  /** null **/
  printReservesEvents: InContextSdkMethod<Subscription['printReservesEvents'], SubscriptionprintReservesEventsArgs, MeshContext>,
  /** null **/
  distributeToPayoutModEvent: InContextSdkMethod<Subscription['distributeToPayoutModEvent'], SubscriptiondistributeToPayoutModEventArgs, MeshContext>,
  /** null **/
  distributeToPayoutModEvents: InContextSdkMethod<Subscription['distributeToPayoutModEvents'], SubscriptiondistributeToPayoutModEventsArgs, MeshContext>,
  /** null **/
  tapEvent: InContextSdkMethod<Subscription['tapEvent'], SubscriptiontapEventArgs, MeshContext>,
  /** null **/
  tapEvents: InContextSdkMethod<Subscription['tapEvents'], SubscriptiontapEventsArgs, MeshContext>,
  /** null **/
  distributeToTicketModEvent: InContextSdkMethod<Subscription['distributeToTicketModEvent'], SubscriptiondistributeToTicketModEventArgs, MeshContext>,
  /** null **/
  distributeToTicketModEvents: InContextSdkMethod<Subscription['distributeToTicketModEvents'], SubscriptiondistributeToTicketModEventsArgs, MeshContext>,
  /** null **/
  protocolV2Log: InContextSdkMethod<Subscription['protocolV2Log'], SubscriptionprotocolV2LogArgs, MeshContext>,
  /** null **/
  protocolV2Logs: InContextSdkMethod<Subscription['protocolV2Logs'], SubscriptionprotocolV2LogsArgs, MeshContext>,
  /** null **/
  distributePayoutsEvent: InContextSdkMethod<Subscription['distributePayoutsEvent'], SubscriptiondistributePayoutsEventArgs, MeshContext>,
  /** null **/
  distributePayoutsEvents: InContextSdkMethod<Subscription['distributePayoutsEvents'], SubscriptiondistributePayoutsEventsArgs, MeshContext>,
  /** null **/
  distributeToPayoutSplitEvent: InContextSdkMethod<Subscription['distributeToPayoutSplitEvent'], SubscriptiondistributeToPayoutSplitEventArgs, MeshContext>,
  /** null **/
  distributeToPayoutSplitEvents: InContextSdkMethod<Subscription['distributeToPayoutSplitEvents'], SubscriptiondistributeToPayoutSplitEventsArgs, MeshContext>,
  /** null **/
  distributeReservedTokensEvent: InContextSdkMethod<Subscription['distributeReservedTokensEvent'], SubscriptiondistributeReservedTokensEventArgs, MeshContext>,
  /** null **/
  distributeReservedTokensEvents: InContextSdkMethod<Subscription['distributeReservedTokensEvents'], SubscriptiondistributeReservedTokensEventsArgs, MeshContext>,
  /** null **/
  distributeToReservedTokenSplitEvent: InContextSdkMethod<Subscription['distributeToReservedTokenSplitEvent'], SubscriptiondistributeToReservedTokenSplitEventArgs, MeshContext>,
  /** null **/
  distributeToReservedTokenSplitEvents: InContextSdkMethod<Subscription['distributeToReservedTokenSplitEvents'], SubscriptiondistributeToReservedTokenSplitEventsArgs, MeshContext>,
  /** null **/
  useAllowanceEvent: InContextSdkMethod<Subscription['useAllowanceEvent'], SubscriptionuseAllowanceEventArgs, MeshContext>,
  /** null **/
  useAllowanceEvents: InContextSdkMethod<Subscription['useAllowanceEvents'], SubscriptionuseAllowanceEventsArgs, MeshContext>,
  /** null **/
  deployETHERC20ProjectPayerEvent: InContextSdkMethod<Subscription['deployETHERC20ProjectPayerEvent'], SubscriptiondeployETHERC20ProjectPayerEventArgs, MeshContext>,
  /** null **/
  deployETHERC20ProjectPayerEvents: InContextSdkMethod<Subscription['deployETHERC20ProjectPayerEvents'], SubscriptiondeployETHERC20ProjectPayerEventsArgs, MeshContext>,
  /** null **/
  etherc20ProjectPayer: InContextSdkMethod<Subscription['etherc20ProjectPayer'], Subscriptionetherc20ProjectPayerArgs, MeshContext>,
  /** null **/
  etherc20ProjectPayers: InContextSdkMethod<Subscription['etherc20ProjectPayers'], Subscriptionetherc20ProjectPayersArgs, MeshContext>,
  /** null **/
  veNftToken: InContextSdkMethod<Subscription['veNftToken'], SubscriptionveNftTokenArgs, MeshContext>,
  /** null **/
  veNftTokens: InContextSdkMethod<Subscription['veNftTokens'], SubscriptionveNftTokensArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["juicebox"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
