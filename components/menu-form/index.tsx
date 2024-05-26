import { ChildrenDto } from "@/types/member";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState } from "react";

const MenuForm = ({
  data,
  onSelectMember,
  setMember,
}: {
  data: ChildrenDto[];
  onSelectMember: (member: ChildrenDto) => void;
  setMember: (member: any) => void;
}) => {
  const handleItemExpansionToggle = (
    _: React.SyntheticEvent,
    itemId: string,
  ) => {    
    setMember((prev: any) => ({ memberSelect: prev.memberSelect, rootId: +itemId }));
  };
  const handleMapTreeItem = (members: ChildrenDto[]) => {
    if (!members?.length) return;
    return members.map((item) => {
      return (
        <TreeItem
          key={item?.id}
          itemId={item?.id?.toString()}
          label={`${item?.name} ${item?.date}`}
          onClick={(e) => {
            onSelectMember(item);
          }}
        >
          {handleMapTreeItem(item?.family?.children)}
        </TreeItem>
      );
    });
  };

  return (
    <SimpleTreeView
      multiSelect
      aria-label="file system navigator"
      onItemExpansionToggle={handleItemExpansionToggle}
      sx={{
        color: "black",
        height: 200,
        flexGrow: 1,
        width: "100%",
        overflowY: "auto",
      }}
    >
      {handleMapTreeItem(data)}
    </SimpleTreeView>
  );
};

export default MenuForm;
