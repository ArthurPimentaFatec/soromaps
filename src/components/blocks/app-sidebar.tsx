import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarSeparator } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { TargetIcon } from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar className="overflow-hidden">
            <SidebarHeader className="px-5">
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black p-1 rounded-md">
                        <TargetIcon color="#fff" size={20}/>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">Header</span>
                        <span className="font-normal text-muted-foreground text-xs">subtitle</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Grupo 1</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <Button>Rota 1</Button>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>

            </SidebarFooter>
        </Sidebar>
    )
}