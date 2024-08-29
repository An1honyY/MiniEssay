import { Link } from "react-router-dom"

function Home() {
    return (
      <>
        <div className="hero bg-base-200 min-h-screen justify-content">
          <div className="hero-content flex-col lg:flex-row-reverse m-5">
  
              <div className="mockup-code relative bottom-10">
                <pre data-prefix="1"><code>Welcome! Think of a topic.</code></pre>
                <pre data-prefix="2"><code>Breathe...</code></pre>
                <pre data-prefix="3" className="bg-success text-warning-content"><code>Write!</code></pre>
              </div>
  
            <div>
              <h1 className="text-5xl font-bold mt-5">Mini Essays</h1>
              <p className="py-6">
                A simple writing tool that helps you focus your thoughts.
                <br></br>
                Break down concepts in your own words.
                <br></br>
                Find gaps in your understanding and fill them in.
              </p>
              <Link to ="./NewEssay" className="btn btn-primary">It's Go Time!</Link>
            </div>
          </div>
        </div>
  
      </>
    )
  }
  
  export default Home
  