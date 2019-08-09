import { css } from 'styled-components';

import * as tokens from "@rapharacing/design-tokens";

/** @flow */

/**
 * @name mediaQUery
 * @category Common Helpers
 * 
 * use em in breakpoints to work properly cross-browser and support users
 * changing their browsers font-size: https://zellwk.com/blog/media-query-units/
 */

const sizes = {
    sm: tokens.breakpointSmall,
    md: tokens.breakpointMedium,
    lg: tokens.breakpointLarge,
    xl: tokens.breakpointExtraLarge
};

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `

    return acc
}, {});