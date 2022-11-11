import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import logo from './MatchUp.png';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Link from "next/link";

const App = ({ signOut }) => {
  useEffect(() => {
  }, []);

const newLink = (props) => {
    const {
        href, children, ...rest
    } = props;
    return (
        <Link href={href} {...rest}>
            <a href={href} style={
                {
                    width: 500,
                    color: "green"
                }}>
                {" "}
                {children}
            </a>
        </Link>
    );
};

  return (
    <View className="App">
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src= {logo}/>
                    </div>
                    <Dropdown title="Sports"  style={{ marginLeft: 80 }}>
                                    <Dropdown.Item as={newLink} href="https://www.geeksforgeeks.org/">
                                        Soccer
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        as={newLink} href="https://www.geeksforgeeks.org/">
                                        Tennis
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        as={newLink} href="https://www.geeksforgeeks.org/">
                                        Badminton
                                    </Dropdown.Item>
                    </Dropdown>
                    <li><a href="#aboutus">About US</a></li>
                    <li><a href="#FAQ">FAQ</a></li>
                    <li><a href="#ContactUS">Contact us</a></li>
                </ul>

                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};


export default withAuthenticator(App);