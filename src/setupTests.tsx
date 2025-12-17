/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import "jest-canvas-mock";
import failOnConsole from "jest-fail-on-console";
import crypto from "crypto";

/**
 * Makes the global.crypto.getRandomValues function available in Jest
 *
 * @see https://stackoverflow.com/a/63749793
 */
Object.defineProperty(global, "crypto", {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

/**
 * Mocks the DataTransfer class for testing as it is not available in JSDOM
 *
 * @note This only implements the underlying data structure and `files()` method
 * @see MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
 */
global.DataTransfer = class DataTransfer {
  items = null;

  constructor() {
    this.items = new (class {
      array: unknown[];

      constructor() {
        this.array = [];
      }

      add(file) {
        this.array.push(file);
      }

      get length() {
        return this.array.length;
      }
    })();
  }

  get files() {
    return this.items.array;
  }
} as typeof DataTransfer;

/**
 * Prevents the console.error and console.warn from silently failing
 * in tests by throwing an error when called
 */
failOnConsole({
  shouldFailOnWarn: true,
  shouldFailOnError: true,
});
