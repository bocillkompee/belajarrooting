import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"

const Navbar = () => {

    const navItems = [
        {name: "Home", path: '/'},
        {name: "About", path: '/about'},
        {name: "Posts", path: '/posts'}
    ]

    return (
        <nav className="flex items-center justify-between border-b px-8 py-4">
            <h1 className="text-xl font-bold">Mywebsite</h1>

            <div className="flex gap-2">
                {navItems.map((item) => (
                    <Button key={item.path} asChild variant={"ghost"}>
                        <NavLink to={item.path} className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>
                            {item.name}
                        </NavLink>
                    </Button>
                ))}
            </div>

        </nav>
    )
}

export default Navbar