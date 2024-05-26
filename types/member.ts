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
  id: number;
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
  id: number;
  type: string;
  husband: HusbandType;
  wife: WifeType;
  exWife?: WifeType;
  children: ChildrenDto[] | [];
}

export type TypeMember = "husband" | "wife" | "exWife" | "children";
