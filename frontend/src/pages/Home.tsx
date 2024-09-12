import { Link } from "react-router-dom"

function Home() {
    return (
      <>
        <div className="hero bg-base-200 min-h-screen justify-content pb-40">
          <div className="hero-content flex-col lg:flex-row m-5">
  
  
            <div>
              <h1 className="text-5xl font-bold mt-5">Mini Essays</h1>
              <p className="py-6">
                A mini <i>...hehe</i> writing tool for focusing your thoughts.
                <br></br>
                To get a better understanding of a concept,
                <br></br>
                Break it down as if you were explaining it to someone else.
                <br></br>
              </p>
              <Link to ="./new" className="btn btn-primary">It's Go Time!</Link>
            </div>
            <div className="p-6">
              <div className="mockup-code relative">
                <pre data-prefix="1"><code>Welcome! Think of a topic.</code></pre>
                <pre data-prefix="2"><code>Breathe...</code></pre>
                <pre data-prefix="3" className="bg-success text-warning-content"><code>Write!</code></pre>
              </div>
              </div>
          </div>
        </div>
  
      </>
    )
  }
  
  export default Home
  