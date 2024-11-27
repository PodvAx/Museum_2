module.exports = {
  extends: [
    '@mate-academy/stylelint-config',
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'prettier/prettier': true,
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          hasBlock: false,
        },
        'declarations',
        'at-rules',
        'rules',
      ],
      { disableFix: false },
    ],
    'order/properties-order': [
      [
        {
          groupName: 'Positioning',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'z-index',
            'position',
            'inset',
            'top',
            'right',
            'bottom',
            'left',
          ],
        },
        {
          groupName: 'Visibility',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: ['opacity', 'visibility', 'pointer-events', 'cursor'],
        },
        {
          groupName: 'Box Model',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'box-sizing',
            'display',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'overflow',
            'overflow-x',
            'overflow-y',
          ],
        },
        {
          groupName: 'Margins & Paddings',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'margin',
            'margin-inline',
            'margin-block',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-inline',
            'padding-block',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          groupName: 'Typography',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'line-height',
            'letter-spacing',
            'text-align',
            'text-transform',
            'text-decoration',
            'text-shadow',
            'color',
            'word-spacing',
          ],
        },
        {
          groupName: 'Grid Box',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',
          ],
        },
        {
          groupName: 'Flex Box',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'flex',
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'flex-basis',
            'flex-grow',
            'flex-shrink',
            'justify-content',
            'align-items',
            'align-content',
            'align-self',
            'order',
            'gap',
          ],
        },
        {
          groupName: 'Background and Images',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'object-fit',
            'object-position',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-attachment',
            'background-position',
          ],
        },
        {
          groupName: 'Borders and Shadows',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'box-shadow',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-style',
            'border-color',
            'border-radius',
          ],
        },
        {
          groupName: 'Masking',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'clip',
            'mask',
            'mask-image',
            'mask-mode',
            'mask-repeat',
            'mask-position',
            'mask-clip',
            'mask-size',
            'mask-origin',
            'mask-composite',
            'mask-type',
          ],
        },
        {
          groupName: 'Transforms and Transitions',
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
          properties: [
            'transform',
            'transform-origin',
            'transform-style',
            'perspective',
            'perspective-origin',
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-comment',
          'inside-single-line-block',
          'after-declaration',
        ],
      },
    ],
  },
};
