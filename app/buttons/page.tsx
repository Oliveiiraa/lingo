import { Button } from "@/components/ui/button"

const Buttons = () => {
  return (
    <div className="flex flex-col max-w-[200px] p-2 space-y-4">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"secondaryOutline"}>secondary Outline</Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger Outline</Button>
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super Outline</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar Outline</Button>
    </div>
  )
}

export default Buttons