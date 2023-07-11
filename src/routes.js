import React from "react";
import { Text, Reply, Button } from "@botonic/react";

export const routes = [
  {
    path: "initial",
    text: /hi/i,
    action: () => (
      <>
        <Text>Hello! Nice to meet you.</Text>
        <Text>
          How can I help you?
          <Button payload="banking">Banking</Button>
          <Button payload="education">Education</Button>
        </Text>
      </>
    ),
  },
  {
    path: "banking",
    payload: "banking",
    action: () => (
      <>
        <Text>What Type of bank account do you have ?</Text>
        <Text>
          <Button payload="saving">Saving</Button>
          <Button payload="current">Current</Button>
          <Button payload="business">Business</Button>
        </Text>
      </>
    ),
    childRoutes: [
      {
        path: "saving",
        payload: "saving",
        action: () => (
          <>
            <Text>Enter Your Account Number</Text>
          </>
        ),
      },
      {
        path: "current",
        payload: "current",
        action: () => (
          <>
            <Text>Enter Your Account Number</Text>
          </>
        ),
      },
      {
        path: "business",
        payload: "business",
        action: () => (
          <>
            <Text>Enter Your Account Number</Text>
          </>
        ),
      },
    ],
  },
  {
    path: "education",
    payload: "education",
    action: () => (
      <>
        <Text>What Type of school you are looking for ?</Text>
        <Text>
          <Button payload="primary">Primary</Button>
          <Button payload="secondary">Secondary</Button>
          <Button payload="degree">Degree</Button>
        </Text>
      </>
    ),
    childRoutes: [
      {
        path: "primary",
        payload: "primary",
        action: () => (
          <>
            <Text>Which Class ? </Text>
            <Reply>I</Reply>
            <Reply>II</Reply>
            <Reply>III</Reply>
            <Reply>IV</Reply>
            <Reply>V</Reply>
            <Reply>VI</Reply>
            <Reply>VII</Reply>
            <Reply>VIII</Reply>
            <Reply>IX</Reply>
            <Reply>X</Reply>
          </>
        ),
      },
      {
        path: "secondary",
        payload: "secondary",
        action: () => (
          <>
            <Text>Which Class ? </Text>
            <Reply>I</Reply>
            <Reply>II</Reply>
            <Reply>III</Reply>
            <Reply>IV</Reply>
            <Reply>V</Reply>
            <Reply>VI</Reply>
            <Reply>VII</Reply>
            <Reply>VIII</Reply>
            <Reply>IX</Reply>
            <Reply>X</Reply>
          </>
        ),
      },
      {
        path: "degree",
        payload: "degree",
        action: () => (
          <>
            <Text>Which Class ? </Text>
            <Reply>I</Reply>
            <Reply>II</Reply>
            <Reply>III</Reply>
            <Reply>IV</Reply>
            <Reply>V</Reply>
            <Reply>VI</Reply>
            <Reply>VII</Reply>
            <Reply>VIII</Reply>
            <Reply>IX</Reply>
            <Reply>X</Reply>
          </>
        ),
      },
    ],
  },
];
