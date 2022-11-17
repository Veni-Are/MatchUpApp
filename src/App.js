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
import sportpage from './SportsImage.png';
import eventspage from './EventsPage.png';
import ComponentD from './ui-components/ComponentD.jsx';
import ComponentFAQ from './ui-components/ComponentFAQ.jsx';
import ComponentST from './ui-components/ComponentST.jsx';
import ComponentHome from './ui-components/ComponentHome.jsx';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";

const App = ({ signOut, user }) => {
  useEffect(() => {
  }, []);

  return (
  <View className="App">
    <div>
        <div class="logo">
            <img src= {logo} alt="application logo"/>
        </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sports" element={<Sports />} />
          <Route path="events" element={<Events />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  </View>
  );

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
        <div class="logout">
            <Button onClick={signOut}>Sign Out</Button>
        </div>
        <ul class="nav-list">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/sports">Find a Player</CustomLink>
          </li>
          <li>
            <CustomLink to="/events">Events</CustomLink>
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
}

function Home() {
  return (
    <div class="component">
        <ComponentHome />
    </div>
  );
}

function About() {
  return (
    <div class="component">
      <ComponentD />
    </div>
  );
}

function Sports() {
  return (
    <div class="component">
        <img src= {sportpage} alt="sportpage logo"/>
    </div>
  );
}

function Events() {
  return (
    <div class="component">
        <img src= {eventspage} alt="eventspage logo"/>
    </div>
  );
}

function Contact() {
  return (
    <div class="component">
            <ComponentST />
    </div>
  );
}

function FAQ() {
  return (
    <div class="component">
        <ComponentFAQ />
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

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});