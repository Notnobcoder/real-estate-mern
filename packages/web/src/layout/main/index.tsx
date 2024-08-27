import Footer from "../footer"
import Navbar from "../navbar"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-4">
      <Navbar />
      {children}
      <Footer />
    </div>

  )
}
