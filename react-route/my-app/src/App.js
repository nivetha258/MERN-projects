// import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";
import { useRoutes } from "react-router-dom";
import { Children } from "react";
import { useMemo, useEffect, useState, useRef } from "react";

function App() {
  const [value, setValue] = useState([10]);
  const [secvalue, setsecValue] = useState(null);
  let ref = useRef();

  let memoValue = useMemo(() => {
    console.log("memo", value);
    return value + 1
  }, [value]);

  useEffect(() => {
    console.log("effect");
  }, [memoValue]);

  console.log("app render");

  const add = () => {
    console.log("add");
    setValue([value[0]+1]);
  };

  // const route = useRoutes([
  //   {
  //     path:"/",
  //     element:<RootLayout/>,
  //     children : [
  //       {
  //         path:"/about",
  //         element:<Home/>,
  //         children:[

  //         ]
  //       }
  //     ]
  //   }
  // ])

  // return route

  return (
    <div className="App" style={{ display: "flex" }}>
      <input ref={ref}></input>
      <input onChange={(e) => setsecValue(e.target.value)}></input>
      <button onClick={add}>click</button>
      {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<RootLayout/>}>
                  <Route path="/home" element={<Home/>}>
                       <Route index element={<div>Home index</div>}></Route>  
                       <Route path=":id" element={<div>Homeeeeeeeeeee index</div>}></Route>  
                  </Route> 
                  <Route path="/about" element={<About/>}>
                       <Route index element={<div>About index</div>}></Route>  
                       <Route path="/about/contact" element={<Contact/>}></Route> 
                  </Route>                                    
              </Route>
              <Route path="/service" element={<Home/>}></Route>
              <Route path="*" element={<div>Not Found</div>}></Route>
          </Routes>
       </BrowserRouter>  */}
    </div>
  );
}

export default App;

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Rootlayout from './layouts/Rootlayout';
// import Home from './screens/Home';
// import About from './screens/About';
// import ContactLayout from './layouts/ContactLayout';
// import Mail from './screens/Mail';
// import Phone from './screens/Phone';
// import PageNotFound from './screens/PageNotFound';
// import CareersLayout from './layouts/CareersLayout';
// import Careers, { careerLoader } from './screens/Careers';
// import CareerError from './screens/CareerError';
// import CareerDetail, { jobDetailLoader } from './screens/CareerDetail';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path='/' element={<Rootlayout/>}>
//           <Route index element={<Home/>}/>
//           <Route path='about' element={<About/>}/>
//           <Route path='contact' element={<ContactLayout/>}>
//               <Route path='mail' element={<Mail/>}/>
//               <Route path='phone' element={<Phone/>}/>
//           </Route>
//           <Route path='careers' element={<CareersLayout/>}>
//             <Route index element={<Careers/>} loader={careerLoader} errorElement={<CareerError/>}/>
//             <Route path=':id' element={<CareerDetail/>} loader={jobDetailLoader} errorElement={<CareerError/>}/>
//           </Route>
//           <Route path='*' element={<PageNotFound/>}/>
//       </Route>
//   )
// )

// function App() {
//   return (
//     <RouterProvider router={router}/>
//   );
// }

// export default App;

//
// with desktop publishing software like Aldus PageMaker including versions
// of Lorem Ipsum.
// </Typography>

// <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',my:5,gap:10}}>
// <StyledLinkButton to='mail'>Mail Us</StyledLinkButton>
// <StyledLinkButton to='phone'>Call Us</StyledLinkButton>
// </Box>

// <Outlet/>

// </>
// )
// }

// export default ContactLayoutk
