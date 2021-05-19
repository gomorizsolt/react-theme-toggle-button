# react-theme-toggle-button

[![NPM](https://img.shields.io/npm/v/react-theme-toggle-button.svg)](https://www.npmjs.com/package/react-theme-toggle-button) ![](https://github.com/gomorizsolt/react-theme-toggle-button/workflows/CI/badge.svg) ![](https://github.com/gomorizsolt/react-theme-toggle-button/workflows/Publish/badge.svg)

**Animated React component to invert the theme of React-based projects.**

Status and support
- &#x2714; stable
- &#x2714; supported
- &#x2716; no ongoing development

Credit goes to [Aaron Iker](https://codepen.io/aaroniker) - he's the creator of the *styles* of this [superb animated toggle button](https://codepen.io/aaroniker/pen/KGpXZo).

## Demo

![](media/demo.gif)

## Install

### npm

```bash
npm install --save react-theme-toggle-button
```

### yarn

```bash
yarn add react-theme-toggle-button
```

## Usage

```jsx
import React, { useState } from "react";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ToggleButton isDark={isDark} onChange={() => setIsDark(prevIsDark => !prevIsDark)} />
  )
}
```

Caveats:
- styles must be imported explicitly [for now](https://stackoverflow.com/a/57906016/9599137)

## Properties

Property | Description
:--- | :---
`isDark`|Boolean value to set the `aria-label` and `title` attributes according to the theme.
`onChange`|Function to fire when the button is toggled.
`invertedIconLogic`|if true, it will show the icon of the current mode e.g. if isDark=true it will show the moon instead of the sun. (defaults to false)
-----

## Styling

The package leverages CSS properties in order for you to tailor the colors to suit your needs.

```css
:root {
  --color-toggle-light: aqua;
  --color-toggle-dark: bisque;
}
```

Property | Default
:--- | :---
`--color-toggle-light`|`#eee`
`--color-toggle-dark`|`#000`
-----

## Development

Refer to https://github.com/transitive-bullshit/create-react-library#development.

Put simply, launch two terminal windows/tabs:

```bash
npm run dev:package
```

```bash
npm run dev:example
```

Changes made to any of the running instances will live-reload the underlying dev server.

## License

The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
