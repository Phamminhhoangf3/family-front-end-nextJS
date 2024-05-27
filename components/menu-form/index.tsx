import { ChildrenDto } from "@/types/member";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState } from "react";

const MenuForm = ({
  data,
  onSelectMember,
  setMemberSelected,
}: {
  data: ChildrenDto[];
  onSelectMember: (member: ChildrenDto) => void;
  setMemberSelected: (handle: any) => void;
}) => {
  const handleMapTreeItem = (members: ChildrenDto[]) => {
    if (!members?.length) return;
    return members.map((item) => {
      return (
        <TreeItem
          key={item?.id}
          itemId={item?.id?.toString()}
          label={`${item?.name} ${item?.date}`}
          onClick={() => {
            onSelectMember(item);
          }}
        >
          {handleMapTreeItem(item?.family?.children)}
        </TreeItem>
      );
    });
  };

  const handleExpandedItemsChange = (
    _: React.SyntheticEvent,
    itemIds: string[]
  ) => {
    setMemberSelected((prev: any) => ({
      ...prev,
      idRoot: itemIds?.findLast((item) => item),
    }));
  };

  return (
    <SimpleTreeView
      multiSelect
      aria-label="file system navigator"
      onExpandedItemsChange={handleExpandedItemsChange}
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
