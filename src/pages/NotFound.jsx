
const NotFound = ()=> {
    return(
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 className="text-4xl font-bold text-red-600">404 - Not Found</h1>
        <p className="tracking-[5px] font-semibold">The page you are looking for does not exist.</p>
      </div>
    )
}

export default NotFound;