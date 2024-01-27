import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        // <div className="h-full relative ">
        //     {/* <div className="hidden h-full md:flex md:w-72 md:inset-y-0 md:flex-col md:fixed z-[80] bg-gray-900">
        //         <Sidebar />
        //     </div> */}

        // </div>
        <body>
            < ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <main className="">
                    <Navbar />
                    {children}
                </main>
            </ThemeProvider >
        </body >

    )
}

export default DashboardLayout
