// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { getSchemaList, insertSchemasInOptions } from "../src/extension";

// Defines a Mocha test suite to group tests of similar kind together
suite("Schema list test", () => {

    test('Schema list is array', () => {
        assert.equal(true, Array.isArray(getSchemaList()));
    });

    test('Schema list has objects', () => {
        assert.equal(getSchemaList().length, getSchemaList().filter(item => typeof item == "object").length);
    });

    test('Schemas is being inserted', () => {
        insertSchemasInOptions(getSchemaList()).then(() => {
            let options = vscode.workspace.getConfiguration('json').get('personalSchemas');
            assert.equal(Array.isArray(options) ? options.length : false, getSchemaList().length);
        });
    });
});
