import order from 'stylelint-order';
import scss from 'stylelint-scss';

export default {
  plugins: [order, scss, 'stylelint-declaration-strict-value'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'no-empty-source': null,
    'color-hex-length': 'short',
    'max-nesting-depth': 3,
    'order/properties-alphabetical-order': true,
    'scss/load-partial-extension': 'never',
    'scss/dollar-variable-pattern': '^[_a-z][a-zA-Z0-9-]+$',
    'scss/percent-placeholder-pattern': '^[_a-z][a-zA-Z0-9-]+$',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'webkit-input-placeholder',
          'moz-input-placeholder',
          'ms-input-placeholder',
          'input-placeholder',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['input-placeholder', 'moz-input-placeholder'],
      },
    ],
    'property-no-deprecated': [
      true,
      {
        ignoreProperties: ['clip'],
      },
    ],
    'scale-unlimited/declaration-strict-value': [
      ['/color/'],
      {
        ignoreValues: ['inherit', 'transparent', 'currentColor', 'none'],
        disableFix: false,
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.svg', 'node_modules/**', 'dist/**'],
};
