"use client"

import { useState } from "react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  Baby,
  Skull,
  Wheat,
  HeartPulse,
  PawPrint,
  HeartHandshake,
  CalendarHeart,
  User,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react"


const items = [

  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Usuarios",
    icon: User,
    children: [
      { title: "Listar Usuarios", url: "/Dashboard/user" },
      { title: "Crear Usuario", url: "/Dashboard/user/form" },
    ],
  },

  {
    title: "Nacimientos",
    icon: Baby,
    children: [
      { title: "Listar Nacimientos", url: "/Dashboard/birth" },
      { title: "Crear Nacimiento", url: "/Dashboard/birth/form" },
    ],
  },

  {
    title: "Mortalidad",
    icon: Skull,
    children: [
      { title: "Listar Mortalidad", url: "/Dashboard/mortality" },
      { title: "Crear Mortalidad", url: "/Dashboard/mortality/form" },
    ],
  },


  {
    title: "Alimentación",
    icon: Wheat,
    children: [
      { title: "Listar Alimentación", url: "/Dashboard/feeding" },
      { title: "Crear Alimentación", url: "/Dashboard/feeding/form" },
    ],
  },


  {
    title: "Sanidad",
    icon: HeartPulse,
    children: [
      { title: "Listar Sanidad", url: "/Dashboard/health" },
      { title: "Crear Sanidad", url: "/Dashboard/health/form" },
    ],
  },


  {
    title: "Ovinos",
    icon: PawPrint,
    children: [
      { title: "Listar Ovinos", url: "/Dashboard/ovine" },
      { title: "Crear Ovino", url: "/Dashboard/ovine/form" },
    ],
  },


  {
    title: "Montas",
    icon: HeartHandshake,
    children: [
      { title: "Listar Montas", url: "/Dashboard/mounting" },
      { title: "Crear Monta", url: "/Dashboard/mounting/form" },
    ],
  },


  {
    title: "Partos",
    icon: CalendarHeart,
    children: [
      { title: "Listar Partos", url: "/Dashboard/delivery" },
      { title: "Crear Parto", url: "/Dashboard/delivery/form" },
    ],
  },


  {
    title: "Responsables",
    icon: User,
    children: [
      { title: "Listar Responsables", url: "/Dashboard/responsibles" },
      { title: "Crear Responsable", url: "/Dashboard/responsibles/form" },
    ],
  },

]



export function AppSidebar() {


  const [openMenu, setOpenMenu] = useState<string | null>(null)



  const handleLogout = () => {

    localStorage.removeItem("token")

    window.location.href = "/"

  }



  return (

    <Sidebar>


      <SidebarHeader>

        <h2 className="px-4 py-2 font-bold text-xl text-orange-500">
          OVIADSO
        </h2>

      </SidebarHeader>



      <SidebarContent>


        <SidebarGroup>


          <SidebarGroupContent>


            <SidebarMenu>


              {items.map((item) => (


                <SidebarMenuItem key={item.title}>


                  {item.children ? (


                    <>


                      <SidebarMenuButton

                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.title 
                            ? null 
                            : item.title
                          )
                        }

                      >


                        <item.icon className="h-4 w-4" />


                        <span className="flex-1">
                          {item.title}
                        </span>



                        {openMenu === item.title ? (

                          <ChevronDown size={16}/>

                        ) : (

                          <ChevronRight size={16}/>

                        )}


                      </SidebarMenuButton>



                      {openMenu === item.title && (


                        <div className="ml-8 mt-2 flex flex-col gap-2">


                          {item.children.map((child)=>(


                            <Link

                              key={child.title}

                              href={child.url}

                              className="
                              text-sm 
                              text-gray-700 
                              hover:text-orange-500
                              transition-colors
                              "

                            >

                              {child.title}

                            </Link>


                          ))}


                        </div>


                      )}



                    </>



                  ) : (


                    <SidebarMenuButton asChild>


                      <Link href={item.url}>


                        <item.icon className="h-4 w-4"/>


                        <span>
                          {item.title}
                        </span>


                      </Link>


                    </SidebarMenuButton>


                  )}


                </SidebarMenuItem>


              ))}



            </SidebarMenu>


          </SidebarGroupContent>


        </SidebarGroup>



      </SidebarContent>



      {/* BOTON SALIR */}


      <div className="p-4 border-t">


        <button

          onClick={handleLogout}

          className="
          flex
          items-center
          gap-2
          w-full
          p-2
          rounded-md
          text-red-600
          hover:bg-red-50
          transition
          "

        >


          <LogOut className="h-4 w-4"/>


          <span>
            Salir
          </span>


        </button>


      </div>



    </Sidebar>


  )

}