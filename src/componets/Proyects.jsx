import aerolab from "../assets/aerolab.png";
import tasks from "../assets/tasks.png";


function Proyects(){



    return<>
    <div className="conteinerProyects">
      <h3 style={{textAlign:"center",color:"white"}}>Proyectos </h3>
         <div className="tarjeta1">
              <div className="card card-aerolab">
                <a href="https://aerolab-changetienda.vercel.app/" target="_blank">
                <img className="card-img-top" alt="..." src={aerolab} />
                </a>
               
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#e14e1d" rx="60"/><path fill="white" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    {/* CSS */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="white" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>

                    {/* JS */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#f7df1e" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                    {/* React */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00d8ff" stroke-width="8.91" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g></svg>
                  {/* next */}
                  <svg xmlns="http://www.w3.org/2000/svg"  className="iconsExperience" width="1em" height="1em" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64"/><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"/><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"/><defs><linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>
                  </li>
                </ul>
                {/* <div className="card-body">
                  <a
                    href="https://github.com/enzo1antilipi/proyect-ricky.git"
                    className="card-link"
                    target="_blank"
                  > 
                     Github <BsArrowUpRight style={{ width: "12px" }} /> 
                   </a>
                  <a
                    href="https://steady-fox-bb124b.netlify.app/"
                    target="_blank"
                    className="card-link"
                  > 
                    Proyect <BsArrowUpRight style={{ width: "12px" }} />
                   </a>
                </div>*/}
              </div>
            </div>
        {/* <div className="cardd" style={{marginRight:"10px"}} >
            <div className="imgProyects">
                <img className="card-img-top" alt="..." src={aerolab}  />
                </div>
            <div className="card-body" style={{opacity:"1",background:""}}>
                <p className="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
             <div className="project-info" >
          <h3>Project Title</h3>
          <p>Details about the project will appear here when you hover over the card.</p>
            </div>
        </div> */}
        <div className="tarjeta2">
              <div className="card card-aerolab" style={{ marginTop:"10px" }} href="https://admi-tarea-front-7lzd.vercel.app/"  target="_blank">
                <a href="https://www.linkedin.com"  target="_blank">
                <img className="card-img-top" alt="..." src={tasks} href="https://www.linkedin.com"  target="_blank"/>
                </a>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#e14e1d" rx="60"/><path fill="white" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    {/* CSS */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="white" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>

                    {/* JS */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#f7df1e" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                    {/* React */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00d8ff" stroke-width="8.91" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g></svg>
                  {/* Node */}
                    <svg xmlns="http://www.w3.org/2000/svg"  className="iconsExperience" width="1em" height="1em" viewBox="0 0 128 128"><path fill="url(#deviconNodejs0)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/><path fill="url(#deviconNodejs1)" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"/><path fill="url(#deviconNodejs2)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/><defs><linearGradient id="deviconNodejs0" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop stop-color="#3f873f"/><stop offset=".33" stop-color="#3f8b3d"/><stop offset=".637" stop-color="#3e9638"/><stop offset=".934" stop-color="#3da92e"/><stop offset="1" stop-color="#3dae2b"/></linearGradient><linearGradient id="deviconNodejs1" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".138" stop-color="#3f873f"/><stop offset=".402" stop-color="#52a044"/><stop offset=".713" stop-color="#64b749"/><stop offset=".908" stop-color="#6abf4b"/></linearGradient><linearGradient id="deviconNodejs2" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".092" stop-color="#6abf4b"/><stop offset=".287" stop-color="#64b749"/><stop offset=".598" stop-color="#52a044"/><stop offset=".862" stop-color="#3f873f"/></linearGradient></defs></svg>
                {/* express */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperience" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#0f0f0f" d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"/></g></svg>
                  

                  </li>
                </ul>
                {/* <div className="card-body">
                  <a
                    href="https://github.com/enzo1antilipi/proyect-ricky.git"
                    className="card-link"
                    target="_blank"
                  > 
                     Github <BsArrowUpRight style={{ width: "12px" }} /> 
                   </a>
                  <a
                    href="https://steady-fox-bb124b.netlify.app/"
                    target="_blank"
                    className="card-link"
                  > 
                    Proyect <BsArrowUpRight style={{ width: "12px" }} />
                   </a>
                </div>*/}
              </div>
            </div>
        {/* <div className="cardd"  >
                <img className="card-img-top" alt="..." src={tasks} style={{borderRadius:"10px"}}/>
            <div className="card-body" style={{opacity:"1",background:""}}>
                <p className="card-text" style={{color:"black"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
             <div className="project-info" >
          <h3>Project Title</h3>
          <p>Details about the project will appear here when you hover over the card.</p>
            </div>
        </div>
             */}
    </div>

    
    </>
}



export default Proyects;