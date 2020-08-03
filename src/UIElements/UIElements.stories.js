import React, { useState } from "react";
import { withInfo } from "@storybook/addon-info";
import { text, withKnobs } from "@storybook/addon-knobs";

import { Form } from "rsuite";

import {
  PageLoader as PageLoaderUI,
  Box as BoxUI,
  TextField as TextFieldUI,
} from "UIElements";

import "rsuite/dist/styles/rsuite-default.css";

export default {
  title: "NutriFit | UIElements",
  decorators: [
    withInfo({
      header: true,
      inline: false,
    }),
    withKnobs,
  ],
};

export const PageLoader = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <div>
        <p>Default</p>
        <div
          style={{
            width: 200,
            height: 150,
            border: "1px solid",
            background: "#a8df65",
            position: "relative",
          }}
        >
          <PageLoaderUI />
        </div>
      </div>
      <div>
        <p>with message prop</p>
        <div
          style={{
            width: 200,
            height: 150,
            border: "1px solid",
            background: "#a8df65",
            position: "relative",
          }}
        >
          <PageLoaderUI message={text("message", "Loading")} />
        </div>
      </div>
    </div>
  );
};

export const Box = () => {
  return (
    <div style={{ width: 300, margin: "20px auto" }}>
      <BoxUI>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum</p>
      </BoxUI>
    </div>
  );
};

export const TextField = () => {
  const [name, setName] = useState("");

  const handleChange = (value) => {
    setName(value);
  };

  return (
    <Form
      style={{
        margin: 30,
      }}
    >
      <TextFieldUI
        label="label"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <TextFieldUI name="otro" type="password" placeholder="password" />
    </Form>
  );
};
