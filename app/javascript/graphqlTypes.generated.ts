/* eslint-disable */
export type Maybe<T> = T | null;
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
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Ability = {
  __typename: 'Ability';
  canCreateProjectPromotions: Scalars['Boolean'];
  canUpdateTagCategories: Scalars['Boolean'];
  canUpdateTags: Scalars['Boolean'];
};

/** Autogenerated input type of AcceptBrandMembershipInvitation */
export type AcceptBrandMembershipInvitationInput = {
  brandId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  invitationToken: Scalars['String'];
};

/** Autogenerated return type of AcceptBrandMembershipInvitation */
export type AcceptBrandMembershipInvitationPayload = {
  __typename: 'AcceptBrandMembershipInvitationPayload';
  brandMembership: BrandMembership;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ApproveBrand */
export type ApproveBrandInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of ApproveBrand */
export type ApproveBrandPayload = {
  __typename: 'ApproveBrandPayload';
  brand: Brand;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Brand = {
  __typename: 'Brand';
  approved?: Maybe<Scalars['Boolean']>;
  brandMemberships: Array<BrandMembership>;
  createdAt: Scalars['ISO8601DateTime'];
  creator?: Maybe<User>;
  currentUserCanCreateProjects: Scalars['Boolean'];
  currentUserCanEdit: Scalars['Boolean'];
  currentUserCanManageMemberships: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  projects: ProjectConnection;
  slug: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
  users: Array<User>;
};

export type BrandProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type BrandAttributes = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The connection type for Brand. */
export type BrandConnection = {
  __typename: 'BrandConnection';
  /** A list of edges. */
  edges: Array<BrandEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type BrandEdge = {
  __typename: 'BrandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Brand;
};

export type BrandMembership = {
  __typename: 'BrandMembership';
  admin: Scalars['Boolean'];
  brand: Brand;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  invitationEmail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  user?: Maybe<User>;
};

/** Autogenerated input type of CompleteProjectFileUpload */
export type CompleteProjectFileUploadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  filepath: Scalars['String'];
  filesize: Scalars['Int'];
  filetype?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
  url: Scalars['String'];
};

/** Autogenerated return type of CompleteProjectFileUpload */
export type CompleteProjectFileUploadPayload = {
  __typename: 'CompleteProjectFileUploadPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectFile: ProjectFile;
};

/** Autogenerated input type of CreateBrand */
export type CreateBrandInput = {
  brandAttributes: BrandAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateBrand */
export type CreateBrandPayload = {
  __typename: 'CreateBrandPayload';
  brand: Brand;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateProject */
export type CreateProjectInput = {
  brandId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectAttributes: ProjectAttributes;
};

/** Autogenerated return type of CreateProject */
export type CreateProjectPayload = {
  __typename: 'CreateProjectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  project: Project;
};

/** Autogenerated input type of CreateTagCategory */
export type CreateTagCategoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tagCategoryAttributes: TagCategoryAttributes;
};

/** Autogenerated return type of CreateTagCategory */
export type CreateTagCategoryPayload = {
  __typename: 'CreateTagCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tagCategory: TagCategory;
};

/** Autogenerated input type of CreateTag */
export type CreateTagInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tagAttributes: TagAttributes;
};

/** Autogenerated return type of CreateTag */
export type CreateTagPayload = {
  __typename: 'CreateTagPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tag: Tag;
};

/** Autogenerated input type of DeleteBrandMembership */
export type DeleteBrandMembershipInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteBrandMembership */
export type DeleteBrandMembershipPayload = {
  __typename: 'DeleteBrandMembershipPayload';
  brandMembership: BrandMembership;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteProjectFile */
export type DeleteProjectFileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteProjectFile */
export type DeleteProjectFilePayload = {
  __typename: 'DeleteProjectFilePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectFile: ProjectFile;
};

/** Autogenerated input type of DeleteProject */
export type DeleteProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteProject */
export type DeleteProjectPayload = {
  __typename: 'DeleteProjectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  project: Project;
};

/** Autogenerated input type of DeleteTagCategory */
export type DeleteTagCategoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteTagCategory */
export type DeleteTagCategoryPayload = {
  __typename: 'DeleteTagCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tagCategory: TagCategory;
};

/** Autogenerated input type of DeleteTag */
export type DeleteTagInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteTag */
export type DeleteTagPayload = {
  __typename: 'DeleteTagPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tag: Tag;
};

/** Autogenerated input type of InviteBrandMember */
export type InviteBrandMemberInput = {
  admin: Scalars['Boolean'];
  brandId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

/** Autogenerated return type of InviteBrandMember */
export type InviteBrandMemberPayload = {
  __typename: 'InviteBrandMemberPayload';
  brandMembership: BrandMembership;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

export type License = {
  __typename: 'License';
  dedicationHtml?: Maybe<Scalars['String']>;
  discouraged: Scalars['Boolean'];
  discouragedReason?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  acceptBrandMembershipInvitation?: Maybe<AcceptBrandMembershipInvitationPayload>;
  approveBrand?: Maybe<ApproveBrandPayload>;
  completeProjectFileUpload?: Maybe<CompleteProjectFileUploadPayload>;
  createBrand?: Maybe<CreateBrandPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createTag?: Maybe<CreateTagPayload>;
  createTagCategory?: Maybe<CreateTagCategoryPayload>;
  deleteBrandMembership?: Maybe<DeleteBrandMembershipPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectFile?: Maybe<DeleteProjectFilePayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteTagCategory?: Maybe<DeleteTagCategoryPayload>;
  inviteBrandMember?: Maybe<InviteBrandMemberPayload>;
  promoteProject?: Maybe<PromoteProjectPayload>;
  unpromoteProject?: Maybe<UnpromoteProjectPayload>;
  updateBrand?: Maybe<UpdateBrandPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateTagCategory?: Maybe<UpdateTagCategoryPayload>;
};

export type MutationAcceptBrandMembershipInvitationArgs = {
  input: AcceptBrandMembershipInvitationInput;
};

export type MutationApproveBrandArgs = {
  input: ApproveBrandInput;
};

export type MutationCompleteProjectFileUploadArgs = {
  input: CompleteProjectFileUploadInput;
};

export type MutationCreateBrandArgs = {
  input: CreateBrandInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateTagArgs = {
  input: CreateTagInput;
};

export type MutationCreateTagCategoryArgs = {
  input: CreateTagCategoryInput;
};

export type MutationDeleteBrandMembershipArgs = {
  input: DeleteBrandMembershipInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};

export type MutationDeleteProjectFileArgs = {
  input: DeleteProjectFileInput;
};

export type MutationDeleteTagArgs = {
  input: DeleteTagInput;
};

export type MutationDeleteTagCategoryArgs = {
  input: DeleteTagCategoryInput;
};

export type MutationInviteBrandMemberArgs = {
  input: InviteBrandMemberInput;
};

export type MutationPromoteProjectArgs = {
  input: PromoteProjectInput;
};

export type MutationUnpromoteProjectArgs = {
  input: UnpromoteProjectInput;
};

export type MutationUpdateBrandArgs = {
  input: UpdateBrandInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};

export type MutationUpdateTagCategoryArgs = {
  input: UpdateTagCategoryInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename: 'Project';
  authors?: Maybe<Scalars['String']>;
  brand: Brand;
  createdAt: Scalars['ISO8601DateTime'];
  currentUserCanDelete: Scalars['Boolean'];
  currentUserCanDeleteFiles: Scalars['Boolean'];
  currentUserCanEdit: Scalars['Boolean'];
  currentUserCanUploadFiles: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lengthQuantity?: Maybe<Scalars['Int']>;
  lengthUnits?: Maybe<Scalars['String']>;
  license?: Maybe<License>;
  maxFacilitators?: Maybe<Scalars['Int']>;
  maxPlayers?: Maybe<Scalars['Int']>;
  minFacilitators?: Maybe<Scalars['Int']>;
  minPlayers?: Maybe<Scalars['Int']>;
  projectFiles: Array<ProjectFile>;
  projectLinks: Array<ProjectLink>;
  publicationYear?: Maybe<Scalars['Int']>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ProjectAttributes = {
  authors?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  lengthQuantity?: Maybe<Scalars['Int']>;
  lengthUnits?: Maybe<Scalars['String']>;
  licenseId?: Maybe<Scalars['ID']>;
  maxFacilitators?: Maybe<Scalars['Int']>;
  maxPlayers?: Maybe<Scalars['Int']>;
  minFacilitators?: Maybe<Scalars['Int']>;
  minPlayers?: Maybe<Scalars['Int']>;
  publicationYear?: Maybe<Scalars['Int']>;
  tagNames?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
};

/** The connection type for Project. */
export type ProjectConnection = {
  __typename: 'ProjectConnection';
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename: 'ProjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectFile = {
  __typename: 'ProjectFile';
  createdAt: Scalars['ISO8601DateTime'];
  filename: Scalars['String'];
  filepath: Scalars['String'];
  filesize: Scalars['Int'];
  filetype?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project: Project;
  updatedAt: Scalars['ISO8601DateTime'];
  uploaderId?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type ProjectLink = {
  __typename: 'ProjectLink';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  position: Scalars['Int'];
  project: Project;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ProjectPromotion = {
  __typename: 'ProjectPromotion';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  project: Project;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** Autogenerated input type of PromoteProject */
export type PromoteProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
};

/** Autogenerated return type of PromoteProject */
export type PromoteProjectPayload = {
  __typename: 'PromoteProjectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectPromotion: ProjectPromotion;
};

export type Query = {
  __typename: 'Query';
  brand: Brand;
  brandMembership: BrandMembership;
  brands: BrandConnection;
  currentAbility: Ability;
  currentUser?: Maybe<User>;
  licenses: Array<License>;
  project: Project;
  projectPromotions: Array<ProjectPromotion>;
  projects: ProjectConnection;
  tag: Tag;
  tagByName?: Maybe<Tag>;
  tagCategories: TagCategoryConnection;
  tagCategory: TagCategory;
  tags: TagConnection;
};

export type QueryBrandArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type QueryBrandMembershipArgs = {
  brandId?: Maybe<Scalars['ID']>;
  brandSlug?: Maybe<Scalars['String']>;
  invitationToken: Scalars['String'];
};

export type QueryBrandsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  unapproved?: Maybe<Scalars['Boolean']>;
};

export type QueryProjectArgs = {
  id: Scalars['ID'];
};

export type QueryProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  authors?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['Int']>;
  facilitatorCountLowerBound?: Maybe<Scalars['Int']>;
  facilitatorCountUpperBound?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  playerCountLowerBound?: Maybe<Scalars['Int']>;
  playerCountUpperBound?: Maybe<Scalars['Int']>;
  queryString?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type QueryTagArgs = {
  id: Scalars['ID'];
};

export type QueryTagByNameArgs = {
  name?: Maybe<Scalars['String']>;
};

export type QueryTagCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  queryString?: Maybe<Scalars['String']>;
};

export type QueryTagCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryTagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  queryString?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename: 'Tag';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projects: ProjectConnection;
  tagCategory?: Maybe<TagCategory>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type TagProjectsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type TagAttributes = {
  name?: Maybe<Scalars['String']>;
  tagCategoryId?: Maybe<Scalars['ID']>;
};

export type TagCategory = {
  __typename: 'TagCategory';
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tags: Array<Tag>;
  textColor?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type TagCategoryAttributes = {
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** The connection type for TagCategory. */
export type TagCategoryConnection = {
  __typename: 'TagCategoryConnection';
  /** A list of edges. */
  edges: Array<TagCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TagCategoryEdge = {
  __typename: 'TagCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TagCategory;
};

/** The connection type for Tag. */
export type TagConnection = {
  __typename: 'TagConnection';
  /** A list of edges. */
  edges: Array<TagEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type TagEdge = {
  __typename: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Tag;
};

/** Autogenerated input type of UnpromoteProject */
export type UnpromoteProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectId: Scalars['ID'];
};

/** Autogenerated return type of UnpromoteProject */
export type UnpromoteProjectPayload = {
  __typename: 'UnpromoteProjectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  projectPromotion: ProjectPromotion;
};

/** Autogenerated input type of UpdateBrand */
export type UpdateBrandInput = {
  brandAttributes: BrandAttributes;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of UpdateBrand */
export type UpdateBrandPayload = {
  __typename: 'UpdateBrandPayload';
  brand: Brand;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateProject */
export type UpdateProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  projectAttributes: ProjectAttributes;
};

/** Autogenerated return type of UpdateProject */
export type UpdateProjectPayload = {
  __typename: 'UpdateProjectPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  project: Project;
};

/** Autogenerated input type of UpdateTagCategory */
export type UpdateTagCategoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  tagCategoryAttributes: TagCategoryAttributes;
};

/** Autogenerated return type of UpdateTagCategory */
export type UpdateTagCategoryPayload = {
  __typename: 'UpdateTagCategoryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tagCategory: TagCategory;
};

/** Autogenerated input type of UpdateTag */
export type UpdateTagInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  tagAttributes: TagAttributes;
};

/** Autogenerated return type of UpdateTag */
export type UpdateTagPayload = {
  __typename: 'UpdateTagPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  tag: Tag;
};

export type User = {
  __typename: 'User';
  admin?: Maybe<Scalars['Boolean']>;
  brandMemberships: Array<BrandMembership>;
  brands: Array<Brand>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  username: Scalars['String'];
};
