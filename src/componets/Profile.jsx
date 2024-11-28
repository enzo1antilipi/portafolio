import fondo1 from "../assets/fondo2.jpg";


function Profile (){

    return<>
    <div className="container_profile" style={{display:"flex",marginTop:"100px"}}>
    <div className="information_profile">
        <h1 className="name">Enzo Antilipi</h1>
                <p className="subtitle_dev">Desarrollador de Software</p>
                <p>Estoy en el mundo IT hace casi 2 años con experiencia en diferentes Proyectos</p>
         <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#e14e1d" rx="60"/><path fill="white" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="white" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#f7df1e" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                    {/* React */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00d8ff" stroke-width="8.91" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g></svg>
                {/* Node */}
                <svg xmlns="http://www.w3.org/2000/svg"  className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 128 128"><path fill="url(#deviconNodejs0)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/><path fill="url(#deviconNodejs1)" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"/><path fill="url(#deviconNodejs2)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/><defs><linearGradient id="deviconNodejs0" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop stop-color="#3f873f"/><stop offset=".33" stop-color="#3f8b3d"/><stop offset=".637" stop-color="#3e9638"/><stop offset=".934" stop-color="#3da92e"/><stop offset="1" stop-color="#3dae2b"/></linearGradient><linearGradient id="deviconNodejs1" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".138" stop-color="#3f873f"/><stop offset=".402" stop-color="#52a044"/><stop offset=".713" stop-color="#64b749"/><stop offset=".908" stop-color="#6abf4b"/></linearGradient><linearGradient id="deviconNodejs2" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".092" stop-color="#6abf4b"/><stop offset=".287" stop-color="#64b749"/><stop offset=".598" stop-color="#52a044"/><stop offset=".862" stop-color="#3f873f"/></linearGradient></defs></svg>
                {/* express */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#0f0f0f" d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"/></g></svg>
                
                                  
        </div>       
        <div>
                <svg xmlns="http://www.w3.org/2000/svg"  className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64"/><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"/><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"/><defs><linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>

                 {/* Python */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1.01em" height="1em" viewBox="0 0 256 255"><defs><linearGradient id="logosPython0" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%"><stop offset="0%" stop-color="#387eb8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="logosPython1" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%"><stop offset="0%" stop-color="#ffe052"/><stop offset="100%" stop-color="#ffc331"/></linearGradient></defs><path fill="url(#logosPython0)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"/><path fill="url(#logosPython1)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"/></svg>
                    {/* flask */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="white" d="M89.778 193.926c-7.238-5.693-14.96-11.151-20.235-18.837c-11.102-13.554-19.65-29.247-25.494-45.737c-3.532-10.724-4.741-22.22-9.295-32.53c-4.763-7.487.817-15.671 9.018-18.051c3.651-.701 10.072-4.145 2.322-1.684c-6.948 5.098-7.62-4.627-.496-5.243c4.862-.646 6.652-4.627 4.99-8.21c-5.22-3.404 12.656-7.145 3.662-12.223c-9.37-10.11 13.106-12.055 7.56-.575c-1.327 8.829 15.706-1.618 11.754 8.577c4.017 4.896 15.042 1.114 14.768 7.983c5.852.402 7.86 5.325 13.353 5.703c5.693 2.571 16.013 4.597 17.95 11.012c-5.648 4.472-18.726-9.236-19.355 3.141c1.706 18.285 1.272 37.121 7.962 54.533c3.164 10.543 10.835 18.843 17.762 27.054c6.629 8.042 15.607 13.704 24.758 18.471c8.028 3.786 16.682 6.297 25.431 7.872c3.548-2.714 9.813-12.804 15.349-8.549c.262 4.781-10.987 9.994-.53 9.465c6.141-1.852 10.4 4.75 15.457-1.205c4.659 5.518 19.364-3.526 16.049 7.754c-4.482 2.892-11.02 1.144-15.509 5.122c-7.403-3.697-13.296 3.309-21.491 2.423c-9.101 1.63-18.36 2.288-27.587 2.302c-15.137-1.196-30.595-1.7-44.995-6.97c-8.112-2.357-16.029-6.977-23.158-11.598m12.784 5.539c7.921 3.426 15.667 7.036 24.348 8.125c13.773 1.916 27.996 4.862 41.818 2.175c-6.256-2.825-12.723 1.1-18.956-2.02c-7.474 1.608-15.496-.41-23.094-1.404c-8.642-3.849-17.967-6.495-26.059-11.492c-10.112-3.693 5.229 4.737 7.96 5.419c6.321 3.588-6.951-1.839-8.822-3.33c-5.294-2.97-5.969-2.349-.524.667c1.096.641 2.18 1.314 3.329 1.86m-15.073-10.652c7.676 2.844-.034-5.397-3.551-4.919c-1.559-2.703-5.954-4.411-2.853-5.864c-5.578 1.937-5.843-7.363-8.465-6.034c-5.9-1.863-2.296-8.464-9.325-12.517c-.642-4.271-6.983-7.975-9.006-14.417c-.893-3.298-7.164-12.77-3.312-3.955c3.28 8.486 9.051 15.753 13.854 23.011c3.73 6.911 8.133 14.134 14.925 18.446c2.29 2.196 4.5 5.561 7.733 6.249m-22.113-24.278c.268-1.159 1.404 2.509 0 0m31.306 27.687c1.7-.761-2.445-.959 0 0m4.167 1.52c-.432-2.099-1.903 1.173 0 0m5.215 2.175c2.483-2.364-3.827-1.49 0 0m8.94 4.983c1.509-2.231-4.83-.842 0 0m-17.166-11.967c3.856-2.495-4.982-.034 0 0m3.912 1.951c-.109-1.319-1.394.591 0 0m19.556 12.206c3.143 1.984 18.357 4.348 8.831.813c-1.594.336-17.665-4.545-8.831-.813m-31.045-24.179c-.306-1.323-4.88-1.46 0 0m9.104 5.306c2.369-1.652-4.918-1.275 0 0m7.657 4.695c3.4-1.282-5.515-1.288 0 0m-20.466-14.035c3.69 2.829 14.877.362 5.65-1.689c-4.2-2.239-13.666-3.771-7.214 1.35zm25.653 15.656c1.536-2.618-6.444-1.495 0 0m-7.795-6.195c9.02 2.552-7.585-5.704-2.226-.939l1.188.538zm15.628 9.033c8.543.082-7.716-1.178 0 0m-36.773-23.437c-.333-1.591-2.108.134 0 0m51.223 31.543c.228-2.874-2.787 2.138 0 0m-36.644-22.615c-.517-1.513-2.67-.062 0 0m-13.768-9.926c4.904-.295-6.715-2.161 0 0m-16.31-10.543c-.61-2.351-5.337-4.226 0 0m42.818 27.174c-.899-1.025-.423.224 0 0m26.651 16.355c-.085-1.566-1.451.592 0 0m-29.01-18.791c.48-2.017-4.182-.611 0 0m-19.855-12.583c3.649-.391-5.845-2.467 0 0m33.586 20.87c5.686-2.253-5.541-1.1 0 0m-17.47-11.859c6.553.845-7.797-4.457-1.438-.475zm22.774 14.003c6.118-3.658 4.101 8.564 10.38 1.032c6.193-4.522-5.349 5.591 2.284.807c5.52-3.692 13.673 1.75 18.824 3.525c3.704-.182 7.304 3.203 11.102 1.144c7.309-1.969-14.294-2.92-8.631-6.413c-6.689 1.946-11.63-2.321-14.921-6.605c-7.503-1.733-16.177-5.568-19.921-12.207c-1.527-2.493 2.205.351-1.318-3.724c-4.521-4.021-6.778-8.585-9.813-13.473c-3.626-1.934-4.048-7.627-4.414-.191c.028-4.693-4.378-7.852-5.453-6.539c-.019-4.519 4.715-2.254 1.401-5.598c-.713-4.684-3.062-9.566-3.768-14.855c-1.097-2.549-.155-8.009-3.744-2.238c-1.308 6.1-.434-7.495 1.599-3.012c2.67-4.575-.958-4.037-1.106-3.402c1.738-3.859 1.1-9.334-.454-7.246c.926-4.091 1.464-15.055-1.387-13.112c1.728-4.278 3.277-19.575-4.224-13.743c-3.04.043-8.303 1.104-10.792 2.341c7.802 4.3-.784 1.553-3.96.87c-.414 3.98-3.56 2.258-7.49 2.297c6.277.777-3.056 6.42-6.657 4.228c-4.677 2.235 4.036 7.814.093 9.539c.485 2.601-7.164-.939-6.563 5.067c-4.54-1.91-.625 7.124 1.646 4.069c7.722 2.09 5.436 6.854 5.633 11.38c-1.259 2.638-6.212-6.199-1.104-5.789c-4.03-6.547-4.458-2.367-7.807.675c-.779.22 8.543 4.327 2.693 6.358c5.146.794 5.293 5.297 6.34 8.147c3.094 3.222 2.46-3.557 6.162.314c-2.342-3.449-12.406-9.719-4.303-7.708c-.043-3.472-1.466-6.271 1.017-6.203c2.458-4.452-2.575 10.977 2.966 5.319c1.534-.67 1.914-4.458 4.672.357c4.004 3.94 1.446 6.795-4.203 3.187c1.01 3.429 7.557 4.654 6.327 10.016c1.304 4.715 3.129 2.979 4.719 2.706c1.248 4.582 1.956 1.213 2.015-.968c5.713 1.223 4.375 4.6 6.162 6.959c3.936 1.777-5.634-12.044 1.124-4.156c7.11 6.42 2.666 9.1-3.714 8.071c4.038-.326 5.34 5.46 10.392 5.257c4.606 2.191 7.725 10.608-.215 7.104c-2.754-2.483-12.5-5.546-4.54-.823c7.352 3.404 13.191 5.441 20.282 9.714c5.074 3.623 7.266 7.772 9.19 8.593c-4.265 2.037-12.853-1.626-6.476-2.749c-3.977-.724-8.451-2.736-4.641 2.22c3.239 2.705 11.477 2.418 12.954 2.724c-1.252 2.759-3.4 2.978.051 3.192c-3.85 2.052 1.234 2.369 1.591 3.542m-7.873-22.234c-2.343-2.45-2.948-7.039-.416-3.046c1.298.521 4.16 7.498.416 3.046m25.641 16.287c1.461-.095.042 1.11 0 0m-29.34-22.294c-.09-3.704.847 2.856 0 0m-2.548-3.429c-2.947-5.693 3.714 1.612 0 0m-30.883-21.315c1.731-.462.852 2.961 0 0m24.579 13.322c1.063-3.992 1.249 3.35 0 0m-17.364-12.073c-1.224-2.203 2.56 2.066 0 0m14.902 4.777c-2.792-6.255 1.976-3.417.617 1.025zm-25.699-17.139c-1.248-2.051-3.312-8.072-2.648-9.91c.602 2.993 6.366 12.881 2.828 4.096c-3.91-7.364 4.673 2.391 5.556 4.227c.411 1.828-2.412-.499-.5 3.786c-3.488-4.878-2.059 2.694-5.236-2.199m-7.942-5.472c.327-4.771 1.818 3.271 0 0m3.573 1.229c1.704-3.6 2.89 5.02 0 0m-8.594-6.648c-2.957-2.938-5.097-5.646.138-1.823c2.017.079-4.481-6.16.486-1.981c5.223.952 2.58 8.564-.624 3.804m4.514-.118c1.717-1.701.912 1.676 0 0m2.778.891c-2.604-4.88 3.16 2.046 0 0m-5.522-5.277c-8.596-7.65 10.801 4 1.404 1.418zm24.629 14.31c-3.72-2.23-.986-15.702.282-6.488c3.617-1.17-.2 4.758 2.498 4.703c-.425 3.74-1.632 5.085-2.78 1.785m9.109 5.384c.365-4.06.768 2.776 0 0m-1.582-1.564c.41-1.734.042 2.043 0 0m-30.47-20.644c-5.522-7.619 16.05 7.707 3.537 1.933c-1.307-.342-2.88-.464-3.537-1.933m17.542 9.301c-.522-6.415 1.167 1.063 0 0m13.319 8.544c1.03-3.655.077 2.417 0 0m-30.015-20.753c3.282-.702 13.602 5.765 4.125 1.847c-1.053-1.165-3.298-.636-4.125-1.847m28.185 14.048c.35-6.56 1.959-3.919.012.939zm-25.742-16.33c1.338-1.962-3.55-8.87.705-2.478c1.838 1.461 5.322 2.447 2.246 3.062c4.838 4.268-1.18 1.156-2.95-.584m24.348 14.281c.924-7.473.815 4.378 0 0M69.67 99.463c1.02-.437.539 1.361 0 0m6.35 3.78c1.635-3.43 3.015 3.825 0 0m17.914 9.965c-.017-1.317.338 1.916 0 0m-1.037-2.297c-2.487-6.134 2.313 3.248 0 0m-1.527-4.022c-.417-2.535 1.418 3.184 0 0m2.485-4.039c-1.707-3.007 2.154-13.25 2.585-6.897c-1.8 4.95-.52 7.719.737 1.08c2.32-5.226-.501 10.311-3.322 5.817m2.553-15.234c.744-.913.165 1.1 0 0m-4.264 84.022c-1.011-.883.127.562 0 0m8.784 4.444c4.886 1.253 4.861-.761.445-1.359c-2.375-2.21-9.87-4.553-3.162-.274c.445 1.125 1.848 1.099 2.717 1.633M83.58 164.559c2.692 2.007 10.14 5.689 3.835.764c2.125-2.47-4.069-3.784-2.014-5.436c-5.227-3.198-4.123-2.914-.462-2.813c-6.28-2.808.907-2.598.569-4.036c-2.422-.479-12.03-4.271-6.378.311c-5.746-2.929-1.37 1.092-3.106.667c-5.875-1.603 5.233 4.474-.933 2.966c3.37 2.671 9.073 6.842 1.425 2.827c-1.008 1.45 5.473 3.649 7.064 4.75m9.187 5.278c11.171 3.599-5.477-4.398 0 0m47.029 28.49c.144-2.216-1.526 1.891 0 0m4.834 2.035c2.577-2.498.105 3.978 4.271-.612c.045-3.285-.129-5.226-4.787-1.235c-1.284.712-1.857 3.74.516 1.847M67.9 152.174c-.792-3.112-5.548-3.096 0 0m5.161 3.382c-1.916-3.178-6.839-2.877 0 0m29.364 17.709c2.867 2.546 13.168 1.868 3.483.313c-1.435-2.121-9.109-1.61-3.483-.313m40.367 24.929c4.412-3.702-4.276 1.652 0 0m9.176 6.306c.028-1.188-1.901.521 0 0m.015-1.663c4.886-5.177-4.735.306 0 0m-96.778-61.292c-4.165-5.942-2.59-8.613-6.605-13.464c-.76-3.71-6.89-12.13-3.17-3.21c3.406 5.216 4.419 13.293 9.775 16.674m95.245 59.646c8.989-5.81-3.69-2.531 0 0m6.862 2.689c4.502-3.866-2.847-.809 0 0M66.37 145.606c1.288-1.917-3.328-.246 0 0m89.509 56.438c4.359-2.81-1.004-2.379-.79.259zM96.725 164.76c-.15-1.898-2.301.161 0 0m3.656 2.103c-1.162-2.349-1.786.369 0 0m62.491 37.08c5.584-4.028-3.385-.771-1.172.763zm-2.138-1.033c4.549-3.812-4.803 1.689 0 0m10.925 7.275c3.054-2.045-3.711-.662 0 0m-102.49-65.962c4.095.918 16.361 10.083 9.125.634c-3.707-1.097-1.484-10.157-5.264-8.553c2.537 4.239 2.087 6.043-3.24 3.371c-6.696-3.269-3.763 1.619-2.455 2.967c-1.783.405 2.36 1.547 1.835 1.581m-18.651-14.73c.733-3.031-6.749-16.677-3.533-6.837c1.16 2.061 1.043 5.967 3.533 6.837m34.234 21.106c-2.108-1.763-.1-.249 0 0m5.192 1.209c-.003-3.212-5.739-1.304 0 0m44.987 28.36c-.858-2.194-3.392-.051 0 0m2.16 1.578c-.319-1.228-1.246.237 0 0m17.831 11.231c1.715-1.267-2.14-.161 0 0m-95.087-61.105c4.905-1.9-5.256-1.355 0 0m71.135 44.816c-.054-3.176-3.127.787 0 0m-73.073-49.333c3.15-1.064-2.915-.701 0 0m9.145 4.431c-.057-1.044-.967.395 0 0m111.551 68.404c4.052-.821 13.285 2.062 14.778-1.074c-4.921-.12-17.024-3.472-17.597.8l1.078.169zM69.949 132.518c.07-3.218-2.51-.12 0 0m-24.046-16.68c-1.093-6.132-4.154-.928 0 0m5.734 1.441c.07-1.969-5.249-1.772 0 0m3.277 1.609c-.948-.767-.742.97 0 0m20.619 13.227c.97-.891-2.299-.66 0 0M52.73 115.259c-.554-4.631-6.641-.694 0 0m-11.756-7.628c-.167-2.138-1.146.806 0 0m1.749-1.321c-.286-2.534-1.502.322 0 0m9.662 5.767c4.085-1.605-7.442-3.319-.835-.303zm129.308 79.872c2.615-2.397-3.323-.741 0 0m15.622 8.098c1.048-3.1-2.639.408 0 0M53.373 107.013c.43-2.998-3.24.595 0 0m-13.746-9.21c-.739-4.233-.638-11.664 6.425-9.153c-9.428 1.872 6.526 11.719 4.511 3.945c3.965.194 7.756-2.343 5.675 1.507c7.811-.863 13.227-7.636 20.772-6.687c5.877-.778 12.303-1.368 18.636-3.733c5.207-.376 10.22-5.982 7.366-9.305c-7.101-.6-14.535.288-22.384 1.848c-8.697 1.808-16.597 5.243-25.373 6.718c-8.554 1.149 1.72 3.165-.73 3.615c-4.463 1.548 5.323 2.593-.578 4.225c-3.645-.693-7.439-1.945-5.882-5.786c-8.194 1.063-15.393 4.464-8.92 12.802zM59.37 87.748c1.921-7.078 10.293 5.823 3.15.94c-.854-.639-2.257-1.16-3.15-.94m.374-3.432c2.773-2.065 1.474 1.158 0 0m3.52.056c.251-3.256 8.06 1.724 1.288 1.173zm4.817-1.936c1.759-2.055.505 1.828 0 0m1.232-.825c2.928-3.519 16.584-2.246 6.589-.343c-2.68-2.017-4.733 1.189-6.59.343m17.821-2.747c-.445-9.612 8.854 3.415 0 0m5.057-.028c1.849-4.844 7.174-1.944.855-.973c.138.515-.185 2.5-.855.973m-40.812 25.691c5.524-3.383-5.864-2.935 0 0m4.084 1.134c1.937-2.059-4.208-.835 0 0m-12.034-8.54c3.156-2.425-3.735-.922 0 0m163.107 102.04c.092-2.813-2.412 1.267 0 0m-16.573-11.311c.471-3.238-2.13.283 0 0m21.131 12.401c4.413.015 13.371-1.37 3.769-1.366c-1.507.235-8.779.185-3.769 1.366M59.056 103.676c3.571-.245 5.588-3.94-.69-3.727c-9.731-1.007 8.584 3.332-1.25 2.091c-1.32.875 1.863 1.878 1.94 1.636m3.145 1.592c-.373-2.293-1.104 1.219 0 0m3.731-9.949c1.55-1.922-2.144-.514 0 0M54.055 75.465c6.374-2.168 15.09-4.605 18.1 1.068c-3.063-3.687-1.236-7.316 1.656-1.926c4.091 5.454 6.139-2.48 3.478-4.31c3.032 3.768 6.48 5.548 2.03.239c4.837-5.818-9.683.761-12.983.695c-1.588.713-16.394 3.776-12.281 4.234m3.735-7.154c3.635-2.744 12.573 1.632 6.838-2.727c-.561-.495-12.56 3.305-6.838 2.727m13.253.547c4.254.109-1.835-5.715 3.234-3.076c-.832-2.72-5.902-3.23-8.38-4.316c-1.403 2.486 2.853 7.425 5.146 7.392m-10.929-12.03c1.472-1.995-2.58 1.011 0 0m5.417 1.296c6.856-.909-1.748-2.952-1.382-.073zm-10.114-7.913c-4.828-6.302 9.078 1.059 4.174-5.54c-4.128-3.286-8.095 3.7-4.174 5.54m61.952 33.369c2.214-3.925-9.141-5.29-1.492-1.391c.705.235.545 1.662 1.492 1.39"/></g></svg>
                    {/* vue */}
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1.16em" height="1em" viewBox="0 0 256 221"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
                   {/* Mongodb */}
                <svg xmlns="http://www.w3.org/2000/svg"  className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10aa50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"/><path fill="#b8c4c2" d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"/><path fill="#12924f" d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"/></g></svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="iconsExperienceProf" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path stroke="white" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M93.213 222.94L50 48l173.23 49.874z" clip-rule="evenodd"/><path stroke="white" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m136.583 72.942l21.591 87.496l-86.567-24.945z" clip-rule="evenodd"/><path stroke="white" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="m115.103 147.36l-10.724-43.465l43.008 12.346zM93.65 60.483l10.725 43.465l-43.008-12.346zm86.013 24.777l10.724 43.465l-43.008-12.346zm-64.555 62.13l10.724 43.465l-43.008-12.346z" clip-rule="evenodd"/></g></svg>


        </div>
    </div>
    <div className="container_img_profile">
                        <img  className="style_img_profile"  alt="..." src={fondo1} />      

    </div>
        
    </div>
    </>
}

export default Profile;