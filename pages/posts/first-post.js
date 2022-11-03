import httpAuthCheck from '../../util/httpAuthCheck'

export async function getServerSideProps(context) {
    const {req, res} = context
    await httpAuthCheck(req, res)
    console.log("Get server side props")
    console.log("User Agent " + req.headers["user-agent"])
    console.log("x-mudah-hd " + req.headers["x-mudah-hd"])
    console.log("x-user-token " + req.headers["x-user-token"])
    return {
      props: { 
        message: `Next.js is ayam`,
        saniUserAgent: req.headers["user-agent"] ?? "No agent",
        mudahHD: req.headers["x-mudah-hd"] ?? "No Mudah HD",
        userToken: req.headers["x-user-token"] ?? "No user token"
    }, // will be passed to the page component as props
    }
  }

export default function FirstPost(context) {
    console.log("hello")
    console.log(context)
    return (
        <div>
            <h1>User Agent: {context.saniUserAgent}</h1>
            <h1>Mudah HD: {context.mudahHD}</h1>
            <h1>User Token:{context.userToken}</h1>
        </div>
        
    );
}