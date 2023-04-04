const baseUrl = process.env.NODE_ENV === "production" ? "https://unrevealpics.vercel.app" : "http://localhost:3000"
    // const baseUrl = process.env.NODE_ENV === 'production' ? "" : "http://localhost:3000"
console.log("The environment is ", process.env.NODE_ENV)
export default baseUrl;