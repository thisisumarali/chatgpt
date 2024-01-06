"use client"
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { ArrowRight, Code2, ImageIcon, MessagesSquare, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessagesSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: '/conversation'
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image'
    },
    {
        label: "Code Generation",
        icon: Code2,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code'
    },
]
const Dashboard = () => {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center">
                    Discover the power of Ebrain AI
                </h1>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the best AI model in the world
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md ", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        
        </div>

    );
};
export default Dashboard