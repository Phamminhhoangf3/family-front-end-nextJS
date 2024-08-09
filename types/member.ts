export type HusbandType = {
  tag: string;
  name: string;
  date: string;
  image: string;
};

export type WifeType = {
  tag: string;
  name: string;
  date: string;
  image: string;
};

export interface ChildrenDto {
  id: string;
  tag: string;
  type: string;
  title: string;
  name: string;
  date: string;
  image: string;
  family: FamilyDto;
  dad: string;
}

export interface FamilyDto {
  id: string;
  type: string;
  husband: ChildrenDto;
  wife: ChildrenDto;
  exWife?: ChildrenDto;
  children: ChildrenDto[] | [];
}

export type TypeMember = "husband" | "wife" | "exWife" | "children";
