# Rapha Media Query

<h3 align="center">Beautiful media queries for styled-components</h3>

[![MIT License][license-image]][license-url]

## Installation

Using [npm](https://www.npmjs.com/):

```console
npm i @rapharacing/media-query --save
```

Using [Yarn](https://yarnpkg.com/):

```console
yarn add @rapharacing/media-query
```

## Breakpoints

Default breakpoints

```javascript
{
  small: '30em', // 480px
  medium: '48em', // 768px
  large: '62em' // 992px,
  xl: '75em' // 1200px
}
```

## Example

If the project supports ECMAScript Modules, you can use the `import` syntax

```js
import mq from "@rapharacing/media-query";

const Example = styled.div`
    display: flex;
    flex-direction: column;

    ${mq.md`
        flex-direction: row;
    `};
`;
```

Will generate the following css

```css

.example {
    display: flex;
    flex-direction: column;

    @media (min-width: 48em) {
        flex-direction: row;
    }
}
```

## License

Media query is freely distributable under the terms of the [MIT license](https://github.com/rapharacing/design-tokens/blob/develop/Licence).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/moment/moment/blob/develop/LICENSE.md