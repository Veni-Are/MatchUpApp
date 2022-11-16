import React, { useEffect }  from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import {
  Button,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import type { LinkProps } from "react-router-dom";
import logo from './MatchUp.png';
import Component3 from './ui-components/Component3.jsx';


const App = ({ signOut }) => {
  useEffect(() => {
  }, []);

  return (
  <View className="App">
    <div>
        <div class="logo">
            <img src= {logo} alt="application logo"/>
        </div>
        <div class="logout">
            <Button onClick={signOut}>Sign Out</Button>
        </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sports" element={<Sports />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  </View>
  );
}


function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul class="nav-list">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/sports">Sports</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
          <li>
            <CustomLink to="/faq">FAQ</CustomLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Sports() {
  return (
    <div>
    <Component3 />
    </div>
  );
}

function Contact() {
  return (
    <div>
    <h1>Mail us on support@matchup.com</h1>
    </div>
  );
}

function FAQ() {
  return (
    <div>
    <h1>Frequenty asked questions</h1>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default withAuthenticator(App);
